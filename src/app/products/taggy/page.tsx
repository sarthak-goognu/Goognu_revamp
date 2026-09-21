"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  BarChart3,
  Users,
  Inbox,
  CircleDashed,
  RefreshCw,
  CheckCircle2,
  Flame,
  Mail,
  MessageCircle,
  CalendarClock,
  PenLine,
  Lock,
} from "lucide-react";
import { PRODUCTS } from "@/lib/content";

export default function TaggyPage() {
  const otherProducts = PRODUCTS.filter((p) => p.slug !== "taggy");

  // ── Live dashboard preview (illustrative — mirrors the real Taggy dashboard) ──
  const stats = [
    { label: "Total Tickets", value: 79, icon: Inbox, tone: "bg-blue-50 text-blue-600" },
    { label: "Open", value: 1, icon: CircleDashed, tone: "bg-amber-50 text-amber-600" },
    { label: "In Progress", value: 0, icon: RefreshCw, tone: "bg-violet-50 text-violet-600" },
    { label: "Resolved", value: 76, icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-600" },
    { label: "SLA Breached", value: 19, icon: Flame, tone: "bg-red-50 text-red-600" },
  ];

  const ingestionSources = [
    { icon: Mail, title: "Email Ingest", desc: "Created by mail", detail: "Auto-parsed from subject + body", status: "Polling every 2 min" },
    { icon: MessageCircle, title: "WhatsApp", desc: "Source + destination number detection", detail: "Message converted automatically", status: "Webhook listener" },
    { icon: CalendarClock, title: "Scheduled Jobs", desc: "Pre-planned maintenance tasks", detail: "Cron-triggered automatically", status: "View schedules" },
    { icon: PenLine, title: "Manual Entry", desc: "Created during calls or meetings", detail: "Taggy-logged via dashboard", status: "Add new" },
  ];
  const [activeSource, setActiveSource] = useState(0);

  const capabilities = [
    { icon: Zap, title: "Multi-Channel Ticket Ingestion", description: "Ingest support requests in real time from email, WhatsApp, scheduled jobs, and manual entry — all flowing into one dashboard." },
    { icon: ShieldCheck, title: "SLA Tracking With Automatic Breach Detection", description: "Every ticket is tracked against its SLA, with automatic flagging the moment a breach happens — nothing slips by unnoticed." },
    { icon: BarChart3, title: "Daily P1 Alerts & Severity-Wise Reports", description: "Daily P1 alerts and severity-wise breakdowns keep critical issues visible, with detailed reports on demand." },
    { icon: Users, title: "Workload Visibility Across Teams", description: "See exactly who's carrying what, across every engineering team, in one live view." },
  ];

  return (
    <div className="min-h-screen bg-white text-navy selection:bg-blue-500 selection:text-white">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-navy py-12 text-white md:py-16">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.25),transparent)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Support Operations
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Tickets resolved.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Teams aligned.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            One platform to ingest, assign, and track every support request — across email, WhatsApp, and beyond.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:-translate-y-0.5"
            >
              Get Free Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              Talk to an Engineer
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-blue-400" /> Enterprise-grade</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-blue-400" /> SOC 2 ready</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-blue-400" /> Zero vendor lock-in</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ LIVE DASHBOARD PREVIEW ═══════════════ */}
      <section className="border-b border-slate-200 bg-surface py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Live Overview
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Every ticket, every channel, one dashboard
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <div>
                <div className="text-sm font-bold text-navy">Dashboard</div>
                <div className="text-xs text-muted">Welcome back — here&apos;s your live overview</div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 lg:grid-cols-5">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="rounded-xl border border-slate-100 bg-surface p-4">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.tone}`}>
                      <Icon size={16} />
                    </div>
                    <div className="mt-3 text-2xl font-extrabold text-navy">{stat.value}</div>
                    <div className="text-[11px] text-muted">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ AUTOMATION INGESTION SOURCES ═══════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <Zap size={14} /> Multi-Channel Ingestion
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Automation ingestion sources
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Every support request lands in Taggy the moment it&apos;s raised — however it comes in.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ingestionSources.map((source, i) => {
              const Icon = source.icon;
              const isActive = activeSource === i;
              return (
                <button
                  key={source.title}
                  onClick={() => setActiveSource(i)}
                  className={`rounded-2xl border p-5 text-left transition-all ${
                    isActive ? "border-blue-400 bg-blue-50/40 shadow-lg shadow-blue-500/10" : "border-slate-200 bg-surface hover:border-blue-200"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 border border-slate-200 shadow-sm">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-navy">{source.title}</h3>
                  <p className="mt-1 text-xs text-muted">{source.desc}</p>
                  <p className="mt-3 text-[11px] font-medium text-blue-600">{source.detail}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">Active</span>
                    <span className="text-[10px] text-muted">{source.status}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ CAPABILITIES GRID ═══════════════ */}
      <section className="border-t border-slate-200 bg-surface py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Key Capabilities
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What Taggy handles for you
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-[15px] font-bold leading-snug text-navy">{cap.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECURE ACCESS ═══════════════ */}
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
            <Lock size={20} />
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/70">
            Secure sign-in with enterprise SSO available, plus Google Workspace sign-in support — so access stays
            managed by your admins, not spreadsheets of shared logins.
          </p>
        </div>
      </section>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.4),transparent)]" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                Tickets Resolved. Teams Aligned.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
                Bring every support channel into one platform, track SLAs automatically, and give your team full
                workload visibility.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {["No commitment required", "Response within 24 h"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-xs text-white/60">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    {t}
                  </div>
                ))}
              </div>
              <div className="mt-7 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500"
                >
                  Get Free Consultation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EXPLORE OTHER PRODUCTS ═══════════════ */}
      <section className="border-t border-slate-200 bg-surface py-14">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-center text-xs font-semibold uppercase tracking-widest text-muted">
            Explore other products
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-blue-400/40 hover:shadow-md"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient} text-white font-bold`}>
                  {p.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy transition-colors group-hover:text-blue-600">
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
