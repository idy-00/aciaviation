import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        subtitle="Notre équipe est à votre disposition pour étudier vos besoins et vous proposer une approche sur mesure."
        bg="contact"
      />
      <Contact noHero />
    </>
  )
}
