import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  tone?: "canvas" | "surface" | "dark";
};

export function Section({ className, tone = "canvas", ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-20 border-b py-14 sm:py-16 lg:py-20",
        tone === "canvas" && "border-cef-line bg-cef-canvas",
        tone === "surface" && "border-cef-line bg-cef-surface",
        tone === "dark" && "border-cef-navy bg-cef-navy text-cef-surface",
        className
      )}
      {...props}
    />
  );
}
