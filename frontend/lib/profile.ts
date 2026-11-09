import { User } from "firebase/auth";
import { FieldPath, doc, getDoc, runTransaction, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import { BADGES, BadgeId, UserStats, earnedBadgeIds, emptyStats } from "./badges";

export type UserProfile = {
  displayName: string;
  email: string | null;
  isAnonymous: boolean;
  createdAt?: unknown;
  stats: UserStats;
  badges: BadgeId[];
};

export function defaultProfile(user: User, displayName?: string): UserProfile {
  return {
    displayName: (displayName || user.displayName || "Jucător").trim().slice(0, 16) || "Jucător",
    email: user.email,
    isAnonymous: user.isAnonymous,
    stats: emptyStats(),
    badges: [],
  };
}

export async function ensureUserDoc(user: User, displayName?: string): Promise<UserProfile> {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const data = snap.data() as UserProfile;
    const stats = { ...emptyStats(), ...(data.stats ?? {}) };
    const nextName =
      (displayName || data.displayName || user.displayName || "Jucător").trim().slice(0, 16) || "Jucător";
    const profile: UserProfile = {
      displayName: nextName,
      email: user.email ?? data.email ?? null,
      isAnonymous: user.isAnonymous,
      createdAt: data.createdAt,
      stats,
      badges: Array.isArray(data.badges) ? data.badges : [],
    };
    const patch: Record<string, unknown> = {};
    if (displayName && profile.displayName !== data.displayName) patch.displayName = profile.displayName;
    if (profile.email !== (data.email ?? null)) patch.email = profile.email;
    if (profile.isAnonymous !== data.isAnonymous) patch.isAnonymous = profile.isAnonymous;
    if (Object.keys(patch).length) {
      await runTransaction(db, async (tx) => {
        const again = await tx.get(ref);
        if (!again.exists()) return;
        tx.update(ref, patch);
      });
    }
    return { ...profile, displayName: displayName ? profile.displayName : data.displayName || profile.displayName };
  }

  const profile = defaultProfile(user, displayName);
  await runTransaction(db, async (tx) => {
    const again = await tx.get(ref);
    if (again.exists()) return;
    tx.set(ref, { ...profile, createdAt: serverTimestamp() });
  });
  return profile;
}

export async function saveDisplayName(uid: string, displayName: string) {
  const name = displayName.trim().slice(0, 16);
  if (!name) throw new Error("Introdu un nume.");
  const ref = doc(db, "users", uid);
  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists()) throw new Error("Profilul nu există.");
    tx.update(ref, { displayName: name });
  });
  return name;
}

function mergeBadges(current: BadgeId[], stats: UserStats): BadgeId[] {
  const next = new Set([...current, ...earnedBadgeIds(stats)]);
  return BADGES.map((b) => b.id).filter((id) => next.has(id));
}

export async function recordGameHosted(uid: string) {
  const ref = doc(db, "users", uid);
  await runTransaction(db, async (tx) => {
    const snap = await tx.get(ref);
    const base = snap.exists()
      ? (snap.data() as UserProfile)
      : { displayName: "Jucător", email: null, isAnonymous: true, stats: emptyStats(), badges: [] as BadgeId[] };
    const stats = { ...emptyStats(), ...(base.stats ?? {}) };
    stats.gamesHosted += 1;
    const badges = mergeBadges(base.badges ?? [], stats);
    if (snap.exists()) {
      tx.update(ref, { stats, badges, isAnonymous: base.isAnonymous ?? true });
    } else {
      tx.set(ref, { ...base, stats, badges, createdAt: serverTimestamp() });
    }
  });
}

export async function recordGameFinish(opts: {
  roomCode: string;
  uid: string;
  won: boolean;
  territories: number;
  points: number;
}) {
  const gameRef = doc(db, "games", opts.roomCode);
  const userRef = doc(db, "users", opts.uid);

  await runTransaction(db, async (tx) => {
    const gameSnap = await tx.get(gameRef);
    const userSnap = await tx.get(userRef);
    if (!gameSnap.exists()) return;
    if (gameSnap.data().statsRecorded?.[opts.uid]) return;

    const base = userSnap.exists()
      ? (userSnap.data() as UserProfile)
      : { displayName: "Jucător", email: null, isAnonymous: true, stats: emptyStats(), badges: [] as BadgeId[] };
    const stats = { ...emptyStats(), ...(base.stats ?? {}) };
    stats.gamesPlayed += 1;
    if (opts.won) stats.gamesWon += 1;
    stats.territories += Math.max(0, opts.territories);
    stats.points += Math.max(0, opts.points);
    const badges = mergeBadges(base.badges ?? [], stats);

    tx.update(gameRef, new FieldPath("statsRecorded", opts.uid), true);
    if (userSnap.exists()) {
      tx.update(userRef, { stats, badges });
    } else {
      tx.set(userRef, { ...base, stats, badges, createdAt: serverTimestamp() });
    }
  });
}
