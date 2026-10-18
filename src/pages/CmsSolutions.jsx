import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Blocks, Globe, PenLine, Zap } from 'lucide-react'

const capabilities = [
  { ic: Blocks, h: 'Headless CMS Integration', p: 'Sanity, Contentful, or Strapi wired into your frontend with a clean, structured content model.' },
  { ic: PenLine, h: 'Editor-Friendly Workflows', p: 'Visual editing, drafts, and approval flows your marketing team can actually use.' },
  { ic: Globe, h: 'Multi-Language Publishing', p: 'Localized content models built for global rollout from the start.' },
  { ic: Zap, h: 'Performance-First Delivery', p: 'Cached, CDN-backed content delivery so a CMS never becomes your bottleneck.' },
]

const stack = [
  { h: 'Sanity CMS', p: 'Structured content and a real-time collaborative editing experience for content teams.', hot: true },
  { h: 'Contentful', p: 'Enterprise-grade headless CMS for teams managing content across many channels.' },
  { h: 'Strapi', p: 'Open-source, self-hostable CMS for teams that want full control over their content infrastructure.' },
  { h: 'WordPress (Headless)', p: 'The editor experience marketing teams already know, decoupled from a modern frontend.' },
  { h: 'Next.js / Astro', p: 'Fast, cache-friendly frontends built to consume structured content at scale.' },
  { h: 'GraphQL Content API', p: 'A single, typed content layer that keeps every channel in sync.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function CmsSolutions() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">CMS</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">CMS Solutions</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Content Without the Bottleneck</p>
              <h1>CMS Solutions & Development Services</h1>
              <p className="lead">
                We build and integrate content management systems that let your marketing team ship
                changes without waiting on engineering - without sacrificing performance or design control.
              </p>
              <div className="pillars">
                {['Headless & Traditional CMS', 'Non-Technical Editor Workflows', 'Multi-Language Publishing', 'Fast, Cached Content Delivery'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nCMS Build'} />
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
            <h2>Content Systems Your Team Will Actually Use</h2>
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
            <h2>Our CMS Stack</h2>
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
            <h2>Cutting Content Publish Time From Days to Minutes</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Marketing / CMS</p>
              <h3>Giving a Marketing Team Full Control Without Touching Code</h3>
              <p>
                We integrated a headless CMS into a client's Next.js site with a structured content model,
                letting their marketing team publish and localize pages directly - no engineering ticket required.
              </p>
              <ul>
                {['Publish time cut from 3 days to under 10 minutes', 'Marketing team fully self-sufficient post-launch', 'Multi-language rollout across 5 markets', 'Page speed unaffected by the CMS integration'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=700&q=80" alt="CMS content workflow" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>35+</b><span>CMS Platforms Delivered</span></div>
            <div className="it"><b>5x</b><span>Faster Publishing</span></div>
            <div className="it"><b>5</b><span>Languages Supported (avg.)</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="CMS Solutions Investment Plans"
        subtitle="Transparent packages for CMS integration, migration, and multi-language content builds. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Free Up Your Content Team?</h2>
              <p>Tell us how your team publishes today and we'll map a CMS setup that gets engineering out of the loop.</p>
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
            <p>We've delivered CMS platforms for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
