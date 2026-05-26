# personal_website

Personal portfolio site for Luojie (Roger) Wang.
Live at **https://rogerwangdev.github.io/personal_website/**.

Built with Next.js (App Router, static export) and Tailwind CSS v4.
Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000/personal_website/> (note the `basePath` — the
site is hosted under `/personal_website/` to match the GitHub Pages URL).

## Build

```bash
npm run build
```

Output is written to `out/` as fully static HTML/CSS/JS.

## Editing content

- **Links** (GitHub / LinkedIn / resume / email): `src/lib/links.ts`
- **Hero text**: `src/components/Hero.tsx`
- **Experience entries**: `src/components/Experience.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Education**: `src/components/Education.tsx`
- **About blurb**: `src/components/About.tsx`

## Updating the resume

Drop a new `resume.pdf` into `public/`. It will be served at
`/personal_website/resume.pdf` and the "Resume" CTA picks it up automatically.

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs
`npm run build` and publishes `out/` to GitHub Pages.

**One-time setup** in the GitHub repo:
**Settings → Pages → Build and deployment → Source → "GitHub Actions".**

## Configuration notes

- `next.config.ts` uses `output: "export"` and `basePath: "/personal_website"`
  because GitHub Pages serves the site under a sub-path.
- `images.unoptimized: true` is required because Next.js's image optimizer needs
  a Node runtime that GH Pages doesn't provide.
- Tailwind v4 is configured directly in `src/app/globals.css` (no
  `tailwind.config.ts`). Class-based dark mode is enabled via
  `@custom-variant dark`.
