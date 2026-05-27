import type { Fund } from "@/lib/types";

export const funds: Fund[] = [
  {
    id: "CEF",
    name: "Clean Energy Fund",
    status: "Active",
    role: "First working portfolio intelligence layer",
    currentScope: "GroSolar pilot, EML scale readiness, Substation review, solar assets, and depot visibility.",
    nextStep: "Prove the operating model and convert exceptions into FundCo AI actions."
  },
  {
    id: "HSF",
    name: "HSF",
    status: "Future Onboarding",
    role: "Future extension path once CEF controls are proven",
    currentScope: "Entity boundary and reporting requirements to be mapped after CEF pilot evidence.",
    nextStep: "Define assets, operating signals, and reporting cadence."
  },
  {
    id: "AgroFund",
    name: "AgroFund",
    status: "Future Onboarding",
    role: "Future portfolio template for agriculture-linked infrastructure",
    currentScope: "Potential shared controls for field assets, collections, finance visibility, and governance.",
    nextStep: "Adapt the CEF proof model to AgroFund asset and revenue logic."
  },
  {
    id: "GROUP",
    name: "FundCo Group Control",
    status: "Future Onboarding",
    role: "Multi-company oversight and executive reporting",
    currentScope: "Shared governance, reporting, escalation, performance evidence, and company-level boundaries.",
    nextStep: "Use CEF as the first validated group infrastructure technology layer."
  }
];

export const rolloutStages = [
  "CEF proof model and GroSolar metering pilot",
  "EML scale readiness and substation technical gap review",
  "HSF and AgroFund onboarding after operating evidence is proven",
  "FundCo group-level reporting, governance, and multi-company control"
];
