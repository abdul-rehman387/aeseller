import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Bell, CreditCard, Layers, MapPin, Rocket, ShieldCheck, Smartphone, Sparkles } from 'lucide-react'

const capabilities = [
  { ic: Smartphone, h: 'Native Android Apps', p: 'Kotlin and Jetpack Compose apps that follow Material Design and run smoothly on thousands of devices.' },
  { ic: Layers, h: 'Tablets, Foldables & Wear OS', p: 'Adaptive layouts for large screens and foldables, plus Wear OS companion apps.' },
  { ic: MapPin, h: 'Enterprise & Field Apps', p: 'Offline-first apps for field teams with MDM support, barcode scanning, and GPS tracking.' },
  { ic: Sparkles, h: 'AI-Powered Android Features', p: 'ML Kit, on-device models, and LLM-backed assistants built right into your app.' },
]

const features = [
  { ic: CreditCard, h: 'Google Play Billing', p: 'Subscriptions, in-app products, and Google Pay checkout.' },
  { ic: Bell, h: 'Firebase Cloud Messaging', p: 'Targeted push notifications with deep links and analytics.' },
  { ic: ShieldCheck, h: 'Biometric & Secure Storage', p: 'Fingerprint / face unlock, encrypted storage, and Play Integrity checks.' },
  { ic: Rocket, h: 'Google Play Launch', p: 'Internal testing tracks, staged rollouts, and store listing setup.' },
]

const stack = [
  { h: 'Kotlin & Jetpack Compose', p: 'Modern, declarative Android UI with concise, null-safe Kotlin code.', hot: true },
  { h: 'Android Jetpack', p: 'Room, WorkManager, Navigation, and ViewModel for robust app architecture.' },
  { h: 'Coroutines & Flow', p: 'Asynchronous, reactive data handling that keeps the UI responsive.' },
  { h: 'Hilt & Retrofit', p: 'Dependency injection and type-safe networking for clean, testable code.' },
  { h: 'Firebase & Custom APIs', p: 'Authentication, analytics, Crashlytics, and your own back-end services.' },
  { h: 'Gradle & GitHub Actions', p: 'Automated builds, tests, and Google Play releases via CI/CD.' },
]

const process = [
  { n: '01', h: 'Discovery & Scoping', p: 'Define users, target devices, core features, and monetization.' },
  { n: '02', h: 'UI/UX Design', p: 'Material Design prototypes tested on real screen sizes.' },
  { n: '03', h: 'Development & QA', p: 'Two-week sprints with internal-track builds and multi-device testing.' },
  { n: '04', h: 'Launch & Support', p: 'Staged Google Play rollout, monitoring, and ongoing Android updates.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function AndroidAppDevelopment() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">ANDROID</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/mobile-app-development">Mobile App Development</Link>
                <span className="sep">/</span>
                <span className="cur">Android App Development</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Native Apps for Every Android Device</p>
              <h1>Android App Development Services</h1>
              <p className="lead">
                We build native Android apps in Kotlin and Jetpack Compose - fast, secure, and tested across the
                devices your users actually own - and take them all the way to a successful Google Play launch.
              </p>
              <div className="pillars">
                {['Kotlin & Jetpack Compose', 'Phones, Tablets & Foldables', 'Google Play Billing', 'Google Play Launch'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Build Your\nAndroid App'} />
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
            <h2>Android Apps for Every Screen and Use Case</h2>
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
            <h2 style={{ color: '#fff' }}>Everything Your Android App Needs to Launch</h2>
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
            <h2>Android Technologies We Use</h2>
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
            <h2>From Idea to Google Play</h2>
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
              <p className="ch">Example Build / Field Operations App</p>
              <h3>Offline-First Android App for Field Teams</h3>
              <p>
                A typical engagement: a Kotlin app that lets field staff capture jobs, photos, and signatures
                with no signal, then syncs automatically when back online - deployed to company devices through
                MDM and to customers through Google Play.
              </p>
              <ul>
                {['Offline data capture with background sync', 'Barcode scanning, GPS, and photo uploads', 'Role-based access with biometric login', 'Staged Google Play and MDM rollout'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Our Work →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80" alt="Android app" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>6-12</b><span>Weeks to MVP (typical)</span></div>
            <div className="it"><b>2 Wk</b><span>Sprint & Test-Build Cycle</span></div>
            <div className="it"><b>100%</b><span>Source Code Ownership</span></div>
            <div className="it"><b>24/7</b><span>Crash Monitoring</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Android App Development Plans"
        subtitle="From a focused Android MVP to a full enterprise deployment. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Launch on Google Play?</h2>
              <p>Tell us about your app idea and we'll map out features, timeline, and cost for your Android build.</p>
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
