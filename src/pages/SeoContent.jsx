import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, BarChart3, Link2, PenLine, Wrench } from 'lucide-react'

const capabilities = [
  { ic: Wrench, h: 'Technical SEO', p: 'Site speed, crawlability, and structured data fixes that remove the ceiling on your rankings.' },
  { ic: PenLine, h: 'Content Strategy & Production', p: 'Search-intent-driven content briefs and writing that ranks and actually converts.' },
  { ic: Link2, h: 'Link Building', p: 'Earned and outreach-based backlinks from sites that move the needle, not link farms.' },
  { ic: BarChart3, h: 'Rank & Traffic Reporting', p: 'Clear, monthly reporting tied to revenue impact, not vanity keyword rankings.' },
]

const stack = [
  { h: 'Ahrefs / SEMrush', p: 'Keyword research, competitor gap analysis, and rank tracking for every campaign.', hot: true },
  { h: 'Google Search Console', p: 'Direct visibility into how Google actually crawls and indexes your site.' },
  { h: 'Screaming Frog', p: 'Full-site technical audits that catch crawl and indexation issues early.' },
  { h: 'Google Analytics 4', p: 'Traffic and conversion data tied back to specific content and keywords.' },
  { h: 'Schema.org Markup', p: 'Structured data that helps search engines understand and feature your content.' },
  { h: 'Core Web Vitals Tooling', p: 'Performance monitoring since page speed is now a direct ranking factor.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function SeoContent() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">SEO</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">SEO / Content</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Rank Where It Matters</p>
              <h1>SEO & Content Marketing Services</h1>
              <p className="lead">
                We build organic search strategies that compound - technical SEO, content that actually
                answers what people are searching for, and the link-building to back it up.
              </p>
              <div className="pillars">
                {['Technical SEO Audits', 'Content Built to Rank', 'Link-Building That Lasts', 'Measurable Organic Growth'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nSEO Strategy'} />
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
            <h2>Organic Growth That Compounds</h2>
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
            <h2>Our SEO Toolset</h2>
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
            <h2>3x Organic Traffic in 8 Months</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">SaaS / SEO</p>
              <h3>Fixing Technical Debt Before Scaling Content Production</h3>
              <p>
                We audited and fixed a client's technical SEO foundation first, then layered in a
                search-intent-driven content strategy - compounding into a 3x traffic increase.
              </p>
              <ul>
                {['Organic traffic up 3x in 8 months', '40+ keywords ranking on page one', 'Technical SEO fixes recovered 25% of previously lost crawl budget', 'Content pipeline generating 15+ qualified leads a month'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=700&q=80" alt="SEO and content marketing" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>3x</b><span>Avg. Organic Traffic Growth</span></div>
            <div className="it"><b>40+</b><span>Page-One Rankings (avg.)</span></div>
            <div className="it"><b>8 mo</b><span>To Compounding Growth</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="SEO & Content Investment Plans"
        subtitle="Transparent packages for technical audits, content production, and ongoing SEO strategy. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Rank for What Matters?</h2>
              <p>Tell us about your current organic traffic and we'll map a strategy built to compound, not spike and fade.</p>
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
            <p>We've run SEO campaigns for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
