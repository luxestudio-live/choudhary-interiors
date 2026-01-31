'use client'

import React from "react"

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await addDoc(collection(db, 'enquiries'), {
        ...formData,
        status: 'new',
        createdAt: new Date(),
      })
      alert('Thank you for reaching out! We will contact you soon.')
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your enquiry. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  const offices = [
    {
      city: 'Mumbai',
      address: 'Shop no. 2, Badwaik chawl, Lal Bahadur Shastri Marg, opp. Jain mandir, Kukreja, Govind Nagar, Bhandup West, Mumbai, Maharashtra 400078',
      phone: '+91 88283 80687',
      email: 'hello@choudharyinteriors.com',
      hours: 'Mon - Sat, 9AM - 9PM'
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
              Get In Touch
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Ready to transform your space? Reach out to us today for a free consultation.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24 bg-soft-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              {/* Contact Info Cards */}
              <div className="lg:col-span-1 space-y-8">
                <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-coral/30 hover:border-coral overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-coral/10 group-hover:bg-coral/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                      <Phone className="w-6 h-6 text-coral" />
                    </div>
                    <h3 className="font-bold text-charcoal mb-2 group-hover:text-coral transition-colors">Phone</h3>
                    <a href="tel:+918828380687" className="text-coral hover:text-coral/80 font-medium transition-colors">
                      +91 88283 80687
                    </a>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-teal/30 hover:border-teal overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-teal/10 group-hover:bg-teal/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                      <Mail className="w-6 h-6 text-teal" />
                    </div>
                    <h3 className="font-bold text-charcoal mb-2 group-hover:text-teal transition-colors">Email</h3>
                    <a href="mailto:hello@choudharyinteriors.com" className="text-teal hover:text-teal/80 font-medium transition-colors">
                      hello@choudharyinteriors.com
                    </a>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border-l-4 border-yellow/30 hover:border-yellow overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-yellow/10 group-hover:bg-yellow/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                      <Clock className="w-6 h-6 text-yellow" />
                    </div>
                    <h3 className="font-bold text-charcoal mb-2 group-hover:text-yellow transition-colors">Hours</h3>
                    <p className="text-charcoal font-medium">Mon - Sat</p>
                    <p className="text-muted-foreground">9 AM - 9 PM IST</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-white to-soft-white rounded-2xl p-8 sm:p-12 shadow-md border border-ash/20">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground mb-8">We'll get back to you within 24 hours</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-charcoal font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral group-hover:border-coral/50 transition-colors placeholder:text-gray-400"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-charcoal font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral group-hover:border-coral/50 transition-colors placeholder:text-gray-400"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-charcoal font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral group-hover:border-coral/50 transition-colors placeholder:text-gray-400"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-charcoal font-medium mb-2">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral group-hover:border-coral/50 transition-colors text-charcoal"
                        >
                          <option value="">Select a type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="modular-kitchen">Modular Kitchen</option>
                          <option value="false-ceiling">False ceiling & lighting</option>
                          <option value="wardrobe-storage">Wardrobe & Storage</option>
                          <option value="civil-work">Civil work</option>
                        </select>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-charcoal font-medium mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral group-hover:border-coral/50 transition-colors text-charcoal"
                      >
                        <option value="">Select budget range</option>
                        <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                        <option value="3l-6l">₹3,00,000 - ₹6,00,000</option>
                        <option value="6l-9l">₹6,00,000 - ₹9,00,000</option>
                        <option value="9l-12l">₹9,00,000 - ₹12,00,000</option>
                        <option value="12l-15l">₹12,00,000 - ₹15,00,000</option>
                        <option value="15l+">₹15,00,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-charcoal font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral resize-none group-hover:border-coral/50 transition-colors placeholder:text-gray-400"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-gradient-to-r from-coral via-coral to-coral/80 hover:from-coral/90 hover:via-coral/85 hover:to-coral/70 text-white font-semibold py-4 rounded-lg transition-all hover:shadow-2xl hover:-translate-y-1 group transform disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {submitting ? 'Sending...' : 'Send Message'}
                        {!submitting && (
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Offices */}
            <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">Our Studio</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-3xl mx-auto">
              {offices.map((office, index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-soft-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-ash/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-coral/5 via-transparent to-teal/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-charcoal mb-8 group-hover:text-coral transition-colors">{office.city}</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-coral/10 group-hover:bg-coral/20 flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110">
                          <MapPin className="w-5 h-5 text-coral" />
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal mb-1">Address</p>
                          <p className="text-muted-foreground leading-relaxed">{office.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-teal/10 group-hover:bg-teal/20 flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110">
                          <Phone className="w-5 h-5 text-teal" />
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal mb-1">Phone</p>
                          <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-teal hover:text-teal/80 font-medium transition-colors">
                            {office.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-yellow/10 group-hover:bg-yellow/20 flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110">
                          <Mail className="w-5 h-5 text-yellow" />
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal mb-1">Email</p>
                          <a href={`mailto:${office.email}`} className="text-yellow hover:text-yellow/80 font-medium transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-coral/10 group-hover:bg-coral/20 flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110">
                          <Clock className="w-5 h-5 text-coral" />
                        </div>
                        <div>
                          <p className="font-semibold text-charcoal mb-1">Hours</p>
                          <p className="text-muted-foreground">{office.hours}</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href="https://maps.app.goo.gl/6ahgVS1xEw4fR1ao9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-coral/10 hover:bg-coral/20 text-coral font-semibold rounded-lg transition-all group-hover:shadow-lg"
                    >
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-24 bg-soft-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">Studio Location</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Visit our design studio in the heart of Bhandup West, Mumbai for personalized consultations.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 border border-ash/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4955782753744!2d72.93556287588306!3d19.14311808207194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91ac4c8c5c3%3A0x5e3f3e3e3e3e3e3e!2sShop%20no.%202%2C%20Badwaik%20chawl%2C%20Lal%20Bahadur%20Shastri%20Marg%2C%20opp.%20Jain%20mandir%2C%20Kukreja%2C%20Govind%20Nagar%2C%20Bhandup%20West%2C%20Mumbai%2C%20Maharashtra%20400078!5e0!3m2!1sen!2sin!4v1706799999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-charcoal to-charcoal/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Looking for a Quick Response?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Call us directly or send an email, and our team will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210">
                <Button size="lg" className="bg-white text-coral hover:bg-white/90">
                  Call Us Now
                </Button>
              </a>
              <a href="mailto:hello@choudharyinteriors.com">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  Send Email
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
