import Header            from './components/Header'
import HeroSection        from './components/HeroSection'
import StatsSection       from './components/StatsSection'
import UseCasesSection    from './components/UseCasesSection'
import AgentBuilderSection from './components/AgentBuilderSection'
import IntegrationsSection from './components/IntegrationsSection'
import CtaSection         from './components/CtaSection'
import Footer             from './components/Footer'
import UseCaseSlider from './components/UseCaseSlider'
import ContactSection from './components/ContactSection'
import CallAutomation from './components/CallAutomation'
import FAQ from './components/FAQ'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <UseCasesSection />
      <AgentBuilderSection />
      <IntegrationsSection />
      <UseCaseSlider/>
      <ContactSection/>
      <CtaSection />
      <CallAutomation />
      <FAQ />
      <Footer />
    </div>
  )
}
