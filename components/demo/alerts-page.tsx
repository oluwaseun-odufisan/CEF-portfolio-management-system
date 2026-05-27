"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { AlertCard } from "@/components/ui/alert-card";
import { Button } from "@/components/ui/button";
import { Drawer } from "@/components/ui/drawer";
import { FilterBar, FilterSelect } from "@/components/ui/filter-bar";
import { MetricCard } from "@/components/ui/metric-card";
import { Modal } from "@/components/ui/modal";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs } from "@/components/ui/tabs";
import { alerts } from "@/data/alerts";
import type { Alert } from "@/lib/types";

const severityTabs = [
  { label: "All", value: "All" },
  { label: "Critical", value: "Critical" },
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
  { label: "Resolved", value: "Resolved" }
];

export function AlertsPage() {
  const [severity, setSeverity] = useState("All");
  const [type, setType] = useState("All");
  const [selected, setSelected] = useState<Alert | null>(null);
  const [createdAction, setCreatedAction] = useState<Alert | null>(null);

  const filtered = useMemo(() => {
    return alerts.filter((alert) => {
      const severityMatch =
        severity === "All" ||
        alert.severity === severity ||
        (severity === "Resolved" && alert.status === "Resolved");
      return severityMatch && (type === "All" || alert.type === type);
    });
  }, [severity, type]);

  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="Technical monitoring and alerts"
        title="Technical Exceptions Before They Become Business Losses"
        lead="Track offline assets, device failures, abnormal readings, field issues, data gaps, and escalation status."
      />

      <section className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
        <MetricCard detail="Immediate review required" label="Critical Alerts" tone="red" value="4" />
        <MetricCard detail="Significant issue requiring owner review" label="High Priority Alerts" tone="amber" value="5" />
        <MetricCard detail="Review and schedule response" label="Medium Alerts" tone="gold" value="6" />
        <MetricCard detail="Monitor or close with note" label="Low Alerts" tone="blueGrey" value="2" />
        <MetricCard detail="Closed with action evidence" label="Resolved Today" tone="green" value="7" />
        <MetricCard detail="Across open incidents" label="Average Alert Age" tone="amber" value="9h 20m" />
      </section>

      <div className="mt-8 grid gap-4">
        <Tabs active={severity} items={severityTabs} onChange={setSeverity} />
        <FilterBar>
          <FilterSelect
            label="Alert type"
            onChange={setType}
            options={["All", ...Array.from(new Set(alerts.map((alert) => alert.type)))]}
            value={type}
          />
          <FilterSelect
            label="Escalation status"
            onChange={() => undefined}
            options={["All", "Open", "In Review", "Escalated", "Resolved"]}
            value="All"
          />
        </FilterBar>
      </div>

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((alert) => (
          <AlertCard alert={alert} key={alert.id} onOpen={setSelected} />
        ))}
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          A serious alert should always have an owner, next action, linked asset, and evidence trail. The platform is designed to move from exception to response.
        </p>
      </section>

      <Drawer onClose={() => setSelected(null)} open={!!selected} title={selected?.asset ?? "Alert detail"}>
        {selected ? (
          <div className="grid gap-5">
            <div className="flex flex-wrap gap-2">
              <StatusBadge label={selected.severity} type="severity" />
              <StatusBadge label={selected.status} type="alertStatus" />
            </div>
            <p className="text-lg font-semibold leading-7 text-cef-navy">{selected.issue}</p>
            <DetailLine label="Issue history" value={selected.history.join(" ")} />
            <DetailLine label="Affected asset" value={selected.asset} />
            <DetailLine label="Possible cause" value={selected.possibleCause} />
            <DetailLine label="Business impact" value={selected.impact} />
            <DetailLine label="Recommended next step" value={selected.recommendedAction} />
            <DetailLine label="Related FundCo AI task/action" value={selected.relatedFundcoAction} />
            <Button icon={<Plus className="h-5 w-5" />} onClick={() => setCreatedAction(selected)}>
              Create FundCo AI Action
            </Button>
          </div>
        ) : null}
      </Drawer>

      <Modal onClose={() => setCreatedAction(null)} open={!!createdAction} title="FundCo AI action created">
        {createdAction ? (
          <div className="grid gap-4">
            <p className="text-[15px] leading-7 text-cef-slate">
              A FundCo AI execution task has been created for <strong>{createdAction.asset}</strong>.
            </p>
            <div className="rounded-panel border border-cef-line bg-cef-canvas p-4">
              <p className="font-semibold text-cef-navy">Task owner</p>
              <p className="mt-2 text-cef-slate">{createdAction.assignedOwner}</p>
            </div>
            <div className="rounded-panel border border-cef-line bg-cef-canvas p-4">
              <p className="font-semibold text-cef-navy">Next action</p>
              <p className="mt-2 text-cef-slate">{createdAction.recommendedAction}</p>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}

function DetailLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-control border border-cef-line bg-cef-canvas p-3">
      <p className="text-sm font-semibold text-cef-slate">{label}</p>
      <p className="mt-2 text-[15px] leading-7 text-cef-navy">{value}</p>
    </div>
  );
}
