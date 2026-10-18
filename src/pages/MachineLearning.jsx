import { Link } from 'react-router-dom'
import ConsultForm from '../components/ConsultForm'
import PricingSection from '../components/PricingSection'
import { ArrowRight, BarChart3, Brain, FlaskConical, Repeat } from 'lucide-react'

const capabilities = [
  { ic: Brain, h: 'Custom Model Development', p: 'Purpose-built models trained on your data, not generic off-the-shelf APIs.' },
  { ic: Repeat, h: 'MLOps Pipelines', p: 'Automated retraining, versioning, and rollback so models stay accurate over time.' },
  { ic: BarChart3, h: 'Predictive Analytics', p: 'Forecasting and anomaly detection that plugs directly into your existing dashboards.' },
  { ic: FlaskConical, h: 'Experimentation Infrastructure', p: 'A/B testing and offline evaluation so you know a model works before it ships.' },
]

const stack = [
  { h: 'PyTorch', p: 'Our default framework for training and fine-tuning custom deep learning models.', hot: true },
  { h: 'TensorFlow', p: 'Production-proven for large-scale training and mobile/edge deployment.' },
  { h: 'scikit-learn', p: 'Fast, reliable classical ML for structured/tabular prediction problems.' },
  { h: 'MLflow', p: 'Experiment tracking and model registry so every run is reproducible.' },
  { h: 'Kubeflow', p: 'Orchestrated, scalable ML pipelines running on Kubernetes.' },
  { h: 'AWS SageMaker', p: 'Managed training and hosting infrastructure for teams that want less DevOps overhead.' },
]

const clients = [
  'KINDER MORGAN','WHITE CONNECTIONS','ELITE LEGENDS','UTMB','WORLD COOP','SAUDI BELL',
  'MOBIUS','CAMH','RISE UP KINGS','TAMREENI','DIGITAL FIRST','NEXGEN SYSTEMS',
]

export default function MachineLearning() {
  return (
    <>
      <section className="intro">
        <div className="wrap">
          <span className="ghost">ML</span>
          <div className="intro-grid">
            <div>
              <p className="crumb">
                <Link to="/">Home</Link>
                <span className="sep">/</span>
                <Link to="/services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">Machine Learning</span>
              </p>
              <p className="eyebrow orange" style={{ marginBottom: 14 }}>Models That Ship to Production</p>
              <h1>Machine Learning Development Services</h1>
              <p className="lead">
                We design, train, and deploy machine learning models that solve a specific business
                problem - not research demos that never leave a notebook.
              </p>
              <div className="pillars">
                {['Production-Grade ML Pipelines', 'Custom Model Training', 'MLOps & Monitoring', 'Explainable Predictions'].map(p => (
                  <div key={p}>{p}</div>
                ))}
              </div>
            </div>
            <ConsultForm title={'Scope Your\nML Project'} />
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
            <h2>Models Built for Real Business Problems</h2>
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
            <h2>Our Machine Learning Stack</h2>
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
            <p className="eyebrow orange">Case Study</p>
            <h2>A Fraud Model That Cut False Positives 60%</h2>
          </div>
          <div className="pf-case">
            <div>
              <p className="ch">Fintech / Machine Learning</p>
              <h3>Replacing Rule-Based Fraud Checks With a Trained Model</h3>
              <p>
                We replaced a client's brittle, rule-based fraud detection system with a trained model that
                learns from transaction patterns, cutting false declines while catching more genuine fraud.
              </p>
              <ul>
                {['60% reduction in false-positive declines', 'Model retrains automatically on new transaction data', 'Sub-100ms inference on every transaction', 'Full audit trail for every flagged decision'].map(b => <li key={b}>{b}</li>)}
              </ul>
              <Link to="/portfolio" className="btn" style={{ marginTop: 20 }}>View Case Study →</Link>
            </div>
            <div className="pf-img">
              <img src="https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=700&q=80" alt="Machine learning model development" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <div className="sec" style={{ padding: '0 0 60px' }}>
        <div className="wrap">
          <div className="statbar">
            <div className="it"><b>25+</b><span>ML Models Shipped</span></div>
            <div className="it"><b>60%</b><span>Avg. False-Positive Reduction</span></div>
            <div className="it"><b>&lt;100ms</b><span>Avg. Inference Time</span></div>
            <div className="it"><b>4.9★</b><span>Average Client Rating</span></div>
          </div>
        </div>
      </div>

      <PricingSection
        title="Machine Learning Investment Plans"
        subtitle="Transparent packages for pilot models, production pipelines, and full MLOps builds. Every project starts with a free discovery call."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Get Started</p>
              <h2>Have a Prediction Problem Worth Solving?</h2>
              <p>Tell us what you're trying to predict or automate and we'll map a model that actually ships.</p>
              <Link to="/contact" className="btn" style={{ background: 'var(--orange)' }}>Book a Free Consultation</Link>
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
            <p>We've shipped machine learning models for organizations across 15+ countries and 8 industries.</p>
          </div>
          <div className="clogos">
            {clients.map(c => <div key={c} className="cell">{c}</div>)}
          </div>
        </div>
      </div>
    </>
  )
}
