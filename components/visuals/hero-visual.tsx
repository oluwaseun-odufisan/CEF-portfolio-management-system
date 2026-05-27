const events = [
  ["ALT-1001", "Substation Node West offline", "No signal for 4h 32m", "Critical"],
  ["REV-002", "GroSolar Cluster B collection dip", "15.4% below average", "Review"],
  ["DEP-EML", "EML API documentation pending", "Scale readiness dependency", "Open"]
];

const metrics = [
  ["Portfolio value", "NGN 18.4B"],
  ["Online assets", "36 / 42"],
  ["Daily collections", "NGN 12.8M"],
  ["Open incidents", "17"]
];

export function HeroVisual() {
  // Final generated hero image should be placed at /public/images/cef-hero-system.png.
  // This product-style composition remains the fallback when final media is not available.
  return (
    <div className="overflow-hidden rounded-panel border border-cef-blueGrey bg-cef-surface shadow-panel">
      <div className="border-b border-cef-line bg-cef-navy px-4 py-3 text-cef-surface">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-cef-gold">CEF Portfolio Control Environment</p>
            <p className="mt-1 text-[15px] text-cef-surfaceAlt">Clean Energy Fund | Last 7 days</p>
          </div>
          <div className="rounded-control border border-cef-blueGrey px-3 py-2 text-sm font-semibold text-cef-surfaceAlt">
            Active Role: Executive / CIO
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid gap-3 sm:grid-cols-4">
          {metrics.map(([label, value]) => (
            <div className="rounded-control border border-cef-line bg-cef-canvas p-3" key={label}>
              <p className="text-sm font-semibold text-cef-slate">{label}</p>
              <p className="mt-2 text-xl font-semibold text-cef-navy">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-panel border border-cef-line bg-cef-canvas p-4">
            <p className="text-sm font-semibold uppercase text-cef-slate">Signal-to-action flow</p>
            <div className="mt-4 grid gap-3">
              {["Asset signal", "Portfolio event", "FundCo AI task"].map((item, index) => (
                <div className="flex items-center gap-3" key={item}>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-control bg-cef-navy text-sm font-semibold text-cef-surface">
                    {index + 1}
                  </span>
                  <p className="text-[15px] font-semibold text-cef-navy">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-panel border border-cef-line">
            <div className="hidden grid-cols-[86px_minmax(0,1fr)_86px] gap-3 bg-cef-canvas px-3 py-2 text-sm font-semibold uppercase text-cef-slate sm:grid">
              <span>ID</span>
              <span>Operating issue</span>
              <span>Status</span>
            </div>
            {events.map(([id, asset, issue, status]) => (
              <div className="grid gap-2 border-t border-cef-line bg-cef-surface px-3 py-3 text-sm sm:grid-cols-[86px_minmax(0,1fr)_86px] sm:gap-3" key={id}>
                <span className="font-semibold text-cef-navy">{id}</span>
                <span className="min-w-0">
                  <span className="block font-semibold text-cef-navy">{asset}</span>
                  <span className="mt-1 block text-cef-slate">{issue}</span>
                </span>
                <span className="font-semibold text-cef-gold2">{status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-panel border border-cef-line bg-cef-canvas p-4">
          <p className="text-sm font-semibold uppercase text-cef-slate">Management decision today</p>
          <p className="mt-2 text-lg font-semibold leading-7 text-cef-navy">
            Approve field review for SUB-WEST-01 and request OEM data export before weekly reporting closes.
          </p>
        </div>
      </div>
    </div>
  );
}
