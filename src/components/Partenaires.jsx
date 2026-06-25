import './Partenaires.css'
import '../components/ui.css'

const PARTNERS = [
  {
    src: '/partner-asecna.jpeg',
    alt: 'ASECNA — Agence pour la Sécurité de la Navigation Aérienne en Afrique et Madagascar',
    name: 'ASECNA',
    url: 'https://www.asecna.aero',
  },
  {
    src: '/partner-anacim.jpeg',
    alt: 'ANACIM — Agence Nationale de l\'Aviation Civile et de la Météorologie',
    name: 'ANACIM',
    url: 'https://anacim.sn',
  },
  {
    src: '/partner-arc-en-ciel-airlines.jpeg',
    alt: 'Arc en Ciel Airlines',
    name: 'Arc en Ciel Airlines',
    url: 'https://arcencielairlines.com',
  },
  {
    src: '/partner-esa.jpeg',
    alt: 'ESA — École Supérieure Aéronautique',
    name: 'ESA',
    url: 'https://www.esa.sn',
  },
  {
    src: '/partner-adepme.jpeg',
    alt: 'ADEPME — Agence de Développement et d\'Encadrement des PME',
    name: 'ADEPME',
    url: 'https://adepme.sn',
  },
  {
    src: '/partner-3fpt.jpeg',
    alt: '3FPT — Fonds de Financement de la Formation Professionnelle et Technique',
    name: '3FPT',
    url: 'https://3fpt.sn',
  },
  {
    src: '/partner-africa-air-assistance.jpeg',
    alt: 'Africa Air Assistance',
    name: 'Africa Air Assistance',
    url: null,
  },
  {
    src: '/partner-las.jpeg',
    alt: 'LAS',
    name: 'LAS',
    url: null,
  },
  {
    src: '/partner-2as-aibd.jpeg',
    alt: '2AS — AIBD Assistance Services',
    name: '2AS AIBD',
    url: null,
  },
  {
    src: '/partner-ecole-armee-air.jpeg',
    alt: 'École de l\'Armée de l\'Air — Sénégal',
    name: 'École Armée de l\'Air',
    url: null,
  },
  {
    src: '/partner-armee-air-senegal.jpeg',
    alt: 'Armée de l\'Air — Sénégal',
    name: 'Armée de l\'Air Sénégal',
    url: null,
  },
  {
    src: '/partner-24s-technics.jpeg',
    alt: '24S Technics',
    name: '24S Technics',
    url: null,
  },
  {
    src: '/partner-heliconia-senegal.jpeg',
    alt: 'Heliconia Senegal',
    name: 'Heliconia Senegal',
    url: null,
  },
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
          {PARTNERS.map((p) =>
            p.url ? (
              <a
                key={p.src}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partenaire-slot partenaire-slot--link"
                title={p.alt}
                aria-label={`Visiter le site de ${p.name}`}
              >
                <img src={p.src} alt={p.alt} className="partenaire-logo" loading="lazy" />
              </a>
            ) : (
              <div key={p.src} className="partenaire-slot" title={p.alt}>
                <img src={p.src} alt={p.alt} className="partenaire-logo" loading="lazy" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
