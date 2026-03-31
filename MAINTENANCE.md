# AirCleanB – Site maintenance mode

This document explains how to **show a static “maintenance” page** on GitHub Pages and how to **restore the full site** without touching application code on `main`.

## Normal operation

- **Production branch:** `main`
- **Deploy workflow:** [.github/workflows/deploy.yml](.github/workflows/deploy.yml) runs on `push` and `pull_request` to `main`, builds with `npm run build`, and publishes `./dist` to GitHub Pages.
- **Public URL:** use the URL shown in GitHub **Settings → Pages** (or your custom domain).

## What maintenance mode does

- A single static HTML page lives in [maintenance-static/index.html](maintenance-static/index.html).
- It **does not** load Google Ads / `gtag` (avoids polluting conversion data while the marketing site is down).
- It includes `<meta name="robots" content="noindex, nofollow">` so search engines should not index the maintenance page as the main site.

## Activate maintenance (replace live site)

1. **Optional but recommended:** pause or adjust **Google Ads** (and similar paid traffic) so you are not paying for clicks to a maintenance message.
2. On GitHub, open **Actions**.
3. Select **“Deploy maintenance page to GitHub Pages”** ([deploy-maintenance.yml](.github/workflows/deploy-maintenance.yml)).
4. Click **Run workflow** → choose the default branch (usually `main`) → **Run workflow**.
5. Wait until the job succeeds. The site will show the maintenance page.

**Reference commit:** before activating maintenance, note the current `main` commit SHA (e.g. `git rev-parse main`) so you know exactly which build to restore.

## Deactivate maintenance (restore full site)

1. Ensure `main` has the code you want live (merge PRs if needed).
2. Trigger a normal deploy by either:
   - **Push to `main`** (empty commit is fine: `git commit --allow-empty -m "chore: redeploy site after maintenance"` and push), or
   - **Re-run** the latest successful **“Deploy to GitHub Pages”** workflow from the **Actions** tab (if your policy allows re-running that job).
3. Wait for **Deploy to GitHub Pages** to finish. The full Vite/React site from `./dist` is published again.

## Post-restore checklist

Run locally on the commit you deployed:

```bash
npm ci
npm run lint
npm run build
```

After GitHub Actions is green, in the browser verify:

- `/` loads the home page
- `/thank-you`, `/privacy`, `/airbnb-cleaning` (and any other routes you care about)
- One test form submission if Formspree is critical

Re-enable **Google Ads** (or similar) when ready.

## What not to do

- Do **not** delete `main` or the app source to “turn off” the site — use the maintenance workflow instead.
- Do **not** remove [.github/workflows/deploy.yml](.github/workflows/deploy.yml) without a backup; you need it to publish the real site again.
- The maintenance page is **not** part of the Vite build; it lives only under `maintenance-static/`. Do not move it into `src/` unless you intentionally change this setup and update this doc.

## Related docs

- [AUDIT_ROADMAP.md](AUDIT_ROADMAP.md) – Google Ads and product roadmap (index may reference this file).
