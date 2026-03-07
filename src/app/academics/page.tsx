import type { Metadata } from "next";
import {
  Baby,
  Flower2,
  School,
  BookMarked,
  Newspaper,
  Leaf,
  Volleyball,
  Puzzle,
  MessageCircle,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/layout/section-heading";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Academics",
  description: `Curriculum and co-curricular programs at ${schoolInfo.name}.`,
};

const sections = [
  {
    level: "Creche & Toddler",
    details:
      "Early years care and play-based learning focused on communication, confidence, and social development.",
    icon: Baby,
    color: "from-pink-500 to-rose-600",
  },
  {
    level: "Nursery & K.G",
    details:
      "Foundational literacy, numeracy, creative arts, and social skills in a structured, joyful environment.",
    icon: Flower2,
    color: "from-emerald-500 to-teal-600",
  },
  {
    level: "Primary",
    details:
      "Structured literacy, mathematics, sciences, social studies, and digital awareness with continuous assessment.",
    icon: School,
    color: "from-blue-500 to-indigo-600",
  },
  {
    level: "Secondary (J.S 1-3)",
    details:
      "Strong WAEC/NECO preparation in sciences, arts, and commercial subjects, supported by guidance counseling.",
    icon: BookMarked,
    color: "from-purple-500 to-violet-600",
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

const extras = [
  { name: "Press Club", icon: Newspaper },
  { name: "JET Club", icon: Rocket },
  { name: "Young Farmers Club", icon: Leaf },
  { name: "Sports & Athletics", icon: Volleyball },
  { name: "Indoor Games & Chess", icon: Puzzle },
  { name: "Debates & Competitions", icon: MessageCircle },
];

export default function AcademicsPage() {
  return (
    <div>
      <PageHero
        title="Academics"
        description="A balanced, future-ready curriculum combining national standards with practical learning."
        breadcrumbs={[{ label: "Academics" }]}
      />

      <div className="mx-auto w-full max-w-6xl space-y-20 px-4 py-16 md:px-6">
        {/* Academic Levels */}
        <section data-animate>
          <SectionHeading
            eyebrow="Programs"
            title="Academic levels we offer"
            description="From early years through junior secondary, every stage is carefully structured."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <Card
                  key={section.level}
                  variant="elevated"
                  className="relative overflow-hidden"
                  data-animate="soft"
                  data-delay={String(i + 1)}
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color}`}
                  />
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand)]/8 text-[var(--brand)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{section.level}</CardTitle>
                  <CardDescription className="mt-2">{section.details}</CardDescription>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Curriculum */}
        <section data-animate>
          <SectionHeading
            eyebrow="Curriculum"
            title="What students learn"
            description="Core subjects are taught with regular assessments, revision plans, and parent updates."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <Badge key={subject} variant="outlined" className="text-sm px-4 py-2">
                {subject}
              </Badge>
            ))}
          </div>
          <Card className="mt-6">
            <CardDescription className="text-base leading-7">
              Our curriculum includes English Language, Mathematics, Basic and Integrated Sciences,
              ICT, Civic Education, Social Studies, and practical subjects tailored to each class
              level.
            </CardDescription>
          </Card>
        </section>

        {/* Extra-Curricular */}
        <section data-animate="soft">
          <SectionHeading
            eyebrow="Extra-Curricular"
            title="Beyond the classroom"
            description="Students build confidence through clubs, sports, and practical projects."
          />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.name}
                  variant="elevated"
                  className="flex items-center gap-4 p-5"
                  data-animate="soft"
                  data-delay={String(i + 1)}
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/8 text-[var(--gold-dark)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-medium text-[var(--text)]">{item.name}</p>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Button href="/admissions">
              Join Our School
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
