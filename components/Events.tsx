"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

interface Event {
  id: number;
  year: string;
  title: string;
  role: string;
  location: string;
  attendees: string;
  description: string;
  tags: string[];
  verifyUrl?: string;
}

const EVENTS: Event[] = [
  {
    id: 1,
    year: "2026",
    title: "Cardano African Tech Summit (CATS)",
    role: "Organiser",
    location: "NexTrend Hub, Lagos, Nigeria",
    attendees: "100+",
    description: "The flagship Web3 conference for African builders, developers, and thought leaders in the Cardano ecosystem. CATS 2026 united blockchain innovators from across the continent to share progress, debate governance, and forge collaborations driving Africa's decentralised future.",
    tags: ["Cardano", "Web3", "Africa", "Blockchain", "Conference"],
    verifyUrl: "https://x.com/nextrendlabs/status/2001976725820068013?s=20",
  },
  {
    id: 2,
    year: "2025",
    title: "Sandbox Hackathon — UCSC Nigeria",
    role: "Marketing Lead",
    location: "Nigeria (Online + In-Person)",
    attendees: "5,000+",
    description: "Served as Marketing Lead for the Sandbox Hackathon organised by the Unified Cardano Student Club Nigeria. Over 1,000 teams of 5 participants each entered the competition — 5,000+ participants in total — narrowed down to 25 finalist teams for the final Hacking Day. Developed the full branding guide and marketing strategy for the event and spearheaded an X Spaces series spotlighting blockchain innovation, student entrepreneurship, and Cardano's growing presence in Nigerian universities.",
    tags: ["Cardano", "Hackathon", "Marketing", "Branding", "X Spaces", "Nigeria"],
    verifyUrl: "https://x.com/OffIchieBannies/status/1932441553697423813?s=20",
  },
  {
    id: 3,
    year: "2025",
    title: "NexTrend × WADA Hub — Web3 Builders Launch",
    role: "Lead Organiser",
    location: "WADA Hub",
    attendees: "200+",
    description: "Joint launch event between NexTrend Group and WADA Hub, bringing together Web3 builders, developers, and creators to form Africa's next wave of decentralised application builders. Featured live demos, networking sessions, and on-chain project showcases.",
    tags: ["Web3", "NexTrend", "Builders", "Community", "Launch"],
    verifyUrl: "#",
  },
  {
    id: 4,
    year: "2024",
    title: "Cardano Intersect DRep Workshop",
    role: "DRep & Workshop Facilitator",
    location: "Africa Region",
    attendees: "100+",
    description: "An interactive governance workshop hosted under Cardano's Intersect initiative to onboard and train Delegated Representatives (DReps) — the backbone of on-chain democratic decision-making in the Voltaire era. Guided participants through the voting framework, treasury governance, and constitutional process.",
    tags: ["Cardano", "Governance", "DRep", "Intersect", "Voltaire"],
    verifyUrl: "#",
  },
];

export default function Events() {
  const [active, setActive] = useState<number>(0);
  const current = EVENTS[active];

  return (
    <section id="events" className="section-padding bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <SectionReveal>
          <p className="font-display text-accent tracking-[0.3em] text-xs uppercase mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            Event Organisation
          </p>
        </SectionReveal>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-text-1 max-w-sm">
              Experiences that{" "}
              <span className="text-accent italic font-body font-normal">connect</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="text-text-2 font-body max-w-xs">
              From intimate workshops to large-scale festivals — every detail crafted with intention.
            </p>
          </SectionReveal>
        </div>

        {/* Timeline + detail layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10">

          {/* Timeline list */}
          <SectionReveal delay={0.1} direction="left">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[18px] top-0 bottom-0 w-px bg-white/8" />

              <ul className="space-y-2">
                {EVENTS.map((event, i) => (
                  <li key={event.id}>
                    <button
                      onClick={() => setActive(i)}
                      className={`w-full text-left flex items-start gap-5 py-4 px-3 transition-colors duration-200 group relative ${
                        active === i ? "text-text-1" : "text-text-3 hover:text-text-2"
                      }`}
                    >
                      {/* Dot */}
                      <span
                        className={`relative z-10 mt-1.5 shrink-0 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                          active === i
                            ? "border-accent bg-accent"
                            : "border-text-3 bg-canvas group-hover:border-text-2"
                        }`}
                      />
                      <div>
                        <span className="text-xs font-display tracking-wide text-accent/60 block mb-0.5">
                          {event.year}
                        </span>
                        <span className={`font-display font-semibold text-sm leading-snug transition-colors ${
                          active === i ? "text-text-1" : ""
                        }`}>
                          {event.title}
                        </span>
                        <span className="block text-xs font-body text-text-3 mt-0.5">{event.role}</span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Detail panel */}
          <SectionReveal delay={0.2} direction="right">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/5 bg-canvas-soft p-8 lg:p-10 relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-accent-dim to-transparent" />

                {/* Year */}
                <p className="font-display text-accent text-xs tracking-widest uppercase mb-5">
                  {current.year} · {current.location}
                </p>

                {/* Title */}
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-text-1 mb-2">
                  {current.title}
                </h3>
                <p className="font-body italic text-text-2 mb-6">{current.role}</p>

                {/* Description */}
                <p className="font-body text-text-2 leading-relaxed mb-8">{current.description}</p>

                {/* Stat */}
                <div className="flex items-center gap-6 mb-8 p-5 border border-white/5 bg-canvas">
                  <div>
                    <p className="font-display text-3xl font-bold text-accent">{current.attendees}</p>
                    <p className="text-text-3 text-sm font-body mt-0.5">Participants</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="font-display text-3xl font-bold text-text-1">{current.tags.length}</p>
                    <p className="text-text-3 text-sm font-body mt-0.5">Focus Areas</p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 border border-white/8 text-text-3 text-xs font-display tracking-wide uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Verify link */}
                {current.verifyUrl && current.verifyUrl !== "#" && (
                  <div className="mt-6">
                    <a
                      href={current.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-xs tracking-widest uppercase text-accent hover:text-accent-dim border border-accent/30 hover:border-accent px-4 py-2.5 transition-all duration-200 group"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Verify Event
                      <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
                  <button
                    onClick={() => setActive((a) => Math.max(0, a - 1))}
                    disabled={active === 0}
                    className="font-display text-xs tracking-widest uppercase text-text-3 hover:text-accent disabled:opacity-20 transition-colors"
                  >
                    ← Prev
                  </button>
                  <span className="font-display text-xs text-text-3">
                    {active + 1} / {EVENTS.length}
                  </span>
                  <button
                    onClick={() => setActive((a) => Math.min(EVENTS.length - 1, a + 1))}
                    disabled={active === EVENTS.length - 1}
                    className="font-display text-xs tracking-widest uppercase text-text-3 hover:text-accent disabled:opacity-20 transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
