import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-cef-line bg-cef-surface">
      <Container className="flex min-h-16 items-center justify-between gap-5 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-cef-navy bg-cef-navy text-sm font-bold text-cef-gold">
            CEF
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold text-cef-navy">CEF Portfolio Management System</span>
            <span className="mt-1 block text-sm text-cef-slate">Integrated with FundCo AI</span>
          </span>
        </Link>
        <div className="hidden items-center gap-5 md:flex">
          <a className="text-sm font-semibold text-cef-slate transition hover:text-cef-navy" href="#vision">
            Vision
          </a>
          <a className="text-sm font-semibold text-cef-slate transition hover:text-cef-navy" href="#preview">
            Platform
          </a>
          <Button href="/demo" icon={<ArrowRight className="h-4 w-4" />} size="sm">
            View Demo
          </Button>
        </div>
        <Button className="shrink-0 md:hidden" href="/demo" size="sm">
          Demo
        </Button>
      </Container>
    </header>
  );
}
