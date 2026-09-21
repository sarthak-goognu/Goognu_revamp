"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileText,
  Share2,
  QrCode,
  Clock,
  Eye,
  ChevronRight,
  FileSpreadsheet,
  FileCode,
  Film,
  HardDrive,
  MessageSquare,
  Copy,
  Check,
  Globe,
} from "lucide-react";
import { PRODUCTS } from "@/lib/content";

export default function FileflyPage() {
  const otherProducts = PRODUCTS.filter((p) => p.slug !== "filefly");

  // Interactive link generator mockup state
  const [expiry, setExpiry] = useState<"1h" | "24h" | "7d">("24h");
  const [allowDownload, setAllowDownload] = useState<boolean>(false);
  const [requirePassword, setRequirePassword] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  // Active file preview tab in zero-install showcase
  const [activeFormat, setActiveFormat] = useState<"pdf" | "video" | "code" | "sheet">("pdf");

  const copyLink = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const capabilities = [
    {
      icon: Eye,
      title: "Instant In-Browser Zero-Install Viewer",
      tag: "No Downloads Required",
      description:
        "Recipients open PDFs, videos, high-res designs, and documents directly inside their browser with zero forced downloads or external desktop software.",
    },
    {
      icon: Lock,
      title: "Granular Domain & Role Access Control",
      tag: "Domain Whitelisting",
      description:
        "Restrict shared assets to specific organizational domains (e.g. @acme-corp.com), specific individual emails, or role-based permission tiers.",
    },
    {
      icon: ShieldCheck,
      title: "Multi-Layer Security & QR-Code Auth",
      tag: "Enterprise Shield",
      description:
        "Built-in brute force mitigation, automated malware filtering, biometric QR-code phone authentication, and end-to-end TLS 1.3 transit encryption.",
    },
    {
      icon: HardDrive,
      title: "Bi-Directional Desktop Background Sync",
      tag: "Automatic Sync",
      description:
        "Keep local folders seamlessly in sync with the Filefly cloud vault without requiring manual file uploads or repetitive web dashboard visits.",
    },
    {
      icon: MessageSquare,
      title: "Message-Based Client Exchange Stream",
      tag: "Threaded Inboxes",
      description:
        "Exchange documents with external clients and partners like a clean conversation inbox, preserving version history and contextual feedback.",
    },
    {
      icon: Clock,
      title: "Automated Compliance & Retention Purge",
      tag: "GDPR / HIPAA Ready",
      description:
        "Establish automated lifecycle deletion policies to ensure confidential files and deliverables are safely purged after regulatory windows.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-navy selection:bg-emerald-500 selection:text-white">
      {/* ═══════════════ STREAMLINED HERO (Airy & Clean) ═══════════════ */}
      <section className="relative overflow-hidden bg-navy py-12 md:py-16 text-white">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(16,185,129,0.22),transparent)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Enterprise Secure File Sharing & Vault</span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px] leading-tight">
            Exchange Confidential Files with <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">Zero Friction</span> and Total Security
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Share client deliverables, large media files, and sensitive records with fine-grained access control, time-bomb link expiration, and zero software installs for recipients.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-400 hover:-translate-y-0.5"
            >
              Start Secure Exchange
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 text-slate-950" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <ShieldCheck size={16} className="text-emerald-400" />
              Explore Security Specs
            </Link>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> AES-256 Vault Encryption</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Domain-Level Whitelisting</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-400" /> Biometric QR Quick Access</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ INTERACTIVE SECURE SHARE GENERATOR (Dedicated Clean Section) ═══════════════ */}
      <section className="border-b border-slate-200 bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 font-bold">
                  <Share2 size={20} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-navy">Interactive Secure Link Generator</h2>
                  <p className="text-xs text-muted">Active Document: Q3-Financial-Audit-Report.pdf (24.8 MB)</p>
                </div>
              </div>
              <span className="inline-flex self-start sm:self-auto rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                End-to-End Encrypted
              </span>
            </div>

            <div className="mt-6 space-y-5 text-xs">
              {/* Link Expiration Selector */}
              <div>
                <label className="text-navy font-semibold flex items-center justify-between text-xs">
                  <span>Time-Bomb Link Expiration:</span>
                  <span className="text-emerald-600 font-bold">{expiry === "1h" ? "1 Hour" : expiry === "24h" ? "24 Hours" : "7 Days"}</span>
                </label>
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {(["1h", "24h", "7d"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setExpiry(t)}
                      className={`rounded-lg py-2.5 text-center font-bold transition-all ${
                        expiry === t
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "bg-slate-100 text-muted hover:text-navy"
                      }`}
                    >
                      {t === "1h" ? "1 Hour" : t === "24h" ? "24 Hours" : "7 Days"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Access Restrictions Toggles */}
              <div className="space-y-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-navy font-medium flex items-center gap-2">
                    <Lock size={14} className="text-emerald-600" /> Password Protection
                  </span>
                  <button
                    onClick={() => setRequirePassword(!requirePassword)}
                    className={`h-5 w-9 rounded-full p-0.5 transition-colors ${requirePassword ? "bg-emerald-600" : "bg-slate-300"}`}
                  >
                    <div className={`h-4 w-4 rounded-full bg-white transition-transform ${requirePassword ? "translate-x-4" : "translate-x-0"}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-navy font-medium flex items-center gap-2">
                    <Eye size={14} className="text-teal-600" /> Browser View Only (Disable Downloads)
                  </span>
                  <button
                    onClick={() => setAllowDownload(!allowDownload)}
                    className={`h-5 w-9 rounded-full p-0.5 transition-colors ${!allowDownload ? "bg-emerald-600" : "bg-slate-300"}`}
                  >
                    <div className={`h-4 w-4 rounded-full bg-white transition-transform ${!allowDownload ? "translate-x-4" : "translate-x-0"}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-navy font-medium flex items-center gap-2">
                    <Globe size={14} className="text-cyan-600" /> Restrict to Client Domain
                  </span>
                  <span className="rounded bg-white border border-slate-200 px-2.5 py-1 font-mono text-[11px] text-emerald-700 font-semibold shadow-sm">
                    @client-corp.com
                  </span>
                </div>
              </div>

              {/* Generated Link Box */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-muted font-semibold">Generated Ephemeral URL:</span>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-[11px]">
                  <code className="truncate font-mono text-emerald-700 font-semibold">https://filefly.goognu.uk/s/89fe-4b12</code>
                  <button
                    onClick={copyLink}
                    className="flex shrink-0 items-center gap-1 rounded-lg bg-emerald-600 px-3 py-1.5 font-bold text-white shadow-sm hover:bg-emerald-500 transition"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ ZERO-INSTALL WEB VIEWER SHOWCASE ═══════════════ */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600">
              <Eye size={14} /> Friction-Free Client Experience
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
              Zero Installs. Zero Plugins. Open Instantly in Any Browser.
            </h2>
            <p className="mt-3 text-muted text-sm sm:text-base">
              Never lose a deal or slow down a project because a client couldn't download a 2GB file or lacked proprietary desktop viewing software.
            </p>
          </div>

          {/* Format Switcher */}
          <div className="mt-10 flex justify-center">
            <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1.5 shadow-sm">
              {[
                { id: "pdf", label: "PDF Documents", icon: FileText },
                { id: "video", label: "4K Media & Video", icon: Film },
                { id: "sheet", label: "Financial Models", icon: FileSpreadsheet },
                { id: "code", label: "Source Code & Scripts", icon: FileCode },
              ].map((fmt) => {
                const Icon = fmt.icon;
                return (
                  <button
                    key={fmt.id}
                    onClick={() => setActiveFormat(fmt.id as any)}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                      activeFormat === fmt.id
                        ? "bg-emerald-600 text-white shadow-sm"
                        : "text-muted hover:text-navy"
                    }`}
                  >
                    <Icon size={14} />
                    {fmt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Viewer Preview Window */}
          <div className="mt-8 mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-xl">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 text-xs text-muted">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono text-[11px] text-navy font-medium">
                  {activeFormat === "pdf" && "Contract_Agreement_2026_Final.pdf"}
                  {activeFormat === "video" && "Product_Demo_Walkthrough_4K.mp4"}
                  {activeFormat === "sheet" && "Global_Financial_Consolidation.xlsx"}
                  {activeFormat === "code" && "infrastructure_deployment_config.yaml"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck size={12} /> DRM Watermarked
                </span>
                <span className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] text-emerald-700 font-bold">
                  View-Only Stream
                </span>
              </div>
            </div>

            {/* Viewer Body */}
            <div className="p-8 text-center min-h-[240px] flex flex-col items-center justify-center bg-white">
              {activeFormat === "pdf" && (
                <div className="space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <FileText size={28} />
                  </div>
                  <h4 className="text-base font-bold text-navy">Full 64-Page Document Rendered in Under 0.4s</h4>
                  <p className="text-xs text-muted max-w-md mx-auto">
                    Built-in vector rendering engine with page bookmarking, full-text keyword search, and confidential dynamic recipient watermark overlay.
                  </p>
                </div>
              )}

              {activeFormat === "video" && (
                <div className="space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 border border-teal-200">
                    <Film size={28} />
                  </div>
                  <h4 className="text-base font-bold text-navy">Adaptive Bitrate Streaming Without Full Download</h4>
                  <p className="text-xs text-muted max-w-md mx-auto">
                    Streams immediately at recipient's device resolution. No need to wait for 4GB video files to complete downloading before watching.
                  </p>
                </div>
              )}

              {activeFormat === "sheet" && (
                <div className="space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-200">
                    <FileSpreadsheet size={28} />
                  </div>
                  <h4 className="text-base font-bold text-navy">High-Speed Interactive Spreadsheet Grid</h4>
                  <p className="text-xs text-muted max-w-md mx-auto">
                    Inspect multi-tab workbooks, formula results, and large data tables directly in-browser with zero spreadsheet software requirements.
                  </p>
                </div>
              )}

              {activeFormat === "code" && (
                <div className="space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                    <FileCode size={28} />
                  </div>
                  <h4 className="text-base font-bold text-navy">Syntax-Highlighted Developer Code Viewer</h4>
                  <p className="text-xs text-muted max-w-md mx-auto">
                    Clean code inspector with line numbering, copy snippet actions, and syntax support for JSON, YAML, Python, TypeScript, and Go.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CAPABILITIES GRID ═══════════════ */}
      <section className="py-16 bg-surface border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Enterprise Vault Capabilities
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Everything Your Organization Needs to Share Safely
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100/70 text-emerald-600 border border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-muted shadow-sm">
                        {cap.tag}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-navy group-hover:text-emerald-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-emerald-600 font-semibold">
                    <span>Learn how it protects your data</span>
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ COMPARISON TABLE ═══════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Why Teams Choose Filefly Over Generic Cloud Drives
            </h2>
            <p className="mt-2 text-muted text-sm">
              Purpose-built for secure external collaboration without forcing clients to create third-party accounts.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-md">
            <div className="grid grid-cols-12 border-b border-slate-200 bg-white p-4 text-xs font-bold text-navy uppercase tracking-wider">
              <div className="col-span-6">Security & Usability Feature</div>
              <div className="col-span-3 text-center text-emerald-600">Filefly</div>
              <div className="col-span-3 text-center text-muted">Generic Drives</div>
            </div>

            <div className="divide-y divide-slate-200/80 text-xs">
              {[
                { feature: "Zero-Software Browser Streaming", filefly: true, others: false },
                { feature: "Time-Bomb Link Self-Destruct", filefly: true, others: false },
                { feature: "Dynamic Recipient Watermarking", filefly: true, others: false },
                { feature: "Biometric QR Code Quick Access", filefly: true, others: false },
                { feature: "Strict Domain-Level Whitelisting", filefly: true, others: "Add-on tier" },
                { feature: "Automated Compliance Retention Purge", filefly: true, others: "Complex setup" },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 items-center p-4 hover:bg-white transition-colors">
                  <div className="col-span-6 font-medium text-navy">{row.feature}</div>
                  <div className="col-span-3 text-center font-bold text-emerald-600">
                    {row.filefly === true ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                        <CheckCircle2 size={15} /> Included
                      </span>
                    ) : (
                      row.filefly
                    )}
                  </div>
                  <div className="col-span-3 text-center text-muted">
                    {row.others === false ? "❌ No" : row.others}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="py-14 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.4),transparent)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Enterprise Security Ready
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">
                Share Smarter. Control Everything.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
                Upgrade how your team exchanges confidential documents with clients and partners today.
              </p>
              <div className="mt-7 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                >
                  Request Custom Demo
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
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-surface p-4 transition-all hover:border-emerald-500/40 hover:bg-white hover:shadow-md"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient} text-white font-bold`}>
                  {p.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy group-hover:text-emerald-600 transition-colors">
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
