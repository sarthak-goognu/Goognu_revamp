import type { Metadata } from "next";
import {
  Factory, ShieldCheck,
  Award, Lock, Cog, Headset,
  Lightbulb, Factory as FactoryIcon, ShieldAlert,
  Brain, Cloud, Cpu, LineChart, CheckCircle2, Truck,
  Bot, Radar, Boxes, Network, BarChart3,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  ProcessSteps, IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/manufacturing.html's real
// section architecture: hero, trust strip, compliance-products about panel,
// stats, "why trust" capability carousel, services carousel, technology
// carousel, Industry 4.0 + process step sections, testimonials, related
// services, FAQ, CTA.
const ACCENT = "from-amber-500 to-orange-600";

const CAPABILITY_ICONS = [Award, Lock, Cog, Headset];
const SERVICE_ICONS = [Lightbulb, FactoryIcon, Truck, ShieldAlert];
const TECH_ICONS = [Brain, Cloud, Cpu, LineChart, CheckCircle2, Network];
const ERA_ICONS = [Bot, Radar, Boxes, Network, BarChart3, ShieldCheck];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function ManufacturingIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Manufacturing IT"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="manufacturing" />

      <AboutPanel
        eyebrow="Compliance-Ready"
        title={content.about!.title}
        description={content.about!.description}
        items={content.about!.items}
        accent={ACCENT}
      />

      <StatsBand />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why Trust Us"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? Factory,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Services"
            title={content.services!.title}
            description={content.services!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.services!.items.map((item, i) => ({
              icon: SERVICE_ICONS[i] ?? Factory,
              title: item.title,
              description: item.description,
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
              icon: TECH_ICONS[i] ?? Cpu,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Industry 4.0"
            title={content.extraSections![0].title}
            description={content.extraSections![0].description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.extraSections![0].items.map((item, i) => ({
              icon: ERA_ICONS[i] ?? Bot,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Process"
            title={content.extraSections![1].title}
            description={content.extraSections![1].description}
            accent={ACCENT}
          />
          <ProcessSteps
            accent={ACCENT}
            steps={content.extraSections![1].items.map((item) => ({
              title: item.title,
              description: item.description ?? "",
            }))}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="manufacturing" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
