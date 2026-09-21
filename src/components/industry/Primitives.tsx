import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ArrowUpRight, ChevronDown, Sparkles, type LucideIcon,
  Cloud, Gauge, ShieldCheck, ScanSearch, Database, Wallet, Workflow,
} from "lucide-react";
import { CLIENT_LOGOS, TESTIMONIALS, type RelatedServiceLink } from "@/lib/content";
import type { IndustryFaqItem } from "@/lib/industry-content-types";

// Shared building blocks for the /industry/<slug> pages.
//
// Unlike the AWS service pages (one uniform template, see
// ServiceDetailTemplate), goognu.com's Django codebase gives every single
// industry its own bespoke template and model — the real page structures
// genuinely differ (see industries/templates/*.html and industries/models.py
// in the source codebase). So instead of one rigid template, each industry
// page composes its own layout from this shared, future-proof kit of
// primitives — the same visual grammar (hero, trust strip, stats band,
// feature grids, process steps, testimonials, closing CTA) repeats across
// real goognu.com industry pages, so it's centralized here once rather than
// re-implemented per page. New industries (the remaining 16) just import
// what they need and compose their own section order/content.

export const DEFAULT_INDUSTRY_STATS = [
  { number: "1200+", label: "Projects Delivered Successfully" },
  { number: "8+", label: "Years of Industry Experience" },
  { number: "98%", label: "Client Satisfaction Rate" },
  { number: "20+", label: "Global Reach" },
];

/* ─────────────────────────── Eyebrow ─────────────────────────── */

export function IndustryEyebrow({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5">
      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${accent}`} />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">{children}</span>
    </div>
  );
}

/* ─────────────────────────── Hero ─────────────────────────── */

export function IndustryHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = "Consult Our Experts",
  accent,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  accent: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(22,98,246,0.3),transparent)]`} />
      <div className={`absolute top-16 right-[8%] h-80 w-80 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl`} />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <IndustryEyebrow accent={accent}>{eyebrow}</IndustryEyebrow>
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">{subtitle}</p>

          <div className="mt-9">
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-br ${accent} px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5`}
            >
              {ctaLabel}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Trust strip ─────────────────────────── */

export function TrustStrip({ industryLabel }: { industryLabel: string }) {
  return (
    <section className="border-y border-slate-100 bg-white py-10 overflow-hidden">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-muted">
        Trusted by 1000s of people working in {industryLabel} industries worldwide
      </p>
      <div className="relative mt-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-14">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, i) => (
            <div key={`${client.file}-${i}`} className="flex h-10 w-28 shrink-0 items-center justify-center">
              <Image
                src={`/images/clients/${client.file}.png`}
                alt={client.name}
                width={112}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Stats band ─────────────────────────── */

export function StatsBand({ stats = DEFAULT_INDUSTRY_STATS }: { stats?: typeof DEFAULT_INDUSTRY_STATS }) {
  return (
    <section className="bg-navy py-12 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl font-bold text-sky-300 md:text-3xl">{s.number}</div>
            <div className="mt-1 text-xs text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── Section heading ─────────────────────────── */

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  accent: string;
}) {
  return (
    <div className="mb-10 text-center">
      <IndustryEyebrow accent={accent}>{eyebrow}</IndustryEyebrow>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">{title}</h2>
      {description && <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">{description}</p>}
    </div>
  );
}

/* ─────────────────────────── Feature grid (icon + title + description) ─────────────────────────── */

export type FeatureItem = { icon: LucideIcon; title: string; description: string };

export function FeatureGrid({
  items,
  accent,
  columns = 3,
}: {
  items: FeatureItem[];
  accent: string;
  columns?: 2 | 3 | 4;
}) {
  const colClass = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <div className={`grid grid-cols-1 gap-5 ${colClass}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="group rounded-2xl border border-slate-100 bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/70"
        >
          <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm`}>
            <item.icon size={18} />
          </div>
          <h3 className="mt-4 text-[15px] font-bold text-navy leading-snug">{item.title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────── Simple tag grid (icon + title only) ─────────────────────────── */

export type TagItem = { icon: LucideIcon; title: string };

export function SimpleTagGrid({ items, accent, columns = 4 }: { items: TagItem[]; accent: string; columns?: 3 | 4 }) {
  const colClass = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`grid grid-cols-2 gap-4 ${colClass}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm`}>
            <item.icon size={18} />
          </div>
          <span className="text-sm font-bold text-navy leading-snug">{item.title}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────── Process steps ─────────────────────────── */

export type ProcessStep = { title: string; description: string };

export function ProcessSteps({ steps, accent }: { steps: ProcessStep[]; accent: string }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <div key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
          <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-xs font-bold text-white`}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-4 text-sm font-bold text-navy leading-snug">{step.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────── About panel (numbered highlights) ───────────────────────────
   Mirrors the real Django "third-section": a dark panel with a decorative
   visual on one side and a numbered list of about_content_title/description
   entries on the other (goognu.com renders this as a scrolling list on
   desktop and an accordion on mobile — we use a simple numbered stack that
   works at every width instead of replicating the JS scroll-snap behavior). */

export function AboutPanel({
  eyebrow,
  title,
  description,
  items,
  accent,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: { title: string; description?: string }[];
  accent: string;
}) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <IndustryEyebrow accent={accent}>{eyebrow}</IndustryEyebrow>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">{title}</h2>
          {description && <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-navy">
          <div className={`absolute -left-10 -top-10 h-56 w-56 rounded-full bg-gradient-to-br ${accent} opacity-25 blur-3xl`} />
          <div className={`absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-gradient-to-br ${accent} opacity-15 blur-3xl`} />

          <div className="relative grid grid-cols-1 gap-10 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-12">
            <div className="hidden md:flex flex-col items-start justify-center gap-4">
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-lg`}>
                <Sparkles size={24} />
              </div>
              <p className="text-sm leading-relaxed text-white/60">
                A closer look at what makes our approach work for this industry.
              </p>
            </div>

            <ul className="flex flex-col divide-y divide-white/10">
              {items.map((item, i) => (
                <li key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="text-lg font-bold text-white/30 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-base font-bold leading-snug text-white">{item.title}</h3>
                    {item.description && <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Card carousel (horizontal scroll-snap) ───────────────────────────
   Used for the capabilities / platforms / services / technologies sections —
   on the real site these are horizontally-scrolling card rows with JS
   arrow/bullet controls; here it's a native scroll-snap row (touch + wheel
   scroll work with no JS), which keeps the same visual rhythm. */

export type CarouselItem = { icon: LucideIcon; title: string; description?: string };

export function CardCarousel({
  items,
  accent,
  variant = "icon",
}: {
  items: CarouselItem[];
  accent: string;
  variant?: "icon" | "numbered";
}) {
  return (
    <div className="relative -mx-6 px-6 [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-none">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="flex w-[280px] shrink-0 snap-start flex-col gap-3 rounded-2xl border border-slate-100 bg-surface p-6"
          >
            {variant === "numbered" ? (
              <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-xs font-bold text-white`}>
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : (
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm`}>
                <item.icon size={18} />
              </div>
            )}
            <h3 className="text-[15px] font-bold text-navy leading-snug">{item.title}</h3>
            {item.description && <p className="text-sm leading-relaxed text-muted">{item.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── FAQ accordion ─────────────────────────── */

export function FAQAccordion({ items }: { items: IndustryFaqItem[] }) {
  if (!items.length) return null;
  return (
    <section className="py-16 bg-surface">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
          Frequently <span className="text-brand">Asked Questions</span>
        </h2>
        <div className="mt-8 flex flex-col gap-3">
          {items.map((item) => (
            <details key={item.question} className="group rounded-xl border-2 border-slate-200 bg-white px-5 py-4 open:border-brand/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy marker:content-none">
                {item.question}
                <ChevronDown size={18} className="shrink-0 text-muted transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Testimonials ─────────────────────────── */

export function IndustryTestimonials({ accent }: { accent: string }) {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="Testimonials" title="What They Say About Us" accent={accent} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {TESTIMONIALS.slice(0, 4).map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-100 bg-surface p-6">
              <p className="text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 text-sm font-bold text-navy">{t.name}</div>
              <div className="text-xs text-muted">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Related services (cross-link to /services, /aws, /vapt) ───────────────────────────
   Placed near the end of the page (after Technologies, before Testimonials/
   FAQ/CTA) so a visitor who has scrolled through the whole industry pitch is
   handed a concrete next step into a real, built service page rather than a
   dead end. Only ever fed curated, real links — see getRelatedServices() in
   src/lib/content.ts. */

const RELATED_SERVICE_ICONS: Record<RelatedServiceLink["icon"], LucideIcon> = {
  cloud: Cloud,
  workflow: Workflow,
  shield: ShieldCheck,
  "scan-search": ScanSearch,
  database: Database,
  gauge: Gauge,
  wallet: Wallet,
};

export function RelatedServices({
  items,
  accent,
  industryLabel,
}: {
  items: RelatedServiceLink[];
  accent: string;
  industryLabel: string;
}) {
  if (!items.length) return null;
  return (
    <section className="py-16 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <IndustryEyebrow accent={accent}>Related Services</IndustryEyebrow>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Pair this with the right infrastructure and security services
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Beyond building your {industryLabel} application, these are the services our clients in this space
            most often need alongside it.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = RELATED_SERVICE_ICONS[item.icon] ?? Cloud;
            return (
              <Link
                key={item.key}
                href={item.href}
                className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-sm`}>
                  <Icon size={18} />
                </div>
                <h3 className="text-[15px] font-bold leading-snug text-white">{item.label}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300">
                  Explore service
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── Closing CTA ─────────────────────────── */

export function IndustryClosingCTA({ accent }: { accent: string }) {
  return (
    <section className="py-14 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
          <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-10`} />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to start working with us?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/65">
              Let&rsquo;s discuss your needs and find the right solution — schedule a call with our experts today.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-all hover:border-white/40 hover:bg-white/10"
              >
                Know More About Us
              </Link>
              <Link
                href="/contact"
                className={`group inline-flex items-center gap-2 rounded-full bg-gradient-to-br ${accent} px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90`}
              >
                Get a Call Back
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
