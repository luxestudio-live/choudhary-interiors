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
      year: '2010',
      title: 'Founded',
      description: 'choudhary Interiors was established with a vision to revolutionize interior design in India.'
    },
    {
      year: '2014',
      title: 'Major Expansion',
      description: 'Expanded to 5 cities with a team of 20+ experienced designers.'
    },
    {
      year: '2018',
      title: 'Industry Recognition',
      description: 'Awarded multiple design excellence awards and recognized as a top design firm.'
    },
    {
      year: '2022',
      title: '500+ Projects',
      description: 'Celebrated completion of 500+ successful projects across residential and commercial sectors.'
    },
    {
      year: '2024',
      title: 'Global Presence',
      description: 'Expanding internationally with partnerships in multiple countries and serving global clientele.'
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
                  src="/choudhary-interiors/images/team.jpg" 
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
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-md text-center">
                    <div className="w-16 h-16 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-coral" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
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
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-coral text-white flex items-center justify-center font-bold mb-4">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-20 bg-coral/30" />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-coral font-bold text-lg">{item.year}</p>
                    <h3 className="text-xl font-bold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet The Founders */}
        <section className="py-16 sm:py-24 bg-soft-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-4">Meet The Founders</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
              Rahul and Raj choudhary are passionate interior designers dedicated to transforming spaces and enhancing lives with their creative expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Founder 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <img 
                  src="/choudhary-interiors/images/rahul.jpg" 
                  alt="Rahul choudhary" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-charcoal mb-2">Rahul choudhary</h3>
                <p className="text-teal font-medium mb-3">Founder & Lead Designer</p>
                <p className="text-muted-foreground text-sm">With 12+ years of expertise, Rahul leads the vision of creating beautiful, functional spaces that transform everyday living.</p>
              </div>

              {/* Founder 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-md text-center">
                <img 
                  src="/choudhary-interiors/images/des2.jpg"
                  alt="Raj choudhary" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-charcoal mb-2">Raj choudhary</h3>
                <p className="text-coral font-medium mb-3">Co-Founder & Creative Director</p>
                <p className="text-muted-foreground text-sm">Raj brings innovative design solutions and strategic thinking to every project, ensuring excellence and client satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-charcoal text-center mb-16">By The Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-soft-white rounded-2xl p-8 shadow-md text-center">
                <p className="text-4xl font-bold text-coral mb-2">500+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-soft-white rounded-2xl p-8 shadow-md text-center">
                <p className="text-4xl font-bold text-teal mb-2">10K+</p>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-soft-white rounded-2xl p-8 shadow-md text-center">
                <p className="text-4xl font-bold text-yellow mb-2">2</p>
                <p className="text-muted-foreground">Dedicated Experts</p>
              </div>
              <div className="bg-soft-white rounded-2xl p-8 shadow-md text-center">
                <p className="text-4xl font-bold text-charcoal mb-2">15+</p>
                <p className="text-muted-foreground">Years Experience</p>
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
