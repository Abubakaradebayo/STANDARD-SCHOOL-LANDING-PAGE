import Image from "next/image";
import { facilities } from "@/content/school";
import { SectionLabel } from "@/components/layout/section-label";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/** Chapter 01 - the school's ethos, told editorially: statement, prose, ruled facilities index. */
export function Ethos() {
  return (
    <section className="relative py-24 md:py-36" aria-labelledby="ethos-heading">
      <div className="mx-auto max-w-shell px-5 sm:px-8">
        <SectionLabel index="01" title="Our ethos" />

        <div className="mt-14 grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Sticky statement */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <h2
                  id="ethos-heading"
                  className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]"
                >
                  A school where <em className="text-cobalt">excellence</em> is taught, and{" "}
                  <em className="text-cobalt">character</em> is caught.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                    <Image
                      src="/images/activities/class-activities/IMG_2092.JPG"
                      alt="Pupils at work in a Standard Schools classroom"
                      fill
                      sizes="(min-width: 1024px) 20vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative mt-12 aspect-[3/4] overflow-hidden border border-line">
                    <Image
                      src="/images/activities/assembly/IMG_2398.JPG"
                      alt="Morning assembly on the school grounds"
                      fill
                      sizes="(min-width: 1024px) 20vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Prose + facilities index */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="leading-relaxed text-haze">
                Standard Schools, Ilorin is a nurturing, inclusive community where academic
                excellence, critical thinking and strong character grow together. From the creche
                to junior secondary, every child is known by name, and held to a standard worthy
                of their promise.
              </p>
              <p className="mt-5 leading-relaxed text-haze">
                Our teachers are qualified, caring, and consistent. Our classrooms are calm and
                well-ordered. And our gates open each morning onto a campus built for one purpose:
                the serious, joyful work of learning.
              </p>
            </Reveal>

            <RevealGroup className="mt-14">
              <RevealItem>
                <p className="font-mono text-xs uppercase tracking-index text-haze">
                  On campus
                </p>
              </RevealItem>
              <ul className="mt-4">
                {facilities.map((facility, i) => (
                  <RevealItem key={facility}>
                    <li className="flex items-baseline gap-5 border-b border-line py-4">
                      <span className="font-mono text-xs text-brass">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg text-ink sm:text-xl">{facility}</span>
                    </li>
                  </RevealItem>
                ))}
              </ul>
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
