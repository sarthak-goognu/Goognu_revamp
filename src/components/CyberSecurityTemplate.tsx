"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  SearchCheck,
  Plug,
  KeyRound,
  Cookie,
  Workflow,
  ShieldCheck,
  SlidersHorizontal,
  FileSearch,
  Code,
  Database,
  Lock,
  AlertTriangle,
  ChevronRight,
  Sparkles,
  FileText,
  Award,
  Zap,
  Building2,
  Layers,
  ShieldAlert,
  Server,
  Globe,
  Smartphone,
  Wifi,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";

/* ─────────────────────────────────────────────────────────── *
 *  Type Definitions for Reusable Cyber Security Service Pages
 * ─────────────────────────────────────────────────────────── */

export interface CyberSecurityStat {
  number: string;
  label: string;
  sub?: string;
}

export interface CyberSecurityOverviewItem {
  title: string;
  description: string;
  highlights?: string[];
}

export interface CyberSecurityServiceOffering {
  title: string;
  description: string;
  tag?: string;
  category?: string;
  icon?: string;
  vectors?: string[];
}

export interface CyberSecurityBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface CyberSecurityMethodologyStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  deliverables?: string;
  icon?: string;
}

export interface CyberSecurityDeliverable {
  title: string;
  badge: string;
  desc: string;
}

export interface CyberSecurityFaq {
  question: string;
  answer: string;
}

export interface CyberSecurityComparisonRow {
  feature: string;
  scanner: string;
  goognu: string;
}

export interface CyberSecurityPageContent {
  slug?: string;
  categoryName?: string; // e.g. "Cyber Security"
  serviceName: string; // e.g. "Web Application Security"
  hero: {
    eyebrow?: string;
    title: string;
    gradientWord?: string;
    paragraphs: string[];
    ctaLabel?: string;
    secondaryCtaLabel?: string;
    trustBadges?: string[];
  };
  stats: CyberSecurityStat[];
  overview: CyberSecurityOverviewItem[];
  servicesHeading?: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
  };
  services: CyberSecurityServiceOffering[];
  whyNeed: {
    title: string;
    subtitle?: string;
    paragraphs: string[];
  };
  comparison?: {
    title: string;
    headers: string[];
    rows: CyberSecurityComparisonRow[];
  };
  benefits?: CyberSecurityBenefit[];
  methodologyIntro?: string;
  methodology: CyberSecurityMethodologyStep[];
  deliverables?: CyberSecurityDeliverable[];
  closingCta: {
    title: string;
    paragraphs: string[];
    ctaLabel: string;
  };
  faqs: CyberSecurityFaq[];
}

/* ─────────────────────────────────────────────────────────── *
 *  Universal Icon Map
 * ─────────────────────────────────────────────────────────── */
const ICON_MAP: Record<string, LucideIcon> = {
  "search-check": SearchCheck,
  plug: Plug,
  "key-round": KeyRound,
  cookie: Cookie,
  workflow: Workflow,
  "shield-check": ShieldCheck,
  sliders: SlidersHorizontal,
  "file-search": FileSearch,
  code: Code,
  database: Database,
  lock: Lock,
  "alert-triangle": AlertTriangle,
  server: Server,
  globe: Globe,
  smartphone: Smartphone,
  wifi: Wifi,
  cloud: Cloud,
  zap: Zap,
  award: Award,
};

function resolveIcon(name?: string): LucideIcon {
  if (!name) return ShieldCheck;
  return ICON_MAP[name] || ShieldCheck;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 backdrop-blur-sm">
      <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── *
 *  Reusable Hero Consultation / Audit Request Form Card
 * ─────────────────────────────────────────────────────────── */
function HeroConsultationForm({ serviceName }: { serviceName: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="relative w-full max-w-md mx-auto">
        <div className="absolute -inset-2 rounded-3xl bg-brand/20 blur-2xl" />
        <div className="relative z-10 rounded-2xl border border-white/15 bg-white/[0.08] p-8 backdrop-blur-xl shadow-2xl flex flex-col items-center gap-4 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-lg font-bold text-white">Assessment Request Received!</h3>
          <p className="text-xs leading-relaxed text-white/70">
            Our Lead Cyber Security Specialist will review your request and reach out within 24 hours with an initial scope outline.
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-white/40">
            <Lock size={12} /> Strictly Confidential • Mutual NDA Protected
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Ambient background glow */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand/25 to-cyan-500/15 blur-2xl" />

      <div className="relative z-10 rounded-2xl border border-white/15 bg-slate-950/80 p-6 md:p-7 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
              Direct Security Desk
            </span>
            <h3 className="text-base font-bold text-white leading-tight mt-0.5">
              Request Free Security Scoping
            </h3>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 border border-emerald-500/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-semibold text-emerald-300">Confidential</span>
          </div>
        </div>

        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <input
            type="text"
            required
            placeholder="Full Name*"
            className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 outline-none focus:border-brand/70 focus:bg-white/10 transition-all"
          />

          <input
            type="email"
            required
            placeholder="Work Email*"
            className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 outline-none focus:border-brand/70 focus:bg-white/10 transition-all"
          />

          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2.5 text-xs text-white/70 shrink-0">
              <span className="text-sm leading-none">🇬🇧</span>
              <span className="text-[11px] font-medium">+44</span>
            </div>
            <input
              type="tel"
              required
              placeholder="Phone Number*"
              className="flex-1 min-w-0 rounded-lg border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 outline-none focus:border-brand/70 focus:bg-white/10 transition-all"
            />
          </div>

          <input
            type="text"
            placeholder="Company Name"
            className="w-full rounded-lg border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 outline-none focus:border-brand/70 focus:bg-white/10 transition-all"
          />

          <div className="relative">
            <select
              defaultValue={serviceName}
              className="w-full appearance-none rounded-lg border border-white/10 bg-white/[0.06] px-3.5 py-2.5 text-xs text-white/80 outline-none focus:border-brand/70 focus:bg-white/10 transition-all cursor-pointer"
              style={{ colorScheme: "dark" }}
            >
              <option value={serviceName} className="bg-slate-900 text-white">
                {serviceName}
              </option>
              <option value="VAPT Assessment" className="bg-slate-900 text-white">
                VAPT Assessment
              </option>
              <option value="API & Microservices Security" className="bg-slate-900 text-white">
                API &amp; Microservices Security
              </option>
              <option value="Cloud Security Review" className="bg-slate-900 text-white">
                Cloud Security Review
              </option>
              <option value="Mobile App Security Testing" className="bg-slate-900 text-white">
                Mobile App Security Testing
              </option>
              <option value="Custom Security Scoping" className="bg-slate-900 text-white">
                Custom Security Scoping
              </option>
            </select>
            <ChevronRight
              size={14}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 rotate-90 text-white/40"
            />
          </div>

          <button
            type="submit"
            className="mt-1 w-full rounded-lg bg-brand py-3 text-xs font-bold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark active:scale-[0.98]"
          >
            Get Free Assessment Proposal
          </button>
        </form>

        <div className="mt-3.5 flex items-center justify-center gap-1.5 text-[11px] text-white/40">
          <Lock size={12} className="text-emerald-400" />
          <span>Strictly Confidential • NDA Signed Prior to Engagement</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── *
 *  Main Reusable Template Component
 * ─────────────────────────────────────────────────────────── */
export default function CyberSecurityTemplate({ data }: { data: CyberSecurityPageContent }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeNav, setActiveNav] = useState("overview-section");

  // Filter categories dynamically
  const categories = React.useMemo(() => {
    const set = new Set<string>();
    data.services.forEach((s) => {
      if (s.category && s.category !== "all") set.add(s.category);
    });
    return Array.from(set);
  }, [data.services]);

  const filteredServices = React.useMemo(() => {
    if (activeCategory === "all") return data.services;
    return data.services.filter((s) => s.category === activeCategory || s.category === "all");
  }, [data.services, activeCategory]);

  const navItems = [
    { id: "overview-section", label: "Overview" },
    { id: "services-section", label: "Services & Scope" },
    { id: "why-need-section", label: "Why Protect Now" },
    ...(data.benefits ? [{ id: "benefits-section", label: "Key Benefits" }] : []),
    { id: "methodology-section", label: "6-Step Process" },
    ...(data.deliverables ? [{ id: "deliverables-section", label: "Deliverables" }] : []),
    { id: "faq-section", label: "FAQs" },
  ];

  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sectionEls = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveNav(visible[0].target.id);
      },
      {
        rootMargin: "-120px 0px -35% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sectionEls.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [navItems]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 130;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-navy text-white">
        {/* Dynamic ambient gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(22,98,246,0.38),transparent)] pointer-events-none" />
        <div className="absolute top-24 right-[5%] h-96 w-96 rounded-full bg-brand/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[8%] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Subtle cyber grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Breadcrumbs */}
        <div className="relative border-b border-white/10 py-3.5">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-2 text-xs text-white/50">
              <Link href="/" className="hover:text-white/90 transition-colors">
                Home
              </Link>
              <ChevronRight size={12} className="text-white/30" />
              <Link href="/vapt" className="hover:text-white/90 transition-colors">
                {data.categoryName || "Cyber Security"}
              </Link>
              <ChevronRight size={12} className="text-white/30" />
              <span className="text-white/90 font-medium">{data.serviceName}</span>
            </div>
          </div>
        </div>

        {/* Main Hero Container */}
        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Value Prop */}
            <div className="lg:col-span-7">
              <Eyebrow>{data.hero.eyebrow || data.categoryName || "Cyber Security Services"}</Eyebrow>

              <h1 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight md:text-5xl lg:text-[3.25rem]">
                {data.hero.title}
              </h1>

              <div className="mt-6 space-y-4 max-w-2xl text-base md:text-lg leading-relaxed text-white/70">
                {data.hero.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Trust Badges */}
              {data.hero.trustBadges && data.hero.trustBadges.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {data.hero.trustBadges.map((badge) => (
                    <div
                      key={badge}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
                    >
                      <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                      <span>{badge}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/35 transition-all hover:bg-brand-dark hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  {data.hero.ctaLabel || "Get Free Consultation"}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <button
                  onClick={() => scrollTo("services-section")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  {data.hero.secondaryCtaLabel || "Explore Scope"}
                </button>
              </div>
            </div>

            {/* Right Column: High-Converting Universal Hero Consultation Form */}
            <div className="lg:col-span-5">
              <HeroConsultationForm serviceName={data.serviceName} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ELEVATED STATS BANNER ═══════════════ */}
      <section className="relative z-20 -mt-7 bg-transparent">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-brand/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-navy">
                    {stat.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    {idx === 0 && <ShieldCheck size={20} />}
                    {idx === 1 && <Award size={20} />}
                    {idx === 2 && <Building2 size={20} />}
                    {idx === 3 && <Sparkles size={20} />}
                  </div>
                </div>
                <div className="mt-3 text-sm font-bold text-navy">{stat.label}</div>
                {stat.sub && <div className="mt-1 text-xs text-muted">{stat.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ STICKY SUB-NAVIGATION ═══════════════ */}
      <nav className="sticky top-16 z-30 hidden border-y border-slate-200 bg-white/95 backdrop-blur-md md:block shadow-xs">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center space-x-1 overflow-x-auto py-2 scrollbar-none">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-brand text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-navy"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ═══════════════ OVERVIEW SECTION ═══════════════ */}
      <section id="overview-section" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <Eyebrow>Strategic Overview</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              About {data.serviceName}
            </h2>
            <p className="mt-3 text-base text-muted">
              Why structured, proactive security testing is essential for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {data.overview.map((item, idx) => (
              <div
                key={item.title}
                className="relative rounded-2xl border border-slate-200 bg-surface p-8 flex flex-col justify-between transition-all hover:border-brand/30 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      {idx === 0 ? <ShieldAlert size={22} /> : <Zap size={22} />}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">
                      {idx === 0 ? "Definition & Approach" : "Business Urgency"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-navy leading-snug">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-8 border-t border-slate-200/80 pt-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                      Key Highlights:
                    </span>
                    <ul className="space-y-2.5">
                      {item.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Defense in Depth Architecture Banner */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-navy to-slate-900 p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3 py-1 text-[11px] font-semibold text-cyan-300">
                  <Layers size={13} /> Defense-in-Depth Architecture
                </span>
                <h4 className="mt-3 text-xl font-bold text-white">
                  Holistic Protection Across Every Attack Surface
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-white/65">
                  Our testing methodologies evaluate entry points, authentication mechanisms, network boundaries, and business logic.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { title: "Boundary Hardening", desc: "Firewalls, TLS & Endpoints" },
                  { title: "Identity & RBAC", desc: "Auth, Tokens & Privilege" },
                  { title: "Data Protection", desc: "PII, Databases & Encryption" },
                  { title: "Continuous Retest", desc: "Verification & Sign-off" },
                ].map((col) => (
                  <div
                    key={col.title}
                    className="rounded-xl border border-white/10 bg-white/[0.05] p-3 text-center"
                  >
                    <div className="text-xs font-bold text-cyan-300">{col.title}</div>
                    <div className="mt-1 text-[11px] text-white/55 leading-tight">{col.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICES / WHAT WE COVER ═══════════════ */}
      <section id="services-section" className="py-20 bg-surface border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <Eyebrow>{data.servicesHeading?.eyebrow || "Assessment Capabilities"}</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              {data.servicesHeading?.title || "Services We Offer"}
            </h2>
            <p className="mt-3 text-base text-muted">
              {data.servicesHeading?.subtitle ||
                "Deep, methodical security testing tailored to your business needs"}
            </p>
          </div>

          {/* Dynamic Category Tabs (if multiple categories exist) */}
          {categories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                  activeCategory === "all"
                    ? "bg-brand text-white shadow-md shadow-brand/25"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-brand/40 hover:text-navy"
                }`}
              >
                All Capabilities ({data.services.length})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold capitalize transition-all ${
                    activeCategory === cat
                      ? "bg-brand text-white shadow-md shadow-brand/25"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-brand/40 hover:text-navy"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredServices.map((service) => {
              const Icon = resolveIcon(service.icon);
              return (
                <div
                  key={service.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon size={20} />
                      </div>
                      {service.tag && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600 uppercase tracking-wider">
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 text-base font-bold text-navy leading-snug group-hover:text-brand transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted">{service.description}</p>
                  </div>

                  {service.vectors && service.vectors.length > 0 && (
                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                        Key Vectors Tested:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.vectors.map((vec) => (
                          <span
                            key={vec}
                            className="rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                          >
                            {vec}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY YOU NEED IT & COMPARISON TABLE ═══════════════ */}
      <section id="why-need-section" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <Eyebrow>Proactive Threat Defense</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              {data.whyNeed.title}
            </h2>
            {data.whyNeed.subtitle && <p className="mt-3 text-base text-muted">{data.whyNeed.subtitle}</p>}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {data.whyNeed.paragraphs.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-7 text-slate-700 text-sm leading-relaxed"
              >
                <div className="flex items-center gap-2 mb-3 text-brand font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck size={16} /> Key Perspective {i + 1}
                </div>
                {p}
              </div>
            ))}
          </div>

          {/* Universal Comparison Table (Automated vs Goognu Hybrid) */}
          {data.comparison && (
            <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xl shadow-slate-100">
              <div className="bg-navy p-6 md:p-8 text-white">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      Why Manual Penetration Testing Matters
                    </span>
                    <h3 className="mt-1 text-xl md:text-2xl font-bold">{data.comparison.title}</h3>
                  </div>
                  <div className="rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white/80 shrink-0 self-start md:self-auto">
                    Enterprise Standard
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 text-navy font-bold">
                      <th className="py-4 px-6">{data.comparison.headers[0]}</th>
                      <th className="py-4 px-6 text-slate-500">{data.comparison.headers[1]}</th>
                      <th className="py-4 px-6 text-brand bg-brand/5">{data.comparison.headers[2]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.comparison.rows.map((row) => (
                      <tr key={row.feature} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-4 px-6 font-semibold text-navy">{row.feature}</td>
                        <td className="py-4 px-6 text-slate-500">
                          <span className="inline-flex items-center gap-1.5 text-rose-600 font-medium">
                            ✕ {row.scanner}
                          </span>
                        </td>
                        <td className="py-4 px-6 bg-brand/[0.02]">
                          <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                            {row.goognu}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════ KEY BENEFITS ═══════════════ */}
      {data.benefits && data.benefits.length > 0 && (
        <section id="benefits-section" className="py-20 bg-surface border-y border-slate-200/80">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <Eyebrow>Enterprise Value</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                Key Benefits of Our Security Assessments
              </h2>
              <p className="mt-3 text-base text-muted">
                Actionable protection designed to enhance your operational resilience and regulatory standing
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.benefits.map((benefit) => {
                const Icon = resolveIcon(benefit.icon);
                return (
                  <div
                    key={benefit.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-sm font-bold text-navy leading-snug">{benefit.title}</h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-muted">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ 6-STEP METHODOLOGY ═══════════════ */}
      <section id="methodology-section" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <Eyebrow>Proven Security Framework</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              Systematic Security Methodology
            </h2>
            <p className="mt-3 text-base text-muted">
              {data.methodologyIntro ||
                "A battle-tested 6-phase assessment lifecycle delivering end-to-end assurance"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.methodology.map((step) => {
              const Icon = resolveIcon(step.icon);
              return (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-slate-200 bg-surface p-7 flex flex-col justify-between shadow-xs transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan-500 font-mono text-sm font-extrabold text-white shadow-sm shadow-brand/30">
                        {step.step}
                      </div>
                      <span className="text-[10px] font-bold text-brand uppercase tracking-wider bg-brand/5 border border-brand/20 px-2.5 py-1 rounded-full">
                        {step.phase}
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-bold text-navy leading-snug">{step.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted">{step.description}</p>
                  </div>

                  {step.deliverables && (
                    <div className="mt-6 border-t border-slate-200/60 pt-4 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Deliverable:</span>
                      <span className="font-semibold text-brand text-right">{step.deliverables}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ DELIVERABLES SHOWCASE ═══════════════ */}
      {data.deliverables && data.deliverables.length > 0 && (
        <section id="deliverables-section" className="py-20 bg-surface border-y border-slate-200/80">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-14 text-center max-w-3xl mx-auto">
              <Eyebrow>Deliverables</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
                What You Receive Upon Completion
              </h2>
              <p className="mt-3 text-base text-muted">
                Clear, executive-level summaries paired with granular remediation guidance for your engineering teams
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.deliverables.map((del) => (
                <div
                  key={del.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col justify-between hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand mb-4">
                      <FileText size={20} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand block mb-1">
                      {del.badge}
                    </span>
                    <h3 className="text-base font-bold text-navy">{del.title}</h3>
                    <p className="mt-2.5 text-xs text-muted leading-relaxed">{del.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-brand">
                    <CheckCircle2 size={14} className="text-emerald-500" /> Standard Deliverable
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 text-center text-white md:px-16 md:py-18">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(22,98,246,0.5),transparent)] pointer-events-none" />
            <div className="relative max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <ShieldCheck size={14} /> Zero Obligation Scoping
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl text-white">
                {data.closingCta.title}
              </h2>
              {data.closingCta.paragraphs.map((p, i) => (
                <p key={i} className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
                {[
                  "No commitment required",
                  "Response within 24 hours",
                  "Strict NDA protection",
                  "CREST & CEH certified",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-xs text-white/75">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-white shadow-xl shadow-accent/30 transition-all hover:bg-orange-600 hover:-translate-y-0.5"
                >
                  {data.closingCta.ctaLabel}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white/90 transition-all hover:bg-white/10"
                >
                  Talk to a Security Specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ SECTION ═══════════════ */}
      <section id="faq-section" className="py-20 bg-surface border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
              {data.serviceName} FAQs
            </h2>
            <p className="mt-3 text-base text-muted">
              Common questions about scoping, methodologies, testing windows, and deliverable reports
            </p>
          </div>

          <FaqAccordion items={data.faqs} />

          {/* Contact prompt */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <h3 className="text-base font-bold text-navy">Have custom compliance or audit requirements?</h3>
            <p className="mt-1 text-xs text-muted">
              Our team routinely tests against ISO 27001, SOC 2, PCI-DSS, Cyber Essentials Plus, and GDPR standards.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark transition-colors"
            >
              Consult with our security engineers <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
