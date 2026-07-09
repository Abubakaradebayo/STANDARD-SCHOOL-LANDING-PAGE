import type { Metadata } from "next";
import { ActivitiesList } from "@/components/activities/activities-list";
import { PageIntro } from "@/components/layout/page-intro";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Campus Life",
  description: `Latest activities and school news from ${schoolInfo.name}.`,
};

export default function ActivitiesPage() {
  return (
    <div>
      <PageIntro
        index="04"
        eyebrow="Campus life"
        title={
          <>
            The archive of <em className="text-cobalt">school days.</em>
          </>
        }
        lede="Assemblies, excursions, cultural days, sport: the unposed record of life at Standard Schools, updated term by term."
      />
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 md:py-24">
        <ActivitiesList />
      </div>
    </div>
  );
}
