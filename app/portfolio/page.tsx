"use client";
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, Play } from 'lucide-react'

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'Premium Interior Design Showcase',
      category: 'Residential',
      location: 'Mumbai',
      image: '/choudhary-interiors/images/pf9.jpeg',
      description: 'An exclusive showcase of our premium interior design work featuring multiple spaces and innovative solutions.',
      budget: '₹35 Lakhs',
      timeline: '5 months',
      gallery: [
        '/choudhary-interiors/images/pf1.jpeg',
        '/choudhary-interiors/images/pf2.jpeg',
        '/choudhary-interiors/images/pf3.jpeg',
        '/choudhary-interiors/images/pf4.jpeg',
        '/choudhary-interiors/images/pf5.jpeg',
        '/choudhary-interiors/images/pf6.jpeg',
        '/choudhary-interiors/images/pf7.jpeg',
        '/choudhary-interiors/images/pf8.jpeg'
      ],
      video: '/choudhary-interiors/videos/p1-video.mp4',
      details: 'This project represents our commitment to excellence in interior design. We transformed multiple living spaces with careful attention to detail, superior craftsmanship, and innovative design solutions.'
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
                <div 
                  key={project.id} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
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
                    {project.video && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-coral flex items-center justify-center">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    )}
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

                    <Button 
                      className="w-full bg-coral hover:bg-coral/90 text-white"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      View Project Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Modal */}
            {selectedProject && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-4 bg-white border-b">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-soft-white rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6 text-charcoal" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8">
                    {projects
                      .filter((p) => p.id === selectedProject)
                      .map((project) => (
                        <div key={project.id}>
                          {/* Project Title */}
                          <h2 className="text-4xl font-bold text-charcoal mb-2">{project.title}</h2>
                          <p className="text-coral font-semibold mb-6">{project.location}</p>

                          {/* Project Details */}
                          <p className="text-charcoal leading-relaxed mb-8">{project.details || project.description}</p>

                          <div className="grid grid-cols-2 gap-6 mb-12 pb-12 border-b border-ash">
                            <div>
                              <p className="text-sm text-muted-foreground mb-2">Budget</p>
                              <p className="text-2xl font-bold text-coral">{project.budget}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-2">Timeline</p>
                              <p className="text-2xl font-bold text-teal">{project.timeline}</p>
                            </div>
                          </div>

                          {/* Gallery Section */}
                          {project.gallery && project.gallery.length > 0 && (
                            <div className="mb-12">
                              <h3 className="text-2xl font-bold text-charcoal mb-6">Project Gallery</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.gallery.map((image, index) => (
                                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                                    <img
                                      src={image}
                                      alt={`Gallery ${index + 1}`}
                                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Video Section */}
                          {project.video && (
                            <div className="mb-12">
                              <h3 className="text-2xl font-bold text-charcoal mb-6 flex items-center gap-3">
                                <Play className="w-6 h-6 text-coral fill-coral" />
                                Watch the Project Transformation
                              </h3>
                              <div className="rounded-lg overflow-hidden shadow-lg bg-charcoal aspect-video">
                                <video
                                  width="100%"
                                  height="100%"
                                  controls
                                  className="w-full h-full"
                                >
                                  <source src={project.video} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            </div>
                          )}

                          {/* CTA */}
                          <Link href="/contact">
                            <Button size="lg" className="w-full bg-coral hover:bg-coral/90 text-white">
                              Get Similar Design for Your Space
                            </Button>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

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
