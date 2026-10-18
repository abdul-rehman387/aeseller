// Static SEO checks against the built site in dist/. Run after `npm run build`:
//   npm run test:seo
// Exits non-zero on errors; warnings are printed but do not fail the run.
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const SITE = 'https://aeseller.com'

const errors = []
const warnings = []
const err = (where, msg) => errors.push(`${where}: ${msg}`)
const warn = (where, msg) => warnings.push(`${where}: ${msg}`)

if (!existsSync(join(dist, 'index.html'))) {
  console.error('dist/ not found - run `npm run build` first')
  process.exit(1)
}

const fileFor = path => join(dist, path === '/' ? 'index.html' : `${path.slice(1)}.html`)
const read = f => readFileSync(f, 'utf8')
const all = (html, re) => [...html.matchAll(re)]
const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`)) || [])[1]
const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x27;/g, "'")

// robots.txt
const robots = read(join(dist, 'robots.txt'))
if (!/^Sitemap: https:\/\/aeseller\.com\/sitemap\.xml$/m.test(robots)) err('robots.txt', 'missing Sitemap line')
if (/^Disallow: \/\s*$/m.test(robots)) err('robots.txt', 'blocks the whole site')

// sitemap.xml
const sitemap = read(join(dist, 'sitemap.xml'))
const locs = all(sitemap, /<loc>([^<]+)<\/loc>/g).map(m => m[1])
if (!locs.length) err('sitemap.xml', 'no URLs')
if (new Set(locs).size !== locs.length) err('sitemap.xml', 'duplicate URLs')

const paths = locs.map(loc => {
  if (!loc.startsWith(SITE)) err('sitemap.xml', `non-canonical host: ${loc}`)
  const p = loc.slice(SITE.length) || '/'
  if (p !== '/' && p.endsWith('/')) err('sitemap.xml', `trailing slash: ${loc}`)
  return p
})

const titles = new Map()
const descriptions = new Map()
const known = new Set(paths)
const linkTargets = new Map()

for (const path of paths) {
  const file = fileFor(path)
  if (!existsSync(file)) { err(path, 'listed in sitemap but no HTML file'); continue }
  const html = read(file)
  const [head = '', body = ''] = html.split('</head>')

  const t = all(head, /<title>([^<]*)<\/title>/g)
  if (t.length !== 1) err(path, `expected 1 <title>, found ${t.length}`)
  const title = decode(t[0]?.[1] || '')
  if (title.length > 65) warn(path, `title is ${title.length} chars: "${title}"`)
  titles.set(title, [...(titles.get(title) || []), path])

  const metas = all(head, /<meta [^>]*>/g).map(m => m[0])
  const meta = (key, val) => metas.find(m => attr(m, key) === val)

  const desc = decode(attr(meta('name', 'description') || '', 'content') || '')
  if (!desc) err(path, 'missing meta description')
  else if (desc.length < 70 || desc.length > 165) warn(path, `description is ${desc.length} chars`)
  descriptions.set(desc, [...(descriptions.get(desc) || []), path])

  const robotsMeta = attr(meta('name', 'robots') || '', 'content') || ''
  if (/noindex/.test(robotsMeta)) err(path, 'in sitemap but noindex')

  const canon = all(head, /<link rel="canonical" href="([^"]+)"/g)
  const expected = path === '/' ? `${SITE}/` : `${SITE}${path}`
  if (canon.length !== 1) err(path, `expected 1 canonical, found ${canon.length}`)
  else if (canon[0][1] !== expected) err(path, `canonical ${canon[0][1]} != ${expected}`)

  for (const p of ['og:title', 'og:description', 'og:url', 'og:image', 'og:type']) {
    if (!meta('property', p)) err(path, `missing ${p}`)
  }
  if (!meta('name', 'twitter:card')) err(path, 'missing twitter:card')

  for (const m of all(head, /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(m[1])
      const graph = data['@graph'] || [data]
      if (data['@context'] !== 'https://schema.org') err(path, 'JSON-LD missing @context')
      for (const node of graph) {
        if (!node['@type']) err(path, 'JSON-LD node without @type')
        if (node.aggregateRating || node.review) err(path, 'JSON-LD contains ratings/reviews - verify they are genuine')
      }
    } catch (e) { err(path, `invalid JSON-LD: ${e.message}`) }
  }

  if (!body.includes('<div id="root"><')) err(path, 'body was not prerendered')
  const h1 = all(body, /<h1[\s>]/g).length
  if (h1 !== 1) err(path, `expected 1 <h1>, found ${h1}`)

  for (const img of all(body, /<img [^>]*>/g).map(m => m[0])) {
    const alt = attr(img, 'alt')
    if (alt === undefined || alt.trim() === '') warn(path, `image without alt: ${attr(img, 'src')}`)
  }

  for (const a of all(body, /<a [^>]*href="([^"]+)"/g)) {
    const href = decode(a[1])
    if (href === '#' || href === '') { warn(path, 'link with empty/# href'); continue }
    if (!href.startsWith('/') || href.startsWith('//')) continue
    const target = href.split(/[?#]/)[0]
    if (!linkTargets.has(target)) linkTargets.set(target, path)
  }
}

for (const [title, ps] of titles) if (ps.length > 1) err('titles', `"${title}" duplicated on ${ps.join(', ')}`)
for (const [desc, ps] of descriptions) if (desc && ps.length > 1) err('descriptions', `duplicated on ${ps.join(', ')}`)

// Internal links must hit a sitemap page, a prerendered noindex page, or a static file.
for (const [target, from] of linkTargets) {
  const clean = target !== '/' ? target.replace(/\/$/, '') : '/'
  if (known.has(clean) || existsSync(fileFor(clean)) || existsSync(join(dist, decodeURIComponent(clean)))) continue
  err(from, `broken internal link -> ${target}`)
}

// Non-indexable pages
const notFound = read(join(dist, '404.html'))
if (!/<meta name="robots" content="noindex/.test(notFound)) err('404.html', 'missing noindex')
if (/rel="canonical"/.test(notFound)) err('404.html', 'should not have a canonical')
const checkout = fileFor('/checkout')
if (existsSync(checkout) && !/content="noindex/.test(read(checkout))) err('/checkout', 'missing noindex')
if (known.has('/checkout')) err('sitemap.xml', '/checkout must not be listed')

for (const w of warnings) console.warn(`warn  ${w}`)
for (const e of errors) console.error(`ERROR ${e}`)
console.log(`\nseo-check: ${paths.length} pages, ${linkTargets.size} internal link targets, ${errors.length} errors, ${warnings.length} warnings`)
process.exit(errors.length ? 1 : 0)
