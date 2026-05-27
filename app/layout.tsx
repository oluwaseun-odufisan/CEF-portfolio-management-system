import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "CEF Portfolio Management System",
    template: "%s | CEF Portfolio Management System"
  },
  description:
    "Premium portfolio intelligence and asset-control system for Clean Energy Fund, integrated with FundCo AI.",
  metadataBase: new URL("https://cef-portfolio.local")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(() => {
  try {
    const stored = window.localStorage?.getItem("cef-theme-mode") || "system";
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved = stored === "system" ? (prefersDark ? "dark" : "light") : stored;
    document.documentElement.dataset.theme = resolved;
    document.documentElement.dataset.themeMode = stored;
  } catch {
    document.documentElement.dataset.theme = "light";
    document.documentElement.dataset.themeMode = "system";
  }
})();
            `.trim()
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
