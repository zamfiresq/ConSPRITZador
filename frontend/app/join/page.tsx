"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db, signInAnonymously, doc, setDoc, serverTimestamp } from "@/lib/firebase";
import { getDoc, updateDoc } from "firebase/firestore";

export default function JoinPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleJoin = async () => {
    if (!code) return;
    setLoading(true);
    setError(null);

    try {
      // Sign in anonymously
      const userCredential = await signInAnonymously(auth);
      const uid = userCredential.user.uid;

      // Check if game exists
      const gameRef = doc(db, "games", code);
      const gameSnap = await getDoc(gameRef);

      if (!gameSnap.exists()) {
        setError("Room code not found.");
        setLoading(false);
        return;
      }

      // Add player to game
      const playerData = {
        name: "Player", // can be customized
        color: "sky",
        score: 0,
        joinedAt: serverTimestamp()
      };

      await updateDoc(gameRef, {
        [`players.${uid}`]: playerData
      });

      // Redirect to lobby
      router.push(`/lobby/${code}`);
    } catch (err) {
      console.error("Error joining game:", err);
      setError("Failed to join game. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Join Game</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        type="text"
        placeholder="Enter Room Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="mb-4 px-4 py-2 rounded-xl bg-zinc-800 text-white border border-zinc-600 w-64 text-center"
      />

      <button
        onClick={handleJoin}
        disabled={loading}
        className="w-64 py-3 bg-emerald-500 rounded-xl text-black font-semibold hover:bg-emerald-400 transition disabled:opacity-50"
      >
        {loading ? "Joining..." : "Join"}
      </button>
    </div>
  );
}