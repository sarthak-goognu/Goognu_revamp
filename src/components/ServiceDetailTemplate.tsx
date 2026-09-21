import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Wallet, HeadphonesIcon, Award } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import type { IconKey } from "@/lib/icons";
import ProductIcon from "@/components/ProductIcon";

// Shared visual template for the individual service pages under
// /services/<slug> (AWS Consulting, AWS Managed, etc.). Each service's own
// page.tsx supplies a colocated content object; this component renders it
// consistently, mirroring ProductDetailTemplate's pattern for /products/*.
//
// Real goognu.com service pages repeat the same skeleton — Overview, Major
// Services Offered, Browse our set of features, Why Choose Us (identical
// "13+ years / Security / Cost Efficient / 24/7 Support" boilerplate on
// every single page), Testimonials, closing CTA — so the "Why Choose Us"
// block is hardcoded here once rather than duplicated across 30+ content
// files, and Testimonials reuses the site's single global TESTIMONIALS list.

export type ServiceFeature = { icon: IconKey; title: string; description: string };
export type ServiceHighlight = { icon: IconKey; title: string };

export type ServiceDetail = {
  slug: string;
  category: string;
  name: string;
  headline: string;
  overview: string[];
  accent: string; // tailwind gradient, e.g. "from-orange-500 to-amber-400"
  majorServices: ServiceHighlight[];
  features: ServiceFeature[];
  closing: { headline: string; description: string };
};

function Eyebrow({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5">
      <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${accent}`} />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">{children}</span>
    </div>
  );
}

const WHY_CHOOSE = [
  { icon: Award, title: "13+ Years of Experience", description: "delivering this service to businesses across industries — we've seen the edge cases before." },
  { icon: ShieldCheck, title: "Security First", description: "every engagement is built on practices that keep your infrastructure and data secure by default." },
  { icon: Wallet, title: "Cost Efficient", description: "solutions are architected to control spend from day one, not bolted on as an afterthought." },
  { icon: HeadphonesIcon, title: "24/7 Support", description: "round-the-clock support so you're never left waiting on a critical issue." },
];

export default function ServiceDetailTemplate({ service }: { service: ServiceDetail }) {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(22,98,246,0.35),transparent)]" />
        <div className="absolute top-20 right-[10%] h-72 w-72 rounded-full bg-brand/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="max-w-2xl">
            <Eyebrow accent={service.accent}>{service.category}</Eyebrow>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">{service.name}</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{service.headline}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:-translate-y-0.5"
              >
                Get Free Consultation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-all hover:border-white/40 hover:bg-white/10"
              >
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ OVERVIEW ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <Eyebrow accent={service.accent}>Overview</Eyebrow>
          <div className="mt-5 space-y-4">
            {service.overview.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-muted">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ MAJOR SERVICES OFFERED ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow accent={service.accent}>What&apos;s Included</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Major Services Offered
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.majorServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-sm`}>
                  <ProductIcon icon={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-navy leading-snug">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow accent={service.accent}>Capabilities</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Browse our set of features
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-sm`}>
                  <ProductIcon icon={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-navy leading-snug">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow accent={service.accent}>Why Goognu</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">Why Choose Us?</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="font-bold text-navy text-sm">{item.title}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-muted">
                    Goognu has provided {service.name} for {service.name.toLowerCase().includes("services") ? "" : ""}
                    a long time, {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow accent={service.accent}>Testimonials</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">What Our Clients Say</h2>
          </div>

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

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="py-14 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(22,98,246,0.5),transparent)]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{service.closing.headline}</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/65">{service.closing.description}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {["No commitment required", "Response within 24 h"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-xs text-white/60">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    {t}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-opacity hover:opacity-90"
              >
                Get Our Free Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
