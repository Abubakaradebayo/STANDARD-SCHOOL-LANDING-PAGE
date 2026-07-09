import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/page-intro";
import { SectionLabel } from "@/components/layout/section-label";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { FaqSection } from "@/components/home/faq";
import { ArrowDiagonal, MarkStar } from "@/components/graphics/icons";
import { schoolInfo } from "@/content/school";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Admission process and requirements for ${schoolInfo.name}.`,
};

const steps = [
  {
    index: "01",
    title: "Contact admissions",
    detail: "Reach out by call or WhatsApp to express interest, or simply visit the front office.",
  },
  {
    index: "02",
    title: "Submit the application",
    detail: "Download the admission form, complete it, and return it in person or by WhatsApp.",
  },
  {
    index: "03",
    title: "Provide documents",
    detail: "Bring the required documents to the school office for verification.",
  },
  {
    index: "04",
    title: "Screening",
    detail: "Your child attends a gentle placement exercise or interview where applicable.",
  },
  {
    index: "05",
    title: "Decision & enrolment",
    detail: "Receive the admission decision and fee schedule, then join the school family.",
  },
];

const requirements = [
  "Completed admission form",
  "Birth certificate",
  "Two recent passport photographs",
  "Last school report / result",
  "Transfer certificate (if applicable)",
];

export default function AdmissionsPage() {
  return (
    <div>
      <PageIntro
        index="03"
        eyebrow="Admissions"
        title={
          <>
            Five steps to a <em className="text-cobalt">Standard</em> education.
          </>
        }
        lede="Intake runs every term, with the major intake before September resumption. The process is simple and parent-friendly. Start it today."
      />

      {/* Process ledger */}
      <section className="mx-auto max-w-shell px-5 py-20 sm:px-8 md:py-28" aria-label="How to apply">
        <div className="grid gap-16 lg:grid-cols-12">
          <RevealGroup className="lg:col-span-7">
            <ol>
              {steps.map((step) => (
                <RevealItem key={step.index}>
                  <li className="grid grid-cols-[4rem_1fr] items-start gap-x-6 border-b border-line py-8 first:border-t">
                    <span className="font-display text-4xl font-medium text-brass sm:text-5xl">
                      {step.index}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                        {step.title}
                      </h2>
                      <p className="mt-2 max-w-xl leading-relaxed text-haze">{step.detail}</p>
                    </div>
                  </li>
                </RevealItem>
              ))}
            </ol>
          </RevealGroup>

          {/* Requirements - sticky aside */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <SectionLabel index="→" title="What you need" />
                <ul className="mt-8 space-y-4">
                  {requirements.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <MarkStar className="mt-1.5 h-3 w-3 shrink-0 text-brass" />
                      <span className="text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-haze">
                  Prepare these ahead of your visit for a smooth enrolment. The accounts office can
                  discuss flexible fee instalments after registration.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Download band */}
      <section className="bg-navy py-20 text-paper md:py-28" aria-labelledby="download-heading">
        <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-10 px-5 sm:px-8">
          <div className="max-w-xl">
            <h2
              id="download-heading"
              className="font-display text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl"
            >
              The form is <em className="text-gold">ready when you are.</em>
            </h2>
            <p className="mt-4 leading-relaxed text-sky">
              Download it, fill it out, and submit in person at our office, or send a scan or
              photo via WhatsApp or email.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={schoolInfo.admissionsFormLink}
              download
              className="inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-navy transition-colors duration-300 hover:bg-gold"
            >
              Download admission form
              <ArrowDiagonal className="h-3 w-3" />
            </a>
            <a
              href={`tel:${schoolInfo.phoneRaw}`}
              className="font-mono text-xs uppercase tracking-index text-sky underline-offset-8 hover:text-paper hover:underline"
            >
              {schoolInfo.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${schoolInfo.whatsappRaw}`}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-index text-sky underline-offset-8 hover:text-paper hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FaqSection index="04" />
    </div>
  );
}
