import type { ChartPoint } from "@/lib/types";

export function LineChart({
  data,
  height = 220,
  suffix = ""
}: {
  data: ChartPoint[];
  height?: number;
  suffix?: string;
}) {
  const width = 720;
  const padding = 34;
  const values = data.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = data.map((point, index) => {
    const x = padding + (index / Math.max(data.length - 1, 1)) * (width - padding * 2);
    const y = height - padding - ((point.value - min) / range) * (height - padding * 2);
    return { ...point, x, y };
  });
  const polyline = points.map((point) => `${point.x},${point.y}`).join(" ");

  return (
    <div className="w-full overflow-hidden">
      <svg
        aria-label="Line chart"
        className="h-auto w-full"
        role="img"
        viewBox={`0 0 ${width} ${height}`}
      >
        <rect fill="#FFFDF7" height={height} width={width} />
        {[0, 1, 2, 3].map((line) => {
          const y = padding + line * ((height - padding * 2) / 3);
          return <line key={line} stroke="#CBD3D7" strokeWidth="1" x1={padding} x2={width - padding} y1={y} y2={y} />;
        })}
        <polyline className="cef-line-path" fill="none" points={polyline} stroke="#2E6F59" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        {points.map((point, index) => (
          <g key={point.label}>
            <circle className="cef-chart-dot" cx={point.x} cy={point.y} fill="#0D1524" r="5" style={{ animationDelay: `${index * 70}ms` }} />
            <text fill="#566271" fontSize="14" textAnchor="middle" x={point.x} y={height - 8}>
              {point.label}
            </text>
            <text fill="#141E2D" fontSize="14" fontWeight="700" textAnchor="middle" x={point.x} y={Math.max(18, point.y - 12)}>
              {point.value}
              {suffix}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
