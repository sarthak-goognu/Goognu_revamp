import type { Metadata } from "next";
import {
  BatteryCharging, Truck, BatteryFull, Radio,
  Clock, Headset, ShieldCheck, Layers, Workflow,
  Zap, Map, Gauge, Stethoscope, Repeat, CreditCard, BarChart3,
  Waypoints, Fuel, Wrench, ShieldAlert,
  Cpu, MonitorSmartphone,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  SimpleTagGrid, ProcessSteps, IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/electricVehicle.html's real
// section architecture: hero, trust strip, services about panel, stats,
// "why choose" capability carousel, EV app types tag grid, feature carousel,
// process steps, testimonials, related services, FAQ, CTA.
const ACCENT = "from-teal-500 to-emerald-600";

const CAPABILITY_ICONS = [Clock, Headset, ShieldCheck, Layers, Workflow];
const SERVICE_ICONS = [Zap, Truck, Map, BatteryFull, Stethoscope, Repeat, CreditCard, BarChart3, Waypoints, Fuel, Wrench, ShieldAlert];
const TECH_ICONS = [Truck, BatteryFull, Map, MonitorSmartphone, Radio, Gauge];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function EVehicleIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Electric Vehicle Software"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="electric vehicle" />

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
            eyebrow="Why Choose Us"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? BatteryCharging,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="EV Apps"
            title={content.services!.title}
            description={content.services!.description}
            accent={ACCENT}
          />
          <SimpleTagGrid
            accent={ACCENT}
            items={content.services!.items.map((item, i) => ({
              icon: SERVICE_ICONS[i] ?? Zap,
              title: item.title,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Key Features"
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
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="electric vehicle" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
