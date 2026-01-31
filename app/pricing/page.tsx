import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PricingPage() {
  const packages = [
    {
      name: 'False Ceiling & Lighting',
      price: '₹15,000',
      description: 'Ideal for elevating ambience with modern ceiling and lighting',
      duration: 'Per room',
      features: [
        'Ceiling design options',
        'Lighting layout plan',
        'Cove & spot lighting',
        'Material guidance',
        'Execution timeline',
        'On-site support'
      ],
      popular: false
    },
    {
      name: 'Design Package',
      price: '₹50,000',
      description: 'Ideal for single rooms or small spaces',
      duration: 'Per room',
      features: [
        'Complete design briefing',
        'Wardrobe & storage planning',
        'False ceiling & lighting planning',
        'Color & material selection',
        'Furniture recommendations',
        'Vendor coordination',
        'Installation supervision',
        '3 months support'
      ],
      popular: true
    },
    {
      name: 'Premium Package',
      price: '₹2,00,000+',
      description: 'Comprehensive design for entire homes',
      duration: 'Full home',
      features: [
        'Complete home design',
        'Multiple room designs',
        'Detailed lighting design',
        'Premium material selection',
        'Modular kitchen design',
        'Project management',
        'Interior styling',
        '6 months support',
        'Post-project maintenance'
      ],
      popular: false
    },
    {
      name: 'Commercial',
      price: 'Custom Quote',
      description: 'Tailored solutions for offices & businesses',
      duration: 'Project-based',
      features: [
        'Commercial space design',
        'Brand integration',
        'Space optimization',
        'Compliance support',
        'Employee wellness design',
        'Full project management',
        'On-site coordination',
        'Timeline guarantee',
        'Dedicated project team'
      ],
      popular: false
    }
  ]

  const addOns = [
    { name: 'False Ceiling & Lighting', price: '₹12,000', description: 'Per room' },
    { name: 'Modular Kitchen Design', price: '₹25,000', description: 'Per kitchen' },
    { name: 'Wardrobe & Storage', price: '₹18,000', description: 'Per unit' },
    { name: 'Civil Work', price: '₹20,000', description: 'Per room' },
    { name: 'Material Sourcing', price: '₹15,000', description: 'Service charge' },
    { name: 'Site Supervision', price: '₹2,500/day', description: 'Per day' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-coral to-teal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
              Transparent Pricing
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Quality design at every budget level. Choose the perfect package for your project.
            </p>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-16 sm:py-24 bg-soft-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-4">Our Packages</h2>
            <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
              Select the perfect design package that suits your needs and budget.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {packages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`rounded-2xl p-8 flex flex-col transition-all ${
                    pkg.popular 
                      ? 'bg-white shadow-xl border-2 border-coral scale-105' 
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-coral text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-charcoal mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  
                  <div className="mb-2">
                    <p className="text-4xl font-bold text-coral">{pkg.price}</p>
                    <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                  </div>

                  <div className="border-t border-ash my-6" />

                  <div className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button 
                      className={`w-full ${
                        pkg.popular 
                          ? 'bg-coral hover:bg-coral/90 text-white' 
                          : 'border border-coral text-coral hover:bg-coral/5'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <div className="bg-white rounded-2xl p-12 shadow-md">
              <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Add-On Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {addOns.map((addon, index) => (
                  <div key={index} className="p-6 border border-ash rounded-lg hover:border-coral transition-colors">
                    <h4 className="font-semibold text-charcoal mb-1">{addon.name}</h4>
                    <p className="text-coral font-bold mb-1">{addon.price}</p>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Price */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">How We Price Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-soft-white rounded-2xl p-8">
                <div className="text-3xl font-bold text-coral mb-4">📐</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Space Size</h3>
                <p className="text-muted-foreground">Pricing is adjusted based on the square footage of your space and complexity of the design.</p>
              </div>

              <div className="bg-soft-white rounded-2xl p-8">
                <div className="text-3xl font-bold text-teal mb-4">✨</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Design Complexity</h3>
                <p className="text-muted-foreground">More complex designs with custom elements may have different pricing than standard designs.</p>
              </div>

              <div className="bg-soft-white rounded-2xl p-8">
                <div className="text-3xl font-bold text-yellow mb-4">🎯</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Material Selection</h3>
                <p className="text-muted-foreground">Premium materials and finishes will impact the overall project cost and timeline.</p>
              </div>
            </div>

            {/* FAQ */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-charcoal mb-8 text-center">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div className="border-b border-ash pb-6">
                  <h4 className="font-bold text-charcoal mb-2">Do you offer discounts for multiple rooms?</h4>
                  <p className="text-muted-foreground">Yes! We offer package discounts when designing multiple rooms or entire homes. Contact us for custom quotes.</p>
                </div>
                <div className="border-b border-ash pb-6">
                  <h4 className="font-bold text-charcoal mb-2">Can we start with a site visit?</h4>
                  <p className="text-muted-foreground">Absolutely. A site visit helps us understand your space and requirements before committing to a full project.</p>
                </div>
                <div className="border-b border-ash pb-6">
                  <h4 className="font-bold text-charcoal mb-2">What's included in the package price?</h4>
                  <p className="text-muted-foreground">Package prices include planning, lighting design, and installation supervision. Some add-ons may have additional costs.</p>
                </div>
                <div>
                  <h4 className="font-bold text-charcoal mb-2">Do you offer payment plans?</h4>
                  <p className="text-muted-foreground">Yes, we offer flexible payment plans for larger projects. Discuss with our team during your site visit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-charcoal to-charcoal/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Not Sure Which Package is Right for You?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Schedule a free site visit with our design experts to find the perfect solution for your project.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                Book Free Site Visit
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
