import Link from "next/link";
import CustomCursor from "./CustomCursor";
import SectionReveal from "./SectionReveal";
import { formatReviewed, type CaseStudy as CaseStudyData } from "@/lib/caseStudy";

export default function CaseStudy({ study }: { study: CaseStudyData }) {
  return (
    <>
      <CustomCursor />
      <main className="bg-canvas min-h-screen relative overflow-hidden">

        {/* Background accent glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-accent opacity-[0.04] blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-6 pt-10 pb-24">

          {/* Back link */}
          <Link
            href="/#dev"
            data-cursor="BACK"
            className="inline-flex items-center gap-2 font-display text-xs tracking-widest uppercase text-text-2 hover:text-accent transition-colors duration-200"
          >
            ← Back to projects
          </Link>

          {/* Header */}
          <SectionReveal className="mt-16">
            <p className="font-display text-accent tracking-[0.3em] text-xs uppercase mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent" />
              Case Study
            </p>
            <h1 className="font-display text-display-lg font-bold text-text-1 mb-6">
              {study.title}
            </h1>
            {study.tagline && (
              <p className="font-body italic text-text-2 text-xl leading-relaxed mb-6">
                {study.tagline}
              </p>
            )}
            {study.intro && (
              <p className="font-body text-text-2 leading-relaxed mb-6">{study.intro}</p>
            )}
            <p className="font-body text-text-3 text-sm border-l-2 border-accent pl-4 py-1">
              Last reviewed: {formatReviewed(study.lastReviewed)}. {study.notice}
            </p>
          </SectionReveal>

          {/* Sections */}
          <div className="mt-20 space-y-20">
            {study.sections.map((section, i) => (
              <SectionReveal key={section.id} delay={0.05}>
                <section id={section.id} className="border-t border-white/5 pt-10">
                  <p className="font-display text-accent text-xs tracking-widest uppercase mb-4">
                    {String(i + 1).padStart(2, "0")} · {section.label}
                  </p>
                  <h2 className="font-display text-display-md font-bold text-text-1 leading-tight mb-6">
                    {section.heading}
                  </h2>

                  {section.paragraphs?.map((text) => (
                    <p key={text} className="font-body text-text-2 text-lg leading-relaxed mb-4">
                      {text}
                    </p>
                  ))}

                  {section.points && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {section.points.map(({ title, text }) => (
                        <div key={text} className="border border-white/5 bg-canvas-soft p-6">
                          {title && (
                            <h3 className="font-display text-base font-bold text-text-1 mb-2">{title}</h3>
                          )}
                          <p className="font-body text-text-2 text-sm leading-relaxed">{text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.closing?.map((text) => (
                    <p key={text} className="font-body text-text-2 text-lg leading-relaxed mt-6">
                      {text}
                    </p>
                  ))}

                  {section.id === study.contactSectionId && (
                    <Link
                      href="/#contact"
                      data-cursor="CHAT"
                      className="mag-btn mt-6 px-8 py-4 bg-accent text-canvas font-display font-semibold text-sm tracking-widest uppercase hover:bg-accent-dim transition-colors duration-300"
                    >
                      Get In Touch
                    </Link>
                  )}
                </section>
              </SectionReveal>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
