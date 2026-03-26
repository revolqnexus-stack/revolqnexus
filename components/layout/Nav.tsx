'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'WORK', href: '/work' },
    { name: 'SERVICES', href: '/services' },
    { name: 'ABOUT', href: '/about' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[200] px-[1.5rem] sm:px-[3.5rem] py-[1.8rem] flex justify-between items-center transition-all duration-500 ${
        isScrolled ? 'bg-[rgba(5,5,10,0.85)] backdrop-blur-[20px] border-b border-[var(--border)] py-[1.2rem]' : 'bg-transparent'
      }`}
    >
      {/* Left: Logo */}
      <Link href="/" className="z-[210]">
        <span className="font-[var(--font-cormorant)] font-light text-[1.4rem] tracking-[0.35em] text-[var(--white)]">
          REVOLQ
        </span>
      </Link>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex gap-[2rem] items-center z-[210]">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className={`font-[var(--font-mono)] text-[0.62rem] tracking-[0.3em] transition-all duration-300 ${
              pathname.startsWith(link.href) ? 'text-[var(--white)] opacity-100' : 'text-[var(--fog)] opacity-60 hover:opacity-100'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: CTA & Mobile Toggle */}
      <div className="flex items-center gap-6 z-[210]">
        <div className="hidden sm:block">
          <MagneticButton 
            href="/contact"
            className="px-[1.8rem] py-[0.6rem] bg-[var(--accent)] text-[var(--white)] font-[var(--font-mono)] text-[0.65rem] tracking-[0.1em] uppercase hover:bg-[var(--accent2)] transition-colors shadow-lg shadow-[var(--glow)]"
          >
            LET'S TALK
          </MagneticButton>
        </div>

        {/* Hamburger */}
        <button 
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`w-6 h-[1px] bg-[var(--white)] transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-[1px] bg-[var(--white)] transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-[1px] bg-[var(--white)] transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[var(--ink)] z-[205] flex flex-col justify-center items-center p-8">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-[var(--font-cormorant)] text-[clamp(3rem,10vw,6rem)] font-light text-[var(--white)] hover:text-[var(--gold)] italic transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 px-[2.8rem] py-[1rem] border border-[var(--accent)] text-[var(--accent)] font-[var(--font-mono)] text-[0.7rem] tracking-[0.2em] uppercase"
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
