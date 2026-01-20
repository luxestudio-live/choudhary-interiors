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
        'Color consultation',
        '3D visualization',
        'On-site installation management'
      ],
      price: 'Starting at ₹50,000'
    },
    {
      title: 'Commercial Office Interiors',
      description: 'Create productive, professional spaces that enhance employee experience and reflect your brand identity.',
      image: '/choudhary-interiors/images/office.jpg',
      features: [
        'Office space planning',
        'Reception & meeting areas',
        'Collaborative workspace design',
        'Ergonomic furniture selection',
        'Lighting design',
        'Project management'
      ],
      price: 'Custom Quote'
    },
    {
      title: 'Modular Furniture Solutions',
      description: 'Smart, space-efficient modular designs that maximize your space while maintaining aesthetic appeal.',
      image: '/choudhary-interiors/images/wardrobe.jpg',
      features: [
        'Custom modular design',
        'Built-in wardrobes',
        'Kitchen modules',
        'Storage solutions',
        'Quality wood finishes',
        'Expert installation'
      ],
      price: 'Starting at ₹75,000'
    },
    {
      title: 'Space Planning & Optimization',
      description: 'Strategic space planning to maximize functionality and flow in your residential or commercial space.',
      image: '/choudhary-interiors/images/bedroom.jpg',
      features: [
        'Floor plan analysis',
        'Layout optimization',
        'Traffic flow design',
        'Zoning strategies',
        'Multi-functional spaces',
        'Budget-friendly solutions'
      ],
      price: 'Starting at ₹25,000'
    },
    {
      title: 'Design Consultation',
      description: 'Get expert advice from our experienced designers to guide your interior design journey.',
      image: '/choudhary-interiors/images/kitchen.jpg',
      features: [
        'One-on-one consultation',
        'Design concept development',
        'Color & material selection',
        'Budget planning',
        'Vendor recommendations',
        'Timeline planning'
      ],
      price: 'Starting at ₹5,000'
    },
    {
      title: '3D Visualization & Rendering',
      description: 'See your design come to life before implementation with photorealistic 3D visualizations.',
      image: '/choudhary-interiors/images/proj2.jpg',
      features: [
        'High-quality 3D renderings',
        'Multiple design options',
        'Color scheme visualization',
        'Furniture placement preview',
        'Material samples',
        'Design revisions'
      ],
      price: 'Starting at ₹10,000'
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
                <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={service.image || "/placeholder.svg"} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-charcoal mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                          <span className="text-charcoal">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-ash">
                      <span className="text-xl font-semibold text-coral">{service.price}</span>
                      <Link href="/contact">
                        <Button className="bg-coral hover:bg-coral/90 text-white">
                          Inquire Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <section className="bg-white rounded-2xl p-12 shadow-md">
              <h2 className="text-3xl font-bold text-charcoal mb-8 text-center">Why Choose choudhary Interiors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-coral">✓</span>
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">Experienced designers with 10+ years in the industry</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-teal">✓</span>
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Quality Guaranteed</h3>
                  <p className="text-muted-foreground">Premium materials and flawless execution every time</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-yellow/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-yellow">✓</span>
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Transparent Pricing</h3>
                  <p className="text-muted-foreground">No hidden costs, complete value for your investment</p>
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
