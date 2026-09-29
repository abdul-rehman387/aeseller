import { Link } from 'react-router-dom'
import { ArrowRight, Bot, ChartLine, MapPin, MessageSquare, Target, Workflow } from 'lucide-react'
import { CONTACT_EMAIL, INFO_EMAIL } from '../data/contact'

const offerings = [
  { ic: MessageSquare, h: 'Telegram & Discord Bots', p: 'Custom bots that moderate, engage, and automate your community.', href: '/telegram-discord-bots' },
  { ic: ChartLine, h: 'Crypto Trading Tools', p: 'Reliable trading bots with backtesting and built-in risk controls.', href: '/crypto-trading-bots' },
  { ic: Workflow, h: 'Workflow Automation', p: 'Complete automation systems that cut out repetitive tasks.', href: '/workflow-automation' },
  { ic: Bot, h: 'Custom AI Agents', p: 'AI agents and chatbots trained on how your business actually works.', href: '/ai-agents-chatbots' },
]

const offices = [
  { h: 'Karachi, Pakistan', p: 'Shahrah-e-Faisal, Karachi' },
  { h: 'Coquitlam, Canada', p: '1462 Moore Pl, Coquitlam, BC V3E 3B9' },
]

export default function About() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">ABOUT US</span>
          <div className="intro-grid">
            <div className="about-body">
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span className="cur">About Us</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>About AE Seller</p>
              <h1>Building the Tools That Drive Your Business Forward</h1>
              <p>
                Welcome to AE Seller. We build the software, bots, and automations that help businesses run
                smoother and grow faster. With a strong background in software development and e-commerce, we
                understand the real-world challenges companies face every day - and we know how to fix them.
              </p>
              <p>
                Whether you need a custom Telegram or Discord bot, a reliable crypto trading tool, or a complete
                workflow automation system to cut out repetitive tasks, our team is here to build it. We don't
                just hand over a piece of software; we work closely with you to figure out exactly what your
                business needs. With our team spread across our offices in Karachi and Coquitlam, we have the
                hands-on experience and technical skills to turn your biggest bottlenecks into automated systems
                that actually work.
              </p>
            </div>
            <div className="mission-card">
              <div className="ic"><Target size={24} strokeWidth={1.75} /></div>
              <h3>Our Mission</h3>
              <blockquote>
                To make advanced technology - from custom agents to Web3 tools - practical, accessible, and easy
                for your team to use every single day.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">What We Build</p>
            <h2>Software, Bots & Automation</h2>
          </div>
          <div className="icards">
            {offerings.map(o => (
              <Link key={o.h} to={o.href} className="icard">
                <div className="ic"><o.ic size={24} strokeWidth={1.75} /></div>
                <h3>{o.h}</h3>
                <p>{o.p}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Where We Work</p>
            <h2>Our Offices</h2>
          </div>
          <div className="office-grid">
            {offices.map(o => (
              <div key={o.h} className="office">
                <span className="ic"><MapPin size={22} strokeWidth={1.75} /></span>
                <div>
                  <h3>{o.h}</h3>
                  <p>{o.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Work With Us</p>
              <h2>What's Slowing Your Business Down?</h2>
              <p>
                Tell us about your biggest bottleneck - reach us at {INFO_EMAIL} or {CONTACT_EMAIL} - and we'll
                show you how to automate it.
              </p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>
                Contact Us <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="AE Seller team" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
