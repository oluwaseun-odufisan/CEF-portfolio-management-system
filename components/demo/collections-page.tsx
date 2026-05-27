"use client";

import { Download } from "lucide-react";
import { BarChart } from "@/components/charts/bar-chart";
import { ComparisonBars } from "@/components/charts/comparison-bars";
import { LineChart } from "@/components/charts/line-chart";
import { DetailGrid, InsightPanel, ListPanel } from "@/components/demo/demo-primitives";
import { Button } from "@/components/ui/button";
import { ChartCard } from "@/components/ui/chart-card";
import { DataTable } from "@/components/ui/data-table";
import { FilterBar, FilterSelect } from "@/components/ui/filter-bar";
import { MetricCard } from "@/components/ui/metric-card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  collectionRecords,
  customerActivityTrend,
  dailyCollections,
  failedVendingEvents,
  paymentDelayRecords,
  revenueByAsset,
  revenueByFund,
  weakCollectionZones,
  weeklyCollections
} from "@/data/collections";
import { portfolioSummary } from "@/data/portfolioSummary";
import { formatCurrency } from "@/lib/format";

export function CollectionsPage() {
  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="Collections and revenue"
        title="Collections Visibility Across the Portfolio"
        lead="See where revenue is moving, where collections are weakening, and which assets need finance or operations attention."
        actions={<Button icon={<Download className="h-5 w-5" />}>Export Collections Report</Button>}
      />

      <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        <MetricCard detail="Collections received today" label="Daily Collections" tone="green" value="NGN 12.8M" />
        <MetricCard detail="Received versus expected collections" label="Collection Efficiency" tone="amber" value={`${portfolioSummary.collectionEfficiency}%`} />
        <MetricCard detail="Linked to weak zones and variance" label="Revenue at Risk" tone="amber" value="NGN 585K" />
        <MetricCard detail="Below expected collection range" label="Weak Zones" tone="amber" value="3" />
        <MetricCard detail="Energy credit transactions captured" label="Vending Events" tone="green" value="148" />
        <MetricCard detail="Customers or records requiring review" label="Payment Delays" tone="amber" value="11" />
      </section>

      <div className="mt-8">
        <FilterBar>
          <FilterSelect label="Date range" onChange={() => undefined} options={["Last 7 days", "Last 30 days", "Quarter to date"]} value="Last 7 days" />
          <FilterSelect label="Asset" onChange={() => undefined} options={["All assets", "GroSolar Metering Pilot Zone", "CEF Solar Site Beta"]} value="All assets" />
          <FilterSelect label="Fund" onChange={() => undefined} options={["CEF", "HSF planned", "AgroFund planned"]} value="CEF" />
          <FilterSelect label="Status" onChange={() => undefined} options={["All", "On Track", "Collection Drop", "Delayed", "Failed Vending Review"]} value="All" />
        </FilterBar>
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <ChartCard title="Seven-Day Revenue Trend" subtitle="Expected versus received collections in NGN millions">
          <ComparisonBars data={dailyCollections} />
        </ChartCard>
        <ChartCard title="Collection Anomalies Over Time" subtitle="Month-to-date collections trend">
          <LineChart data={weeklyCollections} suffix="M" />
        </ChartCard>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <ChartCard title="Revenue by Asset or Cluster">
          <BarChart data={revenueByAsset} unit="M" valuePrefix="NGN " />
        </ChartCard>
        <ChartCard title="Revenue by Fund">
          <BarChart data={revenueByFund} unit="M" valuePrefix="NGN " />
        </ChartCard>
        <ChartCard title="Customer Activity and Vending Volume">
          <LineChart data={customerActivityTrend} />
        </ChartCard>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
          <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Revenue by Asset</h2>
          <DataTable
            columns={[
              { header: "Asset / Cluster", render: (record) => record.asset },
              { header: "Expected Collections", render: (record) => formatCurrency(record.expected) },
              { header: "Received Collections", render: (record) => formatCurrency(record.actual) },
              { header: "Risk", render: (record) => <StatusBadge label={record.status} /> },
              { header: "Failed Vending", render: (record) => record.failedVendingEvents },
              { header: "Payment Delays", render: (record) => record.paymentDelays }
            ]}
            getRowId={(record) => record.id}
            rows={collectionRecords}
          />
        </div>

        <div className="grid gap-6">
          <InsightPanel title="Anomaly panel">
            <p className="rounded-control bg-cef-surface p-3 text-[15px] leading-6 text-cef-navy">
              GroSolar Metering Pilot Zone has six failed vending events and needs reconciliation before the EML scale assumptions are accepted.
            </p>
            <p className="rounded-control bg-cef-surface p-3 text-[15px] leading-6 text-cef-navy">
              CEF Solar Site Beta shows a collection drop while output variance is also open, creating an operations and finance review path.
            </p>
          </InsightPanel>
          <ListPanel items={weakCollectionZones} title="Weak collection zones" />
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
          <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Vending Activity</h2>
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
        <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
          <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Payment delay indicators</h2>
          <DetailGrid
            items={paymentDelayRecords.flatMap((record) => [
              [`${record.id} zone`, record.customerZone],
              [`${record.id} value at risk`, formatCurrency(record.valueAtRisk)]
            ])}
          />
        </div>
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          Collections should not only be reviewed after reporting deadlines. The platform identifies revenue weakness early and links it to ownership.
        </p>
      </section>
    </div>
  );
}
