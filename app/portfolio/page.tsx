"use client";
"use client";
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: 'Modern Luxury Apartment',
      category: 'Residential',
      location: 'Mumbai',
      image: '/choudhary-interiors/images/pf1.jpg',
      description: 'A stunning 3BHK luxury apartment featuring contemporary design with premium finishes.',
      budget: '₹25 Lakhs',
      timeline: '4 months'
    },
    {
      id: 2,
      title: 'Master Bedroom Suite',
      category: 'Residential',
      location: 'Mumbai',
      image: '/choudhary-interiors/images/pf2.jpg',
      description: 'Elegant master bedroom with ambient lighting and premium furnishings.',
      budget: '₹8 Lakhs',
      timeline: '6 weeks'
    },
    {
      id: 3,
      title: 'Contemporary Kitchen Design',
      category: 'Modular',
      location: 'Mumbai',
      image: '/choudhary-interiors/images/pf3.jpg',
      description: 'Modern modular kitchen with latest appliances and smart storage solutions.',
      budget: '₹12 Lakhs',
      timeline: '8 weeks'
    },
    {
      id: 4,
      title: 'Open Plan Living Space',
      category: 'Residential',
      location: 'Mumbai',
      image: '/choudhary-interiors/images/pf4.jpg',
      description: 'Spacious open-plan design combining living and dining areas seamlessly.',
      budget: '₹18 Lakhs',
      timeline: '3 months'
    },
    {
      id: 5,
      title: 'Kids Bedroom Design',
      category: 'Residential',
      location: 'Mumbai',
      image: '/choudhary-interiors/images/pf5.jpg',
      description: 'Fun and functional children\'s bedroom with creative design elements.',
      budget: '₹6 Lakhs',
      timeline: '4 weeks'
    },
    {
      id: 6,
      title: 'Walk-In Wardrobe',
      category: 'Modular',
      location: 'Mumbai',
      image: '/choudhary-interiors/images/pf6.jpg',
      description: 'Luxury walk-in closet with custom organization and elegant finishes.',
      budget: '₹10 Lakhs',
      timeline: '6 weeks'
    },
    {
      id: 7,
      title: 'Home Office Space',
      category: 'Commercial',
      location: 'Mumbai',
      image: '/choudhary-interiors/images/pf7.jpg',
      description: 'Modern home office designed for productivity with ergonomic solutions.',
      budget: '₹5 Lakhs',
      timeline: '3 weeks'
    },
    {
      id: 8,
      title: 'Luxury Bathroom',
      category: 'Residential',
      location: 'Mumbai',
      image: '/choudhary-interiors/images/pf8.jpg',
      description: 'Spa-like bathroom with premium fixtures and elegant marble finishes.',
      budget: '₹8 Lakhs',
      timeline: '5 weeks'
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
              Our Portfolio
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Explore our collection of beautifully designed spaces that showcase our commitment to excellence.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 sm:py-24 bg-soft-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {projects.map((project) => (
                <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={project.image || "/placeholder.svg"} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-block text-xs font-semibold bg-coral text-white px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-charcoal mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.location}</p>
                    <p className="text-charcoal text-sm mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-ash">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Budget</p>
                        <p className="font-semibold text-charcoal">{project.budget}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Timeline</p>
                        <p className="font-semibold text-charcoal">{project.timeline}</p>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-coral hover:bg-coral/90 text-white">
                        Get Similar Design
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <section className="bg-white rounded-2xl p-12 shadow-md">
              <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Our Portfolio Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-coral mb-2">500+</p>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal mb-2">2K+</p>
                  <p className="text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-yellow mb-2">2005</p>
                  <p className="text-muted-foreground">Established</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-charcoal mb-2">20+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-charcoal to-charcoal/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss your project and create something extraordinary together.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
