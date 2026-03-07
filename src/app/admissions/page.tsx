import type { Metadata } from "next";
import {
  Phone,
  FileText,
  FolderOpen,
  UserCheck,
  CheckCircle2,
  Download,
  MessageCircle,
} from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Admission process and requirements for ${schoolInfo.name}.`,
};

const steps = [
  {
    step: 1,
    title: "Contact Admissions",
    desc: "Reach out via call or WhatsApp to express interest.",
    icon: Phone,
  },
  {
    step: 2,
    title: "Submit Application",
    desc: "Complete and submit the admission form.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Provide Documents",
    desc: "Submit all required documents to the office.",
    icon: FolderOpen,
  },
  {
    step: 4,
    title: "Screening",
    desc: "Attend screening or interview if applicable.",
    icon: UserCheck,
  },
  {
    step: 5,
    title: "Admission Decision",
    desc: "Receive admission decision and fee schedule.",
    icon: CheckCircle2,
  },
];

const requirements = [
  "Completed admission form",
  "Birth certificate",
  "Two recent passport photographs",
  "Last school report/result",
  "Transfer certificate (if applicable)",
];

export default function AdmissionsPage() {
  return (
    <div>
      <PageHero
        title="Admissions"
        description="Simple and parent-friendly admission process. We keep enrollment straightforward."
        breadcrumbs={[{ label: "Admissions" }]}
      />

      <div className="mx-auto w-full max-w-6xl space-y-20 px-4 py-16 md:px-6">
        {/* Timeline Steps */}
        <section data-animate>
          <SectionHeading
            eyebrow="Process"
            title="How to apply"
            description="Five straightforward steps to enroll your child."
          />
          <div className="mt-10 relative">
            {/* Vertical connecting line */}
            <div className="absolute left-6 top-0 bottom-0 hidden w-0.5 bg-gradient-to-b from-[var(--gold)] to-[var(--gold-light)] md:block" />
            <div className="space-y-6">
              {steps.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="relative flex gap-6 md:pl-0"
                    data-animate="soft"
                    data-delay={String(i + 1)}
                  >
                    {/* Step number circle */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-[var(--navy-950)] font-bold ring-4 ring-[var(--gold)]/20">
                      {item.step}
                    </div>
                    <Card variant="elevated" className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand)]/8 text-[var(--brand)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-base">{item.title}</CardTitle>
                          <CardDescription className="mt-1">{item.desc}</CardDescription>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section data-animate="soft">
          <SectionHeading
            eyebrow="Requirements"
            title="What you need"
            description="Prepare the following documents for a smooth enrollment."
          />
          <Card className="mt-6">
            <ul className="space-y-3">
              {requirements.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Download CTA */}
        <section data-animate>
          <Card variant="dark" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]" />
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <CardTitle className="text-xl text-white">Download Admission Form</CardTitle>
                <CardDescription className="mt-2 text-slate-400">
                  Get the form, fill it out, and submit in person at our office or send a
                  scan/photo via WhatsApp or email.
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="gold" href={schoolInfo.admissionsFormLink}>
                  <Download className="h-4 w-4" />
                  Download Form
                </Button>
                <Button variant="outline-white" href={`tel:${schoolInfo.phoneRaw}`}>
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
                <Button variant="outline-white" href={`https://wa.me/${schoolInfo.whatsappRaw}`}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
