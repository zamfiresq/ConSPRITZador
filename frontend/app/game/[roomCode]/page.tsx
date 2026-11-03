"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { doc, onSnapshot, updateDoc, FieldPath } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import BucharestMap3D from "@/components/BucharestMap3D";
import { Player, colorFor, orderPlayers } from "@/lib/game-utils";
import styles from "./game.module.css";

type GameState = {
  hostId: string;
  players: Record<string, Player>;
  zones?: Record<string, string>; // numeTeritoriu -> uidJucator
  currentTurn?: string;
  round?: number;
  status: string;
};

export default function GamePage() {
  const params = useParams();
  const roomCode = params.roomCode as string;

  const [game, setGame] = useState<GameState | null>(null);
  const [uid, setUid] = useState<string>("");
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState(false);

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

  const ordered = useMemo(() => (game ? orderPlayers(game.players ?? {}, game.hostId) : []), [game]);

  const playersData = useMemo(
    () =>
      Object.fromEntries(
        ordered.map(([id, p], i) => [id, { name: p.name || "Jucător", color: colorFor(p, i) }])
      ),
    [ordered]
  );

  if (loading) return <div className={styles.center}>Se încarcă jocul…</div>;
  if (!game) return <div className={styles.center}>Camera {roomCode} nu există.</div>;

  const zones = game.zones ?? {};
  const turnUid = game.currentTurn || game.hostId; // camerele vechi nu au currentTurn
  const myTurn = !!uid && turnUid === uid;
  const turnName = playersData[turnUid]?.name ?? "—";
  const selectedOwner = selected ? zones[selected] : undefined;
  const canClaim = myTurn && !!selected && !selectedOwner && !claiming;

  const handleSelect = (d: { id: string }) => setSelected(d.id);

  const handleClaim = async () => {
    if (!canClaim || !selected) return;
    const uids = ordered.map(([id]) => id);
    const idx = uids.indexOf(uid);
    if (idx === -1) return;
    const next = uids[(idx + 1) % uids.length];
    const wrapped = idx === uids.length - 1;

    setClaiming(true);
    try {
      await updateDoc(
        doc(db, "games", roomCode),
        new FieldPath("zones", selected), uid,
        "currentTurn", next,
        "round", (game.round ?? 1) + (wrapped ? 1 : 0),
        new FieldPath("players", uid, "score"), (game.players[uid]?.score ?? 0) + 100
      );
      setSelected(null);
    } catch (err) {
      console.error("Nu s-a putut cuceri teritoriul:", err);
    } finally {
      setClaiming(false);
    }
  };

  const territoryCount = (id: string) => Object.values(zones).filter((z) => z === id).length;

  let info = "Click pe hartă pentru a alege un teritoriu.";
  if (selected) {
    info = selectedOwner
      ? `Cucerit de ${playersData[selectedOwner]?.name ?? "alt jucător"}.`
      : "Teritoriu liber.";
  }

  let btnText = "Așteaptă-ți rândul";
  if (myTurn) btnText = selected && !selectedOwner ? "Cucerește" : "Alege un teritoriu liber";

  return (
    <div className={styles.root}>
      <div className={styles.mapArea}>
        <BucharestMap3D
          selectedDistrict={selected}
          onDistrictClick={handleSelect}
          zones={zones}
          playersData={playersData}
        />
      </div>

      <div className={styles.top}>
        <div className={styles.brand}>
          Con<span>SPRITZ</span>ador
          <span className={styles.room}>{roomCode}</span>
        </div>

        <div className={`${styles.turnBadge} ${myTurn ? styles.turnMine : ""}`}>
          <small>Runda {game.round ?? 1}</small>
          <strong>{myTurn ? "Rândul tău!" : `Rândul lui ${turnName}`}</strong>
        </div>

        <Link href="/" className={styles.leave}>
          Ieși
        </Link>
      </div>

      <div className={styles.bottom}>
        <div className={styles.cards}>
          {ordered.map(([id]) => {
            const p = playersData[id];
            const active = id === turnUid;
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
          <button className={styles.btn} disabled={!canClaim} onClick={handleClaim}>
            {claiming ? "Se salvează…" : btnText}
          </button>
        </div>
      </div>
    </div>
  );
}
