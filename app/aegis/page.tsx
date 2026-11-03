import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { AEGIS } from "@/lib/aegis";

export const metadata: Metadata = {
  title: "Aegis Review case study | Abdulbasit Adigun",
  description: "Aegis Review: AI code review and security audit that has to prove its findings. Private and under active development.",
};

export default function AegisPage() {
  return <CaseStudy study={AEGIS} />;
}
