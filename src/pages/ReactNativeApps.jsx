import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Bell, Camera, Compass, WifiOff } from 'lucide-react'

const capabilities = [
  { ic: Compass, h: 'Native Navigation', p: 'Smooth, platform-correct navigation and gestures using React Navigation and native transitions.' },
  { ic: Bell, h: 'Push Notifications', p: 'Real-time engagement via Firebase Cloud Messaging and Apple Push Notification service.' },
  { ic: WifiOff, h: 'Offline-First Storage', p: 'Local persistence and background sync so your app works reliably with zero connectivity.' },
  { ic: Camera, h: 'Native Device APIs', p: 'Camera, biometrics, geolocation, and Bluetooth access through native modules when JS isn\'t enough.' },
]

const stack = [
  { h: 'React Native', p: 'The core framework - JavaScript and React rendering to real native UI components.', hot: true },
  { h: 'Expo', p: 'Managed workflow for faster builds, OTA updates, and simplified native module access.' },
  { h: 'TypeScript', p: 'Type-safe app logic that catches bugs before they ever reach a device.' },
  { h: 'Redux / Zustand', p: 'Predictable state management for apps with complex, shared application state.' },
  { h: 'Firebase', p: 'Auth, real-time database, push notifications, and analytics out of the box.' },
  { h: 'Native Modules', p: 'Custom Swift/Kotlin bridges when a feature needs to go beyond JavaScript.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function ReactNativeApps() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">REACT NATIVE</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">React Native Apps</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>JavaScript-Powered Native Apps</p>
              <h1>React Native App Development Services</h1>
              <p className="lead">
                One JavaScript codebase, real native UI on both iOS and Android. Our React Native
                engineers ship apps that feel indistinguishable from fully native builds.
              </p>
              <div className="pillars">
                {['Single JS Codebase', 'Native Modules & APIs', 'Hot-Reload Dev Speed', 'App Store Ready'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Start Your\nReact Native App'} />
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
            <h2>React Native Capabilities</h2>
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
            <h2>Our React Native Stack</h2>
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
            <h2>Healthcare-Grade React Native, Shipped Fast</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Healthcare / Consumer</p>
              <h3>Tamreeni - HIPAA-Compliant Telehealth App</h3>
              <p>
                A React Native patient management and telemedicine app built for a healthcare platform,
                handling HIPAA-sensitive data with a single codebase across iOS and Android.
              </p>
              <ul>
                {['HIPAA-compliant data handling', '10x projected load handled at launch', 'Shipped on time with a single codebase', 'Native camera & biometric login support'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?w=700&q=80" alt="React Native app development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>120+</b><span>React Native Apps Shipped</span></div>
            <div className="it"><b>95%</b><span>Code Shared Across Platforms</span></div>
            <div className="it"><b>3-4mo</b><span>Typical MVP Timeline</span></div>
            <div className="it"><b>4.8★</b><span>Average App Store Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="React Native App Investment Plans"
        subtitle="Transparent packages for React Native builds - from a lightweight MVP to a full enterprise app. Every project starts with a free discovery call."
        gray={false}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Build Your React Native App?</h2>
              <p>Let's scope your app, pick the right native modules, and map a path to launch on both app stores.</p>
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
            <p>We've shipped React Native apps for startups and enterprises across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
