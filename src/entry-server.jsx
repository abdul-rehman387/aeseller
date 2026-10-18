// Build-time only: rendered by scripts/prerender.mjs to produce static HTML per route.
// Never loaded by the dev server, so fast-refresh rules do not apply.
/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App.jsx'

export { routes, NOT_FOUND } from './seo/routes'
export { getSeo, renderHeadHtml } from './seo/head'
export { SITE_URL } from './seo/site'

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
}
