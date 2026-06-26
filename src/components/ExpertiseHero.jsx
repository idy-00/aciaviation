import { Link } from 'react-router-dom'
import './ExpertiseHero.css'

export default function ExpertiseHero() {
  return (
    <section className="expertise-hero" aria-label="Expertise & Services">
      <div className="expertise-hero-img-wrap">
        <img
          src="/expertise-hero.jpg"
          alt="Pilotes en cockpit — opérations aériennes"
          className="expertise-hero-img"
        />
        <div className="expertise-hero-overlay" aria-hidden="true" />

        <div className="expertise-hero-text-col container">
          <nav className="expertise-hero-breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>Expertise &amp; Services</span>
          </nav>
          <div className="expertise-hero-eyebrow">
            <span className="expertise-hero-dot" aria-hidden="true" />
            Expertise &amp; Services
          </div>
          <h1 className="expertise-hero-title">
            Nos compétences<br />aéronautiques
          </h1>
          <div className="expertise-hero-bottom">
            <p className="expertise-hero-sub">
              Audits, conseil, formation et accompagnement — une gamme complète pour renforcer la sécurité et la sûreté de vos opérations.
            </p>
            <div className="expertise-hero-badges">
              {['Audits', 'Conseil SMS', 'Formation', 'Accompagnement'].map(b => (
                <span key={b} className="expertise-hero-badge">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
