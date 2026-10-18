import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, BarChart3, CreditCard, Package, ShoppingCart } from 'lucide-react'

const capabilities = [
  { ic: ShoppingCart, h: 'Headless Storefronts', p: 'Decoupled frontends on Next.js connected to Shopify, commerce APIs, or a custom catalog.' },
  { ic: CreditCard, h: 'Checkout & Payments', p: 'Secure, PCI-compliant checkout flows integrated with Stripe, PayPal, and regional gateways.' },
  { ic: Package, h: 'Inventory & Fulfillment', p: 'Real-time stock sync across channels so you never oversell.' },
  { ic: BarChart3, h: 'Conversion Optimization', p: 'Fast product pages, smart search, and A/B-tested checkout flows that measurably lift conversion.' },
]

const stack = [
  { h: 'Next.js Commerce', p: 'Headless storefronts built for speed, with full design control over every page.', hot: true },
  { h: 'Shopify / Shopify Plus', p: 'Managed commerce infrastructure paired with a fully custom storefront experience.' },
  { h: 'Stripe / PayPal', p: 'PCI-compliant payment processing with support for cards, wallets, and regional methods.' },
  { h: 'Sanity / Contentful CMS', p: 'Structured product and content models your merchandising team can manage directly.' },
  { h: 'Algolia Search', p: 'Fast, typo-tolerant product search and filtering that keeps shoppers finding what they want.' },
  { h: 'Node.js Order APIs', p: 'Custom order, inventory, and fulfillment logic where off-the-shelf platforms fall short.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function EcommerceDevelopment() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">SHOP</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">E-Commerce</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Built to Convert</p>
              <h1>E-Commerce Development Services</h1>
              <p className="lead">
                From headless storefronts to full platform migrations, we build e-commerce experiences
                engineered for conversion, speed, and checkout reliability.
              </p>
              <div className="pillars">
                {['Headless & Composable Commerce', 'Sub-2s Page Loads', 'PCI-Compliant Checkout', 'Multi-Channel Inventory Sync'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nStorefront'} />
          </div>
        </div>
      </section>

      <section className="featured-sec">
        <div className="wrap">
          <span className="ghost">CLIENTS</span>
          <h2>Trusted by Leading Organizations</h2>
          <div className="flogos">
            {clients.slice(0, 6).map(c => (
              <div key={c} className="cell">{c}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">What We Build</p>
            <h2>Storefronts Engineered to Convert</h2>
          </div>
          <div className="icards">
            {capabilities.map(c => (
              <div key={c.h} className="icard">
                <div className="ic"><c.ic size={24} strokeWidth={1.75} /></div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="tech-sec">
            <span className="ghost">STACK</span>
            <h2>Our E-Commerce Stack</h2>
            <div className="tcards">
              {stack.map(s => (
                <div key={s.h} className={`tcard-tech${s.hot ? ' scard hot' : ''}`}>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                  <span className="arr"><ArrowRight size={16} strokeWidth={2} /></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Case Study</p>
            <h2>A Storefront Rebuild That Lifted Conversion 32%</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">eCommerce / Retail</p>
              <h3>Rebuilding a Storefront Around Speed and Checkout Simplicity</h3>
              <p>
                We rebuilt a client's storefront as a headless Next.js frontend over their existing product
                catalog, cutting page load times and simplifying checkout down to two steps.
              </p>
              <ul>
                {['32% lift in checkout conversion post-rebuild', 'Sub-2-second product page loads', 'PCI-compliant checkout across all payment methods', 'Real-time inventory sync across 3 sales channels'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=700&q=80" alt="E-commerce storefront development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>40+</b><span>Storefronts Launched</span></div>
            <div className="it"><b>32%</b><span>Avg. Conversion Lift</span></div>
            <div className="it"><b>&lt;2s</b><span>Avg. Page Load Time</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="E-Commerce Investment Plans"
        subtitle="Transparent packages for storefront builds, platform migrations, and checkout optimization. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Sell More, Faster?</h2>
              <p>Tell us about your storefront and we'll map a build or migration plan that moves the conversion numbers you care about.</p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>Book a Free Consultation</Link>
            </div>
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Team" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="clientele">
        <div className="wrap">
          <div className="top">
            <span className="ghost">CLIENTS</span>
            <h2>Our Global Clientele</h2>
            <p>We've shipped e-commerce platforms for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
