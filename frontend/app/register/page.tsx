"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import { authErrorMessage, loginWithGoogle, registerWithEmail } from "@/lib/firebase";
import ui from "../ui.module.css";

export default function RegisterPage() {
  const router = useRouter();
  const { profile, user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const displayName = name || profile?.displayName || "";

  const goProfile = () => router.push("/profile");

  const handleRegister = async () => {
    if (password.length < 6) {
      setError("Parola trebuie să aibă cel puțin 6 caractere.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await registerWithEmail(email.trim(), password, displayName);
      goProfile();
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
      goProfile();
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
        <div className={ui.title}>Creează un cont</div>

        <label className={ui.label} htmlFor="name">
          Numele în joc
        </label>
        <input
          id="name"
          className={ui.input}
          value={name}
          maxLength={16}
          placeholder={profile?.displayName || "Jucător"}
          onChange={(e) => setName(e.target.value)}
        />

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
        />

        <label className={ui.label} htmlFor="password">
          Parolă
        </label>
        <input
          id="password"
          className={ui.input}
          type="password"
          autoComplete="new-password"
          value={password}
          placeholder="minim 6 caractere"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !loading && handleRegister()}
        />

        {user?.isAnonymous && (
          <p className={ui.guestNote}>
            Progresul din acest tab (insigne și statistici) rămâne pe noul cont.
          </p>
        )}

        {error && <div className={ui.error}>{error}</div>}

        <button className={ui.btn} onClick={handleRegister} disabled={loading || !email || !password}>
          {loading ? "Se creează…" : "Creează contul"}
        </button>

        <div className={ui.split}>sau</div>
        <button className={ui.btnAlt} onClick={handleGoogle} disabled={loading}>
          Continuă cu Google
        </button>

        <div className={ui.switch}>
          Ai deja cont? <Link href="/login">Intră</Link>
        </div>
        <Link href="/" className={ui.btnGhost}>
          ← Înapoi
        </Link>
      </div>
    </div>
  );
}
