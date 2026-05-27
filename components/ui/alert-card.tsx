"use client";

import type { Alert } from "@/lib/types";
import { StatusBadge } from "@/components/ui/status-badge";

export function AlertCard({ alert, onOpen }: { alert: Alert; onOpen?: (alert: Alert) => void }) {
  return (
    <button
      className="w-full rounded-panel border border-cef-line bg-cef-surface p-4 text-left shadow-lift transition-colors hover:border-cef-gold"
      onClick={() => onOpen?.(alert)}
      type="button"
    >
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge label={alert.severity} type="severity" />
        <StatusBadge label={alert.status} type="alertStatus" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-cef-navy">{alert.asset}</h3>
      <p className="mt-2 text-[15px] leading-6 text-cef-slate">{alert.issue}</p>
      <p className="mt-4 text-sm font-semibold text-cef-gold2">Owner: {alert.assignedOwner}</p>
    </button>
  );
}
