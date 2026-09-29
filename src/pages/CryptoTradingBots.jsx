import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, ChartLine, Gauge, KeyRound, Shield } from 'lucide-react'

const capabilities = [
  { ic: ChartLine, h: 'Strategy Automation', p: 'Turn your rules - grid, DCA, trend-following, arbitrage - into bots that execute exactly as specified.' },
  { ic: Gauge, h: 'Backtesting & Paper Trading', p: 'Validate strategies on historical data and live paper accounts before a single real order is placed.' },
  { ic: Shield, h: 'Risk Controls', p: 'Position sizing, stop-losses, max-drawdown kill switches, and exposure limits built in from day one.' },
  { ic: KeyRound, h: 'Secure Key Management', p: 'Trade-only API keys, encrypted secrets, and IP allow-listing - withdrawal permissions are never required.' },
]

const stack = [
  { h: 'Exchange APIs', p: 'Binance, Bybit, OKX, Coinbase, Kraken, and more via REST and WebSocket feeds.', hot: true },
  { h: 'CCXT', p: 'Unified exchange library for multi-exchange strategies and portability.' },
  { h: 'Python / Node.js', p: 'Pandas, NumPy, and TA libraries for signal generation and analytics.' },
  { h: 'DEX Integrations', p: 'Uniswap, PancakeSwap, and Jupiter integrations for on-chain execution.' },
  { h: 'Time-Series Storage', p: 'TimescaleDB and InfluxDB for tick data, fills, and performance history.' },
  { h: 'Dashboards & Alerts', p: 'Web dashboards plus Telegram alerts for fills, P&L, and error states.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function CryptoTradingBots() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">TRADING</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Crypto Trading Bots</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Your Strategy, Executed 24/7</p>
              <h1>Crypto Trading Bot Development</h1>
              <p className="lead">
                We engineer custom trading bots that execute your strategy across centralized and decentralized
                exchanges - with backtesting, risk controls, and real-time monitoring built in.
              </p>
              <div className="pillars">
                {['CEX & DEX Execution', 'Backtesting Engine', 'Built-In Risk Controls', 'Live P&L Dashboards'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Automate Your\nStrategy'} />
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
            <h2>Disciplined Execution, Engineered Safely</h2>
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
            <h2>Exchanges & Tooling</h2>
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
            <p className="eyebrow orange">Example Build</p>
            <h2>From Spreadsheet Rules to an Automated Bot</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Web3 / Algorithmic Trading</p>
              <h3>Multi-Exchange Bot with Backtesting & Kill Switch</h3>
              <p>
                A typical engagement: a trader's manual rules are codified into a bot that is backtested on
                historical data, paper-traded live, then deployed with hard risk limits and Telegram alerts for
                every fill and error.
              </p>
              <ul>
                {['Strategy logic reviewed and codified with you', 'Backtest and paper-trading reports before go-live', 'Max-drawdown and exposure kill switches', 'Real-time Telegram alerts and web dashboard'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Our Work →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=700&q=80" alt="Crypto trading dashboard" loading="lazy" />
            </div>
          </div>
          <p style={{ fontSize: 12.5, color: 'var(--slate)', maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
            Risk notice: AE Seller builds software to your specifications and does not provide financial advice or
            manage funds. Cryptocurrency trading carries substantial risk, and no bot or strategy can guarantee profits.
          </p>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>10+</b><span>Supported Exchanges</span></div>
            <div className="it"><b>24/7</b><span>Automated Execution</span></div>
            <div className="it"><b>0</b><span>Withdrawal Permissions Needed</span></div>
            <div className="it"><b>100%</b><span>Strategy & Code Ownership</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Trading Bot Development Plans"
        subtitle="From a single-exchange strategy bot to a multi-venue execution platform. Every engagement starts with a free strategy review."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Have a Strategy Worth Automating?</h2>
              <p>Share your rules with us and we'll scope a bot, a backtest plan, and the risk controls it needs.</p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>Book a Free Strategy Review</Link>
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
            <p>We've built software for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
