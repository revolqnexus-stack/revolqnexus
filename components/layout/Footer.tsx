import Link from 'next/link'
import MagneticButton from '@/components/ui/MagneticButton'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer 
      className="relative"
      style={{
        background: 'var(--ink2)',
        borderTop: '1px solid var(--border)',
        padding: '6rem 5rem 3rem',
      }}
    >
      {/* Decorative REVOLQ text */}
      <div 
        className="absolute top-[-2rem] left-0 right-0 text-center pointer-events-none select-none"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '18vw',
          fontWeight: 300,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.04)',
        }}
      >
        REVOLQ
      </div>

      <div className="grid grid-cols-4 gap-8 relative z-10">
        {/* Navigate Column */}
        <div>
          <h3 
            className="font-mono text-[0.65rem] font-light tracking-[0.4em] uppercase mb-6"
            style={{ 
              fontFamily: 'var(--font-mono)',
              color: 'var(--rose)'
            }}
          >
            NAVIGATE
          </h3>
          <ul className="space-y-3">
            <li>
              <Link 
                href="/work"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                href="/services"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h3 
            className="font-mono text-[0.65rem] font-light tracking-[0.4em] uppercase mb-6"
            style={{ 
              fontFamily: 'var(--font-mono)',
              color: 'var(--rose)'
            }}
          >
            SERVICES
          </h3>
          <ul className="space-y-3">
            <li>
              <Link 
                href="/services/web-development"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link 
                href="/services/seo-gbp"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                SEO & GBP
              </Link>
            </li>
            <li>
              <Link 
                href="/services/ai-automation"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                AI Automation
              </Link>
            </li>
            <li>
              <Link 
                href="/services/content-copy"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                Content & Copy
              </Link>
            </li>
            <li>
              <Link 
                href="/services/brand-strategy"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                Brand Strategy
              </Link>
            </li>
            <li>
              <Link 
                href="/services/retainer"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                Monthly Retainer
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 
            className="font-mono text-[0.65rem] font-light tracking-[0.4em] uppercase mb-6"
            style={{ 
              fontFamily: 'var(--font-mono)',
              color: 'var(--rose)'
            }}
          >
            CONTACT
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[var(--fog)]" />
              <a 
                href="tel:+917995617374"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                +91 79956 17374
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-[var(--fog)]" />
              <a 
                href="tel:+917306085895"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                +91 73060 85895
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MessageCircle size={16} className="text-[var(--fog)]" />
              <a 
                href="https://wa.me/917995617374"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-[var(--fog)]" />
              <span className="text-[var(--fog)] text-sm">
                Kerala, India
              </span>
            </div>
          </div>
        </div>

        {/* Legal Column */}
        <div>
          <h3 
            className="font-mono text-[0.65rem] font-light tracking-[0.4em] uppercase mb-6"
            style={{ 
              fontFamily: 'var(--font-mono)',
              color: 'var(--rose)'
            }}
          >
            LEGAL
          </h3>
          <ul className="space-y-3">
            <li>
              <Link 
                href="/privacy"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link 
                href="/terms"
                className="text-[var(--fog)] hover:text-[var(--white)] transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="flex justify-between items-center mt-16 pt-8 relative z-10"
        style={{
          borderTop: '1px solid var(--border)',
        }}
      >
        <p 
          className="font-mono text-[0.65rem] font-light"
          style={{ 
            fontFamily: 'var(--font-mono)',
            color: 'var(--dim)'
          }}
        >
          © 2026 REVOLQ. All rights reserved.
        </p>
        
        <p 
          className="font-mono text-[0.65rem] font-light"
          style={{ 
            fontFamily: 'var(--font-mono)',
            color: 'var(--dim)'
          }}
        >
          Designed & built by REVOLQ
        </p>
      </div>
    </footer>
  )
}
