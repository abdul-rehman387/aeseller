import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, FileText, Repeat, Sparkles, Webhook } from 'lucide-react'

const capabilities = [
  { ic: Repeat, h: 'Process Automation', p: 'Map your repetitive tasks and replace them with reliable, event-driven workflows that run on their own.' },
  { ic: Sparkles, h: 'AI-Powered Steps', p: 'Add LLM steps that classify emails, extract data, draft replies, and summarize documents mid-workflow.' },
  { ic: Webhook, h: 'App & API Integration', p: 'Connect CRMs, spreadsheets, storefronts, payment gateways, and internal systems into one pipeline.' },
  { ic: FileText, h: 'Reporting & Alerts', p: 'Scheduled reports, KPI digests, and real-time Slack or email alerts when something needs attention.' },
]

const stack = [
  { h: 'n8n', p: 'Self-hostable workflow automation with full control over data and execution.', hot: true },
  { h: 'Make / Zapier', p: 'No-code automation platforms for fast wins your team can maintain.' },
  { h: 'Python & Node.js', p: 'Custom scripts and microservices when off-the-shelf connectors fall short.' },
  { h: 'Google Workspace / Microsoft 365', p: 'Sheets, Gmail, Outlook, and SharePoint automation for everyday operations.' },
  { h: 'Webhooks & Queues', p: 'Event-driven architecture with retries so no task silently gets dropped.' },
  { h: 'LLM APIs', p: 'OpenAI, Anthropic, and Gemini steps for document understanding and content generation.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function WorkflowAutomation() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">AUTOMATION</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Workflow Automation</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Stop Doing It By Hand</p>
              <h1>AI Workflow Automation</h1>
              <p className="lead">
                We connect your tools and automate the busywork - lead routing, order processing, reporting,
                and data entry - with workflows that combine reliable integrations and AI decision-making.
              </p>
              <div className="pillars">
                {['n8n / Make / Zapier', 'AI Document Processing', 'CRM & E-Commerce Sync', 'Automated Reporting'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Automate Your\nOperations'} />
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
            <p className="eyebrow orange">What We Automate</p>
            <h2>Hours Back in Your Team's Week</h2>
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
            <span className="ghost">TOOLS</span>
            <h2>Platforms We Automate With</h2>
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
            <h2>From Inbox Chaos to a Hands-Free Pipeline</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Operations / Lead Management</p>
              <h3>AI Lead Intake, Enrichment & Routing</h3>
              <p>
                A typical engagement: inbound emails and form fills are read by an AI step, enriched with
                company data, scored, written into the CRM, and routed to the right rep - with a daily summary
                posted to Slack.
              </p>
              <ul>
                {['AI classification of every inbound message', 'Automatic CRM record creation and updates', 'Lead scoring and round-robin assignment', 'Error handling with retries and alerts'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Our Work →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80" alt="Workflow automation dashboard" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>1-4</b><span>Weeks per Workflow (typical)</span></div>
            <div className="it"><b>24/7</b><span>Unattended Execution</span></div>
            <div className="it"><b>500+</b><span>Connectable Apps</span></div>
            <div className="it"><b>100%</b><span>Documented Handover</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Workflow Automation Plans"
        subtitle="Start with one high-impact workflow or automate an entire department. Every engagement starts with a free process audit."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>What Would You Automate First?</h2>
              <p>Walk us through your most repetitive process and we'll map out exactly how to automate it.</p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>Book a Free Process Audit</Link>
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
            <p>We've automated operations for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
