import PageHero from '../components/PageHero'
import Clients from '../components/Clients'
import Missions from '../components/Missions'

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos clients"
        title="Les acteurs clés de l'aviation"
        subtitle="Nous accompagnons les administrations, aéroports, compagnies aériennes et tous les acteurs du secteur aéronautique."
        bg="clients"
      />
      <Clients />
      <Missions />
    </>
  )
}
