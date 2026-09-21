"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Cloud,
  Workflow,
  BrainCircuit,
  Code2,
  GitBranch,
  Server,
  ArrowRight,
  BookOpen,
  Briefcase,
  Phone,
  Users,
  ScanSearch,
  ClipboardCheck,
  Radar,
} from "lucide-react";
import {
  REGIONS, SERVICE_CATEGORIES, PRODUCTS, INDUSTRY_NAV_ITEMS, CYBER_SECURITY_CATEGORIES,
  type Region, type IndustryNavItem,
} from "@/lib/content";
import ProductIcon from "@/components/ProductIcon";

/* --- Logo --- */
function Logo() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span className="text-2xl font-extrabold tracking-tight text-brand">goognu</span>;
  }
  return (
    <Image
      src="/images/logo.svg"
      alt="Goognu"
      width={140}
      height={32}
      priority
      className="h-8 w-auto"
      onError={() => setFailed(true)}
    />
  );
}

/* --- Flag --- */
function RegionFlag({ region }: { region: Region }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span>{region.flag}</span>;
  return (
    <Image
      src={`/images/flags/${region.code}.png`}
      alt={region.label}
      width={20}
      height={14}
      className="inline-block h-3.5 w-5 rounded-[2px] object-cover"
      onError={() => setFailed(true)}
    />
  );
}

/* --- Icon maps --- */
const SVC_ICONS: Record<string, React.ElementType> = {
  cloud: Cloud,
  workflow: Workflow,
  "brain-circuit": BrainCircuit,
  code: Code2,
  "git-branch": GitBranch,
  server: Server,
};

const SVC_COLORS = [
  "bg-blue-50 text-blue-600",
  "bg-violet-50 text-violet-600",
  "bg-emerald-50 text-emerald-600",
  "bg-orange-50 text-orange-600",
  "bg-pink-50 text-pink-600",
  "bg-indigo-50 text-indigo-600",
  "bg-sky-50 text-sky-600",
  "bg-teal-50 text-teal-600",
];

const CYBER_ICONS: Record<string, React.ElementType> = {
  "scan-search": ScanSearch,
  "clipboard-check": ClipboardCheck,
  radar: Radar,
};

const CYBER_COLORS = [
  "bg-rose-50 text-rose-600",
  "bg-indigo-50 text-indigo-600",
  "bg-emerald-50 text-emerald-600",
];

/* === Services Single-Column Dropdown with Side Flyout ===
   Left pane shows the single column of service categories.
   Right pane dynamically updates with the active category's sub-services and details. */
function ServicesMegaMenu() {
  const [activeCatName, setActiveCatName] = useState<string>(SERVICE_CATEGORIES[0].name);

  const activeCategory =
    SERVICE_CATEGORIES.find((s) => s.name === activeCatName) ?? SERVICE_CATEGORIES[0];

  const ActiveIcon = SVC_ICONS[activeCategory.icon] ?? Cloud;
  const activeColorIdx = SERVICE_CATEGORIES.findIndex((s) => s.name === activeCategory.name);

  return (
    <div className="invisible absolute left-0 top-full z-50 w-[720px] translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
        {/* Left Column: Categories List (Single Column) */}
        <div className="w-[290px] shrink-0 border-r border-slate-100 bg-slate-50/50 p-2">
          <div className="px-3 py-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Core Capabilities
            </span>
          </div>

          <div className="space-y-0.5">
            {SERVICE_CATEGORIES.map((svc, idx) => {
              const Icon = SVC_ICONS[svc.icon] ?? Cloud;
              const isActive = svc.name === activeCategory.name;

              return (
                <div
                  key={svc.name}
                  onMouseEnter={() => setActiveCatName(svc.name)}
                  className={`group/cat flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 transition-all ${
                    isActive
                      ? "bg-white text-brand shadow-sm shadow-slate-200/60 font-semibold"
                      : "text-slate-600 hover:bg-white/70 hover:text-navy"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive
                          ? "bg-brand text-white shadow-xs"
                          : SVC_COLORS[idx % SVC_COLORS.length]
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                    <span className="truncate text-[13px]">{svc.name}</span>
                  </div>

                  <ChevronRight
                    size={14}
                    className={`shrink-0 transition-transform ${
                      isActive
                        ? "text-brand translate-x-0.5 opacity-100"
                        : "text-slate-300 opacity-0 group-hover/cat:opacity-100"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Flyout Pane: Active Category Sub-services */}
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div>
            {/* Header for Active Category */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    SVC_COLORS[activeColorIdx % SVC_COLORS.length]
                  }`}
                >
                  <ActiveIcon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy">{activeCategory.name}</h3>
                  <p className="mt-0.5 text-xs text-slate-500 leading-relaxed max-w-sm">
                    {activeCategory.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Sub-services Grid */}
            <div className="mt-4">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Specialized Services ({activeCategory.links.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[260px] overflow-y-auto pr-1">
                {activeCategory.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href ?? "/contact"}
                    className="group/link flex items-center justify-between rounded-lg p-2 text-xs font-medium text-slate-600 transition-colors hover:bg-brand/5 hover:text-brand"
                  >
                    <span className="truncate">{link.label}</span>
                    <ArrowRight
                      size={11}
                      className="shrink-0 opacity-0 -translate-x-1 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0 text-brand"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer CTA */}
          <div className="mt-5 border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              Consult with a {activeCategory.name.replace(" Services", "")} Specialist
              <ArrowRight size={12} />
            </Link>
            <span className="text-[11px] text-slate-400">Goognu UK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* === Cyber Security Mega Menu ===
   Same left-column/flyout UX as ServicesMegaMenu: 3 categories
   (Security Assessment, Compliance, SOC Services) on the left, hovering one
   reveals its sub-services on the right. Replaces the old standalone VAPT
   link. Static for now — most sub-service labels have no page yet. */
function CyberSecurityMegaMenu() {
  const [activeCatName, setActiveCatName] = useState<string>(CYBER_SECURITY_CATEGORIES[0].name);

  const activeCategory =
    CYBER_SECURITY_CATEGORIES.find((s) => s.name === activeCatName) ?? CYBER_SECURITY_CATEGORIES[0];

  const ActiveIcon = CYBER_ICONS[activeCategory.icon] ?? ScanSearch;
  const activeColorIdx = CYBER_SECURITY_CATEGORIES.findIndex((s) => s.name === activeCategory.name);

  return (
    <div className="invisible absolute left-0 top-full z-50 w-[680px] translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
        {/* Left Column: Categories List */}
        <div className="w-[260px] shrink-0 border-r border-slate-100 bg-slate-50/50 p-2">
          <div className="px-3 py-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Cyber Security
            </span>
          </div>

          <div className="space-y-0.5">
            {CYBER_SECURITY_CATEGORIES.map((cat, idx) => {
              const Icon = CYBER_ICONS[cat.icon] ?? ScanSearch;
              const isActive = cat.name === activeCategory.name;

              return (
                <div
                  key={cat.name}
                  onMouseEnter={() => setActiveCatName(cat.name)}
                  className={`group/cat flex cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 transition-all ${
                    isActive
                      ? "bg-white text-brand shadow-sm shadow-slate-200/60 font-semibold"
                      : "text-slate-600 hover:bg-white/70 hover:text-navy"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isActive ? "bg-brand text-white shadow-xs" : CYBER_COLORS[idx % CYBER_COLORS.length]
                      }`}
                    >
                      <Icon size={14} />
                    </div>
                    <span className="truncate text-[13px]">{cat.name}</span>
                  </div>

                  <ChevronRight
                    size={14}
                    className={`shrink-0 transition-transform ${
                      isActive
                        ? "text-brand translate-x-0.5 opacity-100"
                        : "text-slate-300 opacity-0 group-hover/cat:opacity-100"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Flyout Pane: Active Category Sub-services */}
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div>
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    CYBER_COLORS[activeColorIdx % CYBER_COLORS.length]
                  }`}
                >
                  <ActiveIcon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy">{activeCategory.name}</h3>
                  <p className="mt-0.5 text-xs text-slate-500 leading-relaxed max-w-sm">
                    {activeCategory.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Sub-services ({activeCategory.links.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[260px] overflow-y-auto pr-1">
                {activeCategory.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href ?? "/contact"}
                    className="group/link flex items-center justify-between rounded-lg p-2 text-xs font-medium text-slate-600 transition-colors hover:bg-brand/5 hover:text-brand"
                  >
                    <span className="truncate">{link.label}</span>
                    <ArrowRight
                      size={11}
                      className="shrink-0 opacity-0 -translate-x-1 transition-all group-hover/link:opacity-100 group-hover/link:translate-x-0 text-brand"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 border-t border-slate-100 pt-3 flex items-center justify-between text-xs">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-semibold text-brand hover:text-brand-dark transition-colors"
            >
              Talk to a {activeCategory.name} Specialist
              <ArrowRight size={12} />
            </Link>
            <span className="text-[11px] text-slate-400">Goognu UK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* === Products Mega Menu === */
function ProductsMegaMenu() {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[260px] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200/50">
        <div className="p-1.5">
          {PRODUCTS.map((product) => (
              <Link
                key={product.name}
                href={`/products/${product.slug}`}
                className="group/item flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-slate-50"
              >
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br ${product.gradient}`}>
                  <ProductIcon icon={product.icon} className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-medium text-slate-700 transition-colors group-hover/item:text-brand">{product.name}</div>
                  <div className="text-[11px] text-slate-400 truncate">{product.tag}</div>
                </div>
                <ChevronRight size={13} className="ml-auto shrink-0 text-slate-300 group-hover/item:text-brand transition-colors" />
              </Link>
          ))}
        </div>
        <div className="border-t border-slate-100 px-4 py-2.5">
          <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-dark">
            View all products <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* === Industries Mega Menu ===
   Flat 3-column list of the real industries goognu.uk serves, styled to
   match the other flyouts (rounded card, brand hover) rather than the
   plain uppercase list on the reference site. */
function IndustriesMegaMenu() {
  const columns: IndustryNavItem[][] = [[], [], []];
  INDUSTRY_NAV_ITEMS.forEach((item, i) => columns[i % 3].push(item));

  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
        <div className="grid grid-cols-3 gap-x-6 gap-y-1 p-6">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col">
              {col.map((item) => (
                <Link
                  key={item.slug}
                  href={item.href ?? "#"}
                  className="rounded-md px-2.5 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-slate-100 px-6 py-3">
          <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-dark">
            Talk to us about your industry <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* === Simple dropdown shell === */
function SimpleDropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <div className="min-w-[200px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
        <div className="p-1.5">{children}</div>
      </div>
    </div>
  );
}

function DropdownLink({
  href,
  icon: Icon,
  label,
  desc,
}: {
  href: string;
  icon?: React.ElementType;
  label: string;
  desc?: string;
}) {
  return (
    <Link
      href={href}
      className="group/item flex items-center gap-3 rounded-md px-3.5 py-2.5 transition-colors hover:bg-slate-50"
    >
      {Icon && (
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
          <Icon size={14} />
        </div>
      )}
      <div>
        <div className="text-[13px] font-semibold text-navy transition-colors group-hover/item:text-brand">{label}</div>
        {desc && <div className="mt-0.5 text-[11px] text-slate-500">{desc}</div>}
      </div>
    </Link>
  );
}

/* === Region Selector === */
function RegionSelector() {
  const current = REGIONS[0];
  return (
    <div className="group relative hidden lg:block">
      <button
        type="button"
        aria-label={`Select region — currently ${current.label}`}
        className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-white"
      >
        <RegionFlag region={current} />
        <ChevronDown size={13} className="text-slate-400 transition-transform group-hover:rotate-180" />
      </button>

      <div className="invisible absolute right-0 top-full z-50 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="w-52 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="border-b border-slate-100 px-4 py-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">Select Region</span>
          </div>
          <div className="max-h-72 overflow-y-auto p-1.5">
            {REGIONS.map((region) => (
              <a
                key={region.code}
                href={region.href}
                rel="noreferrer noopener"
                className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-50 ${
                  region.code === "uk" ? "bg-brand/5 font-semibold text-brand" : "text-slate-600"
                }`}
              >
                <RegionFlag region={region} />
                <span>{region.label}</span>
                {region.code === "uk" && (
                  <span className="ml-auto rounded-full bg-brand/10 px-1.5 py-0.5 text-[10px] font-semibold text-brand">Current</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* === Mobile Accordion === */
function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3.5 text-sm font-semibold text-navy"
      >
        {label}
        <ChevronDown size={15} className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-3 pl-2">{children}</div>}
    </div>
  );
}

/* ================================================
   MAIN HEADER
   ================================================ */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/98 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">

          {/* Services mega */}
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand group-hover:text-brand">
              Services <ChevronDown size={14} className="text-slate-400 transition-transform group-hover:rotate-180" />
            </button>
            <ServicesMegaMenu />
          </div>

          {/* Industries mega */}
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand group-hover:text-brand">
              Industries <ChevronDown size={14} className="text-slate-400 transition-transform group-hover:rotate-180" />
            </button>
            <IndustriesMegaMenu />
          </div>

          {/* Products mega */}
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand group-hover:text-brand">
              Products <ChevronDown size={14} className="text-slate-400 transition-transform group-hover:rotate-180" />
            </button>
            <ProductsMegaMenu />
          </div>

          {/* Cyber Security mega */}
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand group-hover:text-brand">
              Cyber Security <ChevronDown size={14} className="text-slate-400 transition-transform group-hover:rotate-180" />
            </button>
            <CyberSecurityMegaMenu />
          </div>

          {/* Resources */}
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand group-hover:text-brand">
              Resources <ChevronDown size={14} className="text-slate-400 transition-transform group-hover:rotate-180" />
            </button>
            <SimpleDropdown>
              <DropdownLink href="#" icon={BookOpen} label="Blogs" desc="Insights for engineering leaders" />
              <DropdownLink href="#" icon={Briefcase} label="Case Studies" desc="Real results for real businesses" />
            </SimpleDropdown>
          </div>

          {/* Company */}
          <div className="group relative">
            <button type="button" className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand group-hover:text-brand">
              Company <ChevronDown size={14} className="text-slate-400 transition-transform group-hover:rotate-180" />
            </button>
            <SimpleDropdown>
              <DropdownLink href="/about" icon={Users} label="About Us" desc="Our story and mission" />
              <DropdownLink href="#" icon={Briefcase} label="Team" desc="Meet the experts" />
              <DropdownLink href="/contact" icon={Phone} label="Contact Us" desc="Get in touch today" />
            </SimpleDropdown>
          </div>
        </nav>

        {/* Right: CTA + Region */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-md hover:shadow-brand/20"
          >
            Connect With Us
          </Link>
          <div className="h-5 w-px bg-slate-200" />
          <RegionSelector />
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-6 pb-6 pt-2 lg:hidden">
          <div className="divide-y divide-slate-100">

            <MobileAccordion label="Services">
              <div className="flex flex-col gap-4">
                {SERVICE_CATEGORIES.map((svc, i) => {
                  const Icon = SVC_ICONS[svc.icon] ?? Cloud;
                  return (
                    <div key={svc.name}>
                      <div className="flex items-center gap-2.5">
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${SVC_COLORS[i % SVC_COLORS.length]}`}>
                          <Icon size={12} />
                        </div>
                        <span className="text-sm font-semibold text-navy">{svc.name}</span>
                      </div>
                      <div className="mt-1.5 flex flex-col gap-1.5 pl-8">
                        {svc.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href ?? "#"}
                            onClick={() => setOpen(false)}
                            className="text-[13px] text-slate-500 hover:text-brand"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </MobileAccordion>

            <MobileAccordion label="Industries">
              <div className="flex flex-col gap-1">
                {INDUSTRY_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.href ?? "#"}
                    onClick={() => setOpen(false)}
                    className="rounded-lg py-2 text-sm text-slate-600 hover:text-brand"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </MobileAccordion>

            <MobileAccordion label="Products">
              {PRODUCTS.map((product) => (
                  <Link
                    key={product.name}
                    href={`/products/${product.slug}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg py-2 text-sm text-slate-600 hover:text-brand"
                  >
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br ${product.gradient}`}>
                      <ProductIcon icon={product.icon} className="h-3 w-3 text-white" />
                    </div>
                    {product.name}
                  </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion label="Cyber Security">
              <div className="flex flex-col gap-4">
                {CYBER_SECURITY_CATEGORIES.map((cat, i) => {
                  const Icon = CYBER_ICONS[cat.icon] ?? ScanSearch;
                  return (
                    <div key={cat.name}>
                      <div className="flex items-center gap-2.5">
                        <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${CYBER_COLORS[i % CYBER_COLORS.length]}`}>
                          <Icon size={12} />
                        </div>
                        <span className="text-sm font-semibold text-navy">{cat.name}</span>
                      </div>
                      <div className="mt-1.5 flex flex-col gap-1.5 pl-8">
                        {cat.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href ?? "#"}
                            onClick={() => setOpen(false)}
                            className="text-[13px] text-slate-500 hover:text-brand"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </MobileAccordion>

            <MobileAccordion label="Resources">
              <Link href="#" onClick={() => setOpen(false)} className="block rounded-lg py-2 text-sm text-slate-600 hover:text-brand">Blogs</Link>
              <Link href="#" onClick={() => setOpen(false)} className="block rounded-lg py-2 text-sm text-slate-600 hover:text-brand">Case Studies</Link>
            </MobileAccordion>

            <MobileAccordion label="Company">
              <Link href="/about" onClick={() => setOpen(false)} className="block rounded-lg py-2 text-sm text-slate-600 hover:text-brand">About Us</Link>
              <Link href="#" onClick={() => setOpen(false)} className="block rounded-lg py-2 text-sm text-slate-600 hover:text-brand">Team</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="block rounded-lg py-2 text-sm text-slate-600 hover:text-brand">Contact Us</Link>
            </MobileAccordion>
          </div>

          {/* Region grid + CTA */}
          <div className="mt-5 border-t border-slate-100 pt-5">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-400">Select Region</div>
            <div className="grid grid-cols-2 gap-1.5 mb-5">
              {REGIONS.slice(0, 6).map((region) => (
                <a
                  key={region.code}
                  href={region.href}
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 rounded-xl border border-slate-100 px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-brand/20 hover:text-brand"
                >
                  <RegionFlag region={region} />
                  {region.label}
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Connect With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
