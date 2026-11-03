/* ── Shared shape for private project case studies ── */

export interface CaseStudySection {
  id: string;
  label: string;
  heading: string;
  paragraphs?: string[];
  table?: [string, string][];
  points?: { title?: string; text: string }[];
  bullets?: string[];
  closing?: string[];
}

export interface CaseStudy {
  title: string;
  tagline?: string;
  intro?: string;
  lastReviewed: string;
  notice: string;
  sections: CaseStudySection[];
  /* section that gets the "Get In Touch" button */
  contactSectionId: string;
}

export function formatReviewed(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  });
}
