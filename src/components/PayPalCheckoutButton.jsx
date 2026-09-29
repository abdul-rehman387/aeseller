import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID

export const paypalEnabled = Boolean(clientId)

export default function PayPalCheckoutButton({ amount, planName, onSuccess, onError }) {
  return (
    <PayPalScriptProvider options={{ clientId, currency: 'USD' }}>
      <PayPalButtons
        style={{ layout: 'vertical', color: 'blue', shape: 'pill', label: 'pay' }}
        createOrder={(data, actions) => actions.order.create({
          purchase_units: [{
            description: `AE Seller - ${planName} Plan`,
            amount: { value: amount.toFixed(2), currency_code: 'USD' },
          }],
        })}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture()
          onSuccess({ method: 'paypal', reference: order.id })
        }}
        onError={(err) => onError?.(err)}
      />
    </PayPalScriptProvider>
  )
}
