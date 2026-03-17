"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

interface Project {
  title: string;
  description: string;
  stack: string[];
  live?: string;
  github?: string;
  status: "Live" | "In Progress" | "Open Source";
}

const PROJECTS: Project[] = [
  {
    title: "Catalyst",
    description: "Blockchain-powered financial inclusion platform transforming Nigeria's 40M invisible MSMEs into a globally investible asset class. Replaces collateral with verifiable digital trust via a 1,000-point reputation engine, multi-currency investment (NGN, ADA, USDM), Aiken smart contract escrow, and a regenerative 4-Way Split profit model — bridging a $32.2B SME financing gap.",
    stack: ["TypeScript", "Next.js", "Cardano", "Aiken", "PostgreSQL", "Prisma"],
    live: "https://catalyst-landing-page-rho.vercel.app/",
    github: "https://github.com/Basrahtop/Catalyst",
    status: "Live",
  },
  {
    title: "PeaceguardAI",
    description: "🕊️ AI-powered platform advancing global information integrity and peace. Detects misinformation and supports ethical information sharing at scale.",
    stack: ["Python", "AI / ML", "NLP", "Peace Tech"],
    github: "https://github.com/Basrahtop/PeaceguardAI",
    status: "Open Source",
  },
  {
    title: "Nova — AI Tutor for Africans",
    description: "Conversational AI tutor built specifically for African learners — contextually aware, multilingual-ready, and accessible on low-bandwidth devices.",
    stack: ["Python", "LLM", "FastAPI", "AI Agents"],
    github: "https://github.com/Basrahtop/Nova",
    status: "In Progress",
  },
  {
    title: "html2img",
    description: "Lightweight JavaScript utility that converts any HTML string or DOM element into a high-fidelity image — useful for OG cards, social banners, and report exports.",
    stack: ["JavaScript", "Canvas API", "DOM"],
    github: "https://github.com/Basrahtop/html2img",
    status: "Open Source",
  },
  {
    title: "Custom Seed Phrase Encryption",
    description: "Web3 security tool that encrypts and decrypts BIP-39 seed phrases using a user-defined cipher — protecting wallet recovery keys from plain-text exposure.",
    stack: ["JavaScript", "Web3", "Crypto", "Node.js"],
    github: "https://github.com/Basrahtop/CSP-E_JavaScript",
    status: "Open Source",
  },
  {
    title: "Nova Smart Contracts",
    description: "Cardano-native smart contracts powering the Nova AI tutor ecosystem — handling on-chain authentication, token rewards, and learner progress milestones.",
    stack: ["JavaScript", "Cardano", "Aiken", "Blockchain"],
    github: "https://github.com/Basrahtop/nova-smart-contracts",
    status: "In Progress",
  },
];

const STATUS_COLORS: Record<string, string> = {
  "Live":        "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "In Progress": "bg-amber-500/20   text-amber-400   border-amber-500/30",
  "Open Source": "bg-accent/20       text-accent       border-accent/30",
};

export default function WebDev() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="dev" className="section-padding bg-canvas-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <SectionReveal>
          <p className="font-display text-accent tracking-[0.3em] text-xs uppercase mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            Web Development
          </p>
        </SectionReveal>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-text-1 max-w-md">
              Code that{" "}
              <span className="text-accent italic font-body font-normal">performs</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="text-text-2 font-body max-w-xs">
              A selection of full-stack projects — from idea to deployment.
            </p>
          </SectionReveal>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.07}>
              <motion.div
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="group relative h-full flex flex-col border border-white/5 hover:border-accent/30 bg-canvas p-7 transition-colors duration-300 overflow-hidden"
              >
                {/* Top accent line on hover */}
                <motion.div
                  className="absolute top-0 left-0 h-[2px] bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: hovered === i ? "100%" : 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Status badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-[10px] font-display tracking-widest uppercase border px-3 py-1 ${STATUS_COLORS[project.status]}`}>
                    {project.status}
                  </span>
                  <span className="text-text-3 font-display text-xs">0{i + 1}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-text-1 mb-3 group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-text-2 text-sm leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-canvas-soft text-text-3 text-[10px] font-display tracking-wide uppercase border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="VISIT"
                      className="flex items-center gap-1.5 text-xs font-display tracking-wide text-accent hover:underline"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="CODE"
                      className="flex items-center gap-1.5 text-xs font-display tracking-wide text-text-2 hover:text-text-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
