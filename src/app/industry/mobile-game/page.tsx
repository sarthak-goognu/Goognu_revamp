import type { Metadata } from "next";
import {
  Gamepad2,
  Cast, Users, Puzzle,
  Apple, Smartphone, Layers,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel, ProcessSteps,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/mobileGame.html's real section
// architecture: hero, trust strip, about panel (features), stats, game-type
// carousel, platform carousel, process steps, testimonials, related services, FAQ, CTA.
const ACCENT = "from-fuchsia-600 to-pink-500";

const CAPABILITY_ICONS = [Cast, Users, Puzzle];
const PLATFORM_ICONS = [Apple, Smartphone, Layers];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function MobileGameIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Mobile Game Development"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="mobile game" />

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
            eyebrow="Game Types"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? Gamepad2,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Platforms"
            title={content.platforms!.title}
            description={content.platforms!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.platforms!.items.map((item, i) => ({
              icon: PLATFORM_ICONS[i] ?? Apple,
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
            title={content.services!.title}
            description={content.services!.description}
            accent={ACCENT}
          />
          <ProcessSteps
            accent={ACCENT}
            steps={content.services!.items.map((item) => ({
              title: item.title,
              description: item.description ?? "",
            }))}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="mobile game" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
