"use client";

import { BarChart } from "@/components/charts/bar-chart";
import { DetailGrid, InsightPanel, ListPanel } from "@/components/demo/demo-primitives";
import { ChartCard } from "@/components/ui/chart-card";
import { MetricCard } from "@/components/ui/metric-card";
import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { failedVendingEvents, dailyCollections } from "@/data/collections";
import { richAssetExample } from "@/data/assets";
import { formatCurrency, formatPercent } from "@/lib/format";

export function GroSolarPage() {
  const asset = richAssetExample;

  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="GroSolar Pilot"
        title="GroSolar Prepaid Metering Pilot"
        lead="A controlled first environment for validating data flow, vending visibility, collection behaviour, device gaps, and management response before scaling into EML."
      />

      <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        <MetricCard detail="Active pilot customers" label="Pilot Customers" tone="green" value="30" />
        <MetricCard detail="Normal collections" label="Cluster A Efficiency" tone="green" value="96.2%" />
        <MetricCard detail="Below seven-day average" label="Cluster B Efficiency" tone="amber" value="84.8%" />
        <MetricCard detail="After vending attempt" label="Offline Meter Events" tone="red" value="1" />
        <MetricCard detail="Captured by feed" label="Vending Events Today" tone="green" value="48" />
        <MetricCard detail="Open technical follow-ups" label="Field Actions" tone="amber" value="2" />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
          <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Pilot summary</h2>
          <DetailGrid
            items={[
              ["Infrastructure", "Prepaid metering / vending infrastructure"],
              ["Asset", asset.name],
              ["Customers", asset.customerCount],
              ["Health score", asset.healthScore],
              ["Uptime", formatPercent(asset.uptime)],
              ["Collection efficiency", formatPercent(asset.collectionEfficiency)],
              ["Last signal", asset.lastSignal],
              ["Assigned team", asset.assignedTeam]
            ]}
          />
        </div>
        <ChartCard title="Customer vending activity" subtitle="Expected vs actual daily collections in NGN millions">
          <BarChart data={dailyCollections} unit="M" valuePrefix="NGN " />
        </ChartCard>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
          <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Collections and failed vending events</h2>
          <DataTable
            columns={[
              { header: "Event", render: (event) => event.id },
              { header: "Meter", render: (event) => event.meterId },
              { header: "Customer", render: (event) => event.customerRef },
              { header: "Amount", render: (event) => formatCurrency(event.amount) },
              { header: "Status", render: (event) => event.status }
            ]}
            getRowId={(event) => event.id}
            rows={failedVendingEvents}
          />
        </div>
        <div className="grid gap-6">
          <InsightPanel title="Device and meter signal status">
            <p className="rounded-control bg-cef-surface p-3 text-[15px] leading-6 text-cef-navy">
              Meter MTR-014 stopped reporting after a vending attempt and must be reconciled against customer credit status.
            </p>
            <p className="rounded-control bg-cef-surface p-3 text-[15px] leading-6 text-cef-navy">
              The pilot is proving which data fields must be mandatory before customer growth.
            </p>
          </InsightPanel>
          <ListPanel
            items={[
              "Vending records are visible, but failed retries need cleaner event classification.",
              "Meter heartbeat and payment callback should be tied into one incident record.",
              "Customer issue signal should create both finance and technical review context."
            ]}
            title="Issues discovered"
          />
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <ListPanel
          items={[
            "Keep GroSolar as the first proof environment.",
            "Use failed vending events to test finance reconciliation and technical escalation.",
            "Define mandatory fields for meter ID, customer zone, transaction status, amount, and signal freshness."
          ]}
          title="Actions recommended"
        />
        <ListPanel
          items={[
            "Collections can be visible before full-scale rollout.",
            "Device gaps must be handled as management exceptions, not hidden platform issues.",
            "Pilot reports should become EML readiness evidence."
          ]}
          title="Learning to carry into EML"
        />
        <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
          <h2 className="text-xl font-semibold text-cef-navy">What is working</h2>
          <div className="mt-4 grid gap-3">
            <StatusBadge label="Meter feed active" />
            <StatusBadge label="Collections visible" />
            <StatusBadge label="FundCo AI task path defined" />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          GroSolar is the first proof environment. It validates collections, device signals, alerting, and field response before the model is expanded.
        </p>
      </section>
    </div>
  );
}
