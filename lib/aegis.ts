/* ── Aegis: every public fact lives here ────────── */
// Aegis is private and changing quickly. Update `lastReviewed`
// whenever any text in this file is checked or changed.

import type { CaseStudy, CaseStudySection } from "./caseStudy";

export const lastReviewed = "2026-11-03";

export const AEGIS_NOTICE = "Aegis is under active development; details change quickly.";

export const AEGIS_SECTIONS: CaseStudySection[] = [
  {
    id: "what",
    label: "What it is",
    heading: "Multi-model AI security review",
    paragraphs: [
      "Aegis is a multi-model AI system for security code review and audit. Model reviewers propose findings, a verifier jury votes on them, and deterministic scanners run alongside.",
    ],
  },
  {
    id: "how",
    label: "How it works",
    heading: "Propose, vote, verify",
    points: [
      { title: "Hunters propose",        text: "Several AI model reviewers, called hunters, read the code and propose possible security findings." },
      { title: "The jury votes",         text: "A verifier jury of models votes on each proposed finding before it is reported." },
      { title: "Deterministic scanners", text: "Conventional security scanners run alongside the models, and their results are triaged together with the AI findings." },
      { title: "Risk engine",            text: "A risk engine sets how many human approvals a change needs." },
      { title: "Cost preview",           text: "Before an audit runs, Aegis shows a preview of what it will cost." },
    ],
  },
  {
    id: "process",
    label: "How I work",
    heading: "I direct, agents write",
    paragraphs: [
      "I set the requirements and make the decisions.",
      "For each feature, the coding agent first researches current work in the area and records the trade-offs and risks before any code is written.",
      "AI coding agents write most of the code.",
    ],
  },
  {
    id: "evaluation",
    label: "Evaluation",
    heading: "A small regression benchmark",
    paragraphs: [
      "On three recorded runs (29 Oct, 31 Oct and 3 Nov 2026), the majority jury found 10 of 10 planted vulnerabilities with 100% precision on a fixture of 10 planted vulnerabilities and 9 safe look-alike traps, for $0.14 to $0.20 a run. The reviewers alone reached 94% to 96% precision before the jury.",
    ],
  },
  {
    id: "limitations",
    label: "Limitations",
    heading: "What this does not prove",
    paragraphs: [
      "This is a small benchmark to my own specification. I treat it as a regression check, not proof of general accuracy. Results will change as the system changes.",
    ],
  },
  {
    id: "availability",
    label: "Availability",
    heading: "Private, for now",
    paragraphs: [
      "Private. Technical and non-technical write-ups are planned. For a demo or access, contact me.",
    ],
  },
];

export const AEGIS: CaseStudy = {
  title: "Aegis",
  lastReviewed,
  notice: AEGIS_NOTICE,
  sections: AEGIS_SECTIONS,
  contactSectionId: "availability",
};
