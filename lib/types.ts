export type AssetStatus = "Online" | "Warning" | "Offline" | "Review" | "Onboarding";
export type RiskLevel = "Low" | "Medium" | "High" | "Critical" | "Scale Prep";
export type MonitoringSource =
  | "API Feed"
  | "Metering Platform"
  | "OEM Portal"
  | "Gateway"
  | "Manual Upload"
  | "Integration Pending";

export type Asset = {
  id: string;
  name: string;
  type: string;
  fund: "CEF" | "HSF" | "AgroFund";
  location: string;
  capacity: string;
  customerCount: number;
  status: AssetStatus;
  healthScore: number;
  uptime: number;
  collectionEfficiency: number;
  monthlyRevenue: number;
  outstandingRevenue: number;
  lastSignal: string;
  monitoringSource: MonitoringSource;
  assignedTeam: string;
  riskLevel: RiskLevel;
  notes: string;
  faultHistory: string[];
  maintenanceTimeline: string[];
  personnel: string[];
  uptimeHistory: Array<{ label: string; value: number }>;
};

export type AlertSeverity = "Critical" | "High" | "Medium" | "Low" | "Warning" | "Info";
export type AlertStatus = "Open" | "Assigned" | "In Review" | "Escalated" | "Resolved";

export type Alert = {
  id: string;
  severity: AlertSeverity;
  type:
    | "Asset offline"
    | "Collection drop"
    | "Device communication failure"
    | "Abnormal performance"
    | "Maintenance due"
    | "Resolved";
  assetId: string;
  asset: string;
  time: string;
  issue: string;
  impact: string;
  recommendedAction: string;
  assignedOwner: string;
  status: AlertStatus;
  relatedFundcoAction: string;
  possibleCause: string;
  history: string[];
};

export type MetricTone = "navy" | "green" | "gold" | "amber" | "red" | "blueGrey" | "neutral";

export type PortfolioMetric = {
  label: string;
  value: string;
  detail: string;
  tone: MetricTone;
};

export type ChartPoint = {
  label: string;
  value: number;
  secondaryValue?: number;
};

export type CollectionRecord = {
  id: string;
  date: string;
  assetId: string;
  asset: string;
  fund: "CEF";
  expected: number;
  actual: number;
  status: "On Track" | "Collection Drop" | "Delayed" | "Failed Vending Review";
  failedVendingEvents: number;
  paymentDelays: number;
  customerActivity: number;
  notes: string;
};

export type FundCoEvent = {
  id: string;
  eventType:
    | "asset signal received"
    | "exception created"
    | "task assigned"
    | "escalation approved"
    | "management report generated";
  source: string;
  fundcoLayer: string;
  owner: string;
  dueDate: string;
  escalationPath: string;
  reportOutput: string;
  performanceEvidence: string;
  status: "Logged" | "Assigned" | "Escalated" | "Approved" | "Generated";
};

export type FieldTask = {
  id: string;
  title: string;
  assetId: string;
  owner: string;
  dueDate: string;
  priority: "Critical" | "High" | "Medium";
  status: "Open" | "In Progress" | "Closed";
  linkedAlertId?: string;
};

export type Report = {
  id: string;
  title: string;
  purpose: string;
  lastGenerated: string;
  status: "Ready" | "Needs Review" | "Draft";
  owner: string;
};

export type Fund = {
  id: string;
  name: string;
  status: "Active" | "Future Onboarding";
  role: string;
  currentScope: string;
  nextStep: string;
};
