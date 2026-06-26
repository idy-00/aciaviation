import { Link } from 'react-router-dom'
import './ClientsHero.css'

export default function ClientsHero() {
  return (
    <section className="clients-hero" aria-label="Clients et Partenaires">
      <div className="container">
        <nav className="clients-hero-breadcrumb" aria-label="Fil d'Ariane">
          <Link to="/">Accueil</Link>
          <span aria-hidden="true">/</span>
          <span>Clients et Partenaires</span>
        </nav>
        <div className="clients-hero-eyebrow">Clients &amp; Partenaires</div>
        <div className="clients-hero-inner">
          <h1 className="clients-hero-title">
            Les acteurs clés<br />de l'aviation mondiale
          </h1>
          <p className="clients-hero-sub">
            Nous accompagnons administrations, aéroports, compagnies aériennes et tous les acteurs du secteur aéronautique dans le renforcement de leur sécurité et sûreté.
          </p>
        </div>
        <div className="clients-hero-rule" aria-hidden="true" />
      </div>
    </section>
  )
}
