import { coreValues } from "@/content/school";
import { MarkStar } from "@/components/graphics/icons";

/** Midnight band ticking through the school's core values. */
export function ValuesMarquee() {
  return (
    <section aria-label="Our core values" className="overflow-hidden bg-midnight py-6">
      <ul className="sr-only">
        {coreValues.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {coreValues.map((value) => (
              <span key={value} className="flex items-center">
                <span className="px-8 font-display text-2xl italic text-paper/90 md:text-3xl">
                  {value}
                </span>
                <MarkStar className="h-3.5 w-3.5 text-brass" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
