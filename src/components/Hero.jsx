import './Hero.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Accueil ACI Aviation">

      {/* Bandeau image avion — 25vh, edge-to-edge, pleine envergure */}
      <div className="hero-band" aria-hidden="true">
        <img
          src="/hero.webp"
          alt=""
          className="hero-band-img"
        />
        <div className="hero-band-overlay" />
      </div>

      {/* Corps texte + CTA */}
      <div className="hero-body">
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" aria-hidden="true" />
              Cabinet de Conseil en Aviation Civile
            </div>
            <h1 className="hero-title">
              Placer la sécurité et la sûreté au cœur des objectifs stratégiques majeurs de l&apos;aviation
            </h1>
            <p className="hero-sub">
              Un Diagnostic, des Solutions, des Stratégies, des Résultats, une Performance
            </p>
            <div className="hero-actions">
              <Link to="/expertise" className="btn btn-primary">
                <ArrowRight />
                Nos services
              </Link>
              <Link to="/contact" className="btn btn-outline-navy">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bande de référentiels */}
      <div className="hero-refs" aria-label="Référentiels">
        <div className="container">
          <div className="hero-refs-inner">
            {[
              { val: 'OACI', label: 'Référentiel international' },
              { val: 'IATA', label: 'Standards IOSA' },
              { val: '360°', label: 'Accompagnement complet' },
            ].map(s => (
              <div key={s.val} className="hero-ref">
                <span className="hero-ref-val">{s.val}</span>
                <span className="hero-ref-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
