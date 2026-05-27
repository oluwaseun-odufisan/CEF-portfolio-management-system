import type { ChartPoint } from "@/lib/types";
import { cn } from "@/lib/utils";

const palette = ["bg-cef-green", "bg-cef-gold", "bg-cef-blueGrey", "bg-cef-amber", "bg-cef-red", "bg-cef-navy"];

export function BarChart({
  data,
  max,
  unit = "",
  valuePrefix = ""
}: {
  data: ChartPoint[];
  max?: number;
  unit?: string;
  valuePrefix?: string;
}) {
  const upper = max ?? Math.max(...data.map((point) => point.value), 1);

  return (
    <div className="grid gap-4">
      {data.map((point, index) => (
        <div className="grid gap-2" key={point.label}>
          <div className="flex flex-col gap-1 text-[15px] sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <span className="font-semibold leading-6 text-cef-navy">{point.label}</span>
            <span className="shrink-0 text-cef-slate">
              {valuePrefix}
              {point.value.toLocaleString("en-NG")}
              {unit}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-control bg-cef-surfaceAlt">
            <div
              className={cn("cef-bar-fill h-3 rounded-control", palette[index % palette.length])}
              style={{ width: `${Math.max(4, (point.value / upper) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
