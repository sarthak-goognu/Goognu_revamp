import type { Metadata } from "next";
import { Code2, Smartphone, Link2, Brain, Plug, ShieldCheck, Calculator, Landmark, TrendingUp, Cpu, Lock, Globe, Bell, UserCheck, Activity, Repeat, Coins, ShieldAlert, Zap } from "lucide-react";
import {
  IndustryHero, TrustStrip, StatsBand, SectionHeading, FeatureGrid, SimpleTagGrid,
  IndustryTestimonials, IndustryClosingCTA,
} from "@/components/industry/Primitives";

// Real content condensed from https://goognu.com/industry/finance
const ACCENT = "from-blue-600 to-indigo-600";

export const metadata: Metadata = {
  title: "Fintech App Development Services | Goognu",
  description: "Build cutting-edge fintech apps with Goognu. Expert fintech app development services for secure, scalable, and innovative financial solutions.",
};

export default function FinanceIndustryPage() {
  return (
    <>
      <IndustryHero
        eyebrow="Finance Development"
        title="Fintech App Development Services"
        subtitle="Transform financial operations with secure, and high-performance applications moulded to your needs."
        accent={ACCENT}
      />
      <TrustStrip industryLabel="finance" />
      <StatsBand />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What We Build"
            title="Our Full Stack Custom FinTech App Development Services"
            description="At Goognu, we specialize in building robust financial solutions that enhance efficiency, security, and user experience."
            accent={ACCENT}
          />
          <FeatureGrid
            accent={ACCENT}
            columns={3}
            items={[
              { icon: Code2, title: "Custom Fintech App Development", description: "Secure, reliable applications for digital payments and financial analytics that stay compliant." },
              { icon: Smartphone, title: "Mobile Banking App Development", description: "Fast, secure banking apps supporting real-time payments, account management, and fraud protection." },
              { icon: Link2, title: "Blockchain-Based Payments & Security", description: "Secure, transparent, tamper-proof transactions with smart contracts and real-time tracking." },
              { icon: Brain, title: "AI-Powered Financial Insights", description: "Predictive analytics, automated reporting, and intelligent forecasting for smarter decisions." },
              { icon: Plug, title: "Embedded Finance & Open Banking", description: "Lending, payments, and banking features integrated via secure open banking APIs." },
              { icon: ShieldCheck, title: "RegTech & Compliance Solutions", description: "AI-powered compliance automation that reduces regulatory risk and human error." },
            ]}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Services" title="Tailored FinTech Services for Your Unique Business Needs" accent={ACCENT} />
          <SimpleTagGrid
            accent={ACCENT}
            columns={3}
            items={[
              { icon: Calculator, title: "Accounting" },
              { icon: Landmark, title: "Banking" },
              { icon: TrendingUp, title: "Wealth Management" },
            ]}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Why Us" title="Why Choose Goognu for Fintech Development Services?" accent={ACCENT} />
          <FeatureGrid
            accent={ACCENT}
            columns={4}
            items={[
              { icon: Cpu, title: "Technical Excellence", description: "High-performance architecture ensuring reliability, speed, and industry compliance." },
              { icon: Lock, title: "Stringent Mechanisms", description: "Advanced encryption, fraud detection, and multi-layer authentication at the core." },
              { icon: Globe, title: "Globally Accessible Systems", description: "Multi-currency, multi-gateway support with compliance for cross-border transactions." },
              { icon: Bell, title: "Clever Notifications", description: "Real-time alerts, fraud notifications, and personalized financial insights." },
            ]}
          />
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Integrations" title="FinTech Integrations That Make Money Management Smarter" accent={ACCENT} />
          <SimpleTagGrid
            accent={ACCENT}
            columns={4}
            items={[
              { icon: UserCheck, title: "Identity Verification" },
              { icon: Activity, title: "Real-Time Transaction Monitoring" },
              { icon: Plug, title: "Smooth API Integration" },
              { icon: Repeat, title: "Automated Payment Processing" },
              { icon: Coins, title: "Multi-Currency Support" },
              { icon: ShieldAlert, title: "AI-Powered Fraud Detection" },
              { icon: Link2, title: "Blockchain Security" },
              { icon: Zap, title: "Instant Fund Transfers" },
            ]}
          />
        </div>
      </section>

      <IndustryTestimonials accent={ACCENT} />
      <IndustryClosingCTA accent={ACCENT} />
    </>
  );
}
