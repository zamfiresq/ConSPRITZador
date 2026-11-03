"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

type Player = {
  name: string;
  color: string;
  score: number;
  joinedAt?: any;
};

export default function LobbyPage() {
  const params = useParams();
  const roomCode = params?.roomCode as string;
  const router = useRouter();

  const [players, setPlayers] = useState<Record<string, Player>>({});
  const [status, setStatus] = useState("lobby");
  const [hostId, setHostId] = useState<string | null>(null);
  const [showCodePopup, setShowCodePopup] = useState(true);


  // Firestore realtime subscription
  useEffect(() => {
    const gameRef = doc(db, "games", roomCode);
    const unsubscribe = onSnapshot(gameRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setPlayers(data.players || {});
        setStatus(data.status || "lobby");
        setHostId(data.hostId || null);
      }
    });
    return () => unsubscribe();
  }, [roomCode]);

  // Auto-hide popup after longer time (10 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setShowCodePopup(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  const currentUserUid = auth.currentUser?.uid;
  const isHost = currentUserUid === hostId;

  const handleStartGame = async () => {
    if (!isHost) return;
    const gameRef = doc(db, "games", roomCode);
    await updateDoc(gameRef, { status: "running" }); // start game
  };

  // useEffect to redirect when game starts
    useEffect(() => {
    if (status === "running") {
      router.push(`/game/${roomCode}`);
    }
  }, [status, roomCode, router]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-4">Lobby – Room {roomCode}</h1>

      {showCodePopup && (
        <div className="mb-4 px-4 py-2 bg-zinc-800 rounded-xl shadow-md animate-fade-in">
          <p className="text-sm text-zinc-300">
            Share this code with your friends: <strong>{roomCode}</strong>
          </p>
        </div>
      )}

      <div className="w-full max-w-md bg-zinc-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Players in Lobby</h2>
        <ul className="space-y-2">
          {Object.entries(players).map(([uid, player]) => (
            <li key={uid} className="flex items-center gap-2">
              <span
                className={`w-4 h-4 rounded-full bg-${player.color}-400`}
              ></span>
              <span>{player.name}{uid === hostId ? " (Host)" : ""}</span>
            </li>
          ))}
        </ul>

        {isHost && (
          <button
            onClick={handleStartGame}
            className="mt-6 w-full py-3 bg-emerald-500 rounded-xl text-black font-semibold hover:bg-emerald-400 transition"
          >
            Start Game
          </button>
        )}

        {!isHost && (
          <p className="mt-6 text-sm text-zinc-400 text-center">
            Waiting for the host to start the game...
          </p>
        )}
      </div>
    </div>
  );
}