import { Link } from 'react-router-dom'

const columns = [
  {
    h: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
      { label: 'Technologies', href: '/technologies' },
      { label: 'Insights / Blog', href: '/insights' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    h: 'Services',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Mobile App Development', href: '/mobile-app-development' },
      { label: 'Cross-Platform Apps', href: '/cross-platform-apps' },
      { label: 'React Native Apps', href: '/react-native-apps' },
      { label: 'Enterprise Software', href: '/enterprise-software' },
      { label: 'SaaS Development', href: '/saas-development' },
      { label: 'Legacy Modernization', href: '/legacy-modernization' },
      { label: 'API Integration', href: '/api-integration' },
    ],
  },
  {
    h: 'AI & Web3 Automation',
    links: [
      { label: 'Custom AI Agents & Chatbots', href: '/ai-agents-chatbots' },
      { label: 'Workflow Automation', href: '/workflow-automation' },
      { label: 'Telegram / Discord Bots', href: '/telegram-discord-bots' },
      { label: 'Crypto Trading Bots', href: '/crypto-trading-bots' },
      { label: 'Mining & Node Tools', href: '/mining-node-tools' },
    ],
  },
  {
    h: 'Marketplace',
    links: [
      { label: 'PremierGarde eCommerce Store', href: 'https://premiergarde.com/', external: true },
      { label: 'Arizona Globals', href: 'https://arizonaglobals.com/', external: true },
      { label: 'The Work Frame', href: 'https://theworkframe.com/', external: true },
      { label: 'VerdaraFarm', href: 'https://verdarafarm.com', external: true },
    ],
  },
  {
    h: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
]

export default function Sitemap() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="cur">Sitemap</span>
          </p>
          <p className="eyebrow orange" style={{ marginBottom: 14 }}>Directory</p>
          <h1>Sitemap</h1>
          <p className="lead">Every page on the AE Seller site, organized in one place.</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="sitemap-grid">
            {columns.map(col => (
              <div key={col.h} className="sitemap-col">
                <h4>{col.h}</h4>
                {col.links.map(l => (
                  l.external
                    ? <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
                    : <Link key={l.label} to={l.href}>{l.label}</Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
