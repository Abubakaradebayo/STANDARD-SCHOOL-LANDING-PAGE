"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { testimonials } from "@/content/testimonials";
import { SectionLabel } from "@/components/layout/section-label";
import { ArrowLong } from "@/components/graphics/icons";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const INTERVAL = 8000;

/** Chapter 04 - one voice at a time, set large. */
export function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    if (reduce || paused) return;
    const id = setInterval(() => go(1), INTERVAL);
    return () => clearInterval(id);
  }, [go, paused, reduce]);

  const current = testimonials[index];

  return (
    <section
      className="py-24 md:py-36"
      aria-labelledby="voices-heading"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionLabel index="05" title="Voices" />
        <h2 id="voices-heading" className="sr-only">
          What parents and staff say
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:gap-10">
          <p
            aria-hidden="true"
            className="font-display text-7xl leading-none text-brass lg:col-span-2 lg:text-[10rem]"
          >
            &ldquo;
          </p>

          <div className="lg:col-span-10">
            <div className="min-h-80 sm:min-h-64 lg:min-h-52">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={index}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -18 }}
                  transition={{ duration: 0.55, ease: EASE }}
                >
                  <blockquote className="max-w-4xl font-display text-2xl font-medium leading-[1.3] tracking-tight text-ink sm:text-3xl lg:text-4xl">
                    {current.message}
                  </blockquote>
                  <figcaption className="mt-8 flex items-baseline gap-4">
                    <span className="h-px w-10 self-center bg-brass" aria-hidden="true" />
                    <span className="font-medium text-ink">{current.name}</span>
                    <span className="font-mono text-2xs uppercase tracking-index text-haze">
                      {current.role}
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-line pt-6">
              <p className="font-mono text-xs tracking-index text-haze">
                {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </p>
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="text-ink transition-colors hover:text-cobalt"
                >
                  <ArrowLong className="h-3 w-8 rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="text-ink transition-colors hover:text-cobalt"
                >
                  <ArrowLong className="h-3 w-8" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
