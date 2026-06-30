import './Missions.css'
import '../components/ui.css'
import useFadeUp from './useFadeUp'
import { Activity, CheckCircle, Zap, Shield } from 'lucide-react'

const missions = [
  {
    Icon: Activity,
    title: "Faire connaître l'évolution des exigences",
    desc: "Informer sur l'évolution continue des exigences et pratiques de l'industrie aéronautique mondiale.",
    color: 'var(--blue)',
    bg: 'var(--blue-light)',
  },
  {
    Icon: CheckCircle,
    title: "Assurer la cohérence des normes",
    desc: "Garantir la cohérence et l'homogénéité des normes avec les pratiques opérationnelles.",
    color: 'var(--blue)',
    bg: 'var(--blue-light)',
  },
  {
    Icon: Zap,
    title: "Augmenter la maîtrise des risques",
    desc: "Aider à maîtriser les risques et améliorer la performance des organisations aéronautiques.",
    color: 'var(--blue)',
    bg: 'var(--blue-light)',
  },
  {
    Icon: Shield,
    title: "Renforcer la sûreté et la sécurité",
    desc: "Aider à renforcer la sûreté et à améliorer la sécurité pour une aviation civile plus fiable.",
    color: 'var(--blue)',
    bg: 'var(--blue-light)',
  },
]

function MissionsIllustration() {
  return (
    <div className="mi-wrap" aria-hidden="true">

      {/* Fond : grille de points */}
      <svg className="mi-dots" viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 9 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 40 + 20}
              cy={row * 40 + 20}
              r="1.5"
              fill="rgba(8,20,46,0.08)"
            />
          ))
        )}
      </svg>

      {/* Lignes connecteurs vers les 4 nœuds */}
      <svg className="mi-connectors" viewBox="0 0 360 400" xmlns="http://www.w3.org/2000/svg">
        {/* Haut-gauche */}
        <line x1="180" y1="200" x2="72"  y2="88"  stroke="rgba(24,120,192,0.18)" strokeWidth="1" strokeDasharray="4 4"/>
        {/* Haut-droite */}
        <line x1="180" y1="200" x2="288" y2="88"  stroke="rgba(24,120,192,0.18)" strokeWidth="1" strokeDasharray="4 4"/>
        {/* Bas-gauche */}
        <line x1="180" y1="200" x2="72"  y2="312" stroke="rgba(24,120,192,0.18)" strokeWidth="1" strokeDasharray="4 4"/>
        {/* Bas-droite */}
        <line x1="180" y1="200" x2="288" y2="312" stroke="rgba(24,120,192,0.18)" strokeWidth="1" strokeDasharray="4 4"/>
        {/* Arc décoratif */}
        <circle cx="180" cy="200" r="110" fill="none" stroke="rgba(24,120,192,0.07)" strokeWidth="1"/>
        <circle cx="180" cy="200" r="68"  fill="none" stroke="rgba(24,120,192,0.10)" strokeWidth="1"/>
      </svg>

      {/* Nœud central */}
      <div className="mi-center">
        <div className="mi-center-ring" />
        <div className="mi-center-inner">
          {/* Avion SVG propre */}
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <path d="M24 4 L32 28 L24 24 L16 28 Z" fill="white" opacity="0.95"/>
            <path d="M12 20 L24 17 L36 20 L36 22 L24 19 L12 22 Z" fill="white" opacity="0.6"/>
            <path d="M18 28 L24 27 L30 28 L28 34 L24 33 L20 34 Z" fill="white" opacity="0.5"/>
          </svg>
        </div>
        {/* Badge gold */}
        <div className="mi-center-badge">360°</div>
      </div>

      {/* 4 nœuds orbite */}
      <div className="mi-node mi-node--tl">
        <Activity size={18} strokeWidth={1.8} />
        <span>Exigences</span>
      </div>
      <div className="mi-node mi-node--tr">
        <CheckCircle size={18} strokeWidth={1.8} />
        <span>Normes</span>
      </div>
      <div className="mi-node mi-node--bl">
        <Zap size={18} strokeWidth={1.8} />
        <span>Risques</span>
      </div>
      <div className="mi-node mi-node--br">
        <Shield size={18} strokeWidth={1.8} />
        <span>Sûreté</span>
      </div>

      {/* Tags référentiels */}
      <div className="mi-tag mi-tag--left">OACI</div>
      <div className="mi-tag mi-tag--right">IATA</div>
      <div className="mi-tag mi-tag--bottom">SMS · SeMS</div>
    </div>
  )
}

export default function Missions() {
  const ref = useFadeUp()
  return (
    <section id="missions" className="section section-alt missions-section">
      <div className="container missions-grid">

        {/* Colonne gauche : texte + liste */}
        <div>
          <div className="eyebrow">Nos missions</div>
          <h2 className="section-title">Proposer des conseils<br />de haute qualité</h2>
          <div className="divider" />
          <p className="missions-lead">
            Proposer des conseils et de l'accompagnement en adéquation avec les besoins de votre organisation
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

        {/* Colonne droite : illustration */}
        <div className="missions-illus-col">
          <MissionsIllustration />
        </div>

      </div>
    </section>
  )
}
