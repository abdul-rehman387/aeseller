import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import { ArrowRight } from 'lucide-react'

const techSections = [
  {
    ghost: 'LANGUAGES',
    title: 'Programming Languages & Frameworks',
    cards: [
      { h: '.NET / C#', p: 'Enterprise-grade backend services, microservices, and Windows applications with Microsoft\'s mature ecosystem.' },
      { h: 'Java', p: 'Scalable, high-performance enterprise apps and Android development with Spring Boot and Quarkus.' },
      { h: 'Node.js', p: 'Fast, event-driven APIs and real-time backends with Express, Fastify, and NestJS.' },
      { h: 'Python', p: 'AI/ML pipelines, data science, automation, and web APIs with Django, Flask, and FastAPI.' },
      { h: 'PHP / Laravel', p: 'Rapid web development and robust CMS platforms powering millions of websites globally.' },
      { h: 'HTML5 / CSS3', p: 'Pixel-perfect, accessible front-end experiences with modern CSS features and web standards.' },
    ]
  },
  {
    ghost: 'FRONTEND',
    title: 'Frontend & Mobile Frameworks',
    cards: [
      { h: 'React / Next.js', p: 'Component-driven UIs and SSR/SSG web apps with unmatched ecosystem support.', hot: true },
      { h: 'React Native', p: 'Share 90% of code between iOS and Android while delivering native-feel performance.' },
      { h: 'Flutter', p: 'Google\'s UI toolkit for beautiful, natively compiled apps from a single codebase.' },
      { h: 'Angular', p: 'Enterprise-scale SPAs with TypeScript-first architecture and opinionated structure.' },
      { h: 'Vue.js', p: 'Progressive framework for building interactive UIs with a gentle learning curve.' },
      { h: 'Swift / Kotlin', p: 'Fully native iOS and Android development for the highest performance and platform integration.' },
    ]
  },
  {
    ghost: 'CLOUD',
    title: 'Cloud Platforms & DevOps',
    cards: [
      { h: 'Microsoft Azure', p: 'Enterprise cloud with Active Directory, Cosmos DB, Azure Functions, and AI cognitive services.' },
      { h: 'Amazon Web Services', p: 'Industry-leading cloud infrastructure with EC2, Lambda, RDS, S3, and 200+ managed services.' },
      { h: 'Google Cloud Platform', p: 'Best-in-class AI/ML tools, BigQuery analytics, and Kubernetes-native workloads.' },
      { h: 'Docker / Kubernetes', p: 'Container orchestration for zero-downtime deployments, autoscaling, and portability.' },
      { h: 'CI/CD Pipelines', p: 'GitHub Actions, GitLab CI, and Jenkins pipelines for automated testing and deployment.' },
      { h: 'Terraform / IaC', p: 'Infrastructure as Code for reproducible, version-controlled cloud environments.' },
    ]
  },
  {
    ghost: 'DATABASE',
    title: 'Databases & Data Engineering',
    cards: [
      { h: 'PostgreSQL', p: 'Open-source relational powerhouse with JSON support, full-text search, and ACID compliance.' },
      { h: 'MongoDB', p: 'Flexible document store for content-heavy apps, real-time analytics, and rapid iteration.' },
      { h: 'Oracle Database', p: 'Mission-critical enterprise data management with advanced security and high availability.' },
      { h: 'Redis', p: 'In-memory caching and pub/sub messaging for sub-millisecond latency at scale.' },
      { h: 'SAP', p: 'Enterprise resource planning integrations for manufacturing, finance, and supply chain.' },
      { h: 'Elasticsearch', p: 'Distributed search and analytics engine for log management and full-text search.' },
    ]
  },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function Technologies() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">TECH</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span className="cur">Technologies</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Our Stack</p>
              <h1>Best-in-Class Technologies for Every Challenge</h1>
              <p className="lead">
                We don't lock you into a single vendor. We select the right technology for each problem -
                drawing from a broad, battle-tested stack spanning languages, frameworks, and cloud platforms.
              </p>
              <div className="pillars">
                {['40+ Technologies','AWS / Azure / GCP','Full-Stack Expertise','Open Source First'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Discuss Your\nTech Stack'} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          {techSections.map(ts => (
            <div key={ts.ghost} className="tech-sec">
              <span className="ghost">{ts.ghost}</span>
              <h2>{ts.title}</h2>
              <div className="tcards">
                {ts.cards.map(c => (
                  <div key={c.h} className={`tcard-tech${c.hot ? ' scard hot' : ''}`}>
                    <h3>{c.h}</h3>
                    <p>{c.p}</p>
                    <span className="arr"><ArrowRight size={16} strokeWidth={2} /></span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Let's Architect Together</p>
              <h2>Need Help Choosing the Right Stack?</h2>
              <p>Our architects will review your requirements and recommend the optimal technology combination for performance, cost, and maintainability.</p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>Book a Tech Consultation</Link>
            </div>
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1639066648921-82d4500abf1a?w=800&q=80" alt="Cloud tech" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="clientele">
        <div className="wrap">
          <div className="top">
            <span className="ghost">CLIENTS</span>
            <h2>Companies That Trust Our Stack</h2>
            <p>Our technology choices are validated by the results we deliver for clients across diverse industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
