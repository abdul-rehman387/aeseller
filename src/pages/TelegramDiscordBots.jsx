import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Bell, Bot, ShieldCheck, Users } from 'lucide-react'

const capabilities = [
  { ic: Users, h: 'Community Management', p: 'Onboarding flows, role assignment, verification gates, and auto-moderation for growing communities.' },
  { ic: Bot, h: 'AI-Powered Assistants', p: 'LLM bots that answer member questions, summarize channels, and support users in any language.' },
  { ic: Bell, h: 'Alerts & Notifications', p: 'Price alerts, on-chain events, order updates, and system monitoring pushed straight to chat.' },
  { ic: ShieldCheck, h: 'Payments & Access Control', p: 'Subscription-gated channels, token-gated roles, and in-chat payments via Stripe or crypto.' },
]

const stack = [
  { h: 'Telegram Bot API', p: 'Bots, inline keyboards, mini apps, and group management for Telegram communities.', hot: true },
  { h: 'Discord.js / discord.py', p: 'Slash commands, buttons, modals, and role automation for Discord servers.' },
  { h: 'Node.js & Python', p: 'Battle-tested runtimes for fast, reliable bot back-ends.' },
  { h: 'PostgreSQL / Redis', p: 'Persistent user data, rate limiting, and caching for high-traffic bots.' },
  { h: 'LLM APIs', p: 'OpenAI, Anthropic, and Gemini for conversational and moderation features.' },
  { h: 'Cloud Hosting', p: 'Dockerized deployments on AWS, GCP, or VPS with uptime monitoring.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function TelegramDiscordBots() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">BOTS</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Telegram / Discord Bots</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Automate Your Community</p>
              <h1>Telegram & Discord Bot Development</h1>
              <p className="lead">
                Custom bots that moderate, engage, and monetize your community - from AI assistants and
                verification flows to real-time alerts and subscription-gated access.
              </p>
              <div className="pillars">
                {['Moderation & Verification', 'AI Chat Assistants', 'Real-Time Alerts', 'Paid & Token-Gated Access'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Build Your\nCustom Bot'} />
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
            <h2>Bots That Keep Your Community Running</h2>
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
            <h2>Platforms & Tools We Use</h2>
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
            <p className="eyebrow orange">Example Build</p>
            <h2>One Bot, Two Platforms, Zero Manual Moderation</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Community / Membership</p>
              <h3>Subscription Community Bot for Telegram & Discord</h3>
              <p>
                A typical engagement: a shared back-end powering both a Telegram and a Discord bot that verifies
                new members, grants roles after payment, answers FAQs with AI, and removes access automatically
                when a subscription lapses.
              </p>
              <ul>
                {['Captcha and wallet / email verification', 'Stripe or crypto subscription gating', 'AI FAQ assistant trained on your docs', 'Admin dashboard with member analytics'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Our Work →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=700&q=80" alt="Community bot" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>2</b><span>Platforms, One Back-End</span></div>
            <div className="it"><b>1-4</b><span>Weeks to Launch (typical)</span></div>
            <div className="it"><b>24/7</b><span>Uptime Monitoring</span></div>
            <div className="it"><b>100%</b><span>Source Code Ownership</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Bot Development Plans"
        subtitle="From a single-purpose alert bot to a full community platform. Every engagement starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Have a Bot Idea?</h2>
              <p>Tell us what your community needs and we'll scope a bot that handles it for you.</p>
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
            <p>We've built software for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
