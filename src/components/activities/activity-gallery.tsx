"use client";

import { useState } from "react";
import Image from "next/image";
import { Lightbox } from "@/components/gallery/lightbox";

type ActivityGalleryProps = {
  images: string[];
  title: string;
  /** Portrait tiles for 2:3 graphics (graduand cards) so nothing gets cropped. */
  portrait?: boolean;
};

export function ActivityGallery({ images, title, portrait = false }: ActivityGalleryProps) {
  const [active, setActive] = useState<number | null>(null);
  const items = images.map((src, i) => ({ src, alt: `${title}, photo ${i + 1}` }));

  return (
    <>
      <div
        className={
          portrait
            ? "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
            : "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
        }
      >
        {items.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActive(index)}
            className={`group relative w-full overflow-hidden border border-line ${
              portrait ? "aspect-[2/3]" : "aspect-[4/3]"
            }`}
            aria-label={`Open ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={portrait ? "(min-width: 768px) 22vw, 50vw" : "(min-width: 768px) 33vw, 50vw"}
              className="object-cover transition-transform duration-500 ease-swift group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      <Lightbox images={items} index={active} onClose={() => setActive(null)} onNavigate={setActive} />
    </>
  );
}
