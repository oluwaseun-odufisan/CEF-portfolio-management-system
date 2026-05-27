import { DetailGrid, ListPanel } from "@/components/demo/demo-primitives";
import { MetricCard } from "@/components/ui/metric-card";
import { PageHeader } from "@/components/ui/page-header";

export function SubstationPage() {
  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="Substation Review"
        title="Substation Asset-Management Gap Review"
        lead="Identify what the current asset system does not show, what the OEM can expose, what data is needed, and what must be connected into CEF visibility."
      />

      <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        <MetricCard detail="Platform, OEM, signals, workflow, risk" label="Review Areas" tone="blueGrey" value="5" />
        <MetricCard detail="Require management attention" label="High-Severity Gaps" tone="red" value="3" />
        <MetricCard detail="Confirmed useful signals" label="Signal Availability" tone="amber" value="42%" />
        <MetricCard detail="API/export clarity required" label="OEM Access" tone="blueGrey" value="Pending" />
        <MetricCard detail="Manual confirmation currently used" label="Field Workflow Evidence" tone="amber" value="Partial" />
        <MetricCard detail="Poor visibility may delay response" label="Commercial Risk" tone="red" value="High" />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <ListPanel
          items={[
            "Substation control data is not yet visible enough for trusted portfolio monitoring.",
            "Current dashboards expose partial status but do not provide clean export, full fault history, or response evidence.",
            "Management needs a gap register before deciding whether to integrate OEM APIs, exports, or field updates first."
          ]}
          title="Current position"
        />
        <ListPanel
          items={[
            "Incomplete uptime and outage records.",
            "Fault code history not consistently available.",
            "OEM portal dependency is not governed by clear API or export terms.",
            "Manual field workflow does not always confirm closure with evidence.",
            "Commercial impact of downtime is not tied to management reports."
          ]}
          title="Known gaps"
        />
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
        <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Required technical visibility</h2>
        <DetailGrid
          items={[
            ["Uptime", "Signal freshness and outage duration by node"],
            ["Fault code", "Fault type, age, severity, and repeated pattern"],
            ["Load", "Load state, abnormal readings, and event history"],
            ["Device status", "Online, warning, offline, and OEM review state"],
            ["Response history", "Owner, field action, completion evidence, and report link"],
            ["Maintenance records", "Planned, overdue, closed, and repeated maintenance items"]
          ]}
        />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <ListPanel
          items={[
            "What does the OEM platform show and hide?",
            "Can data be exported automatically?",
            "What APIs, logs, protocols, or file formats are available?",
            "Can the OEM provide fault code, outage, load, and response history?"
          ]}
          title="OEM/API questions"
        />
        <ListPanel
          items={[
            "Assign issue owner and field response window.",
            "Confirm completion evidence, not just verbal closure.",
            "Link field workflow to FundCo AI task, escalation, approval, and report."
          ]}
          title="Field operation requirements"
        />
        <ListPanel
          items={[
            "Start with available exports and manual validated uploads.",
            "Define missing fields and OEM dependency register.",
            "Move to API integration after signal value is confirmed."
          ]}
          title="Integration path"
        />
      </section>

      <section className="cef-brand-panel mt-8 rounded-panel p-5">
        <h2 className="text-2xl font-semibold text-cef-navy">Decision points</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            "Approve OEM export request and access owner.",
            "Define minimum substation signal set for CEF visibility.",
            "Convert repeated gaps into FundCo AI actions with deadlines."
          ].map((item) => (
            <p className="rounded-control bg-cef-surface p-3 text-[15px] font-semibold leading-6 text-cef-navy" key={item}>
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          Substation is treated as a professional review area. The goal is to identify what can be connected, what is missing, and what must be escalated.
        </p>
      </section>
    </div>
  );
}
