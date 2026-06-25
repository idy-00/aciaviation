import './Contact.css'
import '../components/ui.css'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'

export default function Contact({ noHero } = {}) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">

        {/* Informations de contact */}
        <div className="contact-info">
          {!noHero && (
            <>
              <div className="eyebrow">Contact</div>
              <h2 className="section-title">Parlons de<br />votre projet</h2>
              <div className="divider" />
            </>
          )}
          <p>
            Vous souhaitez renforcer la sécurité et la sûreté de vos opérations aériennes ? Notre équipe est à votre disposition pour étudier vos besoins et vous proposer une approche sur mesure.
          </p>

          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true"><MapPin size={17} strokeWidth={2} /></div>
              <div className="contact-item-text">
                <span className="contact-item-label">Siège social</span>
                <span>N° 723 Cité HLM Grand Yoff, BP : 13952 — CP 11500<br />Dakar, Sénégal</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true"><Phone size={17} strokeWidth={2} /></div>
              <div className="contact-item-text">
                <span className="contact-item-label">Téléphone</span>
                <a href="tel:+221338580004">+221 33 858 00 04</a>
                <a href="tel:+221776251295">+221 77 625 12 95</a>
                <a href="https://wa.me/221777678186" target="_blank" rel="noopener noreferrer" className="contact-whatsapp">
                  <WhatsAppIcon />
                  +221 77 767 81 86 <span className="contact-wa-label">WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true"><Mail size={17} strokeWidth={2} /></div>
              <div className="contact-item-text">
                <span className="contact-item-label">Email</span>
                <a href="mailto:contact@aci-aviation.com">contact@aci-aviation.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon" aria-hidden="true"><Clock size={17} strokeWidth={2} /></div>
              <div className="contact-item-text">
                <span className="contact-item-label">Délai de réponse</span>
                <span>Sous 48h ouvrables</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions directes — remplace le formulaire */}
        <div className="contact-actions-wrap">
          <h3 className="contact-actions-title">Nous contacter directement</h3>
          <p className="contact-actions-sub">
            Choisissez le canal qui vous convient — nous répondons sous 48h ouvrables.
          </p>

          <div className="contact-action-cards">

            <a href="tel:+221338580004" className="contact-action-card">
              <div className="contact-action-card-icon contact-action-card-icon--blue">
                <Phone size={22} strokeWidth={1.8} />
              </div>
              <div className="contact-action-card-body">
                <span className="contact-action-card-label">Appeler</span>
                <span className="contact-action-card-value">+221 33 858 00 04</span>
              </div>
              <div className="contact-action-card-arrow" aria-hidden="true">
                <ArrowRight />
              </div>
            </a>

            <a
              href="https://wa.me/221777678186"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-card contact-action-card--whatsapp"
            >
              <div className="contact-action-card-icon contact-action-card-icon--green">
                <WhatsAppIcon size={22} />
              </div>
              <div className="contact-action-card-body">
                <span className="contact-action-card-label">WhatsApp</span>
                <span className="contact-action-card-value">+221 77 767 81 86</span>
              </div>
              <div className="contact-action-card-arrow" aria-hidden="true">
                <ArrowRight />
              </div>
            </a>

            <a href="mailto:contact@aci-aviation.com" className="contact-action-card">
              <div className="contact-action-card-icon contact-action-card-icon--navy">
                <Mail size={22} strokeWidth={1.8} />
              </div>
              <div className="contact-action-card-body">
                <span className="contact-action-card-label">Envoyer un email</span>
                <span className="contact-action-card-value">contact@aci-aviation.com</span>
              </div>
              <div className="contact-action-card-arrow" aria-hidden="true">
                <ArrowRight />
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function WhatsAppIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
