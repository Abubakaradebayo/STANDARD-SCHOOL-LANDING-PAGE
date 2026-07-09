import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/content/navigation";
import { schoolInfo, coreValues } from "@/content/school";
import { ArrowDiagonal } from "@/components/graphics/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-paper">
      {/* Invitation band */}
      <div className="mx-auto max-w-shell px-5 pb-16 pt-20 sm:px-8 md:pb-24 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="font-mono text-xs uppercase tracking-seal text-brass">
              Begin the conversation
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.06] sm:text-5xl lg:text-6xl">
              Give your child a<br />
              <em className="text-gold">standard</em> worth keeping.
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-midnight transition-colors duration-300 hover:bg-gold"
              >
                Start admission
                <ArrowDiagonal className="h-3 w-3" />
              </Link>
              <a
                href={`tel:${schoolInfo.phoneRaw}`}
                className="font-mono text-sm tracking-widest text-sky underline-offset-8 hover:text-paper hover:underline"
              >
                {schoolInfo.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-5 md:pt-3">
            <nav aria-label="Footer">
              <p className="font-mono text-xs uppercase tracking-index text-sky/60">Explore</p>
              <ul className="mt-5 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/85 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="font-mono text-xs uppercase tracking-index text-sky/60">Visit us</p>
              <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-paper/85">
                <p>{schoolInfo.address}</p>
                <p>
                  <a href={`mailto:${schoolInfo.email}`} className="break-all hover:text-gold">
                    {schoolInfo.email}
                  </a>
                </p>
                <ul className="space-y-1 font-mono text-xs tracking-widest text-sky">
                  {schoolInfo.phoneNumbers.map((phone) => (
                    <li key={phone.raw}>
                      <a href={`tel:${phone.raw}`} className="hover:text-paper">
                        {phone.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Values rule */}
      <div className="border-y border-white/10">
        <div className="mx-auto flex max-w-shell flex-wrap gap-x-8 gap-y-2 px-5 py-5 sm:px-8">
          {coreValues.map((value) => (
            <span
              key={value}
              className="font-mono text-2xs uppercase tracking-seal text-sky/50"
            >
              {value}
            </span>
          ))}
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="overflow-hidden">
        <p
          aria-hidden="true"
          className="mx-auto max-w-shell select-none px-5 pt-6 text-center font-display text-[13vw] font-semibold uppercase leading-[0.82] tracking-tight text-paper/[0.07] sm:px-8"
        >
          Standard
        </p>
      </div>

      {/* Base bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-shell flex-col items-start justify-between gap-4 px-5 py-6 text-xs text-sky/60 sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src={schoolInfo.logo}
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px] object-contain opacity-80"
            />
            <span>
              © {year} {schoolInfo.name}. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            {schoolInfo.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-paper"
              >
                {social.label.split(" (")[0]}
              </a>
            ))}
            <span className="text-sky/40">Made in Ilorin</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
