"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { db, doc, getDoc, setDoc, serverTimestamp, ensureUser } from "@/lib/firebase";
import { PALETTE, cleanName, generateRoomCode } from "@/lib/game-utils";
import ui from "../ui.module.css";

export default function HostPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCreateGame = async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await ensureUser();
      const uid = user.uid;

      // cod liber (evită coliziunile)
      let code = generateRoomCode();
      for (let i = 0; i < 5 && (await getDoc(doc(db, "games", code))).exists(); i++) {
        code = generateRoomCode();
      }

      await setDoc(doc(db, "games", code), {
        hostId: uid,
        status: "lobby",
        createdAt: serverTimestamp(),
        round: 1,
        currentTurn: uid,
        zones: {},
        players: {
          [uid]: {
            name: cleanName(name, "Host"),
            color: PALETTE[0],
            score: 0,
            joinedAt: serverTimestamp(),
          },
        },
      });

      router.push(`/lobby/${code}`);
    } catch (err) {
      console.error("Error creating game:", err);
      setError("Nu s-a putut crea camera. Verifică regulile Firestore și consola (F12).");
      setLoading(false);
    }
  };

  return (
    <div className={ui.page}>
      <div className={ui.panel}>
        <div className={ui.brand}>
          Con<span>SPRITZ</span>ador
        </div>
        <div className={ui.title}>Creează o cameră</div>

        <label className={ui.label} htmlFor="name">
          Numele tău
        </label>
        <input
          id="name"
          className={ui.input}
          value={name}
          maxLength={16}
          placeholder="Host"
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !loading && handleCreateGame()}
        />

        {error && <div className={ui.error}>{error}</div>}

        <button className={ui.btn} onClick={handleCreateGame} disabled={loading}>
          {loading ? "Se creează…" : "Creează camera"}
        </button>
        <Link href="/" className={ui.btnGhost}>
          ← Înapoi
        </Link>
      </div>
    </div>
  );
}
