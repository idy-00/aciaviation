import Contact from '../components/Contact'
import './ContactPage.css'

export default function ContactPage() {
  return (
    <>
      {/* Header navy — sans photo, distinct des 3 autres pages */}
      <header className="contact-page-header">
        <div className="container">
          <nav className="contact-page-breadcrumb" aria-label="Fil d'Ariane">
            <a href="/">Accueil</a>
            <span aria-hidden="true">/</span>
            <span>Contact</span>
          </nav>
          <div className="contact-page-eyebrow">
            <span className="contact-page-eyebrow-dot" aria-hidden="true" />
            Contact
          </div>
          <h1 className="contact-page-title">Parlons de votre projet</h1>
          <p className="contact-page-sub">
            Notre équipe est à votre disposition pour étudier vos besoins et vous proposer une approche sur mesure.
          </p>
        </div>
      </header>

      <Contact noHero />
    </>
  )
}
