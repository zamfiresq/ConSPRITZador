"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import { useAuth } from "@/lib/auth";
import { BADGES } from "@/lib/badges";
import { logout } from "@/lib/firebase";
import { saveDisplayName } from "@/lib/profile";
import ui from "../ui.module.css";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("") || "?";
}

export default function ProfilePage() {
  const router = useRouter();
  const { user, profile, ready } = useAuth();
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (profile?.displayName) setName(profile.displayName);
  }, [profile?.displayName]);

  if (!ready) {
    return (
      <div className={ui.page}>
        <div className={ui.panel}>Se încarcă profilul…</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={ui.page}>
        <div className={ui.panel}>
          <div className={ui.brand}>
            Con<span>spritz</span>ädor
          </div>
          <div className={ui.title}>Profil</div>
          <p className={ui.guestNote}>Intră în cont ca să-ți vezi statisticile și insignele.</p>
          <Link href="/login" className={ui.btn}>
            Intră în cont
          </Link>
          <Link href="/register" className={ui.btnGhost}>
            Creează un cont
          </Link>
        </div>
      </div>
    );
  }

  const stats = profile?.stats;
  const owned = new Set(profile?.badges ?? []);
  const guest = user.isAnonymous;

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setSaved(false);
    try {
      const next = await saveDisplayName(user.uid, name);
      await updateProfile(user, { displayName: next });
      setSaved(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Nu am putut salva numele.");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className={ui.page}>
      <div className={`${ui.panel} ${ui.panelWide}`}>
        <div className={ui.brand}>
          Con<span>spritz</span>ädor
        </div>
        <div className={ui.title}>Profil</div>

        <div className={ui.profileColumns}>
          <div className={ui.profileColumn}>
            <div className={ui.profileHead}>
              <div className={ui.avatarLg}>{initials(profile?.displayName || "Jucător")}</div>
              <div className={ui.profileMeta}>
                <div className={ui.profileName}>{profile?.displayName || "Jucător"}</div>
                <div className={ui.profileEmail}>
                  {guest ? "Oaspete (cont temporar pe acest tab)" : profile?.email || user.email}
                </div>
              </div>
            </div>

            <label className={ui.label} htmlFor="name">
              Numele în joc
            </label>
            <div className={ui.saveRow}>
              <input
                id="name"
                className={ui.input}
                value={name}
                maxLength={16}
                onChange={(e) => setName(e.target.value)}
              />
              <button className={ui.btn} onClick={handleSave} disabled={saving || !name.trim()}>
                {saving ? "…" : "Salvează"}
              </button>
            </div>
            {saved && <div className={ui.ok}>Numele a fost actualizat.</div>}
            {error && <div className={ui.error}>{error}</div>}

            <div className={ui.label}>Statistici</div>
            <div className={ui.stats}>
              <div className={ui.stat}>
                <div className={ui.statValue}>{stats?.gamesPlayed ?? 0}</div>
                <div className={ui.statLabel}>Jocuri</div>
              </div>
              <div className={ui.stat}>
                <div className={ui.statValue}>{stats?.gamesWon ?? 0}</div>
                <div className={ui.statLabel}>Victorii</div>
              </div>
              <div className={ui.stat}>
                <div className={ui.statValue}>{stats?.territories ?? 0}</div>
                <div className={ui.statLabel}>Teritorii</div>
              </div>
              <div className={ui.stat}>
                <div className={ui.statValue}>{stats?.points ?? 0}</div>
                <div className={ui.statLabel}>Puncte</div>
              </div>
            </div>
          </div>

          <div className={ui.profileColumn}>
            <div className={ui.label}>Insigne</div>
            <div className={ui.badgeGrid}>
              {BADGES.map((badge) => {
                const on = owned.has(badge.id);
                const Icon = badge.icon;
                return (
                  <div key={badge.id} className={`${ui.badge} ${on ? ui.badgeOn : ""}`}>
                    <div className={ui.badgeIcon}>
                      <Icon />
                    </div>
                    <div className={ui.badgeName}>{badge.name}</div>
                    <div className={ui.badgeDesc}>{badge.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {guest && (
          <>
            <p className={ui.guestNote}>
              Creează un cont ca să păstrezi insignele și statisticile după ce închizi tab-ul.
            </p>
            <Link href="/register" className={ui.btn}>
              Păstrează progresul
            </Link>
          </>
        )}

        {!guest && (
          <button className={ui.btnAlt} onClick={handleLogout}>
            Ieși din cont
          </button>
        )}

        <Link href="/" className={ui.btnGhost}>
          ← Acasă
        </Link>
      </div>
    </div>
  );
}