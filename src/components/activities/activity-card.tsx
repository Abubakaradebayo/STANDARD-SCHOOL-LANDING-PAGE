import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ActivityPost } from "@/content/activities";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

export function ActivityCard({ activity }: { activity: ActivityPost }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/activities/${activity.slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={activity.coverImage}
            alt={activity.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-950)]/60 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <Badge variant="gold" className="text-xs">
              {activity.category}
            </Badge>
          </div>
        </div>
      </Link>
      <div className="space-y-2 p-5">
        <p className="text-xs text-[var(--muted)]">{formatDate(activity.date)}</p>
        <h3 className="text-base font-semibold text-[var(--text)] line-clamp-2">
          {activity.title}
        </h3>
        <p className="text-sm text-[var(--muted)] line-clamp-2">{activity.excerpt}</p>
        <Link
          href={`/activities/${activity.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] transition-colors hover:text-[var(--brand-dark)]"
        >
          Read more <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}
