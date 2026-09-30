import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Bell, CreditCard, Rocket, ShieldCheck, Smartphone, Sparkles, Tablet, Watch } from 'lucide-react'

const capabilities = [
  { ic: Smartphone, h: 'Native iPhone Apps', p: 'Swift and SwiftUI apps that feel at home on iOS - fast, fluid, and built to Apple\'s Human Interface Guidelines.' },
  { ic: Tablet, h: 'iPad & Mac Catalyst', p: 'Adaptive layouts for iPad multitasking and Mac Catalyst so one codebase reaches every Apple screen.' },
  { ic: Watch, h: 'Apple Watch & Widgets', p: 'watchOS companions, Home Screen widgets, and Live Activities that keep users engaged at a glance.' },
  { ic: Sparkles, h: 'AI-Powered iOS Features', p: 'On-device Core ML, Vision, and LLM-backed assistants that make your app smarter without slowing it down.' },
]

const features = [
  { ic: CreditCard, h: 'Apple Pay & In-App Purchases', p: 'StoreKit 2 subscriptions, one-time purchases, and Apple Pay checkout.' },
  { ic: Bell, h: 'Push Notifications', p: 'APNs messaging with segmentation, deep links, and rich media.' },
  { ic: ShieldCheck, h: 'Face ID & Keychain Security', p: 'Biometric login, Keychain storage, and App Transport Security by default.' },
  { ic: Rocket, h: 'App Store Launch', p: 'TestFlight betas, App Store Connect setup, and review-ready submissions.' },
]

const stack = [
  { h: 'Swift & SwiftUI', p: 'Modern, declarative UI and type-safe code for maintainable native iOS apps.', hot: true },
  { h: 'UIKit', p: 'For complex custom interfaces and extending existing iOS codebases.' },
  { h: 'Core Data & SwiftData', p: 'Offline-first local storage with seamless iCloud sync.' },
  { h: 'Combine & Async/Await', p: 'Reactive, concurrent networking that keeps the UI smooth.' },
  { h: 'Firebase & Custom APIs', p: 'Authentication, analytics, crash reporting, and your own back-end services.' },
  { h: 'Xcode Cloud & Fastlane', p: 'Automated builds, tests, and TestFlight / App Store releases.' },
]

const process = [
  { n: '01', h: 'Discovery & Scoping', p: 'Define users, core features, and the App Store monetization model.' },
  { n: '02', h: 'UI/UX Design', p: 'Interactive prototypes following Apple\'s Human Interface Guidelines.' },
  { n: '03', h: 'Development & QA', p: 'Two-week sprints with TestFlight builds you can test on your own device.' },
  { n: '04', h: 'Launch & Support', p: 'App Store submission, release monitoring, and ongoing iOS updates.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function IosAppDevelopment() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">iOS APPS</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/mobile-app-development">Mobile App Development</Link>
                <span className="sep">/</span>
                <span className="cur">iOS App Development</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Native Apps for iPhone & iPad</p>
              <h1>iOS App Development Services</h1>
              <p className="lead">
                We design and build native iOS apps in Swift and SwiftUI - polished, secure, and ready for the
                App Store - for startups launching their first product and businesses extending to Apple devices.
              </p>
              <div className="pillars">
                {['Swift & SwiftUI', 'iPhone, iPad & Apple Watch', 'Apple Pay & Subscriptions', 'App Store Submission'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Build Your\niOS App'} />
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
            <h2>Native Experiences Across the Apple Ecosystem</h2>
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

      <section className="sec" style={{ background: 'var(--navy)', color: '#fff' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ color: 'var(--orange)' }}>Built-In Features</p>
            <h2 style={{ color: '#fff' }}>Everything Your iOS App Needs to Launch</h2>
          </div>
          <div className="eng-grid eng-4">
            {features.map(f => (
              <div key={f.h} className="eng">
                <div className="ic"><f.ic size={22} strokeWidth={1.75} /></div>
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="tech-sec">
            <span className="ghost">STACK</span>
            <h2>iOS Technologies We Use</h2>
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
            <p className="eyebrow orange">How We Work</p>
            <h2>From Idea to the App Store</h2>
          </div>
          <div className="icards">
            {process.map(s => (
              <div key={s.n} className="icard">
                <div className="ic step-num">{s.n}</div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="pf-case">
            <div>
              <p className="ch">Example Build / Consumer iOS App</p>
              <h3>Subscription iPhone App with Apple Pay & Widgets</h3>
              <p>
                A typical engagement: a SwiftUI app with Sign in with Apple, StoreKit 2 subscriptions, push
                notifications, and a Home Screen widget - taken from prototype through TestFlight to an approved
                App Store release.
              </p>
              <ul>
                {['SwiftUI interface built to Apple\'s design guidelines', 'StoreKit 2 subscriptions and Apple Pay', 'Widgets and push notifications for retention', 'TestFlight beta and App Store submission handled'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Our Work →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80" alt="iPhone app" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>6-12</b><span>Weeks to MVP (typical)</span></div>
            <div className="it"><b>2 Wk</b><span>Sprint & TestFlight Cycle</span></div>
            <div className="it"><b>100%</b><span>Source Code Ownership</span></div>
            <div className="it"><b>24/7</b><span>Crash Monitoring</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="iOS App Development Plans"
        subtitle="From a focused iPhone MVP to a full Apple-ecosystem product. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Launch on the App Store?</h2>
              <p>Tell us about your app idea and we'll map out features, timeline, and cost for your iOS build.</p>
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
            <p>We've built apps for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
