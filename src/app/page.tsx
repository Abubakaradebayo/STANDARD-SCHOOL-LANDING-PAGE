import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Heart,
  Shield,
  BookOpen,
  Award,
  Users,
  Star,
  Quote,
  ChevronDown,
  Baby,
  School,
  BookMarked,
  ArrowRight,
  Expand,
  Calendar,
  Trophy,
  Target,
} from "lucide-react";
import { ActivitiesCarousel } from "@/components/home/activities-carousel";
import { SectionHeading } from "@/components/layout/section-heading";
import { FAQSection } from "@/components/home/faq";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { activities } from "@/content/activities";
import { galleryImages } from "@/content/gallery";
import { quickHighlights, schoolInfo, stats } from "@/content/school";
import { testimonials } from "@/content/testimonials";

const latestActivities = [...activities]
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .slice(0, 6);

const programs = [
  {
    title: "Early Years",
    desc: "Creche, toddler, nursery, and K.G with play-based foundations.",
    icon: Baby,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Primary",
    desc: "Literacy, numeracy, sciences, and ICT with structured assessments.",
    icon: School,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Secondary (J.S 1-3)",
    desc: "Focused learning for transition and exam readiness.",
    icon: BookMarked,
    color: "from-purple-500 to-violet-600",
  },
];

const pillars = [
  {
    title: "Academic Excellence",
    desc: "Focused teaching, continuous assessment, and structured support.",
    icon: BookOpen,
  },
  {
    title: "Character & Discipline",
    desc: "Respect, integrity, and resilience as everyday habits.",
    icon: Award,
  },
  {
    title: "Whole-Child Growth",
    desc: "Clubs, sports, and practical activities that build confidence.",
    icon: Users,
  },
];

const highlightIcons = [GraduationCap, Heart, Shield];

const statIcons = [Calendar, Trophy, Users, Target];

export default function HomePage() {
  return (
    <div>
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/Hero.JPG"
            alt="Standard Schools, Ilorin students"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABBEFEiEiMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AkGKJjI0ESsx5YoASfZqz/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-950)]/80 via-[var(--navy-900)]/60 to-[var(--navy-950)]/90" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-32 text-center md:px-6">
          <div className="mx-auto max-w-3xl space-y-6" data-animate>
            <div className="mx-auto relative h-24 w-24 md:h-28 md:w-28">
              <Image
                src={schoolInfo.logo}
                alt={schoolInfo.logoAlt}
                fill
                className="object-contain drop-shadow-2xl"
                sizes="112px"
                priority
              />
            </div>
            <Badge variant="gold" className="text-sm px-4 py-1.5">
              {schoolInfo.slogan}
            </Badge>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              {schoolInfo.name}
            </h1>
            <p className="mx-auto max-w-xl text-lg text-slate-300 md:text-xl">
              Building confident learners with strong academics, character, and community values.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button size="xl" variant="gold" href="/admissions">
                Begin Application
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="xl" variant="outline-white" href="/about">
                Explore Our School
              </Button>
            </div>
          </div>

          {/* Stats strip */}
          <div
            className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
            data-animate="soft"
          >
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div
                  key={stat.key}
                  className="glass rounded-xl px-4 py-4 text-center"
                >
                  <Icon className="mx-auto mb-2 h-5 w-5 text-[var(--gold)]" />
                  <p className="font-heading text-2xl font-bold text-white md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-white/50" />
        </div>
      </section>

      {/* ─── Quick Highlights Strip ─── */}
      <section className="section-light py-12" data-animate="soft">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {quickHighlights.map((item, i) => {
              const Icon = highlightIcons[i];
              return (
                <Card key={item} variant="elevated" className="flex items-start gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-base">{item}</CardTitle>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── About Preview Section ─── */}
      <section className="py-20" data-animate>
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl border-2 border-[var(--navy-800)]/20 md:-inset-4" />
            <div className="relative h-[360px] overflow-hidden rounded-2xl md:h-[450px]">
              <Image
                src="/images/activities/class-activities/IMG_2092.JPG"
                alt="Students in class"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABBEFEiEiMUFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AkGKJjI0ESsx5YoASfZqz/9k="
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <SectionHeading
              eyebrow="About Us"
              title="A world-class learning environment"
              description="We blend academics, values, and practical skills to raise disciplined and confident learners."
            />
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white p-4 transition-all hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold-dark)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text)]">{pillar.title}</p>
                      <p className="mt-1 text-xs text-[var(--muted)]">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button href="/about">
              Read About Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Stats Section ─── */}
      <section className="section-dark py-20" data-animate>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl gold-underline-center">
              Our Impact in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <div key={stat.key} className="text-center" data-animate="soft" data-delay={String(i + 1)}>
                  <Icon className="mx-auto mb-3 h-8 w-8 text-[var(--gold)]" />
                  <p className="font-heading text-4xl font-bold text-[var(--gold)] md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Academic Programs ─── */}
      <section className="section-light py-20" data-animate>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="text-center mb-12">
            <SectionHeading
              eyebrow="Academics"
              title="Academic Programs"
              description="Strong foundations for early years through junior secondary."
              centered
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {programs.map((program, i) => {
              const Icon = program.icon;
              return (
                <Card
                  key={program.title}
                  variant="elevated"
                  className="relative overflow-hidden"
                  data-animate="soft"
                  data-delay={String(i + 1)}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${program.color}`} />
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="mt-4 text-xl">{program.title}</CardTitle>
                  <CardDescription className="mt-2">{program.desc}</CardDescription>
                </Card>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Button href="/academics">
              Explore Academics
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Activities Carousel ─── */}
      <section className="py-20" data-animate>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Activities"
              title="Latest school news and events"
              description="Updates from classrooms, competitions, excursions, and community life."
            />
            <Link
              href="/activities"
              className="hidden text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] transition-colors md:flex md:items-center md:gap-1"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ActivitiesCarousel items={latestActivities.slice(0, 6)} />
          <div className="mt-6 text-center md:hidden">
            <Button size="sm" variant="outline" href="/activities">
              View All Activities
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Gallery Preview ─── */}
      <section className="section-light py-20" data-animate>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Gallery"
              title="School life in pictures"
              description="Peek into our events, classes, and student achievements."
            />
            <Link
              href="/gallery"
              className="hidden text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] transition-colors md:flex md:items-center md:gap-1"
            >
              Open gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImages.slice(0, 8).map((image, i) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-xl ${
                  i === 0 || i === 5 ? "row-span-2 h-72 md:h-full" : "h-36 md:h-44"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--navy-950)]/0 transition-all duration-300 group-hover:bg-[var(--navy-950)]/40">
                  <Expand className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="gold" href="/gallery">
              View Full Gallery
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section-dark py-20" data-animate>
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="What parents say"
            description="Trusted by families across Ilorin."
            centered
            dark
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <Card
                key={item.name}
                variant="dark"
                className="relative"
                data-animate="soft"
                data-delay={String(i + 1)}
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-[var(--gold)]/20" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  &ldquo;{item.message}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="text-xs text-[var(--gold)]">{item.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <FAQSection />

      {/* ─── Final CTA ─── */}
      <section className="section-dark py-20" data-animate="soft">
        <div className="mx-auto w-full max-w-6xl px-4 text-center md:px-6">
          <div className="mx-auto max-w-2xl space-y-6">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Give Your Child the Best Start
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]" />
            <p className="text-lg text-slate-300">
              Join a community of families who trust Standard Schools with their children&apos;s future.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button size="xl" variant="gold" href="/admissions">
                Start Application
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="xl" variant="outline-white" href="/contact">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
