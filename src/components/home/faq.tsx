import { ChevronDown } from "lucide-react";
import { faqItems } from "@/content/school";
import { SectionHeading } from "@/components/layout/section-heading";

export function FAQSection() {
  return (
    <section className="section-light py-20">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from parents"
          description="Quick answers about admission, fees, location, and resumption."
          centered
        />
        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-[var(--border)] bg-white transition-all open:border-l-4 open:border-l-[var(--gold)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-5 font-medium text-[var(--text)]">
                <span>{item.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform duration-200 group-open:rotate-180 group-open:text-[var(--gold)]" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
