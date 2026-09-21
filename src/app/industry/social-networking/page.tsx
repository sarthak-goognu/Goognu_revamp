import type { Metadata } from "next";
import {
  Users, Zap, Sparkles,
  Network, Brain, Lock, Smartphone,
  Bot, LineChart, Glasses, Link2, Cloud,
  Share2, Briefcase, Image as ImageIcon, Heart, MessagesSquare,
  Tags, Star, Building2, Radio,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel, ProcessSteps, SimpleTagGrid,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/socialNetworking.html's real
// section architecture: hero, trust strip, about panel (solutions), stats,
// "why choose us" carousel, network-types tag grid, technologies carousel,
// approach process steps, testimonials, related services, FAQ, CTA.
const ACCENT = "from-sky-500 to-blue-600";

const CAPABILITY_ICONS = [Network, Brain, Lock, Smartphone];
const TECH_ICONS = [Bot, LineChart, Glasses, Link2, Cloud];
const FEATURE_ICONS = [Share2, Briefcase, ImageIcon, Heart, MessagesSquare, Tags, Star, Building2, Radio];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function SocialNetworkingIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Social Networking"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Consult Our Experts"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="social networking" />

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
              icon: CAPABILITY_ICONS[i] ?? Users,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Network Types" title={content.extraSections![0].title} accent={ACCENT} />
          <SimpleTagGrid
            accent={ACCENT}
            columns={3}
            items={content.extraSections![0].items.map((item, i) => ({
              icon: FEATURE_ICONS[i] ?? Zap,
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
            eyebrow="Our Approach"
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
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="social networking" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
