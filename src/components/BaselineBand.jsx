import './BaselineBand.css'

const items = [
  'Augmenter la maîtrise des risques et la performance',
  'Partenaire réactif et efficace',
  'Pour une activité aérienne sûre et performante',
]

export default function BaselineBand() {
  return (
    <div className="baseline-band" aria-label="Engagements ACI">
      <div className="container">
        <div className="baseline-inner">
          {items.map((text, i) => (
            <span key={i} className="baseline-item">
              {i > 0 && <span className="baseline-sep" aria-hidden="true" />}
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
