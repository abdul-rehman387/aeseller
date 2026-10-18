// Vercel Routing Middleware: answers URLs left over from the old WooCommerce store
// and unrelated blog (pre-2026) with "410 Gone" so search engines drop them quickly.
// Only paths in `config.matcher` reach this function; every other request is
// served normally. URL list sourced from the Wayback Machine (Oct 2026).
// Do not add current site routes here.

const GONE_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page Removed | AE Seller</title></head><body style="font-family:system-ui,sans-serif;text-align:center;padding:80px 16px"><h1>This page has been permanently removed</h1><p>AE Seller no longer operates an online store or this blog content.</p><p><a href="/">Go to the AE Seller homepage</a> or <a href="/services">explore our software development services</a>.</p></body></html>`

export default function middleware(request) {
  const { pathname } = new URL(request.url)
  // The old store's own brand page maps to the company page.
  if (/^\/brand\/ae-seller\/?$/.test(pathname)) {
    return Response.redirect(new URL('/about', request.url), 301)
  }
  return new Response(GONE_HTML, {
    status: 410,
    headers: { 'content-type': 'text/html; charset=utf-8', 'x-robots-tag': 'noindex', 'cache-control': 'public, max-age=3600' },
  })
}

export const config = {
  // Vercel deprecated the edge runtime for Routing Middleware; Node.js is the supported default.
  runtime: 'nodejs',
  matcher: [
    // WooCommerce / WordPress structures
    '/product/:path*', '/product-category/:path*', '/product-tag/:path*', '/brand/:path*',
    '/shop/:path*', '/cart/:path*', '/checkout-2/:path*', '/my-account/:path*', '/my-account-2/:path*',
    '/my-orders/:path*', '/order-tracking/:path*', '/wishlist/:path*', '/compare/:path*', '/store-list/:path*',
    '/dashboard/:path*', '/refund-returns/:path*', '/refund_returns/:path*', '/refund_returns-2/:path*',
    '/category/:path*', '/tag/:path*', '/author/:path*', '/2023/:path*', '/search/:path*',
    '/feed/:path*', '/wp-json/:path*', '/wp-content/:path*', '/wp-admin/:path*', '/wp-login.php', '/xmlrpc.php',
    '/password', '/locations.kml',
    // Old general-interest blog posts
    '/a-courageous-youtuber-simply-modded-their-iphone-air-with-a-clear-case-and-built-in-sim-card-slot-due-to-a-dream-collaboration-nevertheless-it-is-not-for-the-faint-hearted',
    '/artificial-intelligence-introduction-to-artificial-intelligence-in-modern-life-the-role-of-ai-in-todays',
    '/artificial-intelligence-making-life-smarter-and-easier',
    '/as-tariffs-bite-ecommerce',
    '/behind-the-scenes-of-the-summer-campaign',
    '/best-ai-tools-in-2025-every-student-and-professional-should-use',
    '/best-gadgets-in-uae-2025-top-tech-you-must-have-this-year',
    '/but-i-must-explain-to-you-how-all-this-mistaken-idea',
    '/cosmetics-enhancing-beauty-and-confidence',
    '/e-commerce-marketplace-to-spur-growth-in-latin-america',
    '/e-commerce-player-ounass-has-opened-a-new-personal-shopping-space-in-dubai',
    '/english-breakfast-tea-with-a-tasty-donut',
    '/english-breakfast-tea-with-tasty-donut-desserts',
    '/friendship-the-bond-of-love-loyalty-and-understanding-that-lasts-forever',
    '/from-startups-to-giants-dubais-role-in-the-middle-easts-projected-50-billion-e-commerce-boom',
    '/golf-simulated-products-the-future-of-indoor-golf-training',
    '/handmade-bracelets-the-perfect-blend-of-art-style-and-personal-touch',
    '/health-is-the-real-wealth-healthy-habits-for-a-strong-and-active-life',
    '/hellmann-unveils-robotics-powered-warehouse-solutions',
    '/hellmann-unveils-robotics-powered-warehouse-solutions-at-dubai-commercity',
    '/how-ecommerce-businesses-are-leveraging-web-data',
    '/how-ecommerce-businesses-are-leveraging-web-data-to-understand',
    '/on-the-other-hand-we-provide-denounce-with-righteous',
    '/openai-ceo-biography-openai-ceo-achievements-openai-ceo-career-openai-ceo-profile-guide-openai-ceo-leadership-style-openai-ceo-ai-vision-openai-ceo-future-plans-openai-ceo-impact-on-ai-openai',
    '/openai-ceo-sam-altman-welcomes-baby-boy-expresses-never-felt-such-love',
    '/pakistan-culture-guide-history-clothing-food-and-festivals',
    '/pollution-causes-effects-and-solutions',
    '/social-media-advantages-and-disadvantages',
    '/tcls-swarovski-crystal-open-earbuds-are-the-kitschiest-factor-ive-seen-in-ages',
    '/the-importance-of-time-management-in-daily-life',
    '/the-problem-with-typefaces-on-the-web',
    '/the-role-of-technology-in-modern-life-importance-of-technology-in-our-daily-life',
    '/the-ultimate-guide-to-ai-tools-for-small-businesses-in-the-usa',
    '/the-ultimate-guide-to-shopping-online-for-clothing-cosmetics-electronics',
    '/wireless-router-a-complete-guide-for-modern-businesses',
  ],
}
