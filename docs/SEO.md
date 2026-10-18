# SEO system

How search-engine metadata, prerendering, sitemaps and monitoring work on aeseller.com.

## How it works

| Piece | File | What it does |
|---|---|---|
| Route table | `src/seo/routes.js` | One entry per public URL: title, description, breadcrumb, Service name, `noindex`, `updated`. Single source of truth. |
| Site constants | `src/seo/site.js` | Domain, org name, emails, logo, `SAME_AS` profiles. Only verified facts. |
| Head builder | `src/seo/head.js` | Turns a route into title/meta/canonical/OG/Twitter tags and JSON-LD (Organization, WebSite, BreadcrumbList, Service, BlogPosting). |
| Client sync | `src/components/SeoManager.jsx` | Updates `<head>` on client-side navigation. |
| SSR entry | `src/entry-server.jsx` | Renders the app with `StaticRouter` at build time. |
| Prerender | `scripts/prerender.mjs` | Writes `dist/<route>.html` (real content + head), `404.html`, `sitemap.xml`, `robots.txt`. |
| Hosting | `vercel.json`, `middleware.js` | Clean URLs, no trailing slash, real 404s, 301s for legacy equivalents, 410 for old store/blog URLs. |

`npm run build` = client build -> SSR build -> prerender. The browser hydrates the prerendered HTML (`src/main.jsx`).

## Adding or changing a page

1. Add the `<Route>` in `src/App.jsx`.
2. Add an entry in `src/seo/routes.js` (unique title <= 60 chars, unique description 120-160 chars, `crumbs` matching the visible breadcrumb, `service` only if it is a real service).
3. When content changes meaningfully, set `updated: 'YYYY-MM-DD'` (becomes `<lastmod>`). Never guess dates.
4. `npm run build && npm run test:seo` must pass.

Components must not read `window`/`document` during render (only in effects) or prerendering will fail. Pages whose output depends on the URL query (e.g. `/checkout`) use `prerender: false`.

## Commands

| Command | Purpose |
|---|---|
| `npm run build` | Build + prerender + sitemap/robots |
| `npm run test:seo` | Static checks on `dist/`: titles, descriptions, canonicals, one H1, JSON-LD, OG tags, alt text, internal links, sitemap/noindex consistency |
| `npm run check` | lint + build + test:seo |
| `node scripts/seo-live-check.mjs [url]` | Crawl a live/preview deployment: status codes, redirects, legacy 410s, robots/sitemap content types |
| `GSC_CREDENTIALS=key.json node scripts/gsc-report.mjs [--inspect]` | Search Console report (needs owner setup below) |

`.github/workflows/seo-monitor.yml` runs the build checks on every PR and the live check weekly (read-only).

## Legacy URLs

The domain previously hosted a WooCommerce store and an unrelated blog (~570 URLs in the Wayback Machine). They are handled in `middleware.js` (410 Gone) and `vercel.json` (301 for `/about-us`, `/contact-2`, `/privacy-policy(-2)`, `/terms-and-conditions`, `/blog`; `/brand/ae-seller` -> `/about`). Everything else unknown returns 404 from `404.html`. Never redirect obsolete URLs to the homepage.

## Deploy verification (after approval)

1. Deploy to a Vercel **preview** first; run `node scripts/seo-live-check.mjs <preview-url>`. Confirm `/shop` returns 410 (middleware active) and `/nope` returns 404.
2. In Vercel > Domains: attach `www.aeseller.com` to this project with a redirect to `aeseller.com` (it currently points at a different project and returns 500).
3. Promote to production; run `node scripts/seo-live-check.mjs` - all checks should pass.
4. Submit `https://aeseller.com/sitemap.xml` in Search Console.

## Search Console API setup (owner)

1. Verify a **Domain property** `aeseller.com` in Search Console via DNS TXT record (covers http/https/www).
2. Google Cloud console: create a project, enable **Google Search Console API**, create a **service account**, download its JSON key. Keep the key out of git (`gsc-service-account*.json` is ignored).
3. Search Console > Settings > Users and permissions: add the service-account email with **Restricted** (read) permission.
4. Run the report command above. Do not use the Google Indexing API for these pages - it only supports JobPosting/BroadcastEvent content.

## Rollback

All changes are build-time. To revert prerendering only: set `"build": "vite build"` in `package.json` and restore the catch-all rewrite `{ "source": "/(.*)", "destination": "/index.html" }` in `vercel.json` (this also restores the soft-404 problem).

## Changelog - 2026-10-18 SEO implementation

**Added**
- `src/seo/site.js`, `src/seo/routes.js`, `src/seo/head.js` - centralized metadata + JSON-LD for 58 indexable URLs.
- `src/components/SeoManager.jsx` - client head sync.
- `src/pages/NotFound.jsx` + catch-all route - real 404 page (noindex).
- `src/entry-server.jsx`, `scripts/prerender.mjs` - static HTML per route, `404.html`, `sitemap.xml`, `robots.txt`.
- `middleware.js` - 410 for legacy store/blog URLs, `/brand/ae-seller` -> `/about`.
- `scripts/seo-check.mjs`, `scripts/seo-live-check.mjs`, `scripts/gsc-report.mjs`, `.github/workflows/seo-monitor.yml`.

**Changed**
- `index.html` - static title/description replaced by `<!--seo-head-->` placeholder filled per route.
- `src/main.jsx` - hydrate prerendered HTML.
- `src/App.jsx` - `AppRoutes` split out for SSR; `SeoManager`; 404 route; Checkout lazy-loaded (Stripe/PayPal no longer load on every page).
- `src/pages/Home.jsx` - hero eyebrow/H1/lead and services H2 repositioned to "software development company"; blog cards link to their articles; privacy link fixed.
- `src/pages/BlogArticle.jsx` - unknown slug renders the shared 404 page.
- 45 "Book a Free Consultation"/"Start Your Project" CTAs across pages, footer and MobileApp now go to `/contact` (were `/`).
- `src/pages/Checkout.jsx` - Terms link fixed (`href="#"`).
- `Header.jsx`, `Footer.jsx` - logo alt "AE Seller Center" -> "AE Seller".
- `public/portfolio/*/*.html` (6 demo bundles) - `noindex` meta added.
- `vercel.json`, `firebase.json` - cleanUrls, no trailing slash, removed catch-all rewrite, legacy 301s, asset caching; www -> apex redirect.
- `package.json` - build pipeline, `test:seo`, `check` scripts. `.gitignore` - GSC keys and reports.
