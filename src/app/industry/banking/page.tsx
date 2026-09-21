import type { Metadata } from "next";
import {
  Users, Layers, ShieldCheck, Heart,
  Brain, Link2, Cloud, Bot, Lock, BarChart3,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel, ProcessSteps,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/banking.html's real section
// architecture: hero, trust strip, about panel (services), stats, "why
// choose us" carousel, technologies carousel, project roadmap process steps,
// testimonials, related services, FAQ, CTA.
const ACCENT = "from-amber-500 to-orange-600";

const CAPABILITY_ICONS = [Users, Layers, ShieldCheck, Heart];
const TECH_ICONS = [Brain, Link2, Cloud, Bot, Lock, BarChart3];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function BankingIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Banking Software Development"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="banking" />

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
              icon: CAPABILITY_ICONS[i] ?? Users,
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
              icon: TECH_ICONS[i] ?? Brain,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Roadmap"
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
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="banking" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
