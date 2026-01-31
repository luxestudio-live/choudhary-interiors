import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Residential Interior Design',
      description: 'Transform your home into a stunning living space that perfectly reflects your lifestyle and personality.',
      image: '/choudhary-interiors/images/living.jpg',
      features: [
        'Complete home interior design',
        'Bedroom & living area design',
        'Kitchen & dining solutions',
        'Color selection guidance',
        'False ceiling & lighting planning',
        'On-site installation management'
      ],
      price: 'Custom Quote'
    },
    {
      title: 'Commercial Office Interiors',
      description: 'Create productive, professional spaces that enhance employee experience and reflect your brand identity.',
      image: '/choudhary-interiors/images/office.jpg',
      features: [
        'Office layout planning',
        'Reception & meeting areas',
        'Collaborative workspace design',
        'Ergonomic furniture selection',
        'Lighting design',
        'Project management'
      ],
      price: 'Custom Quote'
    },
    {
      title: 'Modular Kitchen Solutions',
      description: 'Custom modular kitchens that blend aesthetics with everyday functionality.',
      image: '/choudhary-interiors/images/kitchen.jpg',
      features: [
        'Custom kitchen layout design',
        'Cabinetry & lofts',
        'Countertops & backsplashes',
        'Hardware & fittings',
        'Appliance integration',
        'Expert installation'
      ],
      price: 'Custom Quote'
    },
    {
      title: 'False Ceiling & Lighting',
      description: 'Stylish ceiling designs with layered lighting for the perfect ambience.',
      image: '/choudhary-interiors/images/bedroom.jpg',
      features: [
        'Gypsum & POP ceiling work',
        'Cove & spot lighting',
        'Electrical layout planning',
        'LED profile integration',
        'Acoustic options',
        'Finishing & painting'
      ],
      price: 'Custom Quote'
    },
    {
      title: 'Wardrobe & Storage',
      description: 'Space-saving wardrobes and storage units tailored to your room and lifestyle.',
      image: '/choudhary-interiors/images/wardrobe.jpg',
      features: [
        'Sliding & hinged wardrobes',
        'Loft & overhead storage',
        'Internal organizers',
        'Custom finishes',
        'Mirror & glass options',
        'On-site installation'
      ],
      price: 'Custom Quote'
    },
    {
      title: 'Civil Work',
      description: 'Reliable civil work to prepare and perfect your interiors before finishing.',
      image: '/choudhary-interiors/images/proj2.jpg',
      features: [
        'Demolition & masonry',
        'Plumbing & electrical coordination',
        'Flooring & tiling prep',
        'Wall finishing & plastering',
        'Partition work',
        'Site supervision'
      ],
      price: 'Custom Quote'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-coral to-teal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Comprehensive interior design solutions tailored to your needs, from concept to completion.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24 bg-soft-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-coral/30 hover:border-coral">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={service.image || "/placeholder.svg"} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-charcoal group-hover:text-coral transition-colors flex-1">{service.title}</h3>
                      <span className="ml-2 px-3 py-1 bg-coral/10 text-coral text-sm font-semibold rounded-full group-hover:bg-coral group-hover:text-white transition-all">New</span>
                    </div>
                    <p className="text-muted-foreground mb-6 group-hover:text-charcoal transition-colors">{service.description}</p>
                    
                    <div className="space-y-2 mb-8 bg-soft-white/50 p-4 rounded-lg group-hover:bg-coral/5 transition-colors">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span className="text-sm text-charcoal">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-ash/30 group-hover:border-coral/30 transition-colors">
                      <span className="text-xl font-bold text-coral group-hover:scale-110 transition-transform origin-left">{service.price}</span>
                      <Link href="/contact">
                        <Button className="bg-coral hover:bg-coral/90 text-white shadow-md hover:shadow-lg transition-all group-hover:scale-105">
                          Inquire Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <section className="bg-gradient-to-br from-white to-soft-white rounded-2xl p-12 shadow-md border border-ash/20">
              <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Why Choose choudhary Interiors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group text-center p-6 rounded-xl hover:bg-white transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral to-coral/60 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <span className="text-3xl font-bold text-white">✓</span>
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2 group-hover:text-coral transition-colors">Expert Team</h3>
                  <p className="text-muted-foreground group-hover:text-charcoal transition-colors">Experienced designers with 20+ years in the industry</p>
                </div>
                <div className="group text-center p-6 rounded-xl hover:bg-white transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal to-teal/60 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <span className="text-3xl font-bold text-white">✓</span>
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2 group-hover:text-teal transition-colors">Quality Guaranteed</h3>
                  <p className="text-muted-foreground group-hover:text-charcoal transition-colors">Premium materials and flawless execution every time</p>
                </div>
                <div className="group text-center p-6 rounded-xl hover:bg-white transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow to-yellow/60 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <span className="text-3xl font-bold text-white">✓</span>
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2 group-hover:text-yellow transition-colors">Transparent Pricing</h3>
                  <p className="text-muted-foreground group-hover:text-charcoal transition-colors">No hidden costs, complete value for your investment</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-charcoal to-charcoal/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get in touch with our team today for a free consultation and personalized quote.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
