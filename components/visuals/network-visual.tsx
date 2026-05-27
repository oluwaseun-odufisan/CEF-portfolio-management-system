import { assets } from "@/data/assets";

const positions = [
  { id: "GRO-MTR-001", x: 13, y: 31 },
  { id: "GRO-MTR-002", x: 22, y: 62 },
  { id: "EML-ZN-001", x: 43, y: 78 },
  { id: "EML-ZN-002", x: 58, y: 70 },
  { id: "CEF-SOL-ALP", x: 34, y: 20 },
  { id: "CEF-SOL-BET", x: 67, y: 23 },
  { id: "SUB-EAST-01", x: 80, y: 42 },
  { id: "SUB-WEST-01", x: 75, y: 62 },
  { id: "SWP-DEP-001", x: 48, y: 45 },
  { id: "GWY-003", x: 37, y: 53 },
  { id: "BATT-ALP-01", x: 58, y: 38 }
];

function tone(status: string) {
  if (status === "Online") return "bg-cef-green border-cef-green";
  if (status === "Warning") return "bg-cef-amber border-cef-amber";
  if (status === "Offline") return "bg-cef-red border-cef-red";
  return "bg-cef-blueGrey border-cef-blueGrey";
}

export function NetworkVisual() {
  // Final digital-twin/network image should be placed at /public/images/digital-twin-network.png.
  // This CSS/SVG network remains the polished fallback until final media is available.
  return (
    <div className="relative min-h-[540px] overflow-hidden rounded-panel border border-cef-blueGrey bg-cef-navy p-4 shadow-panel">
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line stroke="#4D6476" strokeWidth="0.45" x1="50" x2="13" y1="50" y2="31" />
        <line stroke="#4D6476" strokeWidth="0.45" x1="50" x2="22" y1="50" y2="62" />
        <line stroke="#4D6476" strokeWidth="0.45" x1="50" x2="43" y1="50" y2="78" />
        <line stroke="#4D6476" strokeWidth="0.45" x1="50" x2="58" y1="50" y2="70" />
        <line stroke="#4D6476" strokeWidth="0.45" x1="50" x2="34" y1="50" y2="20" />
        <line stroke="#4D6476" strokeWidth="0.45" x1="50" x2="67" y1="50" y2="23" />
        <line stroke="#4D6476" strokeWidth="0.45" x1="50" x2="80" y1="50" y2="42" />
        <line stroke="#4D6476" strokeWidth="0.45" x1="50" x2="75" y1="50" y2="62" />
      </svg>
      <div className="absolute left-1/2 top-1/2 z-20 w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-panel border border-cef-gold bg-cef-surface p-4 text-cef-navy shadow-panel">
        <p className="text-sm font-semibold text-cef-gold">Portfolio control</p>
        <p className="mt-2 text-xl font-semibold">FundCo AI action feed</p>
      </div>
      {positions.map((position) => {
        const asset = assets.find((item) => item.id === position.id);
        if (!asset) return null;

        return (
          <div
            className="absolute z-10 w-[150px] rounded-panel border border-cef-blueGrey bg-cef-navy2 p-3 text-cef-surface shadow-lift"
            key={position.id}
            style={{ left: `${position.x}%`, top: `${position.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <span className={`mb-3 block h-3 w-10 rounded-control border ${tone(asset.status)}`} />
            <p className="text-sm font-semibold leading-5">{asset.name}</p>
            <p className="mt-1 text-sm text-cef-surfaceAlt">{asset.location.split(",")[0]}</p>
          </div>
        );
      })}
    </div>
  );
}
