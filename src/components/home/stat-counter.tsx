"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: string;
  className?: string;
};

function parseValue(value: string) {
  const numeric = Number.parseInt(value.replace(/[^\d]/g, ""), 10);
  const suffix = value.replace(/[\d]/g, "");

  return {
    number: Number.isNaN(numeric) ? 0 : numeric,
    suffix,
  };
}

export function StatCounter({ value, className }: StatCounterProps) {
  const { number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (number <= 0) {
      setDisplay(0);
      return;
    }

    let frame = 0;
    let startTime = 0;
    const duration = 1200;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(number * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [number, started]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
