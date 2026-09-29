import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/AE-Seller-Logo.png'
import QuoteModal from './QuoteModal'

const megaLinks = [
  {
    cat: 'AI & Web3 Automation',
    href: '/services',
    hot: true,
    links: [
      { label: 'Custom AI Agents & Chatbots', href: '/ai-agents-chatbots' },
      { label: 'Workflow Automation', href: '/workflow-automation' },
      { label: 'Telegram / Discord Bots', href: '/telegram-discord-bots' },
      { label: 'Crypto Trading Bots', href: '/crypto-trading-bots' },
      { label: 'Mining & Node Tools', href: '/mining-node-tools' },
    ]
  },
  {
    cat: 'Mobile App Development',
    href: '/mobile-app-development',
    links: [
      'iOS App Development',
      'Android App Development',
      { label: 'Cross-Platform Apps', href: '/cross-platform-apps' },
      { label: 'React Native Apps', href: '/react-native-apps' },
    ]
  },
  {
    cat: 'Custom Software Development',
    href: '/services',
    links: [
      { label: 'Enterprise Software', href: '/enterprise-software' },
      { label: 'SaaS Development', href: '/saas-development' },
      { label: 'Legacy Modernization', href: '/legacy-modernization' },
      { label: 'API Integration', href: '/api-integration' },
    ]
  },
  {
    cat: 'Web Development',
    href: '/services',
    links: [
      { label: 'React / Next.js', href: '/react-nextjs-development' },
      { label: 'Node.js Back-End', href: '/nodejs-development' },
      { label: 'E-Commerce', href: '/ecommerce-development' },
      { label: 'CMS Solutions', href: '/cms-solutions' },
    ]
  },
  {
    cat: 'Blockchain Development',
    href: '/services',
    links: [
      { label: 'Smart Contracts', href: '/smart-contracts' },
      { label: 'DeFi Platforms', href: '/defi-platforms' },
      { label: 'NFT Marketplace', href: '/nft-marketplace' },
      { label: 'Web3 Integration', href: '/web3-integration' },
    ]
  },
  {
    cat: 'Cloud Services',
    href: '/services',
    links: [
      { label: 'AWS Solutions', href: '/aws-solutions' },
      { label: 'Azure DevOps', href: '/azure-devops' },
      { label: 'Cloud Migration', href: '/cloud-migration' },
      { label: 'DevOps CI/CD', href: '/devops-cicd' },
    ]
  },
  {
    cat: 'Game Development',
    href: '/services',
    links: [
      { label: 'Unity 3D Games', href: '/unity-3d-games' },
      { label: 'Unreal Engine', href: '/unreal-engine' },
      { label: 'AR/VR Games', href: '/ar-vr-games' },
      { label: 'Casual Mobile Games', href: '/casual-mobile-games' },
    ]
  },
  {
    cat: 'Digital Marketing',
    href: '/services',
    links: [
      { label: 'SEO / Content', href: '/seo-content' },
      { label: 'PPC Advertising', href: '/ppc-advertising' },
      { label: 'Social Media', href: '/social-media-marketing' },
      { label: 'Brand Strategy', href: '/brand-strategy' },
    ]
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [quoteOpen, setQuoteOpen] = useState(false)
  const megaTimer = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false); setMegaOpen(false) }, [pathname])

  const openMega = () => { clearTimeout(megaTimer.current); setMegaOpen(true) }
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 160) }

  const isActive = (path) => pathname === path ? 'active' : ''

  return (
    <>
      <header className={scrolled || menuOpen ? 'scrolled' : ''}>
      <div className="wrap">
        <nav className="nav">
          <Link to="/" className="logo">
            <img src={logo} alt="AE Seller Center" />
          </Link>

          <div className={`menu${menuOpen ? ' open' : ''}`}>
            <Link to="/" className={isActive('/')}>Home</Link>

            <div
              className={`has-mega${megaOpen ? ' open' : ''}`}
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <Link to="/services" className={isActive('/services')}>
                Services <span className="chevron">▾</span>
              </Link>
            </div>

            <Link to="/industries" className={isActive('/industries')}>Industries</Link>
            <Link to="/technologies" className={isActive('/technologies')}>Technologies</Link>
            <Link to="/insights" className={isActive('/insights')}>Insights</Link>
            <Link to="/portfolio" className={isActive('/portfolio')}>Portfolio</Link>
            <Link to="/about" className={isActive('/about')}>About Us</Link>
            <button className="btn btn-sm hide-mobile" style={{marginLeft:8}} onClick={() => setQuoteOpen(true)}>Get a Quote</button>
            <button className="btn mobile-cta" onClick={() => setQuoteOpen(true)}>Get a Quote</button>
          </div>

          <button
            className={`burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </nav>
      </div>

      <div
        className={`mega-menu${megaOpen ? ' open' : ''}`}
        onMouseEnter={openMega}
        onMouseLeave={closeMega}
      >
        <div className="wrap">
          <div className="mega-inner">
            <div className="mega-promo">
              <h3>Put AI to Work</h3>
              <p>AE Seller builds AI agents, bots, and automations that run your operations around the clock.</p>
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=480&q=80"
                alt="AI automation"
              />
              <Link to="/ai-agents-chatbots" className="btn btn-sm">Explore AI Services</Link>
            </div>
            <div className="mega-cols">
              {megaLinks.map((col) => (
                <div key={col.cat} className={`mega-col-group${col.hot ? ' hot' : ''}`}>
                  <Link to={col.href} className="mega-cat">
                    {col.cat}{col.hot && <span className="mega-new">NEW</span>}
                  </Link>
                  <ul className="mega-links">
                    {col.links.map((l) => {
                      const label = typeof l === 'string' ? l : l.label
                      const href = typeof l === 'string' ? col.href : l.href
                      return <li key={label}><Link to={href}>{label}</Link></li>
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </header>
      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </>
  )
}
