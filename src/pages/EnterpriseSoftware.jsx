import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Building, Link2, Lock, Settings } from 'lucide-react'

const capabilities = [
  { ic: Building, h: 'ERP & Internal Systems', p: 'Custom ERP, HR, and operations platforms built around how your teams actually work - not a rigid off-the-shelf template.' },
  { ic: Link2, h: 'Legacy System Integration', p: 'Bridge decades-old systems with modern APIs so you modernize without a risky rip-and-replace migration.' },
  { ic: Lock, h: 'Enterprise Security & SSO', p: 'Active Directory / SAML single sign-on, role-based access control, and audit logging built in from day one.' },
  { ic: Settings, h: 'Workflow Automation', p: 'Replace spreadsheets and manual approvals with automated pipelines that scale as your headcount grows.' },
]

const stack = [
  { h: '.NET / C#', p: 'Enterprise-grade backend services and Windows-integrated applications on Microsoft\'s mature ecosystem.', hot: true },
  { h: 'Java / Spring Boot', p: 'Battle-tested for high-throughput, mission-critical enterprise systems at scale.' },
  { h: 'PostgreSQL / Oracle', p: 'Relational data platforms built for the compliance and reliability enterprises demand.' },
  { h: 'Kubernetes', p: 'Container orchestration for zero-downtime deployments across multiple environments.' },
  { h: 'Azure / AWS GovCloud', p: 'Cloud infrastructure that meets enterprise and government compliance requirements.' },
  { h: 'Active Directory / SSO', p: 'Seamless identity integration with your existing corporate directory and access policies.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function EnterpriseSoftware() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">ENTERPRISE</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Enterprise Software</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Built for Scale & Complexity</p>
              <h1>Enterprise Software Development Services</h1>
              <p className="lead">
                We build the internal systems, ERPs, and multi-tenant platforms that hold up under real
                enterprise load - integrated with your existing infrastructure, not fighting against it.
              </p>
              <div className="pillars">
                {['500+ Enterprise Users Supported', '99.9% Uptime SLA', 'SOC 2 / HIPAA Ready', 'Legacy System Integration'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nEnterprise Project'} />
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
            <h2>Systems That Scale With Your Organization</h2>
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
            <h2>Our Enterprise Stack</h2>
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
            <h2>One Platform, Every Role in the Organization</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">SaaS / Enterprise CRM</p>
              <h3>CRM Software - Multi-Tenant Platform for Software Houses</h3>
              <p>
                A role-aware enterprise CRM with dedicated Super Admin, Company Owner, Project Manager, and
                Sales Rep dashboards - giving every layer of the organization exactly the view and permissions they need.
              </p>
              <ul>
                {['Four distinct role-based dashboards', 'Real-time platform-wide analytics for admins', 'Predictive lead scoring for sales teams', 'AI-assisted pipeline automation'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=700&q=80" alt="Enterprise software team" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>80+</b><span>Enterprise Systems Shipped</span></div>
            <div className="it"><b>99.9%</b><span>Average Uptime SLA</span></div>
            <div className="it"><b>500+</b><span>Users per Deployment (avg.)</span></div>
            <div className="it"><b>4.8★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Enterprise Software Investment Plans"
        subtitle="Transparent packages for internal tools, ERPs, and multi-tenant platforms - from a focused module to a full enterprise build. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Modernize Your Operations?</h2>
              <p>Tell us what's slowing your teams down and we'll map a path to a system that scales with you.</p>
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
            <p>We've shipped enterprise systems for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
