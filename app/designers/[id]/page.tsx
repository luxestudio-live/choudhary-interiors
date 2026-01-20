'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Star, Award, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'

const designersData: Record<string, any> = {
  '1': {
    name: 'Rahul choudhary',
    title: 'Founder & Lead Designer',
    specialty: 'Residential & Modular Design',
    bio: 'With 12+ years of experience in residential design, Rahul specializes in creating beautiful, functional living spaces that exceed client expectations. His work spans from cozy apartments to luxury villas, and he\'s passionate about understanding his clients\' unique lifestyle needs.',
    rating: 4.9,
    reviews: 245,
    projects: 120,
    location: 'Mumbai',
    image: '/images/rahul.jpg',
    achievements: ['Best Designer 2022', 'Excellence Award 2021', '500+ Happy Clients'],
    services: ['Home Design', 'Modular Furniture', 'Space Planning', '3D Visualization', 'Consultation'],
    experience: '12+ Years',
    specializations: ['Residential Design', 'Modular Furniture', 'Space Planning', 'Bedroom Design', 'Living Room Design'],
    projectTypes: ['Apartments', 'Villas', 'Penthouses', 'Townhouses'],
    languages: ['English', 'Hindi', 'Marathi'],
    portfolio: [
      { title: 'Modern Luxury Apartment', location: 'Mumbai', image: '/images/pf1.jpg' },
      { title: 'Cozy Family Home', location: 'Mumbai', image: '/images/pf4.jpg' },
      { title: 'Contemporary Kitchen', location: 'Mumbai', image: '/images/pf3.jpg' }
    ]
  },
  '2': {
    name: 'Raj choudhary',
    title: 'Co-Founder & Creative Director',
    specialty: 'Commercial & Luxury Spaces',
    bio: 'Raj brings a unique blend of architectural expertise and creative design to every commercial project. His innovative approach has transformed numerous office spaces, corporate headquarters, and luxury residences.',
    rating: 4.8,
    reviews: 198,
    projects: 95,
    location: 'Mumbai',
    image: '/images/des2.jpg',
    achievements: ['Commercial Excellence', 'Top Designer 2023', '₹50Cr+ Project Value'],
    services: ['Commercial Design', 'Luxury Interiors', 'Project Management', 'Consultation', 'Space Planning'],
    experience: '15 Years',
    specializations: ['Commercial Design', 'Luxury Interiors', 'Office Design', 'Hospitality Design', 'Retail Design'],
    projectTypes: ['Corporate Offices', 'Luxury Homes', 'Retail Spaces', 'Hotels'],
    languages: ['English', 'Hindi', 'Gujarati'],
    portfolio: [
      { title: 'Corporate Headquarters', location: 'Mumbai', image: '/images/office.jpg' },
      { title: 'Luxury Penthouse', location: 'Mumbai', image: '/images/proj2.jpg' },
      { title: 'Modern Office Space', location: 'Mumbai', image: '/images/pf7.jpg' }
    ]
  }
}

export default function DesignerProfile({ params }: { params: { id: string } }) {
  const designer = designersData[params.id] || designersData['1']

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-20 bg-gradient-to-br from-coral to-teal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/designers" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Designers
            </Link>
          </div>
        </section>

        {/* Profile Section */}
        <section className="py-12 sm:py-20 bg-soft-white -mt-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Profile Image & Quick Info */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
                  <img 
                    src={designer.image || "/placeholder.svg"} 
                    alt={designer.name}
                    className="w-full h-96 object-cover"
                  />
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-md">
                  <div className="flex items-center gap-1 mb-4 pb-4 border-b border-ash">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow text-yellow" />
                      ))}
                    </div>
                    <span className="text-charcoal font-medium ml-2">
                      {designer.rating}
                    </span>
                  </div>

                  <div className="space-y-4 text-sm mb-6">
                    <div>
                      <p className="text-muted-foreground mb-1">Total Reviews</p>
                      <p className="font-semibold text-charcoal">{designer.reviews} Reviews</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Projects Completed</p>
                      <p className="font-semibold text-charcoal">{designer.projects} Projects</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Experience</p>
                      <p className="font-semibold text-charcoal">{designer.experience}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Location</p>
                      <p className="font-semibold text-charcoal flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {designer.location}
                      </p>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-coral hover:bg-coral/90 text-white">
                      Contact Now
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Designer Details */}
              <div className="md:col-span-2">
                <h1 className="text-4xl sm:text-5xl font-bold text-charcoal mb-2">{designer.name}</h1>
                <p className="text-xl text-coral font-semibold mb-2">{designer.title}</p>
                <p className="text-lg text-muted-foreground mb-8">{designer.specialty}</p>

                <div className="bg-white rounded-2xl p-8 shadow-md mb-8">
                  <h2 className="text-2xl font-bold text-charcoal mb-4">About</h2>
                  <p className="text-charcoal leading-relaxed">{designer.bio}</p>
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <h3 className="text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-coral" />
                    Achievements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {designer.achievements.map((achievement: string, index: number) => (
                      <div key={index} className="p-4 bg-coral/5 rounded-lg border border-coral/20">
                        <p className="font-semibold text-charcoal text-center">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Specializations & Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-charcoal mb-6">Specializations</h3>
                <div className="space-y-3">
                  {designer.specializations.map((spec: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-charcoal mb-6">Services Offered</h3>
                <div className="space-y-3">
                  {designer.services.map((service: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-charcoal">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-charcoal mb-6">Project Types</h3>
                <div className="flex flex-wrap gap-3">
                  {designer.projectTypes.map((type: string, index: number) => (
                    <span key={index} className="px-4 py-2 bg-coral/10 text-coral font-medium rounded-full text-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-charcoal mb-6">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {designer.languages.map((lang: string, index: number) => (
                    <span key={index} className="px-4 py-2 bg-teal/10 text-teal font-medium rounded-full text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-charcoal mb-8">Featured Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {designer.portfolio.map((project: any, index: number) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image || "/placeholder.svg"} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-charcoal mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {project.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <section className="bg-gradient-to-br from-coral to-teal rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Interested in Working Together?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with {designer.name} to discuss your project and bring your vision to life.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-coral hover:bg-white/90">
                  Schedule Consultation
                </Button>
              </Link>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
