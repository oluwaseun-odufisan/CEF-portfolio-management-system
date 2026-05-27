const rows = [
  ["SUB-WEST-01", "Substation Control Node West", "Critical signal loss", "Field review"],
  ["GRO-MTR-002", "GroSolar Metering Pilot Zone", "Collection dip", "Finance review"],
  ["GWY-003", "Gateway Node 003", "Delayed heartbeat", "Gateway check"],
  ["CEF-SOL-BET", "CEF Solar Site Beta", "Output variance", "Inverter review"]
];

export function ProductMockupVisual() {
  // Final product UI mockup image should be placed at /public/images/product-dashboard-preview.png.
  return (
    <div className="overflow-hidden rounded-panel border border-cef-line bg-cef-surface shadow-panel">
      <div className="border-b border-cef-line px-4 py-3">
        <p className="text-sm font-semibold uppercase text-cef-slate">Executive overview</p>
        <h3 className="mt-2 text-2xl font-semibold text-cef-navy">Management Decision Feed</h3>
      </div>
      <div className="grid grid-cols-2 gap-px bg-cef-line md:grid-cols-4">
        {[
          ["Portfolio Value", "NGN 18.4B"],
          ["Online Assets", "36 / 42"],
          ["Collection Efficiency", "91.6%"],
          ["Open Incidents", "17"]
        ].map(([label, value]) => (
          <div className="bg-cef-canvas p-4" key={label}>
            <p className="text-sm font-semibold text-cef-slate">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-cef-navy">{value}</p>
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto sm:block">
        <div className="min-w-[620px]">
          <div className="grid grid-cols-[120px_1.3fr_1fr_1fr] gap-3 border-b border-cef-line bg-cef-canvas px-4 py-3 text-sm font-semibold uppercase text-cef-slate">
            <span>Asset ID</span>
            <span>Asset</span>
            <span>Risk</span>
            <span>Next Action</span>
          </div>
          {rows.map(([id, asset, risk, action]) => (
            <div className="grid grid-cols-[120px_1.3fr_1fr_1fr] gap-3 border-b border-cef-line px-4 py-3 text-[15px] last:border-b-0" key={id}>
              <span className="font-semibold text-cef-navy">{id}</span>
              <span className="text-cef-ink">{asset}</span>
              <span className="text-cef-slate">{risk}</span>
              <span className="font-semibold text-cef-navy">{action}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-3 p-4 sm:hidden">
        {rows.map(([id, asset, risk, action]) => (
          <div className="rounded-control border border-cef-line bg-cef-canvas p-3" key={id}>
            <p className="text-sm font-semibold text-cef-gold2">{id}</p>
            <p className="mt-2 text-[15px] font-semibold text-cef-navy">{asset}</p>
            <p className="mt-2 text-sm leading-6 text-cef-slate">{risk}</p>
            <p className="mt-2 text-sm font-semibold text-cef-navy">Next action: {action}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
