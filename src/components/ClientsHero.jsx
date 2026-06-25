import { Link } from 'react-router-dom'
import './ClientsHero.css'

export default function ClientsHero() {
  return (
    <section className="clients-hero" aria-label="Clients et Partenaires">

      {/* Image full-width — overlay minimal, photo visible */}
      <div className="clients-hero-img-wrap">
        <img
          src="/airport-mgmt.avif"
          alt="Gestion aéroportuaire"
          className="clients-hero-img"
        />
        <div className="clients-hero-overlay" aria-hidden="true" />
      </div>

      {/* Bloc texte blanc en dessous — séparé de l'image */}
      <div className="clients-hero-body">
        <div className="container clients-hero-inner">
          <div className="clients-hero-left">
            <nav className="clients-hero-breadcrumb" aria-label="Fil d'Ariane">
              <Link to="/">Accueil</Link>
              <span aria-hidden="true">/</span>
              <span>Clients et Partenaires</span>
            </nav>
            <div className="clients-hero-eyebrow">
              <span className="clients-hero-dot" aria-hidden="true" />
              Clients et Partenaires
            </div>
            <h1 className="clients-hero-title">
              Les acteurs clés<br />de l'aviation mondiale
            </h1>
          </div>
          <div className="clients-hero-right">
            <p className="clients-hero-sub">
              Nous accompagnons administrations, aéroports, compagnies aériennes et tous les acteurs du secteur aéronautique dans le renforcement de leur sécurité et sûreté.
            </p>
          </div>
        </div>
        {/* Trait doré pleine largeur */}
        <div className="clients-hero-rule" aria-hidden="true" />
      </div>

    </section>
  )
}
