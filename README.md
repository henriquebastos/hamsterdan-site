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
- `public/hamster-dan-hugging-failed-checks.png`: Dan hugging crumpled brick-red sheets marked with black Xs, with stuffed cheeks and one sheet falling
- `public/hamster-dan-inspecting-code-diff.png`: Dan inspecting a cream code-diff scroll with a magnifying glass, one eye enlarged
- `public/hamster-dan-day-three-reminder.png`: Dan tapping his wristwatch beside a cream calendar with exactly three red Xs
- `public/hamster-dan-identifying-blocker.png`: Dan pointing to the single red X on a readiness checklist with three black checkmarks; transparent 1254×1254 PNG for GATE
- `public/hamster-dan-hugging-failed-checks-transparent.png`: background-removed version of the failed-checks scene for FIX
- `public/hamster-dan-inspecting-code-diff-transparent.png`: background-removed version of the code-diff scene for WATCH, preserving the cream scroll
- `public/hamster-dan-day-three-reminder-transparent.png`: background-removed version of the day-three scene for NAG, preserving the cream calendar and its three red Xs

The first three scene illustrations are user-selected, unmodified 1254×1254 PNG
originals with warm cream backgrounds. They are available assets and are not
currently placed on the landing page. Keep their square compositions intact;
the props carry the meaning. Create optimized delivery variants before using
them on the page, preserving these originals.

The cream backgrounds are generation artifacts, not a panel design requirement.
The GATE illustration uses the three selected scenes as character and style
references and has a verified transparent background. All four scenes remain
unplaced. The revised placement proposal pairs the diff with WATCH, the failed
checks with FIX, the calendar with NAG, and the checklist with GATE. The three
`-transparent.png` variants are 1254×1254 PNGs with verified alpha channels;
their original cream-background files remain intact. Optimize the transparent
assets for delivery when placing them on the page. The
[illustration prompts](docs/illustration-prompts.md) record the inputs and
generation method for GATE and the background-removal edits.

## Editing copy

All copy lives in `src/pages/index.astro`. Links and the handle are in
`src/site.config.ts`.
