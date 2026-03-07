"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { schoolInfo } from "@/content/school";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/activities", label: "Activities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        open
          ? "bg-[var(--navy-950)] border-b border-white/10"
          : scrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-[var(--border)]"
            : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-[var(--gold)]/40 bg-white">
            <Image
              src={schoolInfo.logo}
              alt={schoolInfo.logoAlt}
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </div>
          <div>
            <p
              className={cn(
                "font-heading text-sm font-bold transition-colors md:text-base",
                scrolled && !open ? "text-[var(--text)]" : "text-white",
              )}
            >
              {schoolInfo.name}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                "after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-200 hover:after:w-2/3",
                scrolled
                  ? "text-[var(--muted)] hover:text-[var(--text)]"
                  : "text-white/80 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            size="sm"
            variant={scrolled ? "outline" : "outline-white"}
            href={`tel:${schoolInfo.phoneRaw}`}
          >
            <Phone className="h-4 w-4" />
            Call
          </Button>
          <Button size="sm" variant="gold" href="/admissions">
            Apply Now
          </Button>
        </div>

        <button
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
            scrolled && !open
              ? "text-[var(--text)] hover:bg-[var(--surface)]"
              : "text-white hover:bg-white/10",
          )}
          onClick={() => setOpen((state) => !state)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 transition-all duration-300 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div className="absolute inset-0 bg-[var(--navy-950)]/95 backdrop-blur-xl" />
        <nav className="relative flex flex-col items-center justify-center gap-4 px-6 py-10">
          <div className="relative h-16 w-16 mb-2">
            <Image
              src={schoolInfo.logo}
              alt={schoolInfo.logoAlt}
              fill
              className="object-contain drop-shadow-lg"
              sizes="64px"
            />
          </div>
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-white/90 transition-colors hover:text-[var(--gold)]"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex gap-3">
            <Button size="sm" variant="outline-white" href={`tel:${schoolInfo.phoneRaw}`}>
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
            <Button size="sm" variant="gold" href="/admissions">
              Apply Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
