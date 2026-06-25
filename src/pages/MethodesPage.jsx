import PageHero from '../components/PageHero'
import Methods from '../components/Methods'
import Values from '../components/Values'

export default function MethodesPage() {
  return (
    <>
      <PageHero
        eyebrow="Approche & Valeurs"
        title="Notre méthode de travail"
        subtitle="Une démarche structurée en 7 étapes, guidée par des valeurs fondamentales d'intégrité et d'excellence."
        bg="methods"
      />
      <Methods />
      <Values />
    </>
  )
}
