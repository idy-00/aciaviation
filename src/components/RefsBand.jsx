import './RefsBand.css'

const refs = [
  { name: 'OACI', sub: 'Organisation de l\'Aviation Civile Internationale' },
  { name: 'IATA', sub: 'International Air Transport Association' },
  { name: 'IOSA', sub: 'IATA Operational Safety Audit' },
  { name: 'SMS / SeMS', sub: 'Safety & Security Management Systems' },
]

export default function RefsBand() {
  return (
    <div className="refs-band" aria-label="Référentiels normatifs">
      <div className="container refs-inner">
        {refs.map((r, i) => (
          <div key={r.name} className="refs-item-wrap">
            {i > 0 && <div className="refs-sep" aria-hidden="true" />}
            <div className="refs-item">
              <strong>{r.name}</strong>
              <span>{r.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
