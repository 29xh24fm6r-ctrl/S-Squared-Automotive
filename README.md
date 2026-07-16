# S² Automotive

Marketing + lead-gen website for **S² Automotive**, a female-owned, pre-owned car dealership in Gainesville, GA. Built with Next.js (App Router) + TypeScript.

## Pages

- `/` — Home: hero, quick actions, trust bar, featured inventory, "Why S²", financing/trade split, visit/contact
- `/inventory` — Searchable, filterable, sortable vehicle listing
- `/financing` — 3-step financing application wizard with validation
- `/service` — Service center info, specials, FAQs, and an appointment scheduler

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

```bash
npm run build && npm run start   # production build
```

## Assets

The logo, home hero banner, service hero banner, and QR code are real client assets, checked into `public/assets/` (see the README there for filenames). Each is used if present and falls back to an on-brand placeholder if ever removed — no code changes needed either way.

Vehicle photos, the showroom/team photo, and the location map are still styled placeholders (`[ ... ]` boxes) — swap `components/VehicleCard.tsx`, `components/PhotoPlaceholder.tsx` usages, and the map block in `app/page.tsx` once real photos/an embed are available.

## Data

Vehicle inventory is static sample data in `lib/vehicles.ts`. Replace with a real inventory feed/API when available.

## Forms

The financing application (`components/FinancingWizard.tsx`) and service scheduler (`components/ServiceScheduler.tsx`) are front-end only — they validate and show a success state but don't submit anywhere yet. Wire `next`/`submit` in those components to a CRM, email, or API endpoint once a submission target is decided.
