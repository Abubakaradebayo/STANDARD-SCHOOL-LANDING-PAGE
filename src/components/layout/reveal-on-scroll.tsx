"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let rafId = 0;

    const setup = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate]"));
      if (elements.length === 0) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      );

      elements.forEach((el) => observer?.observe(el));
    };

    // Wait one frame after route change so newly rendered page elements are in the DOM.
    rafId = window.requestAnimationFrame(setup);

    return () => {
      window.cancelAnimationFrame(rafId);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
