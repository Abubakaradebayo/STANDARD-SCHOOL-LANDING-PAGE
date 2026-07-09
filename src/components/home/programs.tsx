"use client";

import { useRef, useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { SectionLabel } from "@/components/layout/section-label";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLong } from "@/components/graphics/icons";

type Program = {
  index: string;
  title: string;
  stage: string;
  ages: string;
  description: string;
  image: string;
  imageAlt: string;
};

const programs: Program[] = [
  {
    index: "01",
    title: "Early Years",
    stage: "Creche · Toddler · Nursery · K.G",
    ages: "Ages 0–5",
    description: "Play-based foundations in a warm, watchful environment built for first steps.",
    image: "/images/activities/class-activities/IMG_2394.JPG",
    imageAlt: "Nursery classroom with alphabet charts",
  },
  {
    index: "02",
    title: "Primary",
    stage: "Basic 1 – 6",
    ages: "Ages 5–11",
    description:
      "Literacy, numeracy, sciences and ICT, taught with structure, assessed with care.",
    image: "/images/activities/class-activities/04ff1d25-3fc1-41ba-8a16-22b2fe6d22aa.JPG",
    imageAlt: "Primary pupils at their desks",
  },
  {
    index: "03",
    title: "Junior Secondary",
    stage: "J.S 1 – 3",
    ages: "Ages 11–14",
    description:
      "Focused teaching for the transition years: study habits, leadership, exam readiness.",
    image: "/images/activities/class-activities/a5248410-0d0b-433a-8b8f-2577ec74620d.JPG",
    imageAlt: "Secondary students studying together",
  },
];

/** Chapter 02 - the learning journey as a ruled index; hovering a row summons its photograph. */
export function Programs() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Program | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.5 });

  function handleMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    x.set(event.clientX);
    y.set(event.clientY);
  }

  return (
    <section
      ref={sectionRef}
      onPointerMove={handleMove}
      className="bg-mist py-24 md:py-36"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionLabel index="02" title="The learning journey" />

        <Reveal>
          <h2
            id="programs-heading"
            className="mt-12 max-w-2xl font-display text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]"
          >
            One school, <em className="text-cobalt">fourteen years</em> of growing up.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-ink/10">
          {programs.map((program) => (
            <Link
              key={program.index}
              href="/academics"
              onPointerEnter={(e) => e.pointerType === "mouse" && setActive(program)}
              onPointerLeave={() => setActive(null)}
              onFocus={() => setActive(program)}
              onBlur={() => setActive(null)}
              className="group grid grid-cols-[auto_1fr] items-center gap-x-5 border-b border-ink/10 py-7 transition-colors duration-300 sm:grid-cols-[3rem_auto_1fr_auto] sm:gap-x-8 md:py-9"
            >
              <span className="font-mono text-xs text-brass">{program.index}</span>

              <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-t-full sm:order-none lg:hidden">
                <Image
                  src={program.image}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>

              <div className="col-span-2 mt-3 sm:col-span-1 sm:mt-0">
                <h3 className="font-display text-3xl font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-cobalt sm:text-4xl lg:text-5xl">
                  {program.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-haze">
                  {program.description}
                </p>
              </div>

              <div className="col-span-2 mt-4 flex items-center justify-between gap-6 sm:col-span-1 sm:mt-0 sm:flex-col sm:items-end sm:justify-center sm:gap-3">
                <p className="font-mono text-2xs uppercase tracking-index text-haze">
                  {program.stage} · {program.ages}
                </p>
                <ArrowLong className="h-3 w-8 text-ink transition-all duration-300 ease-swift group-hover:translate-x-1.5 group-hover:text-cobalt" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Cursor-following photograph (desktop, motion allowed) */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-30 hidden lg:block"
          style={{ x: springX, y: springY }}
        >
          <AnimatePresence>
            {active && (
              <motion.div
                key={active.index}
                className="relative -translate-x-1/2 -translate-y-1/2"
                initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative h-72 w-56 overflow-hidden rounded-t-full">
                  <Image
                    src={active.image}
                    alt=""
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-center font-mono text-2xs uppercase tracking-index text-haze">
                  {active.imageAlt}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </section>
  );
}
