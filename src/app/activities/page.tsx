import type { Metadata } from "next";
import { ActivitiesList } from "@/components/activities/activities-list";
import { PageHero } from "@/components/layout/page-hero";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Activities",
  description: `Latest activities and school news from ${schoolInfo.name}.`,
};

export default function ActivitiesPage() {
  return (
    <div>
      <PageHero
        title="Activities"
        description="Search updates by title and filter by category."
        breadcrumbs={[{ label: "Activities" }]}
        backgroundImage="/images/activities/excursion/IMG_2241 2.JPG"
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <ActivitiesList />
      </div>
    </div>
  );
}
