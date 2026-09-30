import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import { ArrowRight } from 'lucide-react'
import { industries } from '../data/industries'

const moreIndustries = [
  { h: 'IT Services & MSPs', p: 'AI helpdesk agents, automated ticket triage, and monitoring alerts that let small IT teams support more clients.', hot: true },
  { h: 'SaaS & Software Companies', p: 'In-app AI assistants, onboarding automation, and billing and CRM workflows that scale with your user base.' },
  { h: 'Fintech & Crypto', p: 'Trading bots, wallet and exchange integrations, and real-time alerting for Web3 and fintech products.' },
  { h: 'Web3 & Blockchain Networks', p: 'Node deployment, validator monitoring, and community bots for protocols and blockchain projects.' },
  { h: 'Digital Agencies', p: 'White-label chatbots, reporting automation, and client-portal tooling agencies can resell to their customers.' },
  { h: 'Online Communities & Creators', p: 'Telegram and Discord bots for moderation, paid memberships, and audience engagement at scale.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function Industries() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">INDUSTRIES</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span className="cur">Industries</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Domain Expertise</p>
              <h1>AI & Automation Solutions for the IT Industry</h1>
              <p className="lead">
                From IT service providers and SaaS companies to fintech and Web3 teams, we build the
                agents, bots, and automations that fit how technology businesses actually operate -
                not generic templates.
              </p>
              <div className="pillars">
                {['IT Services & MSPs', 'SaaS & Software', 'Fintech, Crypto & Web3', 'Security-First Delivery'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Discuss Your\nIndustry Needs'} />
          </div>
        </div>
      </section>

      <section className="featured-sec">
        <div className="wrap">
          <span className="ghost">CLIENTS</span>
          <h2>Trusted Across Sectors</h2>
          <div className="flogos">
            {clients.slice(0, 6).map(c => (
              <div key={c} className="cell">{c}</div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="sec">
        <div className="wrap">
          <div className="tech-sec">
            <span className="ghost">IT SECTORS</span>
            <h2>IT Industries We Serve</h2>
            <div className="tcards">
              {moreIndustries.map(s => (
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

      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Example Build</p>
            <h2>Automation Built for IT Teams</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">IT Services / Automation</p>
              <h3>AI Helpdesk & Ticket Automation for an IT Service Provider</h3>
              <p>
                A typical engagement: an AI support agent answers common user requests from the knowledge base,
                triages and routes tickets to the right engineer, and turns monitoring alerts into tickets
                automatically - so the IT team spends its time on real problems.
              </p>
              <ul>
                {['AI agent trained on runbooks and past tickets', 'Automatic ticket triage, tagging, and routing', 'Monitoring alerts turned into tickets with context', 'Slack / Teams notifications and SLA reporting'].map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link to="/workflow-automation" className="btn" style={{ marginTop: 20 }}>Explore Workflow Automation →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80" alt="IT team working on support automation" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>12+</b><span>Industries Served</span></div>
            <div className="it"><b>800+</b><span>Projects Delivered</span></div>
            <div className="it"><b>50+</b><span>Enterprise Clients</span></div>
            <div className="it"><b>10 Yrs</b><span>Domain Experience</span></div>
          </div>
        </div>
      </div>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Don't See Your Industry?</p>
              <h2>We Adapt Fast to New Domains</h2>
              <p>Our discovery process gets our engineers fluent in your industry's compliance, workflows, and users within weeks - not months.</p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>Talk to an Industry Expert</Link>
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
            <h2>Companies Across Every Sector</h2>
            <p>From regulated enterprises to fast-moving startups, our cross-industry experience means fewer surprises and faster time to market.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
