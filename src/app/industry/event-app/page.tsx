import type { Metadata } from "next";
import {
  CalendarPlus, Search, CalendarDays, Ticket, Camera, Radio,
  Building2, Rocket, LayoutGrid, Presentation, Video,
  Link2, MapPinned, Fingerprint, Smartphone,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, SectionHeading, CardCarousel,
  SimpleTagGrid, IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/eventAppDevelopment.html's
// real section architecture: hero, trust strip, stats, feature tag grid,
// services carousel, technology carousel, testimonials, related services,
// FAQ, CTA. The Django export has no about/why-choose fields for this model,
// so the About panel is intentionally omitted.
const ACCENT = "from-fuchsia-500 to-purple-600";

const CAPABILITY_ICONS = [CalendarPlus, Search, CalendarDays, Ticket, Camera, Radio];
const SERVICE_ICONS = [Building2, Rocket, LayoutGrid, Presentation, Video];
const TECH_ICONS = [Link2, MapPinned, Fingerprint, Smartphone];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function EventAppIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Event Apps"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Book a Free Consultation"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="event technology" />

      <StatsBand />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Features"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <SimpleTagGrid
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? CalendarPlus,
              title: item.title,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
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
              icon: SERVICE_ICONS[i] ?? Building2,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Tech"
            title={content.technologies!.title}
            description={content.technologies!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            variant="numbered"
            items={content.technologies!.items.map((item, i) => ({
              icon: TECH_ICONS[i] ?? Link2,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="event technology" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
