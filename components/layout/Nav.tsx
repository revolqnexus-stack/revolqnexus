'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MagneticButton from '@/components/ui/MagneticButton'
import { Menu, X, Phone } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  const navLinks = [
    { href: '/work', label: 'WORK' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
          scrolled ? 'bg-[rgba(5,5,10,0.85)] backdrop-blur-[20px] border-b border-[var(--border)]' : ''
        }`}
        style={{
          padding: '1.8rem 3.5rem',
        }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/"
            className="font-cormorant text-[1.4rem] font-light tracking-[0.35em] text-[var(--white)] hover:text-[var(--rose)] transition-colors"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            REVOLQ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-[0.62rem] font-light tracking-[0.3em] uppercase transition-all ${
                    isActive(link.href) 
                      ? 'text-[var(--white)] opacity-100' 
                      : 'text-[var(--fog)] opacity-60 hover:text-[var(--white)] hover:opacity-100'
                  }`}
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="tel:+917995617374"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                +91 79956 17374
              </a>
              
              <MagneticButton
                href="/contact"
                className="px-[2.8rem] py-[1rem] bg-[var(--rose)] text-[var(--ink)] font-mono text-[0.65rem] font-light tracking-[0.2em] uppercase hover:bg-[var(--rose2)] transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                LET'S TALK
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[var(--white)] p-2"
            data-cursor="hoverable"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[199] bg-[var(--ink)] md:hidden"
          style={{
            background: 'var(--ink)',
          }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-12">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-[var(--white)] p-2"
              data-cursor="hoverable"
            >
              <X size={24} />
            </button>

            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-cormorant text-[clamp(3rem,10vw,6rem)] font-light transition-all ${
                  isActive(link.href) ? 'text-[var(--rose)]' : 'text-[var(--white)]'
                }`}
                style={{ 
                  fontFamily: 'var(--font-cormorant)',
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col items-center gap-6 mt-8">
              <a 
                href="tel:+917995617374"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-lg flex items-center gap-2"
              >
                <Phone size={20} />
                +91 79956 17374
              </a>
              
              <MagneticButton
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-[2.8rem] py-[1rem] bg-[var(--rose)] text-[var(--ink)] font-mono text-[0.65rem] font-light tracking-[0.2em] uppercase hover:bg-[var(--rose2)] transition-colors"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                LET'S TALK
              </MagneticButton>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
