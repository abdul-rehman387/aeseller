import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeo, headTags } from '../seo/head'

// Keeps <head> in sync on client-side navigation. The prerendered HTML already
// contains the same tags (marked data-seo), so crawlers never depend on this.
export default function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeo(pathname)
    document.title = seo.title
    document.head.querySelectorAll('[data-seo]').forEach(el => el.remove())
    for (const t of headTags(seo)) {
      const el = document.createElement(t.tag)
      for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v)
      if (t.text) el.textContent = t.text
      el.setAttribute('data-seo', '')
      document.head.appendChild(el)
    }
  }, [pathname])

  return null
}
