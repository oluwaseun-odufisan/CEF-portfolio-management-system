import type { ChartPoint, PortfolioMetric } from "@/lib/types";

export const portfolioSummary = {
  portfolioValue: 18_400_000_000,
  activeAssets: 42,
  onlineAssets: 36,
  offlineAssets: 2,
  reviewAssets: 2,
  dailyCollections: 12_800_000,
  monthlyCollections: 384_600_000,
  collectionEfficiency: 91.6,
  openTechnicalIncidents: 17,
  criticalAlerts: 4,
  underperformingAssets: 6,
  topPerformingAssets: ["CEF Solar Site Alpha", "GroSolar Mini-Grid Cluster A", "SwapStation Depot 01"],
  portfolioHealthScore: 84,
  recentEscalations: [
    "Substation Control Node West offline for more than four hours.",
    "GroSolar Metering Pilot Zone collection dip requires finance review.",
    "EML API readiness is still blocked by vendor documentation."
  ],
  managementActions: [
    "Approve field review for Substation Control Node West.",
    "Create FundCo AI finance task for GroSolar failed vending review.",
    "Confirm EML API credentials and customer identity mapping.",
    "Prepare weekly investor-style CEF portfolio summary.",
    "Schedule OEM gap workshop for substation monitoring."
  ]
};

export const overviewMetrics: PortfolioMetric[] = [
  {
    label: "Total portfolio value",
    value: "NGN 18.4B",
    detail: "Illustrative CEF operating value",
    tone: "navy"
  },
  {
    label: "Active assets",
    value: "42",
    detail: "Across solar, metering, substation, storage, gateway, and service zones",
    tone: "gold"
  },
  {
    label: "Online vs offline",
    value: "36 / 42",
    detail: "Six assets require review, warning, or reconnection",
    tone: "green"
  },
  {
    label: "Daily collections",
    value: "NGN 12.8M",
    detail: "Latest operating day in demo period",
    tone: "green"
  },
  {
    label: "Monthly collections",
    value: "NGN 384.6M",
    detail: "Month-to-date collections across monitored CEF assets",
    tone: "blueGrey"
  },
  {
    label: "Collection efficiency",
    value: "91.6%",
    detail: "Actual collections against expected collections",
    tone: "gold"
  },
  {
    label: "Open incidents",
    value: "17",
    detail: "Technical, revenue, and integration exceptions",
    tone: "amber"
  },
  {
    label: "Critical alerts",
    value: "4",
    detail: "Require management action and owner confirmation",
    tone: "red"
  },
  {
    label: "Underperforming assets",
    value: "6",
    detail: "Flagged by revenue, uptime, data quality, or health score",
    tone: "neutral"
  },
  {
    label: "Portfolio health score",
    value: "84",
    detail: "Weighted signal across health, uptime, collections, and alerts",
    tone: "navy"
  }
];

export const revenueTrend: ChartPoint[] = [
  { label: "Mon", value: 10.2 },
  { label: "Tue", value: 11.4 },
  { label: "Wed", value: 12.1 },
  { label: "Thu", value: 9.8 },
  { label: "Fri", value: 12.8 },
  { label: "Sat", value: 13.3 },
  { label: "Sun", value: 12.6 }
];

export const collectionsByAsset: ChartPoint[] = [
  { label: "Solar Alpha", value: 164.9 },
  { label: "Solar Beta", value: 139.7 },
  { label: "GroSolar A", value: 82.6 },
  { label: "SwapDepot", value: 57.2 },
  { label: "Meter Pilot", value: 43.8 }
];

export const assetHealthDistribution: ChartPoint[] = [
  { label: "Healthy", value: 24 },
  { label: "Warning", value: 11 },
  { label: "Critical", value: 4 },
  { label: "Review", value: 3 }
];

export const uptimeTrend: ChartPoint[] = [
  { label: "Mon", value: 96.4 },
  { label: "Tue", value: 95.8 },
  { label: "Wed", value: 94.9 },
  { label: "Thu", value: 93.2 },
  { label: "Fri", value: 94.1 },
  { label: "Sat", value: 94.6 },
  { label: "Sun", value: 94.4 }
];

export const alertsBySeverity: ChartPoint[] = [
  { label: "Critical", value: 4 },
  { label: "High", value: 5 },
  { label: "Medium", value: 6 },
  { label: "Low", value: 2 },
  { label: "Resolved Today", value: 7 }
];
