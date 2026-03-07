"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

type ActivityGalleryProps = {
  images: string[];
  title: string;
};

export function ActivityGallery({ images, title }: ActivityGalleryProps) {
  const [active, setActive] = useState<number | null>(null);

  const goNext = () => {
    if (active === null) return;
    setActive((active + 1) % images.length);
  };

  const goPrev = () => {
    if (active === null) return;
    setActive((active - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl"
            onClick={() => setActive(index)}
            aria-label={`Open ${title} image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`${title} image ${index + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--navy-950)]/0 transition group-hover:bg-[var(--navy-950)]/40">
              <Expand className="h-5 w-5 text-white opacity-0 transition group-hover:opacity-100" />
            </div>
          </button>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--navy-950)]/90 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <button
              onClick={() => setActive(null)}
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
              src={images[active]}
              alt={`${title} image ${active + 1}`}
              width={1200}
              height={850}
              className="max-h-[80vh] w-full rounded-xl object-contain"
              sizes="100vw"
            />
            <p className="mt-2 text-center text-sm text-slate-400">
              {active + 1} / {images.length}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
