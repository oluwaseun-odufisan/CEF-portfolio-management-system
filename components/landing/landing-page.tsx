import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AssetIntelligenceVisual } from "@/components/visuals/asset-intelligence-visual";
import { HeroVisual } from "@/components/visuals/hero-visual";
import { ProductMockupVisual } from "@/components/visuals/product-mockup-visual";
import { landingCopy } from "@/data/demoSpec";

const systemStats = [
  ["Portfolio Value", "NGN 18.4B"],
  ["Active Assets", "42"],
  ["Daily Collections", "NGN 12.8M"],
  ["Open Incidents", "17"]
];

const productModules = [
  "Executive overview dashboard",
  "Asset registry and asset detail",
  "Collections and revenue intelligence",
  "Technical monitoring and alerts",
  "GroSolar pilot environment",
  "EML scale readiness view",
  "Substation gap review",
  "FundCo AI action flow",
  "Reporting center",
  "Digital twin network view"
];

function SectionLead({
  eyebrow,
  title,
  body,
  dark = false
}: {
  body: string;
  dark?: boolean;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className={dark ? "text-sm font-semibold uppercase text-cef-gold" : "text-sm font-semibold uppercase text-cef-gold2"}>
        {eyebrow}
      </p>
      <h2 className={dark ? "mt-4 text-3xl font-semibold leading-tight text-cef-surface sm:text-5xl" : "mt-4 text-3xl font-semibold leading-tight text-cef-navy sm:text-5xl"}>
        {title}
      </h2>
      <p className={dark ? "mt-5 text-lg leading-8 text-cef-surfaceAlt" : "mt-5 text-lg leading-8 text-cef-slate"}>
        {body}
      </p>
    </div>
  );
}

function NumberedList({ items, dark = false }: { dark?: boolean; items: string[] }) {
  return (
    <div className={dark ? "divide-y divide-cef-blueGrey border-y border-cef-blueGrey" : "divide-y divide-cef-line border-y border-cef-line"}>
      {items.map((item, index) => (
        <div className="grid gap-3 py-4 sm:grid-cols-[52px_1fr] sm:items-start" key={item}>
          <span className={dark ? "text-sm font-semibold text-cef-gold" : "text-sm font-semibold text-cef-gold2"}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className={dark ? "text-[15px] font-semibold leading-7 text-cef-surfaceAlt" : "text-[15px] font-semibold leading-7 text-cef-ink"}>
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function CapabilityTable() {
  return (
    <div className="overflow-hidden rounded-panel border border-cef-line bg-cef-surface">
      {landingCopy.capabilities.map(([title, body]) => (
        <div className="grid gap-2 border-b border-cef-line px-4 py-4 last:border-b-0 sm:grid-cols-[210px_1fr] sm:px-5" key={title}>
          <h3 className="text-lg font-semibold text-cef-navy">{title}</h3>
          <p className="text-[15px] leading-7 text-cef-slate">{body}</p>
        </div>
      ))}
    </div>
  );
}

function Roadmap() {
  return (
    <div className="overflow-hidden rounded-panel border border-cef-line bg-cef-surface">
      {landingCopy.roadmap.map(([title, body], index) => (
        <div className="grid gap-3 border-b border-cef-line px-4 py-4 last:border-b-0 sm:grid-cols-[80px_210px_1fr] sm:px-5" key={title}>
          <p className="text-sm font-semibold text-cef-gold2">Stage {index + 1}</p>
          <h3 className="text-lg font-semibold text-cef-navy">{title}</h3>
          <p className="text-[15px] leading-7 text-cef-slate">{body}</p>
        </div>
      ))}
    </div>
  );
}

export function LandingPage() {
  return (
    <main className="min-h-screen bg-cef-canvas">
      <SiteHeader />

      <section className="border-b border-cef-blueGrey bg-cef-navy">
        <Container className="grid gap-8 py-8 sm:py-12 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:py-14">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase text-cef-gold">
              CEF Portfolio Management System
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.03] text-cef-surface sm:text-5xl xl:text-[58px]">
              {landingCopy.hero.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-cef-surfaceAlt">
              {landingCopy.hero.body}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/demo" icon={<ArrowRight className="h-5 w-5" />} size="lg" variant="dark">
                View Platform Demo
              </Button>
              <Button href="#vision" size="lg" variant="secondary">
                See System Vision
              </Button>
            </div>
            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-cef-surfaceAlt">
              {landingCopy.hero.supporting}
            </p>
            <p className="mt-4 text-sm font-semibold uppercase text-cef-gold">
              {landingCopy.hero.microcopy}
            </p>
          </div>
          <div className="min-w-0">
            <HeroVisual />
          </div>
        </Container>
        <Container className="grid gap-px bg-cef-blueGrey px-0 sm:grid-cols-2 lg:grid-cols-4">
          {systemStats.map(([label, value]) => (
            <div className="bg-cef-navy px-4 py-4 sm:px-6" key={label}>
              <p className="text-sm font-semibold text-cef-surfaceAlt">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-cef-surface">{value}</p>
            </div>
          ))}
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionLead
            eyebrow="The problem"
            title={landingCopy.problem.headline}
            body={landingCopy.problem.body}
          />
          <div>
            <NumberedList items={landingCopy.problem.points} />
            <p className="mt-5 text-[15px] font-semibold leading-7 text-cef-slate">
              {landingCopy.problem.microcopy}
            </p>
          </div>
        </Container>
      </Section>

      <Section id="vision" tone="surface">
        <Container className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <SectionLead
              eyebrow="System vision"
              title={landingCopy.vision.headline}
              body={landingCopy.vision.body}
            />
            <p className="mt-5 text-[15px] font-semibold leading-7 text-cef-slate">
              {landingCopy.vision.microcopy}
            </p>
          </div>
          <div className="grid gap-6">
            <NumberedList items={landingCopy.vision.points} />
            <AssetIntelligenceVisual />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionLead
              eyebrow="What the platform does"
              title="One operating view for the CEF portfolio."
              body="The platform brings together the information leadership needs to manage clean energy infrastructure with confidence - asset status, uptime, collections, incidents, risks, reports, and management actions."
            />
            <CapabilityTable />
          </div>
          <div className="mt-8">
            <Button href="/demo">Explore the Demo</Button>
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionLead
            dark
            eyebrow="FundCo AI integration"
            title="The portfolio layer feeds the operating system."
            body="CEF Portfolio Management captures what is happening across assets. FundCo AI turns those signals into tasks, escalations, approvals, finance checks, HR evidence, performance records, and executive reports."
          />
          <div className="overflow-hidden rounded-panel border border-cef-blueGrey bg-cef-navy2">
            {landingCopy.fundcoLayers.map(([title, body]) => (
              <div className="grid gap-2 border-b border-cef-blueGrey px-4 py-4 last:border-b-0 sm:grid-cols-[230px_1fr] sm:px-5" key={title}>
                <h3 className="text-lg font-semibold text-cef-surface">{title}</h3>
                <p className="text-[15px] leading-7 text-cef-surfaceAlt">{body}</p>
              </div>
            ))}
          </div>
        </Container>
        <Container className="pt-8">
          <div className="rounded-panel border border-cef-blueGrey bg-cef-navy2 px-4 py-4 text-[15px] font-semibold leading-7 text-cef-gold sm:px-5">
            Asset signal - portfolio event - alert - task - escalation - report.
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <SectionLead
              eyebrow="Pilot-to-scale roadmap"
              title="Start narrow. Prove value. Scale with discipline."
              body="The first implementation path is practical. GroSolar provides a controlled prepaid metering pilot. EML provides the scale challenge. Substation provides the asset-management gap review. HSF and AgroFund become future expansion paths."
            />
            <Roadmap />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/demo/grosolar" variant="secondary">
              View Pilot Flow
            </Button>
            <p className="text-[15px] font-semibold leading-7 text-cef-slate">
              The system begins with what can be validated, then expands with evidence.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <SectionLead
            eyebrow="Physical assets to software intelligence"
            title="Built for assets that already produce signals - and assets that need to."
            body="The platform can receive data from APIs, meters, vending systems, inverters, batteries, gateways, OEM platforms, file imports, manual uploads, or sensors where required. The first step is to understand what each asset already exposes, connect the most useful data, and identify the gaps that need integration."
          />
          <NumberedList
            items={[
              "Existing APIs",
              "Prepaid metering feeds",
              "OEM platforms",
              "Gateway and device signals",
              "Manual validated uploads",
              "Future IoT and sensor readiness"
            ]}
          />
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <SectionLead
              eyebrow="Real scenarios"
              title="Real operating cases, not generic software screens."
              body="The demo is built around realistic situations CEF leadership, finance, operations, and technical teams need to manage."
            />
            <NumberedList items={landingCopy.scenarios} />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/demo" variant="secondary">
              Open Scenario Demo
            </Button>
            <p className="text-[15px] font-semibold leading-7 text-cef-slate">
              Every screen should show a decision, a risk, or an action.
            </p>
          </div>
        </Container>
      </Section>

      <Section id="preview">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLead
              eyebrow="Platform preview"
              title="See the system as management would use it."
              body="Move from the executive portfolio view into asset registry, asset detail, collections, alerts, GroSolar pilot operations, EML scale readiness, Substation review, FundCo AI integration, reporting, and the digital twin network view."
            />
            <div className="mt-6">
              <NumberedList items={productModules} />
            </div>
          </div>
          <ProductMockupVisual />
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionLead
            eyebrow="Business value"
            title="Better visibility. Faster action. Stronger control."
            body="The value of the platform is not only in seeing data. It is in helping CEF act on the right issues earlier, protect revenue, improve response time, strengthen reporting, and prepare for scale."
          />
          <NumberedList items={landingCopy.businessValue} />
        </Container>
      </Section>

      <Section tone="dark" className="border-b-0">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-cef-gold">
              CEF first. GroSolar pilot. EML scale. Substation review. Wider FundCo control.
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-cef-surface sm:text-5xl">
              View the CEF Portfolio Management Demo.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-cef-surfaceAlt">
              See how asset data, collections, technical events, revenue movement, reporting, and management action come together in one product experience - built for CEF and integrated with FundCo AI.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/demo" size="lg" variant="dark">
              Open Demo Website
            </Button>
            <Button href="/demo/reports" size="lg" variant="secondary">
              Preview Reporting Center
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
