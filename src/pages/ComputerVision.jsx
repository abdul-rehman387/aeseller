import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Camera, Factory, FileText, Settings } from 'lucide-react'

const capabilities = [
  { ic: Camera, h: 'Object Detection & Tracking', p: 'Real-time detection and tracking tuned to your specific objects and environment.' },
  { ic: Factory, h: 'Automated Quality Control', p: 'Vision systems that catch defects on a production line faster and more consistently than manual inspection.' },
  { ic: FileText, h: 'Document & OCR Processing', p: 'Extract structured data from scanned documents, forms, and receipts automatically.' },
  { ic: Settings, h: 'Edge Deployment', p: 'Models optimized to run on-device for low-latency, offline-capable inference.' },
]

const stack = [
  { h: 'PyTorch / OpenCV', p: 'Our core framework pairing for training and real-time image processing.', hot: true },
  { h: 'YOLO', p: 'Real-time object detection tuned for speed without sacrificing accuracy.' },
  { h: 'TensorRT', p: 'Optimized inference for low-latency deployment on NVIDIA hardware.' },
  { h: 'NVIDIA Jetson', p: 'Edge devices for on-site vision processing without a round trip to the cloud.' },
  { h: 'AWS Rekognition', p: 'Managed vision APIs for teams that need fast, reliable common-case detection.' },
  { h: 'Google Vision API', p: 'Pretrained models for OCR, label detection, and content moderation at scale.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function ComputerVision() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">VISION</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Computer Vision</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Sight for Your Software</p>
              <h1>Computer Vision Development Services</h1>
              <p className="lead">
                We build computer vision systems that detect, classify, and track objects in real time -
                from quality control on a production line to automated document processing.
              </p>
              <div className="pillars">
                {['Real-Time Object Detection', 'Custom-Trained Vision Models', 'Edge & Cloud Deployment', '99%+ Accuracy on Trained Classes'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nVision System'} />
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
            <h2>Vision Systems That Run in Real Time</h2>
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
            <h2>Our Computer Vision Stack</h2>
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
            <h2>Cutting Defect Escape Rate by 80% on the Line</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Manufacturing / Computer Vision</p>
              <h3>Automated Inspection That Out-Performed Manual QC</h3>
              <p>
                We deployed a custom-trained vision model on the production line to catch defects in
                real time, running on edge hardware so inspection never depends on network latency.
              </p>
              <ul>
                {['80% fewer defects reaching the next stage', '99%+ detection accuracy on trained defect classes', 'Runs fully on-device, no cloud round trip', 'Inspection throughput matched line speed'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=700&q=80" alt="Computer vision system" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>20+</b><span>Vision Systems Deployed</span></div>
            <div className="it"><b>99%+</b><span>Detection Accuracy</span></div>
            <div className="it"><b>80%</b><span>Fewer Defect Escapes</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Computer Vision Investment Plans"
        subtitle="Transparent packages for detection pilots, production-line integration, and full edge deployment. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Give Your Software Sight?</h2>
              <p>Tell us what you need to detect, count, or inspect and we'll map a vision system that runs where you need it to.</p>
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
            <p>We've deployed computer vision systems for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
