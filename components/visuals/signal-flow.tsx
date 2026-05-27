export function SignalFlow() {
  const steps = [
    "Asset signal",
    "Portfolio event",
    "Alert",
    "FundCo AI action",
    "Task assignment",
    "Escalation",
    "Approval",
    "Report"
  ];

  return (
    <div className="grid gap-2 md:grid-cols-4 xl:grid-cols-8">
      {steps.map((step, index) => (
        <div className="rounded-panel border border-cef-line bg-cef-surface p-4" key={step}>
          <div className="flex h-8 w-8 items-center justify-center rounded-control bg-cef-navy text-sm font-bold text-cef-surface">
            {index + 1}
          </div>
          <p className="mt-4 text-[15px] font-semibold leading-5 text-cef-navy">{step}</p>
        </div>
      ))}
    </div>
  );
}
