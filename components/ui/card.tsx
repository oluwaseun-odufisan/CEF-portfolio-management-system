import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <article
      className={cn("rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift", className)}
      {...props}
    />
  );
}
