import type { Metadata } from "next";
import {
  Brain, FileText, Workflow, ShieldCheck,
  Cpu, Users, Gauge, Sliders, Bot, Lock, Cloud, Plug,
  Zap, Building2, Landmark, Handshake,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/Insurance.html's real section
// architecture: hero, trust strip, about panel, stats, capability carousel,
// services (who we serve) carousel, testimonials, related services, FAQ, CTA.
const ACCENT = "from-cyan-600 to-blue-500";

const CAPABILITY_ICONS = [Cpu, Users, Gauge, Sliders, Bot, Lock, Cloud, Plug];
const SERVICE_ICONS = [Zap, Building2, Landmark, Handshake];
const PROCESS_ICONS = [Brain, FileText, Workflow, ShieldCheck, Lock];

export const metadata: Metadata = {
  title: "Insurance Software Development Services | Goognu",
  description: content.description,
};

export default function InsuranceIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Insurance Software Development"
        title={content.title}
        subtitle={content.description}
        accent={ACCENT}
      />
      <TrustStrip industryLabel="insurance" />

      <AboutPanel
        eyebrow="What We Build"
        title={content.about!.title}
        description={content.about!.description}
        items={content.about!.items}
        accent={ACCENT}
      />

      <StatsBand />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why Goognu"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? Cpu,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Who We Serve"
            title={content.services!.title}
            description={content.services!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.services!.items.map((item, i) => ({
              icon: SERVICE_ICONS[i] ?? Zap,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      {content.extraSections?.map((section) => (
        <section key={section.title} className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Our Approach" title={section.title} description={section.description} accent={ACCENT} />
            <CardCarousel
              accent={ACCENT}
              variant="numbered"
              items={section.items.map((item, i) => ({
                icon: PROCESS_ICONS[i] ?? Brain,
                title: item.title,
                description: item.description,
              }))}
            />
          </div>
        </section>
      ))}

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="insurance" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
