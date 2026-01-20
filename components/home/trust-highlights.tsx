import { CheckCircle2, Award, Users, Zap } from 'lucide-react'
import { ScrollFadeIn } from '@/components/ui/scroll-fade-in'

export default function TrustHighlights() {
  const highlights = [
    {
      icon: CheckCircle2,
      title: 'Quality Assured',
      description: 'Every project meets our rigorous quality standards'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in interior design'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional designers with years of experience'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'On-time project completion guaranteed'
    }
  ]

  return (
    <ScrollFadeIn>
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-4 transition-transform hover:scale-105 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center transition-colors group-hover:bg-coral/20">
                    <Icon className="w-6 h-6 text-coral transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal text-lg">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}
