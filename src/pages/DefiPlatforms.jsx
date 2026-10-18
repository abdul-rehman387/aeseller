import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Droplet, Landmark, Monitor, TrendingUp } from 'lucide-react'

const capabilities = [
  { ic: Droplet, h: 'Liquidity Protocols', p: 'AMMs and liquidity pools designed for capital efficiency and minimal slippage.' },
  { ic: Landmark, h: 'Lending & Borrowing', p: 'Collateralized lending markets with battle-tested liquidation mechanics.' },
  { ic: TrendingUp, h: 'Yield & Staking Products', p: 'Auto-compounding vaults and staking mechanisms that keep users engaged.' },
  { ic: Monitor, h: 'Web3 Front-Ends', p: 'Wallet-connected interfaces that make on-chain actions feel like using a normal app.' },
]

const stack = [
  { h: 'Solidity / Foundry', p: 'Our core toolchain for writing and fuzz-testing DeFi contract logic.', hot: true },
  { h: 'The Graph', p: 'Indexed, queryable on-chain data powering fast, responsive dashboards.' },
  { h: 'Uniswap V3 SDK', p: 'Concentrated liquidity primitives for capital-efficient AMM design.' },
  { h: 'wagmi / viem', p: 'Type-safe React hooks and clients for wallet and contract interaction.' },
  { h: 'Chainlink Price Feeds', p: 'Reliable, decentralized price data for lending and liquidation logic.' },
  { h: 'Ethers.js', p: 'Battle-tested contract interaction layer across every integration.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function DefiPlatforms() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">DEFI</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">DeFi Platforms</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Finance, Rebuilt On-Chain</p>
              <h1>DeFi Platform Development Services</h1>
              <p className="lead">
                We build decentralized finance platforms - lending protocols, DEXs, and yield products -
                engineered for security, liquidity, and a user experience that doesn't require a crypto degree.
              </p>
              <div className="pillars">
                {['Lending & Borrowing Protocols', 'DEX & AMM Development', 'Yield & Staking Products', 'Audited Contract Architecture'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nDeFi Platform'} />
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
            <h2>Protocols Built for Real Liquidity</h2>
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
            <h2>Our DeFi Stack</h2>
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
            <h2>Launching a Lending Market From Zero to $5M TVL</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">DeFi / Lending Protocol</p>
              <h3>Building a Collateralized Lending Market From the Ground Up</h3>
              <p>
                We designed and shipped a lending protocol's contracts, liquidation engine, and
                wallet-connected front end, taking it from whitepaper to $5M in total value locked.
              </p>
              <ul>
                {['$5M TVL reached within 90 days of launch', 'Liquidation engine tested against historical volatility', 'Audited before mainnet deployment', 'Wallet-connected UI live on web and mobile'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=700&q=80" alt="DeFi platform development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>15+</b><span>DeFi Protocols Shipped</span></div>
            <div className="it"><b>$50M+</b><span>Cumulative TVL Enabled</span></div>
            <div className="it"><b>0</b><span>Critical Exploits</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="DeFi Platform Investment Plans"
        subtitle="Transparent packages for protocol MVPs, full platform builds, and ongoing audits. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Building the Next DeFi Protocol?</h2>
              <p>Tell us about your protocol design and we'll map an architecture built for liquidity and security.</p>
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
            <p>We've shipped DeFi platforms for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
