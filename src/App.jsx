import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import PageLayout from './pages/PageLayout'
import Home from './pages/Home'
import ExpertisePage from './pages/ExpertisePage'
import ClientsPartenairesPage from './pages/ClientsPartenairesPage'
import ActualitesPage from './pages/ActualitesPage'
import ActualiteDetailPage from './pages/ActualiteDetailPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/"                      element={<Home />} />
          <Route path="/expertise"             element={<ExpertisePage />} />
          <Route path="/clients-partenaires"   element={<ClientsPartenairesPage />} />
          <Route path="/actualites"            element={<ActualitesPage />} />
          <Route path="/actualites/:slug"      element={<ActualiteDetailPage />} />
          <Route path="/contact"               element={<ContactPage />} />
          {/* Anciens chemins redirigés pour compatibilité */}
          <Route path="/clients"               element={<ClientsPartenairesPage />} />
          <Route path="/methodes"              element={<ExpertisePage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}
