import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/features/HeroSection";
import { AboutSection } from "@/components/features/AboutSection";
import { LegislativeSection } from "@/components/features/LegislativeSection";
import { BillsSection } from "@/components/features/BillsSection";
import { OpinionSection } from "@/components/features/OpinionSection";
import { SocialWorkSection } from "@/components/features/SocialWorkSection";
import { CasanareMapSection } from "@/components/features/CasanareMapSection";
import { MunicipalityParticipationProvider } from "@/components/features/MunicipalityParticipation";
import { PressSection } from "@/components/features/PressSection";
import { AccountabilitySection } from "@/components/features/AccountabilitySection";
import { CtaSection } from "@/components/features/CtaSection";
import { ScrollMotion } from "@/components/ui/ScrollMotion";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — ${siteConfig.description}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <MunicipalityParticipationProvider>
      <ScrollMotion />
      <HeroSection />
      <AboutSection />
      <LegislativeSection />
      <BillsSection />
      <OpinionSection />
      <SocialWorkSection />
      <CasanareMapSection />
      <PressSection />
      <AccountabilitySection />
      <CtaSection />
    </MunicipalityParticipationProvider>
  );
}
