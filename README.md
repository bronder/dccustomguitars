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

- **Astro 5** — static site generator, ships ~zero JS by default
- **TypeScript strict** — type-safe components
- **No CSS framework** — hand-rolled design system in `src/styles/global.css`
- **Google Fonts** — Bebas Neue (display) + Inter (body) + Cormorant Garamond (accent)

## Local development

Requires Node 20+.

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
├── components/    Nav, Hero, About, Builds, Scalloping, Endorsements, Contact, Footer
├── layouts/       BaseLayout
├── pages/         index.astro
└── styles/        global.css (design system)
public/
└── images/        (Dean can drop product photos here)
.github/
└── workflows/     deploy.yml, ci.yml
```

## Image hosting

The prototype references product images directly from `dccustomguitars.com`.
For production, download and re-host them locally in `public/images/` for
performance and to eliminate cross-origin dependency.
