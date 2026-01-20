import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Hero from '@/components/home/hero'
import TrustHighlights from '@/components/home/trust-highlights'
import Services from '@/components/home/services'
import HowItWorks from '@/components/home/how-it-works'
import FeaturedProjects from '@/components/home/featured-projects'
import Designers from '@/components/home/designers'
import Testimonials from '@/components/home/testimonials'
import CTA from '@/components/home/cta'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TrustHighlights />
        <Services />
        <HowItWorks />
        <FeaturedProjects />
        <Designers />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
