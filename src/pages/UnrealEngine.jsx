import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Globe, Monitor, Puzzle, Target } from 'lucide-react'

const capabilities = [
  { ic: Monitor, h: 'High-Fidelity Rendering', p: 'Lumen and Nanite pipelines tuned for visual quality without tanking frame rate.' },
  { ic: Puzzle, h: 'Blueprint & C++ Development', p: 'The right tool for the job - rapid iteration in Blueprints, performance-critical systems in C++.' },
  { ic: Globe, h: 'Multiplayer Networking', p: 'Replicated gameplay systems built for low-latency, competitive-grade multiplayer.' },
  { ic: Target, h: 'Performance Profiling', p: 'Frame-by-frame optimization to hit target frame rates on your actual target hardware.' },
]

const stack = [
  { h: 'Unreal Engine 5', p: 'Our core engine for AAA-grade rendering and gameplay systems.', hot: true },
  { h: 'C++', p: 'Performance-critical gameplay and engine systems written for tight frame budgets.' },
  { h: 'Blueprints', p: 'Rapid visual scripting for iteration on gameplay and UI logic.' },
  { h: 'Lumen / Nanite', p: 'Next-generation lighting and geometry pipelines for photorealistic visuals.' },
  { h: 'Unreal Multiplayer Framework', p: 'Replication and networking built on Epic\'s battle-tested multiplayer stack.' },
  { h: 'Perforce', p: 'Version control built for large binary assets at studio scale.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function UnrealEngine() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">UNREAL</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Unreal Engine</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>AAA-Grade Visuals</p>
              <h1>Unreal Engine Development Services</h1>
              <p className="lead">
                We build high-fidelity games and interactive experiences in Unreal Engine - for teams
                that need console-quality visuals without a console-sized budget or team.
              </p>
              <div className="pillars">
                {['Photorealistic Rendering', 'Blueprint & C++ Development', 'Console-Grade Performance', 'Multiplayer Networking'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nUnreal Project'} />
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
            <h2>Console-Quality Visuals, Real Frame Rates</h2>
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
            <h2>Our Unreal Engine Stack</h2>
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
            <h2>Shipping a Multiplayer Title on Unreal Engine 5</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Gaming / PC & Console</p>
              <h3>Hitting Console Frame Targets Without Cutting Visual Fidelity</h3>
              <p>
                We built and optimized a multiplayer title on UE5, tuning Lumen lighting and network
                replication to hit stable frame rates and low-latency matches at launch.
              </p>
              <ul>
                {['Stable 60fps on target console hardware', 'Sub-50ms multiplayer latency in live matches', 'Full Lumen lighting pipeline shipped without performance regressions', 'Zero crash-related negative reviews at launch'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=700&q=80" alt="Unreal Engine game development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>20+</b><span>Unreal Titles Shipped</span></div>
            <div className="it"><b>60fps</b><span>Console Performance</span></div>
            <div className="it"><b>&lt;50ms</b><span>Multiplayer Latency</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Unreal Engine Investment Plans"
        subtitle="Transparent packages for prototypes, full production builds, and multiplayer infrastructure. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Building the Next AAA-Grade Title?</h2>
              <p>Tell us about your game vision and target platforms and we'll map a build that hits your performance bar.</p>
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
            <p>We've shipped Unreal Engine titles for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
