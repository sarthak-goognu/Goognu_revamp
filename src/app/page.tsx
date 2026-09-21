"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Workflow,
  BrainCircuit,
  Code2,
  GitBranch,
  Server,
  Quote,
  Star,
  Zap,
  Shield,
  TrendingUp,
  HeartPulse,
  GraduationCap,
  Landmark,
  ShoppingCart,
  Factory,
  Tv2,
  Truck,
  Phone,
  Globe,
  Plane,
} from "lucide-react";
import {
  SERVICE_CATEGORIES,
  INDUSTRIES,
  PRODUCTS,
  STATS,
  CASE_STUDIES,
  TESTIMONIALS,
  BLOG_TEASERS,
  COMPANY,
  CLIENT_LOGOS,
} from "@/lib/content";

/* ─────────────────────────────── helpers ───────────────────────────────── */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">
        {children}
      </span>
    </div>
  );
}

function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <h2
      className={`mt-3 text-2xl font-semibold tracking-tight md:text-3xl ${
        light ? "text-white" : "text-navy"
      }`}
    >
      {children}
    </h2>
  );
}

const SERVICE_ICONS: Record<string, React.ElementType> = {
  cloud: Cloud,
  workflow: Workflow,
  "brain-circuit": BrainCircuit,
  code: Code2,
  "git-branch": GitBranch,
  server: Server,
};

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  "Healthcare & Life Sciences": HeartPulse,
  "Education & e-Learning": GraduationCap,
  BFSI: Landmark,
  "Retail & eCommerce": ShoppingCart,
  Manufacturing: Factory,
  "Media & Entertainment": Tv2,
  "Transport & Logistics": Truck,
  Telecom: Phone,
  "Government & Public Sector": Globe,
  "Travel & Hospitality": Plane,
};

const SERVICE_GRADIENTS = [
  "from-blue-500/20 to-cyan-400/10",
  "from-violet-500/20 to-purple-400/10",
  "from-emerald-500/20 to-teal-400/10",
  "from-orange-500/20 to-amber-400/10",
  "from-pink-500/20 to-rose-400/10",
  "from-indigo-500/20 to-blue-400/10",
  "from-sky-500/20 to-cyan-400/10",
  "from-teal-500/20 to-green-400/10",
];

const SERVICE_ICON_COLORS = [
  "text-blue-500",
  "text-violet-500",
  "text-emerald-500",
  "text-orange-500",
  "text-pink-500",
  "text-indigo-500",
  "text-sky-500",
  "text-teal-500",
];

// The "Our Trusted Partners" strip, carried over from goognu.com's homepage
// (distinct from the client-logo marquee further down the page).
const PARTNER_LOGOS = [
  { name: "Dalmia Bharat", file: "dalmia" },
  { name: "AWS Partner Network", file: "aws" },
  { name: "CollegeDekho", file: "collegedekho" },
  { name: "The Indian Express", file: "indian_express" },
  { name: "ABP Network", file: "abp_network" },
];

/* ══════════════════════════════ PAGE ═══════════════════════════════════════ */

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[78vh] overflow-hidden bg-navy text-white flex items-center">
        {/* Layered background glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(22,98,246,0.45),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_100%_80%,rgba(249,115,22,0.12),transparent)]" />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-20 right-[10%] h-72 w-72 rounded-full bg-brand/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-[30%] h-48 w-48 rounded-full bg-accent/15 blur-3xl animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-[5%] h-56 w-56 rounded-full bg-brand/10 blur-3xl animate-pulse [animation-delay:3s]" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16 w-full">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
            {/* Left content */}
            <div>
              {/* Trusted badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm mb-5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} fill="#f97316" strokeWidth={0} className="text-accent" />
                  ))}
                </div>
                Trusted by 50+ global enterprises
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Scale Smarter with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-brand via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Cloud & AI
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-brand to-cyan-400 rounded-full opacity-60" />
                </span>{" "}
                that Actually Delivers
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-white/65 max-w-xl">
                Goognu engineers cloud-native, AI-powered, and DevOps solutions
                that cut costs, accelerate delivery, and make your technology a
                competitive advantage — not a bottleneck.
              </p>

              {/* Trust signals */}
              <div className="mt-8 flex flex-col gap-2.5">
                {[
                  "Zero-downtime cloud migrations",
                  "24/7 Managed DevOps & AIOps support",
                  "AWS · Azure · GCP certified engineers",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:shadow-brand/50 hover:-translate-y-0.5"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  Explore Our Work
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right — Consultation form */}
            <div className="relative hidden lg:flex items-start justify-center">
              <div className="relative w-full max-w-sm mx-auto">
                {/* Glow behind card */}
                <div className="absolute -inset-4 rounded-3xl bg-brand/10 blur-2xl" />

                <div className="relative z-10 rounded-xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-md shadow-2xl">
                  <h3 className="text-base font-semibold text-white leading-snug mb-1">
                    Let&apos;s Build Something Great Together
                  </h3>
                  <p className="text-xs text-white/50 mb-5 leading-relaxed">
                    Share your requirements and our experts will get back to you.
                  </p>

                  <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                    {/* Full Name */}
                    <input
                      type="text"
                      placeholder="Full Name*"
                      className="w-full rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all"
                    />

                    {/* Work Email */}
                    <input
                      type="email"
                      placeholder="Work Email*"
                      className="w-full rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all"
                    />

                    {/* Phone row */}
                    <div className="flex gap-2">
                      <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.07] px-3 py-2.5 text-sm text-white/70 shrink-0 cursor-pointer hover:bg-white/10 transition-all">
                        <span className="text-base leading-none">🇬🇧</span>
                        <span className="text-xs font-medium">+44</span>
                        <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone Number*"
                        className="flex-1 min-w-0 rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all"
                      />
                    </div>

                    {/* Company */}
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all"
                    />

                    {/* Interest dropdown */}
                    <div className="relative">
                      <select
                        defaultValue=""
                        className="w-full appearance-none rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all cursor-pointer [&:not([value=''])]:text-white"
                        style={{ colorScheme: "dark" }}
                      >
                        <option value="" disabled className="text-slate-400 bg-navy">I am interested in*</option>
                        {[
                          "AWS Services",
                          "DevOps Services",
                          "MLOps Services",
                          "AiOps Services",
                          "Data Lake Services",
                          "Microsoft Azure Services",
                          "GCP Services",
                          "Cloud DevOps",
                          "Cloud Services",
                          "Managed Services",
                          "Something else",
                        ].map((opt) => (
                          <option key={opt} value={opt} className="bg-navy text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="mt-1 w-full rounded-md bg-brand py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-lg hover:shadow-brand/30 active:scale-[0.98]"
                    >
                      Get Free Consultation
                    </button>
                  </form>

                  {/* Privacy note */}
                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/35">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    We respect your privacy. No spam, ever.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/[0.03] to-transparent" />
      </section>

      {/* ═══════════════ TRUSTED PARTNERS ═══════════════ */}
      <section className="bg-slate-50 py-14">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy md:text-3xl">
          Our Trusted Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-5 gap-2 px-4 sm:gap-4 sm:px-6">
          {PARTNER_LOGOS.map((partner) => (
            <div
              key={partner.file}
              className="flex h-16 items-center justify-center rounded-xl border border-slate-100 bg-white px-2 shadow-sm sm:h-24 sm:px-6"
            >
              <Image
                src={`/images/partners/${partner.file}.png`}
                alt={partner.name}
                width={160}
                height={60}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ STATS BENTO ═══════════════ */}
      <section className="relative bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100 border border-slate-100 rounded-2xl shadow-xl shadow-slate-100 overflow-hidden">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="group flex flex-col items-center justify-center gap-1 px-8 py-10 text-center transition-colors hover:bg-brand hover:text-white"
              >
                <div className="text-4xl font-extrabold tracking-tight text-navy group-hover:text-white transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted group-hover:text-white/80 transition-colors">
                  {stat.label}
                </div>
                <div className="mt-2 h-0.5 w-8 rounded-full bg-brand/30 group-hover:bg-white/40 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <Eyebrow>Our Services</Eyebrow>
              <SectionHeading>
                End-to-end cloud & AI{" "}
                <span className="text-brand">expertise</span>
              </SectionHeading>
              <p className="mt-4 max-w-xl text-muted text-base leading-relaxed">
                From cloud migration to AI-powered automation — we bring deep
                technical expertise to every engagement.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-brand hover:text-white hover:border-brand"
            >
              All Services <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_CATEGORIES.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <div
                  key={service.name}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br ${SERVICE_GRADIENTS[i % SERVICE_GRADIENTS.length]} p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/70 cursor-pointer`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/30 to-transparent" />
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ${SERVICE_ICON_COLORS[i % SERVICE_ICON_COLORS.length]}`}>
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="mt-5 font-bold text-navy text-[15px] leading-snug">
                    {service.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight size={13} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CLIENTS ═══════════════ */}
      <section className="py-16 bg-white overflow-hidden">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
          Our Clients We Work With
        </h2>

        <div className="relative mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, i) => (
              <div key={`${client.file}-${i}`} className="flex h-12 w-32 shrink-0 items-center justify-center">
                <Image
                  src={`/images/clients/${client.file}.png`}
                  alt={client.name}
                  width={128}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-6xl px-6">
          <div className="flex flex-col items-center gap-6 rounded-[28px] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/60 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-extrabold tracking-tight text-brand">goognu</span>
              <div className="h-8 w-px bg-slate-200 hidden sm:block" />
              <div>
                <div className="font-semibold text-navy">Aamir Aftab</div>
                <div className="text-sm text-muted">Technical Cloud Consultant</div>
              </div>
            </div>

            <div className="text-xl font-semibold text-slate-600 text-center">Get Our Free Consultation!</div>

            <a
              href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sky-200/70 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-sky-200"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY GOOGNU ═══════════════ */}
      <section className="relative py-16 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,rgba(22,98,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_0%_50%,rgba(249,115,22,0.08),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <Eyebrow>Why Goognu</Eyebrow>
              <SectionHeading light>
                We don&apos;t just deliver projects,{" "}
                <span className="text-brand">we own outcomes</span>
              </SectionHeading>
              <p className="mt-5 text-white/65 leading-relaxed max-w-lg">
                Our engineers embed with your team, understand your
                architecture, and take full accountability for results —
                from first commit to production support.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { icon: Shield, title: "Zero-Downtime Migrations", desc: "Battle-tested runbooks with staged rollbacks." },
                  { icon: Zap, title: "Rapid Time-to-Value", desc: "First deployment in weeks, not quarters." },
                  { icon: TrendingUp, title: "Cost Engineering", desc: "FinOps-driven savings baked into every design." },
                  { icon: CheckCircle2, title: "Multi-Cloud Certified", desc: "AWS, Azure & GCP expertise under one roof." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:border-brand/40 hover:bg-white/10 transition-all"
                  >
                    <item.icon size={20} className="text-brand mb-3" />
                    <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                    <div className="text-xs text-white/55 leading-relaxed">{item.desc}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent/30 hover:opacity-90 transition-opacity"
              >
                Start a Conversation <ArrowRight size={15} />
              </Link>
            </div>

            {/* Right — process steps */}
            <div className="flex flex-col gap-4">
              {[
                { step: "01", title: "Discovery & Assessment", desc: "We audit your existing stack, map dependencies and define a risk-free migration or build path." },
                { step: "02", title: "Architecture & Design", desc: "Our architects produce a cloud-native blueprint optimised for cost, scale and resilience." },
                { step: "03", title: "Build & Automate", desc: "CI/CD pipelines, IaC, containerisation and observability — delivered sprint by sprint." },
                { step: "04", title: "Launch & Optimise", desc: "Go-live with 24/7 runbook support, then continuous FinOps and performance tuning." },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:border-brand/30 hover:bg-white/10 transition-all"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-sm font-extrabold text-brand group-hover:bg-brand group-hover:text-white transition-all">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{item.title}</div>
                    <div className="mt-1.5 text-xs text-white/55 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ INDUSTRIES ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <Eyebrow>Industries We Serve</Eyebrow>
            <SectionHeading>
              Domain-deep solutions for{" "}
              <span className="text-brand">every sector</span>
            </SectionHeading>
            <p className="mt-4 mx-auto max-w-xl text-muted text-base leading-relaxed">
              We understand your industry&apos;s compliance, data, and scale
              challenges — and we&apos;ve solved them before.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {INDUSTRIES.map((industry) => {
              const Icon = INDUSTRY_ICONS[industry.name] ?? Globe;
              return (
                <div
                  key={industry.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 cursor-pointer"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-all">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-navy leading-snug">
                    {industry.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ PRODUCTS ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <Eyebrow>Our Products</Eyebrow>
              <SectionHeading>
                Built in-house.{" "}
                <span className="text-brand">Battle-tested</span> in production.
              </SectionHeading>
              <p className="mt-4 max-w-xl text-muted leading-relaxed">
                Purpose-built SaaS tools that solve real cloud, data and
                engagement challenges — available right now.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-brand hover:text-white hover:border-brand"
            >
              All Products <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
                <Link
                  key={product.name}
                  href={`/products/${product.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1.5"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />
                  <div className={`inline-block rounded-full bg-gradient-to-r ${product.gradient} px-3.5 py-1.5 text-[11px] font-bold text-white tracking-wide`}>
                    {product.tag}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy">
                    {product.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowUpRight size={13} />
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CASE STUDIES ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <Eyebrow>Case Studies</Eyebrow>
              <SectionHeading>
                Real clients.{" "}
                <span className="text-brand">Measurable results.</span>
              </SectionHeading>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-brand hover:text-white hover:border-brand"
            >
              All Case Studies <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {CASE_STUDIES.map((study, i) => {
              const heroGradients = [
                "from-navy via-[#0b3fa8] to-brand",
                "from-navy via-violet-900 to-violet-700",
                "from-navy via-emerald-900 to-emerald-700",
              ];
              const results = [
                { label: "Concurrent Users", value: "10,000+" },
                { label: "Cloud Migration", value: "Zero Downtime" },
                { label: "Students Served", value: "40,000+" },
              ];
              return (
                <div
                  key={study.client}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1.5"
                >
                  <div className={`relative h-40 bg-gradient-to-br ${heroGradients[i % heroGradients.length]} flex items-end p-5`}>
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3), transparent 50%)" }}
                    />
                    <div className="relative">
                      <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                        {study.category.split("·")[0].trim()}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 rounded-xl border border-white/20 bg-white/15 px-3 py-2 text-center backdrop-blur-sm">
                      <div className="text-sm font-extrabold text-white">{results[i % results.length].value}</div>
                      <div className="text-[10px] text-white/70">{results[i % results.length].label}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-navy text-[15px] leading-snug">
                      {study.client}
                    </h3>
                    <p className="mt-2.5 text-sm text-muted leading-relaxed">
                      {study.summary}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Case Study <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-10">
            <Eyebrow>Client Testimonials</Eyebrow>
            <SectionHeading>
              What our clients{" "}
              <span className="text-brand">actually say</span>
            </SectionHeading>
          </div>

          <div className="mb-8 rounded-2xl bg-navy p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-brand/20 blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-accent/10 blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <Quote size={32} className="text-brand/40 mb-5" />
                <p className="text-lg leading-relaxed text-white/85 md:text-xl italic">
                  &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                </p>
                <div className="mt-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="#f97316" strokeWidth={0} className="text-accent" />
                    ))}
                  </div>
                  <div className="font-bold text-white text-base">
                    {TESTIMONIALS[activeTestimonial].name}
                  </div>
                  <div className="text-sm text-white/55 mt-0.5">
                    {TESTIMONIALS[activeTestimonial].role}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setActiveTestimonial(i)}
                    className={`rounded-xl p-4 text-left transition-all ${
                      activeTestimonial === i
                        ? "border border-brand/40 bg-white/10"
                        : "border border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="text-sm font-semibold text-white truncate">{t.name}</div>
                    <div className="text-xs text-white/50 mt-0.5 truncate">{t.role}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ BLOG ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <Eyebrow>From Our Blog</Eyebrow>
              <SectionHeading>
                Insights for{" "}
                <span className="text-brand">engineering leaders</span>
              </SectionHeading>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand/25 px-6 py-3 text-sm font-semibold text-brand transition-all hover:bg-brand hover:text-white hover:border-brand"
            >
              All Articles <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {BLOG_TEASERS.map((blog, i) => {
              const readTimes = ["5 min read", "7 min read", "6 min read"];
              const categoryColors = [
                "text-violet-600 bg-violet-50 border-violet-100",
                "text-blue-600 bg-blue-50 border-blue-100",
                "text-emerald-600 bg-emerald-50 border-emerald-100",
              ];
              return (
                <article
                  key={blog.title}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all hover:-translate-y-1.5 cursor-pointer"
                >
                  <div className="h-1.5 bg-gradient-to-r from-navy via-brand to-cyan-500" />
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${categoryColors[i % categoryColors.length]}`}>
                        {blog.category}
                      </span>
                      <span className="text-xs text-muted">{readTimes[i % readTimes.length]}</span>
                    </div>
                    <h3 className="font-bold text-navy text-[15px] leading-snug flex-1">
                      {blog.title}
                    </h3>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-brand opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Article <ArrowRight size={13} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 md:px-14 md:py-16 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(22,98,246,0.5),transparent)]" />
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl translate-x-1/3 translate-y-1/3" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative flex flex-col items-center text-center gap-8 md:flex-row md:text-left md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/75 mb-6">
                  <Zap size={12} className="text-accent" />
                  Ready when you are
                </div>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Ready to Accelerate Your{" "}
                  <span className="text-brand">Digital Journey?</span>
                </h2>
                <p className="mt-4 text-white/60 leading-relaxed">
                  Connect with our cloud architects and unlock the real
                  potential of your technology investment.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {["No commitment required", "Response within 24 h", "Free architecture review"].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-xs text-white/60">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 hover:opacity-90 transition-opacity"
                >
                  Schedule Free Consultation
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/80 hover:bg-white/10 transition-colors"
                >
                  Learn About Goognu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
