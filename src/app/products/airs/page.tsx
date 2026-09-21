"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Search,
  Layers,
  Lock,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Share2,
  ShieldCheck,
  FlaskConical,
  Building2,
  Webhook,
  Wand2,
} from "lucide-react";
import { PRODUCTS } from "@/lib/content";

export default function AirsPage() {
  const otherProducts = PRODUCTS.filter((p) => p.slug !== "airs");

  // ── Inbox → structured profile demo ──
  const [parsed, setParsed] = useState(false);

  // ── Search & filter demo (illustrative sample candidates) ──
  const candidates = [
    { name: "Priya Sharma", role: "Senior Backend Engineer", location: "London, UK", skills: ["Node.js", "AWS", "PostgreSQL"] },
    { name: "James Okafor", role: "Product Designer", location: "Manchester, UK", skills: ["Figma", "Design Systems", "React"] },
    { name: "Elena Petrova", role: "DevOps Engineer", location: "Remote (UK)", skills: ["Kubernetes", "AWS", "Terraform"] },
    { name: "Marcus Lee", role: "Frontend Engineer", location: "London, UK", skills: ["React", "TypeScript", "Node.js"] },
  ];
  const allSkills = Array.from(new Set(candidates.flatMap((c) => c.skills)));
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const filteredCandidates = activeSkill ? candidates.filter((c) => c.skills.includes(activeSkill)) : candidates;

  // ── Pipeline stages (illustrative sample counts) ──
  const stages = [
    { name: "Applied", count: 128 },
    { name: "Matched", count: 46 },
    { name: "Pending Approval", count: 19 },
    { name: "Interview", count: 8 },
    { name: "Hired", count: 3 },
  ];
  const [activeStage, setActiveStage] = useState(0);

  const capabilities = [
    {
      icon: Mail,
      title: "Resumes, Handled Automatically",
      description:
        "AIRS connects directly to your recruiting inbox and reads incoming applications for you — no manual uploading, no copy-pasting candidate details.",
    },
    {
      icon: Search,
      title: "Built for How Recruiters Actually Search",
      description:
        "Every candidate is instantly searchable and filterable by skill, experience, location, and keyword — finding the right person takes seconds, not hours.",
    },
    {
      icon: Layers,
      title: "Pipelines That Match How You Hire",
      description:
        "Each open role gets its own hiring pipeline. Link pipelines across similar roles so qualified candidates are shared automatically.",
    },
    {
      icon: Lock,
      title: "One Platform, Every Client, Fully Separated",
      description:
        "Serve multiple companies from a single platform, with each organization's data, mailbox, and settings kept completely separate and secure.",
    },
  ];

  const whyDifferent = [
    { icon: Webhook, text: "Automates candidate intake straight from email — no manual resume uploads to keep up with." },
    { icon: Share2, text: "Shares qualified candidates across linked pipelines — no duplicate sourcing for similar roles." },
    { icon: Building2, text: "Serves many organizations from one platform without sacrificing data separation." },
    { icon: FlaskConical, text: "Keyword and skill-based search today, with AI-driven candidate matching in active development." },
  ];

  return (
    <div className="min-h-screen bg-white text-navy selection:bg-fuchsia-500 selection:text-white">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-navy py-12 text-white md:py-16">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(217,70,239,0.22),transparent)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fuchsia-300">
            <Sparkles size={13} />
            AI Recruitment &amp; ATS
          </div>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Smarter Hiring,{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              End to End
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            AIRS is an all-in-one applicant tracking and recruitment platform built to take the manual work out of
            hiring. Instead of juggling spreadsheets, inboxes, and disconnected tools, recruiting teams manage every
            candidate, every open role, and every stage of the hiring process from one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/30 transition-all hover:bg-fuchsia-400 hover:-translate-y-0.5"
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
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-fuchsia-400" /> Inbox-connected resume capture</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-fuchsia-400" /> Multi-organization, fully separated</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-fuchsia-400" /> Linked pipelines across roles</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ INBOX → PROFILE DEMO ═══════════════ */}
      <section className="border-b border-slate-200 bg-surface py-14 md:py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fuchsia-600">
              Resumes, Handled Automatically
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              From inbox to candidate profile — no copy-pasting
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted sm:text-base">
              AIRS reads every resume that lands in your recruiting inbox and turns it into a structured, searchable
              profile: skills, experience, education, and contact details, ready to review in seconds.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                <Mail size={14} className="text-fuchsia-600" />
                jobs@yourcompany.com
              </div>
              <button
                onClick={() => setParsed((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-full bg-fuchsia-500 px-4 py-2 text-xs font-bold text-white shadow-sm shadow-fuchsia-500/30 transition-all hover:bg-fuchsia-400"
              >
                <Wand2 size={13} />
                {parsed ? "View Raw Email" : "Watch AIRS Parse It"}
              </button>
            </div>

            <div className="p-6">
              {!parsed ? (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 font-mono text-xs leading-relaxed text-slate-600">
                  <div className="text-slate-400">Subject: Application for Senior Backend Engineer</div>
                  <div className="mt-3 text-slate-500">
                    Hi team, please find my resume attached. I&apos;m Priya Sharma, currently a backend engineer with
                    5 years&apos; experience in Node.js, AWS and PostgreSQL, based in London. Looking forward to
                    hearing from you...
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-500">
                    📎 Priya_Sharma_Resume.pdf
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 rounded-xl border border-fuchsia-200 bg-fuchsia-50/40 p-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-sm font-bold text-navy">Priya Sharma</div>
                    <div className="text-xs text-muted">Senior Backend Engineer · London, UK</div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {["Node.js", "AWS", "PostgreSQL", "5 yrs experience"].map((tag) => (
                        <span key={tag} className="rounded-full bg-white px-2.5 py-1 text-[11px] font-medium text-fuchsia-700 border border-fuchsia-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <CheckCircle2 size={13} /> Profile Created
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SEARCH & FILTER DEMO ═══════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-fuchsia-600">
              <Search size={14} /> Built For How Recruiters Search
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Filter by skill, experience, location, or keyword
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Finding the right person for a role takes seconds, not hours of scrolling through resumes.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveSkill(null)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                activeSkill === null ? "bg-navy text-white" : "bg-surface text-muted hover:text-navy border border-slate-200"
              }`}
            >
              All Skills
            </button>
            {allSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => setActiveSkill(skill)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                  activeSkill === skill ? "bg-fuchsia-500 text-white" : "bg-surface text-muted hover:text-navy border border-slate-200"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filteredCandidates.map((c) => (
              <div key={c.name} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-surface p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-500 text-sm font-bold text-white">
                  {c.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy">{c.name}</div>
                  <div className="truncate text-xs text-muted">{c.role} · {c.location}</div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {c.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium text-slate-500 border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {filteredCandidates.length === 0 && (
              <div className="col-span-full rounded-xl border border-dashed border-slate-200 p-8 text-center text-sm text-muted">
                No matches for this filter yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════ PIPELINE STAGES ═══════════════ */}
      <section className="border-y border-slate-200 bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-fuchsia-600">
              <Layers size={14} /> Pipelines That Match How You Hire
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Every open role, its own hiring pipeline
            </h2>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Hiring for multiple similar roles at once? Link pipelines so qualified candidates are shared across
              them automatically — no duplicate sourcing, no candidates falling through the cracks.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            {stages.map((stage, i) => (
              <button
                key={stage.name}
                onClick={() => setActiveStage(i)}
                className={`flex-1 rounded-2xl border p-5 text-left transition-all ${
                  activeStage === i
                    ? "border-fuchsia-400 bg-white shadow-lg shadow-fuchsia-500/10"
                    : "border-slate-200 bg-white hover:border-fuchsia-200"
                }`}
              >
                <div className="text-2xl font-extrabold text-navy">{stage.count}</div>
                <div className="mt-1 text-xs font-semibold text-muted">{stage.name}</div>
                {i < stages.length - 1 && (
                  <ChevronRight size={14} className="mt-3 text-fuchsia-400 sm:hidden" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CAPABILITIES GRID ═══════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fuchsia-600">
              Key Capabilities
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              What AIRS handles for you
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group rounded-2xl border border-slate-200 bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-fuchsia-300 hover:shadow-xl hover:shadow-fuchsia-500/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-pink-500 text-white shadow-sm">
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

      {/* ═══════════════ WHY IT'S DIFFERENT ═══════════════ */}
      <section className="border-t border-slate-200 bg-navy py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fuchsia-300">
              Why It&apos;s Different
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Most recruiting tools still rely on manual intake
            </h2>
            <p className="mt-3 text-sm text-white/65 sm:text-base">
              Or require a separate deployment for every client. AIRS does it differently.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {whyDifferent.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-fuchsia-500/15 text-fuchsia-300">
                    <Icon size={17} />
                  </div>
                  <p className="text-sm leading-relaxed text-white/75">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ 3-STEP ONBOARDING ═══════════════ */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              From inbox to shortlist in three steps
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { step: "01", title: "Connect Your Inbox", desc: "AIRS connects directly to the mailbox your applications already land in — no new intake process to train your team on." },
              { step: "02", title: "Applications Parsed Automatically", desc: "Every resume is captured and turned into a structured, searchable candidate profile — skills, experience, education, contact details." },
              { step: "03", title: "Search, Shortlist, Hire", desc: "Filter by skill, experience, location, or keyword, then move candidates through your pipeline to interview and beyond." },
            ].map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-fuchsia-200 bg-fuchsia-100 text-lg font-black text-fuchsia-600">
                  {s.step}
                </div>
                <h3 className="mt-5 text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,70,239,0.4),transparent)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-fuchsia-300">
                <ShieldCheck size={13} /> Multi-Org, Fully Separated
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">
                Smarter Hiring, End to End.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
                Connect your inbox, let AIRS handle the sourcing, and manage every candidate and every role from one
                place.
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
                  className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/30 transition hover:bg-fuchsia-400"
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
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-fuchsia-400/40 hover:shadow-md"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient} text-white font-bold`}>
                  {p.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy transition-colors group-hover:text-fuchsia-600">
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
