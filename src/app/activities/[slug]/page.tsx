import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { activities, getActivityBySlug } from "@/content/activities";
import { formatDate } from "@/lib/utils";
import { ActivityGallery } from "@/components/activities/activity-gallery";
import { Badge } from "@/components/ui/badge";

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

export default async function ActivityDetailPage({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  return (
    <div>
      {/* Full-width cover image */}
      <section className="relative h-[50vh] min-h-[320px] md:h-[60vh]">
        <Image
          src={activity.coverImage}
          alt={activity.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-950)]/90 via-[var(--navy-950)]/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-4 pb-10 md:px-6">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to activities
            </Link>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="gold" className="text-xs">
                <Tag className="h-3 w-3 mr-1" />
                {activity.category}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-slate-300">
                <Calendar className="h-3 w-3" />
                {formatDate(activity.date)}
              </span>
            </div>
            <h1 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {activity.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-300">{activity.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto w-full max-w-4xl px-4 py-12 md:px-6">
        <div className="space-y-5 text-[var(--muted)]" data-animate>
          {activity.content.map((paragraph) => (
            <p key={paragraph} className="text-base leading-7">
              {paragraph}
            </p>
          ))}
        </div>

        <section className="mt-12" data-animate="soft">
          <h2 className="font-heading text-xl font-bold gold-underline">More photos</h2>
          <div className="mt-6">
            <ActivityGallery images={activity.images} title={activity.title} />
          </div>
        </section>
      </article>
    </div>
  );
}
