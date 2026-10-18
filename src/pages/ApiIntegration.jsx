import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Hammer, Plug, Repeat, Shield } from 'lucide-react'

const capabilities = [
  { ic: Plug, h: 'Third-Party Integrations', p: 'Connect Stripe, Salesforce, HubSpot, QuickBooks, and hundreds of other SaaS platforms into one unified workflow.' },
  { ic: Hammer, h: 'Custom API Development', p: 'Design and build REST or GraphQL APIs that are documented, versioned, and ready for partners to build on.' },
  { ic: Repeat, h: 'Webhook & Event Pipelines', p: 'Real-time event-driven architecture so your systems react the moment something changes.' },
  { ic: Shield, h: 'API Security & Rate Limiting', p: 'OAuth2, API keys, and rate limiting built in so your endpoints stay protected at scale.' },
]

const stack = [
  { h: 'REST / GraphQL', p: 'Well-documented, versioned APIs designed around how your consumers actually query data.', hot: true },
  { h: 'Node.js / Express', p: 'Fast, lightweight API services built for high-throughput integration workloads.' },
  { h: 'Zapier / Make', p: 'No-code automation layers for connecting tools your team already relies on.' },
  { h: 'Stripe / Twilio / Plaid', p: 'Deep, production-grade integrations with the payment, messaging, and fintech platforms you depend on.' },
  { h: 'OpenAPI / Swagger', p: 'Machine-readable API specs that keep documentation accurate as your endpoints evolve.' },
  { h: 'Postman / API Gateway', p: 'Managed gateways with monitoring, throttling, and access control for every integration.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function ApiIntegration() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">API</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">API Integration</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Connect Everything</p>
              <h1>API Integration & Development Services</h1>
              <p className="lead">
                From connecting third-party SaaS tools to building the public API that powers your own
                ecosystem - we design integrations that are reliable, secure, and built to last.
              </p>
              <div className="pillars">
                {['200+ Integrations Shipped', 'REST, GraphQL & Webhooks', '99.9% Integration Uptime', 'SOC 2-Ready Security'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nIntegration'} />
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
            <p className="eyebrow orange">What We Do</p>
            <h2>Integrations That Just Work</h2>
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
            <h2>Our Integration Stack</h2>
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
            <h2>One CRM, Twelve Connected Tools</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">SaaS / Integrations</p>
              <h3>Unifying a Fragmented Sales Stack Into One API Layer</h3>
              <p>
                We built a central integration layer connecting a client's CRM to twelve third-party tools -
                billing, email, calendars, and analytics - replacing brittle manual exports with real-time,
                event-driven sync.
              </p>
              <ul>
                {['12 third-party platforms unified into one API layer', 'Real-time webhook sync replacing manual CSV exports', 'Rate-limited, authenticated endpoints for every consumer', '99.9% integration uptime since launch'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=700&q=80" alt="API integration development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>200+</b><span>Integrations Shipped</span></div>
            <div className="it"><b>99.9%</b><span>Integration Uptime</span></div>
            <div className="it"><b>15+</b><span>Platforms Connected (avg.)</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="API Integration Investment Plans"
        subtitle="Transparent packages for single integrations, multi-platform sync layers, and full public API builds. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Connect Your Stack?</h2>
              <p>Tell us which tools need to talk to each other and we'll map the integration architecture to get there.</p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>Book a Free Consultation</Link>
            </div>
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="API development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="clientele">
        <div className="wrap">
          <div className="top">
            <span className="ghost">CLIENTS</span>
            <h2>Our Global Clientele</h2>
            <p>We've shipped integrations for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
