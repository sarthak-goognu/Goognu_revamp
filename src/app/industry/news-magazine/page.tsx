import type { Metadata } from "next";
import {
  Users, Cpu, Workflow, ClipboardList,
  Brain, Smartphone, Bell, Wallet, BookOpen, Search,
  Zap, Repeat, ShieldCheck, Sliders,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/newsMagazine.html's real
// section architecture: hero, trust strip, about panel, stats, core-features
// carousel, why-choose carousel, process extras, testimonials, related
// services, FAQ, CTA. (This JSON has no dedicated technology section.)
const ACCENT = "from-red-600 to-rose-500";

const CAPABILITY_ICONS = [Brain, Smartphone, Bell, Wallet, BookOpen, Search];
const SERVICE_ICONS = [Zap, Repeat, ShieldCheck, Sliders];
const PROCESS_ICONS = [ClipboardList, Search, Workflow, Cpu, Users, Zap, BookOpen, ShieldCheck];

export const metadata: Metadata = {
  title: "News and Magazine App Development Services | Goognu",
  description: content.description,
};

export default function NewsMagazineIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="News & Magazine App Development"
        title={content.title}
        subtitle={content.description}
        accent={ACCENT}
      />
      <TrustStrip industryLabel="news and magazine" />

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
            eyebrow="Core Features"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? Brain,
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

      {content.extraSections?.map((section) => (
        <section key={section.title} className="py-16 bg-white">
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
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="news and magazine" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
