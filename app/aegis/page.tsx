import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { AEGIS } from "@/lib/aegis";

export const metadata: Metadata = {
  title: "Aegis case study | Abdulbasit Adigun",
  description: "Aegis: multi-model AI security code review and audit. Private and under active development.",
};

export default function AegisPage() {
  return <CaseStudy study={AEGIS} />;
}
