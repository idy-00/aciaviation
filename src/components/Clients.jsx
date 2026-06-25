import './Clients.css'
import '../components/ui.css'
import useFadeUp from './useFadeUp'
import { Building2, PlaneTakeoff, Package, Truck, GraduationCap } from 'lucide-react'
import airportMgmt from '/airport-mgmt.avif'

const clients = [
  { Icon: Building2, title: "Administrations de l'Aviation Civile", desc: "Organismes de réglementation, supervision, mise en oeuvre et coordination." },
  { Icon: PlaneTakeoff, title: "Aéroports", desc: "Aéroports internationaux et régionaux de toutes tailles." },
  { Icon: PlaneTakeoff, title: "Compagnies Aériennes", desc: "Compagnies régulières, charters et opérateurs de transport aérien." },
  { Icon: Package, title: "Fret Aérien", desc: "Opérateurs de fret aérien et logistique aéroportuaire." },
  { Icon: Truck, title: "Assistance Aéroportuaire", desc: "Structures d'assistance au sol et services d'escale." },
  { Icon: GraduationCap, title: "Fournisseurs & Organismes de Formation", desc: "Fournisseurs de services aériens et structures de formation spécialisées." },
]

export default function Clients() {
  const ref = useFadeUp()
  return (
    <section id="clients" className="section clients-section">
      <div className="container clients-layout">
        <div>
          <div className="eyebrow">Nos clients</div>
          <h2 className="section-title">Des acteurs clés<br />de l&apos;aviation mondiale</h2>
          <div className="divider" />
          <p className="section-lead">
            Nos clients sont principalement les organismes de réglementation et de supervision, de mise en oeuvre et de coordination, de formation et de fourniture de services dans les domaines de la sûreté et la sécurité aérienne.
          </p>

          <div className="clients-grid fade-up" ref={ref}>
            {clients.map(({ Icon, title, desc }) => (
              <div key={title} className="client-card">
                <div className="client-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="clients-img-col">
          <img src={airportMgmt} alt="Gestion aéroportuaire" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
