import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { SectionLabel } from "@/components/layout/section-label";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ArrowDiagonal, MarkStar } from "@/components/graphics/icons";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Academics",
  description: `Curriculum and co-curricular programs at ${schoolInfo.name}.`,
};

const levels = [
  {
    index: "01",
    title: "Creche & Toddler",
    detail:
      "Early years care and play-based learning focused on communication, confidence, and social development.",
    image: "/images/activities/class-activities/17e87c0f-3342-4623-9487-15945501e7ce.JPG",
    imageAlt: "Nursery children at lunch time",
  },
  {
    index: "02",
    title: "Nursery & K.G",
    detail:
      "Foundational literacy, numeracy, creative arts, and social skills in a structured, joyful environment.",
    image: "/images/activities/class-activities/IMG_2394.JPG",
    imageAlt: "Nursery classroom with alphabet charts",
  },
  {
    index: "03",
    title: "Primary",
    detail:
      "Structured literacy, mathematics, sciences, social studies, and digital awareness with continuous assessment.",
    image: "/images/activities/class-activities/04ff1d25-3fc1-41ba-8a16-22b2fe6d22aa.JPG",
    imageAlt: "Primary pupils at their desks",
  },
  {
    index: "04",
    title: "Junior Secondary",
    detail:
      "Strong exam preparation in sciences, arts, and commercial subjects, supported by guidance counselling.",
    image: "/images/activities/class-activities/a5248410-0d0b-433a-8b8f-2577ec74620d.JPG",
    imageAlt: "Secondary students studying together",
  },
];

const subjects = [
  "English Language",
  "Mathematics",
  "Basic Science",
  "Integrated Science",
  "ICT",
  "Civic Education",
  "Social Studies",
  "Creative Arts",
  "Physical Education",
  "French",
  "Arabic",
  "Islamic Studies",
];

const clubs = [
  "Press Club",
  "JET Club",
  "Young Farmers Club",
  "Sports & Athletics",
  "Indoor Games & Chess",
  "Debates & Competitions",
];

export default function AcademicsPage() {
  return (
    <div>
      <PageIntro
        index="02"
        eyebrow="Academics"
        title={
          <>
            A serious curriculum, <em className="text-cobalt">taught with heart.</em>
          </>
        }
        lede="National standards, practical learning, and continuous assessment, from first words in the creche to exam readiness in junior secondary."
      />

      {/* Levels ledger */}
      <section className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28" aria-label="Academic levels">
        <div>
          {levels.map((level, i) => (
            <Reveal key={level.index} delay={i * 0.05}>
              <div className="grid grid-cols-[auto_1fr] items-center gap-x-6 border-b border-line py-8 first:border-t sm:grid-cols-[3rem_6rem_1fr] sm:gap-x-10 md:py-10">
                <span className="font-mono text-xs text-brass">{level.index}</span>
                <div className="relative hidden h-24 w-20 overflow-hidden rounded-t-full sm:block">
                  <Image src={level.image} alt={level.imageAlt} fill sizes="80px" className="object-cover" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl lg:text-4xl">
                    {level.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-haze sm:text-base">
                    {level.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Subjects flow */}
      <section className="bg-mist py-20 md:py-28" aria-labelledby="subjects-heading">
        <div className="mx-auto max-w-shell px-5 sm:px-8">
          <SectionLabel index="→" title="The subjects" />
          <h2 id="subjects-heading" className="sr-only">
            What students learn
          </h2>
          <Reveal>
            <p className="mt-12 max-w-5xl font-display text-2xl font-medium leading-[1.6] tracking-tight text-ink sm:text-3xl sm:leading-[1.6]">
              {subjects.map((subject, i) => (
                <span key={subject} className="whitespace-nowrap">
                  {subject}
                  {i < subjects.length - 1 ? (
                    <MarkStar className="mx-4 inline-block h-3.5 w-3.5 -translate-y-1 text-brass" />
                  ) : (
                    "."
                  )}{" "}
                </span>
              ))}
            </p>
            <p className="mt-10 max-w-2xl leading-relaxed text-haze">
              Core subjects are taught with regular assessments, revision plans, and parent
              updates, with practical subjects tailored to each class level.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Clubs */}
      <section className="mx-auto max-w-shell px-5 py-24 sm:px-8 md:py-36" aria-labelledby="clubs-heading">
        <SectionLabel index="→" title="Beyond the classroom" />
        <div className="mt-14 grid gap-x-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <h2
                id="clubs-heading"
                className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink sm:text-4xl"
              >
                Confidence is <em className="text-cobalt">extracurricular.</em>
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-haze">
                Clubs, sports, and practical projects give every child a second place to lead.
              </p>
              <Link
                href="/admissions"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-cobalt"
              >
                Join the school
                <ArrowDiagonal className="h-3 w-3" />
              </Link>
            </Reveal>
          </div>
          <RevealGroup className="mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <ul>
              {clubs.map((club, i) => (
                <RevealItem key={club}>
                  <li className="flex items-baseline gap-5 border-b border-line py-5 first:border-t">
                    <span className="font-mono text-xs text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl text-ink sm:text-2xl">{club}</span>
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
