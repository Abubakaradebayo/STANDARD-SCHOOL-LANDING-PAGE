import Link from "next/link";
import { ArrowLong } from "@/components/graphics/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-shell flex-col items-start justify-center px-5 pt-24 sm:px-8">
      <p className="glyph-outline font-display text-[9rem] font-semibold leading-none sm:text-[13rem]">
        404
      </p>
      <h1 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        This page skipped class.
      </h1>
      <p className="mt-3 max-w-md leading-relaxed text-haze">
        The page you requested does not exist or has been moved. Let&rsquo;s get you back to the
        school gate.
      </p>
      <Link
        href="/"
        className="group mt-10 inline-flex items-center gap-3 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-cobalt"
      >
        <ArrowLong className="h-3 w-8 rotate-180 transition-transform duration-300 ease-swift group-hover:-translate-x-1.5" />
        Return home
      </Link>
    </div>
  );
}
