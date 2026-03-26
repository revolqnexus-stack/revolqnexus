'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'

export default function HeroSection() {
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
      // Animate label
      gsap.to('.hero-label', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.1,
        ease: 'power2.out',
      })

      // Animate headline lines staggered
      gsap.to('.hero-line', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        delay: 0.3,
        ease: 'power3.out',
      })

      // Animate sub text
      gsap.to('.hero-sub', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power2.out',
      })

      // Animate buttons
      gsap.to('.hero-button', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 1,
        ease: 'power2.out',
      })

      // Animate contact info
      gsap.to('.hero-contact', {
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: 1.2,
        ease: 'power2.out',
      })

      // Animate scroll indicator
      gsap.to('.hero-scroll', {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 1.4,
        ease: 'power2.out',
      })

      // Pulse animation for scroll indicator
      gsap.to('.scroll-line', {
        scaleY: 1.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative z-[10] min-h-screen flex flex-col justify-center items-center text-center px-8"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Label */}
      <div 
        className="hero-label opacity-0 translate-y-5"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          fontWeight: 300,
          letterSpacing: '0.5em',
          color: 'var(--rose)',
          textTransform: 'uppercase',
          marginBottom: '2rem',
        }}
      >
        KERALA · INDIA · DIGITAL AGENCY
      </div>

      {/* Main Headline */}
      <div className="max-w-6xl mx-auto">
        <h1 className="display mb-8">
          <div className="hero-line opacity-0 translate-y-10">
            <SplitText text="We build" />
          </div>
          <div className="hero-line opacity-0 translate-y-10">
            <SplitText text="digital systems" className="italic" />
          </div>
          <div className="hero-line opacity-0 translate-y-10">
            <SplitText text="that work." />
          </div>
        </h1>

        {/* Sub Text */}
        <div 
          className="hero-sub opacity-0 translate-y-8 max-w-lg mx-auto mb-12"
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: '0.92rem',
            fontWeight: 200,
            lineHeight: 1.9,
            color: 'var(--text-muted)',
            maxWidth: '420px',
          }}
        >
          Web development, SEO, AI automation, and brand strategy for businesses that refuse to be invisible.
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <MagneticButton
            href="/contact"
            className="hero-button opacity-0 translate-y-6 px-[2.8rem] py-[1rem] bg-[var(--rose)] text-[var(--ink)] hover:bg-[var(--rose2)] transition-colors"
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
            href="/work"
            className="hero-button opacity-0 translate-y-6 px-[2.8rem] py-[1rem] border border-[var(--border2)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--rose)] transition-colors"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            SEE OUR WORK
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Left Contact */}
      <div 
        className="hero-contact absolute left-10 bottom-12 opacity-0 -translate-x-4"
        style={{
          position: 'absolute',
          left: '2.5rem',
          bottom: '3rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          fontWeight: 300,
          color: 'var(--text-dim)',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
        }}
      >
        +91 79956 17374
      </div>

      {/* Scroll Indicator */}
      <div 
        className="hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 scale-75"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div 
          className="text-center mb-2"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            fontWeight: 300,
            color: 'var(--text-dim)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          SCROLL
        </div>
        <div className="flex justify-center">
          <div 
            className="scroll-line w-px"
            style={{
              height: '60px',
              background: 'linear-gradient(to bottom, var(--rose), transparent)',
              transformOrigin: 'top',
            }}
          />
        </div>
      </div>
    </section>
  )
}
