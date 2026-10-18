import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Cloud, Link2, RefreshCw, Search } from 'lucide-react'

const capabilities = [
  { ic: Search, h: 'Legacy Code Audits', p: 'Deep-dive assessments that map technical debt, security gaps, and modernization priorities before a single line changes.' },
  { ic: RefreshCw, h: 'Incremental Refactoring', p: 'Strangler-fig migrations that modernize piece by piece, so the business keeps running the whole time.' },
  { ic: Cloud, h: 'Legacy-to-Cloud Migration', p: 'Move monoliths off aging on-prem infrastructure onto scalable, cost-efficient cloud platforms.' },
  { ic: Link2, h: 'API-First Re-Architecture', p: 'Wrap and expose legacy systems through modern APIs so new products can build on top of them safely.' },
]

const stack = [
  { h: 'COBOL / Mainframe Bridging', p: 'Interface layers that let mainframe logic keep running while new services take over around it.', hot: true },
  { h: '.NET Framework → .NET 8', p: 'Upgrade aging .NET Framework apps to the modern, cross-platform .NET runtime.' },
  { h: 'Java 6/7 → Spring Boot', p: 'Migrate legacy Java applications onto a current, actively maintained Spring ecosystem.' },
  { h: 'Monolith → Microservices', p: 'Decompose tangled monoliths into independently deployable, testable services.' },
  { h: 'On-Prem → AWS / Azure', p: 'Lift-and-shift or re-architect on-prem workloads onto modern cloud infrastructure.' },
  { h: 'Legacy DB → PostgreSQL', p: 'Modernize brittle legacy databases onto a reliable, well-supported relational platform.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function LegacyModernization() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">LEGACY</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Legacy Modernization</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Modernize Without the Risk</p>
              <h1>Legacy System Modernization Services</h1>
              <p className="lead">
                We help you evolve decades-old systems into modern, maintainable platforms - without a
                risky rip-and-replace, and without disrupting the business that depends on them.
              </p>
              <div className="pillars">
                {['Zero-Downtime Migrations', 'Incremental Modernization', 'Legacy-to-Cloud Transitions', 'Full Regression Test Coverage'].map(p => (
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
            <h2>Modernization, Without the Downtime</h2>
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
            <h2>Migration Paths We Specialize In</h2>
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
            <h2>A 20-Year-Old Core System, Modernized in 6 Months</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Enterprise / Legacy Modernization</p>
              <h3>From Aging On-Prem Monolith to a Modern Cloud Platform</h3>
              <p>
                We audited, re-architected, and migrated a 20-year-old on-premise operations system to a
                cloud-native platform in phased releases - with zero unplanned downtime and full data integrity
                preserved at every step.
              </p>
              <ul>
                {['Six-month phased migration with zero data loss', 'Legacy business logic preserved and re-tested', 'Infrastructure costs cut by 40% post-migration', 'New APIs opened the system to two new products'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80" alt="Legacy system modernization" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>60+</b><span>Legacy Systems Modernized</span></div>
            <div className="it"><b>0</b><span>Data Loss Incidents</span></div>
            <div className="it"><b>40%</b><span>Avg. Infrastructure Cost Cut</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Legacy Modernization Investment Plans"
        subtitle="Transparent packages for audits, phased migrations, and full re-platforming - scoped around your risk tolerance and timeline. Every engagement starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Retire Your Legacy Risk?</h2>
              <p>Tell us what system is holding you back and we'll map a modernization path that doesn't put the business on hold.</p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>Book a Free Consultation</Link>
            </div>
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80" alt="Server infrastructure" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="clientele">
        <div className="wrap">
          <div className="top">
            <span className="ghost">CLIENTS</span>
            <h2>Our Global Clientele</h2>
            <p>We've modernized critical systems for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
