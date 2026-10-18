import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, MessageCircle, Palette, Ruler, Target } from 'lucide-react'

const capabilities = [
  { ic: Target, h: 'Brand Positioning', p: 'Clear, differentiated positioning based on real competitive research, not internal opinion.' },
  { ic: Palette, h: 'Visual Identity Design', p: 'Logo, color, and typography systems built to work everywhere from a favicon to a billboard.' },
  { ic: MessageCircle, h: 'Voice & Messaging', p: 'A documented voice and messaging framework your whole team can write in consistently.' },
  { ic: Ruler, h: 'Brand Guidelines & Rollout', p: 'A living brand guide plus hands-on rollout across your existing marketing and product surfaces.' },
]

const stack = [
  { h: 'Figma', p: 'Collaborative design tooling for identity systems and brand guideline documentation.', hot: true },
  { h: 'Adobe Illustrator', p: 'Vector-based logo and mark design built to scale cleanly at any size.' },
  { h: 'Brand Guideline Systems', p: 'Structured, living documentation your team actually references and follows.' },
  { h: 'Notion / Brand Wikis', p: 'Centralized, searchable brand documentation accessible to your whole team.' },
  { h: 'Competitive Research Tooling', p: 'Structured analysis of competitor positioning before we define yours.' },
  { h: 'Design Systems', p: 'Reusable component libraries that keep the brand consistent across every product surface.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function BrandStrategy() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">BRAND</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Brand Strategy</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>A Brand People Actually Remember</p>
              <h1>Brand Strategy Services</h1>
              <p className="lead">
                We help you define the positioning, voice, and visual identity that makes your brand
                recognizable - then make sure it actually shows up consistently everywhere your customers meet you.
              </p>
              <div className="pillars">
                {['Brand Positioning & Messaging', 'Visual Identity Systems', 'Voice & Tone Guidelines', 'Cross-Channel Consistency'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nBrand Project'} />
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
            <h2>A Brand That Shows Up Consistently</h2>
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
            <h2>Our Brand Strategy Toolset</h2>
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
            <h2>A Repositioning That Doubled Inbound Demo Requests</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">B2B / Brand Strategy</p>
              <h3>Repositioning a Brand That Had Outgrown Its Own Story</h3>
              <p>
                We ran competitive research, redefined a client's positioning and messaging, and rolled
                out a new visual identity across every customer touchpoint - and inbound demand followed.
              </p>
              <ul>
                {['Inbound demo requests doubled within 4 months of relaunch', 'Full visual identity system rolled out across 12 touchpoints', 'Messaging framework adopted company-wide within 2 weeks', 'Brand recognition lift measured in follow-up customer survey'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?w=700&q=80" alt="Brand strategy workshop" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>25+</b><span>Brand Systems Delivered</span></div>
            <div className="it"><b>2x</b><span>Avg. Inbound Lift Post-Rebrand</span></div>
            <div className="it"><b>12+</b><span>Touchpoints Per Rollout (avg.)</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Brand Strategy Investment Plans"
        subtitle="Transparent packages for positioning workshops, full identity systems, and brand rollout support. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Time to Define Your Brand?</h2>
              <p>Tell us where your brand feels inconsistent today and we'll map a strategy to fix it everywhere at once.</p>
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
            <p>We've built brand systems for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
