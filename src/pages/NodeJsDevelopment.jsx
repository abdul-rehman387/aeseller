import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { Archive, ArrowRight, Puzzle, RefreshCw, TrendingUp } from 'lucide-react'

const capabilities = [
  { ic: Puzzle, h: 'REST & GraphQL APIs', p: 'Well-documented, versioned APIs designed around how your clients actually consume data.' },
  { ic: RefreshCw, h: 'Event-Driven Services', p: 'Message queues and worker processes that keep your system responsive under load.' },
  { ic: Archive, h: 'Database Architecture', p: 'Schema design and query optimization across SQL and NoSQL stores.' },
  { ic: TrendingUp, h: 'Observability Built In', p: 'Structured logging, tracing, and alerting from day one, not bolted on after an outage.' },
]

const stack = [
  { h: 'Node.js / Express', p: 'Fast, battle-tested foundations for high-throughput API services.', hot: true },
  { h: 'NestJS', p: 'Structured, testable backend architecture for larger engineering teams.' },
  { h: 'PostgreSQL / MongoDB', p: 'The right data store for the job, chosen on consistency and access-pattern needs.' },
  { h: 'Redis / BullMQ', p: 'Caching and background job processing that keeps your API fast under load.' },
  { h: 'Docker / Kubernetes', p: 'Containerized services that deploy consistently across every environment.' },
  { h: 'AWS / GCP', p: 'Cloud infrastructure sized and secured for your actual traffic profile.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function NodeJsDevelopment() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">NODE</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Node.js Back-End</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Backend Engineering That Scales</p>
              <h1>Node.js Back-End Development Services</h1>
              <p className="lead">
                We design and build backend systems in Node.js that handle real production load - REST
                and GraphQL APIs, event-driven services, and the infrastructure to keep them fast and reliable.
              </p>
              <div className="pillars">
                {['High-Throughput APIs', 'Event-Driven Architecture', 'Horizontal Scalability', '99.9% Uptime Track Record'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nBackend'} />
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
            <h2>Backends That Hold Up Under Load</h2>
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
            <h2>Our Node.js Stack</h2>
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
            <h2>Rebuilding a Legacy API Layer for 10x Traffic</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Enterprise / Backend</p>
              <h3>From a Single Point of Failure to a Horizontally Scaled API</h3>
              <p>
                We re-architected a client's monolithic Node.js API into a horizontally scalable service
                with queued background processing, cutting latency and removing the single point of failure
                that had been capping their growth.
              </p>
              <ul>
                {['Handles 10x prior peak traffic without added infra cost', 'p99 API latency cut from 800ms to 90ms', 'Zero-downtime rolling deploys', 'Full observability with real-time alerting'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=700&q=80" alt="Node.js backend infrastructure" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>70+</b><span>Backend Systems Shipped</span></div>
            <div className="it"><b>99.9%</b><span>Average Uptime</span></div>
            <div className="it"><b>&lt;100ms</b><span>Avg. API Latency</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Node.js Development Investment Plans"
        subtitle="Transparent packages for single APIs, event-driven services, and full backend platforms. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Scale Your Backend?</h2>
              <p>Tell us what's slowing your API down and we'll map an architecture that can actually handle your growth.</p>
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
            <p>We've shipped backend systems for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
