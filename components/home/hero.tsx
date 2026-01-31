"use client";

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollFadeIn } from '@/components/ui/scroll-fade-in'

export default function Hero() {

  return (
    <ScrollFadeIn>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 group">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-soft-white via-background to-soft-white -z-10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-coral opacity-10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal opacity-10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-coral transition-transform group-hover:scale-110" />
              <span className="text-sm font-semibold text-coral">Transform Your Living Space</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-charcoal leading-tight transition-colors group-hover:text-coral">
              Dream Home,
              <span className="text-gradient block">Design Reality</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              From concept to completion, we deliver end-to-end interior design solutions that transform your space into a stunning reflection of your style and personality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button size="lg" className="bg-coral hover:bg-coral/90 text-white gap-2 transition-transform hover:scale-105">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-ash hover:bg-muted bg-transparent transition-transform hover:scale-105">
                  View Portfolio
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ash">
              <div className="transition-transform hover:scale-105">
                <p className="text-2xl font-bold text-charcoal">500+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="transition-transform hover:scale-105">
                <p className="text-2xl font-bold text-charcoal">20+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="transition-transform hover:scale-105">
                <p className="text-2xl font-bold text-charcoal">2K+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-96 sm:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-105">
            <img
              src="/choudhary-interiors/images/hero.jpg"
              alt="Modern luxury living room interior design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
