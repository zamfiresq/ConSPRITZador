"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { MAX_PLAYERS, Player, colorFor, orderPlayers } from "@/lib/game-utils";
import ui from "../../ui.module.css";

type Lobby = { players: Record<string, Player>; status: string; hostId: string };

export default function LobbyPage() {
  const params = useParams();
  const roomCode = params?.roomCode as string;
  const router = useRouter();

  const [lobby, setLobby] = useState<Lobby | null>(null);
  const [exists, setExists] = useState(true);
  const [uid, setUid] = useState("");
  const [starting, setStarting] = useState(false);
  const [copied, setCopied] = useState(false);

  // uid reactiv (auth se restaurează asincron)
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => setUid(u?.uid ?? ""));
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!roomCode) return;
    const unsub = onSnapshot(
      doc(db, "games", roomCode),
      (snap) => {
        if (!snap.exists()) return setExists(false);
        const d = snap.data();
        setExists(true);
        setLobby({ players: d.players ?? {}, status: d.status ?? "lobby", hostId: d.hostId });
      },
      (err) => console.error("Lobby snapshot:", err)
    );
    return () => unsub();
  }, [roomCode]);

  // toți jucătorii sunt duși în joc când gazda pornește
  useEffect(() => {
    if (lobby?.status === "running") router.push(`/game/${roomCode}`);
  }, [lobby?.status, roomCode, router]);

  const ordered = useMemo(() => (lobby ? orderPlayers(lobby.players, lobby.hostId) : []), [lobby]);

  if (!exists) {
    return (
      <div className={ui.page}>
        <div className={ui.panel}>
          <div className={ui.brand}>Camera {roomCode} nu există</div>
          <Link href="/" className={ui.btnGhost}>
            ← Acasă
          </Link>
        </div>
      </div>
    );
  }
  if (!lobby) {
    return (
      <div className={ui.page}>
        <div className={ui.panel}>Se încarcă camera…</div>
      </div>
    );
  }

  const isHost = !!uid && uid === lobby.hostId;
  const isMember = !!uid && !!lobby.players[uid];

  const handleStart = async () => {
    if (!isHost || starting) return;
    setStarting(true);
    try {
      await updateDoc(doc(db, "games", roomCode), {
        status: "running",
        currentTurn: lobby.hostId,
        round: 1,
        zones: {},
      });
    } catch (e) {
      console.error("Start game:", e);
      setStarting(false);
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(roomCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const emptySlots = Math.max(0, MAX_PLAYERS - ordered.length);

  return (
    <div className={ui.page}>
      <div className={ui.panel}>
        <div className={ui.brand}>
          Con<span>spritz</span>ädor
        </div>
        <div className={ui.title}>Lobby</div>

        <div className={ui.bigCode}>{roomCode}</div>
        <div>
          <button className={ui.btnGhost} onClick={copyCode}>
            {copied ? "Copiat ✓" : "Copiază codul"}
          </button>
        </div>

        <ul className={ui.list}>
          {ordered.map(([id, p], i) => (
            <li key={id} className={`${ui.row} ${id === uid ? ui.rowMe : ""}`}>
              <span className={ui.dot} style={{ background: colorFor(p, i) }} />
              <span className={ui.rowName}>{p.name}</span>
              {id === lobby.hostId && <span className={ui.tag}>gazdă</span>}
              {id === uid && <span className={ui.tag}>tu</span>}
            </li>
          ))}
          {Array.from({ length: emptySlots }).map((_, i) => (
            <li key={`empty-${i}`} className={ui.empty}>
              Se așteaptă un jucător…
            </li>
          ))}
        </ul>

        {!isMember && uid && (
          <div className={ui.error}>
            Nu ești în această cameră. <Link href="/join">Intră cu codul</Link>.
          </div>
        )}

        {isHost ? (
          <>
            <button className={ui.btn} onClick={handleStart} disabled={starting}>
              {starting ? "Se pornește…" : "Pornește jocul"}
            </button>
            <div className={ui.hint}>
              {ordered.length < MAX_PLAYERS
                ? `Recomandat ${MAX_PLAYERS} jucători (acum: ${ordered.length}).`
                : "Toți jucătorii sunt aici!"}
            </div>
          </>
        ) : (
          <div className={ui.hint}>Se așteaptă ca gazda să pornească jocul…</div>
        )}
      </div>
    </div>
  );
}
