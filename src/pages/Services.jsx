import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight } from 'lucide-react'
import webDesignImg from '../assets/web-design.jpg'
import webDevImg from '../assets/digital-idea.jpg'
import appDevImg from '../assets/mobile-app-development.webp'
import ecommerceDevImg from '../assets/eCommerce.jpg'
import uiuxImg from '../assets/UIUX-design.webp'
import graphicDesignImg from '../assets/Graphic-Design.jpg'

const unsplash = (id) => `https://images.unsplash.com/photo-${id}?w=600&q=80`

const serviceGroups = [
  {
    cat: 'AI & Web3 Automation',
    items: [
      { h: 'Custom AI Agents & Chatbots', img: '1677442136019-21780ecad995', href: '/ai-agents-chatbots' },
      { h: 'Workflow Automation', img: '1551288049-bebda4e38f71', href: '/workflow-automation' },
      { h: 'Telegram / Discord Bots', img: '1611926653458-09294b3142bf', href: '/telegram-discord-bots' },
      { h: 'Crypto Trading Bots', img: '1642790106117-e829e14a795f', href: '/crypto-trading-bots' },
      { h: 'Mining & Node Tools', img: '1558494949-ef010cbdcc31', href: '/mining-node-tools' },
    ],
  },
  {
    cat: 'Core Digital Services',
    items: [
      { h: 'Web Design', src: webDesignImg },
      { h: 'Web Development', src: webDevImg },
      { h: 'App Development', src: appDevImg },
      { h: 'E-Commerce Development', src: ecommerceDevImg },
      { h: 'UI/UX Design', src: uiuxImg },
      { h: 'Graphic Design', src: graphicDesignImg },
    ],
  },
  {
    cat: 'Marketing & Growth',
    items: [
      { h: 'Search Engine Optimization (SEO)', img: '1533750349088-cd871a92f312' },
      { h: 'Digital Marketing', img: '1553028826-f4804a6dba3b' },
      { h: 'Social Media Marketing', img: '1611926653458-09294b3142bf' },
      { h: 'Content Marketing', img: '1499951360447-b19be8fe80f5' },
      { h: 'Email Marketing', img: '1596526131083-e8c633c948d2' },
    ],
  },
  {
    cat: 'Support & Tech Services',
    items: [
      { h: 'Website Maintenance', img: '1512941937669-90a1b58e7e9c' },
      { h: 'Website Optimization', img: '1558494949-ef010cbdcc31' },
      { h: 'Speed Optimization', img: '1451187580459-43490279c0fa' },
      { h: 'Hosting & Domain Setup', img: '1587560699334-cc4ff634909a' },
      { h: 'Security & Backup Solutions', img: '1544197150-b99a580bb7a8' },
    ],
  },
  {
    cat: 'Business & Custom Solutions',
    items: [
      { h: 'CRM Development', img: '1454165804606-c3d57bc86b40' },
      { h: 'ERP Solutions', img: '1600880292203-757bb62b4baf' },
      { h: 'SaaS Development', img: '1461749280684-dccba630e2f6' },
      { h: 'Custom Software Development', img: '1573164574572-cb89e39749b4' },
      { h: 'API Integration', img: '1517430816045-df4b7de11d1d' },
    ],
  },
  {
    cat: 'Business Management Software',
    items: [
      { h: 'CRM Software', img: '1553729459-efe14ef6055d' },
      { h: 'ERP Software', img: '1551434678-e076c223a692' },
      { h: 'HRM Software', img: '1551288049-bebda4e38f71' },
      { h: 'Accounting & Billing Software', img: '1543286386-713bdd548da4' },
      { h: 'Inventory Management System', img: '1516321497487-e288fb19713f' },
      { h: 'Payroll Management System', img: '1512418490979-92798cec1380' },
    ],
  },
  {
    cat: 'Sales & Operations Software',
    items: [
      { h: 'POS System', img: '1472851294608-062f824d29cc' },
      { h: 'Order Management System', img: '1556742049-0cfed4f6a45d' },
      { h: 'Warehouse Management System', img: '1600585154340-be6161a56a0c' },
      { h: 'Supply Chain Management Software', img: '1557426272-fc759fdf7a8d' },
      { h: 'Booking & Reservation System', img: '1600880292089-90a7e086ee0c' },
    ],
  },
  {
    cat: 'Industry-Specific Solutions',
    items: [
      { h: 'School / Institute Management System', img: '1523240795612-9a054b0db644' },
      { h: 'Hospital / Clinic Management Software', img: '1631815589968-fdb09a223b1e' },
      { h: 'Real Estate Management System', img: '1497215842964-222b430dc094' },
      { h: 'Restaurant Management System', img: '1556761175-5973dc0f32e7' },
      { h: 'Hotel Management System', img: '1516321318423-f06f85e504b3' },
    ],
  },
  {
    cat: 'Productivity & Collaboration',
    items: [
      { h: 'Project Management Software', img: '1552664730-d307ca884978' },
      { h: 'Task Management System', img: '1542744173-8e7e53415bb0' },
      { h: 'Team Collaboration Tools', img: '1531482615713-2afd69097998' },
      { h: 'Document Management System', img: '1563986768609-322da13575f3' },
      { h: 'Time Tracking Software', img: '1521791136064-7986c2920216' },
    ],
  },
  {
    cat: 'Online & SaaS Platforms',
    items: [
      { h: 'SaaS Applications', img: '1556155092-490a1ba16284' },
      { h: 'Multi-Vendor Marketplace Systems', img: '1622675363311-3e1904dc1885' },
      { h: 'Membership / Subscription Platforms', img: '1591696205602-2f950c417cb9' },
      { h: 'Learning Management System (LMS)', img: '1521737604893-d14cc237f11d' },
      { h: 'Job Portal Systems', img: '1518186285589-2f7649de83e0' },
    ],
  },
  {
    cat: 'Smart & AI-Based Software',
    items: [
      { h: 'AI CRM Systems', img: '1541746972996-4e0b0f43e02a' },
      { h: 'Chatbot Systems', img: '1517245386807-bb43f82c33c4', href: '/ai-agents-chatbots' },
      { h: 'AI Content Generator Tools', img: '1531297484001-80022131f5a1' },
      { h: 'Automation Software (Workflows / n8n)', img: '1519494026892-80bbd2d6fd0d', href: '/workflow-automation' },
      { h: 'Analytics & Business Intelligence Dashboards', img: '1556740758-90de374c12ad' },
    ],
  },
]

const consulting = [
  { h: 'Technology Strategy', p: 'CTO-level advisory to evaluate your current stack and chart a scalable roadmap.' },
  { h: 'Digital Transformation', p: 'Migrate legacy systems and manual processes to modern, automated platforms.' },
  { h: 'Product Discovery', p: 'User research, competitive analysis, and MVP scoping to de-risk your idea.' },
  { h: 'Security Auditing', p: 'Penetration testing, SAST/DAST, and compliance reviews (SOC2, HIPAA, GDPR).' },
  { h: 'Performance Optimization', p: 'Diagnose bottlenecks and refactor critical paths for maximum throughput.' },
  { h: 'AI Consulting', p: 'Identify high-ROI AI use cases and build a phased implementation roadmap.' },
]

const verticals = [
  { h: 'Healthcare & Telemedicine', p: 'HIPAA-compliant apps, EHR integrations, patient portals, and telehealth platforms.' },
  { h: 'Fintech & Banking', p: 'Payment processing, trading platforms, KYC/AML systems, and mobile banking apps.' },
  { h: 'Oil & Gas / Energy', p: 'Field management, SCADA integration, pipeline monitoring, and IoT dashboards.' },
  { h: 'E-Commerce & Retail', p: 'Headless commerce, inventory management, POS systems, and loyalty platforms.' },
  { h: 'Education & E-Learning', p: 'LMS platforms, AI tutoring, virtual classrooms, and gamified learning apps.' },
  { h: 'Real Estate & PropTech', p: 'MLS integrations, virtual tours, mortgage calculators, and CRM systems.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function Services() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">SERVICES</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span className="cur">Services</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>What We Do</p>
              <h1>AI, Automation & Software Development Services</h1>
              <p className="lead">
                From autonomous AI agents and trading bots to full web and mobile platforms - AE Seller
                builds automation and software that scale, perform, and keep working while you sleep.
              </p>
              <div className="pillars">
                {['800+ Projects Shipped','10+ Years Experience','98% On-Time Delivery','4.8★ Clutch Rating'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Let\'s Build\nYour Vision'} />
          </div>
        </div>
      </section>

      <section className="featured-sec">
        <div className="wrap">
          <span className="ghost">CLIENTS</span>
          <h2>Trusted by Leading Organizations</h2>
          <div className="flogos">
            {clients.slice(0,6).map(c => (
              <div key={c} className="cell">{c}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="svc-sec">
            <span className="ghost">WHAT WE OFFER</span>
            <h2>Every Service, One Team</h2>
            <p style={{ position: 'relative', zIndex: 1, color: 'var(--slate)', maxWidth: 760, marginTop: -12, marginBottom: 20 }}>
              From your first landing page to a full custom platform - explore our complete service
              catalog, organized by what you're trying to accomplish.
            </p>
          </div>

          {serviceGroups.map(group => (
            <div key={group.cat} className="svc-cat-group">
              <h3 className="svc-group-h">{group.cat}</h3>
              <div className="svc-grid svc-grid-catalog">
                {group.items.map(s => (
                  <Link key={s.h} to={s.href || '/services'} className="svc">
                    <img src={s.src || unsplash(s.img)} alt={s.h} loading="lazy" />
                    <div className="ov" />
                    <h3>{s.h}</h3>
                    <span className="arr"><ArrowRight size={16} strokeWidth={2} /></span>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div className="svc-sec" style={{ marginTop: 60 }}>
            <span className="ghost">CONSULTING</span>
            <h2>Consulting & Advisory</h2>
            <div className="cards-grid">
              {consulting.map(s => (
                <div key={s.h} className="scard">
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                  <span className="arr"><ArrowRight size={16} strokeWidth={2} /></span>
                </div>
              ))}
            </div>
          </div>

          <div className="svc-sec" style={{ marginTop: 60 }}>
            <span className="ghost">VERTICALS</span>
            <h2>Industry Verticals</h2>
            <div className="cards-grid">
              {verticals.map(s => (
                <div key={s.h} className="scard">
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                  <span className="arr"><ArrowRight size={16} strokeWidth={2} /></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PricingSection />

      {/* CTA */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Not Sure Which Service You Need?</h2>
              <p>Talk to our team - we'll help you scope the right solution, estimate cost, and choose the best technology stack.</p>
              <Link to="/" className="btn" style={{ background: 'var(--orange)' }}>Book a Free Consultation</Link>
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
            <p>We've partnered with startups and enterprises across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
