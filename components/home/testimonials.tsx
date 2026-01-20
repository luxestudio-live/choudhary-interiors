"use client";
import { Star } from 'lucide-react'
import { ScrollFadeIn } from '@/components/ui/scroll-fade-in'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amit Kumar',
      title: 'Homeowner',
      content: 'choudhary Interiors completely transformed our apartment. The team was professional, attentive to detail, and delivered on time. Highly recommended!',
      rating: 5
    },
    {
      name: 'Neha Singh',
      title: 'Property Developer',
      content: 'Working with their design team for our commercial project was seamless. They understood our vision and delivered exceptional results.',
      rating: 5
    },
    {
      name: 'Rajesh Nair',
      title: 'Business Owner',
      content: 'The modular furniture solutions they designed for our office have improved our space utilization significantly. Great value for money!',
      rating: 5
    },
    {
      name: 'Priya Desai',
      title: 'Homeowner',
      content: 'From consultation to execution, the entire process was smooth and transparent. Our home now looks like a magazine spread!',
      rating: 5
    }
  ]

  return (
    <ScrollFadeIn>
      <section className="py-16 sm:py-24 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-coral font-semibold">Client Reviews</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mt-2 text-balance">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Thousands of satisfied clients trust us to transform their spaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow transition-transform hover:scale-105"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow text-yellow" />
                  ))}
                </div>
                <p className="text-charcoal text-base leading-relaxed mb-6">
                  {`"${testimonial.content}"`}
                </p>
                <div>
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-coral">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
