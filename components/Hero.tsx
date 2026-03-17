"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const ROLES = ["Graphic Designer", "Web Developer", "Web3 Marketing Strategist", "Event Organiser", "Volunteer", "Creative"];

/* ── Reusable reveal wrapper ─────────────────────── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  /* ── Parallax ───────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY   = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  /* ── Role switcher ──────────────────────────────── */
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-canvas"
    >
      {/* ── Decorative blobs / parallax bg ─────────── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden
      >
        {/* Large accent glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-accent opacity-[0.04] blur-[120px]" />
        {/* Secondary glow */}
        <div className="absolute bottom-[-15%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-accent opacity-[0.025] blur-[100px]" />

        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Number labels */}
        {["01", "02", "03"].map((n, i) => (
          <span
            key={n}
            className="absolute font-display text-[18vw] font-bold text-white opacity-[0.018] select-none leading-none"
            style={{ top: `${10 + i * 30}%`, left: `${60 + i * 8}%` }}
          >
            {n}
          </span>
        ))}
      </motion.div>

      {/* ── Main content ────────────────────────────── */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full"
      >
        {/* Eyebrow */}
        <Reveal delay={0.1}>
          <p className="font-display text-accent tracking-[0.3em] text-sm uppercase mb-8 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            Available for work
          </p>
        </Reveal>

        {/* Name */}
        <Reveal delay={0.2}>
          <h1 className="font-display text-display-xl font-bold leading-[0.9] tracking-tight text-text-1 mb-6">
            Abdulbasit<br />
            <span className="text-accent">Adigun</span>
          </h1>
        </Reveal>

        {/* Animated role switcher */}
        <Reveal delay={0.35}>
          <div className="flex items-center gap-3 mb-10 overflow-hidden h-12">
            <span className="text-text-2 font-body text-xl italic">I am a</span>
            <div className="relative overflow-hidden h-12 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 48, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -48, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="block font-display text-2xl md:text-3xl font-semibold text-accent"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* Tagline */}
        <Reveal delay={0.45}>
          <p className="font-body text-text-2 text-lg md:text-xl max-w-md leading-relaxed mb-14">
            Crafting bold visual identities, seamless digital experiences, and unforgettable events.
          </p>
        </Reveal>

        {/* CTA buttons */}
        <Reveal delay={0.55}>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.querySelector("#design")?.scrollIntoView({ behavior: "smooth" })}
              data-cursor="VIEW"
              className="mag-btn px-8 py-4 bg-accent text-canvas font-display font-semibold text-sm tracking-widest uppercase hover:bg-accent-dim transition-colors duration-300"
            >
              View Work
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              data-cursor="CHAT"
              className="mag-btn px-8 py-4 accent-border font-display font-semibold text-sm tracking-widest uppercase text-text-1 hover:text-accent transition-colors duration-300"
            >
              Get In Touch
            </button>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <Reveal delay={0.8}>
          <div className="mt-24 flex items-center gap-3 text-text-3 text-xs tracking-widest uppercase font-display">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-px h-10 bg-gradient-to-b from-accent to-transparent"
            />
            Scroll
          </div>
        </Reveal>
      </motion.div>

      {/* ── Role index dots ──────────────────────────── */}
      <div className="absolute bottom-10 right-8 flex flex-col gap-2 z-10">
        {ROLES.map((_, i) => (
          <button
            key={i}
            onClick={() => setRoleIndex(i)}
            className={`w-1 rounded-full transition-all duration-300 ${
              i === roleIndex ? "h-6 bg-accent" : "h-2 bg-text-3 hover:bg-text-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
