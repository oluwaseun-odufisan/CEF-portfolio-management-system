import { NetworkVisual } from "@/components/visuals/network-visual";
import { BarChart } from "@/components/charts/bar-chart";
import { DetailGrid, ListPanel } from "@/components/demo/demo-primitives";
import { ChartCard } from "@/components/ui/chart-card";
import { PageHeader } from "@/components/ui/page-header";
import { alerts } from "@/data/alerts";
import { assets } from "@/data/assets";
import { collectionsByAsset } from "@/data/portfolioSummary";

export function DigitalTwinPage() {
  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="Digital Twin"
        title="See the Portfolio as a Connected Operating Network"
        lead="A visual network of assets, customer zones, technical signals, collections, alerts, and control points."
      />

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <NetworkVisual />
        <div className="grid gap-6">
          <ChartCard title="Collection feed" subtitle="NGN millions by asset">
            <BarChart data={collectionsByAsset.slice(0, 5)} unit="M" valuePrefix="NGN " />
          </ChartCard>
          <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
            <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Live signals</h2>
            <DetailGrid
              items={[
                ["Asset health", `${assets.filter((asset) => asset.status === "Online").length} online assets in the current fixture`],
                ["Alert feed", `${alerts.filter((alert) => alert.status !== "Resolved").length} open alerts`],
                ["FundCo AI actions", "Tasks, escalations, approvals, and reports"],
                ["Data movement", "Metering, API, OEM portal, gateway, and manual validated uploads"]
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <ListPanel
          items={[
            "GroSolar pilot node sends vending, failed events, and meter heartbeat signals.",
            "EML service zones show scale pressure before full onboarding.",
            "Substation nodes expose offline state, OEM dependency, and field review needs."
          ]}
          title="Asset health"
        />
        <ListPanel
          items={[
            "Daily collections flow into portfolio revenue visibility.",
            "Collection drops become finance review tasks.",
            "Failed vending events connect customer issue signal to technical status."
          ]}
          title="Collection feed"
        />
        <ListPanel
          items={[
            "Alerts become FundCo AI tasks with owners and due dates.",
            "Escalations move to management when unresolved.",
            "Reports are generated from structured operating evidence."
          ]}
          title="FundCo AI actions"
        />
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          The network view helps leadership and technical teams see CEF as a connected operating environment, not as disconnected asset records.
        </p>
      </section>
    </div>
  );
}
