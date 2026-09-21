import type { Metadata } from "next";
import {
  CalendarCheck, Briefcase, Compass, Sparkles, Users, ScrollText,
  MapPinned, CreditCard, Brain, Cog, BarChart3, Cloud, Link2,
  Wifi, Languages, Bell, ListChecks, Map as MapIcon, ShieldCheck, LineChart, MessageSquare,
  Lock, Compass as CompassIcon,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  SimpleTagGrid, IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/travel.html's real section
// architecture: hero, trust strip, why-choose about panel, stats, application
// carousel, standout-services tag grid, technology carousel, features tag
// grid, testimonials, related services, FAQ, CTA.
const ACCENT = "from-teal-500 to-cyan-600";

const PLATFORM_ICONS = [CalendarCheck, Briefcase, Compass];
const SERVICE_ICONS = [ListChecks, Wifi, CreditCard, Users, LineChart];
const TECH_ICONS = [Brain, Cog, BarChart3, Cloud, Link2, Wifi];
const FEATURE_ICONS = [
  Languages, Bell, CalendarCheck, ScrollText, MapPinned, CreditCard,
  BarChart3, MessageSquare, Lock, CompassIcon, MapIcon, ShieldCheck,
];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function TravelIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Travel Apps"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Book a Free Consultation"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="travel" />

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
            eyebrow="Our Applications"
            title={content.platforms!.title}
            description={content.platforms!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.platforms!.items.map((item, i) => ({
              icon: PLATFORM_ICONS[i] ?? Compass,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What Makes Us Stand Out"
            title={content.services!.title}
            description={content.services!.description}
            accent={ACCENT}
          />
          <SimpleTagGrid
            accent={ACCENT}
            items={content.services!.items.map((item, i) => ({
              icon: SERVICE_ICONS[i] ?? ListChecks,
              title: item.title,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Advanced Technologies"
            title={content.technologies!.title}
            description={content.technologies!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
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
            eyebrow="Features"
            title={content.extraSections![0].title}
            description={content.extraSections![0].description}
            accent={ACCENT}
          />
          <SimpleTagGrid
            accent={ACCENT}
            items={content.extraSections![0].items.map((item, i) => ({
              icon: FEATURE_ICONS[i] ?? Sparkles,
              title: item.title,
            }))}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="travel" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
