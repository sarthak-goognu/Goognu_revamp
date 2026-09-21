import type { Metadata } from "next";
import {
  Search, MapPin, Compass, BadgeCheck, Gift,
  UtensilsCrossed, Sparkles, Brain, Glasses, MessageSquare, Boxes, Cpu, Wifi,
  Bike, ShoppingBag, ClipboardList, Layers, Warehouse, Building2, ChefHat, Users2,
  PenTool, Server, Lock, ListChecks, LineChart, Wallet, PackageCheck, Award,
} from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, AboutPanel, SectionHeading, CardCarousel,
  SimpleTagGrid, IndustryTestimonials, IndustryClosingCTA, FAQAccordion, RelatedServices,
} from "@/components/industry/Primitives";
import { getRelatedServices } from "@/lib/content";
import { content } from "./content";

// Content sourced verbatim from the real Django admin export (see ./content.ts).
// Layout mirrors goognu.com/industries/templates/restaurant.html's real section
// architecture: hero, trust strip, why-choose about panel, stats, features
// carousel, service carousel, business-model tag grid, technology carousel,
// process carousel, testimonials, related services, FAQ, CTA.
const ACCENT = "from-amber-500 to-red-600";

const CAPABILITY_ICONS = [UtensilsCrossed, Gift, Sparkles];
const SERVICE_ICONS = [Search, MapPin, Compass];
const TECH_ICONS = [Brain, Glasses, MessageSquare, Boxes, Cpu, Wifi];
const BUSINESS_MODEL_ICONS = [Bike, ShoppingBag, ClipboardList, Layers, Warehouse, Building2];
const PROCESS_ICONS = [PenTool, Server, Lock, ListChecks, LineChart, Wallet, PackageCheck, Award];

export const metadata: Metadata = {
  title: `${content.title} | Goognu`,
  description: content.description,
};

export default function RestaurantIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Restaurant Apps"
        title={content.title}
        subtitle={content.description}
        ctaLabel="Book a Free Consultation"
        accent={ACCENT}
      />
      <TrustStrip industryLabel="restaurant" />

      <AboutPanel
        eyebrow="Why Goognu"
        title={content.about!.title}
        description={content.about!.description}
        items={content.about!.items}
        accent={ACCENT}
      />

      <StatsBand />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Features"
            title={content.capabilities!.title}
            description={content.capabilities!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.capabilities!.items.map((item, i) => ({
              icon: CAPABILITY_ICONS[i] ?? ChefHat,
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
              icon: SERVICE_ICONS[i] ?? Search,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Business Models"
            title={content.extraSections![0].title}
            description={content.extraSections![0].description}
            accent={ACCENT}
          />
          <SimpleTagGrid
            accent={ACCENT}
            items={content.extraSections![0].items.map((item, i) => ({
              icon: BUSINESS_MODEL_ICONS[i] ?? Users2,
              title: item.title,
            }))}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Smart Technologies"
            title={content.technologies!.title}
            description={content.technologies!.description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            items={content.technologies!.items.map((item, i) => ({
              icon: TECH_ICONS[i] ?? Sparkles,
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
            title={content.extraSections![1].title}
            description={content.extraSections![1].description}
            accent={ACCENT}
          />
          <CardCarousel
            accent={ACCENT}
            variant="numbered"
            items={content.extraSections![1].items.map((item, i) => ({
              icon: PROCESS_ICONS[i] ?? BadgeCheck,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <RelatedServices items={getRelatedServices(content.slug)} accent={ACCENT} industryLabel="restaurant" />
      <FAQAccordion items={content.faqs ?? []} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
