import type { ChartPoint } from "@/lib/types";

const colors = ["bg-cef-green", "bg-cef-amber", "bg-cef-red", "bg-cef-blueGrey", "bg-cef-gold"];

export function DistributionChart({ data }: { data: ChartPoint[] }) {
  const total = data.reduce((sum, item) => sum + item.value, 0) || 1;

  return (
    <div className="grid gap-4">
      <div className="flex h-8 overflow-hidden rounded-control border border-cef-line bg-cef-surfaceAlt">
        {data.map((item, index) => (
          <div
            aria-label={`${item.label}: ${item.value}`}
            className={`cef-bar-fill ${colors[index % colors.length]}`}
            key={item.label}
            style={{ width: `${(item.value / total) * 100}%` }}
            title={`${item.label}: ${item.value}`}
          />
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {data.map((item, index) => (
          <div className="flex items-center justify-between gap-3 text-[15px]" key={item.label}>
            <span className="flex items-center gap-2 font-semibold text-cef-navy">
              <span className={`h-3 w-3 rounded-[2px] ${colors[index % colors.length]}`} />
              {item.label}
            </span>
            <span className="text-cef-slate">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
