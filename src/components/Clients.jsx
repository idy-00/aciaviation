import './Clients.css'
import '../components/ui.css'
import useFadeUp from './useFadeUp'
import { Building2, PlaneTakeoff, Package, Truck, GraduationCap, Wrench } from 'lucide-react'
import clientsMeeting from '/galerie/sommet-2013-5.jpg'
import clientsHandshake from '/galerie/sommet-2013-1.jpg'

const clients = [
  { Icon: Building2,     title: "Administrations de l'aviation civile",              desc: "Organismes de gestion, de réglementation et de supervision des activités opérationnelles de l'aviation civile." },
  { Icon: PlaneTakeoff,  title: "Gestionnaires d'aéroport",                          desc: "Mise en oeuvre et coordination des activités aéroportuaires." },
  { Icon: PlaneTakeoff,  title: "Compagnies aériennes",                              desc: "Compagnies régulières, charters et opérateurs de transport aérien." },
  { Icon: Package,       title: "Entreprises de Fret aérien",                        desc: "Opérateurs de fret aérien et logistique aéroportuaire." },
  { Icon: Truck,         title: "Structures d'assistance aéroportuaire",             desc: "Structures d'assistance au sol et services d'escale." },
  { Icon: Wrench,        title: "Organismes fournisseurs de services aériens",       desc: "Fournisseurs de services dans les domaines du transport aérien et aéroportuaire." },
  { Icon: GraduationCap, title: "Organismes de formation aux métiers de l'aviation", desc: "Structures de formation spécialisées dans les métiers de la sûreté et la sécurité aérienne." },
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
            Nos clients sont principalement les organismes de gestion, de la réglementation et de la supervision des activités opérationnelles de l'aviation civile, de la mise en oeuvre et de la coordination, de la formation, de la fourniture de services dans les domaines du secteur du transport aérien et aéroportuaires, de la sûreté et la sécurité aérienne.
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
          <img src={clientsMeeting} alt="Panel de dirigeants au Sommet ACI 2013" loading="lazy" />
          <img src={clientsHandshake} alt="Délégués au Sommet ACI Dakar 2013" loading="lazy" style={{marginTop: '16px'}} />
        </div>
      </div>
    </section>
  )
}
