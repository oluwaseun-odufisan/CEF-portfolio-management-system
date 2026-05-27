"use client";

import { DetailGrid, ListPanel } from "@/components/demo/demo-primitives";
import { SignalFlow } from "@/components/visuals/signal-flow";
import { DataTable } from "@/components/ui/data-table";
import { MetricCard } from "@/components/ui/metric-card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { fundcoEvents, fundcoLayers } from "@/data/fundcoEvents";

export function FundCoAiPage() {
  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="FundCo AI Integration"
        title="Signals Become Action Inside FundCo AI"
        lead="Portfolio events do not stop at dashboards. They become tasks, escalations, approvals, finance checks, HR evidence, and executive reports."
      />

      <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        <MetricCard detail="Events in selected period" label="Portfolio Events Captured" tone="green" value="24" />
        <MetricCard detail="From alerts and exceptions" label="Tasks Created" tone="green" value="9" />
        <MetricCard detail="Management review required" label="Escalations Open" tone="amber" value="2" />
        <MetricCard detail="Collections and revenue issues" label="Finance Reviews" tone="amber" value="3" />
        <MetricCard detail="Awaiting executive review" label="Reports Ready" tone="green" value="2" />
        <MetricCard detail="Actions linked to source events" label="Evidence Trails" tone="blueGrey" value="14" />
      </section>

      <section className="mt-8">
        <SignalFlow />
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-5">
        {fundcoLayers.map((layer) => (
          <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift" key={layer}>
            <p className="text-lg font-semibold leading-6 text-cef-navy">{layer}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
        <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Example events converted into work</h2>
        <DataTable
          columns={[
            { header: "Event", render: (event) => event.eventType },
            { header: "Source", render: (event) => event.source },
            { header: "FundCo layer", render: (event) => event.fundcoLayer },
            { header: "Owner", render: (event) => event.owner },
            { header: "Due date", render: (event) => event.dueDate },
            { header: "Status", render: (event) => <StatusBadge label={event.status} /> }
          ]}
          getRowId={(event) => event.id}
          rows={fundcoEvents}
        />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
          <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Event-to-management action detail</h2>
          <DetailGrid
            items={[
              ["Asset offline", "Task assigned to technical monitoring with OEM escalation path and report output."],
              ["Collection drop", "Finance review task with expected vs actual evidence and management exception."],
              ["Failed vending spike", "Metering and finance owner assigned with customer issue signal attached."],
              ["Substation technical issue", "Field review, OEM questions, and technical exceptions report."],
              ["EML scale risk", "Integration dependency with executive escalation before customer growth."]
            ]}
          />
        </div>
        <ListPanel
          items={[
            "Task: a named owner receives a concrete next action.",
            "Owner: finance, operations, technical monitoring, product integration, or executive office.",
            "Due date: every exception has an operating clock.",
            "Escalation path: unresolved issues move to leadership or OEM review.",
            "Management report: actions become portfolio evidence.",
            "Performance evidence: work completion is tied to signals, not status talk."
          ]}
          title="How FundCo AI converts signals"
        />
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          CEF Portfolio Management is the asset-intelligence source. FundCo AI is the execution layer that turns signals into controlled work.
        </p>
      </section>
    </div>
  );
}
