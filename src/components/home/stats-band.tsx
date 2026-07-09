import { stats } from "@/content/school";
import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";

/** The record, in numbers - set like a ledger against a navy ground. */
export function StatsBand() {
  const entries = stats.map((stat) => {
    const value = Number.parseInt(stat.value, 10);
    return { ...stat, numeric: value, suffix: stat.value.replace(String(value), "") };
  });

  // Hairlines between cells at every breakpoint: 1 column → 2×2 → 1 row.
  const cellRules = [
    "",
    "border-t sm:border-t-0 sm:border-l",
    "border-t lg:border-t-0 lg:border-l",
    "border-t sm:border-t-0 sm:border-l lg:border-t-0",
  ];

  return (
    <section className="border-y border-royal bg-navy text-paper" aria-label="The school in numbers">
      <div className="mx-auto grid max-w-shell sm:grid-cols-2 lg:grid-cols-4">
        {entries.map((stat, i) => (
          <Reveal
            key={stat.key}
            delay={i * 0.08}
            className={`border-royal px-8 py-12 md:py-16 ${cellRules[i] ?? ""}`}
          >
            <p className="font-display text-5xl font-medium tracking-tight md:text-6xl">
              <Counter value={stat.numeric} />
              <span className="text-gold">{stat.suffix}</span>
            </p>
            <p className="mt-4 font-mono text-2xs uppercase tracking-index text-sky">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
