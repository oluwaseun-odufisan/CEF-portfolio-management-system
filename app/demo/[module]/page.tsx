import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertsPage } from "@/components/demo/alerts-page";
import { AssetRegistryPage } from "@/components/demo/asset-registry-page";
import { CollectionsPage } from "@/components/demo/collections-page";
import { DigitalTwinPage } from "@/components/demo/digital-twin-page";
import { EmlScalePage } from "@/components/demo/eml-scale-page";
import { ExpansionPage } from "@/components/demo/expansion-page";
import { FundCoAiPage } from "@/components/demo/fundco-ai-page";
import { GroSolarPage } from "@/components/demo/grosolar-page";
import { OverviewDashboard } from "@/components/demo/overview-dashboard";
import { ReportsPage } from "@/components/demo/reports-page";
import { SubstationPage } from "@/components/demo/substation-page";
import { demoNavigation } from "@/data/navigation";

const pageMap = {
  alerts: AlertsPage,
  assets: AssetRegistryPage,
  collections: CollectionsPage,
  "digital-twin": DigitalTwinPage,
  "eml-scale": EmlScalePage,
  expansion: ExpansionPage,
  "fundco-ai": FundCoAiPage,
  grosolar: GroSolarPage,
  overview: OverviewDashboard,
  reports: ReportsPage,
  substation: SubstationPage
};

type ModuleName = keyof typeof pageMap;

type DemoModulePageProps = {
  params: Promise<{
    module: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(pageMap).map((module) => ({ module }));
}

export async function generateMetadata({ params }: DemoModulePageProps): Promise<Metadata> {
  const { module } = await params;
  const navItem = demoNavigation.find((item) => item.module === module);

  return {
    title: navItem?.label ?? "Demo Module"
  };
}

export default async function DemoModulePage({ params }: DemoModulePageProps) {
  const { module } = await params;

  if (!(module in pageMap)) {
    notFound();
  }

  const Page = pageMap[module as ModuleName];
  return <Page />;
}
