"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type DataTableColumn<T> = {
  header: string;
  render: (row: T) => ReactNode;
  mobileLabel?: string;
};

export function DataTable<T>({
  columns,
  getRowId,
  onRowClick,
  rows
}: {
  columns: DataTableColumn<T>[];
  getRowId: (row: T) => string;
  onRowClick?: (row: T) => void;
  rows: T[];
}) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-panel border border-cef-line bg-cef-surface shadow-lift lg:block">
        <table className="w-full border-collapse text-left">
          <thead className="bg-cef-navy text-cef-surface">
            <tr>
              {columns.map((column) => (
                <th className="px-4 py-4 text-sm font-semibold uppercase" key={column.header}>
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                className={cn(
                  "border-b border-cef-line transition-colors last:border-b-0",
                  onRowClick && "cursor-pointer hover:bg-cef-surfaceAlt"
                )}
                key={getRowId(row)}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td className="px-4 py-4 align-top text-[15px] leading-6" key={column.header}>
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 lg:hidden">
        {rows.map((row) => (
          <button
            className="w-full rounded-panel border border-cef-line bg-cef-surface p-4 text-left shadow-lift transition-colors hover:border-cef-gold"
            key={getRowId(row)}
            onClick={() => onRowClick?.(row)}
            type="button"
          >
            <div className="grid gap-3">
              {columns.map((column) => (
                <div className="grid gap-1" key={column.header}>
                  <span className="text-sm font-semibold text-cef-slate">
                    {column.mobileLabel ?? column.header}
                  </span>
                  <span className="text-[15px] leading-6 text-cef-ink">{column.render(row)}</span>
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
