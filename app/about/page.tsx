import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { CheckCircle2, Users, Award, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push creative boundaries to deliver unique, forward-thinking design solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients to understand and exceed their expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, every detail, every time.'
    }
  ]

  const timeline = [
    {
      year: '2005',
      title: 'Founded',
      description: 'choudhary Interiors was established with a vision to revolutionize interior design in India.'
    },
    {
      year: '2010',
      title: 'Early Growth',
      description: 'Built a trusted local presence and delivered landmark residential projects.'
    },
    {
      year: '2015',
      title: 'Major Expansion',
      description: 'Expanded to 5 cities with a growing team of experienced designers.'
    },
    {
      year: '2020',
      title: '2K+ Happy Clients',
      description: 'Celebrated a milestone of 2,000+ satisfied clients across residential and commercial sectors.'
    },
    {
      year: '2024',
      title: '500+ Projects',
      description: 'Completed 500+ successful projects with a focus on quality and craftsmanship.'
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
              About choudhary Interiors
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Transforming spaces, enhancing lives, and building beautiful homes since 2010.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-charcoal mb-6">Our Story</h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  choudhary Interiors was founded with a simple yet powerful vision: to create beautiful, functional spaces that enhance the lives of our clients. What started as a small team of passionate designers has grown into one of India's most trusted interior design firms.
                </p>
                <p className="text-charcoal leading-relaxed mb-4">
                  We believe that exceptional interior design goes beyond aesthetics. It's about understanding the unique lifestyle of each client, listening to their dreams, and bringing them to life with precision, creativity, and craftsmanship.
                </p>
                <p className="text-charcoal leading-relaxed">
                  Over the years, we've had the privilege of transforming 500+ spaces for homeowners, businesses, and corporations. Each project has reinforced our commitment to excellence and innovation in design.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/team.jpg" 
                  alt="Rahul and Raj choudhary, choudhary Interiors founders"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-24 bg-soft-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white rounded-2xl p-12 shadow-md">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Our Mission</h3>
                <p className="text-charcoal leading-relaxed">
                  To deliver exceptional interior design solutions that transform spaces into beautiful, functional environments that enrich our clients' lives and reflect their unique personalities and aspirations.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-12 shadow-md">
                <h3 className="text-2xl font-bold text-charcoal mb-4">Our Vision</h3>
                <p className="text-charcoal leading-relaxed">
                  To be India's most trusted and innovative interior design firm, recognized for our commitment to excellence, customer satisfaction, and our ability to create spaces that inspire and delight.
                </p>
              </div>
            </div>

            {/* Values */}
            <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-coral/20 group-hover:scale-110 transition-all">
                        <Icon className="w-8 h-8 text-coral group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-coral transition-colors">{value.title}</h3>
                      <p className="text-muted-foreground group-hover:text-charcoal transition-colors">{value.description}</p>
                    </div>
                    
                    {/* Border accent */}
                    <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-coral to-teal group-hover:h-full transition-all duration-500" />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-16">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8 mb-12 group">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-coral to-teal text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-32 bg-gradient-to-b from-coral/50 to-transparent mt-4 group-hover:from-coral group-hover:to-teal transition-colors" />
                    )}
                  </div>
                  
                  {/* Content card */}
                  <div className="pb-8 bg-white rounded-xl p-6 flex-1 shadow-md hover:shadow-lg transition-shadow border-l-4 border-coral/30 group-hover:border-coral/100">
                    <h3 className="text-xl font-bold text-charcoal mb-2 group-hover:text-coral transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground group-hover:text-charcoal transition-colors leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-16">By The Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group relative bg-soft-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-coral/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-center">
                  <p className="text-4xl font-bold text-coral mb-2 group-hover:scale-110 transition-transform">500+</p>
                  <p className="text-muted-foreground group-hover:text-charcoal transition-colors font-medium">Projects Completed</p>
                </div>
              </div>
              <div className="group relative bg-soft-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-center">
                  <p className="text-4xl font-bold text-teal mb-2 group-hover:scale-110 transition-transform">2K+</p>
                  <p className="text-muted-foreground group-hover:text-charcoal transition-colors font-medium">Happy Clients</p>
                </div>
              </div>
              <div className="group relative bg-soft-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-center">
                  <p className="text-4xl font-bold text-yellow mb-2 group-hover:scale-110 transition-transform">2</p>
                  <p className="text-muted-foreground group-hover:text-charcoal transition-colors font-medium">Dedicated Experts</p>
                </div>
              </div>
              <div className="group relative bg-soft-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-center">
                  <p className="text-4xl font-bold text-charcoal mb-2 group-hover:scale-110 transition-transform">20+</p>
                  <p className="text-muted-foreground group-hover:text-charcoal transition-colors font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-charcoal to-charcoal/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join thousands of satisfied clients who have entrusted us with their interior design needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-coral hover:bg-coral/90 text-white">
                Start Your Project Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
