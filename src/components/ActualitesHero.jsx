import { Link } from 'react-router-dom'
import './ActualitesHero.css'

export default function ActualitesHero() {
  return (
    <section className="actu-hero" aria-label="Actualités">
      <div className="actu-hero-img-wrap">
        <img
          src="/galerie/sommet-2013-16.jpg"
          alt="Participants au Sommet ACI Dakar 2013"
          className="actu-hero-img"
        />
        <div className="actu-hero-overlay" aria-hidden="true" />

        <div className="actu-hero-content container">
          <nav className="actu-hero-breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>Actualités</span>
          </nav>
          <div className="actu-hero-rule" aria-hidden="true" />
          <h1 className="actu-hero-title">Événements &amp;<br />Actualités ACI</h1>
          <p className="actu-hero-sub">
            Séminaires, formations et actualités d'Aviation Consulting International.
          </p>
        </div>
      </div>
    </section>
  )
}
