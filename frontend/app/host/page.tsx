"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth, db, signInAnonymously, doc, setDoc, serverTimestamp } from "@/lib/firebase";

function generateRoomCode() {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
}

export default function HostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCreateGame = async () => {
    setLoading(true);
    setError(null);

    try {
      // Sign in anonymously
      const userCredential = await signInAnonymously(auth);
      const uid = userCredential.user.uid;

      // Generate room code
      const code = generateRoomCode();
      setRoomCode(code);

      // Create Firestore document
      await setDoc(doc(db, "games", code), {
        hostId: uid,
        status: "lobby",
        createdAt: serverTimestamp(),
        players: {
          [uid]: {
            name: "Host", // could be customized later
            color: "emerald",
            score: 0,
          }
        }
      });

      // Redirect to lobby
      router.push(`/lobby/${code}`);
    } catch (err) {
      console.error("Error creating game:", err);
      setError("Failed to create game. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center">
      <div className="w-full max-w-md text-center p-8 rounded-2xl bg-zinc-800 shadow-xl">
        <h1 className="text-3xl font-bold mb-6">Host Game</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {!roomCode ? (
          <button
            onClick={handleCreateGame}
            disabled={loading}
            className="w-full rounded-xl bg-emerald-500 py-4 text-lg font-semibold text-black hover:bg-emerald-400 transition disabled:opacity-50"
          >
            {loading ? "Creating game..." : "Create Game"}
          </button>
        ) : (
          <div className="space-y-4">
            <p className="text-zinc-300">Room code:</p>
            <div className="text-4xl font-extrabold tracking-widest text-emerald-400">
              {roomCode}
            </div>
            <p className="text-sm text-zinc-400">
              Share this code with your friends
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
