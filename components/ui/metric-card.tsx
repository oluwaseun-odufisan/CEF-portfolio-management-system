import type { MetricTone } from "@/lib/types";
import { cn } from "@/lib/utils";

const toneClasses: Record<MetricTone, string> = {
  navy: "border-cef-line [--metric-accent:#312783]",
  green: "border-cef-line [--metric-accent:#2E6F59]",
  gold: "border-cef-line [--metric-accent:#36A9E1]",
  amber: "border-cef-line [--metric-accent:#B97822]",
  red: "border-cef-line [--metric-accent:#A23D35]",
  blueGrey: "border-cef-line [--metric-accent:#4D6476]",
  neutral: "border-cef-line [--metric-accent:#566271]"
};

export function MetricCard({
  detail,
  label,
  tone = "neutral",
  value
}: {
  detail: string;
  label: string;
  tone?: MetricTone;
  value: string;
}) {
  return (
    <article
      className={cn(
        "min-h-[142px] rounded-panel border bg-cef-surface p-5 shadow-lift",
        toneClasses[tone]
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-cef-slate">{label}</p>
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--metric-accent)]" />
      </div>
      <p className="mt-5 text-3xl font-semibold leading-none text-cef-navy">{value}</p>
      <p className="mt-4 text-sm leading-6 text-cef-slate">{detail}</p>
    </article>
  );
}
