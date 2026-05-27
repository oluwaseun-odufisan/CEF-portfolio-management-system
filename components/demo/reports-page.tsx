import { Download, Eye } from "lucide-react";
import { DetailGrid, ListPanel } from "@/components/demo/demo-primitives";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { executiveReportPreview, reports } from "@/data/reports";

export function ReportsPage() {
  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="Reports"
        title="Reports Built From Operating Evidence"
        lead="Prepare executive, finance, portfolio, technical, collections, investor, and board-ready reports from structured system data."
      />

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((report) => (
          <Card key={report.id}>
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge label={report.status} />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-cef-navy">{report.title}</h2>
            <p className="mt-3 text-[15px] leading-7 text-cef-slate">{report.purpose}</p>
            <DetailGrid
              items={[
                ["Last generated", report.lastGenerated],
                ["Owner", report.owner]
              ]}
            />
            <div className="mt-5 flex flex-wrap gap-2">
              <Button icon={<Eye className="h-5 w-5" />} size="sm" variant="secondary">
                Preview
              </Button>
              <Button icon={<Download className="h-5 w-5" />} size="sm">
                Export
              </Button>
            </div>
          </Card>
        ))}
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
        <PageHeader eyebrow="Preview panel" title="Executive portfolio summary preview" lead={executiveReportPreview.summary} />
        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <ListPanel items={executiveReportPreview.metrics} title="Key metrics" />
          <ListPanel items={executiveReportPreview.exceptions} title="Exceptions" />
          <ListPanel items={executiveReportPreview.actions} title="Management actions" />
          <ListPanel items={executiveReportPreview.recommendations} title="Recommendations" />
        </div>
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          Reports should not be assembled manually from scattered updates. They should be produced from asset, finance, technical, and action evidence already inside the system.
        </p>
      </section>
    </div>
  );
}
