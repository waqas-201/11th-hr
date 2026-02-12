import { HeroCarousel } from '@/components/hero-carousel'
import { Footer } from '@/components/footer'
import WeArePico from '@/components/we-are-pico'
import { ContactCTA } from '@/components/contact-cta'
import WorksSlider from '@/components/works-slider'
import SustainabilityHero from '@/components/Sustainatibilit'

export default function Page() {
  return (
    <>
      <main className="min-h-screen" style={{ backgroundColor: '#000000' }}>
        <HeroCarousel />
        <WeArePico />
        <ContactCTA />
        <WorksSlider />
        <SustainabilityHero />
      </main>
      <Footer />
    </>
  )
}
