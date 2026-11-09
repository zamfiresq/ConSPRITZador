"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "./firebase";
import { UserProfile, defaultProfile, ensureUserDoc } from "./profile";
import { emptyStats } from "./badges";

type AuthContextValue = {
  user: User | null;
  profile: UserProfile | null;
  ready: boolean;
};

const AuthContext = createContext<AuthContextValue>({ user: null, profile: null, ready: false });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (next) => {
      setUser(next);
      if (!next) {
        setProfile(null);
        setReady(true);
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;
    const ref = doc(db, "users", user.uid);
    let cancelled = false;
    void ensureUserDoc(user).catch((err) => console.error("Profil:", err));
    const unsub = onSnapshot(
      ref,
      (snap) => {
        if (cancelled) return;
        if (snap.exists()) {
          const data = snap.data() as UserProfile;
          setProfile({
            displayName: data.displayName || user.displayName || "Jucător",
            email: data.email ?? user.email,
            isAnonymous: user.isAnonymous,
            createdAt: data.createdAt,
            stats: { ...emptyStats(), ...(data.stats ?? {}) },
            badges: Array.isArray(data.badges) ? data.badges : [],
          });
        } else {
          setProfile(defaultProfile(user));
        }
        setReady(true);
      },
      (err) => {
        console.error("Profil snapshot:", err);
        if (!cancelled) {
          setProfile(defaultProfile(user));
          setReady(true);
        }
      }
    );
    return () => {
      cancelled = true;
      unsub();
    };
  }, [user]);

  const value = useMemo(() => ({ user, profile, ready }), [user, profile, ready]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
