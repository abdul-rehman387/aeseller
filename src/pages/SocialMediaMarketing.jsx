import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, BarChart3, FileEdit, MessageSquare, Palette } from 'lucide-react'

const capabilities = [
  { ic: FileEdit, h: 'Content Creation & Scheduling', p: 'A planned, consistent content calendar across every platform that matters to your audience.' },
  { ic: MessageSquare, h: 'Community Management', p: 'Real responses to comments and DMs, not an autoresponder pretending to be a person.' },
  { ic: BarChart3, h: 'Performance Analytics', p: 'Reporting tied to followers that convert, not just followers that scroll past.' },
  { ic: Palette, h: 'Brand-Consistent Creative', p: 'Visual and voice guidelines applied consistently across every post and platform.' },
]

const stack = [
  { h: 'Later / Buffer', p: 'Scheduling and publishing across every platform from one calendar.', hot: true },
  { h: 'Canva / Adobe Creative Suite', p: 'On-brand visual content produced at the pace social actually demands.' },
  { h: 'Meta Business Suite', p: 'Native management and analytics for Facebook and Instagram.' },
  { h: 'TikTok Ads Manager', p: 'Organic and paid content strategy for short-form video platforms.' },
  { h: 'Sprout Social', p: 'Unified inbox and reporting across every social channel you run.' },
  { h: 'Native Platform Analytics', p: 'Ground-truth engagement data straight from each platform, not estimates.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function SocialMediaMarketing() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">SOCIAL</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Social Media</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Organic Growth, Not Vanity Metrics</p>
              <h1>Social Media Marketing Services</h1>
              <p className="lead">
                We plan, create, and schedule social content built to grow a real audience - tied to
                business goals, not just posting for the sake of a content calendar.
              </p>
              <div className="pillars">
                {['Organic Content Creation', 'Scheduled Multi-Platform Publishing', 'Community Management', 'Growth Tied to Business Goals'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nSocial Strategy'} />
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
            <h2>Content That Grows a Real Audience</h2>
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
            <h2>Our Social Media Stack</h2>
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
            <h2>Growing an Account From 2k to 45k Followers in 6 Months</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Consumer / Social Media</p>
              <h3>A Content Calendar Built Six Weeks Ahead, Every Week</h3>
              <p>
                We rebuilt a client's content strategy around a consistent, six-week-ahead planning
                cadence and platform-native creative - turning social into their #2 acquisition channel.
              </p>
              <ul>
                {['2k to 45k followers in 6 months', 'Engagement rate 3x above industry benchmark', 'Content calendar fully planned 6 weeks ahead at all times', 'Social-driven traffic became the #2 acquisition channel'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=700&q=80" alt="Social media marketing content" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>45k+</b><span>Followers Grown (case avg.)</span></div>
            <div className="it"><b>3x</b><span>Avg. Engagement Rate</span></div>
            <div className="it"><b>6-wk</b><span>Content Runway Maintained</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Social Media Marketing Investment Plans"
        subtitle="Transparent packages for content creation, scheduling, and community management. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Grow a Real Audience?</h2>
              <p>Tell us which platforms matter most to your customers and we'll map a content strategy built for growth.</p>
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
            <p>We've run social media programs for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
