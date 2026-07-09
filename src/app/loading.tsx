import { Seal } from "@/components/graphics/seal";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper">
      <div className="flex flex-col items-center gap-5">
        <Seal className="h-24 w-24 text-navy" />
        <p className="font-mono text-2xs uppercase tracking-seal text-haze">Loading</p>
      </div>
    </div>
  );
}
