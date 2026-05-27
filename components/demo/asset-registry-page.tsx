"use client";

import { useMemo, useState } from "react";
import { BarChart } from "@/components/charts/bar-chart";
import { LineChart } from "@/components/charts/line-chart";
import { DetailGrid, ListPanel } from "@/components/demo/demo-primitives";
import { Button } from "@/components/ui/button";
import { ChartCard } from "@/components/ui/chart-card";
import { DataTable, type DataTableColumn } from "@/components/ui/data-table";
import { Drawer } from "@/components/ui/drawer";
import { FilterBar, FilterInput, FilterSelect } from "@/components/ui/filter-bar";
import { MetricCard } from "@/components/ui/metric-card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { alerts } from "@/data/alerts";
import { assets, richAssetExample } from "@/data/assets";
import { fundcoEvents } from "@/data/fundcoEvents";
import { formatCurrency, formatPercent } from "@/lib/format";
import type { Asset } from "@/lib/types";

const all = "All";

export function AssetRegistryPage() {
  const [search, setSearch] = useState("");
  const [fund, setFund] = useState(all);
  const [status, setStatus] = useState(all);
  const [type, setType] = useState(all);
  const [risk, setRisk] = useState(all);
  const [source, setSource] = useState(all);
  const [selected, setSelected] = useState<Asset | null>(richAssetExample);
  const [drawerAsset, setDrawerAsset] = useState<Asset | null>(null);

  const filteredAssets = useMemo(() => {
    return assets.filter((asset) => {
      const haystack = `${asset.name} ${asset.id} ${asset.type} ${asset.location} ${asset.assignedTeam}`.toLowerCase();
      return (
        haystack.includes(search.toLowerCase()) &&
        (fund === all || asset.fund === fund) &&
        (status === all || asset.status === status) &&
        (type === all || asset.type === type) &&
        (risk === all || asset.riskLevel === risk) &&
        (source === all || asset.monitoringSource === source)
      );
    });
  }, [fund, risk, search, source, status, type]);

  const columns: DataTableColumn<Asset>[] = [
    { header: "Asset ID", render: (asset) => <span className="font-semibold text-cef-navy">{asset.id}</span> },
    {
      header: "Asset",
      render: (asset) => (
        <div>
          <p className="font-semibold text-cef-navy">{asset.name}</p>
        </div>
      )
    },
    { header: "Asset Type", render: (asset) => asset.type },
    { header: "Location", render: (asset) => asset.location },
    { header: "Fund", render: (asset) => asset.fund },
    { header: "Status", render: (asset) => <StatusBadge label={asset.status} type="asset" /> },
    { header: "Scale / Capacity", render: (asset) => asset.capacity },
    { header: "Uptime", render: (asset) => (asset.uptime ? formatPercent(asset.uptime) : "Pending") },
    { header: "Monitoring Source", render: (asset) => asset.monitoringSource },
    { header: "Risk Indicator", render: (asset) => <StatusBadge label={asset.riskLevel} type="risk" /> },
    { header: "Last Signal", render: (asset) => asset.lastSignal },
    { header: "Assigned Team", render: (asset) => asset.assignedTeam }
  ];

  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="Asset Registry"
        title="All CEF Assets in One Controlled Register"
        lead="Track asset type, location, fund, operating status, capacity, uptime, collections status, monitoring source, assigned team, and last signal."
      />

      <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <MetricCard detail="Active assets under CEF monitoring" label="Total Registered Assets" tone="green" value="42" />
        <MetricCard detail="Assets currently reporting" label="Online Assets" tone="green" value="36" />
        <MetricCard detail="Assets requiring review" label="Warning Assets" tone="amber" value="10" />
        <MetricCard detail="Immediate attention required" label="Critical Assets" tone="red" value="4" />
        <MetricCard detail="API, OEM, or gateway setup needed" label="Pending Integrations" tone="blueGrey" value="5" />
      </section>

      <div className="mt-8">
        <FilterBar>
          <FilterInput label="Search" onChange={setSearch} placeholder="Search by asset name, asset ID, location, or monitoring source" value={search} />
          <FilterSelect label="Fund" onChange={setFund} options={[all, "CEF", "HSF", "AgroFund"]} value={fund} />
          <FilterSelect label="Operating Status" onChange={setStatus} options={[all, ...Array.from(new Set(assets.map((asset) => asset.status)))]} value={status} />
          <FilterSelect label="Asset Type" onChange={setType} options={[all, ...Array.from(new Set(assets.map((asset) => asset.type)))]} value={type} />
          <FilterSelect label="Technical Risk" onChange={setRisk} options={[all, "Low", "Medium", "High", "Critical", "Scale Prep"]} value={risk} />
          <FilterSelect label="Monitoring Source" onChange={setSource} options={[all, ...Array.from(new Set(assets.map((asset) => asset.monitoringSource)))]} value={source} />
        </FilterBar>
      </div>

      <section className="mt-8">
        <DataTable
          columns={columns}
          getRowId={(asset) => asset.id}
          onRowClick={(asset) => {
            setSelected(asset);
            setDrawerAsset(asset);
          }}
          rows={filteredAssets}
        />
      </section>

      {selected ? <AssetDetailSection asset={selected} /> : null}

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          The asset registry is the controlled source of truth for CEF infrastructure assets. It replaces scattered records with one searchable operating register.
        </p>
      </section>

      <Drawer onClose={() => setDrawerAsset(null)} open={!!drawerAsset} title={drawerAsset?.name ?? "Asset detail"}>
        {drawerAsset ? <AssetDetail asset={drawerAsset} compact /> : null}
      </Drawer>
    </div>
  );
}

function AssetDetailSection({ asset }: { asset: Asset }) {
  return (
    <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
      <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-semibold text-cef-gold2">Asset-Level View: Health, Revenue, Faults, and Actions</p>
          <h2 className="mt-2 text-3xl font-semibold text-cef-navy">{asset.name}</h2>
          <p className="mt-2 max-w-3xl text-[15px] leading-7 text-cef-slate">{asset.notes}</p>
        </div>
        <Button onClick={() => undefined} variant="secondary">
          Asset detail active
        </Button>
      </div>
      <AssetDetail asset={asset} />
    </section>
  );
}

function AssetDetail({ asset, compact = false }: { asset: Asset; compact?: boolean }) {
  const relatedAlerts = alerts.filter((alert) => alert.assetId === asset.id);
  const relatedEvents = fundcoEvents.filter((event) => event.source.toLowerCase().includes(asset.name.split(" ")[0].toLowerCase()) || event.source.toLowerCase().includes("grosolar"));

  return (
    <div className="grid gap-6">
      <DetailGrid
        items={[
          ["Asset ID", asset.id],
          ["Type", asset.type],
          ["Fund", asset.fund],
          ["Location", asset.location],
          ["Capacity", asset.capacity],
          ["Customer count", asset.customerCount.toLocaleString("en-NG")],
          ["Monitoring source", asset.monitoringSource],
          ["Last signal", asset.lastSignal],
          ["Monthly revenue", formatCurrency(asset.monthlyRevenue)],
          ["Outstanding revenue", formatCurrency(asset.outstandingRevenue)],
          ["Assigned team", asset.assignedTeam],
          ["Health score", asset.healthScore]
        ]}
      />

      <div className={compact ? "grid gap-6" : "grid gap-6 xl:grid-cols-2"}>
        <ChartCard title="Technical health and uptime history">
          <LineChart data={asset.uptimeHistory} suffix="%" />
        </ChartCard>
        <ChartCard title="Revenue and collections">
          <BarChart
            data={[
              { label: "Monthly revenue", value: Math.round(asset.monthlyRevenue / 1_000_000) },
              { label: "Outstanding", value: Math.round(asset.outstandingRevenue / 1_000_000) },
              { label: "Collection efficiency", value: Math.round(asset.collectionEfficiency || 0) }
            ]}
            unit={asset.collectionEfficiency ? "M / %" : "M"}
          />
        </ChartCard>
      </div>

      <div className={compact ? "grid gap-6" : "grid gap-6 xl:grid-cols-3"}>
        <ListPanel items={asset.faultHistory} title="Fault history" />
        <ListPanel items={asset.maintenanceTimeline} title="Maintenance timeline" />
        <ListPanel items={asset.personnel} title="Assigned personnel" />
      </div>

      <div className={compact ? "grid gap-6" : "grid gap-6 xl:grid-cols-2"}>
        <ListPanel
          items={relatedAlerts.length ? relatedAlerts.map((alert) => `${alert.id}: ${alert.issue}`) : ["No related alerts in the current demo period."]}
          title="Related alerts"
        />
        <ListPanel
          items={relatedEvents.length ? relatedEvents.map((event) => `${event.eventType}: ${event.reportOutput}`) : ["No related FundCo AI actions yet."]}
          title="Related FundCo AI actions"
        />
      </div>
    </div>
  );
}
