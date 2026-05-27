"use client";

import { AlertCard } from "@/components/ui/alert-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChartCard } from "@/components/ui/chart-card";
import { Container } from "@/components/ui/container";
import { DataTable } from "@/components/ui/data-table";
import { MetricCard } from "@/components/ui/metric-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { StatusBadge } from "@/components/ui/status-badge";
import { BarChart } from "@/components/charts/bar-chart";
import { DistributionChart } from "@/components/charts/distribution-chart";
import { LineChart } from "@/components/charts/line-chart";
import { alerts } from "@/data/alerts";
import { assets } from "@/data/assets";
import { assetHealthDistribution, overviewMetrics, revenueTrend } from "@/data/portfolioSummary";

export default function DesignTestPage() {
  return (
    <main className="min-h-screen bg-cef-canvas">
      <Section tone="surface">
        <Container>
          <PageHeader
            eyebrow="Design test"
            title="CEF component system"
            lead="A temporary route showing reusable components, chart primitives, table behavior, statuses, cards, and buttons."
            actions={<Button href="/">Back to Landing</Button>}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {overviewMetrics.slice(0, 4).map((metric) => (
              <MetricCard detail={metric.detail} key={metric.label} label={metric.label} tone={metric.tone} value={metric.value} />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="dark">Gold Action</Button>
            <Button variant="danger">Critical Action</Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <StatusBadge label="Online" type="asset" />
            <StatusBadge label="Warning" type="asset" />
            <StatusBadge label="Critical" type="risk" />
            <StatusBadge label="Escalated" type="alertStatus" />
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <ChartCard title="Revenue trend">
              <LineChart data={revenueTrend} suffix="M" />
            </ChartCard>
            <ChartCard title="Collections by asset">
              <BarChart data={revenueTrend} unit="M" />
            </ChartCard>
            <ChartCard title="Health distribution">
              <DistributionChart data={assetHealthDistribution} />
            </ChartCard>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Card>
              <h2 className="mb-4 text-2xl font-semibold text-cef-navy">Data table</h2>
              <DataTable
                columns={[
                  { header: "Asset", render: (asset) => asset.name },
                  { header: "Status", render: (asset) => <StatusBadge label={asset.status} type="asset" /> },
                  { header: "Health", render: (asset) => `${asset.healthScore}` },
                  { header: "Risk", render: (asset) => <StatusBadge label={asset.riskLevel} type="risk" /> }
                ]}
                getRowId={(asset) => asset.id}
                rows={assets.slice(0, 4)}
              />
            </Card>
            <AlertCard alert={alerts[0]} />
          </div>
        </Container>
      </Section>
    </main>
  );
}
