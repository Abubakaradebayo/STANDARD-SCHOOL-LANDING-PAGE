"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Phase = "idle" | "loading" | "done";

export function RouteLoader() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;

    setPhase("loading");
    const done = window.setTimeout(() => setPhase("done"), 300);
    const idle = window.setTimeout(() => setPhase("idle"), 600);
    return () => {
      window.clearTimeout(done);
      window.clearTimeout(idle);
    };
  }, [pathname]);

  if (phase === "idle") return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9998] h-[3px]">
      <div
        className={`h-full bg-gradient-to-r from-[var(--brand)] via-[var(--gold)] to-[var(--brand)] transition-all ease-out ${
          phase === "loading"
            ? "w-[70%] duration-300"
            : "w-full duration-200 opacity-0"
        }`}
      />
    </div>
  );
}
