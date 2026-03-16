"use client";

import Image from "next/image";
import SectionReveal from "./SectionReveal";

const SKILLS = [
  "Brand Identity", "Typography", "UI/UX Design",
  "Motion Graphics", "Web Development", "Event Production",
];

const STATS = [
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+",  label: "Years Experience" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-canvas-soft relative overflow-hidden"
    >
      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <SectionReveal>
          <p className="font-display text-accent tracking-[0.3em] text-xs uppercase mb-16 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            About Me
          </p>
        </SectionReveal>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Photo column */}
          <SectionReveal direction="left" delay={0.1}>
            <div className="relative">
              <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 overflow-hidden">
                <Image
                  src="/photo.jpg"
                  alt="Abdulbasit Adigun"
                  fill
                  sizes="(max-width: 1024px) 384px, 384px"
                  className="object-cover object-top"
                  priority
                />

                {/* Decorative accent corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-accent translate-x-4 translate-y-4" />
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-accent -translate-x-4 -translate-y-4" />
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-accent text-canvas px-5 py-3 font-display font-bold text-sm tracking-wide">
                Based in Nigeria
              </div>
            </div>
          </SectionReveal>

          {/* Text column */}
          <div className="space-y-8">
            <SectionReveal delay={0.15}>
              <h2 className="font-display text-display-md font-bold text-text-1 leading-tight">
                Building things that{" "}
                <span className="text-accent italic font-body font-normal">
                  matter
                </span>
              </h2>
            </SectionReveal>

            <SectionReveal delay={0.25}>
              <p className="font-body text-text-2 text-lg leading-relaxed">
              I&apos;m a multi-disciplinary creative with a passion for design that communicates,{" "}
              code that performs, and events that connect people. I believe great work happens{" "}
              at the intersection of aesthetics and function.
            </p>
          </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="font-body text-text-2 leading-relaxed">
                When I&apos;m not pushing pixels or writing code, you&apos;ll find me organising{" "}
              community events or volunteering for causes close to my heart.{" "}
                Every project is an opportunity to make something meaningful.
              </p>
            </SectionReveal>

            {/* Skills */}
            <SectionReveal delay={0.35}>
              <div className="flex flex-wrap gap-2 pt-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="accent-border px-4 py-1.5 text-sm font-display text-text-2 hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </SectionReveal>

            {/* Stats */}
            <SectionReveal delay={0.45}>
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5">
                {STATS.map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-bold text-accent">{value}</p>
                    <p className="font-body text-text-3 text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>

      {/* Accent line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
    </section>
  );
}
