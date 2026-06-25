import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Services.css'
import '../components/ui.css'
import { Check } from 'lucide-react'

import airportCapacity from '/airport-capacity.webp'
import airOperations from '/air-operations.jpg'
import flightInfo from '/flight-info.jpg'
import airlinesOps from '/airlines-ops.jpg'
import safety from '/safety.gif'

const tabs = [
  {
    id: 'evaluation',
    label: 'Évaluation',
    img: airportCapacity,
    imgAlt: 'Évaluation des systèmes aéroportuaires',
    title: 'Évaluation & Audits',
    desc: "Notre approche d'évaluation repose sur une analyse rigoureuse des systèmes en place, basée sur les normes OACI et les standards IATA. Nous diagnostiquons les écarts et proposons des plans correcteurs concrets.",
    items: [
      "Audits de la sécurité et la sûreté des compagnies aériennes",
      "Audits de la sécurité et la sûreté des aéroports",
      "Présentation du diagnostic aux responsables concernés",
      "Élaboration et mise en place des mesures correctives",
      "Accompagnement des ajustements nécessaires",
    ],
  },
  {
    id: 'conseil',
    label: 'Le Conseil',
    img: airOperations,
    imgAlt: 'Conseil en opérations aériennes',
    title: 'Le Conseil',
    desc: "Conseil et organisation, planification, management et recherche de solutions aux questions de sécurité et de sûreté. Mise en oeuvre de Systèmes de Management de la Sécurité (SMS) et de la Sûreté (SeMS).",
    items: [
      "Mise en oeuvre des systèmes SMS / SeMS",
      "Évaluation du système sur la base des normes OACI et standards IATA",
      "Mise en évidence et propositions de solutions correctives",
      "Cohérence générale des éléments du système",
      "Suivi de la qualité et de la performance",
    ],
  },
  {
    id: 'formation',
    label: 'La Formation',
    img: flightInfo,
    imgAlt: 'Formation aéronautique professionnelle',
    title: 'La Formation',
    desc: "Modules de programmes de courte durée destinés aux personnels du secteur aéronautique : formation initiale, recyclage, avancée et spécialisée. Animateurs experts spécialisés dans chaque domaine.",
    items: [
      "Transport aérien & Aviation civile",
      "Droit aérien & Réglementation aéronautique",
      "Sécurité & Sûreté aériennes",
      "Formation du personnel nouvellement recruté",
      "Formation de recyclage et avancée",
    ],
  },
  {
    id: 'seminaires',
    label: 'Les Séminaires',
    img: airlinesOps,
    imgAlt: 'Séminaires aéronautiques professionnels',
    title: 'Les Séminaires',
    desc: "Séminaires interactifs axés sur différents thèmes touchant à l'ensemble des activités du transport aérien. Animateurs experts et professionnels de l'industrie aéronautique.",
    items: [
      "Séminaires de formation et de renforcement de capacité",
      "Destinés aux personnels et professionnels du secteur aéronautique",
      "Formats interactifs adaptés aux profils des participants",
      "Animateurs spécialistes reconnus dans leur domaine",
    ],
  },
  {
    id: 'referentiels',
    label: 'Référentiels',
    img: safety,
    imgAlt: 'Référentiels et procédures de sécurité',
    title: 'Référentiels & Procédures',
    desc: "Notre référentiel est issu des Annexes de l'OACI, de l'IATA et du Manuel des normes IOSA. Ces normes constituent le premier référentiel harmonisé répondant à l'industrie aéronautique mondiale.",
    items: [
      "Plans et programmes de sûreté",
      "Manuel de Systèmes de Management de la Sécurité (SMS)",
      "Manuel de Systèmes de Management de la Sûreté (SeMS)",
      "Procédures d'audit et règles de sécurité aéroportuaire",
      "Gestion et contrôle de la documentation qualité",
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const tab = tabs[active]

  return (
    <section id="services" className="section section-alt services-section">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">Produits &amp; Services</div>
          <h2 className="section-title">Des solutions complètes<br />du diagnostic à la performance</h2>
          <p className="section-lead">
            Aviation Consulting International dispose d&apos;un large éventail de produits et services, partant du diagnostic au conseil jusqu&apos;à la mise en oeuvre.
          </p>
        </div>

        <div className="services-tabs" role="tablist" aria-label="Catégories de services">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === active}
              aria-controls={`tabpanel-${t.id}`}
              className={`tab-btn${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div
          id={`tabpanel-${tab.id}`}
          role="tabpanel"
          aria-label={tab.label}
          className="tab-panel"
        >
          <img className="tab-img" src={tab.img} alt={tab.imgAlt} loading="lazy" />
          <div className="tab-content">
            <h3>{tab.title}</h3>
            <p>{tab.desc}</p>
            <ul className="tab-list">
              {tab.items.map(item => (
                <li key={item}>
                  <span className="tab-check" aria-hidden="true">
                    <Check size={11} strokeWidth={2.8} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn btn-outline-blue services-contact-link">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
