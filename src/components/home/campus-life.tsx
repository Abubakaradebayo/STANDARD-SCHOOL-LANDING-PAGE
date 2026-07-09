"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { activities } from "@/content/activities";
import { formatDate } from "@/lib/utils";
import { SectionLabel } from "@/components/layout/section-label";
import { ArrowLong } from "@/components/graphics/icons";

const featured = [...activities].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 5);

/**
 * Chapter 03 - a pinned, scroll-driven horizontal walk through campus life.
 * On touch/small screens and for reduced-motion users it degrades to a
 * native horizontal scroller.
 */
export function CampusLife() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const distance = () => track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-midnight py-20 text-paper lg:flex lg:h-svh lg:flex-col lg:justify-center lg:py-0"
      aria-labelledby="campus-heading"
    >
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8">
        <SectionLabel index="03" title="Campus life" dark />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 lg:mt-12">
          <h2
            id="campus-heading"
            className="font-display text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.9rem]"
          >
            The school day, <em className="text-gold">unposed.</em>
          </h2>
          <Link
            href="/activities"
            className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-index text-sky transition-colors hover:text-paper"
          >
            All activities
            <ArrowLong className="h-3 w-8 transition-transform duration-300 ease-swift group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>

      <div className="no-scrollbar mt-12 overflow-x-auto lg:mt-16 lg:overflow-visible">
        <div
          ref={trackRef}
          className="flex w-max items-start gap-8 px-5 sm:px-8 lg:gap-14 lg:pl-[max(2rem,calc((100vw-88rem)/2+2rem))] lg:pr-24"
        >
          {featured.map((activity, i) => (
            <Link
              key={activity.slug}
              href={`/activities/${activity.slug}`}
              className={`group shrink-0 ${i % 2 === 1 ? "lg:mt-16" : ""}`}
            >
              <div
                className={`relative overflow-hidden ${
                  i % 2 === 0 ? "aspect-[3/4] w-64 sm:w-72 lg:w-80" : "aspect-[4/3] w-80 sm:w-96 lg:w-[30rem]"
                }`}
              >
                <Image
                  src={activity.coverImage}
                  alt={activity.title}
                  fill
                  sizes="(min-width: 1024px) 480px, 384px"
                  className="object-cover transition-transform duration-700 ease-swift group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-baseline gap-4 border-t border-white/15 pt-4">
                <span className="font-mono text-2xs uppercase tracking-index text-brass">
                  {activity.category}
                </span>
                <span className="font-mono text-2xs uppercase tracking-index text-sky/60">
                  {formatDate(activity.date)}
                </span>
              </div>
              <h3 className="mt-2 max-w-xs font-display text-xl font-medium leading-snug transition-colors group-hover:text-gold sm:text-2xl">
                {activity.title}
              </h3>
            </Link>
          ))}

          {/* Terminal panel */}
          <Link
            href="/activities"
            className="group flex shrink-0 flex-col items-start justify-center gap-6 self-stretch pr-8"
          >
            <span className="font-display text-3xl font-medium italic text-sky transition-colors group-hover:text-gold">
              And every day after…
            </span>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3 text-sm font-medium transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
              Browse the archive
              <ArrowLong className="h-3 w-8" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
