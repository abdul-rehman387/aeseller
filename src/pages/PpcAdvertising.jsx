import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, DollarSign, FlaskConical, Target, TrendingUp } from 'lucide-react'

const capabilities = [
  { ic: Target, h: 'Campaign Strategy & Setup', p: 'Google, Meta, and LinkedIn campaigns structured around your actual sales funnel.' },
  { ic: TrendingUp, h: 'Conversion Tracking', p: 'Properly configured tracking so you know which ads actually drive revenue, not just clicks.' },
  { ic: FlaskConical, h: 'Continuous A/B Testing', p: 'Ad creative, copy, and landing pages tested on a rolling basis to cut cost-per-lead.' },
  { ic: DollarSign, h: 'Budget Optimization', p: 'Spend reallocated weekly toward what\'s actually converting, not left on autopilot.' },
]

const stack = [
  { h: 'Google Ads', p: 'Search, Display, and Performance Max campaigns built around real intent signals.', hot: true },
  { h: 'Meta Ads Manager', p: 'Facebook and Instagram campaigns tuned for both awareness and direct response.' },
  { h: 'LinkedIn Campaign Manager', p: 'B2B-focused targeting for high-value, longer-cycle offers.' },
  { h: 'Google Tag Manager', p: 'Clean, maintainable tracking setup across every campaign and landing page.' },
  { h: 'GA4 Conversion Tracking', p: 'Attribution that ties ad spend directly to pipeline and revenue.' },
  { h: 'Unbounce / Landing Pages', p: 'Purpose-built, testable landing pages matched to each campaign\'s intent.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function PpcAdvertising() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">PPC</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">PPC Advertising</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Every Dollar, Accounted For</p>
              <h1>PPC Advertising Services</h1>
              <p className="lead">
                We run paid search and social campaigns built around a single question - what does this
                cost us per qualified lead, and how do we bring that number down every month.
              </p>
              <div className="pillars">
                {['Google & Meta Ads Management', 'Conversion Tracking Set Up Right', 'Continuous A/B Testing', 'Transparent Spend Reporting'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nAd Strategy'} />
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
            <h2>Spend Tied to Revenue, Not Vanity Clicks</h2>
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
            <h2>Our Paid Media Stack</h2>
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
            <h2>Cutting Cost-Per-Lead 45% in One Quarter</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">eCommerce / PPC</p>
              <h3>Fixing Broken Attribution Before Optimizing Spend</h3>
              <p>
                We rebuilt a client's conversion tracking to close a data gap that was hiding their best
                campaigns, then reallocated spend toward what the fixed data showed was actually working.
              </p>
              <ul>
                {['Cost-per-lead down 45% in one quarter', 'Conversion tracking rebuilt to close a 30% data gap', 'Ad spend reallocated to the 20% of campaigns driving 80% of revenue', 'ROAS improved from 1.8x to 3.4x'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=700&q=80" alt="PPC advertising campaign management" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>45%</b><span>Avg. Cost-Per-Lead Reduction</span></div>
            <div className="it"><b>3.4x</b><span>Avg. ROAS Achieved</span></div>
            <div className="it"><b>50+</b><span>Ad Accounts Managed</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="PPC Advertising Investment Plans"
        subtitle="Transparent packages for campaign setup, ongoing management, and conversion tracking rebuilds. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Not Sure Where Your Ad Budget Is Going?</h2>
              <p>Tell us what you're spending today and we'll map a plan to bring your cost-per-lead down.</p>
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
            <p>We've managed paid media for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
