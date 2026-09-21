import type { Metadata } from "next";
import {
  Layers, Puzzle, GitBranch, LifeBuoy,
  ShoppingBag, HeartPulse, Gamepad2, Dumbbell, Landmark, Vote,
  Users2, Building2, ShieldCheck, Store, Home, GraduationCap,
  Newspaper, Truck, Plane,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel, ProcessSteps, SimpleTagGrid,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/saasDevelopment.html's real
// section architecture: hero, trust strip, about panel (services), stats,
// perks carousel, industries-served tag grid, process steps, testimonials,
// related services, FAQ, CTA.
const ACCENT = "from-violet-600 to-indigo-500";

const CAPABILITY_ICONS = [Layers, Puzzle, GitBranch, LifeBuoy];
const INDUSTRY_ICONS = [
  ShoppingBag, HeartPulse, Gamepad2, Dumbbell, Landmark, Vote,
  Users2, Building2, ShieldCheck, Store, Home, GraduationCap, Newspaper, Truck, Plane,
];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function SaasDevelopmentIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="SaaS Development"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="SaaS" />

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
              icon: CAPABILITY_ICONS[i] ?? Layers,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Industries"
            title={content.extraSections![0].title}
            description={content.extraSections![0].description}
            accent={ACCENT}
          />
          <SimpleTagGrid
            accent={ACCENT}
            columns={4}
            items={content.extraSections![0].items.map((item, i) => ({
              icon: INDUSTRY_ICONS[i] ?? ShoppingBag,
              title: item.title,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Our Process" title={content.services!.title} accent={ACCENT} />
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
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="SaaS" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
