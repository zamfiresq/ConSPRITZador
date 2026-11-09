"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth";
import styles from "./account-chip.module.css";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "?";
}

export default function AccountChip() {
  const { user, profile, ready } = useAuth();

  if (!ready) return <div className={styles.chip} aria-hidden />;

  if (!user) {
    return (
      <Link href="/login" className={styles.chip}>
        Cont
      </Link>
    );
  }

  const name = profile?.displayName || user.displayName || "Jucător";
  return (
    <Link href="/profile" className={`${styles.chip} ${styles.signed}`}>
      <span className={styles.avatar}>{initials(name)}</span>
      <span className={styles.name}>{name}</span>
    </Link>
  );
}
