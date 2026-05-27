import type { FundCoEvent } from "@/lib/types";

export const fundcoLayers = [
  "Advanced AI Layer",
  "Execution Intelligence Layer",
  "Portfolio and Finance Layer",
  "HR + Performance Layer",
  "Multi-Company Control"
];

export const fundcoEvents: FundCoEvent[] = [
  {
    id: "FCO-EVT-001",
    eventType: "asset signal received",
    source: "GroSolar meter heartbeat",
    fundcoLayer: "Advanced AI Layer",
    owner: "GroSolar operations desk",
    dueDate: "2026-05-27",
    escalationPath: "Operations lead if signal remains stale for 30 minutes",
    reportOutput: "Pilot signal reliability log",
    performanceEvidence: "Meter heartbeat, vending timestamp, and customer issue record",
    status: "Logged"
  },
  {
    id: "FCO-EVT-002",
    eventType: "exception created",
    source: "GroSolar collection drop",
    fundcoLayer: "Portfolio and Finance Layer",
    owner: "Finance collections desk",
    dueDate: "2026-05-29",
    escalationPath: "CFO review if variance stays above 10 percent",
    reportOutput: "Collections exception report",
    performanceEvidence: "Expected vs actual collections and failed vending events",
    status: "Assigned"
  },
  {
    id: "FCO-EVT-003",
    eventType: "task assigned",
    source: "Substation Node West offline alert",
    fundcoLayer: "Execution Intelligence Layer",
    owner: "Technical monitoring team",
    dueDate: "2026-05-28",
    escalationPath: "CIO and OEM liaison if no export is received",
    reportOutput: "Technical exceptions report",
    performanceEvidence: "Offline duration, owner, next action, and OEM request log",
    status: "Escalated"
  },
  {
    id: "FCO-EVT-004",
    eventType: "escalation approved",
    source: "EML scale readiness risk",
    fundcoLayer: "Multi-Company Control",
    owner: "Product integration team",
    dueDate: "2026-06-04",
    escalationPath: "Executive review before customer onboarding acceleration",
    reportOutput: "EML scale readiness report",
    performanceEvidence: "API dependency, event volume assumptions, and readiness checklist",
    status: "Approved"
  },
  {
    id: "FCO-EVT-005",
    eventType: "management report generated",
    source: "CEF weekly portfolio summary",
    fundcoLayer: "HR + Performance Layer",
    owner: "Portfolio office",
    dueDate: "2026-05-27",
    escalationPath: "Executive office review",
    reportOutput: "CEF executive portfolio summary",
    performanceEvidence: "Actions completed, overdue owners, and incident aging",
    status: "Generated"
  }
];
