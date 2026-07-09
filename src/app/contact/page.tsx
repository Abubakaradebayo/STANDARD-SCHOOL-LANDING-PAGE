import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { SectionLabel } from "@/components/layout/section-label";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { ArrowDiagonal } from "@/components/graphics/icons";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${schoolInfo.name} admissions and school office.`,
};

export default function ContactPage() {
  return (
    <div>
      <PageIntro
        index="06"
        eyebrow="Contact"
        title={
          <>
            The gate is <em className="text-cobalt">always open.</em>
          </>
        }
        lede="Call, WhatsApp, write, or visit. The front office replies within a school day."
      />

      <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Details ledger */}
          <div className="lg:col-span-5">
            <Reveal>
              <dl>
                <div className="border-b border-line py-6 first:border-t">
                  <dt className="font-mono text-2xs uppercase tracking-index text-brass">
                    Telephone
                  </dt>
                  <dd className="mt-3 space-y-1.5">
                    {schoolInfo.phoneNumbers.map((phone) => (
                      <a
                        key={phone.raw}
                        href={`tel:${phone.raw}`}
                        className="block font-display text-xl text-ink transition-colors hover:text-cobalt sm:text-2xl"
                      >
                        {phone.display}
                      </a>
                    ))}
                  </dd>
                </div>
                <div className="border-b border-line py-6">
                  <dt className="font-mono text-2xs uppercase tracking-index text-brass">
                    Email
                  </dt>
                  <dd className="mt-3">
                    <a
                      href={`mailto:${schoolInfo.email}`}
                      className="break-all font-display text-xl text-ink transition-colors hover:text-cobalt sm:text-2xl"
                    >
                      {schoolInfo.email}
                    </a>
                  </dd>
                </div>
                <div className="border-b border-line py-6">
                  <dt className="font-mono text-2xs uppercase tracking-index text-brass">
                    Address
                  </dt>
                  <dd className="mt-3">
                    <p className="font-display text-xl leading-snug text-ink sm:text-2xl">
                      {schoolInfo.address}
                    </p>
                    <a
                      href={schoolInfo.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cobalt hover:text-cobalt-bright"
                    >
                      Open in Maps
                      <ArrowDiagonal className="h-3 w-3" />
                    </a>
                  </dd>
                </div>
                <div className="border-b border-line py-6">
                  <dt className="font-mono text-2xs uppercase tracking-index text-brass">
                    Office hours
                  </dt>
                  <dd className="mt-3 space-y-1 text-ink">
                    <p className="font-display text-xl sm:text-2xl">Mon – Fri, 7:30am – 4:00pm</p>
                    <p className="text-sm text-haze">Saturdays by appointment</p>
                  </dd>
                </div>
              </dl>
              <a
                href={`https://wa.me/${schoolInfo.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:border-cobalt hover:text-cobalt"
              >
                Chat on WhatsApp
                <ArrowDiagonal className="h-3 w-3" />
              </a>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <SectionLabel index="→" title="Write to us" />
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Map */}
        <Reveal className="mt-20 md:mt-28">
          <div className="border border-line p-2">
            <iframe
              title="Standard Schools, Ilorin location map"
              src="https://maps.google.com/maps?q=Plot%2017%20Block%20TPS%20235%20Mandate%20Area%20Ilorin%20Kwara%20State&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
