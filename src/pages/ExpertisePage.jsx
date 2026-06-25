import PageHero from '../components/PageHero'
import Expertise from '../components/Expertise'
import Services from '../components/Services'
import Methods from '../components/Methods'
import Values from '../components/Values'

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Expertise & Services"
        title="Nos compétences aéronautiques"
        subtitle="Audits, conseil, formation et accompagnement — une gamme complète pour renforcer la sécurité et la sûreté de vos opérations."
        bg="expertise"
      />
      <Expertise />
      <Services />
      <Methods />
      <Values />
    </>
  )
}
