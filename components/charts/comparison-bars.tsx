import type { ChartPoint } from "@/lib/types";

export function ComparisonBars({
  data,
  unit = "M"
}: {
  data: ChartPoint[];
  unit?: string;
}) {
  const max = Math.max(...data.map((point) => Math.max(point.value, point.secondaryValue ?? 0)), 1);

  return (
    <div className="grid gap-4">
      {data.map((point) => (
        <div className="grid gap-2" key={point.label}>
          <div className="flex flex-col gap-1 text-[15px] sm:flex-row sm:items-center sm:justify-between">
            <span className="font-semibold leading-6 text-cef-navy">{point.label}</span>
            <span className="shrink-0 text-cef-slate">
              Actual {point.value}
              {unit}
            </span>
          </div>
          <div className="grid gap-1">
            <div className="h-3 overflow-hidden rounded-control bg-cef-surfaceAlt">
              <div className="cef-bar-fill h-3 rounded-control bg-cef-green" style={{ width: `${(point.value / max) * 100}%` }} />
            </div>
            {typeof point.secondaryValue === "number" ? (
              <div className="h-3 overflow-hidden rounded-control bg-cef-surfaceAlt">
                <div className="cef-bar-fill h-3 rounded-control bg-cef-gold" style={{ width: `${(point.secondaryValue / max) * 100}%` }} />
              </div>
            ) : null}
          </div>
        </div>
      ))}
      <div className="flex flex-wrap gap-4 text-sm text-cef-slate">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-[2px] bg-cef-green" />
          Actual
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-[2px] bg-cef-gold" />
          Expected
        </span>
      </div>
    </div>
  );
}
