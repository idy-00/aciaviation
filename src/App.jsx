import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageLayout from './pages/PageLayout'
import Home from './pages/Home'
import ExpertisePage from './pages/ExpertisePage'
import ClientsPartenairesPage from './pages/ClientsPartenairesPage'
import ActualitesPage from './pages/ActualitesPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/"                      element={<Home />} />
          <Route path="/expertise"             element={<ExpertisePage />} />
          <Route path="/clients-partenaires"   element={<ClientsPartenairesPage />} />
          <Route path="/actualites"            element={<ActualitesPage />} />
          <Route path="/contact"               element={<ContactPage />} />
          {/* Anciens chemins redirigés pour compatibilité */}
          <Route path="/clients"               element={<ClientsPartenairesPage />} />
          <Route path="/methodes"              element={<ExpertisePage />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}
