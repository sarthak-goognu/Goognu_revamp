import type { Metadata } from "next";
import {
  Workflow, ShieldCheck, LineChart,
  Plug, Cloud, Bot,
  Code2, FileText, Video,
  BarChart3, Brain,
  Building2, Microscope, HeartPulse, Dumbbell, Pill, Users, Home,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel, SimpleTagGrid,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/healthcare.html's real section
// architecture: hero, trust strip, about panel, stats, capabilities, sectors
// served (tag grid), services, technologies, testimonials, related services, FAQ, CTA.
const ACCENT = "from-emerald-500 to-teal-400";

const CAPABILITY_ICONS = [Plug, Cloud, Bot];
const SERVICE_ICONS = [Code2, FileText, Video];
const TECH_ICONS = [Cloud, BarChart3, Brain];
const SCOPE_ICONS = [Building2, Video, ShieldCheck, Microscope, HeartPulse, Dumbbell, Pill, Users, Home];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function HealthcareIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Healthcare Development"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="healthcare" />

      <AboutPanel
        eyebrow="Our Approach"
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
              icon: CAPABILITY_ICONS[i] ?? Plug,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Who We Serve" title={content.extraSections![0].title} accent={ACCENT} />
          <SimpleTagGrid
            accent={ACCENT}
            columns={3}
            items={content.extraSections![0].items.map((item, i) => ({
              icon: SCOPE_ICONS[i] ?? Building2,
              title: item.title,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Services"
            title={content.services!.title}
            description={content.services!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.services!.items.map((item, i) => ({
              icon: SERVICE_ICONS[i] ?? Code2,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
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
              icon: TECH_ICONS[i] ?? Cloud,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="healthcare" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
