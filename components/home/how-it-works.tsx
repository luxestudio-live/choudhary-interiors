import { Lightbulb, Pencil, CheckCircle2, Home } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Consultation',
      description: 'We understand your vision, style preferences, and requirements through detailed consultation'
    },
    {
      number: '02',
      icon: Pencil,
      title: 'Design & Planning',
      description: 'Our designers create detailed 3D visualizations and layouts tailored to your space'
    },
    {
      number: '03',
      icon: CheckCircle2,
      title: 'Approval & Refinement',
      description: 'You review the design, provide feedback, and we refine until it\'s perfect'
    },
    {
      number: '04',
      icon: Home,
      title: 'Execution',
      description: 'Our team manages the entire implementation from sourcing to final installation'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-coral font-semibold">Our Process</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-charcoal mt-2 text-balance">
            Simple & Transparent Process
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From your first consultation to the final touch, we guide you through every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral to-teal flex items-center justify-center text-white text-3xl font-bold mb-4">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center absolute top-0 right-0">
                    <Icon className="w-6 h-6 text-coral" />
                  </div>
                </div>

                <h3 className="font-semibold text-charcoal text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-8 w-8 h-0.5 bg-gradient-to-r from-coral to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
