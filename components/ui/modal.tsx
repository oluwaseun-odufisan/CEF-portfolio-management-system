"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function Modal({
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        aria-label="Close modal overlay"
        className="absolute inset-0 bg-cef-navy/45"
        onClick={onClose}
        type="button"
      />
      <section className="cef-reveal relative w-full max-w-lg rounded-panel border border-cef-line bg-cef-surface p-5 shadow-panel">
        <div className="mb-5 flex items-center justify-between gap-4 border-b border-cef-line pb-4">
          <h2 className="text-2xl font-semibold text-cef-navy">{title}</h2>
          <Button aria-label="Close modal" onClick={onClose} size="sm" variant="secondary">
            <X className="h-5 w-5" />
          </Button>
        </div>
        {children}
      </section>
    </div>
  );
}
