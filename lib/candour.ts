/* ── Candour: every public fact lives here ──────── */
// Candour is private and under development. Update `lastReviewed`
// whenever any text in this file is checked or changed.

import type { CaseStudy } from "./caseStudy";

export const lastReviewed = "2026-11-03";

export const CANDOUR: CaseStudy = {
  title: "Candour",
  tagline: "Candidate screening that explains itself and can be challenged",
  intro: "Private system, built at NexTrium Global Innovations. Details and demo on request.",
  lastReviewed,
  notice: "This system is under development and details change.",
  contactSectionId: "availability",
  sections: [
    {
      id: "why",
      label: "Why",
      heading: "Why I designed it",
      paragraphs: [
        "Every rejection I received was a generic message. It gave me no way to learn what the recruiter had actually evaluated, and no way to say \"I think I am qualified, and here is the evidence.\" I designed Candour to fix that: every applicant gets a written reason for their result, a right to dispute it once with evidence, and a recruiter who can override the outcome.",
        "I designed the system, its rules and its research approach. AI coding agents wrote the code.",
      ],
    },
    {
      id: "how",
      label: "How it works",
      heading: "How it works",
      points: [
        { title: "Two layers of evidence",                 text: "Layer 1 reads the resume and cover note against the role. Layer 2 inspects what the candidate points to: repositories, portfolios, published work and other public links." },
        { title: "Five evaluation tracks",                 text: "Engineering, Product and Design, Operations, Research and Strategy, and Community and Events each have their own rubric and their own blend of resume and artifact evidence. A designer is never marked down for having no code." },
        { title: "Several models, averaged per dimension", text: "Averaging across models is meant to dilute the bias of any single model. Provider fallback and schema validation keep a run alive when one provider fails." },
        { title: "Untrusted input",                        text: "Candidate text and crawled pages are labelled as untrusted in every prompt, so instructions hidden in them are not followed." },
        { title: "Feedback for every candidate",           text: "A feedback letter and an anonymised report for every candidate, with findings per dimension." },
        { title: "One rebuttal per report",                text: "The candidate disputes chosen dimensions with evidence, the system re-evaluates only those claims, and a recruiter accepts, asks for more evidence, or declines." },
        { title: "A recruiter co-pilot",                   text: "Recruiters can add evidence the crawler cannot reach, ask about a score, or override it. Every turn is saved to an audit thread, and an automated rescreen cannot overwrite a finalised human decision." },
      ],
    },
    {
      id: "measurement",
      label: "Measurement",
      heading: "How I plan to measure it",
      paragraphs: [
        "Accuracy comes from two independent signals:",
      ],
      points: [
        { title: "1. Candidate feedback",                     text: "Applicants rate the fairness and quality of their report and can rebut it. Feedback from shortlisted, reviewed and rejected candidates is meant to weigh more than feedback from accepted ones, because they are the people the system might have wronged." },
        { title: "2. Recruiter review of accepted candidates", text: "A human review of everyone the system recommends confirms or corrects the result." },
      ],
      closing: [
        "Candidates can already rate their report, and the platform records ratings and rebuttals. The analysis that weights and combines these signals into an accuracy measure is not built yet, so I make no accuracy claim today.",
      ],
    },
    {
      id: "status",
      label: "Status",
      heading: "Status and next steps",
      points: [
        { title: "Now",            text: "Under active development." },
        { title: "Being fixed now", text: "The system targets two models per candidate but still produces a result if only one succeeds. It will require two, or mark the result as lower confidence." },
        { title: "Next",           text: "Build the analysis that turns candidate feedback and recruiter review into an accuracy measure, track how often the models disagree, and test the defence against hidden instructions in resumes." },
      ],
    },
    {
      id: "stack",
      label: "Stack",
      heading: "Stack",
      paragraphs: [
        "TypeScript, Node, Supabase (Postgres), REST API with bearer-token authentication and signed webhooks, five LLM providers behind a schema-validated fallback chain, 14 test suites.",
      ],
    },
    {
      id: "availability",
      label: "Availability",
      heading: "Availability",
      paragraphs: [
        "Private. A technical write-up and a non-technical write-up are planned. For a demo or access, contact me.",
      ],
    },
  ],
};
