import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import FeaturesSection from "./components/FeaturesSection/FeaturesSection"
import ServicesSection from "./components/ServicesSection/ServicesSection"
import VisionSection from "./components/VisionSection/VisionSection"
import CommunitySection from "./components/CommunitySection/CommunitySection"
import Footer from "./components/Footer/Footer"
import TermsOfUse from "./components/TermsOfUse/TermsOfUse"
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy"
import "./App.css"

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('revealed'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <Router>
      <main className="min-h-screen bg-white overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeaturesSection />
              <ServicesSection />
              <VisionSection />
              <CommunitySection />
            </>
          } />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App 