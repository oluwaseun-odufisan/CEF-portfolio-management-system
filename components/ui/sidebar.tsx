"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DemoNavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Sidebar({ items }: { items: DemoNavItem[] }) {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen border-r border-cef-blueGrey bg-cef-navy text-cef-surface lg:flex lg:flex-col">
      <div className="border-b border-cef-blueGrey p-5">
        <Link href="/" className="flex items-start gap-3">
          <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-control border border-cef-gold bg-cef-gold text-sm font-bold text-cef-navy">
            CEF
          </span>
          <span>
            <span className="block text-sm font-semibold text-cef-gold">Portfolio Management</span>
            <span className="mt-1 block text-[15px] leading-6 text-cef-surfaceAlt">Integrated with FundCo AI</span>
          </span>
        </Link>
        <div className="mt-5 border-t border-cef-blueGrey pt-4">
          <p className="text-sm font-semibold text-cef-surfaceAlt">Active demo fund</p>
          <p className="mt-1 text-lg font-semibold text-cef-surface">Clean Energy Fund</p>
          <p className="mt-1 text-sm leading-5 text-cef-surfaceAlt">Realistic fictional data for product demonstration.</p>
        </div>
      </div>
      <nav className="cef-scrollbar min-h-0 flex-1 overflow-y-auto p-3">
        <p className="px-3 pb-2 pt-1 text-sm font-bold uppercase text-cef-gold">Demo workspace</p>
        {items
          .filter((item) => item.href !== "/design-test")
          .map((item) => {
            const active = pathname === item.href || (item.href !== "/demo" && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                className={cn(
                  "mb-1 flex items-center gap-3 rounded-control border px-3 py-3 text-[15px] font-semibold transition",
                  active
                    ? "border-cef-gold bg-cef-gold text-cef-navy"
                    : "border-transparent text-cef-surfaceAlt hover:border-cef-blueGrey hover:bg-cef-navy2 hover:text-cef-surface"
                )}
                href={item.href}
                key={item.href}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {item.label}
              </Link>
            );
          })}
      </nav>
      <div className="border-t border-cef-blueGrey p-4 text-sm leading-6 text-cef-surfaceAlt">
        CEF first, GroSolar pilot, EML scale readiness, Substation review, wider FundCo control later.
      </div>
    </aside>
  );
}
