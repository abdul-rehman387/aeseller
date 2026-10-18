import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Map, Scale, Search, Shield } from 'lucide-react'

const capabilities = [
  { ic: Search, h: 'AI Opportunity Assessment', p: 'Audit your data, workflows, and tooling to find the highest-ROI AI use cases for your business.' },
  { ic: Map, h: 'Roadmap & Prioritization', p: 'A phased implementation plan that sequences quick wins ahead of longer-term bets.' },
  { ic: Scale, h: 'Build vs. Buy Guidance', p: 'Honest recommendations on when to build custom models versus integrate an existing API.' },
  { ic: Shield, h: 'Responsible AI Governance', p: 'Bias testing, data privacy review, and compliance guardrails built into every recommendation.' },
]

const stack = [
  { h: 'OpenAI / Anthropic', p: 'Frontier model providers we evaluate against your specific use case and budget.', hot: true },
  { h: 'Azure AI / AWS Bedrock', p: 'Enterprise-grade managed AI platforms for teams standardizing on a single cloud.' },
  { h: 'LangChain', p: 'Orchestration frameworks we assess for build-vs-buy tradeoffs on agentic workflows.' },
  { h: 'MLflow', p: 'Experiment tracking and governance tooling for teams building custom models.' },
  { h: 'Vector Databases', p: 'Retrieval infrastructure evaluation for RAG and semantic search initiatives.' },
  { h: 'Responsible AI Frameworks', p: 'Bias, privacy, and compliance frameworks tailored to your industry and jurisdiction.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function AiConsulting() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">STRATEGY</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">AI Consulting</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>An AI Roadmap Grounded in ROI</p>
              <h1>AI Consulting Services</h1>
              <p className="lead">
                Before we write a line of code, we help you identify which AI use cases are actually
                worth building - and which aren't - so your investment lands on measurable business outcomes.
              </p>
              <div className="pillars">
                {['AI Readiness Assessments', 'Use-Case Prioritization', 'Build vs. Buy Guidance', 'Responsible AI Governance'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nAI Roadmap'} />
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
            <p className="eyebrow orange">What We Do</p>
            <h2>Strategy Before a Single Line of Code</h2>
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
            <h2>Platforms & Frameworks We Advise On</h2>
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
            <h2>Turning "We Need AI" Into a Funded Roadmap</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Enterprise / AI Strategy</p>
              <h3>From Vague Mandate to a Prioritized, Budgeted Plan</h3>
              <p>
                A client's leadership team knew they needed an AI strategy but had no way to prioritize
                between a dozen competing ideas. We ran a structured assessment and left them with a
                phased roadmap tied to real ROI estimates.
              </p>
              <ul>
                {['12 candidate use cases scored and ranked by ROI', 'Phased roadmap sequencing quick wins first', 'Build-vs-buy recommendation for every use case', 'First pilot funded and kicked off within 90 days'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80" alt="AI strategy consulting" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>40+</b><span>AI Roadmaps Delivered</span></div>
            <div className="it"><b>3-5</b><span>Use Cases Prioritized (avg.)</span></div>
            <div className="it"><b>90</b><span>Days to First Pilot</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="AI Consulting Investment Plans"
        subtitle="Transparent packages for readiness assessments, roadmap workshops, and ongoing advisory. Every engagement starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Not Sure Where to Start With AI?</h2>
              <p>Tell us where you're stuck and we'll help you find the use cases worth actually funding.</p>
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
            <p>We've advised organizations on AI strategy across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
