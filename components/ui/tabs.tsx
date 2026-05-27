"use client";

import { cn } from "@/lib/utils";

export function Tabs({
  active,
  items,
  onChange
}: {
  active: string;
  items: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 rounded-panel border border-cef-line bg-cef-surface p-2 shadow-lift">
      {items.map((item) => (
        <button
          className={cn(
            "min-h-11 rounded-control border px-4 py-2 text-sm font-semibold cef-interactive",
            active === item.value
              ? "border-cef-navy bg-cef-navy text-cef-surface"
              : "border-cef-line bg-cef-surface text-cef-slate hover:border-cef-gold hover:text-cef-navy"
          )}
          key={item.value}
          onClick={() => onChange(item.value)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
