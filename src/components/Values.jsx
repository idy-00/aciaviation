import './Values.css'
import '../components/ui.css'
import useFadeUp from './useFadeUp'

const values = [
  { n: '01', title: 'Intégrité', desc: 'Agir avec intégrité dans chacune de nos missions, en maintenant les plus hauts standards éthiques.' },
  { n: '02', title: 'Réponse adaptée', desc: 'Offrir à nos clients et partenaires une réponse adaptée aux exigences spécifiques de leur environnement.' },
  { n: '03', title: 'Partenariat', desc: 'Favoriser le partenariat et la coopération pour construire des relations durables fondées sur la confiance.' },
  { n: '04', title: 'Valeur individuelle', desc: 'Attacher de la valeur aux capacités individuelles de chaque expert au sein de nos équipes.' },
  { n: '05', title: 'Initiative & Comptes', desc: 'Prendre des initiatives avec discernement et rendre des comptes avec transparence sur les résultats.' },
  { n: '06', title: 'Maîtrise des risques', desc: 'Vous aider à augmenter la maîtrise des risques et la performance de vos systèmes de sécurité et de sûreté.' },
]

export default function Values() {
  const ref = useFadeUp()
  return (
    <section id="valeurs" className="section section-dark values-section">
      <div className="container">
        <div className="section-header section-header-center">
          <div className="eyebrow eyebrow-gold">Nos valeurs</div>
          <h2 className="section-title">Les principes qui guident<br />chacune de nos missions</h2>
          <p className="section-lead">
            Aviation Consulting International reste attachée au respect de principes fondamentaux qui définissent notre manière d'exercer notre métier.
          </p>
        </div>

        <div className="values-grid fade-up" ref={ref}>
          {values.map(({ n, title, desc }) => (
            <div key={n} className="value-card">
              <div className="value-num" aria-hidden="true">{n}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
