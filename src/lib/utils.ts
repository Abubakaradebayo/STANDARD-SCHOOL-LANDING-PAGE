export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: string) {
  // Parse as UTC date-only to keep server/client rendering identical.
  const normalized = new Date(`${date}T00:00:00.000Z`);

  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(normalized);
}
