"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { quickHighlights } from "@/content/school";
import { Magnetic } from "@/components/motion/magnetic";
import { Seal } from "@/components/graphics/seal";
import { ArrowDiagonal, ArrowLong, MarkStar } from "@/components/graphics/icons";

export function Hero() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.fromTo(
        ".line-mask > span",
        { yPercent: 115 },
        { yPercent: 0, duration: 1.15, stagger: 0.12, delay: 0.15 }
      )
        .fromTo(
          "[data-hero-fade]",
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 0.9, stagger: 0.09 },
          "-=0.65"
        )
        .fromTo(
          "[data-hero-image]",
          { clipPath: "inset(0 0 100% 0)" },
          { clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "expo.out" },
          0.35
        )
        .fromTo(
          "[data-hero-image-inner]",
          { scale: 1.32, transformOrigin: "50% 100%" },
          { scale: 1.15, duration: 1.8, ease: "expo.out" },
          0.35
        );

      gsap.to("[data-hero-image-inner]", {
        yPercent: 9,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative overflow-hidden pt-32 md:pt-40"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Left - the statement */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p
              data-hero-fade
              className="flex items-center gap-3 font-mono text-2xs uppercase tracking-seal text-haze sm:text-xs"
            >
              <MarkStar className="h-3 w-3 text-brass" />
              Creche · Nursery · Primary · Junior Secondary
            </p>

            <h1
              id="hero-heading"
              className="mt-8 font-display text-[13.5vw] font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
            >
              <span className="line-mask">
                <span>Bright minds,</span>
              </span>
              <span className="line-mask">
                <span>raised to a</span>
              </span>
              <span className="line-mask">
                <span>
                  <em className="text-cobalt">higher standard.</em>
                </span>
              </span>
            </h1>

            <p data-hero-fade className="mt-8 max-w-md leading-relaxed text-haze">
              For over fifteen years, families across Ilorin have trusted us with what matters
              most: raising confident, disciplined learners from their first steps in the creche
              to junior secondary.
            </p>

            <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-7">
              <Magnetic>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-cobalt"
                >
                  Begin admission
                  <ArrowDiagonal className="h-3 w-3" />
                </Link>
              </Magnetic>
              <Link
                href="/activities"
                className="group inline-flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-cobalt"
              >
                See campus life
                <ArrowLong className="h-3 w-8 transition-transform duration-300 ease-swift group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Right - the arch */}
          <div className="relative lg:col-span-5">
            <div className="relative ml-auto w-4/5 max-w-md lg:w-full">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 h-full w-full rounded-t-full border border-brass"
              />
              <div
                data-hero-image
                className="relative aspect-[3/4] overflow-hidden rounded-t-full"
              >
                <Image
                  data-hero-image-inner
                  src="/images/hero/career-day.jpg"
                  alt="Standard Schools pupils dressed as doctors and nurses on career day"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 80vw"
                  className="origin-bottom scale-115 object-cover object-bottom"
                />
              </div>
              <p
                data-hero-fade
                className="mt-4 text-right font-mono text-2xs uppercase tracking-index text-haze"
              >
                Career day, Mandate campus, Ilorin
              </p>
            </div>
            <Seal className="absolute -left-6 bottom-24 hidden h-28 w-28 text-navy md:block lg:-left-14" />
          </div>
        </div>

        {/* Hairline strip */}
        <div
          data-hero-fade
          className="mt-16 grid gap-4 border-t border-line py-7 sm:grid-cols-3 md:mt-20"
        >
          {quickHighlights.map((highlight) => (
            <p
              key={highlight}
              className="flex items-start gap-3 font-mono text-2xs uppercase leading-relaxed tracking-index text-haze"
            >
              <MarkStar className="mt-0.5 h-2.5 w-2.5 shrink-0 text-brass" />
              {highlight}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
