import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";
import { CANDOUR } from "@/lib/candour";

export const metadata: Metadata = {
  title: "Candour case study | Abdulbasit Adigun",
  description: "Candour: candidate screening that explains itself and can be challenged. Private and under development.",
};

export default function CandourPage() {
  return <CaseStudy study={CANDOUR} />;
}
