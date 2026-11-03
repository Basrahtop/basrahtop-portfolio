/* ── Aegis: every public fact lives here ────────── */
// Aegis is private and changing quickly. Update `lastReviewed`
// whenever any text in this file is checked or changed.

import type { CaseStudy, CaseStudySection } from "./caseStudy";

export const lastReviewed = "2026-11-03";

export const AEGIS_NOTICE = "Aegis changes quickly, so figures here are dated and will go out of date.";

export const AEGIS_SECTIONS: CaseStudySection[] = [
  {
    id: "what",
    label: "What it is",
    heading: "What it is",
    paragraphs: [
      "Aegis is a GitHub App built at NexTrium that reviews code for bugs and security problems. It runs on Cloudflare Workers and does two jobs.",
    ],
    points: [
      { title: "Pull request reviews",            text: "When a pull request opens, Aegis rates its risk (low, medium or high) from the files it touches. AI models look for bugs, and only findings that a separate panel of models agrees on are posted." },
      { title: "Whole-repository security audits", text: "On request, Aegis audits a codebase at an exact commit. It splits the code into batches, and three \"hunter\" models look for different kinds of problems. A separate jury of models votes on each finding. Standard scanners add results for code patterns, vulnerable dependencies, leaked secrets and unsafe CI workflows. Confirmed findings go out privately, as a draft security advisory plus an email. Nothing sensitive is posted in public." },
    ],
    closing: [
      "Cost controls are built in. Every audit starts with a free preview of the plan and its estimated cost, files unchanged since their last audit are skipped, and paid results are saved so a retry only pays for what is missing.",
    ],
  },
  {
    id: "process",
    label: "How I work",
    heading: "How I work",
    paragraphs: [
      "I set the requirements and make the decisions. For each feature, the AI coding agent first researches current work, then plans and records the trade-offs and risks of each decision before any code is written. The agent writes most of the code. I measure efficiency and cost, and I specified the proof lab described below, which the agent built to my requirements.",
    ],
  },
  {
    id: "where",
    label: "Where it ran",
    heading: "Where it ran",
    paragraphs: [
      "From 22 October to 2 November 2026, Aegis ran on NexTrium's own repositories. It is installed on three GitHub accounts: the NexTrium and zivana-labs organisations, and one personal account.",
    ],
  },
  {
    id: "pr-reviews",
    label: "Pull request reviews",
    heading: "Pull request reviews",
    paragraphs: [
      "Product repositories only.",
    ],
    table: [
      ["Pull requests",            "21, across 5 repositories"],
      ["Review rounds",            "27"],
      ["Rated high / medium risk", "9 / 12"],
      ["Cost",                     "$0.51 for the 16 reviews with cost records since 28 Oct, about 3 cents each"],
      ["Findings posted",          "0"],
    ],
    closing: [
      "On two of these pull requests the finding models raised 7 possible issues, and the voting models rejected all of them. I did not check whether those rejections were right, so I read this as a cost figure, not a quality figure.",
    ],
  },
  {
    id: "audits",
    label: "Security audits",
    heading: "Security audits",
    paragraphs: [
      "The NexTrium website monorepo: public site, admin dashboard and contributor portal.",
    ],
    table: [
      ["Audit runs",                  "7, over 4 days"],
      ["Files covered",               "249 of 348"],
      ["Private security advisories", "6, with email alerts"],
      ["Distinct issues disclosed",   "29: 16 vulnerable dependencies and 13 code issues"],
      ["Cost",                        "$4.83"],
    ],
  },
  {
    id: "proof",
    label: "Proof",
    heading: "Were the findings real?",
    paragraphs: [
      "I did not take the AI's word for it. Every finding was tested in a separate private proof lab: a copy of the exact audited code with fake data. A finding counts as real only if a test fails on the audited code. The proof lab is manual today.",
    ],
    bullets: [
      "43 findings were tested and 17 were real: 1 critical, 2 high, 5 medium and 9 low.",
      "Aegis surfaced 16 of the 17. The one it missed was a database permission setting that lives outside the code.",
      "That is about 40% of tested findings being real, and about $0.30 of audit spend per real issue.",
      "Our team fixed the confirmed issues. Every proof that failed on the old code passes on the fixed code, except one low-risk issue we chose to accept.",
    ],
  },
  {
    id: "learned",
    label: "What we learned",
    heading: "What we learned and changed",
    points: [
      { title: "AI alone was not enough.",                      text: "We added standard scanners, then the proof lab, so we could measure quality instead of assuming it." },
      { title: "The jury needed context.",                       text: "On the latest run, half of the confirmed findings were real. All three false security findings came from models not seeing a protection in another file. Aegis now shows the jury those files before it votes. Nobody has measured the effect on a live run yet." },
      { title: "Cheap jurors can be too lenient or too strict.", text: "The jury wrongly rejected about 1 in 3 of the split-vote findings we tested. Aegis now lists any security finding that a single juror approves privately, for a person to check." },
      { title: "Repository-specific tuning is a risk.",          text: "Every change is now tested against simulated Rails, Django, Laravel, Go and Spring layouts, and checked on 14 open-source projects." },
    ],
  },
  {
    id: "limits",
    label: "Limits",
    heading: "Limits",
    points: [
      { title: "One audited codebase.",           text: "Nearly all of it is TypeScript." },
      { title: "Small numbers.",                  text: "17 real issues and 43 tested findings give wide uncertainty, so these are not accuracy claims." },
      { title: "A small in-house benchmark.",     text: "10 planted bugs, written to my own specification. I treat it as a regression check, not proof of general accuracy." },
      { title: "Unmeasured languages.",           text: "Aegis audits many languages, but quality outside TypeScript and Solidity is not measured." },
    ],
  },
  {
    id: "next",
    label: "Next",
    heading: "Next",
    paragraphs: [
      "Turn the proof lab into a proper study: a sealed set of bugs I have not tuned against, repeated runs, recall and precision per bug class with confidence intervals, and attacks on the reviewer itself, such as instructions hidden in the code under review.",
    ],
  },
  {
    id: "availability",
    label: "Availability",
    heading: "Availability",
    paragraphs: [
      "Private. Technical and non-technical write-ups are planned. For a demo or access, contact me.",
    ],
  },
];

export const AEGIS: CaseStudy = {
  title: "Aegis Review",
  tagline: "AI code review and security audit that has to prove its findings",
  intro: "Private, under active development. Details and demo on request.",
  lastReviewed,
  notice: AEGIS_NOTICE,
  sections: AEGIS_SECTIONS,
  contactSectionId: "availability",
};
