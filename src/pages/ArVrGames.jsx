import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Glasses, Hand, Smartphone, Target } from 'lucide-react'

const capabilities = [
  { ic: Glasses, h: 'Immersive Gameplay Design', p: 'Mechanics designed around comfort, presence, and natural interaction, not retrofitted from flat-screen games.' },
  { ic: Hand, h: 'Hand & Controller Tracking', p: 'Precise, low-latency tracking that makes in-headset interaction feel natural.' },
  { ic: Smartphone, h: 'Mobile AR Experiences', p: 'ARKit and ARCore experiences that work reliably across a wide range of devices.' },
  { ic: Target, h: 'Performance Optimization', p: 'Frame rates tuned to headset-specific comfort thresholds to avoid motion sickness.' },
]

const stack = [
  { h: 'Unity XR Toolkit', p: 'Our core framework for building cross-headset VR and AR experiences.', hot: true },
  { h: 'Meta Quest SDK', p: 'Native integration for hand tracking, passthrough, and Quest-specific features.' },
  { h: 'ARKit / ARCore', p: 'Platform-native mobile AR for iOS and Android experiences.' },
  { h: 'OpenXR', p: 'Cross-headset compatibility so your experience isn\'t locked to a single device.' },
  { h: 'Vision Pro (visionOS)', p: 'Spatial computing experiences built for Apple\'s newest platform.' },
  { h: 'Photon Fusion', p: 'Low-latency networking for shared and multiplayer immersive experiences.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function ArVrGames() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">AR/VR</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">AR/VR Games</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Games Built for Immersion</p>
              <h1>AR/VR Game Development Services</h1>
              <p className="lead">
                We build AR and VR games and experiences for Quest, Vision Pro, and mobile AR - designed
                around comfort and presence, not just porting a flat-screen game into a headset.
              </p>
              <div className="pillars">
                {['Motion-Sickness-Aware Design', 'Hand & Controller Tracking', 'Cross-Headset Compatibility', 'Room-Scale & Seated Modes'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nAR/VR Game'} />
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
            <h2>Experiences Designed for Presence</h2>
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
            <h2>Our AR/VR Stack</h2>
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
            <h2>A VR Fitness Game That Hit 4.8★ on the Quest Store</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Gaming / VR</p>
              <h3>Designing Comfort-First Gameplay for a Room-Scale VR Title</h3>
              <p>
                We designed and built a VR fitness title with comfort-tuned locomotion and full hand
                tracking, avoiding the motion-sickness complaints that sink most VR launches.
              </p>
              <ul>
                {['4.8★ average rating across 2,000+ Quest Store reviews', 'Zero motion-sickness-related refund spikes post-launch', 'Full body and hand tracking across three headset generations', '90fps maintained in room-scale mode'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=700&q=80" alt="VR headset game development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>15+</b><span>AR/VR Titles Shipped</span></div>
            <div className="it"><b>4.8★</b><span>Avg. Store Rating</span></div>
            <div className="it"><b>90fps</b><span>Comfort Target Hit</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="AR/VR Game Investment Plans"
        subtitle="Transparent packages for prototypes, full immersive builds, and multi-headset support. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Building for VR or AR?</h2>
              <p>Tell us about your concept and target headsets and we'll map a build designed for comfort from day one.</p>
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
            <p>We've shipped AR/VR experiences for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
