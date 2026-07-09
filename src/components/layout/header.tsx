"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { navLinks } from "@/content/navigation";
import { schoolInfo } from "@/content/school";
import { Magnetic } from "@/components/motion/magnetic";
import { ArrowDiagonal } from "@/components/graphics/icons";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24));

  // Lock scroll while the overlay is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-cobalt px-5 py-2.5 text-sm font-medium text-white transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          open
            ? "bg-transparent"
            : scrolled
              ? "border-b border-line bg-paper/90 backdrop-blur-md"
              : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-18 max-w-shell items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
            aria-label="Standard Schools, Ilorin home"
          >
            <Image
              src={schoolInfo.logo}
              alt=""
              width={38}
              height={38}
              className="h-9 w-9 object-contain"
              priority
            />
            <span className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-display text-base font-semibold uppercase tracking-wide transition-colors duration-500 sm:text-lg",
                  open ? "text-paper" : "text-ink"
                )}
              >
                Standard Schools, Ilorin
              </span>
              <span
                className={cn(
                  "mt-1 font-mono text-2xs uppercase tracking-seal transition-colors duration-500",
                  open ? "text-sky" : "text-haze"
                )}
              >
                Knowledge is power
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative text-sm font-medium transition-colors",
                    open ? "text-paper" : active ? "text-cobalt" : "text-ink hover:text-cobalt"
                  )}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-current transition-all duration-300 ease-swift",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Magnetic className="hidden sm:block">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full bg-cobalt px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-cobalt-bright"
              >
                Enrol now
                <ArrowDiagonal className="h-3 w-3" />
              </Link>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              className={cn(
                "flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden",
                open ? "text-paper" : "text-ink"
              )}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span
                aria-hidden="true"
                className={cn(
                  "h-px w-6 bg-current transition-transform duration-300 ease-swift",
                  open && "translate-y-[3.5px] rotate-45"
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "h-px w-6 bg-current transition-transform duration-300 ease-swift",
                  open && "-translate-y-[3.5px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between gap-10 overflow-y-auto bg-midnight px-5 pb-10 pt-28 sm:px-8"
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav aria-label="Menu">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: EASE }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                    >
                      <span className="font-mono text-xs tracking-index text-brass">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-4xl font-medium text-paper transition-colors group-hover:text-gold sm:text-5xl">
                        {link.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.div
              className="flex flex-col gap-2 font-mono text-xs uppercase tracking-index text-sky"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a href={`tel:${schoolInfo.phoneRaw}`} className="hover:text-paper">
                {schoolInfo.phoneDisplay}
              </a>
              <a href={`mailto:${schoolInfo.email}`} className="normal-case hover:text-paper">
                {schoolInfo.email}
              </a>
              <span className="normal-case text-sky/70">{schoolInfo.address}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
