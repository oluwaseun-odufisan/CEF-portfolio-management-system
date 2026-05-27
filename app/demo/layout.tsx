import type { Metadata } from "next";
import { DemoShell } from "@/components/layout/demo-shell";

export const metadata: Metadata = {
  title: "Demo Product Website",
  description:
    "CEF Portfolio Management demo product website with assets, collections, alerts, pilots, reports, and FundCo AI integration."
};

export default function DemoLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DemoShell>{children}</DemoShell>;
}
