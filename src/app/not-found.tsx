import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 pt-20 text-center">
      <p className="text-7xl font-bold text-[var(--gold)]">404</p>
      <h1 className="mt-4 font-heading text-3xl font-bold text-[var(--text)]">Page not found</h1>
      <p className="mt-2 text-[var(--muted)]">
        The page you requested does not exist or has been moved.
      </p>
      <Button className="mt-6" href="/">
        <ArrowLeft className="h-4 w-4" />
        Return Home
      </Button>
    </div>
  );
}
