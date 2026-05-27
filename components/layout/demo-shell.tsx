"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";
import { Topbar } from "@/components/ui/topbar";
import { demoNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function DemoShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-cef-navy lg:grid lg:grid-cols-[304px_minmax(0,1fr)]">
      <Sidebar items={demoNavigation} />
      <div className="min-w-0 bg-cef-canvas">
        <Topbar onMenu={() => setOpen(true)} />
        <main className="cef-reveal px-3 py-5 sm:px-6 lg:px-8">{children}</main>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            aria-label="Close navigation overlay"
            className="absolute inset-0 bg-cef-navy/45"
            onClick={() => setOpen(false)}
            type="button"
          />
          <aside className="absolute left-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto border-r border-cef-blueGrey bg-cef-navy p-4 text-cef-surface shadow-panel">
            <div className="mb-4 flex items-center justify-between border-b border-cef-blueGrey pb-4">
              <div>
                <p className="font-semibold text-cef-gold">CEF Control</p>
                <p className="mt-1 text-sm text-cef-surfaceAlt">Product navigation</p>
              </div>
              <Button aria-label="Close navigation" onClick={() => setOpen(false)} size="sm" variant="dark">
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="grid gap-2">
              {demoNavigation
                .filter((item) => item.href !== "/design-test")
                .map((item) => {
                  const active = pathname === item.href || (item.href !== "/demo" && pathname.startsWith(item.href));
                  const Icon = item.icon;

                  return (
                    <Link
                      className={cn(
                        "flex items-center gap-3 rounded-control border px-3 py-3 text-[15px] font-semibold",
                        active
                          ? "border-cef-gold bg-cef-gold text-cef-navy"
                          : "border-cef-blueGrey text-cef-surfaceAlt"
                      )}
                      href={item.href}
                      key={item.href}
                      onClick={() => setOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  );
                })}
            </nav>
          </aside>
        </div>
      ) : null}
    </div>
  );
}
