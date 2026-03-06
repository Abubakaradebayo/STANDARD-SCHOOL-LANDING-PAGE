import * as React from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "glass" | "elevated" | "dark";

const variantStyles: Record<CardVariant, string> = {
  default: "bg-white border border-[var(--border)] shadow-sm",
  glass: "backdrop-blur-xl bg-white/80 border border-white/20 shadow-sm",
  elevated: "bg-white border border-[var(--border)] shadow-md hover:-translate-y-1 hover:shadow-xl",
  dark: "bg-[var(--navy-900)] border border-[var(--navy-800)] text-white",
};

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
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
