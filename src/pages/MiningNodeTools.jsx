import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { Activity, ArrowRight, Cpu, Network, Server } from 'lucide-react'

const capabilities = [
  { ic: Server, h: 'Node Deployment & Hosting', p: 'Automated provisioning of full, archive, and RPC nodes with snapshots, upgrades, and failover.' },
  { ic: Network, h: 'Validator Tooling', p: 'Validator setup, key management workflows, and slashing-protection monitoring for PoS networks.' },
  { ic: Cpu, h: 'Mining Fleet Management', p: 'Dashboards that track hashrate, temperature, and uptime across rigs - with remote config and auto-restart.' },
  { ic: Activity, h: 'Monitoring & Alerts', p: 'Block height, peer count, sync status, and payout tracking with Telegram, Slack, or email alerts.' },
]

const stack = [
  { h: 'Docker & Kubernetes', p: 'Containerized node deployments that scale and self-heal across regions.', hot: true },
  { h: 'Terraform & Ansible', p: 'Infrastructure-as-code for repeatable, auditable node and rig provisioning.' },
  { h: 'Prometheus & Grafana', p: 'Metrics collection and real-time dashboards for nodes, validators, and rigs.' },
  { h: 'EVM & Cosmos SDK Chains', p: 'Ethereum, BNB Chain, Polygon, and Cosmos-based network clients.' },
  { h: 'Mining Pool APIs', p: 'Integrations with major pool APIs for hashrate, share, and payout data.' },
  { h: 'Go / Rust / Python', p: 'Custom agents, exporters, and automation scripts built for performance.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function MiningNodeTools() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">NODES</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Mining & Node Tools</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Infrastructure That Never Sleeps</p>
              <h1>Mining & Node Tools</h1>
              <p className="lead">
                We build the tooling that keeps blockchain infrastructure healthy - automated node deployment,
                validator monitoring, and mining fleet dashboards with alerts before small issues become downtime.
              </p>
              <div className="pillars">
                {['RPC & Validator Nodes', 'Mining Fleet Dashboards', 'Uptime & Sync Monitoring', 'Infrastructure as Code'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scale Your\nInfrastructure'} />
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
            <h2>Reliable Web3 Infrastructure Tooling</h2>
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
            <h2>Infrastructure Stack</h2>
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
            <h2>One Dashboard for Every Node and Rig</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Web3 / Infrastructure</p>
              <h3>Node Fleet Automation with Unified Monitoring</h3>
              <p>
                A typical engagement: node deployments are moved to infrastructure-as-code, every node and rig
                reports into a single Grafana dashboard, and on-call alerts fire on sync lag, missed blocks,
                or hardware faults.
              </p>
              <ul>
                {['One-command node provisioning and upgrades', 'Unified metrics across chains and regions', 'Automatic restart and failover playbooks', 'Telegram / Slack alerting with escalation'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Our Work →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80" alt="Server infrastructure" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>24/7</b><span>Health Monitoring</span></div>
            <div className="it"><b>IaC</b><span>Reproducible Deployments</span></div>
            <div className="it"><b>Multi</b><span>Chain & Region Support</span></div>
            <div className="it"><b>100%</b><span>Runbooks Documented</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Mining & Node Tooling Plans"
        subtitle="From a monitoring dashboard to fully automated node fleets. Every engagement starts with a free infrastructure review."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Tired of Babysitting Your Nodes?</h2>
              <p>Tell us about your setup and we'll show you how to automate deployment, monitoring, and recovery.</p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>Book a Free Infrastructure Review</Link>
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
