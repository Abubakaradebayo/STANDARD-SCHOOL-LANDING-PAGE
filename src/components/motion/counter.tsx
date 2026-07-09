"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

/** Animated numeral that counts up once it scrolls into view. */
export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();

  const raw = useMotionValue(0);
  const display = useTransform(raw, (v) => Math.round(v).toLocaleString("en-NG"));

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      raw.set(value);
      return;
    }
    const controls = animate(raw, value, { duration: 2.2, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduce, raw, value]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
