import type { Metadata } from "next";
import {
  Handshake, Code2, Smartphone, Building2,
  BarChart3, Video, Banknote, ShieldCheck, UserCheck, TrendingUp, Repeat, Briefcase,
  Brain, Link2, Cloud, Sparkles, Network, PieChart,
  Users, Search, Workflow, Home, FileText, LineChart,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel, SimpleTagGrid,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/realEstate.html's real section
// architecture: hero, trust strip, about panel, stats, key-features carousel,
// why-choose carousel, tech carousel, solutions tag grid + process extras,
// testimonials, related services, FAQ, CTA.
const ACCENT = "from-stone-600 to-amber-600";

const CAPABILITY_ICONS = [BarChart3, Video, Banknote, ShieldCheck, UserCheck, TrendingUp, Repeat, Briefcase];
const SERVICE_ICONS = [Handshake, LineChart, Code2];
const TECH_ICONS = [Brain, Link2, Cloud, Sparkles, Network, PieChart];
const SOLUTION_ICONS = [Sparkles, Users, Search, Workflow, Link2, LineChart, Home, FileText];
const PROCESS_ICONS = [Video, Brain, Handshake, Building2, Smartphone, Home];

export const metadata: Metadata = {
  title: "Advanced Real Estate Software Development | Goognu",
  description: content.description,
};

export default function RealEstateIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Real Estate Development"
        title={content.title}
        subtitle={content.description}
        accent={ACCENT}
      />
      <TrustStrip industryLabel="real estate" />

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
            eyebrow="Key Features"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? BarChart3,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why Goognu"
            title={content.services!.title}
            description={content.services!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.services!.items.map((item, i) => ({
              icon: SERVICE_ICONS[i] ?? Handshake,
              title: item.title,
              description: item.description,
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
              icon: TECH_ICONS[i] ?? Brain,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      {content.extraSections?.[0] && (
        <section className="py-16 bg-surface">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Capabilities"
              title={content.extraSections[0].title}
              description={content.extraSections[0].description}
              accent={ACCENT}
            />
            <SimpleTagGrid
              accent={ACCENT}
              items={content.extraSections[0].items.map((item, i) => ({
                icon: SOLUTION_ICONS[i] ?? Sparkles,
                title: item.title,
              }))}
            />
          </div>
        </section>
      )}

      {content.extraSections?.[1] && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow="Our Process"
              title={content.extraSections[1].title}
              description={content.extraSections[1].description}
              accent={ACCENT}
            />
            <CardCarousel
              accent={ACCENT}
              variant="numbered"
              items={content.extraSections[1].items.map((item, i) => ({
                icon: PROCESS_ICONS[i] ?? Video,
                title: item.title,
                description: item.description,
              }))}
            />
          </div>
        </section>
      )}

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="real estate" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
