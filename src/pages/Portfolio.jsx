import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import TrustpilotSlider from '../components/TrustpilotSlider'

const CATEGORIES = ['all','corporate','ecommerce','education','logistics','saas','cloud']

const projects = [
  { title: 'Institute Management System', desc: 'End-to-end school administration platform covering admissions, attendance, grading, fee collection, and parent communication.', cat: 'education', img: '/portfolio/Mockup-Institute%20Management%20System.jpg', status: 'Live Site', tech: ['Laravel', 'Vue.js', 'MySQL', 'Twilio'], detailUrl: '/portfolio/institute-management/institute-management-system.html' },
  { title: 'CRM Software Dashboard', desc: 'B2B sales CRM with pipeline automation, email sequencing, and predictive lead scoring for mid-market sales teams.', cat: 'saas', img: '/portfolio/Mockup-CRM-Software-Dashboard.png', status: 'Live Site', tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'], detailUrl: '/portfolio/crm-software/ars-crm-dashboard.html' },
  { title: 'Portfolio App', desc: 'A themeable personal portfolio platform for engineers, with case-study layouts, résumé export, and a built-in contact flow that converts visitors into leads.', cat: 'saas', img: '/portfolio/Mockup-Portfolio-App.jpg', status: 'Live Site', tech: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'], detailUrl: '/portfolio/developer-portfolio/developer-portfolio.html' },
  { title: 'PremierGarde eCommerce Store', desc: 'A premium tech accessories storefront with curated collections, product filtering, and a streamlined checkout built to convert design-conscious shoppers.', cat: 'ecommerce', img: '/portfolio/Mockup-Premiergarde-eCommerce-Store.png', status: 'Live Site', tech: ['Next.js', 'Stripe', 'Sanity CMS', 'Node.js'], detailUrl: 'https://premiergarde.com/' },
  { title: 'Inventory Management Dashboard', desc: 'Real-time stock, purchase order, and warehouse management dashboard with reorder alerts, supplier tracking, and category-level cost breakdowns.', cat: 'logistics', img: '/portfolio/Mockup-Inventory-Management-Dashboard.jpg', status: 'Live Site', tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js'], detailUrl: '/portfolio/inventory-dashboard/inventory-dashboard.html' },
  { title: 'Tracking App', desc: 'TrackPin - a live asset and fleet tracking app for logistics teams, with real-time map positions, movement alerts, and status history for every container and pallet.', cat: 'logistics', img: '/portfolio/Mockup-Traking-App.png', status: 'Live Site', tech: ['React Native', 'Node.js', 'WebSocket', 'Mapbox'], detailUrl: '/portfolio/tracking-app/tracking-app.html' },
  { title: 'Arizona Globals', desc: 'Corporate consulting website with service showcases, team profiles, and lead-generation contact flows for a global business advisory firm.', cat: 'corporate', img: '/portfolio/Mockup-Arizona-Globals.jpg', status: 'Live Site', tech: ['WordPress', 'Elementor', 'PHP', 'MySQL'], detailUrl: 'https://arizonaglobals.com/' },
  { title: 'The Work Frame', desc: 'Ergonomic home-office gear storefront with category browsing, a build-your-setup configurator, and a streamlined checkout.', cat: 'ecommerce', img: '/portfolio/Mockup-The-Work-Frame-eCommerce-Store.png', status: 'Live Site', tech: ['Shopify', 'Liquid', 'JavaScript', 'Stripe'], detailUrl: 'https://theworkframe.com/' },
  { title: 'VerdaraFarm', desc: 'Direct-to-consumer vertical hydroponic gardening storefront with curated grow-system collections, category browsing, and a streamlined checkout.', cat: 'ecommerce', img: '/portfolio/verdarafarm.png', status: 'Live Site', tech: ['Shopify', 'Liquid', 'JavaScript', 'Stripe'], detailUrl: 'https://verdarafarm.com' },
  { title: 'AkFinTaxAdvisors', desc: 'Corporate website for a financial and tax advisory firm, showcasing service offerings, client resources, and a streamlined consultation booking flow.', cat: 'corporate', img: '/portfolio/akfintaxadvisors.png', status: 'Live Site', tech: ['WordPress', 'PHP', 'MySQL', 'SEO'], detailUrl: 'https://akfintaxadvisors.com/' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function Portfolio() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

  return (
    <>
      <section className="intro portfolio-intro">
        <div className="wrap">
          <span className="ghost">PORTFOLIO</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span className="cur">Portfolio</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Our Work</p>
              <h1>800+ Projects Delivered Across 15+ Countries</h1>
              <p className="lead">
                From healthcare apps to enterprise ERP systems - every project we ship is engineered
                for reliability, performance, and user delight. Browse our portfolio below.
              </p>
              <div className="pillars">
                {['Gaming','Healthcare','Fintech','Education','Real Estate','Portfolio','E-Commerce','AI/ML'].map(p => (
                  <div key={p} style={{ gap: 8 }}>
                    <span style={{ color: 'var(--orange)', fontWeight: 700, fontSize: 16 }}>›</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Start Your\nProject'} />
          </div>
        </div>
      </section>

      <div className="sec" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>110+</b><span>Projects Delivered</span></div>
            <div className="it"><b>15+</b><span>Countries Served</span></div>
            <div className="it"><b>$850K+</b><span>Client Revenue Generated</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Featured Case Study</p>
            <h2>Our Most Impactful Work</h2>
          </div>
          <div className="case">
            <div>
              <p style={{ color: 'var(--orange)', fontFamily: 'Poppins', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 8 }}>FinTech / SaaS</p>
              <h3>FinTrack - From Idea to $580K+ ARR in 12 Months</h3>
              <p>
                ExpinSoft designed and built FinTrack's entire fintech-grade analytics platform - a
                multi-tenant AI-powered financial analytics solution that processes $600K+ in monthly
                transactions. MVP delivered in 4 months, scaled to 50,000+ concurrent users.
              </p>
              <h4>Key Outcomes</h4>
              <ul className="impact">
                <li><span>$580K+ ARR reached within 12 months of launch</span></li>
                <li><span>50k+ active monthly users on the platform</span></li>
                <li><span>4-month MVP delivery timeline</span></li>
              </ul>
              <Link to="/" className="btn btn-orange">Discuss Your Project →</Link>
            </div>
            <div className="case-img">
              <img src="https://images.unsplash.com/photo-1516031190212-da133013de50?w=700&q=80" alt="FinTrack analytics dashboard" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="cs-head">
        <div className="wrap">
          <p className="eyebrow orange" style={{ marginBottom: 14 }}>Case Studies</p>
          <h2>From Concept to Market-Ready</h2>
          <p>Each project below represents a real partnership - real challenges solved, real business outcomes delivered. Click any card to learn more.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter${active === cat ? ' active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat === 'all' ? 'All Projects' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <p className="grid-label">Showing {filtered.length} of {projects.length} projects</p>
          <div className="pgrid">
            {filtered.map(p => {
              const isLive = p.status === 'Live Site' || p.status === 'Fully Deployed'
              const Wrap = p.detailUrl ? 'a' : 'div'
              const wrapProps = p.detailUrl
                ? { href: p.detailUrl, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Visit ${p.title} site` }
                : {}
              return (
                <div key={p.title} className={`pcard${p.detailUrl ? ' has-detail' : ''}`}>
                  <Wrap {...wrapProps} className="pic">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                    />
                    <span className={`status-badge${isLive ? ' live' : ''}`}>
                      <i /> {p.status}
                    </span>
                    {p.detailUrl && <span className="detail-hint">Visit Site ↗</span>}
                  </Wrap>
                  <div className="body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tech-tags">
                      {p.tech.map(t => <span key={t}>{t}</span>)}
                    </div>
                    <div className="pcard-foot">
                      <span className="cat-badge">{p.cat}</span>
                      {p.detailUrl ? (
                        <a href={p.detailUrl} target="_blank" rel="noopener noreferrer" className="visit-link">Visit Site ↗</a>
                      ) : isLive ? (
                        <span className="visit-link">Visit Site ↗</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <TrustpilotSlider />
        </div>
      </section>

      <PricingSection />

      <div className="clientele">
        <div className="wrap">
          <div className="top">
            <span className="ghost">CLIENTS</span>
            <h2>Companies Behind These Projects</h2>
            <p>We build software for companies ranging from early-stage startups to publicly-listed enterprises and government organizations.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
