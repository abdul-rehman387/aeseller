import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Cloud, DollarSign, Lock, TrendingUp } from 'lucide-react'

const capabilities = [
  { ic: Cloud, h: 'Infrastructure as Code', p: 'Terraform and CloudFormation templates so every environment is reproducible and version-controlled.' },
  { ic: TrendingUp, h: 'Auto-Scaling Architecture', p: 'EC2, ECS, and Lambda configurations that scale with real traffic, not fixed guesses.' },
  { ic: Lock, h: 'Security & Compliance', p: 'IAM least-privilege access, VPC isolation, and audit logging built in from the start.' },
  { ic: DollarSign, h: 'Cost Optimization', p: 'Right-sizing, reserved instances, and spend monitoring that keeps your AWS bill predictable.' },
]

const stack = [
  { h: 'AWS EC2 / ECS / Lambda', p: 'Compute foundations chosen based on your workload shape, not a default assumption.', hot: true },
  { h: 'Terraform', p: 'Infrastructure as code across every environment, from dev to production.' },
  { h: 'CloudFormation', p: 'Native AWS provisioning for teams standardized on the AWS ecosystem.' },
  { h: 'RDS / DynamoDB', p: 'Managed relational and NoSQL data stores sized for your access patterns.' },
  { h: 'CloudWatch', p: 'Metrics, logs, and alarms that catch problems before your users do.' },
  { h: 'S3 / CloudFront', p: 'Durable storage and global content delivery for static and media assets.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function AwsSolutions() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">AWS</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">AWS Solutions</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Infrastructure That Scales With You</p>
              <h1>AWS Solutions & Development Services</h1>
              <p className="lead">
                We design, migrate, and manage AWS infrastructure built for real production workloads -
                right-sized from day one, so you're not paying for capacity you don't need.
              </p>
              <div className="pillars">
                {['Well-Architected Framework', 'Auto-Scaling Infrastructure', 'Cost-Optimized by Default', '24/7 Monitoring & Alerting'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nAWS Build'} />
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
            <h2>Infrastructure Built to Scale, Not Guess</h2>
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
            <h2>Our AWS Stack</h2>
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
            <h2>Cutting AWS Spend 38% While Improving Uptime</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Enterprise / AWS</p>
              <h3>Right-Sizing an Over-Provisioned AWS Environment</h3>
              <p>
                We audited a client's AWS account, moved fixed infrastructure to auto-scaling groups, and
                introduced reserved capacity for predictable workloads - cutting spend while improving reliability.
              </p>
              <ul>
                {['38% reduction in monthly AWS spend', '99.95% uptime post-migration', 'Auto-scaling handles 5x traffic spikes without manual intervention', 'Full infrastructure-as-code, zero manual console changes'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80" alt="AWS cloud infrastructure" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>60+</b><span>AWS Environments Managed</span></div>
            <div className="it"><b>38%</b><span>Avg. Cost Reduction</span></div>
            <div className="it"><b>99.95%</b><span>Avg. Uptime</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="AWS Solutions Investment Plans"
        subtitle="Transparent packages for infrastructure builds, cost audits, and ongoing managed AWS. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Right-Size Your AWS Bill?</h2>
              <p>Tell us what your infrastructure looks like today and we'll map a build that scales without the waste.</p>
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
            <p>We've managed AWS infrastructure for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
