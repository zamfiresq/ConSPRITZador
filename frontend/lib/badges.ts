export type BadgeId =
  | "prima-runda"
  | "prima-cucerire"
  | "cuceritor"
  | "hat-trick"
  | "primar"
  | "sectorist"
  | "stapanul-capitalei"
  | "gazda"
  | "spritz-master";

import type { IconType } from "react-icons";

export type BadgeDef = {
  id: BadgeId;
  name: string;
  description: string;
  icon: IconType;
};

export type UserStats = {
  gamesPlayed: number;
  gamesWon: number;
  gamesHosted: number;
  territories: number;
  points: number;
};

import {
  GiPartyPopper,
  GiCrossedSwords,
  GiMagicHat,
  GiBank,
  GiPin,
  GiModernCity,
  GiGlassShot,
} from "react-icons/gi";

import {
  FaGamepad
} from "react-icons/fa"

import {
  RiVipCrownFill
} from "react-icons/ri"

export const BADGES: BadgeDef[] = [
  { id: "prima-runda", name: "Prima rundă", description: "Joacă primul joc", icon: FaGamepad },
  { id: "prima-cucerire", name: "Prima cucerire", description: "Cucerește un teritoriu", icon: GiCrossedSwords },
  { id: "gazda", name: "Gazda petrecerii", description: "Creează o cameră", icon: GiPartyPopper },
  { id: "cuceritor", name: "Cuceritor", description: "Câștigă un joc", icon: RiVipCrownFill },
  { id: "hat-trick", name: "Hat-trick", description: "Câștigă 3 jocuri", icon: GiMagicHat },
  { id: "primar", name: "Primar General", description: "Câștigă 5 jocuri", icon: GiBank },
  { id: "sectorist", name: "Sectorist", description: "Cucerește 20 de teritorii", icon: GiPin },
  {
    id: "stapanul-capitalei",
    name: "Stăpânul Capitalei",
    description: "Cucerește 50 de teritorii",
    icon: GiModernCity,
  },
  { id: "spritz-master", name: "Spritz Master", description: "Joacă 100 de jocuri", icon: GiGlassShot },
];

export const BADGE_BY_ID = Object.fromEntries(BADGES.map((b) => [b.id, b])) as Record<BadgeId, BadgeDef>;

export function emptyStats(): UserStats {
  return { gamesPlayed: 0, gamesWon: 0, gamesHosted: 0, territories: 0, points: 0 };
}

export function earnedBadgeIds(stats: UserStats): BadgeId[] {
  const out: BadgeId[] = [];
  if (stats.gamesPlayed >= 1) out.push("prima-runda");
  if (stats.territories >= 1) out.push("prima-cucerire");
  if (stats.gamesHosted >= 1) out.push("gazda");
  if (stats.gamesWon >= 1) out.push("cuceritor");
  if (stats.gamesWon >= 3) out.push("hat-trick");
  if (stats.gamesWon >= 5) out.push("primar");
  if (stats.territories >= 20) out.push("sectorist");
  if (stats.territories >= 50) out.push("stapanul-capitalei");
  if (stats.gamesPlayed >= 100) out.push("spritz-master");
  return out;
}