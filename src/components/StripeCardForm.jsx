import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

const cardStyle = {
  style: {
    base: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '15px',
      color: '#1A2E46',
      '::placeholder': { color: '#9aa6b5' },
    },
    invalid: { color: '#e6453c' },
  },
}

export default function StripeCardForm({ amount, planName, billing, onSuccess }) {
  const stripe = useStripe()
  const elements = useElements()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return
    setSubmitting(true)
    setError('')

    const card = elements.getElement(CardElement)
    const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
      billing_details: { name: billing.name, email: billing.email },
    })

    if (pmError) {
      setError(pmError.message)
      setSubmitting(false)
      return
    }

    // NOTE: paymentMethod.id is now safely tokenized client-side.
    // Completing the actual charge requires a backend endpoint that creates
    // and confirms a Stripe PaymentIntent with this paymentMethod.id - that
    // step needs a server (Stripe does not allow secret-key calls from the browser).
    // Wire your backend call in here, e.g.:
    //   const res = await fetch('/api/create-payment-intent', { method: 'POST', body: JSON.stringify({ amount, paymentMethodId: paymentMethod.id }) })
    console.info('Stripe PaymentMethod created (test mode):', paymentMethod.id)

    setSubmitting(false)
    onSuccess({ method: 'card', reference: paymentMethod.id })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="fld card-fld">
        <CardElement options={cardStyle} />
      </div>
      {error && <p className="pay-error">{error}</p>}
      <button type="submit" className="btn" disabled={!stripe || submitting} style={{ width: '100%', justifyContent: 'center' }}>
        {submitting ? 'Processing…' : `Pay $${amount.toLocaleString()} →`}
      </button>
    </form>
  )
}
