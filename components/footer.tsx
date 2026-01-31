import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const services = [
  { name: "Home Interiors", href: "/services#home-interiors" },
  { name: "Modular Kitchens", href: "/services#modular-kitchens" },
  { name: "Living & Dining", href: "/services#living-dining" },
  { name: "Bedroom Interiors", href: "/services#bedroom" },
  { name: "Wardrobes & Storage", href: "/services#wardrobes" },
  { name: "Commercial Interiors", href: "/services#commercial" },
]

const company = [
  { name: "About Us", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

function Footer() {
  return (
    <footer className="border-t border-ash bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral">
                <span className="text-lg font-bold text-white">CI</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white">choudhary</span>
                <span className="ml-1 text-lg font-light text-teal">Interiors</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Transforming spaces into beautiful, functional homes. With 10+ years of experience, 
              we deliver premium interior design solutions tailored to your lifestyle.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-coral">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-coral">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-coral">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-coral">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-sm text-gray-400 transition-colors hover:text-coral"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-sm text-gray-400 transition-colors hover:text-coral"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <span className="text-sm text-gray-400">
                  Shop no. 2, Badwaik chawl, Lal Bahadur Shastri Marg,<br />
                  opp. Jain mandir, Kukreja, Govind Nagar, Bhandup West,<br />
                  Mumbai, Maharashtra 400078
                </span>
              </li>
              <li>
                <Link href="tel:+918828380687" className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-coral">
                  <Phone className="h-5 w-5 shrink-0 text-teal" />
                  +91 88283 80687
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/918828380687" target="_blank" className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-coral">
                  <Phone className="h-5 w-5 shrink-0 text-teal" />
                  WhatsApp: +91 88283 80687
                </Link>
              </li>
              <li>
                <Link href="mailto:hello@choudharyinteriors.in" className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-coral">
                  <Mail className="h-5 w-5 shrink-0 text-teal" />
                  hello@choudharyinteriors.in
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} choudhary Interiors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 transition-colors hover:text-coral">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 transition-colors hover:text-coral">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
