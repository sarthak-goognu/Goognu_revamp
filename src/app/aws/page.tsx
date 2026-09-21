"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Award,
  Server, Ship, Wallet, BarChart3, Lock, Cpu,
  ShoppingCart, Gamepad2, HeartPulse, Dumbbell, Cloud, Landmark,
  Star, Building2,
} from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";

// Bespoke AWS Partnership landing page — structurally distinct from the
// standard /services/aws-* pages (see ServiceDetailTemplate). Content
// condensed from the real https://goognu.com/aws page: hero stats,
// Advance Tier Partnership, compute services deep-dive, the full AWS
// service catalog, industries served, certifications, case studies.

const HERO_STATS = [
  { icon: Cloud, label: "Cloud Migration" },
  { icon: Lock, label: "Enterprise Security" },
  { icon: Zap, label: "99.99% Uptime" },
  { icon: Globe, label: "Global Reach" },
];

const PARTNERSHIP_FEATURES = [
  { icon: ShieldCheck, title: "Enterprise Security", description: "Industry-leading security with 300+ compliance programs and built-in protection across all layers." },
  { icon: Zap, title: "Unmatched Performance", description: "Lightning-fast compute power with global infrastructure delivering 99.99% availability." },
  { icon: Globe, title: "Global Reach", description: "Deploy across 100+ availability zones worldwide with low-latency access from anywhere." },
];

const GROWTH_STATS = [
  { number: "45+", label: "Customers Served" },
  { number: "70+", label: "Projects Delivered" },
  { number: "100%", label: "Certified Team" },
  { number: "24×7", label: "Managed Service Support" },
];

const VALUE_PROPS = [
  { icon: Cpu, title: "Technical Excellence", description: "Deep expertise in AWS architecture, optimization, and best practices ensuring robust, scalable solutions." },
  { icon: BarChart3, title: "Strategic Guidance", description: "Business-aligned cloud strategies that drive growth, efficiency, and competitive advantage." },
  { icon: Ship, title: "Seamless Migration", description: "Zero-downtime migrations with comprehensive planning, testing, and 24/7 support throughout the process." },
  { icon: Wallet, title: "Cost Optimization", description: "FinOps-led practices that reduce cloud spend without compromising on performance or reliability." },
  { icon: BarChart3, title: "Data & Analytics", description: "Unlock actionable insights with real-time dashboards, data lakes, and AI-powered analytics." },
  { icon: Lock, title: "Compliance & Governance", description: "Proactive governance frameworks ensuring regulatory compliance and continuous risk management." },
];

const COMPUTE_SERVICES = [
  {
    key: "ec2",
    name: "Amazon EC2",
    tag: "Elastic Compute Cloud",
    description: "Secure, resizable virtual machines in the cloud. Launch instances in minutes — from burstable micro instances to memory-optimised giants — and pay only for what you use.",
    points: [
      "750+ instance types across compute, memory & GPU families",
      "Auto Scaling for cost-efficient elasticity",
      "Spot & Reserved Instances for up to 90% savings",
      "Deploy across 30+ AWS Regions globally",
    ],
  },
  {
    key: "ecs",
    name: "Amazon ECS",
    tag: "Elastic Container Service",
    description: "A fully managed container orchestration service. ECS simplifies the deployment, management, and scaling of containerised applications — with deep integration across the AWS ecosystem.",
    points: [
      "Serverless containers with AWS Fargate",
      "Integrated with ECR, IAM, CloudWatch & ALB",
      "Blue/green deployments via CodeDeploy",
      "Zero infrastructure management overhead",
    ],
  },
  {
    key: "eks",
    name: "Amazon EKS",
    tag: "Elastic Kubernetes Service",
    description: "Run Kubernetes at scale without the operational overhead. EKS provides a managed control plane with automated upgrades, patching, and built-in high availability across multiple AZs.",
    points: [
      "Fully managed Kubernetes control plane",
      "Run on Fargate, EC2, or hybrid on-premises",
      "Kubernetes-native networking via VPC CNI",
      "CNCF conformant — no vendor lock-in",
    ],
  },
];

const SERVICE_CATALOG = [
  { category: "Compute", items: ["EC2 Instances", "Lambda Functions", "ECS Containers", "Elastic Beanstalk"] },
  { category: "Storage", items: ["S3 Object Storage", "EBS Block Storage", "EFS File Systems", "Glacier Archive"] },
  { category: "Databases", items: ["RDS Relational", "DynamoDB NoSQL", "ElastiCache", "DocumentDB"] },
  { category: "Networking & Content Delivery", items: ["VPC Networks", "CloudFront CDN", "Route 53 DNS", "Direct Connect"] },
  { category: "Machine Learning", items: ["SageMaker ML", "Rekognition Vision", "Comprehend NLP", "Lex Chatbots"] },
  { category: "Analytics", items: ["Redshift Data Warehouse", "EMR Big Data", "Kinesis Streaming", "Athena Queries"] },
  { category: "DevOps", items: ["CodePipeline CI/CD", "CloudFormation IaC", "CodeCommit Git", "CodeDeploy"] },
  { category: "Security & Identity", items: ["IAM Access Management", "KMS Key Management", "CloudTrail Auditing", "WAF Security"] },
];

const INDUSTRIES = [
  {
    key: "ecommerce",
    icon: ShoppingCart,
    name: "E-Commerce Application",
    description: "Building high-performance, conversion-optimised e-commerce platforms on AWS. We help online retailers scale effortlessly, manage peak traffic, and deliver frictionless shopping experiences across every channel.",
    solutions: ["Cloud-native storefront architecture", "Auto-scaling for traffic spikes", "AI-powered product recommendations", "Secure payment & order management"],
  },
  {
    key: "gaming",
    icon: Gamepad2,
    name: "Mobile Game Development",
    description: "Powering game studios with low-latency, globally distributed cloud infrastructure. From real-time multiplayer backends to live analytics, we help developers ship faster and scale to millions of players.",
    solutions: ["Real-time multiplayer game servers", "Player data & telemetry pipelines", "Global CDN for asset delivery", "In-app purchase & fraud detection"],
  },
  {
    key: "healthcare",
    icon: HeartPulse,
    name: "Healthcare Development",
    description: "Delivering secure, compliance-aligned cloud solutions for healthcare providers and health-tech startups. We modernise patient data systems, enable remote care, and unlock clinical insights through advanced analytics.",
    solutions: ["Cloud-based EMR / EHR platforms", "Secure patient data interoperability", "AI-driven diagnostics & imaging", "Telehealth & remote monitoring"],
  },
  {
    key: "fitness",
    icon: Dumbbell,
    name: "Fitness and Wellness",
    description: "Helping fitness brands and wellness apps build scalable digital experiences. From personalised workout engines to wearable integrations, we connect people with health tools that work anywhere, anytime.",
    solutions: ["Wearable device & IoT data ingestion", "Personalised fitness recommendation engine", "Live & on-demand video streaming", "Member engagement & retention analytics"],
  },
  {
    key: "saas",
    icon: Cloud,
    name: "SaaS Development",
    description: "Architecting multi-tenant SaaS platforms built for reliability and growth. We help software companies migrate, modernise, and monetise their products on AWS with enterprise-grade security and 99.99% uptime.",
    solutions: ["Multi-tenant architecture design", "Usage-based billing & metering", "CI/CD pipelines & DevOps automation", "SOC 2 & ISO compliance readiness"],
  },
  {
    key: "finance",
    icon: Landmark,
    name: "Finance Development",
    description: "Building resilient, compliant financial platforms on AWS for banks, fintechs, and investment firms. We accelerate digital banking, automate risk workflows, and ensure data sovereignty at every layer.",
    solutions: ["Core banking & payment modernisation", "Real-time fraud detection & risk scoring", "Regulatory compliance & audit trails", "Open banking API infrastructure"],
  },
];

const CERTIFICATIONS = [
  {
    tier: "Foundational",
    name: "AWS Certified Cloud Practitioner",
    description: "Validates broad, high-level understanding of AWS Cloud concepts, services, security, architecture, pricing, and support — the foundation for every cloud-first team member.",
    points: ["Cloud concepts & core AWS services", "Security, compliance & shared responsibility", "Billing, pricing models & cost management"],
  },
  {
    tier: "Associate",
    name: "AWS Certified Solutions Architect — Associate",
    description: "Demonstrates expertise in designing distributed systems and deploying well-architected cloud solutions with security, resilience, and cost efficiency on AWS.",
    points: ["Designing resilient, high-availability architectures", "AWS compute, storage, database & networking", "Security best practices & cost-optimised design"],
  },
  {
    tier: "Professional",
    name: "AWS Certified Solutions Architect — Professional",
    description: "The highest-level architecture credential — validates advanced skills in designing complex, enterprise-grade AWS systems with a focus on performance, scale, and governance.",
    points: ["Complex multi-account & hybrid architectures", "Enterprise migration strategy & governance", "Cost optimisation at enterprise scale"],
  },
];

const CASE_STUDIES = [
  {
    tag: "AWS WAF · Geo-Blocking",
    industry: "Automotive",
    title: "Fortifying a National Automotive Platform Against Geo-Distributed Threats",
    summary: "A leading automotive marketplace faced a surge of region-specific attacks. Goognu deployed AWS WAF with precision geo-blocking rules and IP whitelisting, cutting malicious traffic by 99.8% while keeping legitimate users unaffected.",
    stats: [["99.8%", "Malicious Traffic Cut"], ["0", "Legit Users Impacted"], ["200+", "Brands Secured at the Edge"]],
  },
  {
    tag: "AWS WAF · DDoS Protection",
    industry: "FoodTech",
    title: "Multi-Brand FMCG Chain Achieves Enterprise-Grade Web Security on AWS",
    summary: "Operating across 200+ restaurant brands, this FMCG group needed centralised web security. Goognu implemented AWS WAF with custom rule groups, shielding all customer-facing properties from SQL injections, bot attacks, and DDoS threats at the edge.",
    stats: [["200+", "Brands Protected"], ["Edge", "Threat Filtering"]],
  },
  {
    tag: "Kubernetes · Zero-Downtime Migration",
    industry: "Banking",
    title: "Zero-Downtime Migration of Banking Microservices to a Bare Metal Kubernetes Cluster",
    summary: "A regulated financial institution needed to move 40+ microservices without disrupting 24/7 operations. Goognu engineered a fully automated migration pipeline on Kubernetes, achieving zero service interruption and a 60% reduction in infrastructure costs.",
    stats: [["40+", "Microservices Moved"], ["60%", "Cost Reduction"]],
  },
];

export default function AwsPartnershipPage() {
  const [activeCompute, setActiveCompute] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(255,153,0,0.25),transparent)]" />
        <div className="absolute top-16 right-[8%] h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5">
              <Cloud size={13} className="text-orange-300" />
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-300">Goognu × AWS — Cloud Partnership</span>
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Powering your AWS Cloud Transformation with Goognu
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Future-ready, secure, and infinitely scalable — Goognu&rsquo;s AWS practice turns cloud complexity into competitive advantage through precision-engineered solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
                  <s.icon size={14} className="text-orange-300" />
                  {s.label}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600 hover:-translate-y-0.5"
              >
                Start Your Cloud Transformation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-xs text-white/50">Tell us about your cloud goals — we&rsquo;ll be in touch within 24 hours.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ADVANCE TIER PARTNERSHIP ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-50 px-4 py-1.5">
                <Award size={13} className="text-orange-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">Advance Tier Partnership</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-navy md:text-3xl">Advance Tier Partnership with AWS</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                At Goognu, we craft automation-first, data-backed cloud cost strategies that fit your business — not a template. Sustained savings, rock-solid reliability, and zero compromise on performance: that&rsquo;s our promise.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted">
                Through FinOps-led management and proactive governance, we give your teams end-to-end clarity on every dollar spent in the cloud — so you invest where it counts.
              </p>
            </div>

            <div className="space-y-4">
              {PARTNERSHIP_FEATURES.map((f) => (
                <div key={f.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-surface p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-sm">
                    <f.icon size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-sm">{f.title}</div>
                    <div className="mt-1 text-sm leading-relaxed text-muted">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ GROWTH STATS ═══════════════ */}
      <section className="py-14 bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-xl font-semibold tracking-tight md:text-2xl">Fuelling Growth Through Cloud Excellence</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/60">
            Reshape your business with next-generation cloud infrastructure. Our specialists build scalable, hardened, and cost-efficient AWS environments that produce measurable outcomes.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {GROWTH_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-orange-300 md:text-4xl">{s.number}</div>
                <div className="mt-1 text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ VALUE WE DELIVER ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-50 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">Why Goognu</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">Value We Deliver</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              Work with specialists who marry deep AWS technical knowledge with sharp business acumen to deliver cloud outcomes that genuinely move the needle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_PROPS.map((v) => (
              <div key={v.title} className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/70">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-sm">
                  <v.icon size={18} />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-navy leading-snug">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CORE COMPUTE SERVICES (interactive) ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-50 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">Core Compute Services</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">Powering Workloads with AWS Compute</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              From virtual machines to container orchestration — Goognu deploys and manages the full spectrum of AWS compute services to match every workload profile.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {COMPUTE_SERVICES.map((c, i) => (
              <button
                key={c.key}
                onClick={() => setActiveCompute(i)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeCompute === i ? "bg-navy text-white shadow-md" : "bg-surface text-muted hover:bg-slate-200"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-surface p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-sm">
                <Server size={18} />
              </div>
              <div>
                <div className="text-lg font-bold text-navy">{COMPUTE_SERVICES[activeCompute].name}</div>
                <div className="text-xs font-medium uppercase tracking-wide text-muted">{COMPUTE_SERVICES[activeCompute].tag}</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">{COMPUTE_SERVICES[activeCompute].description}</p>
            <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {COMPUTE_SERVICES[activeCompute].points.map((p) => (
                <div key={p} className="flex items-start gap-2 text-sm text-navy/80">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-orange-500" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ AWS SERVICE CATALOG ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-white px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">AWS Services</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">Our AWS Cloud Services</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">Comprehensive cloud solutions covering every aspect of your infrastructure needs.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICE_CATALOG.map((cat) => (
              <div key={cat.category} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="text-sm font-bold text-navy">{cat.category}</h3>
                <ul className="mt-3 space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-muted">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ INDUSTRIES (interactive) ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-50 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">Industries</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">Industries We Serve</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              Goognu delivers purpose-built AWS cloud strategies across high-growth sectors — accelerating time-to-market, cutting operational costs, and enabling smarter decisions at every scale.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {INDUSTRIES.map((ind, i) => (
                <button
                  key={ind.key}
                  onClick={() => setActiveIndustry(i)}
                  className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all lg:shrink ${
                    activeIndustry === i ? "bg-navy text-white shadow-md" : "bg-surface text-muted hover:bg-slate-200"
                  }`}
                >
                  <ind.icon size={16} className={activeIndustry === i ? "text-orange-300" : "text-muted"} />
                  {ind.name}
                </button>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-sm">
                {(() => { const Icon = INDUSTRIES[activeIndustry].icon; return <Icon size={20} />; })()}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{INDUSTRIES[activeIndustry].name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{INDUSTRIES[activeIndustry].description}</p>
              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {INDUSTRIES[activeIndustry].solutions.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-sm text-navy/80">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-orange-500" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ PUBLIC SECTOR BANNER ═══════════════ */}
      <section className="py-14 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-white md:px-14 md:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_20%_0%,rgba(255,153,0,0.3),transparent)]" />
            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl">Accelerating Innovation Across the Public Sector</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
                  Goognu partners with government bodies, defence agencies, and civic organisations to unlock the full power of the cloud — securely, compliantly, and at scale. Our certified experts bridge the gap between policy and technology.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/70">
                  <span className="flex items-center gap-1.5"><Award size={13} className="text-orange-300" /> Verified AWS Partner</span>
                  <span className="flex items-center gap-1.5"><Building2 size={13} className="text-orange-300" /> Dedicated Gov Team</span>
                  <span className="flex items-center gap-1.5"><Zap size={13} className="text-orange-300" /> Innovation-Led Delivery</span>
                </div>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-opacity hover:opacity-90">
                Explore Case Studies
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CERTIFICATIONS ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-50 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">AWS Certified Team</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">AWS Certifications</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              Our engineers hold the industry&rsquo;s most respected AWS credentials — giving you the assurance that every solution is architected, deployed, and governed to the highest standard.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CERTIFICATIONS.map((c) => (
              <div key={c.tier} className="rounded-2xl border border-slate-200 bg-surface p-6">
                <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-orange-700">{c.tier}</span>
                <h3 className="mt-3 text-sm font-bold text-navy leading-snug">{c.name}</h3>
                <p className="mt-2.5 text-xs leading-relaxed text-muted">{c.description}</p>
                <div className="mt-4 space-y-1.5">
                  {c.points.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-xs text-navy/70">
                      <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-orange-500" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIAL ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="flex justify-center gap-1 text-orange-400">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="mt-5 text-lg leading-relaxed text-navy/80">
            &ldquo;We are excited about the ongoing collaboration and the possibilities that lie ahead as we continue to leverage the cloud for our growth and innovation. Your contributions are instrumental in helping us achieve our goals.&rdquo;
          </p>
          <div className="mt-5 text-sm font-bold text-navy">Rajesh Munjal</div>
          <div className="text-xs text-muted">CEO, MHealth</div>
        </div>
      </section>

      {/* ═══════════════ CASE STUDIES ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-50 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-600">AWS Case Studies</span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">Real Results on AWS Infrastructure</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
              From cloud migrations to container-native modernisation — see how Goognu delivers measurable outcomes with AWS.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.title} className="flex flex-col rounded-2xl border border-slate-200 bg-surface p-6">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-orange-600">
                  <span>{cs.tag}</span>
                </div>
                <span className="mt-1 text-[11px] font-medium text-muted">{cs.industry}</span>
                <h3 className="mt-3 text-sm font-bold text-navy leading-snug">{cs.title}</h3>
                <p className="mt-2.5 flex-1 text-xs leading-relaxed text-muted">{cs.summary}</p>
                <div className="mt-5 flex flex-wrap gap-4 border-t border-slate-200 pt-4">
                  {cs.stats.map(([num, label]) => (
                    <div key={label}>
                      <div className="text-lg font-bold text-orange-600">{num}</div>
                      <div className="text-[10px] text-muted">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark">
              Explore our complete portfolio of AWS success stories
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ TESTIMONIALS (site-wide) ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {TESTIMONIALS.slice(0, 4).map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-100 bg-white p-6">
                <p className="text-sm leading-relaxed text-muted">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 text-sm font-bold text-navy">{t.name}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,153,0,0.4),transparent)]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Ready to power your AWS transformation?</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/65">
                Empowering businesses with secure, scalable, and innovative AWS cloud solutions. Let&rsquo;s talk about your cloud goals.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-opacity hover:opacity-90"
              >
                Start Your Cloud Transformation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
