"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const services = [
  { name: "Home Interiors", href: "/services#home-interiors" },
  { name: "Modular Kitchens", href: "/services#modular-kitchens" },
  { name: "Living & Dining", href: "/services#living-dining" },
  { name: "Bedroom Interiors", href: "/services#bedroom" },
  { name: "Wardrobes & Storage", href: "/services#wardrobes" },
  { name: "Commercial Interiors", href: "/services#commercial" },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    scrollToTop()
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-ash bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coral">
            <span className="text-lg font-bold text-primary-foreground">CI</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-charcoal">choudhary</span>
            <span className="ml-1 text-lg font-light text-teal">Interiors</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link 
            href="/" 
            className="text-sm font-medium text-charcoal transition-colors hover:text-coral"
            onClick={() => handleNavClick('/')}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-medium text-charcoal transition-colors hover:text-coral"
            onClick={() => handleNavClick('/about')}
          >
            About Us
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-charcoal transition-colors hover:text-coral">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              {services.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link href={service.href} className="cursor-pointer">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            href="/portfolio" 
            className="text-sm font-medium text-charcoal transition-colors hover:text-coral"
            onClick={() => handleNavClick('/portfolio')}
          >
            Portfolio
          </Link>
          <Link 
            href="/pricing" 
            className="text-sm font-medium text-charcoal transition-colors hover:text-coral"
            onClick={() => handleNavClick('/pricing')}
          >
            Pricing
          </Link>
          <Link 
            href="/contact" 
            className="text-sm font-medium text-charcoal transition-colors hover:text-coral"
            onClick={() => handleNavClick('/contact')}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium text-charcoal">
            <Phone className="h-4 w-4 text-teal" />
            +91 98765 43210
          </Link>
          <Button asChild className="bg-coral text-primary-foreground hover:bg-coral/90">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-charcoal" />
          ) : (
            <Menu className="h-6 w-6 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-ash bg-card lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            <Link 
              href="/" 
              className="py-3 text-base font-medium text-charcoal"
              onClick={() => handleNavClick('/')}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="py-3 text-base font-medium text-charcoal"
              onClick={() => handleNavClick('/about')}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="py-3 text-base font-medium text-charcoal"
              onClick={() => handleNavClick('/services')}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="py-3 text-base font-medium text-charcoal"
              onClick={() => handleNavClick('/portfolio')}
            >
              Portfolio
            </Link>
            <Link 
              href="/pricing" 
              className="py-3 text-base font-medium text-charcoal"
              onClick={() => handleNavClick('/pricing')}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="py-3 text-base font-medium text-charcoal"
              onClick={() => handleNavClick('/contact')}
            >
              Contact
            </Link>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="tel:+919876543210" className="flex items-center gap-2 text-sm font-medium text-charcoal">
                <Phone className="h-4 w-4 text-teal" />
                +91 98765 43210
              </Link>
              <Button asChild className="w-full bg-coral text-primary-foreground hover:bg-coral/90">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navigation
