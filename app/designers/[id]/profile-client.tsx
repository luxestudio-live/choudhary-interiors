"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, Award, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function DesignerProfileClient({ designer }: { designer: any }) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-coral to-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/designers" className="text-white/80 hover:text-white mb-6 inline-flex items-center gap-2">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Designers
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src={designer.image} alt={designer.name} className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg" />
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{designer.name}</h1>
              <p className="text-lg font-medium mb-1">{designer.title}</p>
              <p className="text-base mb-2">{designer.specialty}</p>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 fill-yellow text-yellow" />
                <span className="font-semibold">{designer.rating}</span>
                <span className="text-white/80">({designer.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{designer.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bio & Achievements */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-charcoal mb-4">About</h2>
            <p className="text-lg text-muted-foreground mb-6">{designer.bio}</p>
            <div className="flex flex-wrap gap-4 mb-6">
              {designer.achievements.map((ach: string, i: number) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1 bg-coral/10 text-coral rounded-full text-sm font-medium">
                  <Award className="w-4 h-4" /> {ach}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {designer.services.map((service: string, i: number) => (
                <span key={i} className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 text-teal rounded-full text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4" /> {service}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="font-semibold text-charcoal mb-2">Experience</h3>
            <p className="mb-4">{designer.experience}</p>
            <h3 className="font-semibold text-charcoal mb-2">Specializations</h3>
            <ul className="mb-4 list-disc list-inside text-muted-foreground">
              {designer.specializations.map((spec: string, i: number) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
            <h3 className="font-semibold text-charcoal mb-2">Project Types</h3>
            <ul className="mb-4 list-disc list-inside text-muted-foreground">
              {designer.projectTypes.map((type: string, i: number) => (
                <li key={i}>{type}</li>
              ))}
            </ul>
            <h3 className="font-semibold text-charcoal mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {designer.languages.map((lang: string, i: number) => (
                <span key={i} className="bg-ash px-2 py-1 rounded text-xs text-charcoal">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-charcoal mb-8">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {designer.portfolio.map((project: any, index: number) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-charcoal mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-br from-coral to-teal rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Interested in Working Together?</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          Schedule a consultation with {designer.name} to discuss your project and bring your vision to life.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-white text-coral hover:bg-white/90">
            Schedule Consultation
          </Button>
        </Link>
      </section>
    </>
  );
}
