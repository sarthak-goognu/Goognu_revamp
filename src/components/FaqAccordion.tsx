"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left"
            >
              <span className="text-sm font-semibold text-navy">{item.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-brand" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-4.5 text-sm leading-relaxed text-muted">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
