import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, DollarSign, Gamepad2, Palette, Smartphone } from 'lucide-react'

const capabilities = [
  { ic: Gamepad2, h: 'Gameplay Programming', p: 'Core mechanics, physics, and systems built for responsiveness and feel, not just function.' },
  { ic: Smartphone, h: 'Cross-Platform Optimization', p: 'Single codebase shipping to iOS, Android, PC, and console without a rewrite per platform.' },
  { ic: DollarSign, h: 'Monetization & Live-Ops', p: 'IAP, ads, and events integrated cleanly, with the analytics to know what\'s working.' },
  { ic: Palette, h: 'Art & Asset Pipeline', p: 'Optimized asset pipelines that keep build sizes and load times under control.' },
]

const stack = [
  { h: 'Unity Engine', p: 'Our core engine for cross-platform 2D and 3D game development.', hot: true },
  { h: 'C#', p: 'Gameplay and systems code written for performance and long-term maintainability.' },
  { h: 'Unity IAP / Ads', p: 'Native monetization integrations tuned for retention, not just revenue.' },
  { h: 'Photon / Mirror Networking', p: 'Real-time multiplayer networking for competitive and co-op titles.' },
  { h: 'Unity Analytics', p: 'Player behavior data feeding every post-launch design decision.' },
  { h: 'Addressables', p: 'Asset management that keeps build sizes and load times under control.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function Unity3dGames() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">UNITY</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Unity 3D Games</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Cross-Platform Games, One Engine</p>
              <h1>Unity 3D Game Development Services</h1>
              <p className="lead">
                We build games in Unity for mobile, PC, and console - from prototype to a live, monetized
                title, engineered to hit frame-rate targets on the hardware your players actually own.
              </p>
              <div className="pillars">
                {['Cross-Platform Builds', 'Optimized for Low-End Devices', 'Live-Ops Ready', 'Full Monetization Integration'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nGame'} />
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
            <h2>Games Built to Ship on Every Platform</h2>
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
            <h2>Our Unity Stack</h2>
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
            <h2>A Unity Title That Hit 500k Downloads in 90 Days</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Gaming / Mobile</p>
              <h3>Shipping a Cross-Platform Title Optimized for Low-End Devices</h3>
              <p>
                We built and optimized a Unity title to run at 60fps on three-year-old devices, then
                layered in a live-ops event system that kept players coming back after launch.
              </p>
              <ul>
                {['500k+ downloads within 90 days of launch', '60fps maintained on 3-year-old devices', 'Full live-ops event system shipped post-launch', '4.7★ average store rating'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=700&q=80" alt="Unity game development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>60+</b><span>Unity Titles Shipped</span></div>
            <div className="it"><b>500k+</b><span>Combined Downloads</span></div>
            <div className="it"><b>60fps</b><span>Target Hit on Low-End Devices</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Unity Game Development Investment Plans"
        subtitle="Transparent packages for prototypes, full game builds, and live-ops support. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Have a Game Idea Worth Building?</h2>
              <p>Tell us about your concept and platform targets and we'll map a build that actually ships.</p>
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
            <p>We've shipped Unity games for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
