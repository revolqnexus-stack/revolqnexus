'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <Link 
          href="/"
          className="display-text text-[2rem] font-normal text-[var(--text-light)] hover:text-[var(--fluid-blue)] transition-colors"
        >
          REVOLQ
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-[var(--text-light)] font-sans text-sm uppercase tracking-[0.2em] hover:text-[var(--fluid-blue)] transition-colors"
        >
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99] bg-[var(--bg-black)] flex items-center justify-center">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-[var(--text-light)] text-2xl"
          >
            ×
          </button>
          
          <div className="text-center space-y-8">
            <Link
              href="/work"
              onClick={() => setMobileMenuOpen(false)}
              className="block display-text text-[4rem] text-[var(--text-light)] hover:text-[var(--fluid-blue)] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="block display-text text-[4rem] text-[var(--text-light)] hover:text-[var(--fluid-blue)] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block display-text text-[4rem] text-[var(--text-light)] hover:text-[var(--fluid-blue)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block display-text text-[4rem] text-[var(--text-light)] hover:text-[var(--fluid-blue)] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
