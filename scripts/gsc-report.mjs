// Google Search Console report (read-only). Requires a service account that the
// site owner has added as a user on the Search Console property - see docs/SEO.md.
//
//   GSC_CREDENTIALS=./gsc-service-account.json node scripts/gsc-report.mjs [--inspect]
//
// Env:
//   GSC_CREDENTIALS  path to the service-account JSON key (never commit it)
//   GSC_SITE         property, default "sc-domain:aeseller.com" (use "https://aeseller.com/" for a URL-prefix property)
//   GSC_DAYS         comparison window in days, default 28
// Writes seo-reports/gsc-YYYY-MM-DD.md and .json. Uses only documented Search Console
// API endpoints (searchAnalytics.query, sitemaps.list, urlInspection.index.inspect).
import { createSign } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const SITE = process.env.GSC_SITE || 'sc-domain:aeseller.com'
const DAYS = Number(process.env.GSC_DAYS || 28)
const INSPECT = process.argv.includes('--inspect')
const keyFile = process.env.GSC_CREDENTIALS
if (!keyFile) { console.error('Set GSC_CREDENTIALS to the service-account JSON key path.'); process.exit(1) }
const key = JSON.parse(readFileSync(keyFile, 'utf8'))

const b64url = v => Buffer.from(typeof v === 'string' ? v : JSON.stringify(v)).toString('base64url')

async function accessToken() {
  const now = Math.floor(Date.now() / 1000)
  const unsigned = `${b64url({ alg: 'RS256', typ: 'JWT' })}.${b64url({
    iss: key.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600,
  })}`
  const sig = createSign('RSA-SHA256').update(unsigned).sign(key.private_key, 'base64url')
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${sig}` }),
  })
  if (!res.ok) throw new Error(`token request failed: ${res.status} ${await res.text()}`)
  return (await res.json()).access_token
}

const token = await accessToken()
const site = encodeURIComponent(SITE)
async function api(url, body) {
  const res = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`${url}: ${res.status} ${await res.text()}`)
  return res.json()
}
const query = (startDate, endDate, dimensions, rowLimit = 1000) =>
  api(`https://searchconsole.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`, { startDate, endDate, dimensions, rowLimit, dataState: 'final' })
    .then(r => r.rows || [])

// Search Console data lags ~2-3 days; end the window 3 days ago.
const day = n => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10)
const cur = [day(DAYS + 2), day(3)]
const prev = [day(2 * DAYS + 2), day(DAYS + 3)]

const totals = rows => {
  const t = rows.reduce((a, r) => ({ clicks: a.clicks + r.clicks, impressions: a.impressions + r.impressions, pos: a.pos + r.position * r.impressions }), { clicks: 0, impressions: 0, pos: 0 })
  return { clicks: t.clicks, impressions: t.impressions, ctr: t.impressions ? t.clicks / t.impressions : 0, position: t.impressions ? t.pos / t.impressions : 0 }
}

const [curDates, prevDates, pages, queries, pairs] = await Promise.all([
  query(...cur, ['date']), query(...prev, ['date']), query(...cur, ['page']), query(...cur, ['query']), query(...cur, ['query', 'page'], 5000),
])
const now = totals(curDates)
const before = totals(prevDates)

// Heuristics - starting points for a human review, not automatic actions.
const lowCtr = pages.filter(r => r.impressions >= 100 && r.ctr < 0.015).sort((a, b) => b.impressions - a.impressions).slice(0, 20)
const striking = queries.filter(r => r.position > 10 && r.position <= 30 && r.impressions >= 20).sort((a, b) => b.impressions - a.impressions).slice(0, 30)
const byQuery = new Map()
for (const r of pairs) byQuery.set(r.keys[0], [...(byQuery.get(r.keys[0]) || []), r])
const cannibal = [...byQuery].map(([q, rows]) => {
  const total = rows.reduce((s, r) => s + r.impressions, 0)
  const competing = rows.filter(r => r.impressions / total >= 0.1)
  return { query: q, total, pages: competing.map(r => ({ page: r.keys[1], impressions: r.impressions, position: r.position })) }
}).filter(c => c.pages.length > 1 && c.total >= 20).sort((a, b) => b.total - a.total).slice(0, 20)

const sitemaps = (await api(`https://searchconsole.googleapis.com/webmasters/v3/sites/${site}/sitemaps`)).sitemap || []

let inspections = []
if (INSPECT) {
  // URL Inspection API is quota-limited (2,000/day per property); sitemap URLs only.
  const xml = await (await fetch('https://aeseller.com/sitemap.xml')).text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])
  for (const url of urls) {
    const r = await api('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', { inspectionUrl: url, siteUrl: SITE })
    const s = r.inspectionResult?.indexStatusResult || {}
    inspections.push({ url, verdict: s.verdict, coverage: s.coverageState, lastCrawl: s.lastCrawlTime, googleCanonical: s.googleCanonical })
  }
}

const pct = v => `${(v * 100).toFixed(2)}%`
const delta = (a, b) => (b ? `${a >= b ? '+' : ''}${(((a - b) / b) * 100).toFixed(1)}%` : 'n/a')
const table = (head, rows) => `| ${head.join(' | ')} |\n|${head.map(() => '---').join('|')}|\n${rows.map(r => `| ${r.join(' | ')} |`).join('\n')}\n`

const md = `# Search Console report - ${SITE}

Window ${cur[0]} to ${cur[1]} vs ${prev[0]} to ${prev[1]} (final data only).

${table(['Metric', 'Current', 'Previous', 'Change'], [
  ['Clicks', now.clicks, before.clicks, delta(now.clicks, before.clicks)],
  ['Impressions', now.impressions, before.impressions, delta(now.impressions, before.impressions)],
  ['CTR', pct(now.ctr), pct(before.ctr), ''],
  ['Avg. position', now.position.toFixed(1), before.position.toFixed(1), ''],
])}
## Top landing pages
${table(['Page', 'Clicks', 'Impr.', 'CTR', 'Pos.'], pages.slice(0, 25).map(r => [r.keys[0], r.clicks, r.impressions, pct(r.ctr), r.position.toFixed(1)]))}
## Top queries
${table(['Query', 'Clicks', 'Impr.', 'CTR', 'Pos.'], queries.slice(0, 25).map(r => [r.keys[0], r.clicks, r.impressions, pct(r.ctr), r.position.toFixed(1)]))}
## High impressions, low CTR (>=100 impr., <1.5% CTR) - review title/description
${table(['Page', 'Impr.', 'CTR', 'Pos.'], lowCtr.map(r => [r.keys[0], r.impressions, pct(r.ctr), r.position.toFixed(1)]))}
## Striking distance (avg. position 11-30, >=20 impr.)
${table(['Query', 'Impr.', 'Clicks', 'Pos.'], striking.map(r => [r.keys[0], r.impressions, r.clicks, r.position.toFixed(1)]))}
## Possible cannibalization (>=2 pages each with >=10% of a query's impressions)
${cannibal.map(c => `- **${c.query}** (${c.total} impr.): ${c.pages.map(p => `${p.page} (${p.impressions}, pos ${p.position.toFixed(1)})`).join('; ')}`).join('\n') || '_none_'}

## Submitted sitemaps
${table(['Sitemap', 'Last downloaded', 'Errors', 'Warnings', 'Pending'], sitemaps.map(s => [s.path, s.lastDownloaded || '-', s.errors ?? 0, s.warnings ?? 0, s.isPending ? 'yes' : 'no']))}
${INSPECT ? `## URL inspection (sitemap URLs)\n${table(['URL', 'Verdict', 'Coverage', 'Last crawl', 'Google canonical'], inspections.map(i => [i.url, i.verdict, i.coverage, i.lastCrawl || '-', i.googleCanonical || '-']))}` : ''}
_Heuristic sections are prompts for human review. Do not change pages automatically based on short-term ranking movement._
`

mkdirSync('seo-reports', { recursive: true })
const stamp = new Date().toISOString().slice(0, 10)
writeFileSync(`seo-reports/gsc-${stamp}.md`, md)
writeFileSync(`seo-reports/gsc-${stamp}.json`, JSON.stringify({ site: SITE, cur, prev, now, before, pages, queries, lowCtr, striking, cannibal, sitemaps, inspections }, null, 2))
console.log(`wrote seo-reports/gsc-${stamp}.md`)
