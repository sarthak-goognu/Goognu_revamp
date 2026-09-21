import type { Metadata } from "next";
import {
  ShoppingCart, Smartphone, CreditCard, ShieldCheck,
  Truck, Warehouse, Package, Network,
  Store, BarChart3, Plug,
  Sparkles, Brain, Cloud,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/ecommerce.html's real section
// architecture: hero, trust strip, about panel, stats, capability carousel,
// platform carousel, services carousel, tech carousel, testimonials, FAQ, CTA.
const ACCENT = "from-orange-500 to-rose-500";

const CAPABILITY_ICONS = [ShoppingCart, Network, Sparkles];
const PLATFORM_ICONS = [Truck, Warehouse, Package, Network];
const SERVICE_ICONS = [Store, BarChart3, Smartphone, Plug];
const TECH_ICONS = [Sparkles, Brain, Cloud];

export const metadata: Metadata = {
  title: "E-commerce Application Development Services | Goognu",
  description: content.description,
};

export default function EcommerceIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="E-Commerce Application"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Book a Free Consultation"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="e-commerce" />

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
            eyebrow="Capabilities"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? ShoppingCart,
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
              icon: PLATFORM_ICONS[i] ?? Truck,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Tailored to You"
            title={content.services!.title}
            description={content.services!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.services!.items.map((item, i) => ({
              icon: SERVICE_ICONS[i] ?? Store,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Tech"
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

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="e-commerce" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
