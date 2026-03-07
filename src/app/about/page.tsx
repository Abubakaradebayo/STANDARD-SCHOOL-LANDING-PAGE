import Image from "next/image";
import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Monitor,
  BookOpen,
  Bus,
  Activity,
  Shield,
  Stethoscope,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { coreValues, facilities, schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${schoolInfo.name}'s mission, values, leadership, and facilities.`,
};

const missionCards = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To provide a nurturing and inclusive environment that fosters academic excellence, critical thinking, and character development through dedicated teaching and community engagement.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To empower pupils and students to become compassionate, innovative, disciplined, and proactive global citizens who positively impact the future.",
  },
  {
    icon: Heart,
    title: "Core Values",
    description: coreValues.join(" \u2022 "),
  },
];

const facilityIcons = [Monitor, BookOpen, BookOpen, Bus, Activity, Stethoscope];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="About Us"
        description="A nurturing school community committed to academic excellence and strong character."
        breadcrumbs={[{ label: "About" }]}
      />

      <div className="mx-auto w-full max-w-6xl space-y-20 px-4 py-16 md:px-6">
        {/* Intro */}
        <section className="max-w-3xl" data-animate>
          <SectionHeading
            eyebrow="Who We Are"
            title="Where excellence meets character"
            description="STANDARD SCHOOLS, ILORIN supports children from creche through secondary school with a balanced focus on academics, leadership, and discipline."
          />
        </section>

        {/* Mission / Vision / Values */}
        <section className="grid gap-6 md:grid-cols-3" data-animate="soft">
          {missionCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Card key={card.title} variant="elevated" data-animate="soft" data-delay={String(i + 1)}>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--gold)]/8 text-[var(--gold-dark)]">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4 text-xl">{card.title}</CardTitle>
                <CardDescription className="mt-2">{card.description}</CardDescription>
              </Card>
            );
          })}
        </section>

        {/* Head Teacher */}
        <section data-animate>
          <SectionHeading
            eyebrow="Leadership"
            title="Message from the School Cordinator"
            description="We partner with families to shape confident, responsible, and capable learners."
          />
          <div className="mt-8 grid gap-8 md:grid-cols-[280px_1fr] md:items-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border-2 border-[var(--navy-800)]/15" />
              <div className="relative h-72 w-full overflow-hidden rounded-2xl md:h-80">
                <Image
                  src="/images/leadership/head-teacher.jpg"
                  alt="Mrs Sulaimon Muinat, School Cordinator"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
            </div>
            <Card variant="elevated">
              <CardDescription className="text-base leading-7">
                Every child is unique, and I am proud to lead a team that tailors learning to meet
                individual needs. I am deeply committed to ensuring that every child feels safe,
                valued, and empowered to reach their full potential. I encourage every pupil and
                student to dream big and every staff member to keep inspiring. Together, we can make
                this school a place where young hearts and minds shine bright.
              </CardDescription>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-1 w-8 rounded-full bg-[var(--gold)]" />
                <div>
                  <p className="font-semibold text-[var(--text)]">Mrs Sulaimon Muinat</p>
                  <p className="text-sm text-[var(--muted)]">School Cordinator</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section data-animate="soft">
          <SectionHeading
            eyebrow="Values"
            title="What we stand for"
            description="Our core values guide every interaction, lesson, and decision."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {coreValues.map((value) => (
              <div
                key={value}
                className="flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/5 px-5 py-2.5"
              >
                <Shield className="h-4 w-4 text-[var(--gold-dark)]" />
                <span className="text-sm font-medium text-[var(--text)]">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities */}
        <section data-animate>
          <SectionHeading
            eyebrow="Facilities"
            title="Learning spaces built for growth"
            description="We maintain practical facilities that support teaching, safety, and development."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, i) => {
              const Icon = facilityIcons[i];
              return (
                <Card key={facility} variant="elevated" className="flex items-center gap-4 p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand)]/8 text-[var(--brand)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-[var(--text)]">{facility}</p>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Culture */}
        <section data-animate="soft">
          <SectionHeading
            eyebrow="Culture"
            title="School culture and discipline"
            description="Our discipline system is firm, respectful, and growth-focused."
          />
          <Card className="mt-6 border-l-4 border-l-[var(--gold)]">
            <CardDescription className="text-base leading-7">
              We teach students to be punctual, respectful, and accountable for their actions. We use
              positive correction, close parent communication, and mentorship rather than fear-based
              methods. The goal is to build self-discipline, empathy, and strong moral values.
            </CardDescription>
          </Card>
        </section>
      </div>
    </div>
  );
}
