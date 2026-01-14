"use client";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

// Firebase config using Next.js environment variables (NEXT_PUBLIC_ prefix required for frontend)
const firebaseConfig = {
  apiKey: "AIzaSyDZZyc8OzHbBRBBs2_8TDdYlps-IF9CFow",
  authDomain: "conspritzador.firebaseapp.com",
  projectId: "conspritzador",
  storageBucket: "conspritzador.firebasestorage.app",
  messagingSenderId: "642039998093",
  appId: "1:642039998093:web:c09682baf2f6f00a7da4c4",
  measurementId: "G-RQ26Y0RBTD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export { signInAnonymously, doc, setDoc, serverTimestamp, getDoc, updateDoc };