# Foundry Press — GitHub Pages Hosting Guide

This project is fully configured for hosting on **GitHub Pages**.

## Quick Start / Deployment Methods

You can deploy this site to GitHub Pages using either **Automated GitHub Actions** (recommended) or the **CLI (`gh-pages`) command**.

---

### Method 1: Automated GitHub Actions (Recommended)

1. Push your repository code to GitHub on the `main` (or `master`) branch.
2. Go to your repository settings on GitHub:
   - **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Every time you push changes to `main`, GitHub Actions will automatically build and deploy your site!

---

### Method 2: Manual CLI Deployment (`npm run deploy`)

1. Ensure your repository is initialized with Git and connected to your GitHub remote:
   ```bash
   git init
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.NET.git
   ```
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
3. In your GitHub repository settings:
   - **Settings** → **Pages**.
   - Under **Build and deployment** → **Source**, select **Deploy from a branch**.
   - Set the branch to `gh-pages` / `/(root)` and click **Save**.

---

## Included GitHub Pages Configurations

- **Relative Base Asset Paths**: Configured in `vite.config.ts` (`base: './'`) so styles and scripts resolve correctly on subfolders.
- **Client-Side SPA Routing**: Uses `HashRouter` (`/#/services`, `/#/who-we-are`) to ensure page links and refreshes work without server 404 errors.
- **Bypass Jekyll Processing**: Includes `public/.nojekyll` to prevent GitHub Pages from masking Vite assets.
- **404 Fallback**: Includes `public/404.html` SPA redirect fallback.
- **Automated Workflow**: Located at `.github/workflows/deploy.yml`.
