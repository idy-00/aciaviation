import './ActualitesPage.css'
import ActualitesHero from '../components/ActualitesHero'
import { Link } from 'react-router-dom'

export default function ActualitesPage() {
  return (
    <>
      <ActualitesHero />
      <section className="section actualites-section">
        <div className="container">
          <div className="actualites-empty">
            <div className="actualites-empty-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
              </svg>
            </div>
            <h2 className="actualites-empty-title">Actualités à venir</h2>
            <p>
              Cette page sera alimentée prochainement avec les événements réalisés et les séminaires à venir.<br />
              Revenez bientôt pour consulter les dernières actualités d&apos;ACI.
            </p>
            <Link to="/contact" className="btn btn-primary actualites-cta">
              Nous contacter pour une question
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
