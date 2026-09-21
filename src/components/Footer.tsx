import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ChevronRight, Briefcase, Users, ShieldCheck, Headphones } from "lucide-react";
import {
  COMPANY,
  SERVICE_CATEGORIES,
  INDUSTRY_NAV_ITEMS,
  FOOTER_PRODUCTS,
  FOOTER_COMPANY,
  SOCIAL_LINKS,
  STATS,
  type FooterLink,
  type FooterProductLink,
} from "@/lib/content";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.5c0-.9.25-1.5 1.55-1.5H16.5V4.3c-.27-.04-1.2-.11-2.28-.11-2.26 0-3.8 1.38-3.8 3.9V10.5H8v3h2.42V21h3.08Z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 3h3l-7.3 8.3L21.5 21h-6.6l-5.2-6.5L4 21H1l7.8-8.9L2.7 3h6.8l4.7 6Z" />
    </svg>
  );
}
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.6 4.78 6V21h-4v-5.4c0-1.3-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21h-4V9Z" />
    </svg>
  );
}

const SOCIAL_ICONS: Record<string, (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedinIcon,
};

// Stats reuse the same STATS array as the homepage's stat bento — order
// matters here since each is paired with an icon positionally.
const STAT_ICONS = [Briefcase, Headphones, ShieldCheck, Users];

function FooterLinkItem({ href, label, badge }: { href: string; label: string; badge?: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
      >
        <ChevronRight size={13} className="shrink-0 text-brand/70 transition-transform group-hover:translate-x-0.5" />
        <span>{label}</span>
        {badge && (
          <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-white/50">
            {badge}
          </span>
        )}
      </Link>
    </li>
  );
}

function LinkCol({ title, items }: { title: string; items: FooterLink[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-white/70">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <FooterLinkItem key={item.label} href={item.href ?? "#"} label={item.label} />
        ))}
      </ul>
    </div>
  );
}

function StringCol({ title, items }: { title: string; items: string[] }) {
  return <LinkCol title={title} items={items.map((label) => ({ label }))} />;
}

function ProductsCol({ items }: { items: FooterProductLink[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-white/70">Products</h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <FooterLinkItem
            key={item.label}
            href={item.href ?? "#"}
            label={item.label}
            badge={item.comingSoon ? "Coming Soon" : undefined}
          />
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-navy text-white">

      {/* ── Main 5-column grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">

          {/* Col 1 — Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block text-2xl font-extrabold tracking-tight text-white">
              goognu
            </Link>
            <span className="mt-2 block h-1 w-10 rounded-full bg-brand" />

            <p className="mt-4 text-sm leading-relaxed text-white/55">{COMPANY.tagline}</p>

            <div className="mt-5 space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm text-white/55">
                <MapPin size={14} className="mt-0.5 shrink-0 text-brand" />
                {COMPANY.location}
              </div>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 text-sm text-white/55 transition-colors hover:text-white"
              >
                <Mail size={14} className="shrink-0 text-brand" />
                {COMPANY.email}
              </a>
              <a
                href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-white/55 transition-colors hover:text-white"
              >
                <Phone size={14} className="shrink-0 text-brand" />
                {COMPANY.phone}
              </a>
              <Link
                href="/"
                className="flex items-center gap-2.5 text-sm text-white/55 transition-colors hover:text-white"
              >
                <Globe size={14} className="shrink-0 text-brand" />
                {COMPANY.website}
              </Link>
            </div>
          </div>

          {/* Col 2 — Services (same source as the header's Services mega-menu; already 8) */}
          <StringCol title="Services" items={SERVICE_CATEGORIES.map((s) => s.name)} />

          {/* Col 3 — Industries (same source as the header's Industries mega-menu, capped to 8) */}
          <StringCol title="Industries" items={INDUSTRY_NAV_ITEMS.slice(0, 8).map((i) => i.label)} />

          {/* Col 4 — Products (4 shipped + 2 in development) */}
          <ProductsCol items={FOOTER_PRODUCTS} />

          {/* Col 5 — Company */}
          <LinkCol title="Company" items={FOOTER_COMPANY} />
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat, i) => {
              const Icon = STAT_ICONS[i % STAT_ICONS.length];
              return (
                <div key={stat.label} className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                    <Icon size={19} />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-white/40 sm:flex-row">
          <p>© {year} Goognu. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Follow Us</span>
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all hover:border-brand/50 hover:bg-brand/10 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Trust banner ── */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl items-start gap-3 px-6 py-4 text-xs leading-relaxed text-white/45">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-brand" />
          <p>
            Goognu engineers cloud-native, AI-powered, and DevOps solutions that cut costs, accelerate delivery,
            and make technology a competitive advantage — not a bottleneck.
          </p>
        </div>
      </div>
    </footer>
  );
}
