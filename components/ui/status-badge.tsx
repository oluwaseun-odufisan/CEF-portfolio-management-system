import type { AlertSeverity, AlertStatus, AssetStatus, RiskLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

const statusClasses: Record<AssetStatus, string> = {
  Online: "cef-status-success",
  Warning: "cef-status-warning",
  Offline: "cef-status-critical",
  Review: "cef-status-neutral",
  Onboarding: "cef-status-brand"
};

const riskClasses: Record<RiskLevel, string> = {
  Low: "cef-status-success",
  Medium: "cef-status-brand",
  High: "cef-status-warning",
  Critical: "cef-status-critical",
  "Scale Prep": "cef-status-neutral"
};

const severityClasses: Record<AlertSeverity, string> = {
  Critical: "cef-status-severe",
  High: "cef-status-solid-warning",
  Medium: "cef-status-brand",
  Low: "cef-status-neutral",
  Warning: "cef-status-solid-warning",
  Info: "cef-status-solid-neutral"
};

const alertStatusClasses: Record<AlertStatus, string> = {
  Open: "cef-status-warning",
  Assigned: "cef-status-neutral",
  "In Review": "cef-status-neutral",
  Escalated: "cef-status-critical",
  Resolved: "cef-status-success"
};

export function StatusBadge({
  className,
  label,
  type = "plain"
}: {
  className?: string;
  label: string;
  type?: "asset" | "risk" | "severity" | "alertStatus" | "plain";
}) {
  const classes =
    type === "asset" && label in statusClasses
      ? statusClasses[label as AssetStatus]
      : type === "risk" && label in riskClasses
        ? riskClasses[label as RiskLevel]
        : type === "severity" && label in severityClasses
          ? severityClasses[label as AlertSeverity]
          : type === "alertStatus" && label in alertStatusClasses
            ? alertStatusClasses[label as AlertStatus]
            : "border-cef-line bg-cef-surface text-cef-slate";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-control border px-3 py-1 text-sm font-semibold leading-none",
        classes,
        className
      )}
    >
      {label}
    </span>
  );
}
