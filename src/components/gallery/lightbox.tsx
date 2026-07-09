"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLong, MarkPlus } from "@/components/graphics/icons";

export type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (next: number) => void;
};

/** Full-screen viewer shared by the gallery and activity pages. */
export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null;

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (index === null) return;
      if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    }

    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, index, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col justify-center bg-midnight/95 p-5 backdrop-blur-sm sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={images[index].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between pb-5" onClick={(e) => e.stopPropagation()}>
            <p className="font-mono text-xs tracking-index text-sky">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close viewer"
              className="text-paper transition-colors hover:text-gold"
            >
              <MarkPlus className="h-5 w-5 rotate-45" />
            </button>
          </div>

          <div
            className="relative min-h-0 flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div
            className="flex items-center justify-between pt-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => onNavigate((index - 1 + images.length) % images.length)}
              aria-label="Previous photo"
              className="p-2 text-paper transition-colors hover:text-gold"
            >
              <ArrowLong className="h-3.5 w-9 rotate-180" />
            </button>
            <p className="max-w-md truncate px-4 text-center font-mono text-2xs uppercase tracking-index text-sky/70">
              {images[index].alt}
            </p>
            <button
              type="button"
              onClick={() => onNavigate((index + 1) % images.length)}
              aria-label="Next photo"
              className="p-2 text-paper transition-colors hover:text-gold"
            >
              <ArrowLong className="h-3.5 w-9" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
