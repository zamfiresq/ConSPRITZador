import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Forțează rădăcina Turbopack pe folderul frontend (altfel alege un package-lock.json din home
  // și nu mai găsește `tailwindcss`, deci stilurile nu se aplică).
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
