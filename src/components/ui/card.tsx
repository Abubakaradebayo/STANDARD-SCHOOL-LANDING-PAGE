import * as React from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "glass" | "elevated" | "dark";

const variantStyles: Record<CardVariant, string> = {
  default: "bg-white/80 backdrop-blur-sm ring-1 ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.05)]",
  glass: "backdrop-blur-xl bg-white/60 ring-1 ring-white/15",
  elevated:
    "bg-white ring-1 ring-black/5 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_28px_-8px_rgba(0,0,0,0.12)] hover:ring-black/10",
  dark: "bg-[var(--navy-900)] ring-1 ring-white/[0.06] text-white hover:ring-[var(--gold)]/20",
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-200 ease-out",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("text-lg font-semibold text-[var(--text)]", className)} {...props} />;
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm leading-6 text-[var(--muted)]", className)} {...props} />;
}
