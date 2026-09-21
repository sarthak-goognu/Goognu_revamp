import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/lib/content";
import type { IconKey } from "@/lib/icons";
import ProductIcon from "@/components/ProductIcon";

// Shared visual template for the product detail pages. Each product's own
// page.tsx (under app/products/<slug>/) supplies its own content object —
// this component just renders it consistently. If one product ever needs a
// genuinely different layout, that page.tsx is free to stop using this
// template without affecting the other three.

export type FeatureItem = { icon: IconKey; title: string; description: string };
export type StepItem = { title: string; description: string };

export type ProductDetail = {
  slug: string;
  name: string;
  tagline: string;
  headline: string;
  description: string;
  icon: IconKey;
  gradient: string;
  capabilities: FeatureItem[];
  steps: StepItem[];
  whyChoose: FeatureItem[];
  closing: { headline: string; description: string };
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5">
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">{children}</span>
    </div>
  );
}

export default function ProductDetailTemplate({ product }: { product: ProductDetail }) {
  const otherProducts = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_60%_-10%,rgba(22,98,246,0.45),transparent)]" />
        <div className="absolute top-20 right-[10%] h-72 w-72 rounded-full bg-brand/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-12 md:py-16">
          <div className="max-w-xl">
            <Eyebrow>{product.tagline}</Eyebrow>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              {product.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
              {product.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark hover:-translate-y-0.5"
              >
                Get Free Consultation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-all hover:border-white/40 hover:bg-white/10"
              >
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ KEY CAPABILITIES ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow>Key Capabilities</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              What {product.name} handles for you
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {product.capabilities.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-100 bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} text-white shadow-sm`}>
                  <ProductIcon icon={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-navy leading-snug">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow>How It Works</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              From setup to live in a few steps
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {product.steps.map((step, i) => (
              <div
                key={step.title}
                className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-brand/30 hover:shadow-md"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} text-sm font-extrabold text-white`}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="font-bold text-navy text-sm">{step.title}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY CHOOSE ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <Eyebrow>Why {product.name}</Eyebrow>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Built to actually get used
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.whyChoose.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-slate-100 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <ProductIcon icon={item.icon} className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-navy text-sm">{item.title}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</div>
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
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(22,98,246,0.5),transparent)]" />
            <div className="relative">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {product.closing.headline}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/65">{product.closing.description}</p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {["No commitment required", "Response within 24 h"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-xs text-white/60">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    {t}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold text-white shadow-lg shadow-accent/30 transition-opacity hover:opacity-90"
              >
                Schedule Free Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ OTHER PRODUCTS ═══════════════ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-muted">
            Explore other products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition-all hover:border-brand/30 hover:shadow-md"
              >
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient} text-white`}>
                  <ProductIcon icon={p.icon} className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-navy group-hover:text-brand">{p.name}</div>
                  <div className="truncate text-xs text-muted">{p.tag}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
