"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Share2,
  UserCircle,
  Layers,
  SlidersHorizontal,
  CheckCircle2,
  Activity,
  Zap,
  ChevronRight,
  Play,
  Pause,
  Globe,
} from "lucide-react";
import { PRODUCTS } from "@/lib/content";

export default function PuboostPage() {
  const otherProducts = PRODUCTS.filter((p) => p.slug !== "puboost");

  // Live event stream simulator
  const [streamPaused, setStreamPaused] = useState<boolean>(false);
  const [eventCount, setEventCount] = useState<number>(14820);

  // Active profile tab
  const [activeProfileTab, setActiveProfileTab] = useState<"journey" | "traits" | "channels">("journey");

  // Active ecosystem integration category
  const [integrationCategory, setIntegrationCategory] = useState<"all" | "crm" | "ads" | "analytics">("all");

  useEffect(() => {
    if (streamPaused) return;
    const timer = setInterval(() => {
      setEventCount((prev) => prev + Math.floor(Math.random() * 5) + 2);
    }, 1200);
    return () => clearInterval(timer);
  }, [streamPaused]);

  const capabilities = [
    {
      icon: Layers,
      title: "Break Down Enterprise Data Silos",
      tag: "Unified View",
      description:
        "Aggregate user touchpoints from web applications, mobile apps, and ad campaigns into a single unified stream — no fragmented data stacks.",
    },
    {
      icon: UserCircle,
      title: "360° Lifetime Behavioral Profiles",
      tag: "Identity Resolution",
      description:
        "Track every visitor's full journey: pages viewed, scroll depth, session frequency, and device footprint mapped to persistent customer IDs.",
    },
    {
      icon: Target,
      title: "Precision Intent Scoring & Campaigns",
      tag: "Conversion Lift",
      description:
        "Identify high-intent prospects in real time and automatically trigger recovery flows for abandoned funnels and high-value visitors.",
    },
    {
      icon: Share2,
      title: "Cross-Department Real-Time Access",
      tag: "Team Alignment",
      description:
        "Provide marketing, sales, and product teams instant access to verified user activity so campaigns are aligned with true user behavior.",
    },
    {
      icon: SlidersHorizontal,
      title: "No-Code Dynamic Audience Segmentation",
      tag: "Zero Engineering",
      description:
        "Build sophisticated cohort filters based on live behavioral triggers without writing SQL queries or waiting for engineering sprints.",
    },
    {
      icon: Zap,
      title: "Sub-Second Webhook Automation Engine",
      tag: "< 50ms Dispatch",
      description:
        "Stream user milestones directly to your CRM, email tools, or ad networks the moment a target interaction occurs.",
    },
  ];

  const integrations = [
    { name: "HubSpot CRM", category: "crm", desc: "Sync lifetime event history to deal records" },
    { name: "Salesforce Cloud", category: "crm", desc: "Automate lead routing based on high intent" },
    { name: "Google Ads & Meta Pixel", category: "ads", desc: "Real-time custom audience retargeting sync" },
    { name: "Segment & PostHog", category: "analytics", desc: "Bi-directional telemetry stream ingestion" },
    { name: "Klaviyo & Braze", category: "ads", desc: "Trigger personalized behavioral email sequences" },
    { name: "Custom API & Webhooks", category: "analytics", desc: "Low-latency REST / Kafka endpoints" },
  ];

  const filteredIntegrations = integrationCategory === "all"
    ? integrations
    : integrations.filter((i) => i.category === integrationCategory);

  return (
    <div className="min-h-screen bg-white text-navy selection:bg-violet-500 selection:text-white">
      {/* ═══════════════ STREAMLINED HERO (Airy & Clean) ═══════════════ */}
      <section className="relative overflow-hidden bg-navy py-12 md:py-16 text-white">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.22),transparent)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
            </span>
            <span>Real-Time Customer Data Platform</span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px] leading-tight">
            Turn Raw User Clicks into <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">Actionable Growth</span> in Real Time
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Track user journeys across web apps and campaigns — unifying fragmented touchpoints into 360° behavioral profiles to trigger automated conversion flows.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition-all hover:bg-violet-500 hover:-translate-y-0.5"
            >
              Start Tracking for Free
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <Activity size={16} className="text-violet-400" />
              Explore Live Demo
            </Link>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-violet-400" /> &lt; 20ms Event Stream Ingest</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-violet-400" /> Cross-Device Identity Graph</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-violet-400" /> Zero SQL Querying Required</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ LIVE REAL-TIME EVENT STREAM (Dedicated Clean Section) ═══════════════ */}
      <section className="border-b border-slate-200 bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600 font-bold">
                  <Activity size={20} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-navy">Live Behavioral Event Stream</h2>
                  <p className="text-xs text-muted">{eventCount.toLocaleString()} events processed today</p>
                </div>
              </div>
              <button
                onClick={() => setStreamPaused(!streamPaused)}
                className="flex items-center gap-1.5 self-start sm:self-auto rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 border border-violet-200 hover:bg-violet-100 transition"
              >
                {streamPaused ? <Play size={11} /> : <Pause size={11} />}
                {streamPaused ? "Stream Paused" : "Live Stream Active"}
              </button>
            </div>

            {/* Event Feed */}
            <div className="mt-5 space-y-3 text-xs">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3.5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> High Intent Detected (Score: 9.4/10)
                  </span>
                  <span className="text-[11px] text-muted">2s ago</span>
                </div>
                <div className="text-slate-700 text-xs">
                  User <code className="text-navy font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded">usr_89a2b</code> visited <span className="font-semibold text-violet-700">/enterprise-pricing</span> (Scroll: 94%, 4m 12s)
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold">
                  ⚡ Auto Action: Dispatched priority lead alert to Sales via Slack
                </div>
              </div>

              <div className="rounded-xl border border-violet-200 bg-violet-50/40 p-3.5 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-violet-900 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-violet-600" /> Cart Abandonment Recovered
                  </span>
                  <span className="text-[11px] text-muted">14s ago</span>
                </div>
                <div className="text-slate-700 text-xs">
                  Lead <code className="text-navy font-mono bg-white border border-slate-200 px-1.5 py-0.5 rounded">sarah.j@techcorp.io</code> triggered VIP dynamic retention sequence
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 space-y-1 text-muted">
                <div className="flex items-center justify-between">
                  <span className="text-navy font-medium flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-400" /> Identity Graph Resolution
                  </span>
                  <span className="text-[11px] text-muted">38s ago</span>
                </div>
                <div className="text-xs">
                  Merged anonymous mobile visit with verified authenticated desktop profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 360° UNIFIED CUSTOMER PROFILE CARD ═══════════════ */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left side explanation */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-600">
                <UserCircle size={14} /> 360° Identity Resolution
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Know Every Customer's Full Story Across Touchpoints
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Traditional analytics tools show disconnected pageviews. Puboost links every session, click, campaign source, and device into a persistent lifetime timeline.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-violet-600 shrink-0" />
                  <span>Persistent cross-device tracking without cookie dependency</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-violet-600 shrink-0" />
                  <span>Automated Propensity & Lifetime Value (LTV) predictive scoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-violet-600 shrink-0" />
                  <span>Instant bi-directional synchronization with your CRM</span>
                </div>
              </div>
            </div>

            {/* Right side interactive profile inspector */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-xl">
                {/* Profile Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 font-bold text-white text-lg shadow-sm">
                      SJ
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm">Sarah Jenkins</div>
                      <div className="text-xs text-muted">VP of Engineering · FinTech Global</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider text-muted font-semibold">Intent Score</div>
                    <div className="text-lg font-black text-emerald-600">9.4 / 10</div>
                  </div>
                </div>

                {/* Profile Tabs */}
                <div className="mt-4 flex gap-2 border-b border-slate-200 pb-3">
                  {[
                    { id: "journey", label: "Touchpoint Journey" },
                    { id: "traits", label: "Behavioral Traits" },
                    { id: "channels", label: "Channel Affinity" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveProfileTab(tab.id as any)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                        activeProfileTab === tab.id
                          ? "bg-violet-600 text-white shadow-sm"
                          : "text-muted hover:text-navy"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div className="mt-4 text-xs">
                  {activeProfileTab === "journey" && (
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-violet-600" />
                        <div>
                          <div className="font-semibold text-navy">Visited AWS FinOps Case Study</div>
                          <div className="text-muted text-[11px]">Organic Search · 3 mins on page · Desktop Chrome</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" />
                        <div>
                          <div className="font-semibold text-navy">Clicked [Talk to Architect] CTA</div>
                          <div className="text-muted text-[11px]">Triggered Automated CRM Lead Enrichment</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                        <div>
                          <div className="font-semibold text-navy">Downloaded Enterprise Architecture Whitepaper</div>
                          <div className="text-muted text-[11px]">Identified verified work email</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeProfileTab === "traits" && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-sm">
                        <div className="text-muted text-[10px] font-semibold">Total Sessions</div>
                        <div className="text-base font-bold text-navy mt-0.5">8 Sessions</div>
                      </div>
                      <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-sm">
                        <div className="text-muted text-[10px] font-semibold">Avg Scroll Depth</div>
                        <div className="text-base font-bold text-violet-600 mt-0.5">89%</div>
                      </div>
                      <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-sm">
                        <div className="text-muted text-[10px] font-semibold">Top Category</div>
                        <div className="text-base font-bold text-navy mt-0.5">Cloud Migration</div>
                      </div>
                      <div className="rounded-xl bg-white p-3 border border-slate-200 shadow-sm">
                        <div className="text-muted text-[10px] font-semibold">Primary Device</div>
                        <div className="text-base font-bold text-navy mt-0.5">macOS / Desktop</div>
                      </div>
                    </div>
                  )}

                  {activeProfileTab === "channels" && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Email Open Propensity</span>
                        <span className="font-bold text-emerald-600">92% (High)</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>LinkedIn Retargeting</span>
                        <span className="font-bold text-violet-600">Active Campaign</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>WhatsApp VIP Direct</span>
                        <span className="font-bold text-muted">Opted-In</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CAPABILITIES GRID ═══════════════ */}
      <section className="py-16 bg-surface border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-600">
              CDP Feature Suite
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Engineered for Scalable Customer Engagement
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100/70 text-violet-600 border border-violet-200 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-muted shadow-sm">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-navy group-hover:text-violet-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-violet-600 font-semibold">
                    <span>Explore CDP functionality</span>
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ ECOSYSTEM INTEGRATIONS ═══════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Connects with Your Existing MarTech Stack
            </h2>
            <p className="mt-2 text-muted text-sm">
              Bi-directional sync with your CRM, ad platforms, and analytics engines in minutes.
            </p>

            <div className="mt-6 flex justify-center gap-2">
              {[
                { id: "all", label: "All Integrations" },
                { id: "crm", label: "CRMs & Sales" },
                { id: "ads", label: "Ads & Email" },
                { id: "analytics", label: "Analytics & APIs" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setIntegrationCategory(cat.id as any)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                    integrationCategory === cat.id
                      ? "bg-violet-600 text-white shadow-sm"
                      : "bg-surface text-muted hover:text-navy border border-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredIntegrations.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 bg-surface p-5 hover:border-violet-400 hover:bg-white hover:shadow-md transition">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600 font-bold border border-violet-200">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-sm">{item.name}</div>
                    <div className="text-xs text-muted mt-0.5">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="py-14 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.4),transparent)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-400">
                Real-Time Data Advantage
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">
                Turn Behavior Into Revenue.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
                Schedule a customized Puboost walkthrough with our growth engineers and see how behavioral intelligence transforms conversions.
              </p>
              <div className="mt-7 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500"
                >
                  Get Started with Puboost
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPLORE OTHER PRODUCTS ═══════════════ */}
      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
            Explore Other Goognu Platforms
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-surface p-4 transition-all hover:border-violet-500/40 hover:bg-white hover:shadow-md"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient} text-white font-bold`}>
                  {p.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy group-hover:text-violet-600 transition-colors">
                    {p.name}
                  </div>
                  <div className="truncate text-xs text-muted">{p.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
