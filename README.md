# CEF Portfolio Management System

Premium Next.js product website and static demo for the CEF Portfolio Management System, integrated with FundCo AI.

The product presents a portfolio intelligence and asset-control layer for clean energy infrastructure. It starts with CEF, uses GroSolar prepaid metering as the first pilot scenario, prepares EML for scale, reviews Substation asset-management gaps, and frames future expansion into HSF, AgroFund, and wider FundCo multi-company control.

## Routes

- `/` - Public landing page.
- `/design-test` - Design system and component test surface.
- `/demo` - Portfolio overview dashboard.
- `/demo/assets` - Asset registry and selected asset detail.
- `/demo/collections` - Collections and revenue intelligence.
- `/demo/alerts` - Alerts, exceptions, and FundCo AI action creation.
- `/demo/grosolar` - GroSolar prepaid metering pilot.
- `/demo/eml-scale` - EML scale-readiness planning.
- `/demo/substation` - Substation technical gap review.
- `/demo/fundco-ai` - FundCo AI integration flow.
- `/demo/expansion` - Multi-fund expansion model.
- `/demo/reports` - Management and investor-style reports.
- `/demo/digital-twin` - Network and digital twin visual.

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the landing page and `http://localhost:3000/demo` for the product demo.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

For a production preview:

```bash
npm run start
```

## Project Structure

```text
app/
  page.tsx
  design-test/page.tsx
  demo/layout.tsx
  demo/page.tsx
  demo/[module]/page.tsx
components/
  charts/
  demo/
  landing/
  layout/
  ui/
  visuals/
data/
lib/
public/
  images/
  videos/
styles/
```

## Data Structure

Static TypeScript demo data lives in `data/`:

- `assets.ts` - Portfolio assets, health, monitoring, revenue, and risk fields.
- `collections.ts` - Daily and weekly collections, expected vs actual revenue, failed vending, payment delays, and trends.
- `alerts.ts` - Critical, warning, info, and resolved portfolio exceptions.
- `portfolioSummary.ts` - Executive metrics, trends, exceptions, and management feed.
- `fieldTasks.ts` - Operational task records.
- `reports.ts` - Report catalog and executive preview data.
- `funds.ts` - Fund onboarding and expansion information.
- `fundcoEvents.ts` - FundCo AI event and action flow examples.
- `users.ts` - Demo users and roles.
- `navigation.ts` - Product navigation configuration.

The data is intentionally typed and local so the demo can later be connected to APIs without changing the presentation model.

## Media Assets

Media folders are prepared here:

- `public/images/`
- `public/videos/`

The current product uses polished CSS, HTML, and SVG-style visual placeholders so there are no broken image links or external watermarked assets. Replace final generated images and videos in those folders, then wire them into:

- `components/visuals/hero-visual.tsx`
- `components/visuals/asset-intelligence-visual.tsx`
- `components/visuals/product-mockup-visual.tsx`
- `components/visuals/network-visual.tsx`
- `components/visuals/video-card.tsx`
- `components/visuals/video-hero.tsx`

## Demo Organization

The demo uses `app/demo/layout.tsx` for the enterprise shell, including sidebar navigation, topbar, mobile drawer navigation, and shared page chrome. `/demo` renders the overview, while `/demo/[module]/page.tsx` maps module slugs to product pages.

Reusable components are grouped by purpose:

- `components/ui/` - Design system primitives such as buttons, cards, badges, tables, filters, tabs, drawers, and page headers.
- `components/charts/` - Lightweight responsive chart components using solid colors only.
- `components/layout/` - App shell, sidebar, topbar, and footer.
- `components/landing/` - Public landing page sections.
- `components/demo/` - Demo product modules and page-level compositions.
- `components/visuals/` - Premium CSS/HTML visual systems and media placeholders.

## Design Notes

The interface uses solid colors, restrained shadows, strong hierarchy, and responsive layouts. Tables switch to readable mobile cards where needed. The visual direction is intentionally serious and executive-facing rather than a generic dashboard template.
