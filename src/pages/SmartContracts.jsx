import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Fuel, Link2, ScrollText, Search } from 'lucide-react'

const capabilities = [
  { ic: ScrollText, h: 'Custom Contract Development', p: 'Solidity and Rust contracts built around your exact business logic, not a copy-pasted template.' },
  { ic: Search, h: 'Security Audits', p: 'Line-by-line review and automated analysis to catch vulnerabilities before mainnet deployment.' },
  { ic: Fuel, h: 'Gas Optimization', p: 'Contracts refactored to cut transaction costs without changing behavior.' },
  { ic: Link2, h: 'Multi-Chain Deployment', p: 'Deploy across Ethereum, Polygon, and other EVM-compatible chains from one codebase.' },
]

const stack = [
  { h: 'Solidity', p: 'Our primary language for writing secure, gas-efficient smart contracts.', hot: true },
  { h: 'Hardhat', p: 'Local development, testing, and deployment tooling for every contract we ship.' },
  { h: 'OpenZeppelin', p: 'Battle-tested, audited contract libraries as the foundation for custom logic.' },
  { h: 'Foundry', p: 'Fast, Solidity-native testing and fuzzing for catching edge cases before audit.' },
  { h: 'Ethers.js', p: 'The standard library connecting contracts to front-end and backend integrations.' },
  { h: 'Chainlink Oracles', p: 'Reliable off-chain data feeds for contracts that need real-world inputs.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function SmartContracts() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">CONTRACTS</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Smart Contracts</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Code You Can Trust</p>
              <h1>Smart Contract Development Services</h1>
              <p className="lead">
                We design, audit, and deploy smart contracts that handle real value - built for security
                first, since a bug in production isn't just a bug, it's a loss of funds.
              </p>
              <div className="pillars">
                {['Security-First Development', 'Third-Party Audited', 'Gas-Optimized Contracts', 'Multi-Chain Deployment'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nContract'} />
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
            <h2>Contracts Built to Hold Real Value</h2>
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
            <h2>Our Smart Contract Stack</h2>
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
            <h2>Auditing and Deploying a $10M+ TVL Vault Contract</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">DeFi / Smart Contracts</p>
              <h3>From Audit to Mainnet Without a Single Post-Launch Incident</h3>
              <p>
                We wrote, tested, and coordinated a third-party audit for a client's yield vault contract,
                then optimized it for gas before deploying across three EVM chains.
              </p>
              <ul>
                {['Zero critical findings after third-party audit', 'Gas costs cut 35% through contract refactoring', 'Deployed across 3 EVM-compatible chains', '$10M+ in value secured since launch'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=700&q=80" alt="Smart contract development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>50+</b><span>Contracts Deployed</span></div>
            <div className="it"><b>0</b><span>Post-Launch Exploits</span></div>
            <div className="it"><b>35%</b><span>Avg. Gas Savings</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Smart Contract Investment Plans"
        subtitle="Transparent packages for single contracts, full protocol builds, and security audits. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Put Value On-Chain?</h2>
              <p>Tell us what your contract needs to do and we'll map an architecture built to survive an audit.</p>
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
            <p>We've shipped smart contracts for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
