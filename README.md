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

## Dropping in real assets

The client's real logo, hero banners, QR code, and vehicle/showroom photos weren't available at build time. Every page currently falls back to an on-brand placeholder (a gold-gradient monogram for the logo, a CSS-recreated hero, striped placeholder boxes for photos).

Drop the real files into `public/assets/` using these exact names and they'll be picked up automatically on the next build — no code changes needed:

| File | Used on |
|---|---|
| `public/assets/s2-logo.png` | Header + footer (all pages) |
| `public/assets/home-hero.png` | Home hero banner |
| `public/assets/service-header.png` | Service hero banner |
| `public/assets/s2-qr.png` | Home "Visit Us" contact card |

Vehicle photos, the showroom/team photo, and the location map are still styled placeholders (`[ ... ]` boxes) — swap `components/VehicleCard.tsx`, `components/PhotoPlaceholder.tsx` usages, and the map block in `app/page.tsx` once real photos/an embed are available.

## Data

Vehicle inventory is static sample data in `lib/vehicles.ts`. Replace with a real inventory feed/API when available.

## Forms

The financing application (`components/FinancingWizard.tsx`) and service scheduler (`components/ServiceScheduler.tsx`) are front-end only — they validate and show a success state but don't submit anywhere yet. Wire `next`/`submit` in those components to a CRM, email, or API endpoint once a submission target is decided.
