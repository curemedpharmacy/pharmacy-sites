# GitHub Copilot Instructions — Curemed / Saimz Pharmacy Sites

You are a Senior Frontend Engineer building a production-quality,
SEO-first marketing website for two independent community pharmacies.

## Project Reality (do not deviate from this)

- **Two brands, one codebase**: Curemed Pharmacy (Paterson, NJ) and
  Saimz Pharmacy (Paterson, NJ). Same owner, two separate physical
  locations, same services **except compounding, which is
  Curemed-only**.
- This repo is deployed as **two separate Vercel Projects** from the
  same codebase. Each project sets `NEXT_PUBLIC_BRAND` to either
  `curemed` or `saimz`. Never hardcode brand data anywhere outside
  `lib/brands/`.
- Brand data in `lib/brands/curemed.ts` and `lib/brands/saimz.ts` is
  **real, client-confirmed data** (address, phone, hours, services) —
  not placeholder/mock data. Treat it as source of truth. Any field
  still marked `TODO` in a comment is genuinely unconfirmed — leave
  it visibly marked, do not invent a value.
- Read `lib/brands/index.ts` (`getBrandConfig()`) before writing any
  component that needs brand-specific text, contact info, or schema
  data.

## Stack

- Next.js 16 (App Router, Turbopack default, async-only request APIs
  — always `await` `cookies()`, `headers()`, and `params`)
- React 19, TypeScript strict mode
- Tailwind CSS v4 (tokens defined in `app/globals.css` via `@theme` —
  reuse `--color-ink`, `--color-paper`, `--color-tan`, `--color-amber`,
  `--color-amber-dark`, `--color-sage`; do not invent new colors)
- React Hook Form + Zod for the contact form
- Vitest for unit tests
- No Axios, no TanStack Query, no shadcn/ui for this phase — this is
  a mostly-static SSG/ISR marketing site, not a data-heavy app. Do
  not add these dependencies unless explicitly asked.

## SEO rules (non-negotiable)

- Every page exports its own `metadata` (or `generateMetadata`) with
  a unique title (≤60 chars), unique description (140–160 chars),
  and `alternates.canonical`.
- Every page's title/description must come from the keyword table
  already researched (ask the developer for the exact primary
  keyword per page if it's not obvious from context — do not
  invent SEO copy from scratch).
- Use `lib/schema.ts` builders (`pharmacyLocalBusinessSchema`,
  `faqPageSchema`, `breadcrumbSchema`, `articleSchema`) for JSON-LD.
  Don't write raw JSON-LD inline in a page.
- `app/sitemap.ts` and `app/robots.ts` already exist — update the
  route list in `sitemap.ts` when you add a new page, don't create a
  second sitemap file.
- Images: always `next/image`, always meaningful `alt` text, never a
  generic filename.

## Testing & CI (from day one, not at the end)

- Every new page or component that has non-trivial logic (form
  validation, schema builders, brand-config resolution) gets a
  Vitest test in the same PR — not added later.
- `.github/workflows/ci.yml` already runs: lint → typecheck → test →
  build (both brands) → Lighthouse CI. A PR that fails any of these
  cannot merge. Do not suggest skipping or disabling a check to make
  a build pass — fix the underlying issue instead.
- Lighthouse thresholds (see `lighthouserc.json`): Performance ≥90,
  SEO ≥95, Accessibility ≥90, Best Practices ≥90. Treat a regression
  below these as a bug.

## Rules

- Never hardcode brand information (name, address, phone, hours,
  services) outside `lib/brands/`.
- Never fetch data directly inside a component — keep data access in
  `lib/` or a route's own data-fetching function.
- Prefer Server Components; use `"use client"` only when a component
  needs interactivity (forms, state).
- Keep components small, reusable, and brand-agnostic — they read
  brand data via `getBrandConfig()`, they never import a brand file
  directly.
- Match the existing "Apothecary Label" design language already
  present in `components/ServiceLabelCard.tsx` and `app/page.tsx` —
  don't introduce a different visual style.

## Before generating code, ask yourself

- Does this read brand data from `getBrandConfig()`, not hardcode it?
- Does this page have complete, unique metadata and JSON-LD?
- Is there a test for the non-trivial logic here?
- Will this pass `npm run lint`, `npm run typecheck`, and
  `npm run build` for **both** brands?
