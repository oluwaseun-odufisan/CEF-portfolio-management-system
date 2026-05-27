"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeMode = "light" | "dark" | "system";

const modes: Array<{ icon: ReactNode; label: string; value: ThemeMode }> = [
  { icon: <Sun className="h-4 w-4" />, label: "Light", value: "light" },
  { icon: <Moon className="h-4 w-4" />, label: "Dark", value: "dark" },
  { icon: <Monitor className="h-4 w-4" />, label: "System", value: "system" }
];

function getStoredMode(): ThemeMode {
  try {
    const stored = window.localStorage?.getItem("cef-theme-mode");
    return stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
  } catch {
    return "system";
  }
}

function storeMode(mode: ThemeMode) {
  try {
    window.localStorage?.setItem("cef-theme-mode", mode);
  } catch {
    // Storage can be unavailable in strict browser contexts; the visible mode still updates.
  }
}

function applyTheme(mode: ThemeMode) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const resolved = mode === "system" ? (prefersDark ? "dark" : "light") : mode;
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themeMode = mode;
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [mode, setMode] = useState<ThemeMode>("system");

  useEffect(() => {
    const nextMode = getStoredMode();
    setMode(nextMode);
    applyTheme(nextMode);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (getStoredMode() === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function choose(nextMode: ThemeMode) {
    setMode(nextMode);
    storeMode(nextMode);
    applyTheme(nextMode);
  }

  return (
    <div
      aria-label="Theme selector"
      className={cn(
        "inline-flex rounded-control border border-cef-line bg-cef-canvas p-1",
        compact && "shrink-0"
      )}
      role="group"
    >
      {modes.map((item) => (
        <button
          aria-label={`${item.label} mode`}
          className={cn(
            "inline-flex min-h-9 items-center justify-center gap-2 rounded-control px-2.5 text-sm font-semibold text-cef-slate transition-colors",
            mode === item.value && "bg-cef-navy text-cef-surface",
            compact && "px-2"
          )}
          key={item.value}
          onClick={() => choose(item.value)}
          type="button"
        >
          {item.icon}
          {compact ? <span className="screen-reader-only">{item.label}</span> : <span className="hidden xl:inline">{item.label}</span>}
        </button>
      ))}
    </div>
  );
}
