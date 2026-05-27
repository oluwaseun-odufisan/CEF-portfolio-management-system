import type { AlertSeverity, AlertStatus, AssetStatus, RiskLevel } from "@/lib/types";
import { cn } from "@/lib/utils";

const statusClasses: Record<AssetStatus, string> = {
  Online: "border-cef-green bg-[#E3EFE9] text-cef-green2",
  Warning: "border-cef-amber bg-[#F4E1BE] text-cef-amber2",
  Offline: "border-cef-red bg-[#F0D6D3] text-cef-red2",
  Review: "border-cef-blueGrey bg-[#E0E7EB] text-cef-blueGrey2",
  Onboarding: "border-cef-gold bg-[#EFE5CA] text-cef-gold2"
};

const riskClasses: Record<RiskLevel, string> = {
  Low: "border-cef-green bg-[#E3EFE9] text-cef-green2",
  Medium: "border-cef-gold bg-[#EFE5CA] text-cef-gold2",
  High: "border-cef-amber bg-[#F4E1BE] text-cef-amber2",
  Critical: "border-cef-red bg-[#F0D6D3] text-cef-red2",
  "Scale Prep": "border-cef-blueGrey bg-[#E0E7EB] text-cef-blueGrey2"
};

const severityClasses: Record<AlertSeverity, string> = {
  Critical: "border-cef-red bg-cef-red text-white",
  High: "border-cef-amber bg-cef-amber text-cef-navy",
  Medium: "border-cef-gold bg-[#EFE5CA] text-cef-gold2",
  Low: "border-cef-blueGrey bg-[#E0E7EB] text-cef-blueGrey2",
  Warning: "border-cef-amber bg-cef-amber text-cef-navy",
  Info: "border-cef-blueGrey bg-cef-blueGrey text-white"
};

const alertStatusClasses: Record<AlertStatus, string> = {
  Open: "border-cef-amber bg-[#F4E1BE] text-cef-amber2",
  Assigned: "border-cef-blueGrey bg-[#E0E7EB] text-cef-blueGrey2",
  "In Review": "border-cef-blueGrey bg-[#E0E7EB] text-cef-blueGrey2",
  Escalated: "border-cef-red bg-[#F0D6D3] text-cef-red2",
  Resolved: "border-cef-green bg-[#E3EFE9] text-cef-green2"
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
