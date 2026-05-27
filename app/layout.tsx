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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
