import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import { ArrowRight } from 'lucide-react'

const spotlight = [
  { h: 'Healthcare', p: 'HIPAA-compliant apps, patient portals, telemedicine & health data analytics.', img: '1576091160399-112ba8d25d1d' },
  { h: 'Oil & Gas', p: 'Field management, SCADA integration, pipeline monitoring.', img: '1559510981-10719ce4266a' },
  { h: 'Fintech', p: 'Payment gateways, trading platforms, blockchain wallets.', img: '1616803140344-6682afb13cda' },
  { h: 'Real Estate', p: 'Property search, virtual tours, CRM & mortgage tools.', img: '1605146769289-440113cc3d00' },
  { h: 'Education', p: 'E-learning portals, LMS platforms, AI tutoring systems.', img: '1610484826967-09c5720778c7' },
]

const moreIndustries = [
  { h: 'E-Commerce & Retail', p: 'Headless commerce, inventory management, POS systems, and loyalty platforms built to convert.' },
  { h: 'Logistics & Supply Chain', p: 'Fleet tracking, warehouse management, and predictive maintenance for distribution networks.' },
  { h: 'Gaming & Entertainment', p: 'Multiplayer platforms, in-app economies, and live-ops tooling for mobile and PC titles.' },
  { h: 'Government & Public Sector', p: 'Secure citizen portals, case management systems, and accessibility-compliant digital services.', hot: true },
  { h: 'Manufacturing & IoT', p: 'Connected-factory dashboards, predictive maintenance, and industrial IoT telemetry pipelines.' },
  { h: 'Travel & Hospitality', p: 'Booking engines, loyalty programs, and guest experience apps across web and mobile.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function Industries() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">INDUSTRIES</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span className="cur">Industries</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Domain Expertise</p>
              <h1>Industry Solutions Engineered for Real-World Impact</h1>
              <p className="lead">
                Great software understands the industry it serves. Our teams pair deep domain
                knowledge with engineering rigor to ship products that meet real regulatory,
                operational, and user demands - not just generic templates.
              </p>
              <div className="pillars">
                {['12+ Industries Served', '800+ Projects Shipped', 'HIPAA / PCI / SOC2 Ready', '10+ Years Domain Depth'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Discuss Your\nIndustry Needs'} />
          </div>
        </div>
      </section>

      <section className="featured-sec">
        <div className="wrap">
          <span className="ghost">CLIENTS</span>
          <h2>Trusted Across Sectors</h2>
          <div className="flogos">
            {clients.slice(0, 6).map(c => (
              <div key={c} className="cell">{c}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: 'var(--navy)', color: '#fff' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow" style={{ color: 'var(--orange)' }}>Where We Go Deep</p>
            <h2 style={{ color: '#fff' }}>Verticals We Know Inside Out</h2>
            <p>Five industries where AE Seller has shipped repeat, production-grade work for enterprise and startup clients alike.</p>
          </div>
          <div className="ind-grid">
            {spotlight.map(ind => (
              <div key={ind.h} className="ind">
                <img src={`https://images.unsplash.com/photo-${ind.img}?w=800&q=80`} alt={ind.h} loading="lazy" />
                <div className="ov" />
                <h3>{ind.h}</h3>
                <p>{ind.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="tech-sec">
            <span className="ghost">MORE SECTORS</span>
            <h2>Additional Industries We Serve</h2>
            <div className="tcards">
              {moreIndustries.map(s => (
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

      <section className="sec" style={{ background: 'var(--gray-bg)' }}>
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Case Study</p>
            <h2>Built for the Field, Not Just the Boardroom</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Oil & Gas / Enterprise</p>
              <h3>Kinder Morgan Pipeline App</h3>
              <p>
                A mission-critical field management and pipeline monitoring app deployed to 2,000+ engineers
                across North America, built with offline-first architecture and real-time SCADA integration.
              </p>
              <ul>
                {['Offline-first for remote field locations', 'Real-time SCADA data visualisation', '60% faster incident response time', 'Zero-downtime deployment strategy'].map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1714901423336-1884cd3fb50f?w=700&q=80" alt="Pipeline monitoring" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>12+</b><span>Industries Served</span></div>
            <div className="it"><b>800+</b><span>Projects Delivered</span></div>
            <div className="it"><b>50+</b><span>Enterprise Clients</span></div>
            <div className="it"><b>10 Yrs</b><span>Domain Experience</span></div>
          </div>
        </div>
      </div>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Don't See Your Industry?</p>
              <h2>We Adapt Fast to New Domains</h2>
              <p>Our discovery process gets our engineers fluent in your industry's compliance, workflows, and users within weeks - not months.</p>
              <Link to="/" className="btn" style={{ background: 'var(--orange)' }}>Talk to an Industry Expert</Link>
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
            <h2>Companies Across Every Sector</h2>
            <p>From regulated enterprises to fast-moving startups, our cross-industry experience means fewer surprises and faster time to market.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
