import { DEFAULT_OG_IMAGE, LOGO_URL, ORG_EMAILS, ORG_ID, SAME_AS, SITE_NAME, SITE_URL, WEBSITE_ID } from './site'
import { NOT_FOUND, findRoute } from './routes'

const absolute = path => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

const organization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: LOGO_URL, width: 512, height: 512 },
  email: ORG_EMAILS[0],
  contactPoint: ORG_EMAILS.map(email => ({ '@type': 'ContactPoint', contactType: 'customer service', email })),
  ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
})

const orgRef = { '@id': ORG_ID }

function breadcrumbs(route) {
  const trail = [{ name: 'Home', path: '/' }, ...(route.crumbs || []), { name: route.name, path: route.path }]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absolute(c.path),
    })),
  }
}

function structuredData(route, url) {
  if (route.noindex) return null
  const graph = [organization()]

  if (route.path === '/') {
    graph.push({
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: orgRef,
      inLanguage: 'en',
    })
  } else {
    graph.push(breadcrumbs(route))
  }

  if (route.type) {
    graph.push({ '@type': route.type, url, name: route.title, description: route.description, isPartOf: { '@id': WEBSITE_ID } })
  }

  if (route.service) {
    graph.push({
      '@type': 'Service',
      name: route.service,
      serviceType: route.service,
      description: route.description,
      url,
      provider: orgRef,
    })
  }

  if (route.article) {
    graph.push({
      '@type': 'BlogPosting',
      headline: route.article.h,
      description: route.description,
      image: route.image,
      url,
      mainEntityOfPage: url,
      author: orgRef,
      publisher: orgRef,
      inLanguage: 'en',
      ...(route.article.published ? { datePublished: route.article.published } : {}),
      ...(route.article.updated ? { dateModified: route.article.updated } : {}),
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

// Resolves the SEO data for a pathname. Unknown paths get the noindex 404 entry.
export function getSeo(pathname) {
  const route = findRoute(pathname) || NOT_FOUND
  const url = absolute(route.path)
  return {
    route,
    title: route.title,
    description: route.description,
    canonical: route.noindex ? null : url,
    robots: route.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
    image: route.image || DEFAULT_OG_IMAGE,
    ogType: route.article ? 'article' : 'website',
    url,
    jsonLd: structuredData(route, url),
  }
}

// Tag descriptors shared by the prerenderer (string output) and the client (DOM output).
export function headTags(seo) {
  const tags = [
    { tag: 'meta', attrs: { name: 'description', content: seo.description } },
    { tag: 'meta', attrs: { name: 'robots', content: seo.robots } },
  ]
  if (seo.canonical) tags.push({ tag: 'link', attrs: { rel: 'canonical', href: seo.canonical } })
  if (seo.route.preloadImage) {
    tags.push({ tag: 'link', attrs: { rel: 'preload', as: 'image', href: seo.route.preloadImage, fetchpriority: 'high' } })
  }
  tags.push(
    { tag: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
    { tag: 'meta', attrs: { property: 'og:locale', content: 'en_US' } },
    { tag: 'meta', attrs: { property: 'og:type', content: seo.ogType } },
    { tag: 'meta', attrs: { property: 'og:title', content: seo.title } },
    { tag: 'meta', attrs: { property: 'og:description', content: seo.description } },
    { tag: 'meta', attrs: { property: 'og:url', content: seo.url } },
    { tag: 'meta', attrs: { property: 'og:image', content: seo.image } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: seo.image === DEFAULT_OG_IMAGE ? 'summary' : 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: seo.title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: seo.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: seo.image } },
  )
  if (seo.jsonLd) {
    tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, text: JSON.stringify(seo.jsonLd) })
  }
  return tags
}

const escapeHtml = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
// JSON-LD lives inside <script>; only "</" needs neutralising.
const escapeScript = s => s.replace(/<\/(script)/gi, '<\\/$1')

export function renderHeadHtml(seo) {
  const lines = [`<title>${escapeHtml(seo.title)}</title>`]
  for (const t of headTags(seo)) {
    const attrs = Object.entries(t.attrs).map(([k, v]) => `${k}="${escapeHtml(v)}"`).join(' ')
    lines.push(t.tag === 'script'
      ? `<script ${attrs} data-seo>${escapeScript(t.text)}</script>`
      : `<${t.tag} ${attrs} data-seo />`)
  }
  return lines.join('\n    ')
}
