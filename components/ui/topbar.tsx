"use client";

import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Topbar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="sticky top-0 z-30 border-b border-cef-line bg-cef-surface">
      <div className="flex min-h-16 flex-col gap-3 px-3 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Button aria-label="Open navigation" className="lg:hidden" onClick={onMenu} size="sm" variant="secondary">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-cef-gold2">CEF Portfolio Control Environment</p>
            <p className="text-[15px] leading-6 text-cef-slate">Fund: Clean Energy Fund | Reporting Period: Last 7 days</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-end">
          <label className="relative col-span-2 min-w-0 xl:w-[320px]">
            <span className="screen-reader-only">Search</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cef-slate" />
            <input
              className="min-h-11 w-full rounded-control border border-cef-line bg-cef-canvas pl-9 pr-3 text-[15px] text-cef-navy"
              placeholder="Search assets, alerts, reports, or locations"
            />
          </label>
          <label className="screen-reader-only" htmlFor="role">
            Role
          </label>
          <select
            className="col-span-2 min-h-11 min-w-0 rounded-control border border-cef-line bg-cef-canvas px-3 text-[15px] font-semibold text-cef-navy sm:col-span-1"
            defaultValue="Executive / CIO"
            id="role"
          >
            <option>Executive / CIO</option>
            <option>Portfolio Manager</option>
            <option>Finance and Collections Analyst</option>
            <option>Operations Lead</option>
            <option>Technical Monitoring Team</option>
          </select>
          <Button href="/" size="sm" variant="quiet">
            Landing
          </Button>
          <Button size="sm" variant="secondary">
            <Bell className="h-5 w-5" />
            Open Exceptions
          </Button>
        </div>
      </div>
    </header>
  );
}
