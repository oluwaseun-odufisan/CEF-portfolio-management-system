export const landingCopy = {
  hero: {
    headline: "Infrastructure assets should speak before problems become reports.",
    body:
      "The CEF Portfolio Management System gives Clean Energy Fund a live operating view of asset health, collections, technical events, revenue movement, field response, and management action - integrated with FundCo AI.",
    supporting:
      "Built for CEF first. Designed to scale across GroSolar, EML, Substation, HSF, AgroFund, and wider FundCo control.",
    microcopy: "A portfolio intelligence and asset-control platform for clean energy infrastructure."
  },
  problem: {
    headline: "The risk is not only in the field. It is in what leadership cannot see early enough.",
    body:
      "Clean energy assets can perform, fail, collect revenue, lose revenue, go offline, or create service issues long before management receives a formal report. When visibility is delayed, decisions become reactive.",
    microcopy:
      "The platform is designed to reduce blind spots across assets, finance, operations, and reporting.",
    points: [
      "Delayed asset reporting",
      "Manual revenue reconciliation",
      "Scattered vendor and OEM platforms",
      "Weak collections visibility",
      "Slow technical escalation",
      "Limited investor-ready evidence",
      "Poor readiness for customer scale"
    ]
  },
  vision: {
    headline: "From physical assets to management control.",
    body:
      "CEF assets should not sit silently in the field. The system connects asset data, collections, customer activity, technical issues, and operating history into one controlled intelligence layer.",
    microcopy: "Not a dashboard alone. A control layer for portfolio decisions.",
    points: [
      "See what is working.",
      "Identify what is weakening.",
      "Know what needs attention.",
      "Assign the next action.",
      "Report from operating evidence."
    ]
  },
  capabilities: [
    ["Asset Visibility", "Know asset status, location, capacity, uptime, and last signal."],
    ["Portfolio Intelligence", "Compare assets and identify performance gaps."],
    ["Collections Monitoring", "Track vending, revenue movement, weak zones, and delays."],
    ["Technical Alerts", "Surface faults, offline devices, and abnormal patterns."],
    ["Management Action", "Move from issue detection to ownership, escalation, and reporting."],
    ["Executive Reporting", "Prepare finance, technical, investor, and board-ready summaries."]
  ],
  fundcoLayers: [
    ["Advanced AI Layer", "Interprets patterns, exceptions, and summaries."],
    ["Execution Intelligence Layer", "Converts issues into tasks, owners, and deadlines."],
    ["Portfolio and Finance Layer", "Links asset performance to collections and reporting."],
    ["HR + Performance Layer", "Connects response ownership to team accountability."],
    ["Multi-Company Control", "Prepares CEF intelligence for wider FundCo oversight."]
  ],
  roadmap: [
    ["CEF", "The starting portfolio environment."],
    ["GroSolar", "Prepaid metering, vending, collections, and device visibility pilot."],
    ["EML", "Preparation for 6,000, 100,000, and 500,000 customer scale."],
    ["Substation", "Review of OEM access, asset data, and technical visibility gaps."],
    ["HSF and AgroFund", "Future extension after the CEF model is proven."],
    ["FundCo Control", "Wider multi-company command layer."]
  ],
  scenarios: [
    "A customer vends energy credit and revenue enters the collections feed.",
    "A meter stops reporting and a technical alert is opened.",
    "A service cluster shows weaker collection efficiency.",
    "A gateway reports delayed device signals.",
    "A substation gap is logged for OEM and integration review.",
    "An executive report is prepared from structured operating evidence."
  ],
  platformPreview: [
    "Executive overview dashboard",
    "Asset registry and asset detail",
    "Collections and revenue intelligence",
    "Technical monitoring and alerts",
    "GroSolar pilot environment",
    "EML scale readiness view",
    "Substation gap review",
    "FundCo AI action flow",
    "Reporting center",
    "Digital twin network view"
  ],
  businessValue: [
    "Improve collections visibility across assets and service zones.",
    "Reduce delay between technical issue and field response.",
    "Create stronger evidence for investors, board members, and leadership.",
    "Connect portfolio events to owners, tasks, deadlines, and escalation.",
    "Prepare the operating model for high customer and asset volume.",
    "Give FundCo leadership a clearer view of performance across entities."
  ]
};

export const dashboardSpec = {
  environmentLabel: "CEF Portfolio Control Environment",
  defaultRole: "Executive / CIO",
  kpis: [
    ["Portfolio Value", "NGN 18.4B", "Illustrative CEF portfolio value", "Healthy"],
    ["Active Assets", "42", "Across solar, metering, substation, storage, gateway, and service zones", "Healthy"],
    ["Online Assets", "36 / 42", "6 assets require review, warning, or reconnection", "Warning"],
    ["Daily Collections", "NGN 12.8M", "Collections received today", "Healthy"],
    ["Collection Efficiency", "91.6%", "Received vs expected collections", "Warning"],
    ["Open Incidents", "17", "Technical, collections, data, and operational issues", "Warning"],
    ["Critical Alerts", "4", "Immediate management attention required", "Critical"],
    ["Underperforming Assets", "6", "Below expected uptime, revenue, output, or data quality", "Warning"]
  ],
  managementDecisionFeed: [
    {
      priority: "Critical",
      issue: "Substation Node West offline",
      linkedAsset: "SUB-WEST-01",
      owner: "Technical Monitoring",
      recommendedAction: "Assign field review and request OEM export",
      status: "Open"
    },
    {
      priority: "High",
      issue: "GroSolar Cluster B collection dip",
      linkedAsset: "GRO-MTR-002",
      owner: "Finance / Collections",
      recommendedAction: "Review vending logs and payment pattern",
      status: "Assigned"
    },
    {
      priority: "High",
      issue: "Gateway Node 003 signal delay",
      linkedAsset: "GWY-003",
      owner: "Technical Monitoring",
      recommendedAction: "Run gateway health check",
      status: "Open"
    },
    {
      priority: "Medium",
      issue: "EML API documentation pending",
      linkedAsset: "EML-ZN-001",
      owner: "Product / Integration",
      recommendedAction: "Request API docs and test credentials",
      status: "Open"
    },
    {
      priority: "Medium",
      issue: "Solar Beta output variance",
      linkedAsset: "CEF-SOL-BET",
      owner: "Operations",
      recommendedAction: "Review inverter logs and weather-adjusted output",
      status: "In Review"
    }
  ],
  atRiskAssets: [
    ["SUB-WEST-01", "Substation Control Node West", "Ogun", "Critical signal loss", "Delayed response and weak visibility", "Field review"],
    ["GRO-MTR-002", "GroSolar Metering Pilot Zone", "Lagos", "Collection dip", "Revenue below expected range", "Finance review"],
    ["GWY-003", "Gateway Node 003", "Lagos", "Delayed heartbeat", "Late device events", "Gateway check"],
    ["CEF-SOL-BET", "CEF Solar Site Beta", "Abuja", "Output variance", "Lower expected generation", "Inverter review"],
    ["EML-ZN-001", "EML Service Zone 01", "Ogun", "Integration dependency", "Scale readiness blocked", "Request API docs"]
  ],
  locationStatus: [
    { label: "Lagos", value: 25, secondaryValue: 18 },
    { label: "Ogun", value: 8, secondaryValue: 4 },
    { label: "Oyo", value: 4, secondaryValue: 2 },
    { label: "Abuja", value: 5, secondaryValue: 2 }
  ],
  signalToAction: [
    { label: "Asset signals", value: 64 },
    { label: "Portfolio events", value: 24 },
    { label: "Alerts", value: 17 },
    { label: "FundCo AI tasks", value: 9 },
    { label: "Escalations", value: 2 },
    { label: "Reports", value: 2 }
  ]
};
