import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, X } from 'lucide-react'
import { SERVICE_OPTIONS as services } from '../data/contact'

export default function QuoteModal({ onClose }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => { e.preventDefault(); setSent(true) }

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card form-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={16} strokeWidth={2} /></button>
        <h3>Get a Free Quote</h3>
        <p className="sub">Tell us about your project and the service you need - we'll reply within 24 hours.</p>
        {sent ? (
          <p className="success-msg"><CheckCircle2 size={18} strokeWidth={1.75} /> Thanks! We'll be in touch shortly with your quote.</p>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="fld">
              <input name="name" value={form.name} onChange={onChange} placeholder="Your Name*" required />
            </div>
            <div className="fld">
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email Address*" required />
            </div>
            <div className="fld">
              <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone Number" />
            </div>
            <div className="fld">
              <select name="service" value={form.service} onChange={onChange} required>
                <option value="" disabled>Select a Service*</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="fld">
              <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell us about your project…" rows={4} />
            </div>
            <p className="agree">By submitting you agree to our <Link to="/privacy" onClick={onClose}>Privacy Policy</Link>.</p>
            <div className="submit">
              <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
                Get My Free Quote →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
