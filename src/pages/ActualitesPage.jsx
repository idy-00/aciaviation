import { Link } from 'react-router-dom'
import ActualitesHero from '../components/ActualitesHero'
import { actualites } from '../data/actualites'
import './ActualitesPage.css'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ActualitesPage() {
  return (
    <>
      <ActualitesHero />
      <section className="section actualites-section">
        <div className="container">
          {actualites.length === 0 ? (
            <div className="actualites-empty">
              <p>Aucune actualité pour le moment. Revenez bientôt.</p>
              <Link to="/contact" className="btn btn-primary actualites-cta">Nous contacter</Link>
            </div>
          ) : (
            <div className="actu-grid">
              {actualites.map((a, i) => (
                <Link to={`/actualites/${a.slug}`} key={a.slug} className={`actu-card${i === 0 ? ' actu-card--featured' : ''}`}>
                  <div className="actu-card-img-wrap">
                    <img src={a.image} alt={a.titre} loading={i === 0 ? 'eager' : 'lazy'} />
                    <span className="actu-card-cat">{a.categorie}</span>
                  </div>
                  <div className="actu-card-body">
                    <time className="actu-card-date">{formatDate(a.date)}</time>
                    <h2 className="actu-card-title">{a.titre}</h2>
                    <p className="actu-card-resume">{a.resume}</p>
                    <span className="actu-card-lire">Lire l'article →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
