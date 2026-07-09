import { cn } from "@/lib/utils";
import { MarkStar } from "@/components/graphics/icons";

type SealProps = {
  className?: string;
};

/** Slow-rotating circular wordmark - the school's editorial seal. */
export function Seal({ className }: SealProps) {
  return (
    <div className={cn("relative", className)} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full animate-seal">
        <defs>
          <path
            id="seal-circle"
            d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="10.5"
          letterSpacing="3.2"
          style={{ fontFamily: "var(--font-archive)" }}
        >
          <textPath href="#seal-circle">STANDARD SCHOOLS · ILORIN · SINCE 2010 ·</textPath>
        </text>
      </svg>
      <MarkStar className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
