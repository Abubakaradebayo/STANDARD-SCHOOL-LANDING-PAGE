import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "gold" | "outlined";

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[var(--accent)] text-[var(--brand-dark)]",
  gold: "bg-[var(--gold)]/15 text-[var(--gold-dark)] border border-[var(--gold)]/30",
  outlined: "bg-transparent border border-[var(--border)] text-[var(--muted)]",
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
