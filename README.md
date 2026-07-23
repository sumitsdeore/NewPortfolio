# Portfolio — Next.js 15 / React 19

A premium, animation-forward personal portfolio built with Next.js 15 (App
Router), React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, and
React Three Fiber.

## Stack

- **Framework:** Next.js 15 (App Router, Server Components by default)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Motion:** Framer Motion, GSAP + ScrollTrigger, Lenis smooth scroll
- **3D:** React Three Fiber + Drei (`MeshDistortMaterial` hero blob)
- **Icons:** lucide-react, react-icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you ship this

1. **Content** — everything you'll want to personalize lives in `src/data/`:
   - `site.ts` — name, role, tagline, socials, stats
   - `projects.ts` — featured project case studies
   - `experience.ts` — work history + skills groups
2. **GitHub stats** — open `src/sections/GitHubStats.tsx` and set
   `GITHUB_USERNAME` to your handle. It fetches live data from the public
   GitHub API server-side (revalidated hourly) and falls back to a skeleton
   state if the request fails.
3. **Resume** — drop a `resume.pdf` into `public/` (the nav and hero CTAs
   already link to `/resume.pdf`).
4. **Portrait / images** — the About section currently uses a gradient
   placeholder card. Swap it for a real photo with `next/image` once you have
   one.
5. **Metadata** — update the `metadataBase` URL and OpenGraph/Twitter fields
   in `src/app/layout.tsx` once you have a domain.

## Project structure

```
src/
  app/            # App Router entry (layout, page, globals.css)
  components/
    layout/       # Navbar, Footer, cursor, smooth scroll, loading screen
    ui/           # Reusable primitives (buttons, reveals, counters)
  sections/       # Page sections (Hero, About, Projects, Contact, ...)
  three/          # React Three Fiber hero scene
  data/           # Content — edit these files to personalize the site
  hooks/          # Shared hooks
  lib/            # Utilities (cn helper)
```

## Performance & accessibility notes

- The hero 3D scene is loaded via `next/dynamic` with `ssr: false` so it
  never blocks the initial server-rendered paint.
- `prefers-reduced-motion` disables Lenis smooth scroll and skips the loading
  screen animation.
- The custom cursor is disabled on touch/coarse-pointer devices automatically.
- Sections are Server Components by default; only interactive pieces
  (cursor, forms, motion-heavy sections) are marked `"use client"`.

## Deploying

This project is zero-config on [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or push to a GitHub repo and import it directly in the Vercel dashboard.
