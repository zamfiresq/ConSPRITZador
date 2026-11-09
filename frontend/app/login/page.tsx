"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authErrorMessage, loginWithEmail, loginWithGoogle } from "@/lib/firebase";
import ui from "../ui.module.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const goHome = () => router.push("/");

  const handleEmail = async () => {
    setLoading(true);
    setError(null);
    try {
      await loginWithEmail(email.trim(), password);
      goHome();
    } catch (err) {
      setError(authErrorMessage(err));
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
      goHome();
    } catch (err) {
      setError(authErrorMessage(err));
      setLoading(false);
    }
  };

  return (
    <div className={ui.page}>
      <div className={ui.panel}>
        <div className={ui.brand}>
          Con<span>spritz</span>ädor
        </div>
        <div className={ui.title}>Intră în cont</div>

        <label className={ui.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          className={ui.input}
          type="email"
          autoComplete="email"
          value={email}
          placeholder="tu@email.com"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !loading && handleEmail()}
        />

        <label className={ui.label} htmlFor="password">
          Parolă
        </label>
        <input
          id="password"
          className={ui.input}
          type="password"
          autoComplete="current-password"
          value={password}
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !loading && handleEmail()}
        />

        {error && <div className={ui.error}>{error}</div>}

        <button className={ui.btn} onClick={handleEmail} disabled={loading || !email || !password}>
          {loading ? "Se conectează…" : "Intră"}
        </button>

        <div className={ui.split}>sau</div>
        <button className={ui.btnAlt} onClick={handleGoogle} disabled={loading}>
          Continuă cu Google
        </button>

        <div className={ui.switch}>
          Nu ai cont? <Link href="/register">Creează unul</Link>
        </div>
        <p className={ui.guestNote}>
          Poți juca și fără cont, ca oaspete. Dacă intri într-un cont existent, progresul de oaspete din acest tab nu se
          mută.
        </p>
        <Link href="/" className={ui.btnGhost}>
          ← Înapoi
        </Link>
      </div>
    </div>
  );
}