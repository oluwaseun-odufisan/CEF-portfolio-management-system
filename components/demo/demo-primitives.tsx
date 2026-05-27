import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

export function InsightPanel({ children, title }: { children: ReactNode; title: string }) {
  return (
    <section className="rounded-panel border border-cef-gold bg-[#EFE5CA] p-5 shadow-lift">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold text-cef-navy">{title}</h2>
      </div>
      <div className="mt-4 grid gap-3">{children}</div>
    </section>
  );
}

export function DetailGrid({ items }: { items: Array<[string, ReactNode]> }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map(([label, value]) => (
        <div className="rounded-control border border-cef-line bg-cef-canvas p-3 transition-colors hover:border-cef-gold hover:bg-cef-surface" key={label}>
          <p className="text-sm font-semibold text-cef-slate">{label}</p>
          <div className="mt-2 text-[15px] font-semibold leading-6 text-cef-navy">{value}</div>
        </div>
      ))}
    </div>
  );
}

export function ListPanel({ items, title }: { items: string[]; title: string }) {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-cef-navy">{title}</h2>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <p className="border-b border-cef-line pb-3 text-[15px] leading-7 text-cef-slate last:border-b-0 last:pb-0" key={item}>
            {item}
          </p>
        ))}
      </div>
    </Card>
  );
}
