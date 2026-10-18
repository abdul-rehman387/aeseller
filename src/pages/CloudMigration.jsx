import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Compass, Map, Package, RefreshCw } from 'lucide-react'

const capabilities = [
  { ic: Map, h: 'Migration Assessment', p: 'Full audit of your current infrastructure to map dependencies before anything moves.' },
  { ic: Package, h: 'Phased Migration Execution', p: 'Workloads migrated in planned waves, validated at every step before cutover.' },
  { ic: RefreshCw, h: 'Data Integrity Validation', p: 'Automated checks confirming every byte moved matches the source.' },
  { ic: Compass, h: 'Multi-Cloud Strategy', p: 'AWS, Azure, or GCP - recommendations based on your workload, not a vendor preference.' },
]

const stack = [
  { h: 'AWS / Azure / GCP', p: 'Destination platform selected based on your workload profile, not a default.', hot: true },
  { h: 'Terraform', p: 'Infrastructure as code so the destination environment is reproducible from day one.' },
  { h: 'Database Migration Service', p: 'Managed, low-downtime data migration for relational and NoSQL stores.' },
  { h: 'Kubernetes', p: 'Containerized workloads for teams migrating toward a cloud-native architecture.' },
  { h: 'VPN / Direct Connect', p: 'Secure, high-throughput connectivity during hybrid migration phases.' },
  { h: 'CloudEndure / Azure Migrate', p: 'Purpose-built replication tooling for minimal-downtime cutovers.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function CloudMigration() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">MIGRATE</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Cloud Migration</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Move Without the Downtime</p>
              <h1>Cloud Migration Services</h1>
              <p className="lead">
                We migrate on-premise and legacy cloud workloads to modern infrastructure - planned in
                phases, tested at every step, so the business never feels the move.
              </p>
              <div className="pillars">
                {['Zero-Downtime Migrations', 'Phased Rollout Strategy', 'Full Data Integrity Validation', 'Multi-Cloud Expertise'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nMigration'} />
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
            <h2>Migrations Planned in Waves, Not Guesses</h2>
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
            <h2>Our Migration Stack</h2>
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
            <h2>Migrating a 15-Year-Old On-Prem System With Zero Downtime</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Enterprise / Cloud Migration</p>
              <h3>Moving a Legacy System to the Cloud in Six Planned Waves</h3>
              <p>
                We mapped every dependency in a client's 15-year-old on-prem system, then migrated it to
                the cloud in six validated waves - with the business never noticing a disruption.
              </p>
              <ul>
                {['Zero unplanned downtime across the full migration', '15-year-old system moved in 6 phased waves', '100% data integrity validated post-migration', '45% lower infrastructure costs post-migration'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80" alt="Cloud migration infrastructure" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>30+</b><span>Migrations Completed</span></div>
            <div className="it"><b>0</b><span>Data Loss Incidents</span></div>
            <div className="it"><b>45%</b><span>Avg. Cost Reduction</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Cloud Migration Investment Plans"
        subtitle="Transparent packages for migration assessments, phased execution, and full re-platforming. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Planning a Move to the Cloud?</h2>
              <p>Tell us what you're running today and we'll map a migration plan that doesn't put the business on hold.</p>
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
            <p>We've migrated infrastructure for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
