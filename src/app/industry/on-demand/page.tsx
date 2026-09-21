import type { Metadata } from "next";
import {
  Car, Wrench, Package, Store, HeartPulse, Truck, ShoppingCart, Handshake,
  Sparkles, Compass, Layers, ShieldCheck, Rocket, PenTool, Lock, Hammer, Repeat,
  Users, Zap,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/onDemand.html's real section
// architecture: hero, trust strip, why-choose about panel, stats, smart-features
// carousel, service-types carousel, industries carousel, process carousel,
// testimonials, related services, FAQ, CTA.
const ACCENT = "from-sky-500 to-blue-700";

const CAPABILITY_ICONS = [Store, HeartPulse, Truck, ShoppingCart, Wrench, Package];
const SERVICE_ICONS = [Car, Wrench, Package];
const INDUSTRY_ICONS = [Sparkles, HeartPulse, ShoppingCart, Truck, Handshake, Store];
const PROCESS_ICONS = [Compass, Layers, PenTool, Rocket, Users, Lock, Hammer, Repeat];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function OnDemandIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="On-Demand Apps"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Book a Free Consultation"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="on-demand" />

      <AboutPanel
        eyebrow="Why Goognu"
        title={content.about!.title}
        description={content.about!.description}
        items={content.about!.items}
        accent={ACCENT}
      />

      <StatsBand />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Smart Features"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? Zap,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Solutions"
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
            eyebrow="Industries"
            title={content.extraSections![0].title}
            description={content.extraSections![0].description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.extraSections![0].items.map((item, i) => ({
              icon: INDUSTRY_ICONS[i] ?? Sparkles,
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
            title={content.extraSections![1].title}
            description={content.extraSections![1].description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            variant="numbered"
            items={content.extraSections![1].items.map((item, i) => ({
              icon: PROCESS_ICONS[i] ?? ShieldCheck,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="on-demand" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
