import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { PageIntro } from "@/components/layout/page-intro";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photo gallery for ${schoolInfo.name} school activities and events.`,
};

export default function GalleryPage() {
  return (
    <div>
      <PageIntro
        index="05"
        eyebrow="Gallery"
        title={
          <>
            Proof, in <em className="text-cobalt">photographs.</em>
          </>
        }
        lede="Moments from school life across events, classrooms, and the sports field. Filter by category; open any photograph to view it full-screen."
      />
      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 md:py-24">
        <GalleryGrid />
      </div>
    </div>
  );
}
