import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas:      "#0a0a0a",
        "canvas-soft": "#111111",
        accent:      "#d4ff00",
        "accent-dim": "#a8cc00",
        "text-1":    "#ffffff",
        "text-2":    "#a0a0a0",
        "text-3":    "#555555",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body:    ["var(--font-body)",    "serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem,10vw,8rem)",  { lineHeight: "0.95" }],
        "display-lg": ["clamp(2.5rem,6vw,5rem)",   { lineHeight: "1" }],
        "display-md": ["clamp(1.75rem,4vw,3rem)",  { lineHeight: "1.1" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        blink:     "blink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        blink:  { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};
export default config;
