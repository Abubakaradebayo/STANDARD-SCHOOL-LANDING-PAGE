"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { activityCategories, activities } from "@/content/activities";
import { ActivityCard } from "@/components/activities/activity-card";
import { cn } from "@/lib/utils";

export function ActivitiesList() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof activityCategories)[number]>("All");

  const filtered = useMemo(() => {
    return activities.filter((item) => {
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" ? true : item.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search activities..."
          className="h-12 w-full rounded-xl border border-[var(--border)] bg-white pl-11 pr-4 text-sm text-[var(--text)] placeholder:text-[var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
          aria-label="Search activities"
        />
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2">
        {activityCategories.map((item) => (
          <button
            key={item}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              category === item
                ? "bg-[var(--gold)] text-[var(--navy-950)]"
                : "bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--accent)] border border-[var(--border)]",
            )}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-[var(--border)] p-8 text-center text-sm text-[var(--muted)]">
          No activity found. Try another search term or category.
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((activity) => (
            <ActivityCard key={activity.slug} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
}
