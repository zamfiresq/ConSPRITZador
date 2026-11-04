"use client";

import { useEffect, useState } from "react";

export interface Territory {
  id: string;
  name: string;
  sector: string;
  label: [number, number]; // punct interior pentru emblemă (x, y plan)
  neighbors: string[]; // id-urile teritoriilor vecine
  polygon: [number, number][];
}

export const DEFAULT_TERRITORIES_URL = "/data/territories.json";

// o singură încărcare pe fișier (harta și pagina de joc folosesc aceleași date)
const cache = new Map<string, Promise<Territory[]>>();

export function loadTerritories(url: string): Promise<Territory[]> {
  let p = cache.get(url);
  if (!p) {
    p = fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d) => d.territories as Territory[]);
    p.catch(() => cache.delete(url));
    cache.set(url, p);
  }
  return p;
}

export function useTerritories(url: string = DEFAULT_TERRITORIES_URL) {
  const [territories, setTerritories] = useState<Territory[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadTerritories(url)
      .then((t) => !cancelled && setTerritories(t))
      .catch((e) => !cancelled && setError(String(e)));
    return () => {
      cancelled = true;
    };
  }, [url]);

  return { territories, error };
}
