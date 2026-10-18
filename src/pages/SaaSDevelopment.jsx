import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, BarChart3, Building2, CreditCard, KeyRound } from 'lucide-react'

const capabilities = [
  { ic: Building2, h: 'Multi-Tenant Architecture', p: 'Data isolation and tenant-aware infrastructure designed to scale from your first customer to your ten-thousandth.' },
  { ic: CreditCard, h: 'Subscription Billing', p: 'Stripe and PayPal billing wired in from day one - plans, upgrades, proration, and dunning handled correctly.' },
  { ic: BarChart3, h: 'Usage Analytics & Metering', p: 'Track feature adoption and usage-based pricing metrics so you can price and grow with confidence.' },
  { ic: KeyRound, h: 'Role-Based Access Control', p: 'Team seats, permissions, and admin controls your customers expect from a real B2B SaaS product.' },
]

const stack = [
  { h: 'Next.js', p: 'Server-rendered React for fast, SEO-friendly marketing pages and app dashboards in one codebase.', hot: true },
  { h: 'Node.js / NestJS', p: 'Modular, testable backend architecture built for teams shipping fast without breaking things.' },
  { h: 'PostgreSQL (Multi-Tenant)', p: 'Row-level security and schema-per-tenant patterns for clean, isolated customer data.' },
  { h: 'Stripe Billing', p: 'Subscription plans, metered usage, invoicing, and revenue recognition, fully automated.' },
  { h: 'Redis', p: 'Caching and rate-limiting to keep your app fast as tenants and traffic scale.' },
  { h: 'Kubernetes', p: 'Auto-scaling infrastructure so growth in customers doesn\'t mean firefighting infrastructure.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function SaaSDevelopment() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">SAAS</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">SaaS Development</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Multi-Tenant, Subscription-Ready</p>
              <h1>SaaS Product Development Services</h1>
              <p className="lead">
                From first prototype to a billing-ready multi-tenant platform - we build SaaS products
                engineered to onboard your first customer and your ten-thousandth without a rewrite.
              </p>
              <div className="pillars">
                {['Multi-Tenant Architecture', 'Stripe/PayPal Billing Built-In', 'Usage-Based Pricing Ready', 'SOC 2-Ready From Day One'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Start Your\nSaaS Product'} />
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
            <h2>SaaS Capabilities</h2>
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
            <h2>Our SaaS Stack</h2>
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
            <h2>Billing That Just Works, From Launch Day</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">SaaS / Fintech</p>
              <h3>InvoicePilot - Subscription Billing Platform</h3>
              <p>
                A subscription billing and revenue recognition platform built for SaaS companies, with
                usage-based pricing, automated dunning management, and native Stripe and PayPal sync.
              </p>
              <ul>
                {['Usage-based and flat-rate pricing support', 'Automated dunning cut failed-payment churn', 'Native Stripe + PayPal reconciliation', 'Real-time revenue recognition reporting'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1642132652795-4a46f8ce789e?w=700&q=80" alt="SaaS dashboard" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>60+</b><span>SaaS Products Shipped</span></div>
            <div className="it"><b>$600K+</b><span>Transactions Processed</span></div>
            <div className="it"><b>3-5mo</b><span>Typical MVP Timeline</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="SaaS Development Investment Plans"
        subtitle="Transparent packages for SaaS builds - from a billing-ready MVP to a full multi-tenant platform. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Build Your SaaS Product?</h2>
              <p>Let's scope your MVP, pick the right billing model, and map a path to your first paying customer.</p>
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
            <p>We've shipped SaaS products for startups and enterprises across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
