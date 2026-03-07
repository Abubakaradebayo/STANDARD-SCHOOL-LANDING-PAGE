"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ActivityPost } from "@/content/activities";
import { ActivityCard } from "@/components/activities/activity-card";

const INTERVAL_MS = 4200;
const MAX_VISIBLE = 3;

export function ActivitiesCarousel({ items }: { items: ActivityPost[] }) {
  const itemCount = items.length;

  const slides = useMemo(() => {
    if (itemCount <= MAX_VISIBLE) return items;
    return [...items, ...items.slice(0, MAX_VISIBLE)];
  }, [items, itemCount]);

  const [index, setIndex] = useState(0);
  const safeIndex = itemCount === 0 ? 0 : index % itemCount;

  useEffect(() => {
    if (itemCount <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % itemCount);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [itemCount]);

  const goPrev = () => {
    if (itemCount <= 1) return;
    setIndex((current) => (current - 1 + itemCount) % itemCount);
  };

  const goNext = () => {
    if (itemCount <= 1) return;
    setIndex((current) => (current + 1) % itemCount);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="activities-track -mx-2 flex transition-transform duration-700 ease-out will-change-transform md:-mx-2.5"
        style={{ transform: `translateX(calc(-${safeIndex} * var(--carousel-step)))` }}
      >
        {slides.map((activity, idx) => (
          <div
            key={`${activity.slug}-${idx}`}
            className="min-w-0 shrink-0 basis-full px-2 md:basis-1/3 md:px-2.5"
          >
            <ActivityCard activity={activity} />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white via-white/70 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white via-white/70 to-transparent" />
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--navy-900)] text-white transition-colors hover:bg-[var(--navy-800)] md:left-3 md:h-11 md:w-11"
        aria-label="Previous activities"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--navy-900)] text-white transition-colors hover:bg-[var(--navy-800)] md:right-3 md:h-11 md:w-11"
        aria-label="Next activities"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
