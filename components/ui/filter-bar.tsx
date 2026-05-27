"use client";

import type { ReactNode } from "react";

export function FilterBar({ children }: { children: ReactNode }) {
  return (
    <div className="min-w-0 rounded-panel border border-cef-line bg-cef-surface p-3 shadow-lift sm:p-4">
      <div className="mb-3 flex items-center gap-2 border-b border-cef-line pb-3">
        <p className="text-sm font-semibold uppercase text-cef-slate">Filters</p>
      </div>
      <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-5">{children}</div>
    </div>
  );
}

export function FilterInput({
  label,
  onChange,
  placeholder,
  value
}: {
  label: string;
  onChange: (value: string) => void;
  placeholder?: string;
  value: string;
}) {
  return (
    <label className="grid min-w-0 gap-2">
      <span className="text-sm font-semibold text-cef-slate">{label}</span>
      <input
        className="min-h-11 w-full min-w-0 rounded-control border border-cef-line bg-cef-canvas px-3 text-[15px] text-cef-navy transition-colors focus:border-cef-gold focus:bg-cef-white"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

export function FilterSelect({
  label,
  onChange,
  options,
  value
}: {
  label: string;
  onChange: (value: string) => void;
  options: string[];
  value: string;
}) {
  return (
    <label className="grid min-w-0 gap-2">
      <span className="text-sm font-semibold text-cef-slate">{label}</span>
      <select
        className="min-h-11 w-full min-w-0 rounded-control border border-cef-line bg-cef-canvas px-3 text-[15px] text-cef-navy transition-colors focus:border-cef-gold focus:bg-cef-white"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
