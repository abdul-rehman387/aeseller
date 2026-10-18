// Post-build step: renders every route in src/seo/routes.js to static HTML so
// crawlers receive real content and <head> tags, then writes sitemap.xml and
// robots.txt from the same route table. Run via `npm run build`.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const { render, routes, NOT_FOUND, getSeo, renderHeadHtml, SITE_URL } =
  await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)

const template = await readFile(join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--seo-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the <!--seo-head--> placeholder or empty #root')
}

const page = (path, appHtml) => template
  .replace('<!--seo-head-->', renderHeadHtml(getSeo(path)))
  .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

// "/" -> index.html, "/a/b" -> a/b.html (served at /a/b via Firebase Hosting cleanUrls)
const fileFor = path => (path === '/' ? join(dist, 'index.html') : join(dist, `${path.slice(1)}.html`))

async function emit(file, html) {
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, html)
}

let count = 0
for (const route of routes) {
  const html = route.prerender === false ? '' : render(route.path)
  await emit(fileFor(route.path), page(route.path, html))
  count++
}

// Served by the host with a real 404 status for any unmatched URL.
await emit(join(dist, '404.html'), page(NOT_FOUND.path, render('/__not-found__')))

const indexable = routes.filter(r => !r.noindex)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map(r => `  <url>
    <loc>${r.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${r.path}`}</loc>${r.updated ? `
    <lastmod>${r.updated}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>
`
await writeFile(join(dist, 'sitemap.xml'), sitemap)

await writeFile(join(dist, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`)

await rm(ssrDir, { recursive: true, force: true })
console.log(`prerender: ${count} routes, 404.html, sitemap.xml (${indexable.length} URLs), robots.txt`)
