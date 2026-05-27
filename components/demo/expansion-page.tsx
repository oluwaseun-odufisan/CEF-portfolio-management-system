import { DetailGrid, ListPanel } from "@/components/demo/demo-primitives";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { funds, rolloutStages } from "@/data/funds";

export function ExpansionPage() {
  return (
    <div className="mx-auto max-w-[1500px]">
      <PageHeader
        eyebrow="Multi-Fund Expansion"
        title="CEF First, Group Control Later"
        lead="The CEF model becomes the working template for HSF, AgroFund, and wider FundCo multi-company control."
      />

      <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {funds.map((fund) => (
          <Card key={fund.id}>
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge label={fund.status} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-cef-navy">{fund.name}</h2>
            <p className="mt-3 text-[15px] leading-7 text-cef-slate">{fund.role}</p>
            <p className="mt-4 text-sm font-semibold text-cef-gold2">{fund.nextStep}</p>
          </Card>
        ))}
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-2">
        <ListPanel items={rolloutStages} title="Rollout stages" />
        <div className="rounded-panel border border-cef-line bg-cef-surface p-5 shadow-lift">
          <h2 className="mb-5 text-2xl font-semibold text-cef-navy">Shared system architecture</h2>
          <DetailGrid
            items={[
              ["Entity boundaries", "Each fund keeps its own assets, teams, reporting, and approvals."],
              ["Shared control layer", "Common event model, alert queues, reporting templates, and FundCo AI actions."],
              ["Group-level reporting", "Executives can compare asset health, collections, risks, and action status across companies."],
              ["Governance", "Escalation, audit trail, and performance evidence remain visible at group level."]
            ]}
          />
        </div>
      </section>

      <section className="cef-brand-panel mt-8 rounded-panel p-5">
        <h2 className="text-2xl font-semibold text-cef-navy">Why CEF becomes the proof model</h2>
        <p className="mt-4 max-w-4xl text-[15px] leading-7 text-cef-ink">
          CEF contains the practical operating cases needed to prove the platform: clean-energy assets, collections visibility, GroSolar metering, EML scale pressure, Substation technical gaps, reporting needs, and FundCo AI action flow. Once these controls work, the same product logic can be adapted to HSF, AgroFund, and wider FundCo group control.
        </p>
      </section>

      <section className="mt-8 rounded-panel border border-cef-line bg-cef-surface p-5">
        <p className="text-[15px] font-semibold leading-7 text-cef-navy">
          The product is not built as a one-off demo. CEF becomes the first repeatable model for wider FundCo control.
        </p>
      </section>
    </div>
  );
}
