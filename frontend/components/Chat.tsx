"use client";

import { useEffect, useRef, useState } from "react";
import { addDoc, collection, limitToLast, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./chat.module.css";

type Msg = {
  id: string;
  type: "chat" | "system";
  uid: string;
  name: string;
  color: string;
  text: string;
};

const MAX_LEN = 200;

interface ChatProps {
  roomCode: string;
  uid: string;
  name: string;
  color: string;
  /** "floating" = fereastră mică peste joc (cu buton); "inline" = integrat în pagină (lobby) */
  variant?: "floating" | "inline";
}

export default function Chat({ roomCode, uid, name, color, variant = "inline" }: ChatProps) {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(variant === "inline");
  const [seen, setSeen] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const lastSent = useRef(0);

  // pe ecrane late, chatul din joc e deschis implicit
  useEffect(() => {
    if (variant === "floating" && window.innerWidth >= 1100) setOpen(true);
  }, [variant]);

  useEffect(() => {
    const q = query(collection(db, "games", roomCode, "messages"), orderBy("createdAt", "asc"), limitToLast(100));
    const unsub = onSnapshot(
      q,
      (snap) => {
        setMessages(
          snap.docs.map((d) => {
            const x = d.data({ serverTimestamps: "estimate" });
            return {
              id: d.id,
              type: x.type === "system" ? "system" : "chat",
              uid: String(x.uid ?? ""),
              name: String(x.name ?? ""),
              color: String(x.color ?? ""),
              text: String(x.text ?? ""),
            } as Msg;
          })
        );
        setError(null);
      },
      (err) => {
        console.error("Chat:", err);
        setError("Chatul nu e disponibil (verifică regulile Firestore).");
      }
    );
    return () => unsub();
  }, [roomCode]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
    if (open) setSeen(messages.length);
  }, [messages, open]);

  const send = async () => {
    const body = text.trim().slice(0, MAX_LEN);
    if (!body || !uid) return;
    const now = Date.now();
    if (now - lastSent.current < 600) return; // anti-spam
    lastSent.current = now;
    setText("");
    try {
      await addDoc(collection(db, "games", roomCode, "messages"), {
        type: "chat",
        uid,
        name,
        color,
        text: body,
        createdAt: serverTimestamp(),
      });
    } catch (e) {
      console.error("Chat send:", e);
      setError("Mesajul nu a putut fi trimis.");
    }
  };

  const unread = open ? 0 : Math.max(0, messages.length - seen);

  if (variant === "floating" && !open) {
    return (
      <div className={styles.floating}>
        <button className={styles.toggle} onClick={() => setOpen(true)}>
          Chat
          {unread > 0 && <span className={styles.badge}>{unread > 9 ? "9+" : unread}</span>}
        </button>
      </div>
    );
  }

  return (
    <div className={variant === "floating" ? styles.floating : styles.inlineWrap}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <span>Chat</span>
          {variant === "floating" && (
            <button className={styles.close} onClick={() => setOpen(false)} aria-label="Închide chatul">
              ×
            </button>
          )}
        </div>

        <div className={styles.list} ref={listRef}>
          {messages.length === 0 && !error && <div className={styles.empty}>Niciun mesaj încă.</div>}
          {messages.map((m) =>
            m.type === "system" ? (
              <div key={m.id} className={styles.sys}>
                {m.text}
              </div>
            ) : (
              <div key={m.id} className={`${styles.msg} ${m.uid === uid ? styles.mine : ""}`}>
                <b style={{ color: m.color || "var(--gold)" }}>{m.name}</b> {m.text}
              </div>
            )
          )}
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.form}>
          <input
            className={styles.input}
            value={text}
            maxLength={MAX_LEN}
            placeholder="Scrie un mesaj…"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                send();
              }
            }}
          />
          <button className={styles.send} onClick={send} disabled={!text.trim()}>
            Trimite
          </button>
        </div>
      </div>
    </div>
  );
}
