import './About.css'
import '../components/ui.css'
import useFadeUp from './useFadeUp'
import airTransport from '/air-transport.jpg'

export default function About() {
  const ref = useFadeUp()
  return (
    <section id="apropos" className="section about-section">
      <div className="container about-grid">
        <div className="about-img-col fade-up" ref={ref}>
          <img src={airTransport} alt="Transport aérien" width={600} height={500} loading="lazy" />
          <div className="about-badge" aria-label="ACI — Excellence Aéronautique">
            <strong>ACI</strong>
            <span>Excellence Aéronautique</span>
          </div>
        </div>

        <div className="about-text">
          <div className="eyebrow">À propos</div>
          <h2 className="section-title">Un cabinet d&apos;expertise<br />au service du transport aérien</h2>
          <div className="divider" />
          <p>
            <strong>Aviation Consulting International Ltd</strong> est un cabinet de conseil spécialisé dans le transport aérien, principalement dans les domaines de la sécurité et la sûreté de l&apos;aviation civile.
          </p>
          <p>
            Notre équipe s&apos;appuie sur des experts et professionnels de haut niveau jouissant d&apos;une large expérience en aviation, acquise au sein d&apos;organismes spécialisés et internationalement reconnus.
          </p>
          <p>
            Le regroupement de professionnels dans des domaines variés de l&apos;aviation opérationnelle permet d&apos;associer les compétences, de garantir des synergies et d&apos;offrir la plus large gamme de services.
          </p>

          <blockquote className="about-vision">
            &ldquo;Aviation Consulting International Ltd reste un partenaire à taille humaine, réactif et efficace, pour une activité aérienne sûre, performante.&rdquo;
          </blockquote>

          <ul className="about-list">
            {[
              "Experts en sécurité et sûreté aériennes de stature internationale",
              "Approche proactive et holistique face aux risques opérationnels",
              "Référentiels OACI, IATA et normes IOSA comme standards de travail",
              "Accompagnement personnalisé du diagnostic à la mise en oeuvre",
            ].map((item, i) => (
              <li key={i}><span className="about-list-dot" aria-hidden="true" />{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
