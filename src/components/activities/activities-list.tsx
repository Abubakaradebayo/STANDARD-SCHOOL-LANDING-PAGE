"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { activityCategories, activities } from "@/content/activities";
import { formatDate, cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLong } from "@/components/graphics/icons";

/** Filterable archive of school life, laid out as an offset editorial grid. */
export function ActivitiesList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof activityCategories)[number]>("All");

  const filtered = useMemo(() => {
    return [...activities]
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .filter((item) => {
        const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === "All" || item.category === category;
        return matchesQuery && matchesCategory;
      });
  }, [query, category]);

  return (
    <div>
      {/* Filter rail */}
      <div className="flex flex-col gap-8 border-b border-line pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex flex-wrap gap-x-7 gap-y-3" role="group" aria-label="Filter by category">
          {activityCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={cn(
                "font-mono text-2xs uppercase tracking-index transition-colors",
                category === item
                  ? "text-cobalt underline underline-offset-8"
                  : "text-haze hover:text-ink"
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search the archive…"
          aria-label="Search activities"
          className="w-full max-w-xs border-b border-line bg-transparent pb-2 text-sm text-ink outline-none transition-colors placeholder:text-haze/70 focus:border-cobalt"
        />
      </div>

      {/* Entries */}
      {filtered.length === 0 ? (
        <p className="py-24 text-center font-display text-2xl italic text-haze">
          Nothing in the archive matches yet.
        </p>
      ) : (
        <div className="grid gap-x-10 gap-y-16 pt-14 md:grid-cols-2">
          {filtered.map((activity, i) => (
            <Reveal key={activity.slug} className={cn(i % 2 === 1 && "md:mt-20")}>
              <Link href={`/activities/${activity.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={activity.coverImage}
                    alt={activity.title}
                    fill
                    sizes="(min-width: 768px) 45vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-swift group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline gap-4 border-t border-line pt-4">
                  <span className="font-mono text-2xs uppercase tracking-index text-brass">
                    {activity.category}
                  </span>
                  <span className="font-mono text-2xs uppercase tracking-index text-haze">
                    {formatDate(activity.date)}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-medium leading-snug tracking-tight text-ink transition-colors group-hover:text-cobalt sm:text-3xl">
                  {activity.title}
                </h2>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-haze">{activity.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-ink transition-colors group-hover:text-cobalt">
                  View entry
                  <ArrowLong className="h-3 w-8 transition-transform duration-300 ease-swift group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
