"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { db, doc, getDoc, setDoc, serverTimestamp, ensureUser } from "@/lib/firebase";
import { PALETTE, cleanName, generateRoomCode } from "@/lib/game-utils";
import { recordGameHosted, saveDisplayName } from "@/lib/profile";
import ui from "../ui.module.css";

export default function HostPage() {
  const router = useRouter();
  const { profile } = useAuth();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (profile?.displayName && !name) setName(profile.displayName);
  }, [profile?.displayName, name]);

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

      const display = cleanName(name, "Host");
      await saveDisplayName(uid, display).catch(() => undefined);
      await setDoc(doc(db, "games", code), {
        hostId: uid,
        status: "lobby",
        createdAt: serverTimestamp(),
        round: 1,
        currentTurn: uid,
        zones: {},
        players: {
          [uid]: {
            name: display,
            color: PALETTE[0],
            score: 0,
            joinedAt: serverTimestamp(),
          },
        },
      });
      await recordGameHosted(uid);

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
          Con<span>spritz</span>ädor
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
