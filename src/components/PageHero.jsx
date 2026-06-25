import { Link } from 'react-router-dom'
import './PageHero.css'

const PAGE_CONFIG = {
  expertise: {
    img:        '/air-operations.jpg',
    position:   'center 72%',          // cockpit : instruments + main pilote visibles
    ratio:      '16 / 5',              // compact, image dense en infos
    overlayTop: 'rgba(10,31,68,0.22)', // photo déjà sombre — overlay léger en haut
    overlayBot: 'rgba(10,31,68,0.60)',
    align:      'center',              // titre court → centré pour varier
  },
  clients: {
    img:        '/airport-mgmt.avif',
    position:   'center 40%',
    ratio:      '16 / 6',
    overlayTop: 'rgba(10,31,68,0.42)',
    overlayBot: 'rgba(10,31,68,0.72)',
    align:      'left',
  },
  actualites: {
    img:        '/airlines-ops.jpg',
    position:   'center 35%',
    ratio:      '16 / 6',
    overlayTop: 'rgba(10,31,68,0.42)',
    overlayBot: 'rgba(10,31,68,0.72)',
    align:      'left',
  },
  default: {
    img:        '/hero.webp',
    position:   'center 35%',
    ratio:      '16 / 6',
    overlayTop: 'rgba(10,31,68,0.42)',
    overlayBot: 'rgba(10,31,68,0.72)',
    align:      'left',
  },
}

export default function PageHero({ eyebrow, title, subtitle, bg = 'default' }) {
  const cfg = PAGE_CONFIG[bg] || PAGE_CONFIG.default

  return (
    <section
      className={`page-hero page-hero--${cfg.align}`}
      style={{ aspectRatio: cfg.ratio }}
      aria-label={title}
    >
      <img
        src={cfg.img}
        alt=""
        className="page-hero-img"
        style={{ objectPosition: cfg.position }}
        aria-hidden="true"
      />
      <div
        className="page-hero-overlay"
        style={{ background: `linear-gradient(to bottom, ${cfg.overlayTop} 0%, ${cfg.overlayBot} 100%)` }}
        aria-hidden="true"
      />
      <div className="page-hero-content">
        <div className="container">
          <nav className="page-hero-breadcrumb" aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <span className="sep" aria-hidden="true">/</span>
            <span className="current">{eyebrow}</span>
          </nav>
          <div className="page-hero-eyebrow">
            <span className="page-hero-eyebrow-dot" aria-hidden="true" />
            {eyebrow}
          </div>
          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-sub">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
