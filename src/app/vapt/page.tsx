import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import VaptIcon from "./VaptIcon";
import FaqAccordion from "@/components/FaqAccordion";
import {
  VAPT_STATS,
  VAPT_OVERVIEW,
  VAPT_SERVICES,
  VAPT_UK_NOTE,
  VAPT_METHODOLOGY_INTRO,
  VAPT_METHODOLOGY,
  VAPT_WHY_CHOOSE,
  VAPT_FAQS,
} from "./content";

export const metadata: Metadata = {
  title: "VAPT — Vulnerability Assessment & Penetration Testing | Goognu",
  description:
    "Goognu's VAPT services find weak spots in your systems, apps and networks and safely test them, so you fix what matters before an attacker finds it.",
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">{children}</span>
    </div>
  );
}

export default function VaptPage() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-navy text-white">
        <Image
          src="/images/vaptbgimg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
        {/* Left-to-right fade instead of a full-bleed wash: keeps the text
            column readable while letting the photo stay clear and only
            lightly bluish over on the right where there's no text sitting
            on top of it. */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/55 to-navy/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_20%,rgba(22,98,246,0.18),transparent)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="max-w-xl">
            <Eyebrow>Cybersecurity &amp; Compliance</Eyebrow>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Vulnerability Assessment &amp; Penetration Testing
            </h1>
            <p className="mt-3 text-lg font-medium text-white/80">Keeping your digital systems safe</p>

            <p className="mt-6 text-base leading-relaxed text-white/65">
              VAPT is a key part of how we protect your business from online threats. It means checking your
              systems, apps, or networks for any weak spots and trying to safely exploit them — so you know
              what needs fixing before a hacker finds it.
            </p>

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
              Talk to a Specialist
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100 border border-slate-100 rounded-2xl -mt-8 relative z-10 shadow-xl shadow-slate-100 overflow-hidden">
            {VAPT_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center gap-1 px-6 py-10 text-center">
                <div className="text-4xl font-extrabold tracking-tight text-navy">{stat.number}</div>
                <div className="text-sm font-medium text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ OVERVIEW ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow>Overview</Eyebrow>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {VAPT_OVERVIEW.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-surface p-7">
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES OFFERED ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow>What We Test</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              VAPT Services We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VAPT_SERVICES.map((service) => (
              <div
                key={service.label}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <VaptIcon icon={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-navy leading-snug">{service.label}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ UK NOTE ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">{VAPT_UK_NOTE.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">{VAPT_UK_NOTE.description}</p>
        </div>
      </section>

      {/* ═══════════════ METHODOLOGY ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">VAPT Methodology</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted">{VAPT_METHODOLOGY_INTRO}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VAPT_METHODOLOGY.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-xs font-extrabold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <VaptIcon icon={step.icon} className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-navy leading-snug">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE + CTA ═══════════════ */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(22,98,246,0.5),transparent)]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{VAPT_WHY_CHOOSE.title}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/65">{VAPT_WHY_CHOOSE.description}</p>
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

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A few common questions clients ask us about VAPT.
            </p>
          </div>
          <FaqAccordion items={VAPT_FAQS} />
        </div>
      </section>
    </>
  );
}
