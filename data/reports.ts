import type { Report } from "@/lib/types";

export const reports: Report[] = [
  {
    id: "RPT-001",
    title: "Executive portfolio summary",
    purpose: "Leadership view of portfolio value, asset health, collections, incidents, and decisions required.",
    lastGenerated: "2026-05-27",
    status: "Ready",
    owner: "Portfolio office"
  },
  {
    id: "RPT-002",
    title: "Asset performance report",
    purpose: "Uptime, output, device status, fault history, maintenance plan, and risk score.",
    lastGenerated: "2026-05-26",
    status: "Ready",
    owner: "Operations"
  },
  {
    id: "RPT-003",
    title: "Collections report",
    purpose: "Vending, revenue by asset, collection efficiency, payment gaps, weak zones, and anomalies.",
    lastGenerated: "2026-05-27",
    status: "Needs Review",
    owner: "Finance collections"
  },
  {
    id: "RPT-004",
    title: "Technical exceptions report",
    purpose: "Open alerts, severity, age, owner, resolution status, repeated issues, and escalation progress.",
    lastGenerated: "2026-05-27",
    status: "Ready",
    owner: "Technical monitoring"
  },
  {
    id: "RPT-005",
    title: "Investor-style summary",
    purpose: "Portfolio progress, revenue movement, risks, asset status, management actions, and proof points.",
    lastGenerated: "2026-05-24",
    status: "Draft",
    owner: "Executive office"
  },
  {
    id: "RPT-006",
    title: "FundCo AI management action report",
    purpose: "Tasks, owners, due dates, escalations, approvals, and performance evidence from asset events.",
    lastGenerated: "2026-05-27",
    status: "Ready",
    owner: "FundCo AI operations"
  },
  {
    id: "RPT-007",
    title: "EML scale readiness report",
    purpose: "Readiness for 6,000, 100,000, and 500,000 customer growth scenarios.",
    lastGenerated: "2026-05-25",
    status: "Needs Review",
    owner: "Product integration"
  },
  {
    id: "RPT-008",
    title: "GroSolar pilot report",
    purpose: "Pilot vending, collections, meter communication, failed events, and lessons for EML.",
    lastGenerated: "2026-05-27",
    status: "Ready",
    owner: "GroSolar pilot desk"
  },
  {
    id: "RPT-009",
    title: "Substation gap review report",
    purpose: "Current asset-management gaps, OEM questions, missing signals, and integration path.",
    lastGenerated: "2026-05-26",
    status: "Draft",
    owner: "Technical monitoring"
  }
];

export const executiveReportPreview = {
  summary:
    "CEF has a strong operating base, but management attention is needed on Substation Node West, GroSolar vending exceptions, and EML integration readiness.",
  metrics: ["NGN 18.4B portfolio value", "91.6% collection efficiency", "84 portfolio health score"],
  exceptions: [
    "Substation Control Node West is offline and needs OEM data export.",
    "GroSolar Metering Pilot Zone has failed vending and collection dip indicators.",
    "EML customer growth requires event filtering, automated reports, and queue-based escalation."
  ],
  actions: [
    "Approve field review for Substation Node West.",
    "Assign finance review for GroSolar collection dip.",
    "Confirm EML API documentation and customer identity mapping."
  ],
  recommendations: [
    "Use GroSolar pilot as the proof environment before large customer onboarding.",
    "Treat substation review as a technical gap register, not a normal dashboard page.",
    "Feed all confirmed exceptions into FundCo AI for ownership and follow-through."
  ]
};
