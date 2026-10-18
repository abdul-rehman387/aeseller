// Checks the LIVE site's crawl behaviour: status codes, redirects, robots.txt,
// sitemap, canonicals, and legacy URL handling. Read-only (GET/HEAD requests).
//   node scripts/seo-live-check.mjs                     # https://aeseller.com
//   node scripts/seo-live-check.mjs https://preview-url.vercel.app
import { appendFileSync } from 'node:fs'

const base = (process.argv[2] || 'https://aeseller.com').replace(/\/$/, '')
const isProd = base === 'https://aeseller.com'
const results = []
const record = (ok, check, detail = '') => results.push({ ok, check, detail })

// Network failures become status 0 (a failed check) instead of aborting the run.
async function get(url) {
  try {
    const res = await fetch(url.startsWith('http') ? url : base + url, { redirect: 'manual', headers: { 'user-agent': 'aeseller-seo-check/1.0' } })
    return { status: res.status, location: res.headers.get('location'), type: res.headers.get('content-type') || '', xrobots: res.headers.get('x-robots-tag') || '', body: await res.text() }
  } catch (e) {
    return { status: 0, location: `network error: ${e.cause?.code || e.message}`, type: '', xrobots: '', body: '' }
  }
}

const expectStatus = async (path, expected, label) => {
  const r = await get(path)
  const ok = Array.isArray(expected) ? expected.includes(r.status) : r.status === expected
  record(ok, `${label}: ${path}`, `got ${r.status}${r.location ? ` -> ${r.location}` : ''}`)
  return r
}

// robots.txt and sitemap must be real files, not the SPA shell
const robots = await get('/robots.txt')
record(robots.status === 200 && robots.type.startsWith('text/plain'), 'robots.txt served as text/plain', `${robots.status} ${robots.type}`)
record(/Sitemap:\s*https:\/\/aeseller\.com\/sitemap\.xml/i.test(robots.body), 'robots.txt references sitemap')

const sm = await get('/sitemap.xml')
const locs = [...sm.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
record(sm.status === 200 && /xml/.test(sm.type) && locs.length > 0, 'sitemap.xml is XML with URLs', `${sm.status} ${sm.type} ${locs.length} URLs`)

// every sitemap URL: 200, self-canonical, indexable, unique title
const titles = new Map()
for (const loc of locs) {
  const path = new URL(loc).pathname
  const r = await get(path)
  const canonical = (r.body.match(/<link rel="canonical" href="([^"]+)"/) || [])[1]
  const title = (r.body.match(/<title>([^<]*)<\/title>/) || [])[1]
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(r.body) || /noindex/.test(r.xrobots)
  const expectedCanonical = isProd ? loc : null
  const ok = r.status === 200 && !noindex && title && (!expectedCanonical || canonical === expectedCanonical)
  record(ok, `sitemap URL ${path}`, `${r.status} canonical=${canonical || 'none'}${noindex ? ' NOINDEX' : ''}`)
  if (title) titles.set(title, [...(titles.get(title) || []), path])
}
for (const [t, ps] of titles) if (ps.length > 1) record(false, `duplicate title "${t}"`, ps.join(', '))

// soft-404 protection
await expectStatus('/this-page-should-not-exist-' + Date.now(), 404, 'unknown URL returns 404')
await expectStatus('/insights/not-a-real-article', 404, 'unknown article returns 404')

// canonicalisation
await expectStatus('/services/', [301, 308], 'trailing slash redirects')
await expectStatus('/services.html', [301, 308], '.html redirects to clean URL')
if (isProd) {
  const www = await get('https://www.aeseller.com/')
  record([301, 308].includes(www.status) && (www.location || '').startsWith('https://aeseller.com'), 'www redirects to apex', `got ${www.status} -> ${www.location}`)
  const http = await get('http://aeseller.com/')
  record([301, 308].includes(http.status), 'http redirects to https', `got ${http.status}`)
}

// legacy store/blog URLs
for (const [path, expected] of [
  ['/shop/', [301, 308, 410]], ['/shop', 410], ['/product/anything', 410], ['/product-category/electronics', 410],
  ['/product-tag/iphone', 410], ['/brand/starlet', 410], ['/cart', 410], ['/my-account', 410],
  ['/best-gadgets-in-uae-2025-top-tech-you-must-have-this-year', 410],
]) await expectStatus(path, expected, 'legacy URL gone')
await expectStatus('/brand/ae-seller', 301, 'brand page redirects')
await expectStatus('/about-us', 301, 'legacy about redirects')
await expectStatus('/blog', 301, 'legacy blog redirects')

const failed = results.filter(r => !r.ok)
for (const r of results) console.log(`${r.ok ? 'PASS' : 'FAIL'}  ${r.check}${r.detail ? `  (${r.detail})` : ''}`)
console.log(`\n${base}: ${results.length - failed.length}/${results.length} checks passed`)
if (process.env.GITHUB_STEP_SUMMARY) {
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, `### SEO live check - ${base}\n\n${results.length - failed.length}/${results.length} passed\n\n${failed.map(f => `- FAIL ${f.check} (${f.detail})`).join('\n')}\n`)
}
process.exit(failed.length ? 1 : 0)
