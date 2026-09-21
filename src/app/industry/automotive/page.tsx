import type { Metadata } from "next";
import {
  Car,
  Brain, Cloud, Cpu, Network, Radio, UploadCloud,
  Monitor, Truck, Wifi, Bot, Fingerprint, BatteryCharging, CircuitBoard, Waypoints,
  Layers3, Gauge, Boxes, Signal, RefreshCw, ScanEye,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  ProcessSteps, IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/automotive.html's real
// section architecture: hero, trust strip, "why choose" about panel, stats,
// solutions capability carousel, services carousel, technologies carousel,
// process steps, testimonials, related services, FAQ, CTA.
const ACCENT = "from-indigo-500 to-violet-600";

const CAPABILITY_ICONS = [Brain, Cloud, Cpu, Network, Radio, UploadCloud];
const SERVICE_ICONS = [Monitor, Truck, Wifi, Bot, Waypoints, Fingerprint, BatteryCharging, CircuitBoard];
const TECH_ICONS = [Layers3, Signal, Gauge, Bot, Boxes, RefreshCw, ScanEye, BatteryCharging];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function AutomotiveIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Automotive Software"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="automotive" />

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
            eyebrow="Solutions"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? Car,
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
              icon: SERVICE_ICONS[i] ?? Car,
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
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="automotive" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
