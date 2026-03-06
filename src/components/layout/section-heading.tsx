import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, description, centered, dark }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl space-y-3", centered && "mx-auto text-center")}>
      {eyebrow ? (
        <Badge variant="gold" className="uppercase tracking-wider text-xs">
          {eyebrow}
        </Badge>
      ) : null}
      <h2
        className={cn(
          "font-heading text-3xl font-bold md:text-4xl",
          dark ? "text-white" : "text-[var(--text)]",
          centered ? "gold-underline-center" : "gold-underline",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("text-base", dark ? "text-slate-300" : "text-[var(--muted)]")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
