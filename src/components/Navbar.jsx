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
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Navigation principale">
      <div className="container nav-inner">

        {/* Logo complet en couleurs réelles */}
        <Link to="/" className="nav-logo" aria-label="ACI — Aviation Consulting International, page d'accueil">
          <img
            src="/logo_full.png"
            alt="Aviation Consulting International Ltd — Augmenter la maîtrise des risques et la performance"
            className="nav-logo-img"
          />
        </Link>

        {/* Desktop links */}
        <ul className={`nav-menu${open ? ' open' : ''}`} role="menubar" id="navMenu">
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
  )
}
