import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "./theme.css";

// Titlu: Helmswald Post (blackletter) · Text/UI: Steagal.
// Steagal nu are "ț"/"Ț", deci DM Sans rămâne ca rezervă pentru caracterele lipsă.
const display = localFont({
  src: "./fonts/Helmswald_Post_F.otf",
  variable: "--font-display-loaded",
  display: "swap",
});
const body = localFont({
  src: "./fonts/Steagal-Re.otf",
  variable: "--font-body-loaded",
  display: "swap",
});
const fallback = DM_Sans({
  variable: "--font-fallback-loaded",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Conspritzädor",
  description: "Cucerește cartierele Bucureștiului. Răspunde rapid. Controlează harta.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${display.variable} ${body.variable} ${fallback.variable}`}>
      <body>{children}</body>
    </html>
  );
}
