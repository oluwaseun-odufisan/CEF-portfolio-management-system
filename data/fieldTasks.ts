import type { FieldTask } from "@/lib/types";

export const fieldTasks: FieldTask[] = [
  {
    id: "TASK-FCO-221",
    title: "Field review for Substation Control Node West",
    assetId: "SUB-WEST-01",
    owner: "Victor Nnaji",
    dueDate: "2026-05-28",
    priority: "Critical",
    status: "Open",
    linkedAlertId: "ALT-1001"
  },
  {
    id: "TASK-FCO-218",
    title: "GroSolar collection dip reconciliation",
    assetId: "GRO-MTR-002",
    owner: "Ngozi Okafor",
    dueDate: "2026-05-29",
    priority: "High",
    status: "In Progress",
    linkedAlertId: "ALT-1002"
  },
  {
    id: "TASK-FCO-219",
    title: "Meter MTR-014 communication test",
    assetId: "GRO-MTR-002",
    owner: "Tunde Cole",
    dueDate: "2026-05-28",
    priority: "High",
    status: "Open",
    linkedAlertId: "ALT-1003"
  },
  {
    id: "TASK-FCO-214",
    title: "Solar Beta inverter and weather-adjusted output review",
    assetId: "CEF-SOL-BET",
    owner: "Kemi Lawal",
    dueDate: "2026-05-30",
    priority: "Medium",
    status: "Open",
    linkedAlertId: "ALT-1004"
  }
];
