import Image from "next/image";
import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { SectionLabel } from "@/components/layout/section-label";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ValuesMarquee } from "@/components/home/values-marquee";
import { facilities, schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${schoolInfo.name}'s mission, values, leadership, and facilities.`,
};

export default function AboutPage() {
  return (
    <div>
      <PageIntro
        index="01"
        eyebrow="About the school"
        title={
          <>
            Excellence is taught. <em className="text-cobalt">Character is caught.</em>
          </>
        }
        lede="Since our founding, Standard Schools has supported children from the creche through junior secondary with one balanced focus: academics, leadership, and discipline, together."
      />

      {/* Mission / Vision spread */}
      <section className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28" aria-label="Mission and vision">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-0">
          <Reveal className="lg:border-r lg:border-line lg:pr-16">
            <p className="font-mono text-xs uppercase tracking-seal text-brass">Our mission</p>
            <p className="mt-6 font-display text-2xl font-medium leading-[1.3] tracking-tight text-ink sm:text-3xl">
              To provide a nurturing and inclusive environment that fosters academic excellence,
              critical thinking, and character through dedicated teaching and community
              engagement.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="lg:pl-16">
            <p className="font-mono text-xs uppercase tracking-seal text-brass">Our vision</p>
            <p className="mt-6 font-display text-2xl font-medium leading-[1.3] tracking-tight text-ink sm:text-3xl">
              To raise compassionate, innovative, disciplined and proactive citizens who positively
              shape the future, beginning here in Ilorin.
            </p>
          </Reveal>
        </div>
      </section>

      <ValuesMarquee />

      {/* Leadership */}
      <section className="mx-auto max-w-shell px-5 py-24 sm:px-8 md:py-36" aria-labelledby="leadership-heading">
        <SectionLabel index="02" title="Leadership" />
        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative mx-auto w-3/4 max-w-xs lg:w-full">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 h-full w-full rounded-t-full border border-brass"
              />
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                <Image
                  src="/images/leadership/head-teacher.jpg"
                  alt="Mrs Sulaimon Muinat, School Coordinator"
                  fill
                  sizes="(min-width: 1024px) 28vw, 75vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <h2
                id="leadership-heading"
                className="font-display text-2xl font-medium leading-[1.3] tracking-tight text-ink sm:text-3xl lg:text-4xl"
              >
                &ldquo;Every child is unique, and every child here is known. Our team tailors
                learning to individual needs, so that each pupil feels safe, valued, and empowered
                to reach their full potential.&rdquo;
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-haze">
                I encourage every pupil and student to dream big, and every staff member to keep
                inspiring. Together, we make this school a place where young hearts and minds shine
                bright.
              </p>
              <div className="mt-10 flex items-baseline gap-4">
                <span className="h-px w-10 self-center bg-brass" aria-hidden="true" />
                <span className="font-medium text-ink">Mrs Sulaimon Muinat</span>
                <span className="font-mono text-2xs uppercase tracking-index text-haze">
                  School Coordinator
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Discipline statement */}
      <section className="bg-navy py-24 text-paper md:py-32" aria-labelledby="culture-heading">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <SectionLabel index="03" title="Culture & discipline" dark />
          <Reveal>
            <h2
              id="culture-heading"
              className="mt-12 max-w-4xl font-display text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl"
            >
              Firm, respectful, and <em className="text-gold">growth-focused.</em>
            </h2>
            <p className="mt-8 max-w-2xl leading-relaxed text-sky">
              We teach students to be punctual, respectful, and accountable for their actions
              through positive correction, close parent communication, and mentorship rather than
              fear. The goal is self-discipline, empathy, and strong moral values that outlast the
              school day.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Facilities index */}
      <section className="mx-auto max-w-shell px-5 py-24 sm:px-8 md:py-36" aria-labelledby="facilities-heading">
        <SectionLabel index="04" title="On campus" />
        <div className="mt-14 grid gap-x-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2
                id="facilities-heading"
                className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl"
              >
                Built for the work of <em className="text-cobalt">learning.</em>
              </h2>
            </Reveal>
          </div>
          <RevealGroup className="mt-10 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <ul>
              {facilities.map((facility, i) => (
                <RevealItem key={facility}>
                  <li className="flex items-baseline gap-5 border-b border-line py-5 first:border-t">
                    <span className="font-mono text-xs text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl text-ink sm:text-2xl">{facility}</span>
                  </li>
                </RevealItem>
              ))}
            </ul>
          </RevealGroup>
        </div>
      </section>
    </div>
  );
}
