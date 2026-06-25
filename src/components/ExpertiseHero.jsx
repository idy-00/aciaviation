import { Link } from 'react-router-dom'
import './ExpertiseHero.css'

export default function ExpertiseHero() {
  return (
    <section className="expertise-hero" aria-label="Expertise & Services">

      {/* Photo cockpit — colonne gauche */}
      <div className="expertise-hero-img-col">
        <img
          src="/air-operations.jpg"
          alt="Cockpit — instruments de bord et main du pilote"
          className="expertise-hero-img"
        />
        {/* Ligne dorée décorative verticale */}
        <div className="expertise-hero-line" aria-hidden="true" />
      </div>

      {/* Texte — colonne droite sur fond navy */}
      <div className="expertise-hero-text-col">
        <nav className="expertise-hero-breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span>Expertise & Services</span>
        </nav>

        <div className="expertise-hero-eyebrow">
          <span className="expertise-hero-dot" aria-hidden="true" />
          Expertise & Services
        </div>

        <h1 className="expertise-hero-title">
          Nos compétences<br />aéronautiques
        </h1>

        <p className="expertise-hero-sub">
          Audits, conseil, formation et accompagnement — une gamme complète pour renforcer la sécurité et la sûreté de vos opérations.
        </p>

        <div className="expertise-hero-badges">
          {['Audits', 'Conseil SMS', 'Formation', 'Accompagnement'].map(b => (
            <span key={b} className="expertise-hero-badge">{b}</span>
          ))}
        </div>
      </div>

    </section>
  )
}
