import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/features/HeroSection";
import { AboutSection } from "@/components/features/AboutSection";
import { LegislativeSection } from "@/components/features/LegislativeSection";
import { BillsSection } from "@/components/features/BillsSection";
import { SocialWorkSection } from "@/components/features/SocialWorkSection";
import { PressSection } from "@/components/features/PressSection";
import { AccountabilitySection } from "@/components/features/AccountabilitySection";
import { CtaSection } from "@/components/features/CtaSection";

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
    <>
      <HeroSection />
      <AboutSection />
      <LegislativeSection />
      <BillsSection />
      <SocialWorkSection />
      <PressSection />
      <AccountabilitySection />
      <CtaSection />
    </>
  );
}
