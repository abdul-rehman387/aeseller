import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Building2, ClipboardList, Repeat, Shield } from 'lucide-react'

const capabilities = [
  { ic: Repeat, h: 'Pipeline Automation', p: 'Build, test, and deploy pipelines that run on every commit, not just when someone remembers to.' },
  { ic: ClipboardList, h: 'Boards & Work Tracking', p: 'Azure Boards configured to match how your team actually plans and ships work.' },
  { ic: Building2, h: 'Infrastructure as Code', p: 'ARM templates and Bicep for repeatable, auditable Azure environments.' },
  { ic: Shield, h: 'Release Gates & Approvals', p: 'Staged environments with automated checks before anything reaches production.' },
]

const stack = [
  { h: 'Azure DevOps Pipelines', p: 'Multi-stage YAML pipelines as the backbone of every build and release.', hot: true },
  { h: 'Azure Repos', p: 'Git-based source control with branch policies enforcing code review.' },
  { h: 'Bicep / ARM Templates', p: 'Native Azure infrastructure as code for consistent, auditable environments.' },
  { h: 'Azure Kubernetes Service', p: 'Managed container orchestration for services that need to scale.' },
  { h: 'Azure Monitor', p: 'Unified logging, metrics, and alerting across your entire Azure footprint.' },
  { h: 'Azure Boards', p: 'Work item tracking wired directly into your pipelines and repos.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function AzureDevOps() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">AZURE</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Azure DevOps</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Ship Faster, Break Less</p>
              <h1>Azure DevOps Services</h1>
              <p className="lead">
                We build and manage CI/CD pipelines on Azure DevOps that get code from commit to
                production safely - with automated testing, staged rollouts, and rollback built in from day one.
              </p>
              <div className="pillars">
                {['Automated CI/CD Pipelines', 'Infrastructure as Code', 'Staged Rollouts & Rollback', 'Full Release Traceability'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nPipeline'} />
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
            <h2>Pipelines Your Team Can Trust</h2>
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
            <h2>Our Azure DevOps Stack</h2>
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
            <h2>From Manual Releases to Same-Day Deploys</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Enterprise / DevOps</p>
              <h3>Automating a Release Process That Used to Take Two Weeks</h3>
              <p>
                We replaced a client's manual, checklist-driven release process with fully automated
                Azure DevOps pipelines, cutting release time from two weeks to same-day.
              </p>
              <ul>
                {['Release cycle cut from 2 weeks to same-day', 'Zero manual deployment steps remaining', 'Automated rollback on failed health checks', 'Full audit trail on every release'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=80" alt="Azure DevOps pipeline" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>40+</b><span>Pipelines Built</span></div>
            <div className="it"><b>90%</b><span>Faster Release Cycles</span></div>
            <div className="it"><b>0</b><span>Manual Deploy Steps</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Azure DevOps Investment Plans"
        subtitle="Transparent packages for pipeline builds, migrations, and ongoing DevOps support. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Tired of Manual Releases?</h2>
              <p>Tell us how your team ships today and we'll map a pipeline that gets code to production safely, automatically.</p>
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
            <p>We've built DevOps pipelines for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
