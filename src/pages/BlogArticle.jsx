import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import NotFound from './NotFound'

export default function BlogArticle() {
  const { slug } = useParams()
  const post = blogPosts.find(b => b.slug === slug)

  // Must match the prerendered 404.html markup the host serves for unknown slugs.
  if (!post) return <NotFound />


  const related = blogPosts.filter(b => b.cat === post.cat && b.slug !== post.slug).slice(0, 3)

  return (
    <>
      <section className="intro" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <p className="crumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/insights">Insights</Link>
            <span className="sep">/</span>
            <span className="cur">{post.h}</span>
          </p>
          <div className="article-head">
            <span className="blog-meta">{post.topic} · {post.readTime}</span>
            <h1>{post.h}</h1>
            <p className="lead">{post.p}</p>
          </div>
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="article-hero">
            <img src={`https://images.unsplash.com/photo-${post.img}?w=1200&q=80`} alt={post.h} loading="lazy" />
          </div>

          <div className="article-body">
            {post.body.map((block, i) => (
              block.h2
                ? <h2 key={i}>{block.h2}</h2>
                : <p key={i}>{block.p}</p>
            ))}
          </div>

          <div className="article-back">
            <Link to="/insights" className="btn btn-ghost">← Back to Blog</Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="sec" style={{ background: 'var(--gray-bg)' }}>
          <div className="wrap">
            <div className="head">
              <p className="eyebrow orange">Keep Reading</p>
              <h2>Related Articles</h2>
            </div>
            <div className="blog-grid">
              {related.map(b => (
                <div key={b.slug} className="blog">
                  <div className="img">
                    <img src={`https://images.unsplash.com/photo-${b.img}?w=600&q=80`} alt={b.h} loading="lazy" />
                  </div>
                  <div className="bd">
                    <span className="blog-meta">{b.topic} · {b.readTime}</span>
                    <h3>{b.h}</h3>
                    <p>{b.p}</p>
                    <Link to={`/insights/${b.slug}`} className="more">Read Article →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band grad-blue">
            <div className="txt">
              <p className="eyebrow" style={{ color: 'var(--orange)', marginBottom: 12 }}>Ready to Start?</p>
              <h2>Turn These Ideas Into Your Next Build</h2>
              <p>Tell us what you're working on and we'll help you scope it - no pressure, just a straight answer.</p>
              <Link to="/contact" className="btn btn-orange">Discuss Your Project →</Link>
            </div>
            <div className="pic">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Team collaboration" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
