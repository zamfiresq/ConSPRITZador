export type Player = {
  name: string;
  color: string;
  score: number;
  joinedAt?: { seconds: number } | null;
};

export const MAX_PLAYERS = 3;

// culori în stilul ConQUIZtador: portocaliu, verde, galben (+ rezerve)
export const PALETTE = ["#e0762b", "#2f9e4a", "#e3b72a", "#3b82f6", "#b455d6", "#d9446a"];

// camerele vechi au salvat culori ca "emerald"/"sky"
const NAMED_COLORS: Record<string, string> = {
  emerald: "#2f9e4a",
  sky: "#3b82f6",
  orange: "#e0762b",
  yellow: "#e3b72a",
  red: "#d9443a",
  purple: "#b455d6",
  pink: "#d9446a",
};

export function colorFor(player: Player, index = 0): string {
  if (player.color?.startsWith("#")) return player.color;
  return NAMED_COLORS[player.color] ?? PALETTE[index % PALETTE.length];
}

/** prima culoare din paletă care nu e deja luată */
export function nextFreeColor(players: Record<string, Player>): string {
  const used = new Set(Object.values(players).map((p) => p.color));
  return PALETTE.find((c) => !used.has(c)) ?? PALETTE[0];
}

/** gazda prima, apoi ordinea intrării în cameră */
export function orderPlayers(players: Record<string, Player>, hostId: string): [string, Player][] {
  return Object.entries(players ?? {}).sort(([a, pa], [b, pb]) => {
    if (a === hostId) return -1;
    if (b === hostId) return 1;
    return (pa.joinedAt?.seconds ?? 0) - (pb.joinedAt?.seconds ?? 0);
  });
}

// fără 0/O/1/I ca să nu se confunde când dictezi codul
const CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
export function generateRoomCode(len = 5): string {
  return Array.from({ length: len }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join("");
}

export function cleanName(raw: string, fallback: string): string {
  const n = raw.trim().slice(0, 16);
  return n || fallback;
}

/**
 * Teritoriile pe care le poate alege `uid` acum:
 *  - prima alegere: orice teritoriu liber;
 *  - apoi: doar teritorii libere VECINE cu ale lui;
 *  - dacă nu mai are niciun vecin liber, poate alege orice teritoriu liber.
 */
export function allowedTerritories(
  territories: { id: string; neighbors: string[] }[],
  zones: Record<string, string>,
  uid: string
): string[] {
  const free = territories.filter((t) => !zones[t.id]);
  const mine = new Set(territories.filter((t) => zones[t.id] === uid).map((t) => t.id));
  if (mine.size === 0) return free.map((t) => t.id);
  const adjacent = free.filter((t) => t.neighbors.some((n) => mine.has(n)));
  return (adjacent.length ? adjacent : free).map((t) => t.id);
}
