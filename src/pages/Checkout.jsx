import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Elements } from '@stripe/react-stripe-js'
import { stripePromise, stripeEnabled } from '../lib/stripe'
import StripeCardForm from '../components/StripeCardForm'
import PayPalCheckoutButton, { paypalEnabled } from '../components/PayPalCheckoutButton'
import { CheckCircle2, CreditCard } from 'lucide-react'

const planFeatures = {
  Starter: ['Custom-designed website (up to 5 pages)', 'Mobile-responsive & SEO-optimized', 'Contact form & Google Maps', '2 rounds of revisions', '30 days post-launch support'],
  Growth: ['Full-featured ecommerce or web app', 'Custom design (up to 15 pages)', 'Payment gateway integration', 'User accounts & CMS included', '60 days post-launch support'],
  Enterprise: ['Full-scale custom software / platform', 'Multi-module enterprise architecture', 'API integrations & 3rd-party services', 'Dedicated project manager', '6 months priority support'],
}

export default function Checkout() {
  const [params] = useSearchParams()
  const planName = params.get('plan') || 'Growth'
  const price = Number(params.get('price')) || 1200

  const [method, setMethod] = useState('card')
  const [billing, setBilling] = useState({ name: '', email: '', company: '' })
  const [order, setOrder] = useState(null)
  const [payError, setPayError] = useState('')

  const billingValid = billing.name.trim() && billing.email.trim()
  const features = planFeatures[planName] || planFeatures.Growth

  const onChange = e => setBilling(b => ({ ...b, [e.target.name]: e.target.value }))

  const handleSuccess = (result) => {
    setPayError('')
    setOrder({ ...result, plan: planName, price })
  }

  return (
    <section className="sec checkout-sec">
      <div className="wrap">
        <p className="crumb" style={{ marginBottom: 26 }}>
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <Link to="/portfolio">Portfolio</Link>
          <span className="sep">/</span>
          <span className="cur">Checkout</span>
        </p>

        {order ? (
          <div className="order-success">
            <div className="check-ic"><CheckCircle2 size={34} strokeWidth={1.75} /></div>
            <h2>Payment Received - You're All Set!</h2>
            <p>Thanks for choosing AE Seller. A confirmation has been sent to your inbox and our team will reach out within 24 hours to kick off your <b>{order.plan}</b> project.</p>
            <div className="order-ref">
              <span>Reference</span>
              <b>{order.reference}</b>
            </div>
            <Link to="/" className="btn" style={{ marginTop: 10 }}>Back to Home</Link>
          </div>
        ) : (
          <>
            <div className="head" style={{ marginBottom: 40 }}>
              <p className="eyebrow orange">Secure Checkout</p>
              <h2>Complete Your {planName} Plan Purchase</h2>
            </div>

            <div className="checkout-grid">
              <div className="order-summary">
                <h3>Order Summary</h3>
                <div className="order-line plan-line">
                  <div>
                    <b>{planName} Plan</b>
                    <span>AE Seller development package</span>
                  </div>
                  <b>${price.toLocaleString()}</b>
                </div>
                <ul className="order-feats">
                  {features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="order-total">
                  <span>Total Due Today</span>
                  <b>${price.toLocaleString()}</b>
                </div>
                <p className="order-note">A 25% deposit may apply depending on scope - our team will confirm final terms during discovery.</p>
              </div>

              <div className="payment-card form-card">
                <h3>Billing & Payment</h3>

                <div className="fld">
                  <input name="name" value={billing.name} onChange={onChange} placeholder="Full Name*" required />
                </div>
                <div className="fld">
                  <input name="email" type="email" value={billing.email} onChange={onChange} placeholder="Email Address*" required />
                </div>
                <div className="fld">
                  <input name="company" value={billing.company} onChange={onChange} placeholder="Company (optional)" />
                </div>

                <div className="pay-tabs">
                  <button type="button" className={`pay-tab${method === 'card' ? ' active' : ''}`} onClick={() => setMethod('card')}><CreditCard size={17} strokeWidth={1.75} /> Credit / Debit Card</button>
                  <button type="button" className={`pay-tab${method === 'paypal' ? ' active' : ''}`} onClick={() => setMethod('paypal')}>PayPal</button>
                </div>

                {!billingValid && (
                  <p className="pay-hint">Enter your name and email above to continue to payment.</p>
                )}

                {billingValid && method === 'card' && (
                  stripeEnabled ? (
                    <Elements stripe={stripePromise}>
                      <StripeCardForm amount={price} planName={planName} billing={billing} onSuccess={handleSuccess} />
                    </Elements>
                  ) : (
                    <p className="pay-hint config-hint">
                      Stripe test mode isn't configured yet. Add <code>VITE_STRIPE_PUBLISHABLE_KEY</code> to your <code>.env</code> file to enable card payments - see <code>.env.example</code>.
                    </p>
                  )
                )}

                {billingValid && method === 'paypal' && (
                  paypalEnabled ? (
                    <PayPalCheckoutButton amount={price} planName={planName} onSuccess={handleSuccess} onError={() => setPayError('PayPal couldn\'t process that payment. Please try again.')} />
                  ) : (
                    <p className="pay-hint config-hint">
                      PayPal sandbox isn't configured yet. Add <code>VITE_PAYPAL_CLIENT_ID</code> to your <code>.env</code> file to enable PayPal - see <code>.env.example</code>.
                    </p>
                  )
                )}

                {payError && <p className="pay-error">{payError}</p>}

                <p className="agree" style={{ marginTop: 20 }}>
                  Payments are processed securely by Stripe and PayPal. By completing this purchase you agree to our <a href="#">Terms of Service</a>.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
