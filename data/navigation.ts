import {
  Bell,
  Boxes,
  CircleDollarSign,
  ClipboardList,
  Database,
  Gauge,
  GitBranch,
  Layers,
  Network,
  RadioTower,
  Route,
  Zap,
  type LucideIcon
} from "lucide-react";

export type DemoNavItem = {
  href: string;
  label: string;
  module?: string;
  icon: LucideIcon;
};

export const demoNavigation: DemoNavItem[] = [
  { href: "/demo", label: "Overview", module: "overview", icon: Gauge },
  { href: "/demo/assets", label: "Asset Registry", module: "assets", icon: Database },
  { href: "/demo/collections", label: "Collections", module: "collections", icon: CircleDollarSign },
  { href: "/demo/alerts", label: "Alerts", module: "alerts", icon: Bell },
  { href: "/demo/grosolar", label: "GroSolar Pilot", module: "grosolar", icon: Zap },
  { href: "/demo/eml-scale", label: "EML Scale", module: "eml-scale", icon: Route },
  { href: "/demo/substation", label: "Substation Review", module: "substation", icon: RadioTower },
  { href: "/demo/fundco-ai", label: "FundCo AI Integration", module: "fundco-ai", icon: Layers },
  { href: "/demo/expansion", label: "Multi-Fund Expansion", module: "expansion", icon: Boxes },
  { href: "/demo/reports", label: "Reports", module: "reports", icon: ClipboardList },
  { href: "/demo/digital-twin", label: "Digital Twin", module: "digital-twin", icon: Network },
  { href: "/design-test", label: "Design Test", icon: GitBranch }
];
