export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-[var(--accent-soft)]" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[var(--brand)]" />
          <div className="absolute inset-[7px] animate-spin rounded-full border-4 border-transparent border-t-[var(--brand-dark)] [animation-direction:reverse] [animation-duration:1.3s]" />
        </div>
        <p className="text-sm font-semibold text-[var(--muted)]">Loading...</p>
      </div>
    </div>
  );
}
