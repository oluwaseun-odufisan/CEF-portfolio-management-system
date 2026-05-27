import type { ChartPoint, CollectionRecord } from "@/lib/types";

export const dailyCollections: ChartPoint[] = [
  { label: "Mon", value: 10.2, secondaryValue: 11.0 },
  { label: "Tue", value: 11.4, secondaryValue: 11.2 },
  { label: "Wed", value: 12.1, secondaryValue: 11.8 },
  { label: "Thu", value: 9.8, secondaryValue: 12.4 },
  { label: "Fri", value: 12.8, secondaryValue: 12.6 },
  { label: "Sat", value: 13.3, secondaryValue: 12.9 },
  { label: "Sun", value: 12.6, secondaryValue: 12.5 }
];

export const weeklyCollections: ChartPoint[] = [
  { label: "Week 1", value: 76.2 },
  { label: "Week 2", value: 81.5 },
  { label: "Week 3", value: 84.7 },
  { label: "Week 4", value: 88.4 }
];

export const revenueByAsset: ChartPoint[] = [
  { label: "CEF Solar Site Alpha", value: 164.9 },
  { label: "CEF Solar Site Beta", value: 139.7 },
  { label: "GroSolar Cluster A", value: 82.6 },
  { label: "SwapStation Depot 01", value: 57.2 },
  { label: "GroSolar Metering Pilot", value: 43.8 }
];

export const revenueByFund: ChartPoint[] = [
  { label: "CEF", value: 384.6 },
  { label: "HSF planned", value: 0 },
  { label: "AgroFund planned", value: 0 }
];

export const customerActivityTrend: ChartPoint[] = [
  { label: "Mon", value: 1120 },
  { label: "Tue", value: 1186 },
  { label: "Wed", value: 1250 },
  { label: "Thu", value: 1044 },
  { label: "Fri", value: 1308 },
  { label: "Sat", value: 1362 },
  { label: "Sun", value: 1284 }
];

export const collectionRecords: CollectionRecord[] = [
  {
    id: "COL-001",
    date: "2026-05-21",
    assetId: "GRO-MTR-001",
    asset: "GroSolar Mini-Grid Cluster A",
    fund: "CEF",
    expected: 2900000,
    actual: 3020000,
    status: "On Track",
    failedVendingEvents: 1,
    paymentDelays: 2,
    customerActivity: 30,
    notes: "Normal vending activity. Failed event recovered within four minutes."
  },
  {
    id: "COL-002",
    date: "2026-05-22",
    assetId: "GRO-MTR-002",
    asset: "GroSolar Metering Pilot Zone",
    fund: "CEF",
    expected: 2150000,
    actual: 1819000,
    status: "Failed Vending Review",
    failedVendingEvents: 6,
    paymentDelays: 8,
    customerActivity: 27,
    notes: "Failed vending spike and payment delays require finance and metering review."
  },
  {
    id: "COL-003",
    date: "2026-05-23",
    assetId: "CEF-SOL-BET",
    asset: "CEF Solar Site Beta",
    fund: "CEF",
    expected: 5200000,
    actual: 4660000,
    status: "Collection Drop",
    failedVendingEvents: 0,
    paymentDelays: 4,
    customerActivity: 0,
    notes: "Revenue below expected while output variance is also open."
  },
  {
    id: "COL-004",
    date: "2026-05-24",
    assetId: "SWP-DEP-001",
    asset: "SwapStation Depot 01",
    fund: "CEF",
    expected: 1850000,
    actual: 1924000,
    status: "On Track",
    failedVendingEvents: 0,
    paymentDelays: 1,
    customerActivity: 386,
    notes: "Depot activity and collections are above plan."
  },
  {
    id: "COL-005",
    date: "2026-05-25",
    assetId: "EML-ZN-001",
    asset: "EML Service Zone 01",
    fund: "CEF",
    expected: 0,
    actual: 0,
    status: "Delayed",
    failedVendingEvents: 0,
    paymentDelays: 0,
    customerActivity: 0,
    notes: "No live collections yet. Scale readiness dependency remains open."
  }
];

export const paymentDelayRecords = [
  {
    id: "PAY-014",
    customerZone: "GroSolar Metering Pilot Zone",
    count: 8,
    valueAtRisk: 940000,
    status: "Finance review required"
  },
  {
    id: "PAY-021",
    customerZone: "CEF Solar Site Beta offtake desk",
    count: 4,
    valueAtRisk: 2280000,
    status: "Operations and finance review"
  }
];

export const failedVendingEvents = [
  {
    id: "VEND-441",
    asset: "GroSolar Metering Pilot Zone",
    meterId: "MTR-014",
    customerRef: "PILOT-C014",
    amount: 18000,
    time: "2026-05-26 10:18",
    status: "Recovered after retry"
  },
  {
    id: "VEND-447",
    asset: "GroSolar Metering Pilot Zone",
    meterId: "MTR-019",
    customerRef: "PILOT-C019",
    amount: 26000,
    time: "2026-05-26 13:43",
    status: "Pending review"
  },
  {
    id: "VEND-452",
    asset: "GroSolar Metering Pilot Zone",
    meterId: "MTR-014",
    customerRef: "PILOT-C014",
    amount: 22000,
    time: "2026-05-26 18:11",
    status: "Linked to offline meter alert"
  }
];

export const weakCollectionZones = [
  "GroSolar Metering Pilot Zone",
  "CEF Solar Site Beta offtake desk",
  "EML onboarding zones pending collection-control design"
];
