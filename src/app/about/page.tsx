import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, ShieldCheck, Users, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Goognu",
  description: "Learn about Goognu — a cloud, DevOps, data and AI consultancy.",
};

const VALUES = [
  {
    icon: Cloud,
    title: "Cloud-native by default",
    description:
      "We design for the cloud from day one, so our clients get scalability and resilience without re-architecting later.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability first",
    description:
      "Migrations and managed services are planned to protect uptime — our clients' production systems come first.",
  },
  {
    icon: Users,
    title: "Partnership over projects",
    description:
      "We work alongside client teams for the long run, not just for a single handover.",
  },
  {
    icon: Sparkles,
    title: "Practical AI & automation",
    description:
      "We apply AI/ML and automation where it removes real friction, not as a checkbox.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-brand">
            About Goognu
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Helping ambitious businesses move faster in the cloud
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Goognu is a cloud, DevOps, data and AI consultancy. We help
            businesses design, migrate, and run infrastructure that scales —
            without the downtime, guesswork, or vendor lock-in.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl font-bold text-navy">Our story</h2>
        <div className="mt-4 space-y-4 text-muted">
          <p>
            Goognu was founded on a simple idea: infrastructure should be an
            advantage, not a bottleneck. We started by helping teams migrate
            production workloads to the cloud with as close to zero downtime
            as possible, and grew from there into a full-service partner for
            cloud, DevOps, data, and AI/ML.
          </p>
          <p>
            Today we work with clients across education, manufacturing,
            retail, and media — helping them design cloud architecture,
            automate delivery pipelines, and put AI and data to practical use.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-navy">What drives us</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="inline-flex rounded-xl bg-brand/10 p-3 text-brand">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-navy px-8 py-12 text-center text-white md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Want to work with us?
            </h2>
            <p className="mt-2 text-white/70">
              Tell us about your project and our team will get back to you.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
