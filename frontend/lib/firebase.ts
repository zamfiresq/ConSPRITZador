"use client";

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp, getDoc, updateDoc } from "firebase/firestore";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  getAuth,
  GoogleAuthProvider,
  initializeAuth,
  linkWithCredential,
  linkWithPopup,
  setPersistence,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import type { User } from "firebase/auth";

async function persistProfile(user: User, displayName?: string) {
  const { ensureUserDoc } = await import("./profile");
  await ensureUserDoc(user, displayName);
}

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

export const auth = getAuth(app);
export const db = getFirestore(app);

export function authErrorMessage(err: unknown): string {
  const code = typeof err === "object" && err && "code" in err ? String((err as { code: string }).code) : "";
  switch (code) {
    case "auth/email-already-in-use":
    case "auth/credential-already-in-use":
      return "Există deja un cont cu acest email.";
    case "auth/invalid-email":
      return "Adresa de email nu e validă.";
    case "auth/weak-password":
      return "Parola trebuie să aibă cel puțin 6 caractere.";
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Email sau parolă greșită.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Autentificarea a fost anulată.";
    case "auth/operation-not-allowed":
      return "Metoda de autentificare nu e activată în consola Firebase.";
    case "auth/too-many-requests":
      return "Prea multe încercări. Așteaptă puțin.";
    default:
      return "Nu am putut autentifica. Încearcă din nou.";
  }
}

/** Returnează utilizatorul curent; dacă nu există, face login anonim (doar pe sesiunea tab-ului). */
export async function ensureUser(): Promise<User> {
  await auth.authStateReady();
  if (auth.currentUser) {
    await persistProfile(auth.currentUser);
    return auth.currentUser;
  }
  await setPersistence(auth, browserSessionPersistence);
  const cred = await signInAnonymously(auth);
  await persistProfile(cred.user);
  return cred.user;
}

export async function registerWithEmail(email: string, password: string, displayName: string) {
  const name = displayName.trim().slice(0, 16) || "Jucător";
  await auth.authStateReady();
  const current = auth.currentUser;

  if (current?.isAnonymous) {
    await setPersistence(auth, browserLocalPersistence);
    const credential = EmailAuthProvider.credential(email, password);
    const result = await linkWithCredential(current, credential);
    await updateProfile(result.user, { displayName: name });
    await persistProfile(result.user, name);
    return result.user;
  }

  await setPersistence(auth, browserLocalPersistence);
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(result.user, { displayName: name });
  await persistProfile(result.user, name);
  return result.user;
}

export async function loginWithEmail(email: string, password: string) {
  await setPersistence(auth, browserLocalPersistence);
  const result = await signInWithEmailAndPassword(auth, email, password);
  await persistProfile(result.user);
  return result.user;
}

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  await auth.authStateReady();
  const current = auth.currentUser;
  await setPersistence(auth, browserLocalPersistence);

  if (current?.isAnonymous) {
    try {
      const result = await linkWithPopup(current, provider);
      await persistProfile(result.user);
      return result.user;
    } catch (err) {
      const code = typeof err === "object" && err && "code" in err ? String((err as { code: string }).code) : "";
      if (code !== "auth/credential-already-in-use" && code !== "auth/email-already-in-use") throw err;
    }
  }

  const result = await signInWithPopup(auth, provider);
  await persistProfile(result.user);
  return result.user;
}

export async function logout() {
  await signOut(auth);
  await setPersistence(auth, browserSessionPersistence);
}

export { signInAnonymously, doc, setDoc, serverTimestamp, getDoc, updateDoc };