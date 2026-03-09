"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { galleryCategories, galleryImages } from "@/content/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("All");
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (category === "All") return galleryImages;
    return galleryImages.filter((image) => image.category === category);
  }, [category]);

  const goNext = () => {
    if (activeImage === null) return;
    setActiveImage((activeImage + 1) % filtered.length);
  };

  const goPrev = () => {
    if (activeImage === null) return;
    setActiveImage((activeImage - 1 + filtered.length) % filtered.length);
  };

  return (
    <>
      {/* Category filter pills */}
      <div className="mb-8 flex flex-wrap gap-2">
        {galleryCategories.map((item) => (
          <button
            key={item}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              category === item
                ? "bg-[var(--gold)] text-[var(--navy-950)]"
                : "bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--accent)] border border-[var(--border)]",
            )}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            onClick={() => setActiveImage(index)}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={420}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--navy-950)]/0 transition-all duration-300 group-hover:bg-[var(--navy-950)]/40">
              <Expand className="h-6 w-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeImage !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--navy-950)]/90 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Image
              src={filtered[activeImage].src}
              alt={filtered[activeImage].alt}
              width={1200}
              height={850}
              className="max-h-[80vh] w-full rounded-xl object-contain"
              sizes="100vw"
              priority
            />
            <p className="mt-2 text-center text-sm text-slate-400">
              {activeImage + 1} / {filtered.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
