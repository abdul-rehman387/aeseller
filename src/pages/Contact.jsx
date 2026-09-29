import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { CONTACT_EMAIL, INFO_EMAIL, SERVICE_OPTIONS as services } from '../data/contact'

const details = [
  { ic: Mail, h: 'General Inquiries', p: INFO_EMAIL, href: `mailto:${INFO_EMAIL}` },
  { ic: Mail, h: 'Projects & Support', p: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { ic: Phone, h: 'Call - USA', p: '+1 (832) 555-0190', href: 'tel:+18325550190' },
  { ic: Phone, h: 'Call - Pakistan', p: '+92 305 8002387', href: 'tel:+923058002387' },
  { ic: Clock, h: 'Business Hours', p: 'Mon – Fri, 9:00 AM – 6:00 PM' },
  { ic: MapPin, h: 'Office - Coquitlam, Canada', p: '1462 Moore Pl, Coquitlam, BC V3E 3B9' },
  { ic: MapPin, h: 'Office - Karachi, Pakistan', p: 'Shahrah-e-Faisal, Karachi' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">CONTACT</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <span className="cur">Contact</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Get In Touch</p>
              <h1>Contact AE Seller</h1>
              <p className="lead">
                Have a project in mind or just exploring options? Reach out directly or send us a
                message - our team typically replies within one business day.
              </p>
              <div className="pillars">
                {['Mon – Fri, 9AM – 6PM', 'Reply Within 1 Business Day', '2 Global Offices', 'Free Project Scoping Call'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>

            <div className="form-card">
              <h3>Send Us a Message</h3>
              {sent ? (
                <p className="success-msg"><CheckCircle2 size={18} strokeWidth={1.75} /> Thanks! We'll be in touch within one business day.</p>
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
                      <option value="" disabled>Service Requested*</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="fld">
                    <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell us about your project…" rows={4} />
                  </div>
                  <p className="agree">By submitting you agree to our <Link to="/privacy">Privacy Policy</Link>.</p>
                  <div className="submit">
                    <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
                      Send Message →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <p className="eyebrow orange">Contact Details</p>
            <h2>Reach Us Directly</h2>
          </div>
          <div className="icards">
            {details.map(d => (
              <div key={d.h} className="icard">
                <div className="ic"><d.ic size={24} strokeWidth={1.75} /></div>
                <h3>{d.h}</h3>
                <p>{d.href ? <a href={d.href}>{d.p}</a> : d.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
