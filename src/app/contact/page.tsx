"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, SERVICE_CATEGORIES } from "@/lib/content";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Static build — no backend wired up yet. This page will POST to the
    // real API once the dynamic/contact-handling phase is built.
    setStatus("submitted");
  }

  return (
    <>
      <section className="bg-navy py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-brand">
            Contact Us
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s build something great together
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Share your requirements and our experts will get back to you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">Get in touch</h2>
            <p className="mt-3 text-muted">
              We respect your privacy. No spam, ever.
            </p>

            <div className="mt-8 space-y-4">
              <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="flex items-center gap-3 text-navy hover:text-brand">
                <span className="rounded-full bg-brand/10 p-2 text-brand"><Phone size={18} /></span>
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-navy hover:text-brand">
                <span className="rounded-full bg-brand/10 p-2 text-brand"><Mail size={18} /></span>
                {COMPANY.email}
              </a>
              <div className="flex items-center gap-3 text-navy">
                <span className="rounded-full bg-brand/10 p-2 text-brand"><MapPin size={18} /></span>
                {COMPANY.location}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6">
            {status === "submitted" ? (
              <div className="rounded-xl bg-brand/10 p-6 text-center text-navy">
                <p className="font-semibold">Thanks for reaching out!</p>
                <p className="mt-2 text-sm text-muted">
                  This form isn&apos;t connected to a backend yet — this is a
                  static preview build. Submissions will start reaching the
                  team once the dynamic phase is wired up.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-navy" htmlFor="name">Full Name*</label>
                  <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy" htmlFor="email">Work Email*</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy" htmlFor="phone">Phone Number*</label>
                  <input id="phone" name="phone" type="tel" required className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy" htmlFor="company">Company Name</label>
                  <input id="company" name="company" type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-navy" htmlFor="subject">I am interested in*</label>
                  <select id="subject" name="subject" required defaultValue="" className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none">
                    <option value="" disabled>Select a service</option>
                    {SERVICE_CATEGORIES.map((s) => (
                      <option key={s.name} value={s.name}>{s.name}</option>
                    ))}
                    <option value="Other">Something else</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-navy" htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={3} className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand focus:outline-none" />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
                >
                  Get Free Consultation
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
