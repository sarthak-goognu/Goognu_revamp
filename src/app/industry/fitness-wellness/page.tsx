import type { Metadata } from "next";
import {
  Brain, Activity, Salad, Watch, ClipboardList,
  Cpu, Users2, Zap,
  Bot, MessageCircle, Cloud, Link2, ShieldCheck, Glasses,
  Trophy, Moon, Lock,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel, ProcessSteps, SimpleTagGrid,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/wellness.html's real section
// architecture: hero, trust strip, about panel (services), stats, "why choose
// us" carousel, core-features tag grid, technologies carousel, roadmap
// process steps, testimonials, related services, FAQ, CTA.
const ACCENT = "from-lime-500 to-emerald-500";

const CAPABILITY_ICONS = [Cpu, Users2, Zap];
const TECH_ICONS = [Bot, MessageCircle, Cloud, Link2, ShieldCheck, Glasses];
const FEATURE_ICONS = [Brain, Activity, Salad, Watch, ClipboardList, Users2, Users2, Activity, Zap, Moon, Lock];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function FitnessWellnessIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Fitness & Wellness"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="fitness and wellness" />

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
            eyebrow="Why Goognu"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? Cpu,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Core Features"
            title={content.extraSections![0].title}
            description={content.extraSections![0].description}
            accent={ACCENT}
          />
          <SimpleTagGrid
            accent={ACCENT}
            columns={4}
            items={content.extraSections![0].items.map((item, i) => ({
              icon: FEATURE_ICONS[i] ?? Trophy,
              title: item.title,
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
              icon: TECH_ICONS[i] ?? Bot,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
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
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="fitness and wellness" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
