"use client";
import { Star } from 'lucide-react'
import { ScrollFadeIn } from '@/components/ui/scroll-fade-in'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Nadeem Khan',
      content: 'Choudhary ji was very cooperative and understanding. He guided us very clearly and design was so beautiful, modular kitchen and living room design was great. Highly recommend',
      rating: 5,
      icon: '👨‍💼'
    },
    {
      name: 'Ayesha',
      content: 'Our living room and bedroom interiors were done by Choudhary Interiors. Beautiful designs, good materials, and neat workmanship',
      rating: 5,
      icon: '👩‍🦰'
    },
    {
      name: 'Saif',
      content: 'We got our office interior designed by Choudhary Interiors and the results were impressive. Modern layout, good space utilization, and professional finishing. Highly recommended for commercial and office interior design in Mumbai',
      rating: 5,
      icon: '👨‍💻'
    }
  ]

  return (
    <ScrollFadeIn>
      <section className="py-20 sm:py-32 bg-gradient-to-br from-soft-white via-white to-soft-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-coral font-semibold text-lg">Client Reviews</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mt-4 text-balance">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
              Real experiences from satisfied clients who trusted us to transform their spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-ash/20 hover:border-coral/30 overflow-hidden relative"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-coral/5 via-transparent to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow text-yellow group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {testimonial.icon}
                  </div>

                  {/* Review Text */}
                  <p className="text-charcoal text-base leading-relaxed mb-8 group-hover:text-charcoal/90 transition-colors">
                    {`"${testimonial.content}"`}
                  </p>

                  {/* Divider */}
                  <div className="h-1 w-8 bg-gradient-to-r from-coral to-teal mb-6 group-hover:w-16 transition-all duration-300" />

                  {/* Author */}
                  <div>
                    <p className="font-bold text-charcoal text-lg group-hover:text-coral transition-colors">{testimonial.name}</p>
                  </div>
                </div>

                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-coral/20 to-teal/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
