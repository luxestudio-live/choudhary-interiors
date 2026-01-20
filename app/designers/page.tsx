import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Star, Award, MapPin } from 'lucide-react'

export default function DesignersPage() {
  const designers = [
    {
      id: 1,
      name: 'Rahul choudhary',
      title: 'Founder & Lead Designer',
      specialty: 'Residential & Modular Design',
      bio: 'With 12+ years of experience in residential design, Rahul specializes in creating beautiful, functional living spaces that exceed client expectations.',
      rating: 4.9,
      reviews: 245,
      projects: 120,
      location: 'Mumbai',
      image: '/images/rahul.jpg',
      achievements: ['Best Designer 2022', 'Excellence Award 2021', '500+ Happy Clients'],
      services: ['Home Design', 'Modular Furniture', 'Space Planning']
    },
    {
      id: 2,
      name: 'Raj choudhary',
      title: 'Co-Founder & Creative Director',
      specialty: 'Commercial & Luxury Spaces',
      bio: 'Raj brings a unique blend of architectural expertise and creative design to every commercial project. His innovative approach has transformed numerous office spaces.',
      rating: 4.8,
      reviews: 198,
      projects: 95,
      location: 'Mumbai',
      image: '/images/des2.jpg',
      achievements: ['Commercial Excellence', 'Top Designer 2023', '₹50Cr+ Project Value'],
      services: ['Commercial Design', 'Luxury Interiors', 'Project Management']
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
              Meet Our Designers
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Award-winning designers with years of experience ready to transform your space into something extraordinary.
            </p>
          </div>
        </section>

        {/* Designers Grid */}
        <section className="py-16 sm:py-24 bg-soft-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
              {designers.map((designer) => (
                <Link key={designer.id} href={`/designers/${designer.id}`}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer">
                    <div className="h-72 overflow-hidden bg-ash">
                      <img 
                        src={designer.image || "/placeholder.svg"} 
                        alt={designer.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-bold text-charcoal text-lg mb-1">{designer.name}</h3>
                      <p className="text-coral font-medium text-sm mb-3">{designer.title}</p>
                      <p className="text-muted-foreground text-sm mb-4">{designer.specialty}</p>
                      
                      <div className="flex items-center gap-1 mb-4 pb-4 border-b border-ash">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-yellow text-yellow" />
                          ))}
                        </div>
                        <span className="text-charcoal font-medium text-sm ml-2">
                          {designer.rating} <span className="text-muted-foreground">({designer.reviews})</span>
                        </span>
                      </div>

                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Award className="w-4 h-4 text-coral" />
                          <span>{designer.projects} Projects</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-coral" />
                          <span>{designer.location}</span>
                        </div>
                      </div>

                      <Button className="w-full bg-coral hover:bg-coral/90 text-white">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Why Our Designers */}
            <section className="bg-white rounded-2xl p-12 shadow-md">
              <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Why Choose Our Designers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-coral">✓</span>
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Certified Professionals</h3>
                  <p className="text-muted-foreground text-sm">All our designers are certified and have completed professional training in interior design.</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-teal">✓</span>
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground text-sm">With thousands of completed projects and satisfied clients, excellence is our standard.</p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-lg bg-yellow/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-yellow">✓</span>
                  </div>
                  <h3 className="font-semibold text-charcoal mb-2">Personalized Service</h3>
                  <p className="text-muted-foreground text-sm">Each designer takes a tailored approach to understand your unique vision and needs.</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-charcoal to-charcoal/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Schedule a consultation with one of our expert designers today.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                Book Your Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
