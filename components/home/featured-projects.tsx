import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollFadeIn } from '@/components/ui/scroll-fade-in'

export default function FeaturedProjects() {
  const projects = [
    {
      title: 'Modern 3 BHK Apartment',
      category: 'Residential',
      image: '/choudhary-interiors/images/proj1.jpg',
      location: 'Mumbai'
    },
    {
      title: 'Luxury Penthouse',
      category: 'Residential',
      image: '/choudhary-interiors/images/proj2.jpg',
      location: 'Mumbai'
    },
    {
      title: 'Cozy 2 BHK Home',
      category: 'Residential',
      image: '/choudhary-interiors/images/proj3.jpg',
      location: 'Mumbai'
    },
    {
      title: 'Elegant Villa Design',
      category: 'Residential',
      image: '/choudhary-interiors/images/proj4.jpg',
      location: 'Mumbai'
    }
  ]

  return (
    <ScrollFadeIn>
      <section className="py-16 sm:py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coral font-semibold">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mt-2 text-balance">
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Explore our stunning portfolio of completed projects that showcase our design expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
              >
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="inline-block text-xs font-semibold bg-coral/80 px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white gap-2 transition-transform hover:scale-105">
                View Complete Portfolio <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
