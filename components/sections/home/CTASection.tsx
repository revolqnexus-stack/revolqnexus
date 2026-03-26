'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from '@/components/ui/MagneticButton'

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const section = sectionRef.current
    if (!section) return

    // Check for reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate content
      gsap.from('.cta-content', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
        }
      })

      // Animate buttons
      gsap.from('.cta-button', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 50%',
        }
      })
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative z-[10] overflow-hidden"
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
      }}
    >
      {/* Content */}
      <div className="cta-content text-center max-w-2xl mx-auto px-8">
        {/* Label */}
        <div 
          className="mb-8"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 300,
            letterSpacing: '0.5em',
            color: 'var(--rose)',
            textTransform: 'uppercase',
          }}
        >
          START A PROJECT
        </div>

        {/* Headline */}
        <h2 
          className="h1 mb-8 italic"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(3rem, 6vw, 6rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--white)',
            lineHeight: 1.1,
          }}
        >
          Ready to grow?
        </h2>

        {/* Sub text */}
        <p 
          className="mb-12"
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: '0.92rem',
            fontWeight: 200,
            lineHeight: 1.8,
            color: 'var(--fog)',
            maxWidth: '480px',
            margin: '0 auto 3rem',
          }}
        >
          Your competitors are online. Your customers are searching. 
          Let's make sure they find you.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <MagneticButton
            href="/contact"
            className="cta-button px-[2.8rem] py-[1rem] bg-[var(--rose)] text-[var(--ink)] hover:bg-[var(--rose2)] transition-colors"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            START A PROJECT
          </MagneticButton>

          <MagneticButton
            href="https://wa.me/917995617374"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button px-[2.8rem] py-[1rem] border border-[var(--border2)] text-[var(--fog)] hover:text-[var(--white)] hover:border-[var(--rose)] transition-colors"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            WHATSAPP US
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
