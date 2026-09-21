import type { Metadata } from "next";
import {
  Truck, Network, Package, Warehouse,
  Zap, Brain, Radar, Sliders,
  LineChart, MapPin, Lock, Route, Satellite, Cloud,
  ClipboardList, Boxes, ShieldCheck, Plug, Gauge, Wrench, UserCircle,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/logistics.html's real section
// architecture: hero, trust strip, about panel, stats, why-choose carousel,
// tech carousel, process extras, testimonials, related services, FAQ, CTA.
// (This JSON has no dedicated "services"/"platforms" section distinct from
// the "about" offer list.)
const ACCENT = "from-teal-600 to-cyan-500";

const CAPABILITY_ICONS = [Zap, Brain, Radar, Sliders];
const TECH_ICONS = [LineChart, MapPin, Lock, Route, Satellite, Cloud];
const PROCESS_ICONS = [Route, Truck, ClipboardList, Boxes, ShieldCheck, Plug, LineChart, Gauge, Wrench, ClipboardList, Wrench, UserCircle];

export const metadata: Metadata = {
  title: "Transportation and Logistics Software Development Services | Goognu",
  description: content.description,
};

export default function LogisticsIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Logistics App Development"
        title={content.title}
        subtitle={content.description}
        accent={ACCENT}
      />
      <TrustStrip industryLabel="logistics" />

      <AboutPanel
        eyebrow="What We Offer"
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
            eyebrow="Technology"
            title={content.technologies!.title}
            description={content.technologies!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            variant="numbered"
            items={content.technologies!.items.map((item, i) => ({
              icon: TECH_ICONS[i] ?? LineChart,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      {content.extraSections?.map((section) => (
        <section key={section.title} className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Our Process" title={section.title} description={section.description} accent={ACCENT} />
            <CardCarousel
              accent={ACCENT}
              variant="numbered"
              items={section.items.map((item, i) => ({
                icon: PROCESS_ICONS[i] ?? Route,
                title: item.title,
                description: item.description,
              }))}
            />
          </div>
        </section>
      ))}

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="logistics" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
