# Goodwill Global Foundation — website

One-page site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| Path | What it holds |
| --- | --- |
| `src/data/site.ts` | Name, address, phone, email, navigation menu |
| `src/data/content.ts` | All page copy (vision, mission, pillars, programmes, founder's message) |
| `src/data/leadership.ts` | Founder, board and office bearers (order = display order) |
| `src/assets/team/` | Portraits; files in `unassigned/` are not yet linked to a person |
| `src/components/` | One component per page section |
| `src/styles/global.css` | Brand colours, fonts and shared styles |

Most edits only need the `src/data/` files.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes the site.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Custom domain

1. In **Settings → Pages → Custom domain**, enter the domain and save.
2. At the DNS provider, point the domain to GitHub Pages
   ([guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Re-run the deploy workflow. The build picks up the new address automatically.
