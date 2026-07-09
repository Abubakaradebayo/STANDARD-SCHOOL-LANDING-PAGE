import { Hero } from "@/components/home/hero";
import { ValuesMarquee } from "@/components/home/values-marquee";
import { Ethos } from "@/components/home/ethos";
import { Programs } from "@/components/home/programs";
import { CampusLife } from "@/components/home/campus-life";
import { StatsBand } from "@/components/home/stats-band";
import { ClassOf } from "@/components/home/class-of";
import { Testimonials } from "@/components/home/testimonials";
import { AdmissionsCta } from "@/components/home/admissions-cta";
import { FaqSection } from "@/components/home/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValuesMarquee />
      <Ethos />
      <Programs />
      <CampusLife />
      <StatsBand />
      <ClassOf />
      <Testimonials />
      <AdmissionsCta />
      <FaqSection />
    </>
  );
}
