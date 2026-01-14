"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white flex items-center justify-center">
      <main className="w-full max-w-3xl px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Con<span className="text-emerald-400">SPRITZ</span>ador
        </h1>

        <p className="text-lg sm:text-xl text-zinc-300 mb-12">
          Cucerește cartierele Bucureștiului.
          <br />
          Răspunde rapid. Controlează harta.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/host"
            className="rounded-xl bg-emerald-500 px-8 py-4 text-lg font-semibold text-black hover:bg-emerald-400 transition"
          >
            Host Game
          </Link>

          <Link
            href="/join"
            className="rounded-xl border border-zinc-600 px-8 py-4 text-lg font-semibold text-white hover:bg-zinc-800 transition"
          >
            Join Game
          </Link>
        </div>

        <div className="mt-16 text-sm text-zinc-400">
          <p>
            Party game privat · Conquiztador-style · București edition
          </p>
        </div>
      </main>
    </div>
  );
}
