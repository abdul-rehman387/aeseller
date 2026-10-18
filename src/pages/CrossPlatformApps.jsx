import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, DollarSign, Palette, RefreshCw, Zap } from 'lucide-react'

const benefits = [
  { ic: Zap, h: 'Faster Time-to-Market', p: 'Ship to iOS and Android simultaneously from one shared codebase instead of building twice.' },
  { ic: DollarSign, h: 'Lower Development Cost', p: '60-90% code reuse across platforms means less engineering time and lower long-term maintenance cost.' },
  { ic: Palette, h: 'Consistent User Experience', p: 'One design system and one set of business logic keeps behavior identical across every device.' },
  { ic: RefreshCw, h: 'Easier Long-Term Maintenance', p: 'Ship a bug fix or feature once and it rolls out everywhere - no platform drift over time.' },
]

const frameworks = [
  { h: 'React Native', p: 'Facebook\'s battle-tested framework for building native-feel apps with JavaScript and React, backed by the largest cross-platform ecosystem.', hot: true },
  { h: 'Flutter', p: 'Google\'s UI toolkit compiling to native ARM code for pixel-perfect, high-performance apps from a single Dart codebase.' },
  { h: 'Ionic / Capacitor', p: 'Web-technology-powered apps that wrap into native containers - ideal for content-driven and hybrid apps.' },
  { h: '.NET MAUI', p: 'Microsoft\'s cross-platform framework for teams already invested in C# and the .NET ecosystem.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function CrossPlatformApps() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">CROSS-PLATFORM</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Cross-Platform Apps</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>One Codebase, Every Platform</p>
              <h1>Cross-Platform App Development That Feels Native</h1>
              <p className="lead">
                We build iOS and Android apps from a single shared codebase - cutting development time
                and cost without asking your users to sacrifice native performance or platform feel.
              </p>
              <div className="pillars">
                {['70% Faster Time-to-Market', '60-90% Code Reuse', 'iOS + Android at Once', 'Native-Grade Performance'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Build Your\nCross-Platform App'} />
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
            <p className="eyebrow orange">Why Go Cross-Platform</p>
            <h2>Build Once, Launch Everywhere</h2>
          </div>
          <div className="icards">
            {benefits.map(b => (
              <div key={b.h} className="icard">
                <div className="ic"><b.ic size={24} strokeWidth={1.75} /></div>
                <h3>{b.h}</h3>
                <p>{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="tech-sec">
            <span className="ghost">FRAMEWORKS</span>
            <h2>Frameworks We Build With</h2>
            <div className="tcards">
              {frameworks.map(f => (
                <div key={f.h} className={`tcard-tech${f.hot ? ' scard hot' : ''}`}>
                  <h3>{f.h}</h3>
                  <p>{f.p}</p>
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
            <h2>One App, Two Platforms, Zero Compromise</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Gaming / Consumer</p>
              <h3>Rise Up Kings - Cross-Platform Gaming Platform</h3>
              <p>
                A competitive multiplayer sports gaming platform built with a shared codebase for iOS and
                Android, with real-time matchmaking and live leaderboards launched to both stores on the same day.
              </p>
              <ul>
                {['Simultaneous iOS + Android launch', '500k+ downloads in first 90 days', 'Real-time play for 50k concurrent users', '4.8★ rating on both app stores'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=700&q=80" alt="Cross-platform app development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>150+</b><span>Cross-Platform Apps Shipped</span></div>
            <div className="it"><b>85%</b><span>Average Code Reuse</span></div>
            <div className="it"><b>2x</b><span>Faster Than Native-Only</span></div>
            <div className="it"><b>4.8★</b><span>Average App Store Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Cross-Platform App Investment Plans"
        subtitle="Transparent packages for shared-codebase apps - from a lightweight MVP to a full enterprise build. Every project starts with a free discovery call."
        gray={false}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Launch on Every Platform?</h2>
              <p>Tell us about your app idea and we'll recommend the right cross-platform framework for your budget, timeline, and performance needs.</p>
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
            <p>We've shipped cross-platform apps for startups and enterprises across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
