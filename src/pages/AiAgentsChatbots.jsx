import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, BrainCircuit, Database, MessageSquare, Plug } from 'lucide-react'

const capabilities = [
  { ic: BrainCircuit, h: 'Autonomous AI Agents', p: 'Goal-driven agents that plan, call tools, and complete multi-step tasks - from lead research to ticket triage.' },
  { ic: MessageSquare, h: 'Customer-Facing Chatbots', p: 'On-brand assistants for your website, WhatsApp, and support desk that answer, qualify, and hand off to humans.' },
  { ic: Database, h: 'Knowledge-Base (RAG) Assistants', p: 'Chatbots grounded in your docs, SOPs, and product catalog so answers stay accurate and cite their sources.' },
  { ic: Plug, h: 'CRM & Tool Integrations', p: 'Agents that read and write to HubSpot, Salesforce, Shopify, Google Workspace, and your internal APIs.' },
]

const stack = [
  { h: 'OpenAI / Anthropic / Gemini', p: 'Frontier LLMs selected per use case for reasoning quality, latency, and cost.', hot: true },
  { h: 'LangChain / LangGraph', p: 'Orchestration frameworks for tool-calling, memory, and multi-agent workflows.' },
  { h: 'Vector Databases', p: 'Pinecone, pgvector, and Qdrant for fast, relevant retrieval over your private data.' },
  { h: 'Voice & Speech', p: 'Speech-to-text and text-to-speech pipelines for phone and voice-first assistants.' },
  { h: 'Guardrails & Evals', p: 'Prompt-injection defenses, output validation, and automated evaluation suites.' },
  { h: 'Observability', p: 'Conversation logging, cost tracking, and analytics dashboards for every agent.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function AiAgentsChatbots() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">AI AGENTS</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">AI Agents & Chatbots</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>AI That Actually Does the Work</p>
              <h1>Custom AI Agents & Chatbots</h1>
              <p className="lead">
                We design and deploy AI agents and chatbots trained on your business - answering customers,
                qualifying leads, and automating back-office tasks around the clock.
              </p>
              <div className="pillars">
                {['Autonomous Task Agents', 'Website & WhatsApp Chatbots', 'Knowledge-Base Assistants', 'CRM & API Integrations'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Build Your\nAI Agent'} />
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
            <h2>Agents Tailored to Your Workflows</h2>
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
            <h2>Models & Tools We Build With</h2>
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
            <h2>A Support Agent That Resolves, Not Just Replies</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">E-Commerce / Customer Support</p>
              <h3>AI Support Agent Connected to Orders, Returns & Helpdesk</h3>
              <p>
                A typical engagement: an AI agent grounded in the store's policies and product catalog that
                looks up orders, starts returns, and escalates edge cases to a human with full context attached.
              </p>
              <ul>
                {['Grounded answers from your own documentation', 'Live order lookups via Shopify / CRM APIs', 'Human handoff with conversation summary', 'Dashboard for resolution rate and cost per chat'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Our Work →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80" alt="AI agent" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>24/7</b><span>Always-On Coverage</span></div>
            <div className="it"><b>2-6</b><span>Weeks to Launch (typical)</span></div>
            <div className="it"><b>30+</b><span>Tool & API Integrations</span></div>
            <div className="it"><b>100%</b><span>Code & Prompt Ownership</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="AI Agent & Chatbot Plans"
        subtitle="From a single website chatbot to a fleet of autonomous agents. Every engagement starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Hire Your First AI Agent?</h2>
              <p>Tell us which task eats the most hours each week - we'll show you how an agent could take it over.</p>
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
            <p>We've shipped AI-powered products for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
