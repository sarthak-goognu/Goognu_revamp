import type { Metadata } from "next";
import {
  Brain, Cloud, Lock, Wrench, Settings2,
  PlaneTakeoff, Users, Package, ShieldCheck, Sparkles,
  Wifi, Link2, BarChart3, Glasses,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  ProcessSteps, IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/aviation.html's real section
// architecture: hero, trust strip, "why choose" about panel, stats, services
// (capabilities) carousel, process steps, technology carousel, testimonials,
// related services, FAQ, CTA.
const ACCENT = "from-sky-500 to-blue-600";

const CAPABILITY_ICONS = [PlaneTakeoff, Users, Wrench, Package, ShieldCheck, Brain, Cloud, Settings2];
const TECH_ICONS = [Brain, Lock, Wifi, Link2, BarChart3, Glasses];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function AviationIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Aviation Software"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="aviation" />

      <AboutPanel
        eyebrow="Why Choose Us"
        title={content.about!.title}
        description={content.about!.description}
        items={content.about!.items}
        accent={ACCENT}
      />

      <StatsBand />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Capabilities"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? PlaneTakeoff,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Process"
            title={content.extraSections![0].title}
            description={content.extraSections![0].description}
            accent={ACCENT}
          />
          <ProcessSteps
            accent={ACCENT}
            steps={content.extraSections![0].items.map((item) => ({
              title: item.title,
              description: item.description ?? "",
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Technology"
            title={content.technologies!.title}
            description={content.technologies!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            variant="numbered"
            items={content.technologies!.items.map((item, i) => ({
              icon: TECH_ICONS[i] ?? Sparkles,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="aviation" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
