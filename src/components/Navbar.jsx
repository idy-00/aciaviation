import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/',                    label: 'Accueil' },
  { to: '/expertise',           label: 'Expertise & Services' },
  { to: '/clients-partenaires', label: 'Clients et Partenaires' },
  { to: '/actualites',          label: 'Actualités' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location                = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      {/* Backdrop — sibling du nav, pas dedans */}
      {open && (
        <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      )}

      {/* Tiroir mobile — sibling du nav, position:fixed fonctionne depuis le viewport */}
      <div
        className={`nav-drawer${open ? ' open' : ''}`}
        id="navMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <button
          className="nav-drawer-close"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
        >✕</button>

        <ul className="nav-drawer-list">
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`nav-link${location.pathname === l.to ? ' active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="nav-drawer-cta-wrap">
            <Link to="/contact" className="nav-cta">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Barre de navigation */}
      <nav
        className={`navbar${scrolled ? ' scrolled' : ''}`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="container nav-inner">

          <Link to="/" className="nav-logo" aria-label="ACI — page d'accueil">
            <img
              src="/logo_full.png"
              alt="Aviation Consulting International Ltd"
              className="nav-logo-img"
            />
          </Link>

          {/* Liens desktop uniquement */}
          <ul className="nav-menu" role="menubar">
            {links.map(l => (
              <li key={l.to} role="none">
                <Link
                  to={l.to}
                  role="menuitem"
                  className={`nav-link${location.pathname === l.to ? ' active' : ''}`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li role="none">
              <Link to="/contact" className="nav-cta" role="menuitem">Contact</Link>
            </li>
          </ul>

          {/* Burger */}
          <button
            className={`nav-burger${open ? ' active' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="navMenu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </>
  )
}
