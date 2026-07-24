# DC Custom Guitars — Modern Refactor

A complete visual + technical refactor of [dccustomguitars.com](https://dccustomguitars.com/).

## Live preview

Once the GitHub Action runs, the site is served at:
`https://bronder.github.io/dccustomguitars/`

## What's different from the original

| Original | Refactor |
|---|---|
| XHTML 1.0, table-based layout | Astro 5, semantic HTML, mobile-first |
| Inline styles, no responsive | Modular CSS, fluid typography, fully responsive |
| No real navigation | Sticky glass nav with smooth-scroll sections |
| Raw stacked PayPal buttons | Interactive tier selector with clear pricing |
| Yellow/green on pure black | Premium dark studio palette + warm brass accent |
| 1600px-wide single images | Responsive image grid, hover states, lazy loading |
| Single 8,000px scroll | 6 clear sections, anchor navigation, distinct hierarchy |

## Stack

- **Astro 7** — static site generator, ships ~zero JS by default
- **TypeScript strict** — type-safe components
- **No CSS framework** — hand-rolled design system in `src/styles/global.css`
- **Google Fonts** — Bebas Neue (display) + Inter (body) + Cormorant Garamond (accent)

## Local development

Requires Node 22+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # preview the build
```

## Deployment

Deployed automatically to GitHub Pages on every push to `main`.
See `.github/workflows/deploy.yml`.

The site is configured to deploy at `/dccustomguitars/` (the repo name). To deploy
to a custom domain root (e.g. `dccustomguitars.com`), set these in repo
**Settings → Secrets and variables → Actions → Variables**:

| Variable | Value |
|---|---|
| `SITE_URL` | `https://dccustomguitars.com` |
| `BASE_PATH` | `/` |

## Structure

```
src/
├── assets/
│   └── images/    product photos, co-located with the components that use them
│       └── gallery/   "Recent Builds" lightbox photos
├── components/    Nav, Hero, About, Builds, Gallery, Scalloping, Endorsements, Contact, Footer
├── layouts/       BaseLayout
├── pages/         index.astro
└── styles/        global.css (design system)
public/
└── images/        drop new product photos here if not co-located in src/assets
.github/
└── workflows/     deploy.yml, ci.yml
```

## Image hosting

Product images live locally in `src/assets/images/` (with build gallery
photos under `src/assets/images/gallery/`). Astro's image service
auto-generates responsive `srcset` values and dimensions at build time, so
there is no cross-origin dependency on `dccustomguitars.com`. Drop new photos
into `src/assets/images/` (or `public/images/` for static, unprocessed
assets) and import them in the relevant component.
