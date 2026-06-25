import './Expertise.css'
import '../components/ui.css'
import useFadeUp from './useFadeUp'
import { ClipboardCheck, Clock, LayoutGrid, Users, Layers, Activity } from 'lucide-react'

const cards = [
  {
    Icon: ClipboardCheck,
    title: 'Audits Techniques',
    desc: "Audits des processus organisationnels et opérationnels des systèmes de management sécurité et sûreté selon les normes OACI et IATA.",
  },
  {
    Icon: Clock,
    title: 'Évaluation',
    desc: "Diagnostic approfondi des systèmes en place, identification des écarts et proposition de plans d'action correctifs adaptés.",
  },
  {
    Icon: LayoutGrid,
    title: 'Organisation',
    desc: "Structuration et optimisation des organisations pour répondre aux exigences réglementaires et améliorer la performance opérationnelle.",
  },
  {
    Icon: Users,
    title: 'Conseils',
    desc: "Conseil de haute qualité en sécurité et sûreté du transport aérien pour consolider ou bâtir le leadership de vos organisations.",
  },
  {
    Icon: Layers,
    title: 'Formation',
    desc: "Programmes de formation spécialisée et séminaires pour les personnels et professionnels du secteur aéronautique.",
  },
  {
    Icon: Activity,
    title: 'Accompagnement',
    desc: "Suivi continu de la mise en œuvre des mesures correctives et des programmes d'amélioration jusqu'à l'atteinte des objectifs.",
  },
]

export default function Expertise() {
  const ref = useFadeUp()
  return (
    <section id="expertise" className="section section-dark expertise-section">
      <div className="container">
        <div className="section-header section-header-center">
          <div className="eyebrow eyebrow-gold">Domaines d&apos;expertise</div>
          <h2 className="section-title">Une gamme complète<br />de compétences aéronautiques</h2>
          <p className="section-lead">
            Aviation Consulting International propose une large gamme de services en Audits Techniques, Évaluation, Organisation, Conseils, Formation et Accompagnement.
          </p>
        </div>

        <div className="expertise-grid fade-up" ref={ref}>
          {cards.map(({ Icon, title, desc }) => (
            <div key={title} className="expertise-card">
              <div className="expertise-icon-wrap" aria-hidden="true">
                <Icon size={22} strokeWidth={1.6} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
