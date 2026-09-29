import { Link } from 'react-router-dom'
import { INFO_EMAIL } from '../data/contact'

const sections = [
  {
    h2: 'Information We Collect',
    body: [
      'We collect information you provide directly to us - such as your name, email address, phone number, and project details - when you submit a contact form, request a quote, or communicate with our team.',
      'We also automatically collect limited technical information when you visit our site, including your IP address, browser type, device type, and pages viewed, to help us understand how our site is used and to keep it secure.',
    ],
  },
  {
    h2: 'How We Use Your Information',
    body: [
      'We use the information we collect to respond to inquiries, scope and deliver projects, send project updates, improve our website and services, and comply with legal obligations.',
      'We do not sell your personal information to third parties.',
    ],
  },
  {
    h2: 'Cookies & Tracking Technologies',
    body: [
      'We use cookies and similar technologies to keep you signed in where applicable, remember your preferences, and understand aggregate site usage through analytics tools. You can disable cookies in your browser settings, though some site features may not function correctly without them.',
    ],
  },
  {
    h2: 'Payment Processors',
    body: [
      'When you make a payment through our site, your payment details are processed directly by our third-party payment processors, including Stripe and PayPal. We do not store your full card number, CVV, or other sensitive payment credentials on our own servers - that data is handled under each processor\'s own privacy policy and security standards (including PCI-DSS compliance).',
    ],
  },
  {
    h2: 'Your Rights Under GDPR & CCPA',
    body: [
      'If you are located in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR) to access, correct, export, or request deletion of your personal data, and to object to or restrict certain processing.',
      'If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, request its deletion, and opt out of its sale (we do not sell personal information).',
      'To exercise any of these rights, contact us using the details below and we will respond within the timeframe required by applicable law.',
    ],
  },
  {
    h2: 'Data Retention & Security',
    body: [
      'We retain personal information only as long as necessary to fulfill the purposes described in this policy or as required by law, and we apply reasonable administrative and technical safeguards to protect it against unauthorized access, alteration, or loss.',
    ],
  },
  {
    h2: 'Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. Material changes will be reflected by an updated "last revised" date on this page.',
    ],
  },
]

export default function Privacy() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="cur">Privacy Policy</span>
          </p>
          <p className="eyebrow orange" style={{ marginBottom: 14 }}>Legal</p>
          <h1>Privacy Policy</h1>
          <p className="lead">Last updated: January 2026. This policy explains what information AE Seller collects, how we use it, and the choices you have.</p>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="article-body">
            {sections.map(s => (
              <div key={s.h2}>
                <h2>{s.h2}</h2>
                {s.body.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ))}
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or want to exercise your data rights, contact us
              at <a href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
