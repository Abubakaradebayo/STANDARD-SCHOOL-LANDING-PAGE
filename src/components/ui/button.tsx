import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline" | "ghost" | "gold" | "outline-white";
type ButtonSize = "default" | "sm" | "lg" | "xl" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] shadow-sm hover:shadow-md",
  secondary: "bg-[var(--accent)] text-[var(--text)] hover:bg-[var(--accent-soft)]",
  outline:
    "border border-[var(--border)] bg-white text-[var(--text)] hover:bg-[var(--surface)] hover:border-[var(--brand)]",
  ghost: "bg-transparent text-[var(--text)] hover:bg-[var(--accent)]",
  gold: "bg-[var(--gold)] text-[var(--navy-950)] hover:bg-[var(--gold-dark)] shadow-sm hover:shadow-md font-semibold",
  "outline-white":
    "border-2 border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white/70",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-5 text-sm",
  sm: "h-9 px-3 text-sm",
  lg: "h-12 px-6 text-base",
  xl: "h-14 px-8 text-base font-semibold",
  icon: "h-10 w-10",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
