"use client";

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp, getDoc, updateDoc } from "firebase/firestore";
import { browserSessionPersistence, getAuth, initializeAuth, signInAnonymously } from "firebase/auth";
import type { User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZZyc8OzHbBRBBs2_8TDdYlps-IF9CFow",
  authDomain: "conspritzador.firebaseapp.com",
  projectId: "conspritzador",
  storageBucket: "conspritzador.firebasestorage.app",
  messagingSenderId: "642039998093",
  appId: "1:642039998093:web:c09682baf2f6f00a7da4c4",
  measurementId: "G-RQ26Y0RBTD",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

/**
 * Persistență pe SESIUNE (per tab): fiecare tab primește propriul jucător anonim.
 * Cu persistența implicită (localStorage/IndexedDB) toate tab-urile aceluiași browser
 * împart același uid, deci nu poți testa jocul cu 2-3 ferestre.
 */
function makeAuth() {
  if (typeof window === "undefined") return getAuth(app);
  try {
    return initializeAuth(app, { persistence: browserSessionPersistence });
  } catch {
    return getAuth(app); // deja inițializat (hot reload)
  }
}

export const auth = makeAuth();
export const db = getFirestore(app);

/** Returnează utilizatorul curent; dacă nu există, face login anonim. */
export async function ensureUser(): Promise<User> {
  await auth.authStateReady();
  if (auth.currentUser) return auth.currentUser;
  return (await signInAnonymously(auth)).user;
}

export { signInAnonymously, doc, setDoc, serverTimestamp, getDoc, updateDoc };
