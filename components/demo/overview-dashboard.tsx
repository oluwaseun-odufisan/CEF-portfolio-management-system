"use client";

import { useState } from "react";
import { BarChart } from "@/components/charts/bar-chart";
import { DistributionChart } from "@/components/charts/distribution-chart";
import { LineChart } from "@/components/charts/line-chart";
import { Button } from "@/components/ui/button";
import { ChartCard } from "@/components/ui/chart-card";
import { DataTable, type DataTableColumn } from "@/components/ui/data-table";
import { Drawer } from "@/components/ui/drawer";
import { MetricCard } from "@/components/ui/metric-card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { dashboardSpec } from "@/data/demoSpec";
import {
  alertsBySeverity,
  assetHealthDistribution,
  revenueTrend
} from "@/data/portfolioSummary";
import type { MetricTone } from "@/lib/types";

type DecisionRow = (typeof dashboardSpec.managementDecisionFeed)[number];

const toneByStatus: Record<string, MetricTone> = {
  Healthy: "green",
  Warning: "amber",
  Critical: "red",
  Review: "blueGrey"
};

const atRiskRows = dashboardSpec.atRiskAssets.map(([assetId, asset, location, riskType, businessImpact, nextAction]) => ({
  assetId,
  asset,
  location,
  riskType,
  businessImpact,
  nextAction
}));

export function OverviewDashboard() {
  const [selectedIssue, setSelectedIssue] = useState<DecisionRow | null>(null);
  const [exported, setExported] = useState(false);

  const decisionColumns: DataTableColumn<DecisionRow>[] = [
    { header: "Priority", render: (row) => <StatusBadge label={row.priority} /> },
    { header: "Management Issue", render: (row) => row.issue },
    { header: "Linked Asset", render: (row) => <span className="font-semibold text-cef-navy">{row.linkedAsset}</span> },
    { header: "Current Owner", render: (row) => row.owner },
    { header: "Recommended Action", render: (row) => row.recommendedAction },
    { header: "Action Status", render: (row) => <StatusBadge label={row.status} /> }
  ];

  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="Executive overview"
        title="CEF Portfolio Command View"
        lead="Asset health, revenue movement, technical exceptions, and management action in one executive view."
        actions={
          <>
            <Button href="/demo/assets" variant="secondary">
              View Asset Registry
            </Button>
            <Button href="/demo/reports" variant="secondary">
              Preview Executive Report
            </Button>
            <Button onClick={() => setExported(true)}>Export Command View</Button>
          </>
        }
      />

      {exported ? (
        <div className="mt-6 rounded-panel border border-cef-line bg-cef-surface p-4 text-[15px] font-semibold text-cef-navy">
          Executive command view exported for the selected demo period.
        </div>
      ) : null}

      <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardSpec.kpis.map(([label, value, detail, status]) => (
          <MetricCard
            detail={detail}
            key={label}
            label={label}
            tone={toneByStatus[status] ?? "neutral"}
            value={value}
          />
        ))}
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
          <div className="mb-5 flex flex-col justify-between gap-3 border-b border-cef-line pb-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-cef-navy">Management Decision Feed</h2>
              <p className="mt-2 text-[15px] leading-6 text-cef-slate">
                Management issues the system recommends reviewing today.
              </p>
            </div>
            <Button onClick={() => setSelectedIssue(dashboardSpec.managementDecisionFeed[0])} variant="secondary">
              Create FundCo AI Task
            </Button>
          </div>
          <DataTable
            columns={decisionColumns}
            getRowId={(row) => `${row.linkedAsset}-${row.issue}`}
            onRowClick={setSelectedIssue}
            rows={dashboardSpec.managementDecisionFeed}
          />
        </div>

        <div className="grid gap-6">
          <ChartCard title="Seven-Day Collections Movement" subtitle="Collections in NGN millions, with Thursday dip visible">
            <LineChart data={revenueTrend} suffix="M" />
          </ChartCard>
          <ChartCard title="Portfolio Events Converted to Action">
            <BarChart data={dashboardSpec.signalToAction} />
          </ChartCard>
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <ChartCard title="Portfolio Health by Asset Status">
          <DistributionChart data={assetHealthDistribution} />
        </ChartCard>
        <ChartCard title="Open Incidents by Severity">
          <DistributionChart data={alertsBySeverity} />
        </ChartCard>
        <ChartCard title="Asset Status by Location" subtitle="Total assets with healthy count as secondary signal">
          <BarChart data={dashboardSpec.locationStatus} />
        </ChartCard>
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
        <div className="mb-5 border-b border-cef-line pb-4">
          <h2 className="text-2xl font-semibold text-cef-navy">At-Risk Assets</h2>
          <p className="mt-2 text-[15px] leading-6 text-cef-slate">
            Assets below expected uptime, revenue, output, or data quality.
          </p>
        </div>
        <DataTable
          columns={[
            { header: "Asset ID", render: (row) => row.assetId },
            { header: "Asset", render: (row) => row.asset },
            { header: "Location", render: (row) => row.location },
            { header: "Risk Type", render: (row) => row.riskType },
            { header: "Business Impact", render: (row) => row.businessImpact },
            { header: "Next Action", render: (row) => <span className="font-semibold text-cef-navy">{row.nextAction}</span> }
          ]}
          getRowId={(row) => row.assetId}
          rows={atRiskRows}
        />
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          The executive overview is designed for management-by-exception. It shows what is healthy, what is weakening, what needs ownership, and what should be escalated.
        </p>
      </section>

      <Drawer
        onClose={() => setSelectedIssue(null)}
        open={!!selectedIssue}
        title={selectedIssue?.issue ?? "Management issue"}
      >
        {selectedIssue ? (
          <div className="grid gap-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <Detail label="Priority" value={selectedIssue.priority} />
              <Detail label="Linked asset" value={selectedIssue.linkedAsset} />
              <Detail label="Current owner" value={selectedIssue.owner} />
              <Detail label="Action status" value={selectedIssue.status} />
            </div>
            <Detail label="Recommended action" value={selectedIssue.recommendedAction} />
            <Detail
              label="FundCo AI task preview"
              value="The task would carry the linked asset, owner, due date, status, evidence trail, and management escalation path."
            />
            <Button onClick={() => setExported(true)}>Create FundCo AI Task</Button>
          </div>
        ) : null}
      </Drawer>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-control border border-cef-line bg-cef-canvas p-3">
      <p className="text-sm font-semibold text-cef-slate">{label}</p>
      <p className="mt-2 text-[15px] font-semibold leading-6 text-cef-navy">{value}</p>
    </div>
  );
}
