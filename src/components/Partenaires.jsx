import './Partenaires.css'
import '../components/ui.css'

const PARTNERS = [
  { src: '/partner-africa-air-assistance.jpeg', alt: 'Africa Air Assistance' },
  { src: '/partner-arc-en-ciel-airlines.jpeg',  alt: 'Arc en Ciel Airlines' },
  { src: '/partner-asecna.jpeg',                alt: 'ASECNA' },
  { src: '/partner-anacim.jpeg',                alt: 'ANACIM' },
  { src: '/partner-esa.jpeg',                   alt: 'ESA — École Supérieure Aéronautique' },
  { src: '/partner-armee-air-senegal.jpeg',     alt: "Armée de l'Air Sénégal" },
  { src: '/partner-24s-technics.jpeg',          alt: '24S Technics' },
  { src: '/partner-heliconia-senegal.jpeg',     alt: 'Heliconia Senegal' },
  { src: '/partner-2as-aibd.jpeg',              alt: '2AS AIBD Assistance Services' },
  { src: '/partner-las.jpeg',                   alt: 'LAS' },
  { src: '/partner-adepme.jpeg',                alt: 'ADEPME' },
  { src: '/partner-3fpt.jpeg',                  alt: '3FPT' },
  { src: '/partner-ecole-armee-air.jpeg',       alt: "École de l'Armée de l'Air Sénégal" },
]

export default function Partenaires() {
  return (
    <section className="section partenaires-section">
      <div className="container">
        <div className="section-header section-header-center">
          <div className="eyebrow">Partenaires</div>
          <h2 className="section-title">Nos partenaires institutionnels</h2>
          <p className="section-lead">
            ACI collabore avec des institutions, compagnies et organismes de référence dans le secteur aéronautique africain et international.
          </p>
        </div>

        <div className="partenaires-grid">
          {PARTNERS.map((p) => (
            <div key={p.src} className="partenaire-slot">
              <img src={p.src} alt={p.alt} className="partenaire-logo" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
