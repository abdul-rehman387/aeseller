import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Atom, Lock, Search, Zap } from 'lucide-react'

const capabilities = [
  { ic: Atom, h: 'Component Architecture', p: 'Reusable, tested component libraries built for design-system consistency across your product.' },
  { ic: Zap, h: 'Next.js App Router', p: 'Server components, streaming, and edge rendering for sub-second page loads.' },
  { ic: Search, h: 'SEO & Core Web Vitals', p: 'Static generation, image optimization, and metadata handled correctly from day one.' },
  { ic: Lock, h: 'Auth & Data Layer', p: 'Secure session handling and typed data fetching wired into your API or headless CMS.' },
]

const stack = [
  { h: 'Next.js 15 / App Router', p: 'Server components, streaming, and edge rendering as the default architecture for every build.', hot: true },
  { h: 'React 19 / Server Components', p: 'Modern React primitives for faster initial loads and less client-side JavaScript.' },
  { h: 'TypeScript', p: 'End-to-end type safety from your API layer through to every component prop.' },
  { h: 'Tailwind CSS / CSS Modules', p: 'Design-system-driven styling that stays fast and maintainable as the app grows.' },
  { h: 'tRPC / GraphQL', p: 'Typed data layers that eliminate an entire class of frontend-backend integration bugs.' },
  { h: 'Vercel / Edge Deployment', p: 'Global edge delivery with instant rollbacks and zero-downtime deploys.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function ReactNextjsDevelopment() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">REACT</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">React / Next.js</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Modern Frontend Engineering</p>
              <h1>React & Next.js Development Services</h1>
              <p className="lead">
                We build fast, SEO-friendly, production-grade web apps with React and Next.js - from
                marketing sites that need perfect Core Web Vitals to complex authenticated dashboards.
              </p>
              <div className="pillars">
                {['100/100 Lighthouse-Ready Builds', 'Server & Client Components', 'TypeScript by Default', 'SSR, SSG & ISR'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nReact Project'} />
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
            <h2>Frontends Engineered for Speed</h2>
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
            <h2>Our React & Next.js Stack</h2>
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
            <h2>A Marketing Site That Converts, a Dashboard That Scales</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">SaaS / Web Platform</p>
              <h3>Migrating a Legacy Site to Next.js Without Losing SEO</h3>
              <p>
                We rebuilt a client's marketing site and authenticated dashboard on Next.js App Router,
                preserving every ranking page while cutting load times and unifying the codebase around a
                single, typed stack.
              </p>
              <ul>
                {['Lighthouse 98+ scores across every page', '40% faster page loads post-migration', 'Type-safe API layer shared between frontend and backend', 'Zero-downtime deploys on every merge to main'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80" alt="React and Next.js development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>90+</b><span>React / Next.js Projects Shipped</span></div>
            <div className="it"><b>98+</b><span>Avg. Lighthouse Score</span></div>
            <div className="it"><b>&lt;1s</b><span>Avg. Page Load Time</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="React & Next.js Investment Plans"
        subtitle="Transparent packages for landing pages, dashboards, and full-scale web applications. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Build on React?</h2>
              <p>Tell us about your product and we'll map the frontend architecture to get you there fast.</p>
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
            <p>We've shipped React and Next.js products for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
