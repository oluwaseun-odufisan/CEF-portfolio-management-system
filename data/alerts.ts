import type { Alert } from "@/lib/types";

export const alerts: Alert[] = [
  {
    id: "ALT-1001",
    severity: "Critical",
    type: "Asset offline",
    assetId: "SUB-WEST-01",
    asset: "Substation Control Node West",
    time: "2026-05-27 09:12",
    issue: "No signal for 4h 32m. OEM access required.",
    impact:
      "Management cannot separate a real equipment issue from a data-visibility failure without OEM export or field review.",
    recommendedAction: "Assign field review and request OEM data export today.",
    assignedOwner: "Technical monitoring team",
    status: "Open",
    relatedFundcoAction: "TASK-FCO-221 field review and OEM follow-up",
    possibleCause: "Gateway outage, OEM portal failure, or unresolved substation device fault.",
    history: [
      "Signal delay first observed at 04:40.",
      "Manual check confirmed no dashboard refresh by 08:20.",
      "Technical monitoring escalated to OEM liaison at 09:12."
    ]
  },
  {
    id: "ALT-1002",
    severity: "High",
    type: "Collection drop",
    assetId: "GRO-MTR-002",
    asset: "GroSolar Metering Pilot Zone",
    time: "2026-05-26 18:30",
    issue: "Collections 15.4 percent below the 7-day average.",
    impact:
      "Pilot revenue visibility is weakened and failed vending records must be reconciled before EML scale assumptions are accepted.",
    recommendedAction: "Review vending logs, failed payment records, and customer issue signals.",
    assignedOwner: "Finance collections desk",
    status: "Assigned",
    relatedFundcoAction: "TASK-FCO-218 collections exception review",
    possibleCause: "Failed vending retries, meter communication delay, or customer payment friction.",
    history: [
      "Collection dip detected after Thursday close.",
      "Six failed vending events linked to three customer accounts.",
      "Finance review task proposed for FundCo AI."
    ]
  },
  {
    id: "ALT-1003",
    severity: "High",
    type: "Device communication failure",
    assetId: "GRO-MTR-002",
    asset: "GroSolar Metering Pilot Zone",
    time: "2026-05-26 11:05",
    issue: "Meter MTR-014 stopped reporting after a vending attempt.",
    impact:
      "The customer may have paid without reliable confirmation, creating service and reconciliation risk.",
    recommendedAction: "Run meter communication test and reconcile customer vending attempt.",
    assignedOwner: "GroSolar operations desk",
    status: "Open",
    relatedFundcoAction: "TASK-FCO-219 meter communication check",
    possibleCause: "Meter SIM, backend sync delay, or prepaid platform callback failure.",
    history: [
      "Vending attempt captured at 10:18.",
      "Meter heartbeat failed at 10:26.",
      "Customer issue signal logged at 11:05."
    ]
  },
  {
    id: "ALT-1004",
    severity: "Medium",
    type: "Abnormal performance",
    assetId: "CEF-SOL-BET",
    asset: "CEF Solar Site Beta",
    time: "2026-05-25 16:40",
    issue: "Output below expected by 8.7 percent for two days.",
    impact:
      "Performance variance may reduce revenue and weaken investor-ready operating evidence if not explained.",
    recommendedAction: "Compare inverter logs with weather-adjusted expected output.",
    assignedOwner: "Solar operations team",
    status: "Open",
    relatedFundcoAction: "TASK-FCO-214 inverter log review",
    possibleCause: "Inverter derating, weather mismatch, soiling, or OEM reporting delay.",
    history: [
      "Variance detected on 24 May.",
      "OEM portal export missing full fault-code history.",
      "Operations review opened on 25 May."
    ]
  },
  {
    id: "ALT-1005",
    severity: "Low",
    type: "Maintenance due",
    assetId: "SWP-DEP-001",
    asset: "SwapStation Depot 01",
    time: "2026-05-24 08:15",
    issue: "Battery rack inspection due within five operating days.",
    impact: "Low immediate risk, but depot availability depends on preventive checks.",
    recommendedAction: "Confirm inspection window and assign depot operations lead.",
    assignedOwner: "Depot operations team",
    status: "Open",
    relatedFundcoAction: "TASK-FCO-210 preventive maintenance planning",
    possibleCause: "Normal preventive maintenance schedule.",
    history: ["Maintenance window generated from depot operations calendar."]
  },
  {
    id: "ALT-1006",
    severity: "Low",
    type: "Resolved",
    assetId: "GRO-MTR-001",
    asset: "GroSolar Mini-Grid Cluster A",
    time: "2026-05-23 14:10",
    issue: "Meter clock mismatch corrected.",
    impact: "Resolved before finance reconciliation close.",
    recommendedAction: "Keep in weekly pilot lessons log.",
    assignedOwner: "GroSolar operations desk",
    status: "Resolved",
    relatedFundcoAction: "TASK-FCO-199 closed",
    possibleCause: "Device clock drift.",
    history: [
      "Mismatch detected during reconciliation.",
      "Meter clock corrected.",
      "Finance confirmed no outstanding customer credit issue."
    ]
  }
];
