"""
Genereaza teritoriile pentru harta 3D din granitele OSM ale sectoarelor.

Moduri:
  sectors        (implicit) 6 teritorii = cele 6 sectoare, exact conturul OSM
                 -> frontend/public/data/territories.json
  neighborhoods  15 teritorii: fiecare sector impartit cu Voronoi (seed-uri = centrele
                 cartierelor din SECTORS), taiat pe conturul sectorului
                 -> frontend/public/data/territories-cartiere.json

Rulare: python3 scripts/build_territories.py [sectors|neighborhoods]
"""
import json
import math
import sys
from pathlib import Path

import numpy as np
from matplotlib.path import Path as MPath
from scipy.cluster.vq import kmeans2
from scipy.optimize import linear_sum_assignment

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "frontend/public/data/bucharest-districts.geojson"
MODE = sys.argv[1] if len(sys.argv) > 1 else "sectors"
DST = ROOT / ("frontend/public/data/territories.json" if MODE == "sectors"
              else "frontend/public/data/territories-cartiere.json")

CENTER_LNG, CENTER_LAT = 26.1025, 44.4268
KM_X = 111.32 * math.cos(math.radians(CENTER_LAT))
KM_Y = 110.57
WORLD_WIDTH = 18.0          # latimea hartii in unitati three.js
SIMPLIFY_KM = 0.015 if MODE != "sectors" else 0.004         # tolerenta RDP (15 m) - suficient de mica ca sa nu apara fante intre sectoare

# sector -> nume de cartiere (nr. de nume = nr. de teritorii din sector) cu (lat, lng) aproximativ
SECTORS = {
    "Sector 1": {"Băneasa": (44.505, 26.075), "Bucureștii Noi": (44.485, 26.035),
                 "Herăstrău": (44.472, 26.085), "Victoria": (44.452, 26.075)},
    "Sector 2": {"Colentina": (44.465, 26.140), "Pantelimon": (44.440, 26.180)},
    "Sector 3": {"Titan": (44.425, 26.170), "Vitan": (44.405, 26.135)},
    "Sector 4": {"Berceni": (44.375, 26.125), "Tineretului": (44.410, 26.100)},
    "Sector 5": {"Cotroceni": (44.432, 26.065), "Rahova": (44.395, 26.060)},
    "Sector 6": {"Militari": (44.435, 26.015), "Drumul Taberei": (44.420, 26.040),
                 "Crângași": (44.458, 26.050)},
}


def project(lng, lat):
    return ((lng - CENTER_LNG) * KM_X, (lat - CENTER_LAT) * KM_Y)


def rdp(pts, eps):
    pts = np.asarray(pts)
    if len(pts) < 3:
        return pts
    a, b = pts[0], pts[-1]
    ab = b - a
    n = np.hypot(*ab)
    v = pts - a
    d = np.abs(ab[0] * v[:, 1] - ab[1] * v[:, 0]) / n if n > 0 else np.hypot(v[:, 0], v[:, 1])
    i = int(np.argmax(d))
    if d[i] > eps:
        return np.vstack([rdp(pts[: i + 1], eps)[:-1], rdp(pts[i:], eps)])
    return np.vstack([a, b])


def area(p):
    x, y = p[:, 0], p[:, 1]
    return 0.5 * float(np.dot(x, np.roll(y, -1)) - np.dot(y, np.roll(x, -1)))


def clip_halfplane(poly, n, c):
    """pastreaza partea unde dot(p, n) <= c (Sutherland-Hodgman)"""
    out = []
    for i in range(len(poly)):
        p, q = poly[i], poly[(i + 1) % len(poly)]
        dp, dq = np.dot(p, n) - c, np.dot(q, n) - c
        if dp <= 0:
            out.append(p)
        if (dp < 0 < dq) or (dq < 0 < dp):
            t = dp / (dp - dq)
            out.append(p + t * (q - p))
    return np.array(out) if len(out) >= 3 else None


def label_point(poly):
    """punct interior cat mai departe de margini (aprox. pole of inaccessibility)"""
    mn, mx = poly.min(0), poly.max(0)
    gx, gy = np.meshgrid(np.linspace(mn[0], mx[0], 60), np.linspace(mn[1], mx[1], 60))
    g = np.c_[gx.ravel(), gy.ravel()]
    g = g[MPath(poly).contains_points(g)]
    a, b = poly, np.roll(poly, -1, axis=0)
    ab = b - a
    best, best_d = g[0], -1
    for p in g:
        t = np.clip(np.einsum("ij,ij->i", p - a, ab) / np.maximum(np.einsum("ij,ij->i", ab, ab), 1e-12), 0, 1)
        d = np.hypot(*(p - (a + ab * t[:, None])).T).min()
        if d > best_d:
            best, best_d = p, d
    return best


def main():
    gj = json.loads(SRC.read_text())
    sectors = {}
    for f in gj["features"]:
        name = f["properties"].get("name") or f["properties"]["tags"]["name"]
        ring = f["geometry"]["coordinates"][0]          # <- inelul exterior (bug-ul vechi lua [0][0])
        pts = np.array([project(lng, lat) for lng, lat in ring])
        if np.allclose(pts[0], pts[-1]):
            pts = pts[:-1]
        pts = rdp(np.vstack([pts, pts[:1]]), SIMPLIFY_KM)[:-1]
        if area(pts) < 0:
            pts = pts[::-1]                              # CCW
        sectors[name] = pts

    territories = []
    rng_seed = 7
    for sname, names in SECTORS.items():
        poly = sectors[sname]
        if MODE == "sectors":
            territories.append({"name": sname, "sector": sname, "poly": poly})
            continue
        k = len(names)
        mn, mx = poly.min(0), poly.max(0)
        gx, gy = np.meshgrid(np.linspace(mn[0], mx[0], 90), np.linspace(mn[1], mx[1], 90))
        g = np.c_[gx.ravel(), gy.ravel()]
        g = g[MPath(poly).contains_points(g)]
        np.random.seed(rng_seed)
        seeds, _ = kmeans2(g, k, minit="++", seed=rng_seed)

        # numele cartierelor -> seed-uri (potrivire optima dupa distanta)
        nm = list(names)
        npos = np.array([project(lng, lat) for lat, lng in names.values()])
        cost = np.hypot(*(seeds[:, None, :] - npos[None, :, :]).transpose(2, 0, 1))
        rows, cols = linear_sum_assignment(cost)

        for r, c in zip(rows, cols):
            cell = poly
            for j in range(k):
                if j == r:
                    continue
                n = seeds[j] - seeds[r]
                cc = np.dot((seeds[j] + seeds[r]) / 2, n)
                cell = clip_halfplane(cell, n, cc)
                if cell is None:
                    break
            if cell is None:
                sys.exit(f"celula goala in {sname}")
            territories.append({"name": nm[c], "sector": sname, "poly": cell})

    # centrare + scalare
    allp = np.vstack([t["poly"] for t in territories])
    mn, mx = allp.min(0), allp.max(0)
    ctr = (mn + mx) / 2
    s = WORLD_WIDTH / (mx[0] - mn[0])

    for t in territories:
        t["poly"] = (t["poly"] - ctr) * s

    # vecini: >= 2 varfuri aproape coincidente
    EPS = 0.06
    for i, a in enumerate(territories):
        a["neighbors"] = []
        for j, b in enumerate(territories):
            if i == j:
                continue
            d = np.hypot(*(a["poly"][:, None, :] - b["poly"][None, :, :]).transpose(2, 0, 1))
            # sectoare: contactele punctuale (ex. S1-S3 in centru) nu sunt granita reala
            if (d.min(1) < EPS).sum() >= (25 if MODE == "sectors" else 2):
                a["neighbors"].append(b["name"])

    out = []
    for t in territories:
        p = t["poly"]
        lp = label_point(p)
        out.append({
            "id": t["name"],
            "name": t["name"],
            "sector": t["sector"],
            "label": [round(float(lp[0]), 3), round(float(lp[1]), 3)],
            "area": round(abs(area(p)), 3),
            "neighbors": t["neighbors"],
            "polygon": [[round(float(x), 3), round(float(y), 3)] for x, y in p],
        })

    DST.write_text(json.dumps({"width": WORLD_WIDTH, "territories": out}, ensure_ascii=False))
    print(f"{len(out)} teritorii -> {DST} ({DST.stat().st_size // 1024} KB)")
    for t in out:
        print(f"  {t['name']:16s} {t['sector']}  pct={len(t['polygon']):3d}  vecini={t['neighbors']}")


if __name__ == "__main__":
    main()
