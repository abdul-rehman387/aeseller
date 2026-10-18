import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, CreditCard, Lock, Satellite, Wallet } from 'lucide-react'

const capabilities = [
  { ic: Wallet, h: 'Wallet Integration', p: 'MetaMask, WalletConnect, and Coinbase Wallet support added to your existing frontend.' },
  { ic: Lock, h: 'Token-Gated Access', p: 'Unlock content, features, or communities based on on-chain token or NFT ownership.' },
  { ic: Satellite, h: 'On-Chain Data Indexing', p: 'Real-time on-chain data surfaced in your app without users touching a block explorer.' },
  { ic: CreditCard, h: 'Fiat-to-Crypto On-Ramps', p: 'Let non-crypto-native users buy in with a card, no exchange account required.' },
]

const stack = [
  { h: 'wagmi / viem', p: 'Type-safe React hooks and clients as the foundation for every integration.', hot: true },
  { h: 'WalletConnect', p: 'Multi-wallet support so users connect with whatever wallet they already have.' },
  { h: 'The Graph', p: 'Indexed on-chain data surfaced in your product without custom indexing infrastructure.' },
  { h: 'Alchemy / Infura', p: 'Reliable node infrastructure powering every on-chain read and write.' },
  { h: 'Ethers.js', p: 'The contract interaction layer underneath every wallet and token integration.' },
  { h: 'MoonPay / Ramp', p: 'Fiat on-ramp providers that let new users buy crypto without leaving your app.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function Web3Integration() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">WEB3</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Web3 Integration</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Bring Your Product On-Chain</p>
              <h1>Web3 Integration Services</h1>
              <p className="lead">
                We integrate wallet connections, on-chain data, and token-gated features into existing
                products - so you can add Web3 capabilities without rebuilding your app from scratch.
              </p>
              <div className="pillars">
                {['Wallet Connect Integration', 'Token-Gated Access', 'On-Chain Data Indexing', 'Fiat-to-Crypto On-Ramps'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nIntegration'} />
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
            <h2>Web3 Without a Ground-Up Rebuild</h2>
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
            <h2>Our Web3 Integration Stack</h2>
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
            <h2>Adding Token-Gated Membership to an Existing SaaS Product</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">SaaS / Web3 Integration</p>
              <h3>Layering Web3 Onto a Product That Never Had It</h3>
              <p>
                We added wallet connect and token-gated tiers to a client's existing SaaS platform,
                without touching their core application architecture or requiring a rebuild.
              </p>
              <ul>
                {['Live in 3 weeks on top of the existing product', '4 wallet providers supported at launch', 'Token-gated tiers unlocked automatically on connect', 'Zero disruption to existing non-crypto users'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=700&q=80" alt="Web3 wallet integration" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>30+</b><span>Web3 Integrations Shipped</span></div>
            <div className="it"><b>4</b><span>Wallet Providers Supported</span></div>
            <div className="it"><b>2-4 wks</b><span>Avg. Integration Time</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Web3 Integration Investment Plans"
        subtitle="Transparent packages for wallet integration, token-gating, and full Web3 front-ends. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Ready to Bring Your Product On-Chain?</h2>
              <p>Tell us what your existing product looks like and we'll map the fastest path to adding Web3 features.</p>
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
            <p>We've shipped Web3 integrations for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
