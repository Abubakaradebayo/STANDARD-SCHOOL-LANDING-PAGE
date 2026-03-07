import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${schoolInfo.name} admissions and school office.`,
};

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    lines: schoolInfo.phoneNumbers.map((p) => ({
      text: p.display,
      href: `tel:${p.raw}`,
    })),
  },
  {
    icon: Mail,
    title: "Email",
    lines: [{ text: schoolInfo.email, href: `mailto:${schoolInfo.email}` }],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [{ text: schoolInfo.address, href: schoolInfo.mapLink }],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: [
      { text: "Mon - Fri: 7:30 AM - 4:00 PM", href: undefined },
      { text: "Sat: By appointment", href: undefined },
    ],
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact Us"
        description="Call, WhatsApp, send a message, or get directions to the school."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <div className="mx-auto w-full max-w-6xl space-y-16 px-4 py-16 md:px-6">
        {/* Contact Info Cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-animate="soft">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                variant="elevated"
                className="text-center"
                data-animate="soft"
                data-delay={String(i + 1)}
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gold)]/8 text-[var(--gold-dark)]">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-3 text-base">{card.title}</CardTitle>
                <div className="mt-2 space-y-1 text-sm text-[var(--muted)]">
                  {card.lines.map((line) =>
                    line.href ? (
                      <a
                        key={line.text}
                        href={line.href}
                        className="block hover:text-[var(--brand)] transition-colors"
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={line.text}>{line.text}</p>
                    ),
                  )}
                </div>
              </Card>
            );
          })}
        </section>

        {/* Form + Map */}
        <section className="grid gap-8 lg:grid-cols-2" data-animate>
          {/* Form */}
          <Card variant="elevated">
            <CardTitle className="text-xl">Send us a message</CardTitle>
            <CardDescription className="mt-1">
              We&apos;ll get back to you within 24 hours.
            </CardDescription>
            <form
              className="mt-6 space-y-4"
              action="https://formspree.io/f/your-form-id"
              method="POST"
            >
              <Input name="name" placeholder="Full name" required />
              <Input name="phone" type="tel" placeholder="Phone number" required />
              <Input name="email" type="email" placeholder="Email address" required />
              <Textarea name="message" placeholder="How can we help you?" required />
              <Button type="submit" className="w-full">
                Send Message
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </Card>

          {/* Map + CTA Buttons */}
          <div className="space-y-4" data-animate="soft">
            <Card className="overflow-hidden p-0">
              <iframe
                title="School location map"
                src="https://maps.google.com/maps?q=Plot%2017%20Block%20TPS%20235%20Mandate%20Area%20Ilorin%20Kwara%20State&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
            <div className="grid grid-cols-3 gap-3">
              <Button href={`tel:${schoolInfo.phoneRaw}`} className="w-full">
                <Phone className="h-4 w-4" />
                Call
              </Button>
              <Button
                variant="secondary"
                href={`https://wa.me/${schoolInfo.whatsappRaw}`}
                className="w-full"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button variant="outline" href={schoolInfo.mapLink} className="w-full">
                <MapPin className="h-4 w-4" />
                Maps
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
