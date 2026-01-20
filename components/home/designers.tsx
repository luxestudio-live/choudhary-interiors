"use client";
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollFadeIn } from '@/components/ui/scroll-fade-in'

export default function Designers() {
  const designers = [
    {
      name: 'Rahul choudhary',
      title: 'Founder & Lead Designer',
      specialty: 'Residential & Modular Design',
      rating: 4.9,
      projects: 120,
      image: '/choudhary-interiors/images/rahul.jpg'
    },
    {
      name: 'Raj choudhary',
      title: 'Co-Founder & Creative Director',
      specialty: 'Commercial & Luxury Spaces',
      rating: 4.8,
      projects: 95,
      image: '/choudhary-interiors/images/des2.jpg'
    }
  ]

  return (
    <ScrollFadeIn>
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coral font-semibold">Our Team</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mt-2 text-balance">
              Expert Interior Designers
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Work with our talented team of award-winning designers who bring creativity and expertise to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {designers.map((designer, index) => (
              <div
                key={index}
                className="group bg-soft-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow transition-transform hover:scale-105"
              >
                <div className="h-64 overflow-hidden bg-ash">
                  <img 
                    src={designer.image || "/placeholder.svg"} 
                    alt={designer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-charcoal text-lg">{designer.name}</h3>
                  <p className="text-sm text-coral font-medium mb-2">{designer.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{designer.specialty}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow text-yellow" />
                        ))}
                      </div>
                      <span className="text-charcoal font-medium">{designer.rating}</span>
                    </div>
                    <span className="text-muted-foreground">{designer.projects} Projects</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/designers">
              <Button size="lg" variant="outline" className="border-coral text-coral hover:bg-coral/5 bg-transparent transition-transform hover:scale-105">
                Browse All Designers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
