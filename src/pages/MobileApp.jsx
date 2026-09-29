import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { Bot, Building, CheckCircle2, DollarSign, Gamepad2, Globe, HeartPulse, Lock, Medal, Phone, RefreshCw, Rocket, Shield, ShoppingCart, Smartphone, Star, TrendingUp } from 'lucide-react'

const trustBrands = ['MOBIUS','KINDER MORGAN','UTMB','WORLD COOP','camh','SAUDI BELL']

const services = [
  { ic: Smartphone, h: 'iOS App Development', p: 'Native Swift apps crafted for iPhone and iPad, optimized for App Store success.' },
  { ic: Bot, h: 'Android App Development', p: 'Kotlin-powered Android apps for phones, tablets, and emerging form factors.' },
  { ic: RefreshCw, h: 'Cross-Platform Apps', p: 'React Native and Flutter apps sharing 90% of code across iOS and Android.' },
  { ic: Building, h: 'Enterprise Mobile', p: 'Secure, MDM-ready apps for internal business operations and field teams.' },
  { ic: ShoppingCart, h: 'E-Commerce Apps', p: 'Mobile storefronts with seamless checkout, AR try-on, and loyalty features.' },
  { ic: HeartPulse, h: 'Healthcare Apps', p: 'HIPAA-compliant patient and provider apps with EHR integration.' },
  { ic: DollarSign, h: 'Fintech Apps', p: 'Banking, payment, and investment apps with PCI DSS compliance baked in.' },
  { ic: Gamepad2, h: 'Gaming Apps', p: 'Casual to mid-core mobile games with Unity, Godot, and native game loops.' },
]

const portfolioCases = [
  {
    ch: 'Oil & Gas / Enterprise',
    h: 'Kinder Morgan Pipeline App',
    desc: 'A mission-critical field management and pipeline monitoring app deployed to 2,000+ engineers across North America. Built for Android and iOS with SCADA integration, offline-first architecture, and real-time alerting.',
    bullets: ['Offline-first for remote field locations', 'Real-time SCADA data visualisation', '60% faster incident response time', 'Zero-downtime deployment strategy'],
    img: '1714901423336-1884cd3fb50f',
  },
  {
    ch: 'Gaming / Consumer',
    h: 'Rise Up Kings',
    desc: 'A competitive multiplayer sports gaming platform with real-time matchmaking, live leaderboards, and a deep in-app economy. Launched globally on iOS and Android simultaneously.',
    bullets: ['500k+ downloads in 90 days', 'Real-time play for 50k concurrent users', '4.8★ App Store & Play Store rating', 'Revenue-generating in week 1'],
    img: '1600861194942-f883de0dfe96',
  },
]

const testimonials = [
  { name: 'Bob Gammon', role: 'VP Engineering, Kinder Morgan', stars: '★★★★★', quote: 'AE Seller delivered a production-grade pipeline app that our engineers rely on daily. Zero bugs in production in 18 months.', face: '1676989880361-091e12efc056' },
  { name: 'Anna Palko', role: 'CTO, Tamreeni Health', stars: '★★★★★', quote: 'Their mobile team understood our HIPAA requirements on day one. The app launched on time and handled 10x our projected load.', face: '1604904612715-47bf9d9bc670' },
  { name: 'Keith Cascarelli', role: 'CEO, Rise Up Kings', stars: '★★★★★', quote: 'I\'ve worked with 4 app agencies. AE Seller is the only one that treated my product like their own. Outstanding.', face: '1607990283143-e81e7a2c9349' },
]

const stackData = {
  'Top Backend': ['Node.js', 'Python', '.NET', 'Java', 'Go', 'GraphQL'],
  'Cloud Storage': ['AWS S3', 'Azure Blob', 'Firebase', 'Cloudflare R2'],
  'Database': ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
}

const certifications = [
  { ic: CheckCircle2, h: 'HIPAA Compliant', p: 'Healthcare-grade data security for patient apps.' },
  { ic: Lock, h: 'PCI DSS Ready', p: 'Payment security for fintech and e-commerce.' },
  { ic: Shield, h: 'SOC 2 Type II', p: 'Enterprise data handling and security controls.' },
  { ic: Globe, h: 'GDPR Compliant', p: 'European data privacy regulations built in.' },
]

export default function MobileApp() {
  const [stackTab, setStackTab] = useState('Top Backend')

  return (
    <>
      <section className="mobile-hero">
        <div className="mobile-hero-bg" />
        <div className="mobile-hero-ov" />
        <div className="wrap">
          <p className="crumb" style={{ color: '#b9c4d2', marginBottom: 18 }}>
            <Link to="/" style={{ color: '#b9c4d2' }}>Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--orange)' }}>Mobile App Development</span>
          </p>
          <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 14 }}>USA's Top Mobile App Company</p>
          <h1>Mobile App Development Company USA</h1>
          <p className="hero-p">We build iOS, Android, and cross-platform apps that users love and businesses depend on. 800+ apps shipped, 98% client retention.</p>
          <div className="hero-btns">
            <Link to="/" className="btn">Get a Free Quote</Link>
            <a href="tel:+18325550190" className="call-link">
              <span className="c"><Phone size={16} strokeWidth={1.75} /></span>
              +1 (832) 555-0190
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <div className="trust">
        <div className="wrap">
          <h2>Trusted by Industry Leaders</h2>
          <div className="tlogos">
            {trustBrands.map(b => <div key={b} className="cell">{b}</div>)}
          </div>
          <div className="tstats">
            <div className="it"><Star size={16} strokeWidth={1.75} /> Clutch <span className="muted">4.8 Rating</span></div>
            <div className="it"><TrendingUp size={16} strokeWidth={1.75} /> Inc. 5000 <span className="muted">Fastest Growing</span></div>
            <div className="it"><Medal size={16} strokeWidth={1.75} /> GoodFirms <span className="muted">Leader 2025</span></div>
            <div className="it"><Rocket size={16} strokeWidth={1.75} /> Deloitte <span className="muted">Fast 50</span></div>
          </div>
        </div>
      </div>

      {/* WHY AE SELLER */}
      <section className="sec">
        <div className="wrap">
          <div className="twocol">
            <div>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Why Choose Us</p>
              <h2>Why AE Seller for Mobile App Development?</h2>
              <p style={{ marginTop: 16 }}>
                We've shipped 800+ mobile apps across every major industry. Our engineers are App Store veterans who
                understand what it takes to launch successfully - and keep users coming back.
              </p>
            </div>
            <ConsultForm title={'Start Your App\nProject'} />
          </div>

          <div className="icards">
            {services.map(s => (
              <div key={s.h} className="icard">
                <div className="ic"><s.ic size={24} strokeWidth={1.75} /></div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="sec" style={{ background: 'var(--gray-bg)', paddingTop: 60 }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Featured Case Studies</p>
            <h2>Apps That Made Headlines</h2>
          </div>
          {portfolioCases.map(c => (
            <div key={c.h} className="pf-case">
              <div>
                <p className="ch">{c.ch}</p>
                <h3>{c.h}</h3>
                <p>{c.desc}</p>
                <ul>
                  {c.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
              </div>
              <div className="pf-img">
                <img src={`https://images.unsplash.com/photo-${c.img}?w=700&q=80`} alt={c.h} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAR */}
      <div className="sec" style={{ padding: '60px 0' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>800+</b><span>Apps Shipped</span></div>
            <div className="it"><b>98%</b><span>Client Retention</span></div>
            <div className="it"><b>10 Yrs</b><span>Experience</span></div>
            <div className="it"><b>4.8 / 5</b><span>Client Rating</span></div>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Security & Compliance</p>
            <h2>Built to the Highest Standards</h2>
          </div>
          <div className="icards">
            {certifications.map(c => (
              <div key={c.h} className="icard">
                <div className="ic"><c.ic size={24} strokeWidth={1.75} /></div>
                <h3>{c.h}</h3>
                <p>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Client Reviews</p>
            <h2>Hear It From Our Clients</h2>
          </div>
          <div className="tst-grid-3">
            {testimonials.map(t => (
              <div key={t.name} className="tcard">
                <div
                  className="ph"
                  style={{ backgroundImage: `url(https://images.unsplash.com/photo-${t.face}?w=600&q=80)` }}
                />
                <div className="bd">
                  <div className="stars">{t.stars}</div>
                  <p style={{ fontSize: 14, color: 'var(--slate)', lineHeight: 1.6 }}>"{t.quote}"</p>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Technology</p>
            <h2>The Tech Stack We Use</h2>
          </div>
          <div className="stack-tabs">
            {Object.keys(stackData).map(tab => (
              <button
                key={tab}
                className={`stack-tab${stackTab === tab ? ' active' : ''}`}
                onClick={() => setStackTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="stack-logos">
            {stackData[stackTab].map(t => (
              <span key={t} className="pl">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATE */}
      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Get Started</p>
            <h2>Estimate Your App in Minutes</h2>
          </div>
          <div className="est-grid">
            <div className="est-img">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80" alt="Mobile app" loading="lazy" />
            </div>
            <div className="est-box">
              <div className="est-bar"><i /></div>
              <h3>What type of app are you building?</h3>
              {['Consumer / B2C Mobile App','Enterprise / B2B App','E-Commerce App','Healthcare / Fintech App'].map((opt, i) => (
                <div key={opt} className="est-opt">
                  <span className="r" style={i === 0 ? { background: 'var(--primary)', borderColor: 'var(--primary)' } : {}} />
                  {opt}
                </div>
              ))}
              <Link to="/" className="btn" style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}>
                Get My Free Estimate →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PricingSection
        title="Mobile App Investment Plans"
        subtitle="From a lightweight MVP to a full-scale enterprise app - transparent packages with no hidden fees. Every project starts with a free discovery call."
      />

      {/* CTA */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Start Today</p>
              <h2>Ready to Build Your Mobile App?</h2>
              <p>Our team is ready to start. Let's schedule a free technical discovery call and map out your path to launch.</p>
              <Link to="/" className="btn" style={{ background: 'var(--orange)' }}>Book a Free Call</Link>
            </div>
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Team" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
