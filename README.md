# hamsterdan

Landing page for Hamster Dan, the PR readiness agent built on Petrus.
Astro static site, same toolchain as henriquebastos.net (Node 22, pnpm, Tailwind).

## Local development

```bash
pnpm install
pnpm dev
```

## Deploy

Push to `main`. GitHub Actions builds and deploys to GitHub Pages at
https://hamsterdan.dev (custom domain via `public/CNAME`). Point the domain's
DNS at GitHub Pages and set it under Settings → Pages.

## Assets

- `public/hamster-dan-avatar.png`: hero and comment avatar
- `public/favicon.png`: 512×512 crop of the avatar
- `public/social-card.png`: 1200×630 OG image

## Editing copy

All copy lives in `src/pages/index.astro`. Links and the handle are in
`src/site.config.ts`.
