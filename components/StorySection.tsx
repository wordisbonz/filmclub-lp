"use client";

import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/useReveal";

interface StorySectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function StorySection({ children, className, delay = 0 }: StorySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useReveal(ref);

  return (
    <section
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={cn(
        "mx-auto max-w-2xl px-6 py-16 md:py-20",
        "transition-all duration-700",
        isVisible ? "animate-fadeUp opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </section>
  );
}
