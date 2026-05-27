import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
  actions,
  eyebrow,
  inverse = false,
  lead,
  title,
  className
}: {
  actions?: ReactNode;
  className?: string;
  eyebrow?: string;
  inverse?: boolean;
  lead?: string;
  title: string;
}) {
  return (
    <div className={cn("cef-reveal flex flex-col justify-between gap-5 lg:flex-row lg:items-end", className)}>
      <div className="max-w-4xl">
        {eyebrow ? (
          <p
            className={cn(
              "mb-3 text-sm font-bold uppercase",
              inverse ? "text-cef-gold" : "text-cef-gold2"
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h1 className={cn("text-3xl font-semibold leading-tight sm:text-4xl xl:text-5xl", inverse ? "text-cef-surface" : "text-cef-navy")}>
          {title}
        </h1>
        {lead ? (
          <p className={cn("mt-4 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8", inverse ? "text-cef-surfaceAlt" : "text-cef-slate")}>
            {lead}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-3 lg:justify-end">{actions}</div> : null}
    </div>
  );
}
