import { Link } from 'react-router-dom'
import './ActualitesHero.css'

export default function ActualitesHero() {
  return (
    <section className="actu-hero" aria-label="Actualités">

      {/* Image pleine largeur avec découpe diagonale */}
      <div className="actu-hero-img-wrap">
        <img
          src="/actualites-hero.jpg"
          alt="Séminaire et conférence professionnelle"
          className="actu-hero-img"
        />
        {/* Card texte centrée sur l'image */}
        <div className="actu-hero-card">
          <nav className="actu-hero-breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>Actualités</span>
          </nav>
          <div className="actu-hero-eyebrow">
            <span className="actu-hero-dot" aria-hidden="true" />
            Actualités
          </div>
          <h1 className="actu-hero-title">Événements &amp;<br />Actualités ACI</h1>
          <p className="actu-hero-sub">
            Séminaires, formations et actualités<br />d'Aviation Consulting International.
          </p>
        </div>
      </div>

    </section>
  )
}
