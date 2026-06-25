import PageHero from '../components/PageHero'
import Clients from '../components/Clients'
import Missions from '../components/Missions'
import Partenaires from '../components/Partenaires'

export default function ClientsPartenairesPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients et Partenaires"
        title="Les acteurs clés de l'aviation mondiale"
        subtitle="Nous accompagnons administrations, aéroports, compagnies aériennes et tous les acteurs du secteur aéronautique."
        bg="clients"
      />
      <Clients />
      <Missions />
      <Partenaires />
    </>
  )
}
