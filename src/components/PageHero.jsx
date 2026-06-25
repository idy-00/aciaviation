import './PageHero.css'

const BG_IMAGES = {
  expertise:  '/air-operations.jpg',
  clients:    '/airport-mgmt.avif',
  actualites: '/airlines-ops.jpg',
  contact:    '/air-transport.jpg',
  default:    '/hero.webp',
}

export default function PageHero({ eyebrow, title, subtitle, bg = 'default' }) {
  const imgSrc = BG_IMAGES[bg] || BG_IMAGES.default

  return (
    <section className="page-hero" aria-label={title}>

      {/* Bandeau image — visible, ratio cinématique */}
      <div className="page-hero-band" aria-hidden="true">
        <img
          src={imgSrc}
          alt=""
          className="page-hero-band-img"
        />
        <div className="page-hero-band-overlay" />
      </div>

      {/* Corps blanc — même pattern que la page d'accueil */}
      <div className="page-hero-body">
        <div className="container">

          {/* Fil d'Ariane */}
          <nav className="page-hero-breadcrumb" aria-label="Fil d'Ariane">
            <a href="/">Accueil</a>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">{eyebrow}</span>
          </nav>

          {/* Eyebrow */}
          <div className="page-hero-eyebrow">
            <span className="page-hero-eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </div>

          {/* Titre */}
          <h1 className="page-hero-title">{title}</h1>

          {/* Sous-titre */}
          {subtitle && <p className="page-hero-sub">{subtitle}</p>}

        </div>
      </div>

    </section>
  )
}
