import type { ReactNode } from "react";
import { SectionLabel } from "@/components/layout/section-label";
import { Reveal } from "@/components/motion/reveal";

type PageIntroProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
};

/** Editorial opening spread shared by every interior page. */
export function PageIntro({ index, eyebrow, title, lede }: PageIntroProps) {
  return (
    <header className="mx-auto max-w-shell px-5 pt-32 sm:px-8 md:pt-40">
      <SectionLabel index={index} title={eyebrow} />
      <div className="grid gap-10 py-14 md:py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <h1 className="font-display text-4xl font-medium leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={0.1} className="lg:col-span-4 lg:self-end">
            <p className="max-w-md leading-relaxed text-haze">{lede}</p>
          </Reveal>
        ) : null}
      </div>
      <div className="border-b border-line" aria-hidden="true" />
    </header>
  );
}
