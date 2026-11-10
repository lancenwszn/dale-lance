# DALE LANCE — Portfolio

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lucide. Static, Vercel-ready.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Hero portrait

Place the approved portrait in `public/images/` with `hero` in its filename, e.g. `DALE-LANCE-HERO.png` (any of `.png`, `.webp`, `.avif`, `.jpg`, `.jpeg`).
It is detected automatically at build time (`lib/hero-image.ts`) — the file is never renamed or modified.

- Transparent PNG/WebP → treated as a cut-out, standing in front of the burgundy panel.
- Opaque landscape photo → bleeds off the right edge and fades into the orange hero.
- Opaque portrait-orientation photo → fills the panel (`object-cover`, anchored to the top).

## Content

All copy lives in `lib/site.ts` (roles, about, experience, areas of work, capabilities).

**Confidentiality:** describe roles and transferable capabilities only — no employer, product or client names, and no internal architecture, workflows or implementation details.
Add further roles to the `experience` array; each renders as its own row.

## Structure

- `app/page.tsx` — home (hero, about, experience, areas of work, capabilities, contact)
- `components/` — Hero, Nav, Sections, AreaCover (abstract cover art), LightTrails, Reveal
