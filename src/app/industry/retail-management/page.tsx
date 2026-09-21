import type { Metadata } from "next";
import {
  Brain, Layers, CreditCard, Cpu, BarChart3, Smartphone, Sparkles, Workflow,
  Gauge, Bell, ShieldCheck, CheckCircle2,
  ShoppingCart, Store, Package, Coins, Truck, Lock, Cloud, Network, LineChart,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/retailManagement.html's real
// section architecture: hero, trust strip, about panel, stats, capability
// carousel, services carousel, tech carousel, sectors + roadmap extras,
// testimonials, related services, FAQ, CTA.
const ACCENT = "from-amber-500 to-orange-500";

const CAPABILITY_ICONS = [Gauge, Bell, ShieldCheck, CheckCircle2];
const SERVICE_ICONS = [Brain, Layers, CreditCard, Cpu, BarChart3, Smartphone, Sparkles, Workflow];
const TECH_ICONS = [Brain, Lock, Cloud, Network, LineChart, Sparkles];
const SECTOR_ICONS = [ShoppingCart, Store, Package, Sparkles, Cpu, Coins, Truck];

export const metadata: Metadata = {
  title: "Retail Software Development Services | Goognu",
  description: content.description,
};

export default function RetailManagementIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Retail Software Development"
        title={content.title}
        subtitle={content.description}
        accent={ACCENT}
      />
      <TrustStrip industryLabel="retail" />

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
              icon: CAPABILITY_ICONS[i] ?? Gauge,
              title: item.title,
              description: item.description,
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
              icon: SERVICE_ICONS[i] ?? ShoppingCart,
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

      {content.extraSections?.map((section, sIdx) => (
        <section key={section.title} className={sIdx % 2 === 0 ? "py-16 bg-surface" : "py-16 bg-white"}>
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              eyebrow={sIdx === 0 ? "Sectors We Serve" : "Our Process"}
              title={section.title}
              description={section.description}
              accent={ACCENT}
            />
            <CardCarousel
              accent={ACCENT}
              variant={sIdx === 0 ? "icon" : "numbered"}
              items={section.items.map((item, i) => ({
                icon: sIdx === 0 ? SECTOR_ICONS[i] ?? Store : Workflow,
                title: item.title,
                description: item.description,
              }))}
            />
          </div>
        </section>
      ))}

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="retail" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
