import type { Asset } from "@/lib/types";

export const assets: Asset[] = [
  {
    id: "GRO-MTR-001",
    name: "GroSolar Mini-Grid Cluster A",
    type: "Metering / Vending",
    fund: "CEF",
    location: "Lagos, Ikorodu service cluster",
    capacity: "30 customers",
    customerCount: 30,
    status: "Online",
    healthScore: 94,
    uptime: 97.8,
    collectionEfficiency: 96.4,
    monthlyRevenue: 82600000,
    outstandingRevenue: 2140000,
    lastSignal: "8 minutes ago",
    monitoringSource: "API Feed",
    assignedTeam: "GroSolar operations desk",
    riskLevel: "Low",
    notes:
      "Pilot cluster is reporting consistently. Current priority is proving vending, meter, and collections visibility before wider rollout.",
    faultHistory: [
      "Minor meter clock mismatch corrected on 18 May 2026.",
      "Two customer vending retries linked to network latency.",
      "No generation outage recorded in the current reporting period."
    ],
    maintenanceTimeline: [
      "Inverter check completed on 16 May 2026.",
      "Meter audit scheduled for 30 May 2026.",
      "Battery balancing inspection due 7 Jun 2026."
    ],
    personnel: ["Aisha Bello", "Tunde Cole", "GroSolar field desk"],
    uptimeHistory: [
      { label: "Mon", value: 98.1 },
      { label: "Tue", value: 97.6 },
      { label: "Wed", value: 98.4 },
      { label: "Thu", value: 96.9 },
      { label: "Fri", value: 97.8 },
      { label: "Sat", value: 98.3 },
      { label: "Sun", value: 97.8 }
    ]
  },
  {
    id: "GRO-MTR-002",
    name: "GroSolar Metering Pilot Zone",
    type: "Metering / Vending",
    fund: "CEF",
    location: "Lagos, Ajah customer zone",
    capacity: "18 customers",
    customerCount: 18,
    status: "Warning",
    healthScore: 86,
    uptime: 91.2,
    collectionEfficiency: 84.8,
    monthlyRevenue: 43800000,
    outstandingRevenue: 6820000,
    lastSignal: "22 minutes ago",
    monitoringSource: "Metering Platform",
    assignedTeam: "Finance collections and metering team",
    riskLevel: "High",
    notes:
      "Rich pilot example. Vending data is available, but failed vending retries and a collection dip need validation before EML scale planning.",
    faultHistory: [
      "Meter MTR-014 stopped reporting after a vending attempt.",
      "Six failed vending events recorded across three customers in the last 72 hours.",
      "Cluster collection efficiency fell below the 7-day average on Thursday."
    ],
    maintenanceTimeline: [
      "SIM/data status review opened on 24 May 2026.",
      "Meter MTR-014 field check scheduled for 28 May 2026.",
      "Pilot data quality review due 31 May 2026."
    ],
    personnel: ["Ngozi Okafor", "Musa Ibrahim", "Finance collections desk"],
    uptimeHistory: [
      { label: "Mon", value: 95.2 },
      { label: "Tue", value: 94.7 },
      { label: "Wed", value: 92.3 },
      { label: "Thu", value: 88.6 },
      { label: "Fri", value: 90.4 },
      { label: "Sat", value: 91.8 },
      { label: "Sun", value: 91.2 }
    ]
  },
  {
    id: "EML-ZN-001",
    name: "EML Service Zone 01",
    type: "Customer Energy Zone",
    fund: "CEF",
    location: "Ogun, Abeokuta expansion belt",
    capacity: "1,200 planned customers",
    customerCount: 0,
    status: "Onboarding",
    healthScore: 72,
    uptime: 0,
    collectionEfficiency: 0,
    monthlyRevenue: 0,
    outstandingRevenue: 0,
    lastSignal: "Integration pending",
    monitoringSource: "Integration Pending",
    assignedTeam: "Product integration team",
    riskLevel: "Scale Prep",
    notes:
      "Zone is included to model EML onboarding pressure. API access, customer identity mapping, and collections events must be agreed before live customer growth.",
    faultHistory: [
      "No live faults. Integration documentation pending.",
      "Customer data mapping still under review."
    ],
    maintenanceTimeline: [
      "Vendor API workshop planned for 29 May 2026.",
      "Pilot data schema review due 4 Jun 2026."
    ],
    personnel: ["Daniel Essien", "Product integration desk"],
    uptimeHistory: [
      { label: "Mon", value: 0 },
      { label: "Tue", value: 0 },
      { label: "Wed", value: 0 },
      { label: "Thu", value: 0 },
      { label: "Fri", value: 0 },
      { label: "Sat", value: 0 },
      { label: "Sun", value: 0 }
    ]
  },
  {
    id: "EML-ZN-002",
    name: "EML Service Zone 02",
    type: "Customer Energy Zone",
    fund: "CEF",
    location: "Oyo, Ibadan peri-urban zone",
    capacity: "1,500 planned customers",
    customerCount: 0,
    status: "Onboarding",
    healthScore: 70,
    uptime: 0,
    collectionEfficiency: 0,
    monthlyRevenue: 0,
    outstandingRevenue: 0,
    lastSignal: "Integration pending",
    monitoringSource: "Integration Pending",
    assignedTeam: "Product integration team",
    riskLevel: "Scale Prep",
    notes:
      "Zone is prepared for scale readiness modelling. The platform should not wait for 100,000 customers before defining event and collections controls.",
    faultHistory: ["No live faults. Integration dependency remains open."],
    maintenanceTimeline: [
      "Operating process review due 3 Jun 2026.",
      "Customer service queue model due 10 Jun 2026."
    ],
    personnel: ["Daniel Essien", "EML readiness desk"],
    uptimeHistory: [
      { label: "Mon", value: 0 },
      { label: "Tue", value: 0 },
      { label: "Wed", value: 0 },
      { label: "Thu", value: 0 },
      { label: "Fri", value: 0 },
      { label: "Sat", value: 0 },
      { label: "Sun", value: 0 }
    ]
  },
  {
    id: "CEF-SOL-ALP",
    name: "CEF Solar Site Alpha",
    type: "Solar Site",
    fund: "CEF",
    location: "Lagos, Epe corridor",
    capacity: "2.4 MW",
    customerCount: 0,
    status: "Online",
    healthScore: 96,
    uptime: 98.6,
    collectionEfficiency: 98.1,
    monthlyRevenue: 164900000,
    outstandingRevenue: 1840000,
    lastSignal: "4 minutes ago",
    monitoringSource: "API Feed",
    assignedTeam: "Solar operations team",
    riskLevel: "Low",
    notes:
      "Strong performing site. Inverter API is reliable and gives a clean example of physical asset data feeding portfolio intelligence.",
    faultHistory: [
      "No critical faults in current month.",
      "Weather-adjusted output variance within tolerance."
    ],
    maintenanceTimeline: [
      "Preventive maintenance completed on 12 May 2026.",
      "String inspection due 9 Jun 2026."
    ],
    personnel: ["Kemi Lawal", "Solar operations desk"],
    uptimeHistory: [
      { label: "Mon", value: 98.8 },
      { label: "Tue", value: 98.4 },
      { label: "Wed", value: 98.7 },
      { label: "Thu", value: 98.1 },
      { label: "Fri", value: 98.6 },
      { label: "Sat", value: 98.9 },
      { label: "Sun", value: 98.6 }
    ]
  },
  {
    id: "CEF-SOL-BET",
    name: "CEF Solar Site Beta",
    type: "Solar Site",
    fund: "CEF",
    location: "Abuja, industrial service belt",
    capacity: "2.3 MW",
    customerCount: 0,
    status: "Warning",
    healthScore: 82,
    uptime: 92.4,
    collectionEfficiency: 89.6,
    monthlyRevenue: 139700000,
    outstandingRevenue: 12850000,
    lastSignal: "31 minutes ago",
    monitoringSource: "OEM Portal",
    assignedTeam: "Solar operations team",
    riskLevel: "Medium",
    notes:
      "Output variance has persisted for two days. The next action is to compare inverter logs against weather-adjusted expected output.",
    faultHistory: [
      "Output below expected by 8.7 percent for two days.",
      "OEM portal export does not yet include full fault-code history."
    ],
    maintenanceTimeline: [
      "Inverter log review opened on 25 May 2026.",
      "Field inspection window held for 29 May 2026."
    ],
    personnel: ["Kemi Lawal", "Abuja field partner"],
    uptimeHistory: [
      { label: "Mon", value: 95.0 },
      { label: "Tue", value: 94.1 },
      { label: "Wed", value: 92.9 },
      { label: "Thu", value: 91.8 },
      { label: "Fri", value: 92.2 },
      { label: "Sat", value: 92.6 },
      { label: "Sun", value: 92.4 }
    ]
  },
  {
    id: "SUB-EAST-01",
    name: "Substation Control Node East",
    type: "Substation",
    fund: "CEF",
    location: "Lagos, East distribution node",
    capacity: "11 kV node",
    customerCount: 0,
    status: "Review",
    healthScore: 68,
    uptime: 0,
    collectionEfficiency: 0,
    monthlyRevenue: 0,
    outstandingRevenue: 0,
    lastSignal: "OEM review pending",
    monitoringSource: "OEM Portal",
    assignedTeam: "Technical monitoring team",
    riskLevel: "Medium",
    notes:
      "Asset is being used to document substation visibility gaps, OEM data access, and required field workflow.",
    faultHistory: [
      "Current platform does not expose complete fault-code history.",
      "Manual export requested but not yet automated."
    ],
    maintenanceTimeline: [
      "OEM access review due 30 May 2026.",
      "Signal availability matrix due 6 Jun 2026."
    ],
    personnel: ["Victor Nnaji", "OEM liaison"],
    uptimeHistory: [
      { label: "Mon", value: 0 },
      { label: "Tue", value: 0 },
      { label: "Wed", value: 0 },
      { label: "Thu", value: 0 },
      { label: "Fri", value: 0 },
      { label: "Sat", value: 0 },
      { label: "Sun", value: 0 }
    ]
  },
  {
    id: "SUB-WEST-01",
    name: "Substation Control Node West",
    type: "Substation",
    fund: "CEF",
    location: "Ogun, West distribution node",
    capacity: "33 kV node",
    customerCount: 0,
    status: "Offline",
    healthScore: 42,
    uptime: 72.5,
    collectionEfficiency: 0,
    monthlyRevenue: 0,
    outstandingRevenue: 0,
    lastSignal: "4h 32m ago",
    monitoringSource: "Manual Upload",
    assignedTeam: "Technical monitoring team",
    riskLevel: "Critical",
    notes:
      "Critical review asset. No signal for more than four hours and OEM access is required to separate device fault from data-visibility failure.",
    faultHistory: [
      "No signal for 4h 32m on 27 May 2026.",
      "Manual check reported incomplete outage history.",
      "OEM data export requested by technical monitoring."
    ],
    maintenanceTimeline: [
      "Field review assigned for 28 May 2026.",
      "OEM data export request due 28 May 2026.",
      "Root cause review due 31 May 2026."
    ],
    personnel: ["Victor Nnaji", "Ogun field review team"],
    uptimeHistory: [
      { label: "Mon", value: 88.0 },
      { label: "Tue", value: 84.2 },
      { label: "Wed", value: 80.3 },
      { label: "Thu", value: 76.4 },
      { label: "Fri", value: 74.8 },
      { label: "Sat", value: 73.1 },
      { label: "Sun", value: 72.5 }
    ]
  },
  {
    id: "BATT-ALP-01",
    name: "Battery Bank Alpha",
    type: "Battery Storage",
    fund: "CEF",
    location: "Lagos, Epe corridor",
    capacity: "1.2 MWh",
    customerCount: 0,
    status: "Online",
    healthScore: 88,
    uptime: 94.8,
    collectionEfficiency: 0,
    monthlyRevenue: 0,
    outstandingRevenue: 0,
    lastSignal: "10 minutes ago",
    monitoringSource: "Gateway",
    assignedTeam: "Operations",
    riskLevel: "Low",
    notes: "Battery storage is operating within expected charge and discharge range.",
    faultHistory: [
      "No critical faults in the selected reporting period.",
      "Charge and discharge range remains within operating tolerance."
    ],
    maintenanceTimeline: [
      "Battery balancing review completed on 21 May 2026.",
      "Thermal inspection due 6 Jun 2026."
    ],
    personnel: ["Kemi Lawal", "Storage operations desk"],
    uptimeHistory: [
      { label: "Mon", value: 95.4 },
      { label: "Tue", value: 94.9 },
      { label: "Wed", value: 94.1 },
      { label: "Thu", value: 93.8 },
      { label: "Fri", value: 94.4 },
      { label: "Sat", value: 94.9 },
      { label: "Sun", value: 94.8 }
    ]
  },
  {
    id: "GWY-003",
    name: "Gateway Node 003",
    type: "IoT Gateway",
    fund: "CEF",
    location: "Lagos, Ajah customer zone",
    capacity: "12 connected devices",
    customerCount: 0,
    status: "Warning",
    healthScore: 70,
    uptime: 86.9,
    collectionEfficiency: 0,
    monthlyRevenue: 0,
    outstandingRevenue: 0,
    lastSignal: "1h 36m ago",
    monitoringSource: "Gateway",
    assignedTeam: "Technical Monitoring",
    riskLevel: "High",
    notes: "Connected devices are reporting delayed events. SIM/data status and gateway health should be checked.",
    faultHistory: [
      "12 connected devices reported late events on 27 May 2026.",
      "Gateway event backlog requires technical monitoring review."
    ],
    maintenanceTimeline: [
      "Gateway health check opened on 27 May 2026.",
      "SIM/data status review due 28 May 2026."
    ],
    personnel: ["Victor Nnaji", "IoT systems desk"],
    uptimeHistory: [
      { label: "Mon", value: 91.2 },
      { label: "Tue", value: 90.4 },
      { label: "Wed", value: 88.6 },
      { label: "Thu", value: 87.2 },
      { label: "Fri", value: 86.1 },
      { label: "Sat", value: 87.4 },
      { label: "Sun", value: 86.9 }
    ]
  },
  {
    id: "SWP-DEP-001",
    name: "SwapStation Depot 01",
    type: "Battery Swap Depot",
    fund: "CEF",
    location: "Lagos, commercial mobility corridor",
    capacity: "120 battery slots",
    customerCount: 420,
    status: "Online",
    healthScore: 90,
    uptime: 95.6,
    collectionEfficiency: 93.2,
    monthlyRevenue: 57200000,
    outstandingRevenue: 3960000,
    lastSignal: "11 minutes ago",
    monitoringSource: "Gateway",
    assignedTeam: "Depot operations team",
    riskLevel: "Low",
    notes:
      "Depot shows how adjacent clean-energy infrastructure can enter the same control model once CEF proves the operating pattern.",
    faultHistory: [
      "Three delayed gateway events on 22 May 2026.",
      "Charging bay 04 sensor recalibrated."
    ],
    maintenanceTimeline: [
      "Battery rack inspection due 1 Jun 2026.",
      "Gateway firmware check due 5 Jun 2026."
    ],
    personnel: ["Yusuf Adeyemi", "Depot operations desk"],
    uptimeHistory: [
      { label: "Mon", value: 96.4 },
      { label: "Tue", value: 95.9 },
      { label: "Wed", value: 95.1 },
      { label: "Thu", value: 94.8 },
      { label: "Fri", value: 95.4 },
      { label: "Sat", value: 95.7 },
      { label: "Sun", value: 95.6 }
    ]
  }
];

export const richAssetExample = assets.find((asset) => asset.id === "SUB-WEST-01") ?? assets[0];
