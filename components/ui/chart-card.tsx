import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ChartCard({
  children,
  className,
  subtitle,
  title
}: {
  children: ReactNode;
  className?: string;
  subtitle?: string;
  title: string;
}) {
  return (
    <section
      className={cn(
        "overflow-hidden rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift",
        className
      )}
    >
      <div className="mb-5 flex flex-col gap-3 border-b border-cef-line pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-cef-navy">{title}</h2>
          {subtitle ? <p className="mt-2 text-[15px] leading-6 text-cef-slate">{subtitle}</p> : null}
        </div>
      </div>
      {children}
    </section>
  );
}
