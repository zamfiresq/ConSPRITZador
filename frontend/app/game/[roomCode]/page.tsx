"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FieldPath, addDoc, collection, doc, onSnapshot, runTransaction, serverTimestamp } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import BucharestMap3D from "@/components/BucharestMap3D";
import Chat from "@/components/Chat";
import { useTerritories } from "@/lib/territories";
import { Player, allowedTerritories, colorFor, orderPlayers } from "@/lib/game-utils";
import { recordGameFinish } from "@/lib/profile";
import styles from "./game.module.css";

const TURN_SECONDS = 10; // timp pentru a alege un teritoriu
const GRACE_SECONDS = 5; // după atât, gazda alege în locul unui jucător deconectat
const CLICK_AGAIN_CONFIRMS = true; // al doilea click pe teritoriul marcat = confirmare (la fel ca Enter)

type GameState = {
  hostId: string;
  players: Record<string, Player>;
  zones?: Record<string, string>; // idTeritoriu -> uidJucator
  currentTurn?: string;
  turnNumber?: number;
  round?: number;
  status: string;
};

export default function GamePage() {
  const params = useParams();
  const roomCode = params.roomCode as string;

  const [game, setGame] = useState<GameState | null>(null);
  const [uid, setUid] = useState<string>("");
  const [selected, setSelected] = useState<string | null>(null); // teritoriul "marcat" cu săgeata
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);
  const [remaining, setRemaining] = useState(TURN_SECONDS);

  const claimingRef = useRef(false);
  const firedFor = useRef(-1); // tura pentru care s-a declanșat deja alegerea automată
  const { territories } = useTerritories();

  // ───────────── date din Firestore ─────────────

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => setUid(user?.uid ?? ""));
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!roomCode) return;
    const unsub = onSnapshot(
      doc(db, "games", roomCode),
      (snap) => {
        setGame(snap.exists() ? (snap.data() as GameState) : null);
        setLoading(false);
      },
      (err) => {
        console.error("Firestore:", err);
        setLoading(false);
      }
    );
    return () => unsub();
  }, [roomCode]);

  // ───────────── valori derivate (sigure și cât timp `game` e încă null) ─────────────

  const ordered = useMemo(() => (game ? orderPlayers(game.players ?? {}, game.hostId) : []), [game]);

  const playersData = useMemo(
    () =>
      Object.fromEntries(
        ordered.map(([id, p], i) => [id, { name: p.name || "Jucător", color: colorFor(p, i) }])
      ),
    [ordered]
  );

  const zones = useMemo(() => game?.zones ?? {}, [game]);
  const turnUid = game ? game.currentTurn || game.hostId : "";
  const turnNumber = game?.turnNumber ?? 0;
  const myTurn = !!uid && turnUid === uid;
  const isHost = !!game && !!uid && game.hostId === uid;
  const finished = !!territories && territories.every((t) => !!zones[t.id]);

  // teritoriile pe care le pot alege acum (null = nu e rândul meu / fără restricții)
  const allowed = useMemo(
    () => (territories && myTurn && !finished ? allowedTerritories(territories, zones, uid) : null),
    [territories, myTurn, finished, zones, uid]
  );

  useEffect(() => {
    if (!finished || !uid || !game) return;
    const count = Object.values(zones).filter((z) => z === uid).length;
    const ranking = orderPlayers(game.players ?? {}, game.hostId).sort(
      ([a, pa], [b, pb]) =>
        Object.values(zones).filter((z) => z === b).length - Object.values(zones).filter((z) => z === a).length ||
        (pb.score ?? 0) - (pa.score ?? 0)
    );
    void recordGameFinish({
      roomCode,
      uid,
      won: ranking[0]?.[0] === uid,
      territories: count,
      points: game.players?.[uid]?.score ?? 0,
    }).catch((e) => console.error("Statistici:", e));
  }, [finished, uid, game, zones, roomCode]);

  // ───────────── alegerea unui teritoriu (tranzacție = fără dubluri) ─────────────

  const claim = useCallback(
    async (forUid: string, preferred: string | null, auto: boolean) => {
      if (!territories || claimingRef.current) return;
      claimingRef.current = true;
      setClaiming(true);

      let claimedId = "";
      let claimedBy = "";
      try {
        const ref = doc(db, "games", roomCode);
        await runTransaction(db, async (tx) => {
          const snap = await tx.get(ref);
          if (!snap.exists()) return;
          const g = snap.data() as GameState;

          // altcineva a ales deja (ex. gazda după timeout) sau nu mai e rândul lui
          if ((g.currentTurn || g.hostId) !== forUid) return;

          const free = allowedTerritories(territories, g.zones ?? {}, forUid);
          if (free.length === 0) return;

          let pick: string | null = preferred && free.includes(preferred) ? preferred : null;
          if (!pick) {
            if (!auto) return; // alegere manuală nepermisă (nu e vecin)
            pick = free[Math.floor(Math.random() * free.length)];
          }

          const uids = orderPlayers(g.players ?? {}, g.hostId).map(([id]) => id);
          const idx = uids.indexOf(forUid);
          if (idx === -1) return;

          tx.update(
            ref,
            new FieldPath("zones", pick), forUid,
            "currentTurn", uids[(idx + 1) % uids.length],
            "round", (g.round ?? 1) + (idx === uids.length - 1 ? 1 : 0),
            "turnNumber", (g.turnNumber ?? 0) + 1,
            new FieldPath("players", forUid, "score"), (g.players?.[forUid]?.score ?? 0) + 100
          );
          claimedId = pick;
          claimedBy = g.players?.[forUid]?.name ?? "Jucător";
        });

        if (claimedId) {
          setSelected(null);
          addDoc(collection(db, "games", roomCode, "messages"), {
            type: "system",
            uid: auth.currentUser?.uid ?? forUid,
            name: claimedBy,
            color: "",
            text: `${claimedBy} a cucerit ${claimedId}${auto ? " (ales automat)" : ""}.`,
            createdAt: serverTimestamp(),
          }).catch((e) => console.error("Mesaj de sistem:", e));
        }
      } catch (err) {
        console.error("Nu s-a putut cuceri teritoriul:", err);
      } finally {
        claimingRef.current = false;
        setClaiming(false);
      }
    },
    [territories, roomCode]
  );

  // cele mai recente valori, citite din intervale și din ascultătorul de tastatură
  const latest = useRef({
    myTurn,
    isHost,
    turnUid,
    selected,
    uid,
    allowed,
    claim,
  });
  useEffect(() => {
    latest.current = { myTurn, isHost, turnUid, selected, uid, allowed, claim };
  });

  const confirmPinned = useCallback(() => {
    const l = latest.current;
    if (l.myTurn && l.selected && l.allowed?.includes(l.selected)) void l.claim(l.uid, l.selected, false);
  }, []);

  // ───────────── cronometrul de 10 secunde ─────────────

  const hasGame = !!game;
  useEffect(() => {
    setSelected(null); // marcajul nu trece la tura următoare
  }, [turnNumber]);

  useEffect(() => {
    if (!hasGame || finished) return;
    const end = Date.now() + TURN_SECONDS * 1000;
    setRemaining(TURN_SECONDS);

    const id = setInterval(() => {
      const left = (end - Date.now()) / 1000;
      setRemaining(left);
      if (firedFor.current === turnNumber) return;

      const l = latest.current;
      if (left <= 0 && l.myTurn) {
        // timpul a expirat: se alege teritoriul marcat sau unul la întâmplare
        firedFor.current = turnNumber;
        void l.claim(l.uid, l.selected, true);
      } else if (left <= -GRACE_SECONDS && l.isHost && !l.myTurn) {
        // jucătorul curent nu a răspuns (deconectat?) => gazda alege în locul lui
        firedFor.current = turnNumber;
        void l.claim(l.turnUid, null, true);
      }
    }, 200);
    return () => clearInterval(id);
  }, [turnNumber, finished, hasGame]);

  // ───────────── Enter confirmă teritoriul marcat ─────────────

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return; // scrii în chat
      e.preventDefault();
      confirmPinned();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [confirmPinned]);

  const handleSelect = (d: { id: string }) => {
    if (CLICK_AGAIN_CONFIRMS && myTurn && selected === d.id) {
      confirmPinned();
      return;
    }
    setSelected(d.id);
  };

  // ───────────── ecrane de stare ─────────────

  if (loading) return <div className={styles.center}>Se încarcă jocul…</div>;
  if (!game) return <div className={styles.center}>Camera {roomCode} nu există.</div>;

  const turnName = playersData[turnUid]?.name ?? "—";
  const me = uid ? playersData[uid] : undefined;
  const territoryCount = (id: string) => Object.values(zones).filter((z) => z === id).length;

  const winner = finished
    ? [...ordered].sort(
        ([a, pa], [b, pb]) => territoryCount(b) - territoryCount(a) || (pb.score ?? 0) - (pa.score ?? 0)
      )[0]
    : null;

  const pct = Math.max(0, Math.min(100, (remaining / TURN_SECONDS) * 100));
  const urgent = remaining <= 3;

  // textul din panoul de acțiune
  const selectedOwner = selected ? zones[selected] : undefined;
  let info: string;
  if (finished) info = "Toate teritoriile au fost cucerite.";
  else if (!myTurn) info = "Așteaptă să-ți vină rândul.";
  else if (selected && allowed?.includes(selected)) info = "Enter sau click din nou pentru a confirma.";
  else if (selected && selectedOwner) info = `Cucerit de ${playersData[selectedOwner]?.name ?? "alt jucător"}.`;
  else if (territories && territories.some((t) => zones[t.id] === uid))
    info = "Alege un teritoriu liber, vecin cu ale tale.";
  else info = "Alege orice teritoriu liber.";

  const canConfirm = myTurn && !finished && !claiming && !!selected && !!allowed?.includes(selected);
  let btnText = "Așteaptă-ți rândul";
  if (finished) btnText = "Joc încheiat";
  else if (myTurn) btnText = canConfirm ? "Cucerește (Enter)" : "Alege un teritoriu";

  return (
    <div className={styles.root}>
      <div className={styles.mapArea}>
        <BucharestMap3D
          selectedDistrict={selected}
          onDistrictClick={handleSelect}
          allowedDistricts={allowed}
          zones={zones}
          playersData={playersData}
        />
      </div>

      <div className={styles.top}>
        <div className={styles.brand}>
          Con<span>spritz</span>ädor
          <span className={styles.room}>{roomCode}</span>
        </div>

        <div className={`${styles.turnBadge} ${myTurn && !finished ? styles.turnMine : ""}`}>
          <small>{finished ? "Final" : `Runda ${game.round ?? 1}`}</small>
          <strong>
            {finished
              ? `Câștigă ${winner ? playersData[winner[0]]?.name : "—"}`
              : myTurn
                ? "Rândul tău!"
                : `Rândul lui ${turnName}`}
          </strong>
          {!finished && (
            <div className={styles.timer}>
              <div className={`${styles.timerBar} ${urgent ? styles.timerUrgent : ""}`} style={{ width: `${pct}%` }} />
              <span>{Math.max(0, Math.ceil(remaining))}s</span>
            </div>
          )}
        </div>

        <Link href="/" className={styles.leave}>
          Ieși
        </Link>
      </div>

      {uid && game.players?.[uid] && (
        <Chat roomCode={roomCode} uid={uid} name={me?.name ?? "Jucător"} color={me?.color ?? "#ffffff"} variant="floating" />
      )}

      <div className={styles.bottom}>
        <div className={styles.cards}>
          {ordered.map(([id]) => {
            const p = playersData[id];
            const active = id === turnUid && !finished;
            return (
              <div key={id} className={`${styles.card} ${active ? styles.cardActive : ""}`}>
                <div className={styles.cardTab} style={{ background: p.color }}>
                  <span className={styles.cardName}>{p.name}</span>
                  {id === uid && <span className={styles.cardYou}>tu</span>}
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.score}>{game.players[id]?.score ?? 0}</div>
                  <div className={styles.meta}>{territoryCount(id)} teritorii</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.action}>
          <div className={styles.actionLabel}>Cucerire</div>
          <div className={styles.actionTitle}>{selected ?? "Niciun teritoriu"}</div>
          <div className={styles.actionInfo}>{info}</div>
          <button className={styles.btn} disabled={!canConfirm} onClick={confirmPinned}>
            {claiming ? "Se salvează…" : btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
