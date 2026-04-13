import Header            from './components/Header'
import HeroSection        from './components/HeroSection'
import StatsSection       from './components/StatsSection'
import AgentBuilderSection from './components/AgentBuilderSection'
import IntegrationsSection from './components/IntegrationsSection'
import Footer             from './components/Footer'
import UseCaseSlider from './components/UseCaseSlider'
import ContactSection from './components/ContactSection'
import CallAutomation from './components/CallAutomation'
import FAQ from './components/FAQ'
import CtaSection2 from './components/CtaSection2'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <AgentBuilderSection />
      <IntegrationsSection />
      <UseCaseSlider/>
      <ContactSection/>
      <CtaSection2 />
      <CallAutomation />
      <FAQ />
      <Footer />
    </div>
  )
}
