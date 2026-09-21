import type { Metadata } from "next";
import {
  BookOpen, Video, ClipboardList, Sparkles,
  GraduationCap, Layers, Cloud, LineChart, Smartphone,
  Zap, Plug, BarChart3, Users, Gauge,
  Brain, Link2, Bot, Lock,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/education.html's real section
// architecture: hero, trust strip, about panel, stats, capability carousel,
// why-choose carousel, tech carousel, process extras, testimonials, related
// services, FAQ, CTA.
const ACCENT = "from-indigo-500 to-violet-500";

const CAPABILITY_ICONS = [GraduationCap, Layers, Cloud, LineChart, Smartphone];
const SERVICE_ICONS = [Zap, Plug, BarChart3, Users, Gauge, Sparkles];
const TECH_ICONS = [Brain, Link2, Cloud, Bot, Lock];
const PROCESS_ICONS = [ClipboardList, Layers, Bot, Plug, BookOpen, Sparkles, Gauge, Zap];

export const metadata: Metadata = {
  title: "Education App Development Company | Goognu",
  description: content.description,
};

export default function EducationIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Education App Development"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Talk to Our Consultant"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="education" />

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
              icon: CAPABILITY_ICONS[i] ?? GraduationCap,
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
              icon: SERVICE_ICONS[i] ?? Zap,
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

      {content.extraSections?.map((section) => (
        <section key={section.title} className="py-16 bg-surface">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading eyebrow="Our Process" title={section.title} description={section.description} accent={ACCENT} />
            <CardCarousel
              accent={ACCENT}
              variant="numbered"
              items={section.items.map((item, i) => ({
                icon: PROCESS_ICONS[i] ?? ClipboardList,
                title: item.title,
                description: item.description,
              }))}
            />
          </div>
        </section>
      ))}

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="education" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
