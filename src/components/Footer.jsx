import { Link } from 'react-router-dom'
import './Footer.css'

const services = [
  "Évaluation & Audits",
  "Le Conseil (SMS/SeMS)",
  "La Formation",
  "Les Séminaires",
  "Référentiels & Procédures",
]

const nav = [
  { to: '/',                    label: "Accueil" },
  { to: '/expertise',           label: "Expertise & Services" },
  { to: '/clients-partenaires', label: "Clients et Partenaires" },
  { to: '/actualites',          label: "Actualités" },
  { to: '/contact',             label: "Contact" },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand — logo complet */}
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="Retour à l'accueil">
              <img
                src="/logo_full.png"
                alt="Aviation Consulting International Ltd — Augmenter la maîtrise des risques et la performance"
                className="footer-logo-img"
              />
            </Link>
            <p>
              Cabinet spécialisé en sécurité et sûreté du transport aérien. Partenaire à taille humaine, réactif et efficace, pour une activité aérienne sûre et performante.
            </p>

            <address className="footer-address">
              <div className="footer-addr-line">
                <span className="footer-addr-label">Siège</span>
                <span>N° 723 Cité HLM Grand Yoff, BP 13952 — CP 11500, Dakar (Sénégal)</span>
              </div>
              <div className="footer-addr-line">
                <span className="footer-addr-label">Tél.</span>
                <span>
                  <a href="tel:+221338580004">+221 33 858 00 04</a>{' · '}
                  <a href="tel:+221776251295">+221 77 625 12 95</a>
                </span>
              </div>
              <div className="footer-addr-line">
                <span className="footer-addr-label">
                  <WhatsAppIcon /> WA
                </span>
                <a href="https://wa.me/221777678186" target="_blank" rel="noopener noreferrer">+221 77 767 81 86</a>
              </div>
              <div className="footer-addr-line">
                <span className="footer-addr-label">Email</span>
                <a href="mailto:contact@aci-aviation.com">contact@aci-aviation.com</a>
              </div>
              <div className="footer-addr-line">
                <span className="footer-addr-label">Web</span>
                <a href="https://www.aci-aviation.com" target="_blank" rel="noopener noreferrer">www.aci-aviation.com</a>
              </div>
            </address>

            <div className="footer-badges">
              {['OACI', 'IATA', 'IOSA'].map(b => (
                <span key={b} className="footer-badge">{b}</span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map(s => (
                <li key={s}><Link to="/expertise">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {nav.map(l => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="footer-col">
            <h4>Informations légales</h4>
            <ul className="footer-legal-list">
              <li className="footer-legal-entity">
                Aviation Consulting International — SUARL<br />
                Capital social : 1&nbsp;000&nbsp;000 FCFA
              </li>
              <li><span className="footer-legal-label">RC</span><span>SN DKR 2011 B 3530</span></li>
              <li><span className="footer-legal-label">NINEA</span><span>0043530752R2</span></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Aviation Consulting International Ltd. Tous droits réservés.</p>
          <p className="footer-tagline">
            &ldquo;Un Diagnostic, des Solutions, des Stratégies, des Résultats, une Performance&rdquo;
          </p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#25d366" aria-hidden="true" style={{display:'inline',verticalAlign:'middle',marginRight:2}}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
