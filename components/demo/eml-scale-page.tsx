import { BarChart } from "@/components/charts/bar-chart";
import { DetailGrid, ListPanel } from "@/components/demo/demo-primitives";
import { ChartCard } from "@/components/ui/chart-card";
import { MetricCard } from "@/components/ui/metric-card";
import { PageHeader } from "@/components/ui/page-header";

const scalePoints = [
  { label: "3 months", value: 6000 },
  { label: "12 months", value: 100000 },
  { label: "2-3 years", value: 500000 }
];

const projectedVending = [
  { label: "6,000 customers", value: 18000 },
  { label: "100,000 customers", value: 300000 },
  { label: "500,000 customers", value: 1500000 }
];

export function EmlScalePage() {
  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="EML Scale Readiness"
        title="EML Requires Scale-Ready Visibility From the Start"
        lead="The system must be ready for 6,000 customers in 3 months, 100,000 in 12 months, and 500,000 in 2-3 years. Manual review will not hold at that scale."
      />

      <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        <MetricCard detail="Customers" label="3-Month Target" tone="gold" value="6,000" />
        <MetricCard detail="Customers" label="12-Month Target" tone="amber" value="100,000" />
        <MetricCard detail="Customers" label="2-3 Year Target" tone="navy" value="500,000" />
        <MetricCard detail="Current average readiness" label="Readiness Score" tone="amber" value="44 / 100" />
        <MetricCard detail="API, customer records, collections feed" label="Open Dependencies" tone="amber" value="3" />
        <MetricCard detail="Current readiness" label="Reporting Automation" tone="blueGrey" value="35%" />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <ChartCard title="Scale timeline" subtitle="Customer growth targets">
          <BarChart data={scalePoints} />
        </ChartCard>
        <ChartCard title="Projected vending events" subtitle="Illustrative daily event volume">
          <BarChart data={projectedVending} />
        </ChartCard>
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
        <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Operational pressure indicators</h2>
        <DetailGrid
          items={[
            ["Projected support tickets", "120 daily at 6,000 customers; 2,000+ daily at 100,000 customers"],
            ["Projected asset signals", "Meter heartbeat, vending status, customer issue, gateway health, tariff records"],
            ["Data volume implications", "Bulk ingestion, event filtering, alert queues, audit logs, and report automation"],
            ["Monitoring requirements", "Signal freshness, failed event classification, health scoring, and exception ownership"],
            ["Collection visibility requirements", "Expected vs actual collections, weak zones, failed vending, payment delay indicators"],
            ["Staffing implications", "Role-based queues and escalation logic before operational teams are overloaded"]
          ]}
        />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <ListPanel
          items={[
            "Customer complaints become the first signal of system failure.",
            "Finance reconciliation becomes delayed and disputed.",
            "Device events cannot be reviewed one by one.",
            "Customer service queues grow without asset or revenue context.",
            "Management reports depend on manual summaries instead of operating evidence."
          ]}
          title="What breaks if this is managed manually?"
        />
        <ListPanel
          items={[
            "Automated data feeds and searchable customer or asset records.",
            "Queue-based alerts with owner, severity, age, and next action.",
            "Bulk data handling, audit logs, API governance, and performance testing.",
            "Role-based dashboards for finance, operations, technical, and executive users.",
            "Automated reports tied to live exceptions and FundCo AI actions."
          ]}
          title="What the platform must handle before scale"
        />
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          EML makes the scale issue clear. The platform must be designed as infrastructure, not as a small internal dashboard.
        </p>
      </section>
    </div>
  );
}
