"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  span?: "wide" | "tall" | "normal";
  images?: string[];
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Agentic AI — What We Mean",
    category: "Infographics",
    description: "6-part portrait infographic carousel for DEEP Projects — clear visual explainers unpacking the concept of Agentic AI, designed for social sharing and audience education in the AI space.",
    span: "tall",
    images: [
      "/deep-agentic-ai-1.jpg",
      "/deep-agentic-ai-2.jpg",
      "/deep-agentic-ai-3.jpg",
      "/deep-agentic-ai-4.jpg",
      "/deep-agentic-ai-5.jpg",
      "/deep-agentic-ai-6.jpg",
    ],
  },
  {
    id: 2,
    title: "DEEP Projects Blog Banner Series",
    category: "Blog Banners",
    description: "Series of landscape blog post featured image banners for DEEP Projects — bold typographic layouts, consistent brand language, optimised for Medium, Hashnode, and web publishing platforms.",
    span: "wide",
    images: [
      "/deep-blog-banner-1.jpg",
      "/deep-blog-banner-2.jpg",
      "/deep-blog-banner-3.jpg",
      "/deep-blog-banner-4.jpg",
      "/deep-blog-banner-5.jpg",
      "/deep-blog-banner-6.jpg",
      "/deep-blog-banner-7.jpg",
    ],
  },
  {
    id: 3,
    title: "DEEP Projects — AI Storytelling Challenge",
    category: "Community",
    description: "10-piece square visual series from the DEEP Projects Community AI Storytelling Challenge — participants reimagined the future of AI through creative narratives, brought to life as a curated social graphic collection.",
    span: "normal",
    images: [
      "/deep-ai-story-1.jpg",
      "/deep-ai-story-2.jpg",
      "/deep-ai-story-3.jpg",
      "/deep-ai-story-4.jpg",
      "/deep-ai-story-5.jpg",
      "/deep-ai-story-6.jpg",
      "/deep-ai-story-7.jpg",
      "/deep-ai-story-8.jpg",
      "/deep-ai-story-9.jpg",
      "/deep-ai-story-10.jpg",
    ],
  },
  {
    id: 4,
    title: "CATS Program Visual Designs",
    category: "Events",
    description: "Three square-format promotional graphics for the Cardano African Tech Summit — social media announcements, speaker spotlights, and event programme visuals.",
    span: "normal",
    images: [
      "/cats-design-1.jpg",
      "/cats-design-2.jpg",
      "/cats-design-3.jpg",
    ],
  },
];

const CATEGORIES = ["All", "Infographics", "Blog Banners", "Community", "Events"];

/* ── Lightbox with image carousel ────────────────── */
function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const images = project.images ?? [];
  const total  = images.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-8"
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-canvas-soft border border-white/10 w-full max-w-3xl flex flex-col"
      >
        {/* ─ Close button fixed to top-right corner ─ */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-7 h-7 bg-canvas/90 border border-white/10 hover:border-accent flex items-center justify-center text-text-2 hover:text-accent transition-all duration-200"
          aria-label="Close"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* ─ Image area — fixed responsive height, never overflows ─ */}
        <div className="relative w-full h-[44vh] sm:h-[52vh] md:h-[58vh] bg-canvas overflow-hidden">
          {total > 0 ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[idx]}
                    alt={`${project.title} — ${idx + 1} of ${total}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {total > 1 && (
                <>
                  {/* Prev */}
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-canvas/80 border border-white/10 hover:border-accent flex items-center justify-center text-text-2 hover:text-accent transition-all duration-200"
                    aria-label="Previous image"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  {/* Next */}
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-canvas/80 border border-white/10 hover:border-accent flex items-center justify-center text-text-2 hover:text-accent transition-all duration-200"
                    aria-label="Next image"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {/* Dot indicators */}
                  <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                        className={`rounded-full transition-all duration-200 ${
                          i === idx ? "w-4 h-1.5 bg-accent" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-text-3 text-sm tracking-widest uppercase">
                {project.category} — Coming Soon
              </span>
            </div>
          )}
        </div>

        {/* ─ Meta strip — always visible below image ─ */}
        <div className="border-t border-white/5 px-5 py-4 md:px-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-accent text-[10px] font-display tracking-widest uppercase mb-1">{project.category}</p>
              <h3 className="font-display text-sm md:text-base font-bold text-text-1 leading-snug mb-1.5">{project.title}</h3>
              <p className="font-body text-text-2 text-xs leading-relaxed line-clamp-2">{project.description}</p>
            </div>
            {total > 1 && (
              <span className="shrink-0 font-display text-text-3 text-xs tracking-wide mt-0.5 whitespace-nowrap">
                {idx + 1} / {total}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GraphicDesign() {
  const [filter, setFilter]         = useState("All");
  const [selected, setSelected]     = useState<Project | null>(null);

  const filtered = filter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="design" className="section-padding bg-canvas relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <SectionReveal>
          <p className="font-display text-accent tracking-[0.3em] text-xs uppercase mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            Graphic Design
          </p>
        </SectionReveal>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionReveal delay={0.1}>
            <h2 className="font-display text-display-md font-bold text-text-1 max-w-sm">
              Visual work that{" "}
              <span className="text-accent italic font-body font-normal">speaks</span>
            </h2>
          </SectionReveal>

          {/* Filter pills */}
          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 text-xs font-display tracking-wide uppercase transition-all duration-200 ${
                    filter === cat
                      ? "bg-accent text-canvas"
                      : "border border-white/10 text-text-2 hover:border-accent hover:text-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid mb-4 group cursor-pointer"
                onClick={() => setSelected(project)}
                data-cursor="VIEW"
              >
                {/* Card */}
                <div className="relative overflow-hidden border border-white/5 hover:border-accent/30 transition-colors duration-300">
                  {/* Image or placeholder */}
                  <div
                    className={`relative bg-canvas-soft overflow-hidden ${
                      project.span === "tall" ? "aspect-[5/7]" : project.span === "wide" ? "aspect-video" : "aspect-square"
                    }`}
                  >
                    {project.images && project.images.length > 0 ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className={`transition-transform duration-500 ${
                          project.span === "tall" ? "object-contain" : "object-cover group-hover:scale-105"
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <span className="font-display text-text-3 text-xs tracking-widest uppercase">
                          {project.category}
                        </span>
                      </div>
                    )}
                    {/* Multi-image badge */}
                    {project.images && project.images.length > 1 && (
                      <div className="absolute top-2.5 right-2.5 bg-canvas/80 backdrop-blur-sm px-2 py-0.5 font-display text-[10px] text-accent tracking-wide border border-accent/20">
                        {project.images.length} images
                      </div>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-canvas/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <p className="text-accent text-[10px] font-display tracking-widest uppercase mb-1">{project.category}</p>
                    <p className="text-text-1 font-display font-semibold text-sm leading-tight">{project.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
