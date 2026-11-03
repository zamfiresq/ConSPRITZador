// game layout

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, auth } from "@/lib/firebase";
import BucharestMap3D from "@/components/BucharestMap3D";


type Player = {
  id: string;
  name: string;
  color: string;
  score: number;
  uid: string;
};

type GameState = {
  players: Record<string, Player>;
  zones: Record<string, string>; // districtName -> playerUid
  currentTurn: string;
  round: number;
  status: 'waiting' | 'playing' | 'finished';
};

export default function GamePage() {
  const params = useParams();
  const roomCode = params.roomCode as string;
  
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [currentUserUid, setCurrentUserUid] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // obtinere user curent
  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUserUid(user.uid);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  // updateurile in timp real prin firebase
  useEffect(() => {
    if (!roomCode) return;

    const gameRef = doc(db, "games", roomCode);
    
    const unsubscribe = onSnapshot(gameRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as GameState;
        setGameState(data);
        setLoading(false);
      } else {
        console.error("Game room not found!");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [roomCode]);

  // handler pentru click pe district
  const handleDistrictClick = async (district: any) => {
    // Extrage numele districtului - poate fi în properties.tags.name sau properties.name
    const districtName = district?.properties?.tags?.name || district?.properties?.name;
    
    if (!gameState || !currentUserUid || !districtName) {
      console.log('Missing gameState, user, or district name');
      return;
    }
    
    // verificam daca districtul e deja luat
    if (gameState.zones[districtName]) {
      console.log("District already claimed!");
      return;
    }

    // randul jucatorului curent
    if (gameState.currentTurn !== currentUserUid) {
      console.log("Not your turn!");
      return;
    }

    setSelectedDistrict(districtName);

    try {
      const gameRef = doc(db, "games", roomCode);
      
      // update district din firebase
      await updateDoc(gameRef, {
        [`zones.${districtName}`]: currentUserUid,
        currentTurn: getNextPlayerUid(gameState, currentUserUid),
        [`players.${currentUserUid}.score`]: (gameState.players[currentUserUid]?.score || 0) + 100,
      });

    } catch (err) {
      console.error("Failed to claim district:", err);
    }
  };

  // helper pentru next player
  const getNextPlayerUid = (state: GameState, currentUid: string): string => {
    const playerUids = Object.keys(state.players);
    const currentIndex = playerUids.indexOf(currentUid);
    const nextIndex = (currentIndex + 1) % playerUids.length;
    return playerUids[nextIndex];
  };

  // obtinere jucatori pentru harta
  const getPlayersForMap = (): { id: string; name: string; position: [number, number] }[] => {
    if (!gameState) return [];

    return Object.values(gameState.players).map(player => ({
      id: player.uid,
      name: player.name,
      position: [44.4268 + (Math.random() * 0.02 - 0.01), 26.1025 + (Math.random() * 0.02 - 0.01)] as [number, number]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!gameState) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-red-400 text-xl">Game not found</div>
      </div>
    );
  }

  const currentPlayer = gameState.players[currentUserUid];
  const isMyTurn = gameState.currentTurn === currentUserUid;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="container mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-6 p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ConSPRITZador
            </h1>
            <p className="text-gray-400 mt-1">Room: <span className="font-mono text-cyan-300">{roomCode}</span></p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <div className="bg-gray-700/70 px-6 py-3 rounded-xl">
              <div className="text-cyan-300 text-sm">YOUR SCORE</div>
              <div className="text-3xl font-bold">{currentPlayer?.score || 0}</div>
            </div>
            
            <div className={`px-6 py-3 rounded-xl ${isMyTurn ? 'bg-green-600/70' : 'bg-red-600/70'}`}>
              <div className="text-sm">TURN STATUS</div>
              <div className="text-xl font-bold">
                {isMyTurn ? 'YOUR TURN!' : 'WAITING FOR YOUR TURN'}
              </div>
            </div>
          </div>
        </header>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Harta 3D */}
          <div className="lg:col-span-2">
            <BucharestMap3D
              onDistrictClick={handleDistrictClick}
              selectedDistrict={selectedDistrict}
              players={getPlayersForMap()}
              zones={gameState.zones || {}}
              playersData={Object.fromEntries(
                Object.entries(gameState.players || {}).map(([uid, player]: [string, any]) => [
                  uid,
                  { color: player.color || '#4d96ff', name: player.name || 'Player' }
                ])
              )}
            />
          </div>

          {/* Panoul drept */}
          <div className="space-y-6">
            {/* Panou afisare jucatori */}
            <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-cyan-400 mr-2">👥</span>
                Jucători în Cameră ({Object.keys(gameState.players).length})
              </h2>
                  <div className="space-y-3">
                  {Object.entries(gameState.players || {}).map(([uid, player]: [string, any]) => (
                    <div
                      key={uid}  // uid pentru key
                      className={`flex justify-between items-center p-3 rounded-lg ${
                        uid === currentUserUid 
                          ? 'bg-cyan-900/40 border border-cyan-700' 
                          : 'bg-gray-700/50'
                      } ${
                        gameState.currentTurn === uid ? 'ring-2 ring-yellow-400' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: player.color || '#4d96ff' }}
                        />
                        <span className={uid === currentUserUid ? 'font-bold' : ''}>
                          {player.name || "Jucător"} {uid === currentUserUid && '(Tu)'}
                        </span>
                      </div>
                      <div className="font-bold">{player.score || 0} pts</div>
                    </div>
                  ))}
                </div>
            </div>

            {/* Panou district selectat */}
            <div className="bg-gray-800/70 p-6 rounded-2xl">
              <h2 className="text-xl font-bold mb-4">SELECTED DISTRICT</h2>
              {selectedDistrict ? (
                <div className="animate-pulse">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-2">
                    {selectedDistrict}
                  </h3>
                  <div className="bg-cyan-900/30 p-4 rounded-lg mb-4">
                    <h4 className="font-bold mb-2">Întrebare:</h4>
                    <p className="text-lg">
                      "Cine a fost primul primar al acestui district?"
                    </p>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition">
                      Varianta A
                    </button>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition">
                      Varianta B
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">🗺️</div>
                  <p className="text-gray-400 italic">
                    Click to a district on the map to claim it!
                  </p>
                </div>
              )}
            </div>

            {/* Timer si runda - mock - implementare dinamica */}
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-2xl text-center">
              <div className="text-3xl font-bold mb-2">⏱️ 00:45</div>
              <div className="text-gray-300 mb-4">remaining time for round {gameState.round || 1}</div>
              <div className="text-xl font-bold">ROUND: {gameState.round || 1}</div>
            </div>
          </div>
        </div>

        {/* Chat + statistici */}
        <div className="mt-8 bg-gray-800/50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold mb-4">💬 Chat &amp; Log Joc</h3>
          <div className="h-32 overflow-y-auto bg-gray-900/50 p-4 rounded-lg">
            <p className="text-gray-400 text-sm">
              {currentPlayer?.name || "Player"} entered the room.<br/>
              Game started!<br/>
              It's {gameState.players[gameState.currentTurn]?.name || "Player"}'s turn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}