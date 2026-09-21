import type { Metadata } from "next";
import {
  Sprout, MessageSquareWarning, Cloud, Brain, Wifi, TrendingUp, Building2, Satellite,
  Tractor, Truck, PawPrint, Droplets, ScanEye,
  Link2, Bot, Radio, Warehouse, Store, Sparkles,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  SimpleTagGrid, ProcessSteps, IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/agriculture.html's real
// section architecture: hero, trust strip, "our expertise" about panel, stats,
// "why choose" capability carousel, service tag grid, technology carousel,
// process steps, testimonials, related services, FAQ, CTA.
const ACCENT = "from-lime-500 to-green-600";

const CAPABILITY_ICONS = [MessageSquareWarning, Cloud, Cloud, Brain, Wifi, TrendingUp, Building2, Satellite];
const SERVICE_ICONS = [ScanEye, Tractor, Truck, PawPrint, Droplets, Brain];
const TECH_ICONS = [Brain, Link2, Bot, Radio, Warehouse, Store];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function AgricultureIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Agriculture Software"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="agriculture" />

      <AboutPanel
        eyebrow="Our Expertise"
        title={content.about!.title}
        description={content.about!.description}
        items={content.about!.items}
        accent={ACCENT}
      />

      <StatsBand />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why Choose Us"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? Sprout,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Solutions"
            title={content.services!.title}
            description={content.services!.description}
            accent={ACCENT}
          />
          <SimpleTagGrid
            accent={ACCENT}
            items={content.services!.items.map((item, i) => ({
              icon: SERVICE_ICONS[i] ?? Sprout,
              title: item.title,
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

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="agriculture" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
