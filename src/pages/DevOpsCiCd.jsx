import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, BarChart3, Bird, Wrench, Zap } from 'lucide-react'

const capabilities = [
  { ic: Zap, h: 'Fast Feedback Pipelines', p: 'Build and test suites tuned to run in minutes, not hours, so engineers stay in flow.' },
  { ic: Bird, h: 'Canary & Blue-Green Deploys', p: 'Progressive rollout strategies that catch problems before they hit every user.' },
  { ic: BarChart3, h: 'Deployment Observability', p: 'Real-time health signals tied directly to automated rollback triggers.' },
  { ic: Wrench, h: 'Pipeline as Code', p: 'Every pipeline defined, versioned, and reviewed like the rest of your codebase.' },
]

const stack = [
  { h: 'GitHub Actions / GitLab CI', p: 'Our default CI/CD platforms for teams already living in GitHub or GitLab.', hot: true },
  { h: 'Jenkins', p: 'Self-hosted pipeline orchestration for teams with specific compliance requirements.' },
  { h: 'Docker / Kubernetes', p: 'Containerized builds and deployments that behave identically everywhere.' },
  { h: 'ArgoCD', p: 'GitOps-driven continuous delivery for Kubernetes workloads.' },
  { h: 'Terraform', p: 'Infrastructure changes reviewed and deployed through the same pipeline as your code.' },
  { h: 'Datadog / Grafana', p: 'Observability tied directly into deployment health and rollback triggers.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function DevOpsCiCd() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">CI/CD</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">DevOps CI/CD</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Deploy With Confidence</p>
              <h1>DevOps & CI/CD Pipeline Services</h1>
              <p className="lead">
                We build CI/CD pipelines that let your team ship multiple times a day without holding
                their breath - automated testing, staged deploys, and rollback built into every release.
              </p>
              <div className="pillars">
                {['Sub-10-Minute Build Times', 'Automated Testing Gates', 'Progressive Deployment', 'Instant Rollback'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nCI/CD Build'} />
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
            <h2>Pipelines Engineers Actually Trust</h2>
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
            <h2>Our CI/CD Stack</h2>
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
            <h2>800+ Releases a Year Without the 2AM Pages</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">SaaS / DevOps</p>
              <h3>Building a Pipeline That Scaled With Release Frequency</h3>
              <p>
                We rebuilt a client's CI/CD pipeline around fast feedback and canary deploys, letting
                their team ship hundreds of releases a year without a corresponding rise in incidents.
              </p>
              <ul>
                {['800+ production releases shipped per year', 'Build times cut from 40 minutes to under 8', 'Automated rollback on every failed health check', 'Zero deployment-related incidents in 12 months'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=700&q=80" alt="CI/CD deployment pipeline" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>800+</b><span>Releases Shipped Yearly</span></div>
            <div className="it"><b>&lt;8min</b><span>Avg. Build Time</span></div>
            <div className="it"><b>99.9%</b><span>Deploy Success Rate</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="DevOps & CI/CD Investment Plans"
        subtitle="Transparent packages for pipeline builds, migration from manual releases, and ongoing DevOps support. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Ship With Confidence?</h2>
              <p>Tell us how your team deploys today and we'll map a pipeline built for speed and safety.</p>
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
            <p>We've built CI/CD pipelines for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
