"use client";
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { getProjects } from '@/lib/firestore-helpers'

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [lightboxItem, setLightboxItem] = useState<{ items: string[], index: number } | null>(null)
  const [firestoreProjects, setFirestoreProjects] = useState<any[]>([])

  // Hardcoded existing projects (will always appear first)
  const hardcodedProjects = [
    {
      id: 1,
      title: '4 BHK Premium Luxury Home',
      category: 'Residential',
      location: 'Nahur, Mumbai',
      image: '/pf7.jpeg',
      description: 'Stunning 4 BHK luxury home featuring comprehensive interior design with contemporary aesthetics and premium finishes throughout all living spaces.',
      budget: '₹35 Lakhs',
      timeline: '5 months',
      gallery: [
        '/pf1.jpeg',
        '/pf2.jpeg',
        '/pf3.jpeg',
        '/pf4.jpeg',
        '/pf5.jpeg',
        '/pf6.jpeg',
        '/pf7.jpeg',
        '/pf8.jpeg',
        '/p1-video.mp4'
      ],
      video: '/p1-video.mp4',
      details: 'This comprehensive 4 BHK residential project in Nahur represents our commitment to excellence in luxury home design. We transformed this entire home with careful attention to detail, superior craftsmanship, and innovative design solutions across all spaces including bedrooms, living areas, kitchen, and more.'
    },
    {
      id: 2,
      title: '3 BHK Modern Home Design',
      category: 'Residential',
      location: 'Dombivali, Thane',
      image: '/po5.jpeg',
      description: 'Beautifully designed 3 BHK residential space featuring modern interiors with optimal space utilization and premium finishing.',
      budget: '₹25 Lakhs',
      timeline: '4 months',
      gallery: [
        '/po1.jpeg',
        '/po2.jpeg',
        '/po3.jpeg',
        '/po4.jpeg',
        '/po5.jpeg',
        '/po6.jpeg',
        '/po7.jpeg',
        '/po8.jpeg',
        '/po9.jpeg',
        '/po10.jpeg',
        '/po-video.mp4'
      ],
      video: '/po-video.mp4',
      details: 'This 3 BHK residential project in Dombivali showcases our expertise in creating functional and aesthetically pleasing modern homes. We transformed this property with careful space planning, contemporary design elements, and premium materials to create a comfortable living environment.'
    },
    {
      id: 3,
      title: '2 BHK Renovation Project',
      category: 'Renovation',
      location: 'Bhandup, Mumbai',
      image: '/images/pf1.jpg',
      description: 'Complete 2 BHK renovation featuring modern interiors, updated fixtures, and improved functionality.',
      gallery: [
        '/por1.mp4',
        '/por2.mp4',
        '/por3.mp4',
        '/por4.mp4',
        '/por5.mp4',
        '/por6.mp4',
        '/por7.mp4'
      ],
      video: '/por1.mp4',
      details: 'This 2 BHK renovation project in Bhandup demonstrates our expertise in transforming existing spaces. We modernized the layout, updated all fixtures and fittings, and introduced contemporary design elements to create a fresh, functional living space that meets modern lifestyle needs.'
    },
    {
      id: 4,
      title: '1 BHK Interior Project',
      category: 'Residential',
      location: 'Bhandup West, Mumbai',
      image: '/port1.jpeg',
      description: 'Compact 1 BHK interior with smart storage, warm finishes, and a functional layout.',
      gallery: [
        '/port1.jpeg',
        '/port2.jpeg',
        '/port-video1.mp4',
        '/port-video2.mp4',
        '/port-video3.mp4'
      ],
      video: '/port-video1.mp4',
      details: 'This 1 BHK project in Bhandup West focuses on space optimization and a clean, modern aesthetic. We combined practical storage, durable materials, and cozy finishes to make the apartment feel open, bright, and comfortable while keeping daily use effortless.'
    },
    {
      id: 5,
      title: '2 BHK Interior Project',
      category: 'Residential',
      location: 'Bhandup, Mumbai',
      image: '/project10.jpeg',
      description: 'Modern 2 BHK interiors with balanced aesthetics, smart storage, and comfortable living spaces.',
      gallery: [
        '/project1.jpeg',
        '/project2.jpeg',
        '/project3.jpeg',
        '/project4.jpeg',
        '/project5.jpeg',
        '/project6.jpeg',
        '/project7.jpeg',
        '/project8.jpeg',
        '/project9.jpeg',
        '/project10.jpeg'
      ],
      details: 'This 2 BHK project in Bhandup showcases thoughtful space planning with warm finishes and functional storage. We focused on creating a cohesive look across the living room, bedrooms, and kitchen while maintaining a bright, inviting feel.'
    },
    {
      id: 6,
      title: '3 BHK Interior Project',
      category: 'Residential',
      location: 'Dombivali, Mumbai',
      image: '/portfolio6.jpeg',
      description: 'Elegant 3 BHK interiors with cohesive styling, smart storage, and functional layouts.',
      gallery: [
        '/portfolio6.jpeg'
      ],
      details: 'This 3 BHK project in Dombivali focuses on creating a balanced, modern look across all rooms with thoughtful storage solutions and warm, livable finishes. The design delivers comfort, functionality, and a cohesive aesthetic throughout the home.'
    },
    {
      id: 9,
      title: 'Project Highlights (Mixed)',
      category: 'Highlights',
      location: 'Mumbai',
      image: '/random1.jpeg',
      description: 'A curated mix of snapshots from different projects and spaces we have completed.',
      gallery: [
        '/random1.jpeg',
        '/random2.jpeg',
        '/random3.jpeg',
        '/random4.jpeg',
        '/random5.jpeg',
        '/random6.jpeg',
        '/random7.jpeg',
        '/random8.jpeg',
        '/random9.jpeg'
      ],
      details: 'This gallery showcases a mix of design highlights from multiple projects, featuring a variety of styles, finishes, and space types. It offers a quick look at our versatility and attention to detail across different client requirements.'
    }
  ]

  // Load Firestore projects on mount
  useEffect(() => {
    const loadFirestoreProjects = async () => {
      try {
        const firestoreData = await getProjects()
        setFirestoreProjects(firestoreData)
      } catch (error) {
        console.error('Error loading Firestore projects:', error)
      }
    }
    loadFirestoreProjects()
  }, [])

  // Combine projects: hardcoded first, then Firestore projects
  const allProjects = [
    ...hardcodedProjects,
    ...firestoreProjects.map((proj) => ({
      ...proj,
      image: proj.images?.[0] || proj.image || '/placeholder.svg',
      gallery: proj.images || [],
      video: proj.videos?.[0] || null
    }))
  ]

  const isYouTubeUrl = (url: string) =>
    url.includes('youtube.com') || url.includes('youtu.be')

  const getYouTubeEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/embed/')) return url

    try {
      const parsed = new URL(url)
      const host = parsed.hostname.replace('www.', '')

      if (host === 'youtu.be') {
        const id = parsed.pathname.split('/')[1]
        return id ? `https://www.youtube.com/embed/${id}` : url
      }

      if (host.endsWith('youtube.com')) {
        const vParam = parsed.searchParams.get('v')
        if (vParam) return `https://www.youtube.com/embed/${vParam}`

        const parts = parsed.pathname.split('/').filter(Boolean)
        if (parts[0] === 'shorts' && parts[1]) return `https://www.youtube.com/embed/${parts[1]}`
        if (parts[0] === 'embed' && parts[1]) return `https://www.youtube.com/embed/${parts[1]}`
        if (parts[0] === 'v' && parts[1]) return `https://www.youtube.com/embed/${parts[1]}`
        if (parts[0] === 'live' && parts[1]) return `https://www.youtube.com/embed/${parts[1]}`
      }
    } catch {
      // ignore parse errors
    }

    return url
  }

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
              {allProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative h-96 overflow-hidden">
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
                    {(project.video || (project.gallery && project.gallery.some((item: string) => item.includes('youtube.com')))) && (
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
                <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full relative">
                  {/* Close Button */}
                  <div className="sticky top-0 flex justify-end p-4 bg-white border-b z-20">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-soft-white rounded-lg transition-colors"
                    >
                      <X className="w-6 h-6 text-charcoal" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-8 relative z-10">
                    {allProjects
                      .filter((p) => p.id === selectedProject)
                      .map((project) => (
                        <div key={project.id}>
                          {/* Project Title */}
                          <h2 className="text-4xl font-bold text-charcoal mb-2">{project.title}</h2>
                          <p className="text-coral font-semibold mb-6">{project.location}</p>

                          {/* Project Details */}
                          <p className="text-charcoal leading-relaxed mb-12">{project.details || project.description}</p>

                          {/* Gallery Section */}
                          {project.gallery && project.gallery.length > 0 && (() => {
                            const photos = project.gallery.filter(item => {
                              const lower = item.toLowerCase()
                              return !lower.endsWith('.mp4') && !isYouTubeUrl(item)
                            })
                            const videos = project.gallery.filter(item => {
                              const lower = item.toLowerCase()
                              return lower.endsWith('.mp4') || isYouTubeUrl(item)
                            })

                            return (
                              <div className="mb-12">
                                <h3 className="text-2xl font-bold text-charcoal mb-8">Gallery</h3>
                                
                                {/* Photos Section */}
                                {photos.length > 0 && (
                                  <div className="mb-10">
                                    <h4 className="text-xl font-semibold text-charcoal mb-4">Photos</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                      {photos.map((photo, index) => (
                                        <div 
                                          key={index} 
                                          className="rounded-lg overflow-hidden shadow-md w-full cursor-pointer group"
                                          onClick={() => setLightboxItem({ items: photos, index })}
                                        >
                                          <img
                                            src={photo}
                                            alt={`Photo ${index + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Videos Section */}
                                {videos.length > 0 && (
                                  <div>
                                    <h4 className="text-xl font-semibold text-charcoal mb-4">Videos</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {videos.map((video, index) => (
                                        <div 
                                          key={index} 
                                          className="rounded-lg overflow-hidden shadow-md bg-charcoal w-full cursor-pointer group relative"
                                          onClick={() => setLightboxItem({ items: videos, index })}
                                        >
                                          {isYouTubeUrl(video) ? (
                                            <div className="aspect-video w-full pointer-events-none">
                                              <iframe
                                                src={getYouTubeEmbedUrl(video)}
                                                className="w-full h-full"
                                                title="YouTube video"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                              />
                                            </div>
                                          ) : (
                                            <video
                                              preload="metadata"
                                              className="w-full h-auto pointer-events-none"
                                            >
                                              <source src={video} type="video/mp4" />
                                              Your browser does not support the video tag.
                                            </video>
                                          )}
                                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                                            <Play className="w-16 h-16 text-white fill-white" />
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )
                          })()}

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

            {/* Lightbox Modal */}
            {lightboxItem && (
              <div className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4">
                {/* Close Button */}
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                {/* Navigation Buttons */}
                {lightboxItem.items.length > 1 && (
                  <>
                    <button
                      onClick={() => setLightboxItem(prev => prev ? {
                        ...prev,
                        index: prev.index > 0 ? prev.index - 1 : prev.items.length - 1
                      } : null)}
                      className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                    >
                      <ChevronLeft className="w-8 h-8 text-white" />
                    </button>
                    <button
                      onClick={() => setLightboxItem(prev => prev ? {
                        ...prev,
                        index: prev.index < prev.items.length - 1 ? prev.index + 1 : 0
                      } : null)}
                      className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                    >
                      <ChevronRight className="w-8 h-8 text-white" />
                    </button>
                  </>
                )}

                {/* Counter */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full">
                  <p className="text-white text-sm font-medium">
                    {lightboxItem.index + 1} / {lightboxItem.items.length}
                  </p>
                </div>

                {/* Content */}
                <div className="max-w-6xl w-full h-full flex items-center justify-center">
                  {(() => {
                    const currentItem = lightboxItem.items[lightboxItem.index]
                    const isVideo = currentItem.toLowerCase().endsWith('.mp4')
                    const isYouTube = isYouTubeUrl(currentItem)

                    return isYouTube ? (
                      <div className="w-full max-w-5xl aspect-video">
                        <iframe
                          src={getYouTubeEmbedUrl(currentItem)}
                          className="w-full h-full rounded-lg shadow-2xl"
                          title="YouTube video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : isVideo ? (
                      <video
                        key={currentItem}
                        controls
                        autoPlay
                        className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                      >
                        <source src={currentItem} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={currentItem}
                        alt={`Item ${lightboxItem.index + 1}`}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                      />
                    )
                  })()}
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
