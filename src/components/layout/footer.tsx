import Image from "next/image";
import Link from "next/link";
import { schoolInfo } from "@/content/school";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/activities", label: "Activities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const socialIcons = [
  { Icon: Facebook, href: schoolInfo.socialLinks[0].href, label: "Facebook" },
  { Icon: Instagram, href: schoolInfo.socialLinks[1].href, label: "Instagram" },
  { Icon: Youtube, href: schoolInfo.socialLinks[2].href, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="relative">
      {/* Gold accent top border */}
      <div className="h-1 bg-gradient-to-r from-[var(--gold-dark)] via-[var(--gold)] to-[var(--gold-light)]" />

      <div className="gradient-navy text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-6">
          {/* Logo & Description */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[var(--gold)]/40">
                <Image
                  src={schoolInfo.logo}
                  alt={schoolInfo.logoAlt}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <p className="font-heading text-lg font-bold text-white">{schoolInfo.name}</p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {schoolInfo.description}
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">Quick Links</p>
            <div className="flex flex-col gap-2 text-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 transition-colors hover:text-[var(--gold)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">Contact</p>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span>{schoolInfo.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <div className="flex flex-col gap-1">
                  {schoolInfo.phoneNumbers.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      className="hover:text-[var(--gold)] transition-colors"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <a
                  href={`mailto:${schoolInfo.email}`}
                  className="hover:text-[var(--gold)] transition-colors break-all"
                >
                  {schoolInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* School Values */}
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--gold)]">Our Motto</p>
            <p className="font-heading text-lg italic text-slate-300">
              &ldquo;{schoolInfo.slogan}&rdquo;
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Building confident learners with strong academics, character, and community values since day one.
            </p>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="border-t border-slate-800 bg-[var(--navy-950)]">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-4 py-4 md:px-6">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {schoolInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
