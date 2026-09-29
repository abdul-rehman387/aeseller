import { Link } from 'react-router-dom'
import { INFO_EMAIL } from '../data/contact'

const sections = [
  {
    h2: 'Acceptance of Terms',
    body: [
      'By accessing or using the AE Seller website, requesting a quote, or engaging us for services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our site or services.',
    ],
  },
  {
    h2: 'Acceptable Use',
    body: [
      'You agree to use our website and services only for lawful purposes. You may not attempt to gain unauthorized access to our systems, interfere with the site\'s normal operation, upload malicious code, or use our services to build or distribute unlawful, infringing, or harmful content.',
    ],
  },
  {
    h2: 'Intellectual Property Rights',
    body: [
      'Unless otherwise agreed in a signed statement of work, all code, designs, and deliverables created for a client as part of a paid engagement become the property of that client upon full payment.',
      'All other content on this website - including our branding, logos, articles, and site design - remains the property of AE Seller and may not be reproduced without permission.',
    ],
  },
  {
    h2: 'Payment Terms',
    body: [
      'Project fees, milestones, and payment schedules are defined in each client\'s individual proposal or contract. Payments processed through our site are handled by third-party processors (Stripe and PayPal); by submitting payment you also agree to their applicable terms.',
      'Invoices are due within the timeframe stated on the invoice. Late payments may result in a pause of active work until the account is brought current.',
    ],
  },
  {
    h2: 'Warranties & Disclaimers',
    body: [
      'We strive to deliver high-quality, well-tested software, and provide a defined warranty period against defects as stated in individual project contracts. Outside of an express written warranty, our website and services are provided "as is" without warranties of any kind, express or implied.',
    ],
  },
  {
    h2: 'Limitation of Liability',
    body: [
      'To the maximum extent permitted by law, AE Seller will not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability for any claim arising from a paid engagement is limited to the amount actually paid by the client for the specific service giving rise to the claim.',
    ],
  },
  {
    h2: 'Termination',
    body: [
      'Either party may terminate an active engagement in accordance with the notice terms specified in that engagement\'s contract. We reserve the right to suspend access to our website for anyone who violates these Terms.',
    ],
  },
  {
    h2: 'Governing Law',
    body: [
      'These Terms are governed by the laws of the jurisdiction in which AE Seller is registered to do business, without regard to conflict-of-law principles.',
    ],
  },
  {
    h2: 'Changes to These Terms',
    body: [
      'We may update these Terms from time to time. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.',
    ],
  },
]

export default function Terms() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="cur">Terms of Service</span>
          </p>
          <p className="eyebrow orange" style={{ marginBottom: 14 }}>Legal</p>
          <h1>Terms of Service</h1>
          <p className="lead">Last updated: January 2026. Please read these terms carefully before using our website or engaging our services.</p>
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
              Questions about these Terms? Reach out at <a href={`mailto:${INFO_EMAIL}`}>{INFO_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
