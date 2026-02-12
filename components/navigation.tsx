'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect for nav background - memoized
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  // Handle scroll effect for nav background
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Why Eleventh-Hour', href: '#' },
    { label: 'Portfolio', href: '#' },
    { label: 'Contact Us', href: '#' },
  ]





  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 py-3 transition-all duration-300">
      <div className="mx-auto w-full md:w-3/4 md:ml-auto md:mr-auto lg:w-3/4">
        {/* Glass morphism background container */}
        <div
          className={`relative rounded-lg border transition-all duration-300 px-4 py-3 backdrop-blur-2xl md:px-6 ${isScrolled
            ? 'border-white/20 bg-white/10 shadow-lg shadow-primary/10'
            : 'border-white/10 bg-white/5'
            }`}
        >
          {/* Content wrapper */}
          <div className="flex items-center justify-between gap-8">
            {/* Logo with animation */}
            <Link href="#" className="flex-shrink-0 group">
              <div className="flex items-center gap-2 transition-all duration-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/50">
                  <span className="text-xs font-bold text-primary-foreground">p</span>
                </div>
                <span className="text-lg font-bold text-white transition-all duration-300 group-hover:text-primary">
                  pico
                </span>
              </div>
            </Link>

            {/* Center Navigation Items */}
            <div className="hidden flex-1  items-center justify-center gap-16 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className=" font-medium  tracking-widest text-lg  text-white transition-colors duration-300 hover:text-white/50"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Language Selector and Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-4">


              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-300 text-white/80 hover:text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/10 animate-slide-down">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-white/80 transition-all duration-300 hover:bg-white/100"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 py-2 pt-3 border-t border-white/10">
                  <button className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-primary border border-transparent hover:border-primary/50 w-full justify-center">
                    EN
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
