"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldPath, updateDoc as updateDocFs } from "firebase/firestore";
import { db, doc, getDoc, serverTimestamp, ensureUser } from "@/lib/firebase";
import { MAX_PLAYERS, Player, cleanName, nextFreeColor } from "@/lib/game-utils";
import ui from "../ui.module.css";

export default function JoinPage() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleJoin = async () => {
    const roomCode = code.trim().toUpperCase();
    if (!roomCode) {
      setError("Introdu codul camerei.");
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const user = await ensureUser();
      const uid = user.uid;

      const gameRef = doc(db, "games", roomCode);
      const snap = await getDoc(gameRef);
      if (!snap.exists()) {
        setError(`Camera ${roomCode} nu există.`);
        setLoading(false);
        return;
      }

      const data = snap.data();
      const players = (data.players ?? {}) as Record<string, Player>;

      // deja în cameră (refresh / revenire) – nu rescriem scorul
      if (players[uid]) {
        router.push(data.status === "running" ? `/game/${roomCode}` : `/lobby/${roomCode}`);
        return;
      }
      if (data.status !== "lobby") {
        setError("Jocul a început deja în această cameră.");
        setLoading(false);
        return;
      }
      if (Object.keys(players).length >= MAX_PLAYERS) {
        setError(`Camera este plină (maxim ${MAX_PLAYERS} jucători).`);
        setLoading(false);
        return;
      }

      const player: Player = {
        name: cleanName(name, "Jucător"),
        color: nextFreeColor(players),
        score: 0,
        joinedAt: serverTimestamp() as unknown as Player["joinedAt"],
      };
      await updateDocFs(gameRef, new FieldPath("players", uid), player);

      router.push(`/lobby/${roomCode}`);
    } catch (err) {
      console.error("Error joining game:", err);
      setError("Nu te-ai putut alătura. Verifică consola (F12) pentru detalii.");
      setLoading(false);
    }
  };

  return (
    <div className={ui.page}>
      <div className={ui.panel}>
        <div className={ui.brand}>
          Con<span>spritz</span>ädor
        </div>
        <div className={ui.title}>Intră într-o cameră</div>

        <label className={ui.label} htmlFor="code">
          Codul camerei
        </label>
        <input
          id="code"
          className={`${ui.input} ${ui.codeInput}`}
          value={code}
          maxLength={5}
          placeholder="XXXXX"
          autoCapitalize="characters"
          onChange={(e) => setCode(e.target.value.toUpperCase())}
          onKeyDown={(e) => e.key === "Enter" && !loading && handleJoin()}
        />

        <label className={ui.label} htmlFor="name">
          Numele tău
        </label>
        <input
          id="name"
          className={ui.input}
          value={name}
          maxLength={16}
          placeholder="Jucător"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !loading && handleJoin()}
        />

        {error && <div className={ui.error}>{error}</div>}

        <button className={ui.btn} onClick={handleJoin} disabled={loading}>
          {loading ? "Se conectează…" : "Intră"}
        </button>
        <Link href="/" className={ui.btnGhost}>
          ← Înapoi
        </Link>
      </div>
    </div>
  );
}
