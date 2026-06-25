import './Missions.css'
import '../components/ui.css'
import useFadeUp from './useFadeUp'
import { Activity, CheckCircle, Zap, Shield } from 'lucide-react'
import airportPlanning from '/airport-planning.webp'

const missions = [
  {
    Icon: Activity,
    title: "Faire connaître l'évolution des exigences",
    desc: "Informer sur l'évolution continue des exigences et pratiques de l'industrie aéronautique mondiale.",
  },
  {
    Icon: CheckCircle,
    title: "Assurer la cohérence des normes",
    desc: "Garantir la cohérence et l'homogénéité des normes avec les pratiques opérationnelles.",
  },
  {
    Icon: Zap,
    title: "Augmenter la maîtrise des risques",
    desc: "Aider à maîtriser les risques et améliorer la performance des organisations aéronautiques.",
  },
  {
    Icon: Shield,
    title: "Renforcer la sûreté et la sécurité",
    desc: "Aider à renforcer la sûreté et à améliorer la sécurité pour une aviation civile plus fiable.",
  },
]

export default function Missions() {
  const ref = useFadeUp()
  return (
    <section id="missions" className="section section-alt missions-section">
      <div className="container missions-grid">
        <div>
          <div className="eyebrow">Nos missions</div>
          <h2 className="section-title">Proposer des conseils<br />de haute qualité</h2>
          <div className="divider" />
          <p className="missions-lead">
            Nos missions consistent principalement à proposer des conseils de haute qualité en sécurité et en sûreté du transport aérien, en ayant comme référentiel les normes exigeantes de qualité de ce secteur.
          </p>
          <div className="missions-list fade-up" ref={ref}>
            {missions.map(({ Icon, title, desc }) => (
              <div key={title} className="mission-item">
                <div className="mission-icon" aria-hidden="true">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="missions-img-col">
          <img src={airportPlanning} alt="Planification aéroportuaire" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
