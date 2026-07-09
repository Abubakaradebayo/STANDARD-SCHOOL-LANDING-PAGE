import { cn } from "@/lib/utils";

type SectionLabelProps = {
  index: string;
  title: string;
  dark?: boolean;
  className?: string;
};

/** Chapter marker: brass index, mono title, trailing hairline. */
export function SectionLabel({ index, title, dark = false, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="font-mono text-xs tracking-index text-brass">{index}</span>
      <span
        className={cn(
          "font-mono text-xs uppercase tracking-index",
          dark ? "text-sky" : "text-haze"
        )}
      >
        {title}
      </span>
      <span aria-hidden="true" className={cn("h-px flex-1", dark ? "bg-white/15" : "bg-line")} />
    </div>
  );
}
