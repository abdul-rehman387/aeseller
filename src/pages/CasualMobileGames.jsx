import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Banknote, BarChart3, Target, Zap } from 'lucide-react'

const capabilities = [
  { ic: Target, h: 'Core Loop Design', p: 'Tight, addictive gameplay loops prototyped and tested before full production begins.' },
  { ic: BarChart3, h: 'Data-Driven Iteration', p: 'A/B tested onboarding, difficulty curves, and monetization prompts based on real player data.' },
  { ic: Banknote, h: 'Ad & IAP Monetization', p: 'Rewarded video, interstitials, and IAP integrated without tanking retention.' },
  { ic: Zap, h: 'Lightweight Builds', p: 'Small download sizes and fast load times that keep players from bouncing before they start.' },
]

const stack = [
  { h: 'Unity 2D', p: 'Our core engine for fast-iterating, lightweight casual game builds.', hot: true },
  { h: 'C#', p: 'Clean, performant gameplay code built for rapid prototyping and iteration.' },
  { h: 'AppLovin MAX / AdMob', p: 'Ad mediation tuned for revenue without sacrificing player experience.' },
  { h: 'Firebase Analytics', p: 'Player behavior data feeding every retention and monetization decision.' },
  { h: 'Remote Config', p: 'Live-tunable difficulty, pricing, and feature flags without an app store update.' },
  { h: 'GameAnalytics', p: 'Funnel and retention analytics purpose-built for mobile game teams.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function CasualMobileGames() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">CASUAL</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Casual Mobile Games</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Simple to Play, Hard to Put Down</p>
              <h1>Casual Mobile Game Development Services</h1>
              <p className="lead">
                We build casual mobile games engineered for retention - fast load times, tight core
                loops, and monetization that doesn't ruin the fun.
              </p>
              <div className="pillars">
                {['Sub-3-Second Load Times', 'Retention-Focused Design', 'Ad & IAP Monetization', 'Rapid Prototyping & A/B Testing'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nCasual Game'} />
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
            <h2>Games Engineered to Keep Players Coming Back</h2>
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
            <h2>Our Casual Game Stack</h2>
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
            <h2>A Casual Puzzle Game That Reached #3 on the App Store</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Gaming / Casual Mobile</p>
              <h3>Tuning a Core Loop Until Retention Beat the Genre Average</h3>
              <p>
                We prototyped, A/B tested, and iterated on a puzzle game's core loop and monetization
                until retention and revenue both cleared genre benchmarks - then it climbed the charts.
              </p>
              <ul>
                {['Reached #3 in Games category within 6 weeks', 'Day-30 retention 2x above genre benchmark', 'Load time under 2 seconds on mid-range devices', 'Monetization tuned via 40+ A/B tests post-launch'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=700&q=80" alt="Casual mobile game development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>80+</b><span>Casual Titles Shipped</span></div>
            <div className="it"><b>2x</b><span>Genre-Average Retention</span></div>
            <div className="it"><b>&lt;2s</b><span>Avg. Load Time</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Casual Mobile Game Investment Plans"
        subtitle="Transparent packages for prototypes, full production, and post-launch live-ops. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Have a Casual Game Concept?</h2>
              <p>Tell us about your core loop idea and we'll map a build engineered for retention from day one.</p>
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
            <p>We've shipped casual mobile games for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
