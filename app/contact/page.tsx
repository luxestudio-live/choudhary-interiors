'use client'

import React from "react"

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' })
  }

  const offices = [
    {
      city: 'Mumbai',
      address: 'Shop no. 2, Badwaik chawl, Lal Bahadur Shastri Marg, opp. Jain mandir, Kukreja, Govind Nagar, Bhandup West, Mumbai, Maharashtra 400078',
      phone: '+91 98765 43210',
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
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">Phone</h3>
                  <a href="tel:+919876543210" className="text-coral hover:text-coral/80 font-medium">
                    +91 98765 43210
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-teal" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">Email</h3>
                  <a href="mailto:hello@choudharyinteriors.com" className="text-teal hover:text-teal/80 font-medium">
                    hello@choudharyinteriors.com
                  </a>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-yellow/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-yellow" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">Hours</h3>
                  <p className="text-charcoal font-medium">Mon - Sat</p>
                  <p className="text-muted-foreground">9 AM - 9 PM IST</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-md">
                  <h2 className="text-2xl font-bold text-charcoal mb-8">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-charcoal font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-charcoal font-medium mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-charcoal font-medium mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-charcoal font-medium mb-2">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
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

                    <div>
                      <label className="block text-charcoal font-medium mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral"
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
                        className="w-full px-4 py-3 border border-ash rounded-lg focus:outline-none focus:ring-2 focus:ring-coral resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-coral hover:bg-coral/90 text-white">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Offices */}
            <h2 className="text-3xl font-bold text-charcoal mb-12 text-center">Our Office</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-charcoal mb-6">{office.city}</h3>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal">Address</p>
                        <p className="text-muted-foreground">{office.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal">Phone</p>
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-teal hover:text-teal/80">
                          {office.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal">Email</p>
                        <a href={`mailto:${office.email}`} className="text-yellow hover:text-yellow/80">
                          {office.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-charcoal">Hours</p>
                        <p className="text-muted-foreground">{office.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">Visit Our Studio</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Located in the heart of Mumbai, our design studio is open for consultations and project discussions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-96 lg:h-full min-h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.4829827726444!2d72.93387757588308!3d19.14429058207064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91b7c7d0c0d%3A0x0!2zMTnCsDA4JzM5LjQiTiA3MsKwNTYnMTAuMCJF!5e0!3m2!1sen!2sin!4v1706799999999!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Location Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">choudhary Interiors Studio</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-coral flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-charcoal mb-1">Address</p>
                        <p className="text-muted-foreground">Shop no. 2, Badwaik chawl, Lal Bahadur Shastri Marg, opp. Jain mandir, Kukreja, Govind Nagar, Bhandup West, Mumbai, Maharashtra 400078</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-charcoal mb-1">Phone</p>
                        <a href="tel:+919876543210" className="text-teal hover:text-teal/80 font-medium">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-yellow flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-charcoal mb-1">Hours</p>
                        <p className="text-muted-foreground">Monday - Saturday</p>
                        <p className="text-muted-foreground">9:00 AM - 9:00 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://maps.app.goo.gl/fGSQzT1v7Jz4C4m2A" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-coral hover:bg-coral/90 text-white">
                    Get Directions
                  </Button>
                </a>
              </div>
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
