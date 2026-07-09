"use client";

import { useState, type FormEvent } from "react";
import { ArrowLong } from "@/components/graphics/icons";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border-b border-line bg-transparent pb-3 pt-2 text-ink outline-none transition-colors placeholder:text-haze/60 focus:border-cobalt";

const labelClass = "font-mono text-2xs uppercase tracking-index text-haze";

/** Hairline enquiry form posting to the school's /api/contact route. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("The message could not be sent.");
      }
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again, or reach us by phone or WhatsApp.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-9" aria-label="Send the school a message">
      <div className="grid gap-9 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="0800 000 0000"
            className={fieldClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="How can we help your family?"
          className={cn(fieldClass, "resize-none")}
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-cobalt disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <ArrowLong className="h-3 w-8" />
        </button>
        <p aria-live="polite" className="text-sm">
          {status === "sent" && (
            <span className="text-cobalt">Thank you. We&rsquo;ll reply within 24 hours.</span>
          )}
          {status === "error" && <span className="text-brass">{error}</span>}
        </p>
      </div>
    </form>
  );
}
