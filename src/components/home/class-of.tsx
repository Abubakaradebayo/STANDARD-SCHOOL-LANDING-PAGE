import Image from "next/image";
import Link from "next/link";
import { classOf2026 } from "@/content/graduation";
import { SectionLabel } from "@/components/layout/section-label";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ArrowLong, MarkStar } from "@/components/graphics/icons";

/** Chapter 04 - the Class of 2K26 send-off: graduand cards on a snap-scroll rail. */
export function ClassOf() {
  return (
    <section className="overflow-hidden py-24 md:py-36" aria-labelledby="classof-heading">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionLabel index="04" title="The send-off" />

        <div className="mt-12 flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2
              id="classof-heading"
              className="max-w-2xl font-display text-3xl font-medium leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]"
            >
              Congratulations, <em className="text-cobalt">Class of 2K26.</em>
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-haze">
              Eight Primary 5 graduands cross the stage this year: the head girl, the headboy,
              and a full bench of prefects. Among them: future doctors, nurses, bankers and
              footballers.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/activities/class-of-2k26"
              className="group inline-flex items-center gap-3 font-mono text-2xs uppercase tracking-index text-haze transition-colors hover:text-cobalt"
            >
              Read the send-off
              <ArrowLong className="h-3 w-8 transition-transform duration-300 ease-swift group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Card rail */}
      <RevealGroup className="no-scrollbar mt-14 snap-x snap-mandatory overflow-x-auto">
        <ul className="flex w-max items-stretch gap-6 px-5 sm:px-8 lg:gap-8 lg:pl-[max(2rem,calc((100vw-88rem)/2+2rem))] lg:pr-24">
          {classOf2026.map((graduand, i) => (
            <li key={graduand.name} className="w-56 snap-start scroll-ml-5 sm:w-64 sm:scroll-ml-8">
              <RevealItem>
                <div className="relative aspect-[2/3] overflow-hidden border border-line bg-mist">
                  <Image
                    src={graduand.card}
                    alt={`Graduation card for ${graduand.name}, ${graduand.post}`}
                    fill
                    sizes="256px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-baseline gap-3 border-t border-line pt-3">
                  <span className="font-mono text-2xs text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-lg font-medium leading-tight text-ink">
                      {graduand.name}
                    </p>
                    <p className="mt-1 font-mono text-2xs uppercase tracking-index text-haze">
                      {graduand.post}
                    </p>
                  </div>
                </div>
              </RevealItem>
            </li>
          ))}

          <li className="flex w-48 items-center">
            <p className="flex items-start gap-3 font-display text-2xl italic leading-snug text-haze">
              <MarkStar className="mt-2 h-4 w-4 shrink-0 text-brass" />A star today, a leader
              tomorrow.
            </p>
          </li>
        </ul>
      </RevealGroup>
    </section>
  );
}
