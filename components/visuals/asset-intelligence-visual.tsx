const flowSteps = [
  ["Physical asset", "Meters, solar assets, substations, batteries, gateways, and service zones."],
  ["Data source", "API feed, OEM portal, gateway, file import, manual upload, or future sensor."],
  ["Portfolio record", "Status, uptime, signal freshness, collections, faults, and risk."],
  ["Management action", "Owner, task, escalation, evidence, report, and FundCo AI layer."]
];

export function AssetIntelligenceVisual() {
  // Final generated asset-to-intelligence image should be placed at /public/images/asset-intelligence-flow.png.
  return (
    <div className="overflow-hidden rounded-panel border border-cef-line bg-cef-surface shadow-lift">
      <div className="border-b border-cef-line px-5 py-4">
        <p className="text-sm font-semibold uppercase text-cef-slate">Operating record model</p>
        <h3 className="mt-2 text-2xl font-semibold text-cef-navy">From signal to decision</h3>
      </div>
      <div className="divide-y divide-cef-line">
        {flowSteps.map(([title, detail], index) => (
          <div className="grid gap-3 px-5 py-4 md:grid-cols-[56px_220px_1fr] md:items-start" key={title}>
            <span className="flex h-9 w-9 items-center justify-center rounded-control bg-cef-navy text-sm font-semibold text-cef-surface">
              {index + 1}
            </span>
            <h4 className="text-lg font-semibold text-cef-navy">{title}</h4>
            <p className="text-[15px] leading-7 text-cef-slate">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
