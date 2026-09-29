import { useState } from 'react'
import { Link } from 'react-router-dom'
import digitalServicesImg from '../assets/Digital-Services.webp'
import corporateImg from '../assets/Corporate.jpg'
import ecommerceImg from '../assets/eCommerce.jpg'
import educationImg from '../assets/Education.jpg'
import logisticsImg from '../assets/Logistics.jpg'
import saasImg from '../assets/Saas.jpg'
import cloudImg from '../assets/Cloud.jpg'
import { CONTACT_EMAIL, INFO_EMAIL } from '../data/contact'
import { ArrowRight, Bot, ChartLine, CheckCircle2, Mail, MapPin, MessageSquare, Phone, RefreshCw, Target, Timer, Workflow } from 'lucide-react'

const services = [
  { title: 'AI Agents & Chatbots', img: '1677442136019-21780ecad995', href: '/ai-agents-chatbots' },
  { title: 'Workflow Automation', img: '1551288049-bebda4e38f71', href: '/workflow-automation' },
  { title: 'Telegram / Discord Bots', img: '1611926653458-09294b3142bf', href: '/telegram-discord-bots' },
  { title: 'Crypto Trading Bots', img: '1642790106117-e829e14a795f', href: '/crypto-trading-bots' },
  { title: 'Mining & Node Tools', img: '1558494949-ef010cbdcc31', href: '/mining-node-tools' },
  { title: 'Web Development', img: '1542831371-29b0f74f9713', href: '/react-nextjs-development' },
  { title: 'Mobile App Development', img: '1519389950473-47ba0277781c', href: '/mobile-app-development' },
  { title: 'Custom Software Dev', img: '1515879218367-8466d910aaa4', href: '/enterprise-software' },
]

const cases = [
  {
    label: 'Digital Services',
    h: 'Full-Spectrum Digital Services, One Partner',
    desc: 'From web and mobile platforms to AI-powered automation - AE Seller delivers end-to-end digital services under one roof, so you never have to stitch together multiple vendors to ship a product.',
    impact: ['40+ digital services under one roof', '15+ industries served worldwide', 'Dedicated senior engineers on every build'],
    img: digitalServicesImg,
    tag: 'Digital Services / Full-Stack',
  },
  {
    label: 'Rise Up Kings',
    h: 'Multiplayer Sports Gaming Platform',
    desc: 'A competitive fantasy-sports and gaming ecosystem with real-time matchmaking, live leaderboards, and in-app purchases across iOS and Android.',
    impact: ['500k+ downloads in first 90 days', 'Real-time play for 50k concurrent users', '4.8★ App Store rating'],
    img: 'https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=700&q=80',
    tag: 'Gaming / Consumer',
  },
]

const testimonials = [
  {
    stars: '★★★★★',
    quote: 'AE Seller\'s team felt like an extension of ours. They delivered a production-grade pipeline app on time, under budget, and with zero surprises.',
    name: 'Bob Gammon', role: 'VP Engineering, Kinder Morgan',
    face: '1676989880361-091e12efc056',
  },
  {
    stars: '★★★★★',
    quote: 'The mobile app they built for our healthcare platform exceeded every benchmark. Their UI/UX sensibility is top-tier.',
    name: 'Anna Palko', role: 'CTO, Tamreeni Health',
    face: '1604904612715-47bf9d9bc670',
  },
  {
    stars: '★★★★★',
    quote: 'From kickoff to launch, communication was crystal clear. They caught edge cases our own team had missed and shipped a more resilient product for it.',
    name: 'Marcus Webb', role: 'Founder, Rise Up Kings',
    face: '1519085360753-af0119f7cbe7',
  },
  {
    stars: '★★★★★',
    quote: 'We evaluated four agencies before AE Seller. None came close on technical depth or how quickly they got up to speed on our domain.',
    name: 'Farah Al-Sayed', role: 'Head of Digital, Saudi Bell',
    face: '1573497019940-1c28c88b4f3e',
  },
]

const industries = [
  { h: 'Corporate', p: 'Business websites, internal tools, and workflow platforms built for scale and reliability.', img: corporateImg },
  { h: 'Ecommerce', p: 'Storefronts, checkout flows, and inventory systems engineered to convert and grow.', img: ecommerceImg },
  { h: 'Education', p: 'E-learning portals, LMS platforms, and AI tutoring systems for modern classrooms.', img: educationImg },
  { h: 'Logistics', p: 'Fleet tracking, warehouse management, and supply chain visibility in real time.', img: logisticsImg },
  { h: 'SaaS', p: 'Multi-tenant platforms, subscription billing, and product-led growth infrastructure.', img: saasImg },
  { h: 'Cloud', p: 'Cloud migration, DevOps automation, and scalable infrastructure across AWS, Azure & GCP.', img: cloudImg },
]

const engagements = [
  { ic: Target, h: 'Fixed-Price Project', p: 'Clear scope, defined deliverables, fixed cost. Perfect for well-defined projects with predictable requirements.' },
  { ic: RefreshCw, h: 'Dedicated Team', p: 'Scale up or down seamlessly with a fully managed dedicated development team integrated into your workflows.' },
  { ic: Timer, h: 'Time & Material', p: 'Maximum flexibility for evolving requirements. Pay only for the time and resources actually used.' },
]

const awards = ['Clutch Top Dev', 'Inc. 5000', 'GoodFirms Leader', 'Deloitte Fast 50', 'G2 Top Rated', 'ISO Certified']
const partners = ['Microsoft', 'AWS', 'Google Cloud', 'Oracle', 'Salesforce', 'HubSpot']

const blogs = [
  { h: 'How AI is Transforming Enterprise Software in 2026', p: 'Explore the top AI-driven patterns reshaping how companies build and deploy custom software.', img: '1674027444485-cec3da58eef4' },
  { h: 'React Native vs Flutter: Which Should You Pick?', p: 'A head-to-head comparison to help you choose the right cross-platform framework for your app.', img: '1480694313141-fce5e697ee25' },
  { h: 'The Definitive Guide to Hiring a Software Development Partner', p: '10 critical questions every CTO should ask before signing a software outsourcing contract.', img: '1607799279861-4dd421887fb3' },
]

const aiFeats = [
  { ic: Bot, label: 'AI Agents' },
  { ic: Workflow, label: 'Workflow Automation' },
  { ic: MessageSquare, label: 'Community Bots' },
  { ic: ChartLine, label: 'Trading Bots' },
]

export default function Home() {
  const [caseTab, setCaseTab] = useState(0)
  const [insTab, setInsTab] = useState('All')
  const [formSent, setFormSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => { e.preventDefault(); setFormSent(true) }

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-ov" />
        <div className="wrap">
          <p className="eyebrow orange">AI & Web3 Automation Agency</p>
          <h1>AI Agents, Bots & Automation That Work for You</h1>
          <p className="hero-lead">AE Seller builds custom AI agents, Telegram and Discord bots, workflow automations, and Web3 tooling that run your operations around the clock - alongside the web and mobile products that power them.</p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link to="/services" className="btn">Explore Services</Link>
            <Link to="/portfolio" className="btn btn-ghost">View Portfolio</Link>
          </div>
          <div className="featured">
            <span className="lbl">Trusted by</span>
            <div className="logos">
              <span>KINDER MORGAN</span>
              <span>UTMB</span>
              <span>MOBIUS</span>
              <span>SAUDI BELL</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">What We Build</p>
            <h2>AI, Automation & Web3 Services</h2>
            <p>From autonomous AI agents to crypto trading bots - plus the web and mobile platforms around them - one team covers the full stack.</p>
          </div>
          <div className="svc-grid">
            {services.map(s => (
              <Link key={s.title} to={s.href} className="svc">
                <img src={`https://images.unsplash.com/photo-${s.img}?w=600&q=80`} alt={s.title} loading="lazy" />
                <div className="ov" />
                <h3>{s.title}</h3>
                <span className="arr"><ArrowRight size={16} strokeWidth={2} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Success Stories</p>
            <h2>Projects That Made a Difference</h2>
          </div>
          <div className="tabs">
            {cases.map((c, i) => (
              <button key={c.label} className={`tab${caseTab === i ? ' active' : ''}`} onClick={() => setCaseTab(i)}>
                {c.label}
              </button>
            ))}
          </div>
          {cases.map((c, i) => caseTab === i && (
            <div key={c.label} className="case">
              <div>
                <p style={{ color: 'var(--orange)', fontFamily: 'Poppins', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>{c.tag}</p>
                <h3>{c.h}</h3>
                <p>{c.desc}</p>
                <h4>Key Outcomes</h4>
                <ul className="impact">
                  {c.impact.map(it => <li key={it}><span>{it}</span></li>)}
                </ul>
                <Link to="/portfolio" className="btn">View Full Case Study</Link>
              </div>
              <div className="case-img">
                <img src={c.img} alt={c.h} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="sec clients">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ color: 'var(--orange)' }}>Client Love</p>
            <h2>What Our Clients Say</h2>
            <p>Don't take our word for it - hear directly from the teams we've partnered with.</p>
          </div>
          <div className="tst-row">
            {testimonials.map(t => (
              <div key={t.name} className="tst-card">
                <div className="stars">{t.stars}</div>
                <p className="quote">"{t.quote}"</p>
                <div className="who">
                  <img src={`https://images.unsplash.com/photo-${t.face}?w=80&q=80`} alt={t.name} loading="lazy" />
                  <div>
                    <b>{t.name}</b>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI SOLUTIONS */}
      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">AI & Web3 Automation</p>
            <h2>Automation That Runs Your Business 24/7</h2>
          </div>
          <div className="ai-wrap">
            <div className="ai-side">
              {[
                { h: 'AI Agents & Chatbots', p: 'Agents and assistants trained on your business that answer, qualify, and act.', href: '/ai-agents-chatbots' },
                { h: 'Workflow Automation', p: 'n8n, Make, and custom pipelines with AI steps that remove busywork.', href: '/workflow-automation' },
                { h: 'Telegram / Discord Bots', p: 'Moderation, alerts, AI assistants, and paid access for your community.', href: '/telegram-discord-bots' },
                { h: 'Crypto Trading Bots', p: 'Your strategy executed 24/7 with backtesting and hard risk limits.', href: '/crypto-trading-bots' },
                { h: 'Mining & Node Tools', p: 'Node deployment, validator monitoring, and mining fleet dashboards.', href: '/mining-node-tools' },
              ].map((it, i) => (
                <Link key={it.h} to={it.href} className={`item${i === 0 ? ' active' : ''}`}>
                  <h4>{it.h}</h4>
                  <p>{it.p}</p>
                </Link>
              ))}
              <div className="thumb">
                <img src="https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?w=400&q=80" alt="AI" loading="lazy" />
              </div>
            </div>
            <div className="ai-main">
              <h3>Put AI and Automation to Work</h3>
              <p>We design agents, bots, and automated workflows around your real processes - connected to your tools, monitored in production, and fully owned by you.</p>
              <div className="ai-feats">
                {aiFeats.map(f => (
                  <div key={f.label} className="ai-feat">
                    <div className="ic"><f.ic size={24} strokeWidth={1.75} /></div>
                    <p>{f.label}</p>
                  </div>
                ))}
              </div>
              <p className="ai-prod" style={{ color: '#fff' }}>Trusted by 50+ enterprises</p>
              <span className="rev-badge">4.9 <span className="ai">/ 5.0 on Clutch</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="sec">
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Ready to Start?</p>
              <h2>Turn Your Idea Into a<br />Market-Ready Product</h2>
              <p>From concept to launch in as few as 12 weeks. Our full-stack team handles design, development, QA, and deployment.</p>
              <Link to="/services" className="btn btn-orange">Start Your Project</Link>
            </div>
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Team collaboration" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="sec" style={{ background: 'var(--navy)', color: '#fff' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ color: 'var(--orange)' }}>Industry Expertise</p>
            <h2 style={{ color: '#fff' }}>Verticals We Know Inside Out</h2>
          </div>
          <div className="ind-grid">
            {industries.map(ind => (
              <div key={ind.h} className="ind">
                <img src={ind.img} alt={ind.h} loading="lazy" />
                <div className="ov" />
                <h3>{ind.h}</h3>
                <p>{ind.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">How We Work</p>
            <h2>Flexible Engagement Models</h2>
            <p>Choose the partnership model that fits your project, timeline, and budget - or mix and match as you scale.</p>
          </div>
          <div className="eng-grid">
            {engagements.map(e => (
              <div key={e.h} className="eng">
                <div className="ic"><e.ic size={24} strokeWidth={1.75} /></div>
                <h3>{e.h}</h3>
                <p>{e.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Recognition</p>
            <h2>Awards & Certifications</h2>
          </div>
          <div className="awards">
            {awards.map(a => <div key={a} className="award"><span>{a}</span></div>)}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="sec partners">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ color: 'var(--orange)' }}>Technology Partners</p>
            <h2>We Build on Best-in-Class Platforms</h2>
          </div>
          <div className="plogos">
            {partners.map(p => <span key={p} className="pl">{p}</span>)}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Blog & Insights</p>
            <h2>Ideas Worth Reading</h2>
          </div>
          <div className="ins-tabs">
            {['All','Mobile','AI','Web','Cloud'].map(t => (
              <button key={t} className={`ins-tab${insTab === t ? ' active' : ''}`} onClick={() => setInsTab(t)}>{t}</button>
            ))}
          </div>
          <div className="blog-grid">
            {blogs.map(b => (
              <div key={b.h} className="blog">
                <div className="img">
                  <img src={`https://images.unsplash.com/photo-${b.img}?w=600&q=80`} alt={b.h} loading="lazy" />
                </div>
                <div className="bd">
                  <h3>{b.h}</h3>
                  <p>{b.p}</p>
                  <span className="more">Read Article →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec">
        <div className="wrap">
          <div className="contact-grid">
            <div>
              <p className="eyebrow orange" style={{ marginBottom: 12 }}>Get In Touch</p>
              <h2>Tell Us About Your Project</h2>
              <p className="sub">Whether you have a rough idea or a detailed spec - our team will help you clarify scope, estimate cost, and chart a path to launch.</p>
              <h4>Trusted by industry leaders</h4>
              <div className="rev-list">
                <div className="rev-item">
                  <span className="badge">4.8</span>
                  <div><b>Clutch Rating</b><span>50+ reviews</span></div>
                </div>
                <div className="rev-item">
                  <span className="badge">G2</span>
                  <div><b>G2 Top Rated</b><span>2024 & 2025</span></div>
                </div>
              </div>
              <div className="cinfo">
                <div><span className="ic"><Mail size={18} strokeWidth={1.75} /></span> <a href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</a></div>
                <div><span className="ic"><Mail size={18} strokeWidth={1.75} /></span> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
                <div><span className="ic"><Phone size={18} strokeWidth={1.75} /></span> +1 (832) 555-0190</div>
                <div><span className="ic"><MapPin size={18} strokeWidth={1.75} /></span> Coquitlam, Canada - Karachi, Pakistan</div>
              </div>
            </div>
            <div>
              {formSent ? (
                <div className="form-card">
                  <p className="success-msg" style={{ fontSize: 18, padding: '40px 0' }}><CheckCircle2 size={22} strokeWidth={1.75} /> Thanks! We'll reach out within 24 hours.</p>
                </div>
              ) : (
                <div className="form-card">
                  <h3>Start the Conversation</h3>
                  <form onSubmit={onSubmit}>
                    <div className="fld"><input name="name" value={form.name} onChange={onChange} placeholder="Your Name*" required /></div>
                    <div className="fld"><input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email Address*" required /></div>
                    <div className="fld"><input name="phone" value={form.phone} onChange={onChange} placeholder="Phone Number" /></div>
                    <div className="fld"><textarea name="message" value={form.message} onChange={onChange} placeholder="Describe your project…" rows={4} /></div>
                    <p className="agree">By submitting you agree to our <a href="#">Privacy Policy</a>.</p>
                    <div className="submit"><button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center' }}>Send Message →</button></div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
