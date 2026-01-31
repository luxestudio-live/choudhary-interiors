"use client";

import Link from 'next/link'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollFadeIn } from '@/components/ui/scroll-fade-in'

export default function CTA() {

  return (
    <ScrollFadeIn>
      <section className="py-16 sm:py-24 bg-gradient-to-br from-coral to-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our design experts today and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-coral hover:bg-white/90 gap-2 transition-transform hover:scale-105">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="tel:+918828380687">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2 bg-transparent transition-transform hover:scale-105">
                <Phone className="w-4 h-4" /> Call Us
              </Button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 justify-center text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@choudharyinteriors.in" className="hover:text-white transition">
                hello@choudharyinteriors.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+918828380687" className="hover:text-white transition">
                +91 88283 80687
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
