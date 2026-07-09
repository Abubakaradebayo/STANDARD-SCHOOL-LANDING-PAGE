import { schoolInfo } from "@/content/school";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { ArrowDiagonal } from "@/components/graphics/icons";

const steps = [
  { index: "01", title: "Enquire", detail: "Call, WhatsApp, or visit the front office." },
  { index: "02", title: "Tour the campus", detail: "See the classrooms, meet the teachers." },
  { index: "03", title: "Assessment", detail: "A gentle placement exercise for your child." },
  { index: "04", title: "Enrol", detail: "Complete the form and join the school family." },
];

/** Admissions band - navy ground, the four steps set as a ledger. */
export function AdmissionsCta() {
  return (
    <section className="bg-navy py-24 text-paper md:py-32" aria-labelledby="admissions-cta-heading">
      <div className="mx-auto grid max-w-shell gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-seal text-gold">
              Admissions are open
            </p>
            <h2
              id="admissions-cta-heading"
              className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.9rem]"
            >
              Four steps between your child and a{" "}
              <em className="text-gold">Standard</em> education.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-sky">
              Intake runs every term, with the major intake before September resumption. Start
              early. Places in the early years fill fastest.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={schoolInfo.admissionsFormLink}
                download
                className="inline-flex items-center gap-3 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-navy transition-colors duration-300 hover:bg-gold"
              >
                Download admission form
                <ArrowDiagonal className="h-3 w-3" />
              </a>
              <a
                href={`https://wa.me/${schoolInfo.whatsappRaw}`}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs uppercase tracking-index text-sky underline-offset-8 hover:text-paper hover:underline"
              >
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="lg:col-span-5 lg:col-start-8">
          <ul>
            {steps.map((step) => (
              <RevealItem key={step.index}>
                <li className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-royal py-6 first:border-t">
                  <span className="font-mono text-xs text-gold">{step.index}</span>
                  <div>
                    <h3 className="font-display text-2xl font-medium">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-sky">{step.detail}</p>
                  </div>
                </li>
              </RevealItem>
            ))}
          </ul>
        </RevealGroup>
      </div>
    </section>
  );
}
