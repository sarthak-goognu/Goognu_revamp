"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Server,
  Zap,
  Bell,
  RefreshCw,
  Gauge,
  ScanLine,
  Clock,
  Terminal,
  ChevronRight,
  DollarSign,
  Sparkles,
} from "lucide-react";
import { PRODUCTS } from "@/lib/content";

export default function BigbellPage() {
  const otherProducts = PRODUCTS.filter((p) => p.slug !== "bigbell");

  // Interactive savings calculator state
  const [monthlySpend, setMonthlySpend] = useState<number>(12000);
  const estimatedSavingsPercent = 34;
  const monthlySavings = Math.round((monthlySpend * estimatedSavingsPercent) / 100);
  const annualSavings = monthlySavings * 12;

  // Active cloud provider tab for instance scheduling
  const [activeProvider, setActiveProvider] = useState<"aws" | "azure" | "gcp">("aws");

  // Real-time alert simulation active tab
  const [activeAlertTab, setActiveAlertTab] = useState<"slack" | "whatsapp" | "jira" | "email">("slack");

  const scheduleRules = {
    aws: [
      { name: "Dev-EC2-Cluster-US-East", schedule: "Mon-Fri 8:00 PM -> 7:00 AM", status: "Sleeping", saved: "$840/mo", type: "t3.2xlarge (12 instances)" },
      { name: "Staging-EKS-NodeGroups", schedule: "Weekends & Off-Hours", status: "Auto-Scaled 20%", saved: "$1,420/mo", type: "m5.xlarge (8 nodes)" },
      { name: "Analytics-EMR-Spot-Pool", schedule: "Idle Timeout > 30m", status: "Terminated", saved: "$630/mo", type: "r5.4xlarge (4 instances)" },
    ],
    azure: [
      { name: "QA-AppService-EastUS", schedule: "Weekdays after 7:00 PM", status: "Auto-Stopped", saved: "$720/mo", type: "P2v3 Premium Tier" },
      { name: "Dev-AKS-System-Pool", schedule: "Nightly 9:00 PM -> 6:00 AM", status: "Scaled Down", saved: "$1,150/mo", type: "Standard_D8s_v5" },
      { name: "Test-Synapse-Compute", schedule: "Off-peak automatic pause", status: "Paused", saved: "$980/mo", type: "DW1000c Pool" },
    ],
    gcp: [
      { name: "GKE-Dev-Preemptible", schedule: "Nightly drain & suspend", status: "Suspended", saved: "$910/mo", type: "e2-standard-16 (6 nodes)" },
      { name: "BigQuery-Slot-Commitments", schedule: "Autoclass storage policy", status: "Optimized", saved: "$1,290/mo", type: "Flat-rate -> Flex Slots" },
      { name: "ComputeEngine-ML-Sandbox", schedule: "Auto-stop GPU instances", status: "Stopped", saved: "$1,850/mo", type: "a2-highgpu-1g (NVIDIA A100)" },
    ],
  };

  const capabilities = [
    {
      icon: RefreshCw,
      title: "Automated Resource Lifecycle",
      badge: "Zero Manual Ops",
      description:
        "Execute automated lifecycle policies to spin down, rightsize, or terminate non-production compute during off-peak hours and idle windows.",
      highlight: "Save up to 45% on dev/stage workloads",
    },
    {
      icon: Server,
      title: "Single-Console Multi-Cloud Orchestration",
      badge: "AWS · Azure · GCP",
      description:
        "Centrally inspect, govern, and schedule instance actions across all cloud accounts and regions without hopping between distinct consoles.",
      highlight: "Unified credentials & RBAC controls",
    },
    {
      icon: Bell,
      title: "Real-Time Telemetry & Anomaly Alerts",
      badge: "< 60s Detection",
      description:
        "Deploy automated billing anomaly guards, URL health monitors, and spike detectors dispatching immediate alerts via Slack, WhatsApp, or Jira.",
      highlight: "Prevent surprise month-end cloud bills",
    },
    {
      icon: Gauge,
      title: "Live Metric-Driven Rightsizing",
      badge: "Dynamic Scaling",
      description:
        "Bigbell continuously matches memory, CPU, and disk footprints to true traffic patterns, eliminating expensive overprovisioned tiers.",
      highlight: "Zero degradation, guaranteed performance",
    },
    {
      icon: ScanLine,
      title: "Cloud Security & Hygiene Radar",
      badge: "Continuous Audit",
      description:
        "Instantly uncover exposed 0.0.0.0/0 ports, unattached EBS/Managed disks, zombie elastic IPs, and stale IAM access keys.",
      highlight: "Hardened infrastructure posture",
    },
    {
      icon: Zap,
      title: "1-Click AI FinOps Recommendations",
      badge: "Data-Backed ROI",
      description:
        "Every recommendation comes with simulated cost savings and risk assessment. Approve optimization policies in one click.",
      highlight: "Takes under 2 minutes to apply",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-navy selection:bg-orange-500 selection:text-white">
      {/* ═══════════════ STREAMLINED HERO (Clean, airy & modern) ═══════════════ */}
      <section className="relative overflow-hidden bg-navy py-12 md:py-16 text-white">
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(249,115,22,0.22),transparent)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
            </span>
            <span>Cloud FinOps & Cost Intelligence</span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[48px] leading-tight">
            Slash Cloud Waste by <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">30% to 45%</span> with Autonomous Lifecycle Ops
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Bigbell monitors AWS, Azure, and GCP fleets in real time — automatically terminating idle compute, rightsizing overprovisioned instances, and shutting down off-hours resources.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-400 hover:-translate-y-0.5"
            >
              Start Saving in 2 Minutes
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
            >
              <Terminal size={15} className="text-orange-400" />
              Request Live Audit
            </Link>
          </div>

          {/* Quick trust metrics */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/60">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-orange-400" /> Multi-Cloud (AWS, Azure, GCP)</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-orange-400" /> Agentless IAM Setup</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-orange-400" /> Results in &lt; 2 Minutes</span>
          </div>
        </div>
      </section>

      {/* ═══════════════ INTERACTIVE FINOPS ROI CALCULATOR (Clean dedicated section) ═══════════════ */}
      <section className="border-b border-slate-200 bg-surface py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-bold">
                  <DollarSign size={20} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-navy">Instant Cloud ROI Estimator</h2>
                  <p className="text-xs text-muted">Estimate monthly cost recovery based on actual infrastructure waste</p>
                </div>
              </div>
              <span className="inline-flex self-start sm:self-auto rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 border border-orange-200">
                ~34% Average Savings
              </span>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-navy">Monthly Cloud Spend:</span>
                  <span className="text-lg font-extrabold text-orange-600">${monthlySpend.toLocaleString()}/mo</span>
                </div>
                <input
                  type="range"
                  min={2000}
                  max={60000}
                  step={1000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-orange-500"
                />
                <div className="mt-1 flex justify-between text-[11px] text-muted">
                  <span>$2,000/mo</span>
                  <span>$30,000/mo</span>
                  <span>$60,000+/mo</span>
                </div>
              </div>

              {/* Savings Display Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-orange-200 bg-orange-50/60 p-4">
                  <div className="text-xs font-medium text-orange-900">Estimated Monthly Reduction</div>
                  <div className="mt-1 text-3xl font-black text-orange-600">
                    ${monthlySavings.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted mt-1">Reclaim without changing code</div>
                </div>

                <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4">
                  <div className="text-xs font-medium text-amber-900">Projected Annual Savings</div>
                  <div className="mt-1 text-3xl font-black text-amber-600">
                    ${annualSavings.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted mt-1">Directly added to net bottom-line</div>
                </div>
              </div>

              {/* Live breakdown list */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <div className="text-muted">Off-Hours Sleep</div>
                  <div className="font-bold text-navy mt-1">~${Math.round(monthlySavings * 0.45).toLocaleString()}/mo</div>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <div className="text-muted">Dynamic Rightsizing</div>
                  <div className="font-bold text-navy mt-1">~${Math.round(monthlySavings * 0.35).toLocaleString()}/mo</div>
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
                  <div className="text-muted">Zombie Asset Purge</div>
                  <div className="font-bold text-navy mt-1">~${Math.round(monthlySavings * 0.2).toLocaleString()}/mo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MULTI-CLOUD INSTANCE SCHEDULER VIEW ═══════════════ */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <Clock size={14} /> Automated Lifecycle Commander
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
                Automated Cloud Schedule Engine
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
                Stop paying full 24/7 rates for non-production environments. Bigbell controls schedules with precision tag rules.
              </p>
            </div>

            {/* Cloud Provider Tabs */}
            <div className="flex rounded-xl border border-slate-200 bg-slate-50 p-1.5 shadow-sm">
              <button
                onClick={() => setActiveProvider("aws")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  activeProvider === "aws" ? "bg-orange-500 text-white shadow-sm" : "text-muted hover:text-navy"
                }`}
              >
                AWS Cloud
              </button>
              <button
                onClick={() => setActiveProvider("azure")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  activeProvider === "azure" ? "bg-orange-500 text-white shadow-sm" : "text-muted hover:text-navy"
                }`}
              >
                Microsoft Azure
              </button>
              <button
                onClick={() => setActiveProvider("gcp")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-bold transition-all ${
                  activeProvider === "gcp" ? "bg-orange-500 text-white shadow-sm" : "text-muted hover:text-navy"
                }`}
              >
                Google Cloud
              </button>
            </div>
          </div>

          {/* Schedule Engine Display Board */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-surface shadow-md">
            <div className="border-b border-slate-200 bg-white px-6 py-4 flex items-center justify-between text-xs text-muted">
              <span className="font-semibold text-navy">Active Automated Workflows ({scheduleRules[activeProvider].length})</span>
              <span className="flex items-center gap-1.5 font-semibold text-orange-600">
                <Sparkles size={13} /> Zero downtime execution
              </span>
            </div>

            <div className="divide-y divide-slate-200/80">
              {scheduleRules[activeProvider].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4 p-5 transition-colors hover:bg-white sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 border border-orange-200">
                      <Server size={18} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-navy text-sm">{item.name}</span>
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-muted font-mono">
                          {item.type}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-3 text-xs text-muted">
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-slate-400" /> {item.schedule}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-6 sm:justify-end">
                    <div className="text-right">
                      <div className="text-xs text-muted">Monthly Saved</div>
                      <div className="text-sm font-extrabold text-orange-600">{item.saved}</div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                      <CheckCircle2 size={13} /> {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CORE CAPABILITIES GRID ═══════════════ */}
      <section className="py-16 bg-surface border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-600">
              Complete Feature Arsenal
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Enterprise-Grade FinOps & Infrastructure Control
            </h2>
            <p className="mt-3 text-muted text-sm sm:text-base">
              Everything required to monitor, govern, and optimize cloud consumption across your engineering organization.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100/70 text-orange-600 border border-orange-200 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="rounded-full bg-slate-50 border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-muted shadow-sm">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-navy group-hover:text-orange-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted">
                      {cap.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-orange-600 font-semibold">
                    <span>{cap.highlight}</span>
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ REAL-TIME TELEMETRY & ALERT SIMULATOR ═══════════════ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600">
                <Bell size={14} /> Instant Anomaly Alerts
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Get alerted before a spike becomes a multi-thousand invoice
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Bigbell monitors continuous usage telemetry and dispatches contextual anomaly notifications to where your team communicates every day.
              </p>

              {/* Alert Channel Switcher */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  { id: "slack", label: "Slack Channel" },
                  { id: "whatsapp", label: "WhatsApp Alerts" },
                  { id: "jira", label: "Jira Auto-Tickets" },
                  { id: "email", label: "Executive Digest" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAlertTab(tab.id as any)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                      activeAlertTab === tab.id
                        ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                        : "bg-surface text-muted hover:text-navy border border-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span>Customizable thresholds: 10%, 25%, 50% budget velocity alerts</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span>1-click action buttons inside Slack: [Sleep Instance] or [Dismiss]</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-orange-500 shrink-0" />
                  <span>Zero agent installation required — 100% cloud API integrated</span>
                </div>
              </div>
            </div>

            {/* Right side alert preview simulator */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-800 bg-[#0d1627] p-6 shadow-2xl text-white">
                {activeAlertTab === "slack" && (
                  <div className="space-y-4 font-sans text-xs">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-white/60 font-semibold">
                      <span className="text-orange-400">#ops-cloud-alerts</span> · Bigbell FinOps Bot
                    </div>
                    <div className="rounded-xl border-l-4 border-orange-500 bg-slate-900/90 p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">⚠️ Unscheduled Cost Spike Detected</span>
                        <span className="text-[10px] text-white/40">Just now</span>
                      </div>
                      <p className="text-white/80">
                        Resource <code className="rounded bg-slate-800 px-1 py-0.5 text-orange-300 font-mono">eks-prod-us-east-cluster</code> experienced an unexpected 240% increase in egress traffic over the last 45 minutes.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 text-white/60">
                        <div>Projected Impact: <span className="text-amber-400 font-bold">+$1,450 this week</span></div>
                        <div>Action: <span className="text-orange-400 font-bold">Auto-throttle ready</span></div>
                      </div>
                      <div className="pt-2 flex gap-2">
                        <span className="rounded bg-orange-500 px-3 py-1.5 font-bold text-slate-950 cursor-pointer hover:bg-orange-400">
                          Approve Rightsizing
                        </span>
                        <span className="rounded bg-slate-800 px-3 py-1.5 font-semibold text-white/80 cursor-pointer hover:bg-slate-700">
                          View Telemetry
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeAlertTab === "whatsapp" && (
                  <div className="space-y-3 font-sans text-xs">
                    <div className="border-b border-white/10 pb-3 text-orange-400 font-bold">
                      WhatsApp Emergency Ops Dispatch
                    </div>
                    <div className="rounded-xl bg-[#2a1708]/70 border border-orange-500/30 p-4 space-y-2 text-white/90">
                      <div className="text-[11px] text-orange-300 font-semibold">Bigbell Priority Incident Guard</div>
                      <p className="leading-relaxed">
                        🚨 <strong className="text-white">Idle Cluster Alert:</strong> Azure VM Pool <code className="bg-slate-900/80 px-1 py-0.5 rounded text-amber-300 font-mono">qa-app-eastus</code> has had 0% CPU utilization for 18 consecutive hours.
                      </p>
                      <p className="text-xs text-white/70">Estimated waste: <span className="text-orange-400 font-bold">$38.40/day</span>. Reply <code className="bg-slate-900 px-1 rounded text-white">SLEEP</code> to power off safely.</p>
                    </div>
                  </div>
                )}

                {activeAlertTab === "jira" && (
                  <div className="space-y-3 font-sans text-xs">
                    <div className="border-b border-white/10 pb-3 text-blue-400 font-bold">
                      Jira Automated Ticket Creation
                    </div>
                    <div className="rounded-xl bg-slate-900/90 border border-blue-500/30 p-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="rounded bg-blue-500/20 text-blue-400 px-2 py-0.5 font-bold text-[10px]">FINOPS-1042</span>
                        <span className="text-white/40 text-[10px]">Auto-Assigned</span>
                      </div>
                      <div className="font-bold text-white text-sm">Orphaned EBS Snapshots & Unattached Static IPs Detected</div>
                      <p className="text-white/70 text-xs">14 unattached Elastic IPs in AWS us-west-2 detected with no active network interface. Recommended cleanup.</p>
                    </div>
                  </div>
                )}

                {activeAlertTab === "email" && (
                  <div className="space-y-3 font-sans text-xs">
                    <div className="border-b border-white/10 pb-3 text-purple-400 font-bold">
                      Weekly Executive Cloud FinOps Digest
                    </div>
                    <div className="rounded-xl bg-slate-900/90 border border-purple-500/30 p-4 space-y-2 text-white/80">
                      <div className="font-bold text-white text-sm">Summary: $4,820 Saved Across AWS & Azure This Week</div>
                      <p className="text-xs text-white/60">Total automated sleep actions executed: 84 instances. Net resource efficiency increased by 31.8%.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 3-STEP ONBOARDING ═══════════════ */}
      <section className="py-16 bg-surface border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Zero-Code FinOps Setup in 3 Simple Steps
            </h2>
            <p className="mt-2 text-muted text-sm">
              Connect via read/write IAM policies. No intrusive agent scripts to deploy or maintain.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Define Accounts & Tag Rules",
                desc: "Specify your AWS, Azure, and GCP accounts and establish tag selectors for non-production environments.",
              },
              {
                step: "02",
                title: "Automated Fleet Discovery",
                desc: "Bigbell runs a non-disruptive inventory scan to uncover idle VMs, overprovisioned disks, and usage patterns.",
              },
              {
                step: "03",
                title: "Apply 1-Click Optimization",
                desc: "Review suggested schedule policies, approve with one click, and watch immediate daily savings reflect in your console.",
              },
            ].map((s, idx) => (
              <div key={idx} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 font-black text-lg border border-orange-200">
                  {s.step}
                </div>
                <h3 className="mt-5 text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-12 text-center text-white md:px-14 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.4),transparent)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400">
                Instant ROI Guaranteed
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-4xl">
                Optimize in Minutes, Not Months.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
                Schedule a 15-minute guided FinOps audit with our cloud architecture specialists and discover immediate cost recovery opportunities.
              </p>
              <div className="mt-7 flex justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
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
            Explore Other Goognu Cloud Platforms
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-orange-500/40 hover:shadow-md"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient} text-white font-bold`}>
                  {p.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy group-hover:text-orange-600 transition-colors">
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
