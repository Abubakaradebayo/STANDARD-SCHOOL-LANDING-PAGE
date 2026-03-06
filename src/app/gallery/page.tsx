import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageHero } from "@/components/layout/page-hero";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photo gallery for ${schoolInfo.name} school activities and events.`,
};

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        title="Gallery"
        description="Moments from school life. Filter by category and tap any image to view."
        breadcrumbs={[{ label: "Gallery" }]}
        backgroundImage="/images/activities/cultural-day/IMG_2226.JPG"
      />
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6">
        <GalleryGrid />
      </div>
    </div>
  );
}
