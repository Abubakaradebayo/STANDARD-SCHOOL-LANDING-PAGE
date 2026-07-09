"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryImages, type GalleryCategory } from "@/content/gallery";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/gallery/lightbox";

export function GalleryGrid() {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "All") return galleryImages;
    return galleryImages.filter((image) => image.category === category);
  }, [category]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-x-7 gap-y-3 border-b border-line pb-8"
        role="group"
        aria-label="Filter photographs"
      >
        {galleryCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setCategory(item);
              setActive(null);
            }}
            aria-pressed={category === item}
            className={cn(
              "font-mono text-2xs uppercase tracking-index transition-colors",
              category === item
                ? "text-cobalt underline underline-offset-8"
                : "text-haze hover:text-ink"
            )}
          >
            {item}
          </button>
        ))}
        <span className="ml-auto font-mono text-2xs tracking-index text-haze">
          {String(filtered.length).padStart(2, "0")} photographs
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-10 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {filtered.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Open photograph: ${image.alt}`}
            className="group relative aspect-[4/3] w-full overflow-hidden border border-line"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 22vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 ease-swift group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-full bg-midnight/85 px-3 py-2 text-left font-mono text-2xs uppercase tracking-index text-paper transition-transform duration-300 ease-swift group-hover:translate-y-0">
              {image.alt}
            </span>
          </button>
        ))}
      </div>

      <Lightbox images={filtered} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </div>
  );
}
