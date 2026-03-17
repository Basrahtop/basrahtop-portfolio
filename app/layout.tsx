import type { Metadata } from "next";
import { Montserrat, Syne } from "next/font/google";
import "./globals.css";

/* ── Syne — bold editorial display (Google Fonts) ─── */
/* To use Clash Display instead:                        */
/* 1. Download ClashDisplay-Variable.woff2              */
/* 2. Place it in /public/fonts/                        */
/* 3. Swap to localFont (see BUILD_PLAN.md)             */
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

/* ── Montserrat — clean, highly readable body font ── */
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdulbasit Adigun | DevbasrahtopIT",
  description: "Graphic Designer · Web3 Marketing Strategist · Full-Stack Developer · Event Organiser — crafting digital experiences on the Cardano ecosystem.",
  keywords: ["portfolio", "graphic design", "web3", "cardano", "event organiser", "blockchain", "DevbasrahtopIT"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${montserrat.variable}`}>
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  );
}
