import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-[var(--border)] bg-white px-4 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:border-[var(--gold)]",
        className,
      )}
      {...props}
    />
  );
}
