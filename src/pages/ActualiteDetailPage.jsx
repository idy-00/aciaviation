import { useParams, Link, Navigate } from 'react-router-dom'
import { actualites } from '../data/actualites'
import GalerieBtn from '../components/GalerieBtn'
import './ActualiteDetailPage.css'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ActualiteDetailPage() {
  const { slug } = useParams()
  const article = actualites.find(a => a.slug === slug)

  if (!article) return <Navigate to="/actualites" replace />

  const autres = actualites.filter(a => a.slug !== slug).slice(0, 2)

  return (
    <main className="detail-page">

      {/* Hero image */}
      <div className="detail-hero" style={{ marginTop: '68px' }}>
        <img src={article.image} alt={article.titre} className="detail-hero-img" />
        <div className="detail-hero-overlay" aria-hidden="true" />
      </div>

      {/* Contenu */}
      <div className="container detail-layout">

        {/* Article */}
        <article className="detail-article">
          <nav className="detail-breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span>/</span>
            <Link to="/actualites">Actualités</Link>
            <span>/</span>
            <span>{article.titre}</span>
          </nav>

          <span className="detail-cat">{article.categorie}</span>
          <time className="detail-date">{formatDate(article.date)}</time>
          <h1 className="detail-title">{article.titre}</h1>
          <p className="detail-resume">{article.resume}</p>
          <hr className="detail-divider" />

          <div className="detail-body">
            {article.contenu.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <GalerieBtn images={article.galerie} />

          <Link to="/actualites" className="detail-back">← Retour aux actualités</Link>
        </article>

        {/* Sidebar autres articles */}
        {autres.length > 0 && (
          <aside className="detail-sidebar">
            <h3 className="detail-sidebar-title">Autres actualités</h3>
            {autres.map(a => (
              <Link to={`/actualites/${a.slug}`} key={a.slug} className="detail-side-card">
                <img src={a.image} alt={a.titre} />
                <div>
                  <span className="detail-side-cat">{a.categorie}</span>
                  <p className="detail-side-title">{a.titre}</p>
                  <time className="detail-side-date">{formatDate(a.date)}</time>
                </div>
              </Link>
            ))}
          </aside>
        )}
      </div>

    </main>
  )
}
