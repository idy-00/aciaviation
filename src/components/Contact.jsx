import { useState } from 'react'
import './Contact.css'
import '../components/ui.css'
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react'

export default function Contact({ noHero } = {}) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', organisation: '', service: '', message: '' })
  const [errors, setErrors] = useState({})

  const onChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(err => ({ ...err, [name]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.firstName.trim()) e.firstName = 'Champ obligatoire'
    if (!form.lastName.trim()) e.lastName = 'Champ obligatoire'
    if (!form.email.trim()) e.email = 'Champ obligatoire'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide'
    if (!form.message.trim()) e.message = 'Champ obligatoire'
    return e
  }

  const onSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    const subject = encodeURIComponent("Demande de contact — " + (form.service || 'ACI'))
    const body = encodeURIComponent(
      "Prénom : " + form.firstName + "\nNom : " + form.lastName +
      "\nEmail : " + form.email + "\nOrganisation : " + form.organisation +
      "\nService : " + form.service + "\n\nMessage :\n" + form.message
    )
    window.location.href = "mailto:contact@aci-aviation.com?subject=" + subject + "&body=" + body
    setSent(true)
  }

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

        {/* Formulaire */}
        <div className="contact-form-wrap">
          <h3>Envoyez-nous un message</h3>

          {sent ? (
            <div className="contact-success" role="status">
              <div className="success-check" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="11" fill="rgba(24,120,192,0.1)" stroke="#1878c0" strokeWidth="1.5"/>
                  <polyline points="7 12.5 10.5 16 17 9" stroke="#1878c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="success-title">Message envoyé !</p>
              <p className="success-sub">Nous vous répondrons dans les 48h ouvrables.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <Field id="firstName" label="Prénom" required error={errors.firstName}>
                  <input id="firstName" name="firstName" type="text" placeholder="Votre prénom" value={form.firstName} onChange={onChange} className={errors.firstName ? 'err' : ''} />
                </Field>
                <Field id="lastName" label="Nom" required error={errors.lastName}>
                  <input id="lastName" name="lastName" type="text" placeholder="Votre nom" value={form.lastName} onChange={onChange} className={errors.lastName ? 'err' : ''} />
                </Field>
              </div>
              <Field id="email" label="Email professionnel" required error={errors.email}>
                <input id="email" name="email" type="email" placeholder="votre@organisation.com" value={form.email} onChange={onChange} className={errors.email ? 'err' : ''} />
              </Field>
              <Field id="organisation" label="Organisation">
                <input id="organisation" name="organisation" type="text" placeholder="Nom de votre organisation" value={form.organisation} onChange={onChange} />
              </Field>
              <Field id="service" label="Service souhaité">
                <select id="service" name="service" value={form.service} onChange={onChange}>
                  <option value="">Sélectionnez un service</option>
                  <option value="Évaluation & Audits">Évaluation & Audits</option>
                  <option value="Conseil SMS / SeMS">Conseil SMS / SeMS</option>
                  <option value="Formation">Formation</option>
                  <option value="Séminaires">Séminaires</option>
                  <option value="Référentiels & Procédures">Référentiels & Procédures</option>
                  <option value="Autre demande">Autre demande</option>
                </select>
              </Field>
              <Field id="message" label="Message" required error={errors.message}>
                <textarea id="message" name="message" placeholder="Décrivez votre besoin ou votre projet..." rows={5} value={form.message} onChange={onChange} className={errors.message ? 'err' : ''} />
              </Field>
              <button type="submit" className="btn btn-primary contact-submit">
                <Send size={14} />
                Envoyer ma demande
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

function Field({ id, label, required, error, children }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label}{required && <span className="req" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <span className="field-error" role="alert">{error}</span>}
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{flexShrink:0}}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}
