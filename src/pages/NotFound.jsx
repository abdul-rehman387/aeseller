import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="sec" style={{ paddingTop: 140 }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <h1>Page Not Found</h1>
        <p className="lead" style={{ margin: '16px auto 28px' }}>The page you're looking for doesn't exist or has been removed.</p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="btn">Back to Home</Link>
          <Link to="/services" className="btn btn-ghost">Explore Services</Link>
        </div>
      </div>
    </section>
  )
}
