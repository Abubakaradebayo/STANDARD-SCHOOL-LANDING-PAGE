"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faqItems } from "@/content/school";
import { SectionLabel } from "@/components/layout/section-label";
import { MarkPlus } from "@/components/graphics/icons";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type FaqSectionProps = {
  /** Chapter index shown in the section label - differs per page. */
  index?: string;
};

/** The closing chapter - questions parents actually ask, as a ruled ledger. */
export function FaqSection({ index = "06" }: FaqSectionProps) {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-linen py-24 md:py-36" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionLabel index={index} title="Questions" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2
              id="faq-heading"
              className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl"
            >
              Asked by parents, <em className="text-cobalt">answered plainly.</em>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            {faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.question} className="border-b border-ink/10 first:border-t">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="group flex w-full items-center gap-5 py-6 text-left"
                  >
                    <span className="font-mono text-xs text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-xl font-medium text-ink transition-colors group-hover:text-cobalt sm:text-2xl">
                      {item.question}
                    </span>
                    <MarkPlus
                      className={cn(
                        "h-3.5 w-3.5 shrink-0 text-ink transition-transform duration-300 ease-swift",
                        isOpen && "rotate-45 text-cobalt"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pl-9 leading-relaxed text-haze">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
