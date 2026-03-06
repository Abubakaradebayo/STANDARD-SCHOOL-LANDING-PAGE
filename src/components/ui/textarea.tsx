import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[130px] w-full rounded-xl border border-[var(--border)] bg-white p-4 text-sm text-[var(--text)] placeholder:text-[var(--muted)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:border-[var(--gold)]",
        className,
      )}
      {...props}
    />
  );
}
