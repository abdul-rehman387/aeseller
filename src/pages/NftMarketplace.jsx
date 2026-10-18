import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, Briefcase, Palette, RefreshCw, Store } from 'lucide-react'

const capabilities = [
  { ic: Palette, h: 'Minting Platforms', p: 'Custom minting sites with allowlists, reveal mechanics, and metadata management.' },
  { ic: Store, h: 'Marketplace Infrastructure', p: 'Listings, offers, auctions, and royalty enforcement built into the contract layer.' },
  { ic: Briefcase, h: 'Creator Tools', p: 'Dashboards for creators to manage collections, track sales, and collect royalties.' },
  { ic: RefreshCw, h: 'Cross-Chain Support', p: 'Marketplaces that work across Ethereum, Polygon, and other chains your users already hold assets on.' },
]

const stack = [
  { h: 'ERC-721 / ERC-1155', p: 'Standard-compliant token contracts for single and multi-edition collections.', hot: true },
  { h: 'IPFS / Arweave', p: 'Decentralized, permanent storage for metadata and media assets.' },
  { h: 'OpenSea SDK', p: 'Compatibility with the largest existing NFT marketplace ecosystem.' },
  { h: 'Solidity', p: 'Custom minting, royalty, and auction logic written and tested in-house.' },
  { h: 'Ethers.js', p: 'The contract interaction layer connecting your frontend to the chain.' },
  { h: 'The Graph', p: 'Indexed collection and sales data for fast, responsive marketplace browsing.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function NftMarketplace() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">NFT</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">NFT Marketplace</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Built for Creators and Collectors</p>
              <h1>NFT Marketplace Development Services</h1>
              <p className="lead">
                We build NFT marketplaces and minting platforms - from a single-collection drop site to
                a full multi-category marketplace with royalties, auctions, and cross-chain support.
              </p>
              <div className="pillars">
                {['ERC-721 & ERC-1155 Support', 'On-Chain Royalties', 'Auction & Fixed-Price Listings', 'Gasless Minting Options'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nMarketplace'} />
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
            <h2>Marketplaces Built for Creators First</h2>
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
            <h2>Our NFT Stack</h2>
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
            <h2>A Creator Marketplace That Processed 10,000+ Mints</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">NFT / Marketplace</p>
              <h3>Launching a Multi-Creator Marketplace With On-Chain Royalties</h3>
              <p>
                We built a marketplace supporting multiple creators, with allowlist minting, on-chain
                royalty enforcement, and an auction system that held up under a high-traffic launch.
              </p>
              <ul>
                {['10,000+ mints processed at launch', '100% of royalties enforced on-chain', 'Zero downtime during the highest-traffic drop', 'Creator dashboard for sales and royalty tracking'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=700&q=80" alt="NFT marketplace development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>25+</b><span>NFT Projects Shipped</span></div>
            <div className="it"><b>10,000+</b><span>Mints Processed</span></div>
            <div className="it"><b>100%</b><span>On-Chain Royalty Enforcement</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="NFT Marketplace Investment Plans"
        subtitle="Transparent packages for minting sites, full marketplaces, and creator tooling. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Launching a Collection or Marketplace?</h2>
              <p>Tell us about your drop or platform and we'll map a build that handles launch-day traffic without breaking.</p>
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
            <p>We've shipped NFT platforms for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
