import './Methods.css'
import '../components/ui.css'
import useFadeUp from './useFadeUp'
import { Star } from 'lucide-react'

const row1 = [
  { n: '01', title: "Définition des objectifs", desc: "Identification des enjeux et cadrage des attentes de chaque mission." },
  { n: '02', title: "Présentation de concepts", desc: "Présentation des approches et référentiels applicables à la situation." },
  { n: '03', title: "Proposition de plan", desc: "Élaboration d'un plan d'action structuré et adapté au contexte." },
  { n: '04', title: "Conception schématique", desc: "Modélisation des processus et systèmes à mettre en place." },
]
const row2 = [
  { n: '05', title: "Planification", desc: "Calendrier de mise en oeuvre avec jalons et indicateurs de suivi." },
  { n: '06', title: "Mise en oeuvre", desc: "Déploiement des solutions avec support opérationnel continu." },
  { n: '07', title: "Accompagnement", desc: "Évaluation des résultats et ajustements pour optimiser la performance." },
]

export default function Methods() {
  const ref = useFadeUp()
  const ref2 = useFadeUp()
  const ref3 = useFadeUp()
  return (
    <section id="methodes" className="section methods-section">
      <div className="container">
        <div className="section-header section-header-center">
          <div className="eyebrow">Nos méthodes</div>
          <h2 className="section-title">Une approche proactive<br />et holistique</h2>
          <p className="section-lead">
            Une démarche structurée qui s&apos;appuie sur la recherche et le choix de solutions adaptées, vers une approche systémique d&apos;identification et de résolution des problèmes.
          </p>
        </div>

        <div className="methods-steps fade-up" ref={ref}>
          {row1.map(({ n, title, desc }) => (
            <div key={n} className="method-step">
              <div className="step-num">{n}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="methods-steps-row2 fade-up" ref={ref2}>
          {row2.map(({ n, title, desc }) => (
            <div key={n} className="method-step">
              <div className="step-num">{n}</div>
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          ))}
        </div>

        <div className="methods-cta fade-up" ref={ref3}>
          <div className="methods-cta-icon" aria-hidden="true">
            <Star size={28} strokeWidth={1.4} />
          </div>
          <p>
            Notre approche s&apos;appuie sur la recherche et le choix de solutions adaptées, vers une approche systémique d&apos;identification et de résolution des problèmes de sécurité et de sûreté opérationnelles.{' '}
            <strong>Augmenter la maîtrise des risques et la performance</strong> — c&apos;est notre engagement fondamental.
          </p>
        </div>
      </div>
    </section>
  )
}
