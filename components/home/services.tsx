import Link from 'next/link'
import { ArrowRight, Home, Building2, Sofa, Wind, Users, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollFadeIn } from '@/components/ui/scroll-fade-in'

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a stunning space that reflects your personality and lifestyle',
      image: '/choudhary-interiors/images/living.jpg'
    },
    {
      icon: Building2,
      title: 'Commercial Interiors',
      description: 'Create productive, professional spaces that elevate your corporate environment',
      image: '/choudhary-interiors/images/office.jpg'
    },
    {
      icon: Sofa,
      title: 'Modular Furniture',
      description: 'Custom-designed modular solutions for optimal space utilization',
      image: '/choudhary-interiors/images/wardrobe.jpg'
    },
    {
      icon: Wind,
      title: 'Space Planning',
      description: 'Smart layouts and design strategies to maximize your space efficiently',
      image: '/choudhary-interiors/images/bedroom.jpg'
    },
    {
      icon: Users,
      title: 'Consultation',
      description: 'Expert advice from our seasoned designers to guide your vision',
      image: '/choudhary-interiors/images/kitchen.jpg'
    },
    {
      icon: FileText,
      title: '3D Visualization',
      description: 'See your design come to life before implementation',
      image: '/choudhary-interiors/images/proj2.jpg'
    }
  ]

  return (
    <ScrollFadeIn>
      <section className="py-16 sm:py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coral font-semibold">Our Services</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mt-2 text-balance">
              Comprehensive Design Solutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From residential spaces to commercial environments, we offer a full range of interior design services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow transition-transform hover:scale-105"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image || "/placeholder.svg"} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-coral/20">
                      <Icon className="w-5 h-5 text-coral transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="font-semibold text-charcoal text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <Link href="/services" className="inline-flex items-center text-coral hover:text-coral/80 font-medium text-sm transition-transform hover:scale-105">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-coral text-coral hover:bg-coral/5 bg-transparent transition-transform hover:scale-105">
                Explore All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
