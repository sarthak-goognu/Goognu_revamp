import type { Metadata } from "next";
import { Wallet, MapPin, Share2, Layers } from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/electricScooter.html's real
// section architecture: hero, trust strip, technology about panel, stats,
// feature carousel, testimonials, related services, FAQ, CTA. The Django
// export for this model only populates feature1-4 and one technology
// paragraph, so this page has fewer sections than the other industries.
const ACCENT = "from-lime-500 to-emerald-600";

const CAPABILITY_ICONS = [Wallet, MapPin, Share2, Layers];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function EScooterIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="E-Scooter Apps"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Book a Free Consultation"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="e-scooter" />

      <AboutPanel
        eyebrow="Pioneering Mobility"
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
              icon: CAPABILITY_ICONS[i] ?? Layers,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="e-scooter" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
