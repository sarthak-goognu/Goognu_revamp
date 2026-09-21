"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Wallet,
  HeadphonesIcon,
  Award,
  Server,
  Upload,
  Layers,
  Gauge,
  RefreshCw,
  ScanLine,
  Phone,
  Lock,
  SlidersHorizontal,
  Cpu,
  CloudCog,
  GitBranch,
  DollarSign,
  ChevronRight,
} from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

/* ─────────────────────────────────────────────────────────── *
 *  Data
 * ─────────────────────────────────────────────────────────── */

const MAJOR_SERVICES = [
  {
    Icon: Server,
    title: "Managed Services",
    desc: "End-to-end operations management — updates, backups, monitoring — so you can focus on your product.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    Icon: Upload,
    title: "Cloud Migration",
    desc: "Seamless lift-and-shift or full re-architecture migrations with zero-downtime strategies.",
    color: "from-violet-500 to-purple-400",
  },
  {
    Icon: Layers,
    title: "Architecture Design",
    desc: "Well-architected cloud blueprints optimised for performance, resilience, and cost efficiency.",
    color: "from-orange-500 to-amber-400",
  },
  {
    Icon: GitBranch,
    title: "DevOps Automation",
    desc: "CI/CD pipelines, infrastructure as code, and automated testing for faster, reliable releases.",
    color: "from-emerald-500 to-teal-400",
  },
];

const FEATURES = [
  {
    Icon: Gauge,
    title: "Scalability",
    desc: "Handle peaks in demand or large workloads without over-purchasing capacity you don't need day-to-day.",
  },
  {
    Icon: RefreshCw,
    title: "Automation",
    desc: "Automatic software updates, deployment, and configuration of cloud infrastructure for fast, consistent releases.",
  },
  {
    Icon: ScanLine,
    title: "Monitoring",
    desc: "Identify and fix potential problems before they occur — keep a close eye on uptime and performance.",
  },
  {
    Icon: Phone,
    title: "24/7 Support",
    desc: "Round-the-clock support so you can get help installing, configuring, or troubleshooting whenever you need it.",
  },
  {
    Icon: Lock,
    title: "Security",
    desc: "Security is our first priority — we use the latest practices and technologies to protect your data and apps.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Cost Optimisation",
    desc: "Identify ways to reduce cloud costs including selecting the right infrastructure for your workloads.",
  },
  {
    Icon: Cpu,
    title: "Microservices",
    desc: "Build applications broken into smaller, independently deployable services for greater agility.",
  },
  {
    Icon: CloudCog,
    title: "Experience",
    desc: "13+ years as an AWS partner with a vast store of knowledge and a proven track record across industries.",
  },
];

const WHY_CHOOSE = [
  {
    Icon: Award,
    title: "13+ Years of Experience",
    stat: "13+",
    statLabel: "Years AWS Partner",
    desc: "We've delivered AWS consulting to businesses across industries — we've seen every edge case.",
  },
  {
    Icon: ShieldCheck,
    title: "Security First",
    stat: "100%",
    statLabel: "Compliance Focus",
    desc: "Every engagement is built on practices that keep your infrastructure and data secure by default.",
  },
  {
    Icon: Wallet,
    title: "Cost Efficient",
    stat: "30%",
    statLabel: "Avg. Cost Savings",
    desc: "Solutions are architected to control spend from day one, not bolted on as an afterthought.",
  },
  {
    Icon: HeadphonesIcon,
    title: "24/7 Support",
    stat: "24/7",
    statLabel: "Always Available",
    desc: "Round-the-clock support so you're never left waiting on a critical issue.",
  },
];

const OVERVIEW_TABS = [
  {
    id: "overview",
    label: "Overview",
    heading: "AWS Consulting Services",
    body: [
      "We start by understanding your business goals, existing IT setup, and specific challenges. Then we craft a tailored AWS strategy — from architecture design and migration planning to performance tuning and security configurations — so your cloud setup doesn't just work, it helps you move faster and operate more efficiently.",
      "Key areas we cover: infrastructure design and provisioning, application migration to AWS, security configuration and identity management, backup and disaster recovery setup, and budgeting and cost control. We don't just offer advice — we become your technology partner, from proof of concept to deployment and monitoring.",
    ],
    bullets: [
      "Infrastructure design and provisioning",
      "Application migration to AWS",
      "Security configuration and identity management",
      "Backup and disaster recovery setup",
      "Budgeting and cost control",
    ],
  },
  {
    id: "cloud",
    label: "Cloud Consulting",
    heading: "AWS Cloud Consulting Services",
    body: [
      "Our AWS Cloud Consulting Services focus on helping you design and scale cloud infrastructure that grows with your business. Whether you're launching a new product or modernising legacy systems, we guide you through every decision — saving time, reducing risk, and improving performance.",
    ],
    bullets: [
      "Cloud readiness assessment",
      "Hybrid cloud and multi-cloud strategies",
      "Optimisation of workloads for scalability",
      "Compliance and regulatory guidance",
      "Long-term cloud strategy planning",
    ],
  },
  {
    id: "cost",
    label: "Cost Optimisation",
    heading: "Cloud Cost Optimisation",
    body: [
      "At Goognu, we understand that managing cloud costs is as important as managing performance. Through our Services, we enable businesses to optimise AWS resource usage and control costs without compromising system performance.",
      "Our Services also include monthly reports and alerts to give you full visibility into your expenses. This allows your team to stay informed and avoid any surprise charges.",
    ],
    bullets: [
      "Usage analysis and billing review",
      "Cost-saving recommendations",
      "Resource rightsizing",
      "Reserved instance and savings plan strategies",
      "Monthly cost reports and alerts",
    ],
  },
  {
    id: "devops",
    label: "DevOps on AWS",
    heading: "DevOps on AWS",
    body: [
      "Modern businesses need fast deployment cycles and reliable automation. Goognu enables this through efficient DevOps practices powered by AWS. We automate your build pipelines, deploy infrastructure as code, and set up monitoring to make everything run smoothly.",
    ],
    bullets: [
      "CI/CD pipeline setup",
      "Automated testing and deployment",
      "Infrastructure as code (Terraform, CDK)",
      "Centralised monitoring and log management",
      "Security-integrated DevSecOps practices",
    ],
  },
];

const CLIENT_LOGOS = [
  "AP2V",
  "ImagineXP",
  "HighAI",
  "CollegeDekho",
  "Dalmia",
  "Shine.com",
  "Indian Express",
  "BKit",
  "Resonance",
  "Coolwinks",
  "Carlsberg",
  "Prashant Advait",
];

const RELATED_SERVICES = [
  { title: "AWS Managed Services", href: "/services/aws-managed-services" },
  { title: "AWS Cloud Migration", href: "/services/aws-cloud-migration-services" },
  { title: "AWS Data Lake Consulting", href: "/services/aws-data-lake-consulting-services" },
  { title: "AWS Data Warehouse", href: "/services/aws-data-warehouse-consulting-services" },
  { title: "AWS Discounted Billing", href: "/services/aws-discounted-billing-services" },
  { title: "AWS Well-Architected Review", href: "/services/aws-well-architectured-framework-review" },
];

/* ─────────────────────────────────────────────────────────── *
 *  Small helpers
 * ─────────────────────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-orange-500 to-amber-400" />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">
        {children}
      </span>
    </div>
  );
}

function StatBadge({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
      <span className="text-3xl font-extrabold text-brand">{stat}</span>
      <span className="mt-1 text-xs font-medium text-muted">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── *
 *  Hero form — glassmorphism dark style (matches homepage)
 * ─────────────────────────────────────────────────────────── */
function HeroConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="relative w-full max-w-sm mx-auto">
        <div className="absolute -inset-4 rounded-3xl bg-brand/10 blur-2xl" />
        <div className="relative z-10 rounded-xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-md shadow-2xl flex flex-col items-center gap-3 text-center">
          <CheckCircle2 size={40} className="text-emerald-400" />
          <p className="text-lg font-semibold text-white">We&apos;ll be in touch!</p>
          <p className="text-sm text-white/50">Our team will respond within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
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

        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
        >
          <input
            id="aws-form-name"
            type="text"
            required
            placeholder="Full Name*"
            className="w-full rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all"
          />
          <input
            id="aws-form-email"
            type="email"
            required
            placeholder="Work Email*"
            className="w-full rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all"
          />
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.07] px-3 py-2.5 text-sm text-white/70 shrink-0 cursor-pointer hover:bg-white/10 transition-all">
              <span className="text-base leading-none">🇬🇧</span>
              <span className="text-xs font-medium">+44</span>
              <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
            <input
              id="aws-form-phone"
              type="tel"
              required
              placeholder="Phone Number*"
              className="flex-1 min-w-0 rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all"
            />
          </div>
          <input
            id="aws-form-company"
            type="text"
            placeholder="Company Name"
            className="w-full rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all"
          />
          <div className="relative">
            <select
              id="aws-form-interest"
              defaultValue=""
              className="w-full appearance-none rounded-md border border-white/10 bg-white/[0.07] px-3.5 py-2.5 text-sm text-white/40 outline-none focus:border-brand/60 focus:bg-white/10 transition-all cursor-pointer"
              style={{ colorScheme: "dark" }}
            >
              <option value="" disabled className="text-slate-400 bg-navy">I am interested in*</option>
              {["AWS Consulting", "Cloud Migration", "Managed Services", "DevOps Automation", "Architecture Design", "Cost Optimisation", "Something else"].map((opt) => (
                <option key={opt} value={opt} className="bg-navy text-white">{opt}</option>
              ))}
            </select>
            <svg className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <button
            id="aws-form-submit"
            type="submit"
            className="mt-1 w-full rounded-md bg-brand py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/30 active:scale-[0.98]"
          >
            Get Free Consultation
          </button>
        </form>

        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-white/35">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          We respect your privacy. No spam, ever.
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── *
 *  Scrollspy nav items
 * ─────────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "need-section",         label: "When do you need AWS?" },
  { id: "overview-section",     label: "Overview" },
  { id: "services-section",     label: "Factors" },
  { id: "features-section",     label: "Features" },
  { id: "why-section",          label: "Why Choose Us" },
  { id: "clients-section",      label: "Our Clients" },
  { id: "testimonials-section", label: "Testimonials" },
];

/* ─────────────────────────────────────────────────────────── *
 *  Page
 * ─────────────────────────────────────────────────────────── */
export default function AwsConsultingServicesPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const activeSection = OVERVIEW_TABS.find((t) => t.id === activeTab)!;

  // ── Scrollspy: track which section is currently in the viewport ──
  const [activeNav, setActiveNav] = useState("need-section");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sectionEls = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the section with the largest intersection ratio that is currently visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) setActiveNav(visible[0].target.id);
      },
      {
        rootMargin: "-120px 0px -40% 0px", // account for top main header + subnav sticky offset
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sectionEls.forEach((el) => observerRef.current!.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 120; // main header (~64px) + sticky subnav (~56px)
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
      <section className="relative overflow-x-hidden bg-navy text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,rgba(22,98,246,0.45),transparent)]" />
        <div className="absolute top-16 right-[8%] h-80 w-80 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute bottom-0 left-[5%] h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

        {/* AWS badge */}
        <div className="relative border-b border-white/10 py-3">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-3 text-xs text-white/50">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link href="/services" className="hover:text-white/80 transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className="text-white/80">AWS Consulting Services</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left — copy */}
            <div>
              <Eyebrow>AWS Services</Eyebrow>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                AWS Consulting{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                Get a secure, safe, and fast adaptation of AWS Cloud — from architecture design
                and migration planning to performance tuning and security configuration.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  id="aws-hero-cta-primary"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90 hover:-translate-y-0.5"
                >
                  Get Free Advice
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  id="aws-hero-cta-secondary"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-all hover:border-white/40 hover:bg-white/10"
                >
                  Talk to an Engineer
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { n: "13+", l: "Years Experience" },
                  { n: "200+", l: "Clients Served" },
                  { n: "99.9%", l: "Uptime SLA" },
                  { n: "30%", l: "Avg Cost Savings" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                    <div className="text-2xl font-extrabold text-brand">{s.n}</div>
                    <div className="mt-0.5 text-[11px] text-white/50">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Related services pills */}
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                  Related Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {RELATED_SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      id={`aws-related-${s.href.split("/").pop()}`}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 transition-all hover:border-brand/40 hover:bg-brand/10 hover:text-white"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — glassmorphism form (homepage style) */}
            <div className="flex justify-center lg:justify-end">
              <HeroConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ STICKY SECTION WRAPPER (SCOPE ENDS AFTER TESTIMONIALS) ═══════════════ */}
      <div className="relative">
        {/* ═══════════════ SCROLLSPY STICKY NAV ═══════════════ */}
        <nav className="sticky top-[58px] sm:top-[64px] z-40 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-center sm:justify-between gap-1 sm:gap-4 md:gap-6 overflow-x-auto scrollbar-none py-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`flex-shrink-0 whitespace-nowrap border-b-2 px-3 sm:px-4 py-3.5 text-xs sm:text-sm transition-all duration-150 ${
                    activeNav === item.id
                      ? "border-brand text-brand font-bold"
                      : "border-transparent text-slate-500 hover:border-slate-300 hover:text-navy font-medium"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* ═══════════════ "WHEN DO YOU NEED AWS" INTRO ═══════════════ */}
        <section id="need-section" className="py-16 bg-slate-50 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <Eyebrow>When You Need AWS</Eyebrow>
                <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">
                  Signs You Need AWS Consulting
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Not every business knows when it&apos;s the right time to move to AWS or optimise their existing cloud setup. Here are the key signals:
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { n: "01", t: "Infrastructure is slowing you down", d: "Legacy servers or on-prem setups can't scale to match your growth." },
                  { n: "02", t: "Cloud costs are unpredictable", d: "Monthly AWS bills vary wildly with no clear visibility into what drives them." },
                  { n: "03", t: "Security concerns are growing", d: "Compliance requirements and data security need expert cloud governance." },
                  { n: "04", t: "Deployment takes too long", d: "Releases are manual, error-prone, and slow your team's velocity." },
                ].map((item) => (
                  <div key={item.n} className="rounded-xl border border-slate-200 bg-white p-5 transition-all hover:shadow-md hover:border-brand/20">
                    <div className="mb-2 text-xs font-extrabold text-brand/40">{item.n}</div>
                    <div className="text-sm font-bold text-navy">{item.t}</div>
                    <div className="mt-1 text-xs leading-relaxed text-muted">{item.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      {/* ═══════════════ OVERVIEW (TABBED) ═══════════════ */}
      <section id="overview-section" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Tab sidebar */}
            <div className="lg:col-span-1">
              <Eyebrow>In Depth</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">
                What We Cover
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Explore the full scope of our AWS Consulting Services — from strategy to execution.
              </p>

              <div className="mt-6 flex flex-col gap-1">
                {OVERVIEW_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    id={`aws-tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-brand text-white shadow-lg shadow-brand/20"
                        : "text-navy hover:bg-surface"
                    }`}
                  >
                    <ChevronRight
                      size={14}
                      className={`shrink-0 transition-transform ${activeTab === tab.id ? "rotate-90" : ""}`}
                    />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content panel */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-100 bg-surface p-8 transition-all">
                <h3 className="text-xl font-bold text-navy md:text-2xl">
                  {activeSection.heading}
                </h3>
                <div className="mt-4 space-y-4">
                  {activeSection.body.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {activeSection.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                      <span className="text-sm text-navy">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    id="aws-overview-cta"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand/90 hover:-translate-y-0.5"
                  >
                    Discuss This With Us
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MAJOR SERVICES ═══════════════ */}
      <section id="services-section" className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <Eyebrow>What&apos;s Included</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Major Services Offered by Goognu
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              From strategy to hands-on implementation, we cover every dimension of your AWS journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MAJOR_SERVICES.map(({ Icon, title, desc, color }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/80"
              >
                {/* Gradient accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-md`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-base font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>

                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Link href="/contact" id={`aws-service-${title.toLowerCase().replace(/\s+/g, "-")}`}>
                    Learn More
                  </Link>
                  <ArrowRight size={12} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURES ═══════════════ */}
      <section id="features-section" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy md:text-3xl">
              Browse Our Set of Features
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted">
              A comprehensive suite of capabilities to accelerate your cloud transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-slate-100 bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/20 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE US ═══════════════ */}
      <section id="why-section" className="py-16 bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6">
          {/* Decorative blobs */}
          <div className="absolute left-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl -translate-x-1/2" />
          <div className="absolute right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl translate-x-1/2" />

          <div className="relative mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-orange-500 to-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-300">
                Why Goognu
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
              Why Choose Us?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/60">
              We don&apos;t just migrate you to AWS — we become your long-term cloud partner.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map(({ Icon, title, stat, statLabel, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-brand/40 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/20 text-brand transition-all group-hover:bg-brand group-hover:text-white">
                  <Icon size={20} />
                </div>

                <div className="mt-5">
                  <span className="text-3xl font-extrabold text-white">{stat}</span>
                  <div className="text-xs text-white/40">{statLabel}</div>
                </div>

                <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{desc}</p>
              </div>
            ))}
          </div>

          {/* Central CTA */}
          <div className="relative mt-12 text-center">
            <Link
              href="/contact"
              id="aws-why-cta"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90 hover:-translate-y-0.5"
            >
              Start Your AWS Journey
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ CLIENT LOGOS ═══════════════ */}
      <section id="clients-section" className="py-14 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-muted">
            You&apos;re in Good Company
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo}
                className="flex h-10 min-w-[80px] items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-4 text-xs font-bold text-slate-400 transition-all hover:border-brand/20 hover:bg-brand/5 hover:text-brand"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <section id="testimonials-section" className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy md:text-3xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            {TESTIMONIALS.slice(0, 4).map((t) => (
              <div
                key={t.name}
                className="group rounded-2xl border border-slate-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-amber-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-sm font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left text */}
            <div>
              <Eyebrow>Get Started Today</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold text-navy md:text-3xl">
                Ready to Build on AWS the Right Way?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Talk to our AWS-certified consultants about architecture, migration, and cost
                strategy tailored to your business. No commitment required — just a free,
                expert conversation.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { Icon: Award, label: "AWS Certified Team" },
                  { Icon: ShieldCheck, label: "Security First" },
                  { Icon: DollarSign, label: "Cost Transparent" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 bg-surface px-4 py-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-semibold text-navy">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  id="aws-closing-cta-primary"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90 hover:-translate-y-0.5"
                >
                  Get Free Consultation
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  id="aws-closing-cta-secondary"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:border-brand hover:text-brand"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>

            {/* Right — compact CTA card */}
            <div className="rounded-2xl bg-navy p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(22,98,246,0.4),transparent)]" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/20 text-brand">
                  <Award size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">AWS Certified Experts</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  Our team holds multiple AWS certifications and has delivered 200+ cloud projects across industries.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {["Solutions Architect", "DevOps Engineer", "Cloud Practitioner", "Security Specialty"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2.5">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                      <span className="text-sm text-white/80">{cert}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  id="aws-closing-form-cta"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-bold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand/90"
                >
                  Book a Free Session
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
