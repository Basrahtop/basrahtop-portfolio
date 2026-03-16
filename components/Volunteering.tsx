"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionReveal from "./SectionReveal";

interface Cause {
  title: string;
  org: string;
  period: string;
  description: string;
  impact: string;
  impactLabel: string;
  color: string;
}

const CAUSES: Cause[] = [
  {
    title: "Mentor & Trainer — Tech Empowerment Program",
    org: "Faculty of Education, University of Lagos",
    period: "2024",
    description: "Volunteered as a mentor and trainer for UNILAG's Student Tech Empowerment Program. Delivered hands-on sessions in Responsive Web Design, equipping over 50 students with practical front-end development skills they could immediately apply to real-world projects.",
    impact: "50+",
    impactLabel: "Students trained",
    color: "from-accent/10 to-transparent",
  },
  {
    title: "Marketing Strategist — Intersect Marketing Working Group",
    org: "Cardano Intersect",
    period: "2024 – 2025",
    description: "Served as a marketing strategist in the Cardano Intersect Marketing Working Group. Co-authored the first ever Cardano On-Chain Marketing Budget Draft — a landmark governance document shaping how the Cardano treasury funds ecosystem marketing initiatives.",
    impact: "1st",
    impactLabel: "On-Chain marketing budget drafted",
    color: "from-sky-500/10 to-transparent",
  },
  {
    title: "Vice President — Unified Cardano Students Club Nigeria",
    org: "UCSC Nigeria",
    period: "2024 – Present",
    description: "Led the club in its mission to onboard student builders into the Cardano ecosystem. Spearheaded a mentorship programme for Cardano Catalyst Reviewers, coaching 100+ students on writing high-quality project reviews — protecting the Cardano treasury from weak proposals while helping teams improve their submissions through articulate, actionable feedback.",
    impact: "100+",
    impactLabel: "Students mentored",
    color: "from-emerald-500/10 to-transparent",
  },
  {
    title: "Protocol Officer — Decentralized Governance & Trust",
    org: "Prisma Protocol",
    period: "2025 – Present",
    description: "Serving as a Protocol Officer specialising in Decentralized Governance and Trust as a Variable. Actively contributing to the co-authorship of the Prisma Litepaper — defining governance frameworks and trust mechanisms for decentralised protocol operations.",
    impact: "Active",
    impactLabel: "Protocol co-author",
    color: "from-purple-500/10 to-transparent",
  },
];

const GLOBAL_STATS = [
  { value: "2+",   label: "Years Volunteering" },
  { value: "150+", label: "People Trained" },
  { value: "4",    label: "Organisations" },
  { value: "∞",    label: "Impact Given" },
];

/* ── Animated counter ─────────────────────────────── */
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {value}
    </motion.span>
  );
}

export default function Volunteering() {
  return (
    <section id="volunteer" className="section-padding bg-canvas-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <SectionReveal>
          <p className="font-display text-accent tracking-[0.3em] text-xs uppercase mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            Volunteering
          </p>
        </SectionReveal>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-text-1 max-w-md leading-tight">
              Giving back is{" "}
              <span className="text-accent italic font-body font-normal">not optional</span>

            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="text-text-2 font-body max-w-xs">
              Community isn&apos;t a backdrop — it&apos;s the foundation of everything I build.
            </p>
          </SectionReveal>
        </div>

        {/* Impact strip */}
        <SectionReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 mb-16">
            {GLOBAL_STATS.map(({ value, label }) => (
              <div key={label} className="bg-canvas-soft p-8 text-center">
                <p className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">
                  <Counter value={value} />
                </p>
                <p className="font-body text-text-3 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Cause cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAUSES.map((cause, i) => (
            <SectionReveal key={cause.title} delay={i * 0.08}>
              <div
                className={`relative border border-white/5 hover:border-accent/20 bg-gradient-to-br ${cause.color} bg-canvas p-8 transition-colors duration-300 group h-full`}
              >
                {/* Index */}
                <span className="absolute top-6 right-6 font-display text-text-3/30 text-5xl font-bold select-none">
                  0{i + 1}
                </span>

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-text-1 group-hover:text-accent transition-colors duration-200 mb-1">
                      {cause.title}
                    </h3>
                    <p className="font-body text-text-3 text-sm">{cause.org}</p>
                  </div>
                  <span className="shrink-0 px-3 py-1 border border-white/10 text-text-3 text-[10px] font-display tracking-wide uppercase whitespace-nowrap">
                    {cause.period}
                  </span>
                </div>

                <p className="font-body text-text-2 text-sm leading-relaxed mb-6">
                  {cause.description}
                </p>

                <div className="flex items-center gap-2 mt-auto">
                  <span className="font-display text-2xl font-bold text-accent">{cause.impact}</span>
                  <span className="font-body text-text-3 text-sm">{cause.impactLabel}</span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Quote */}
        <SectionReveal delay={0.2}>
          <blockquote className="mt-20 border-l-2 border-accent pl-8 py-2">
            <p className="font-body italic text-xl text-text-2 leading-relaxed max-w-2xl">
              &ldquo;The best way to find yourself is to lose yourself in the service of others.&rdquo;
            </p>
            <footer className="font-display text-text-3 text-xs tracking-widest uppercase mt-4">
              — Mahatma Gandhi
            </footer>
          </blockquote>
        </SectionReveal>
      </div>
    </section>
  );
}
