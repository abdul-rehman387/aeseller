import { Star } from 'lucide-react'

const reviews = [
  { name: 'Michael Chen', stars: 5, quote: 'Delivered exactly what we needed, on time. Communication was excellent throughout the whole build.', face: '1500648767791-00dcc994a43e' },
  { name: 'Sarah Owens', stars: 5, quote: 'Professional team, clean code, and they actually listened to our feedback at every stage.', face: '1544005313-94ddf0286df2' },
  { name: 'James Okafor', stars: 5, quote: 'Our app launch went smoothly thanks to their QA process. Highly recommend this team.', face: '1560250097-0b93528c311a' },
  { name: 'Lena Fischer', stars: 4, quote: 'Great experience overall. A few timeline hiccups but the end result was worth the wait.', face: '1531123897727-8f129e1688ce' },
  { name: 'Tariq Hassan', stars: 5, quote: 'Best dev partner we have worked with. Already lined up our next project with them.', face: '1519345182560-3f2917c472ef' },
  { name: 'Olivia Brandt', stars: 5, quote: 'Responsive team, transparent pricing, and genuinely skilled engineers on every call.', face: '1524504388940-b1c1722653e1' },
  { name: 'Kevin Suh', stars: 5, quote: 'They rebuilt our legacy platform without a single day of downtime. Impressive work.', face: '1502685104226-ee32379fefbe' },
  { name: 'Naomi Reyes', stars: 5, quote: 'Exceeded expectations on scope and speed. Will absolutely hire this team again.', face: '1499996860823-5214fcc65f8f' },
  { name: 'Daniel Ortiz', stars: 5, quote: 'Our storefront launch was flawless. Checkout conversion is up since the rebuild.', face: '1517841905240-472988babdf9' },
  { name: 'Priya Sharma', stars: 5, quote: 'The dashboard they built gives our whole team visibility we never had before.', face: '1506794778202-cad84cf45f1d' },
  { name: 'Ahmed Malik', stars: 5, quote: 'Smooth mobile app rollout with barely any bugs at launch. Great QA discipline.', face: '1552058544-f2b08422138a' },
  { name: 'Grace Kim', stars: 4, quote: 'Ongoing support has been reliable and quick to respond whenever we need changes.', face: '1544723795-3fb6469f5b39' },
  { name: 'Robert Yates', stars: 5, quote: 'They migrated our legacy system with zero data loss and minimal downtime.', face: '1580489944761-15a19d654956' },
  { name: 'Sophia Novak', stars: 5, quote: 'Beautiful UI work. Our users noticed the difference within the first week.', face: '1521252659862-eec69941b071' },
]

export default function TrustpilotSlider() {
  const loop = [...reviews, ...reviews]

  return (
    <div className="tp-slider">
      <div className="tp-head">
        <div className="tp-badge-row">
          <div className="tp-squares">
            {[0, 1, 2, 3, 4].map(i => (
              <span key={i} className="tp-square"><Star size={14} fill="#fff" color="#fff" /></span>
            ))}
          </div>
          <div className="tp-badge-text">
            <b>Excellent</b>
            <span>AE Seller is rated Excellent on <span className="tp-brand-inline">Trustpilot</span></span>
          </div>
        </div>
        <span className="tp-rating">4.8 out of 5 · Sample reviews for illustration</span>
      </div>
      <div className="tp-track-wrap">
        <div className="tp-track">
          {loop.map((r, i) => (
            <div className="tp-card" key={`${r.name}-${i}`}>
              <div className="tp-stars">
                {[0, 1, 2, 3, 4].map(i => (
                  <Star key={i} size={15} fill={i < r.stars ? '#00b67a' : 'none'} color="#00b67a" />
                ))}
              </div>
              <p className="tp-quote">"{r.quote}"</p>
              <div className="tp-who">
                <img className="tp-avatar" src={`https://images.unsplash.com/photo-${r.face}?w=64&q=70`} alt={r.name} loading="lazy" />
                <b className="tp-name">{r.name}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
