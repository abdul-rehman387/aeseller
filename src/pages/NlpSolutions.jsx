import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Globe, MessageSquare, Search, Tag } from 'lucide-react'

const capabilities = [
  { ic: MessageSquare, h: 'Conversational AI', p: 'Chatbots and virtual assistants built on LLMs, grounded in your own data via RAG.' },
  { ic: Tag, h: 'Text Classification & Extraction', p: 'Automatically tag, route, and extract structured data from unstructured text.' },
  { ic: Search, h: 'Semantic Search', p: 'Vector-based search that understands meaning, not just keyword matches.' },
  { ic: Globe, h: 'Multilingual Processing', p: 'NLP pipelines that work across languages, not just English.' },
]

const stack = [
  { h: 'OpenAI / Anthropic APIs', p: 'Frontier LLMs for reasoning, generation, and complex language tasks.', hot: true },
  { h: 'LangChain', p: 'Orchestration for multi-step, tool-using LLM applications.' },
  { h: 'Vector Databases', p: 'Pinecone and Weaviate for fast, scalable semantic search and retrieval.' },
  { h: 'Hugging Face Transformers', p: 'Open-source models for classification, embeddings, and fine-tuning.' },
  { h: 'spaCy', p: 'Fast, production-grade pipelines for entity extraction and text processing.' },
  { h: 'Whisper (Speech-to-Text)', p: 'Accurate transcription as the front door to voice-driven NLP workflows.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function NlpSolutions() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">NLP</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">NLP Solutions</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Understand Language at Scale</p>
              <h1>NLP Solutions & Development Services</h1>
              <p className="lead">
                We build natural language processing systems that read, classify, summarize, and respond
                to text and speech - powering chatbots, document intelligence, and search that actually
                understands intent.
              </p>
              <div className="pillars">
                {['LLM-Powered Applications', 'Custom Text Classification', 'Multilingual Support', 'Retrieval-Augmented Generation'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nNLP Project'} />
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
            <h2>Language Systems That Understand Intent</h2>
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
            <h2>Our NLP Stack</h2>
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
            <h2>A Support Chatbot That Resolves 70% of Tickets</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">SaaS / NLP</p>
              <h3>Grounding an LLM in a Client's Own Support Docs</h3>
              <p>
                We built a retrieval-augmented chatbot trained on a client's help center and past tickets,
                letting it answer accurately from their own knowledge base instead of guessing.
              </p>
              <ul>
                {['70% of tickets resolved without a human agent', 'Answers grounded in the client\'s own documentation', 'Deployed across web chat and email', 'Escalates to a human automatically on low confidence'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=700&q=80" alt="NLP chatbot and language processing" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>30+</b><span>NLP Systems Shipped</span></div>
            <div className="it"><b>70%</b><span>Ticket Deflection Rate</span></div>
            <div className="it"><b>12+</b><span>Languages Supported</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="NLP Solutions Investment Plans"
        subtitle="Transparent packages for chatbots, document intelligence, and semantic search builds. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Have Text or Speech Worth Automating?</h2>
              <p>Tell us what you're trying to read, classify, or respond to and we'll map an NLP system that understands it.</p>
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
            <p>We've shipped NLP systems for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
