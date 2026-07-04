# Curemed & Saimz Pharmacy — Frontend

Multi-brand Next.js 16 codebase for two independent pharmacy
marketing sites (Curemed Pharmacy and Saimz Pharmacy, Paterson NJ),
deployed as two separate Vercel Projects from this one repo.

## Status (as of this handoff)

**Done:**
- Brand configs with real, client-confirmed data (`lib/brands/`)
- JSON-LD schema builders (`lib/schema.ts`)
- Root layout, Header, Footer (brand-aware)
- Home page, About page
- `sitemap.ts`, `robots.ts`
- GitHub Actions CI (lint, typecheck, test, build both brands,
  Lighthouse CI gate)
- `.github/copilot-instructions.md` for AI-assisted development

**Not done yet (see copilot-instructions.md prompts):**
- Services hub + detail pages
- Locations page
- Contact page + form
- FAQ page
- Privacy / Terms

## Getting Started

```bash
npm install
npm run dev
```

By default, local dev runs as Curemed (see `lib/brands/index.ts`).
To preview Saimz locally:

```bash
NEXT_PUBLIC_BRAND=saimz npm run dev
```

## Before every commit

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Deployment

Two Vercel Projects from this same repo:
- `curemed-site` → `NEXT_PUBLIC_BRAND=curemed` → curemedpharmacy.com
- `saimz-site` → `NEXT_PUBLIC_BRAND=saimz` → (domain TBD)

## Known open items (do not silently resolve these, ask the client)

- Curemed's legal/DBA name and NPI number not yet located.
- Saimz needs a real domain registered (currently only a free
  Squarespace subdomain).
- Old directory listings (LinkedIn, Facebook, Yelp) for Curemed still
  show an outdated Clifton, NJ address — needs cleanup, but is not a
  blocker for this site's own content.
