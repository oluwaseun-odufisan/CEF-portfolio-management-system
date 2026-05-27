"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Drawer({
  children,
  onClose,
  open,
  title
}: {
  children: ReactNode;
  onClose: () => void;
  open: boolean;
  title: string;
}) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close drawer overlay"
        className="absolute inset-0 bg-cef-navy/45"
        onClick={onClose}
        type="button"
      />
      <aside
        className={cn(
          "cef-slide-in absolute right-0 top-0 h-full w-full overflow-y-auto border-l border-cef-line bg-cef-surface p-5 shadow-panel",
          "sm:max-w-xl lg:max-w-2xl"
        )}
      >
        <div className="mb-5 flex items-center justify-between gap-4 border-b border-cef-line pb-4">
          <h2 className="text-2xl font-semibold text-cef-navy">{title}</h2>
          <Button aria-label="Close drawer" onClick={onClose} size="sm" variant="secondary">
            <X className="h-5 w-5" />
          </Button>
        </div>
        {children}
      </aside>
    </div>
  );
}
