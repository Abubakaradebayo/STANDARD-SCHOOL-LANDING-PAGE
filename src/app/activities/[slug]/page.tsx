import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { activities, getActivityBySlug } from "@/content/activities";
import { formatDate } from "@/lib/utils";
import { ActivityGallery } from "@/components/activities/activity-gallery";
import { SectionLabel } from "@/components/layout/section-label";
import { Reveal } from "@/components/motion/reveal";
import { ArrowLong } from "@/components/graphics/icons";

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

type ActivityPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ActivityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    return { title: "Activity not found" };
  }

  return {
    title: activity.title,
    description: activity.excerpt,
    openGraph: {
      title: activity.title,
      description: activity.excerpt,
      images: [activity.coverImage],
    },
  };
}

const sorted = [...activities].sort((a, b) => (a.date < b.date ? 1 : -1));

export default async function ActivityDetailPage({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  const position = sorted.findIndex((item) => item.slug === activity.slug);
  const next = sorted[(position + 1) % sorted.length];

  return (
    <article>
      {/* Opening spread */}
      <header className="mx-auto max-w-shell px-5 pt-32 sm:px-8 md:pt-40">
        <Link
          href="/activities"
          className="group inline-flex items-center gap-3 font-mono text-2xs uppercase tracking-index text-haze transition-colors hover:text-cobalt"
        >
          <ArrowLong className="h-3 w-8 rotate-180 transition-transform duration-300 ease-swift group-hover:-translate-x-1.5" />
          All activities
        </Link>
        <div className="mt-10">
          <SectionLabel index={String(position + 1).padStart(2, "0")} title={activity.category} />
        </div>
        <div className="grid gap-8 py-12 md:py-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {activity.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:self-end">
            <p className="max-w-md leading-relaxed text-haze">{activity.excerpt}</p>
            <p className="mt-4 font-mono text-2xs uppercase tracking-index text-brass">
              {formatDate(activity.date)}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Cover */}
      <Reveal className="mx-auto max-w-shell px-5 sm:px-8">
        <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[21/9]">
          <Image
            src={activity.coverImage}
            alt={activity.title}
            fill
            priority
            sizes="92vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* Body + gallery */}
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 md:py-24">
        {activity.content.length > 0 && (
          <div className="mx-auto max-w-2xl space-y-6 pb-16 leading-relaxed text-haze md:pb-24">
            {activity.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        <SectionLabel index="→" title="From the day" />
        <div className="mt-10">
          <ActivityGallery
            images={activity.images}
            title={activity.title}
            portrait={activity.portraitGallery === true}
          />
        </div>
      </div>

      {/* Next entry */}
      <footer className="border-t border-line">
        <Link
          href={`/activities/${next.slug}`}
          className="group mx-auto flex max-w-shell flex-wrap items-baseline justify-between gap-6 px-5 py-14 sm:px-8 md:py-20"
        >
          <div>
            <p className="font-mono text-2xs uppercase tracking-index text-haze">
              Next entry
            </p>
            <p className="mt-3 font-display text-3xl font-medium tracking-tight text-ink transition-colors group-hover:text-cobalt sm:text-4xl">
              {next.title}
            </p>
          </div>
          <ArrowLong className="h-4 w-10 text-ink transition-all duration-300 ease-swift group-hover:translate-x-2 group-hover:text-cobalt" />
        </Link>
      </footer>
    </article>
  );
}
