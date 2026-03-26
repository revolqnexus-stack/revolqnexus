'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const section = sectionRef.current
    if (!section) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate lines from bottom with clip-path
      gsap.to('.hero-line', {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
      })

      // Animate sub text
      gsap.to('.hero-sub', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.8,
        ease: 'power2.out'
      })

      // Theme transition trigger
      ScrollTrigger.create({
        trigger: section,
        start: 'bottom center',
        end: 'bottom top',
        onEnter: () => {
          document.body.classList.add('theme-light')
        },
        onLeaveBack: () => {
          document.body.classList.remove('theme-light')
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Content Container - Proper Flexbox Structure */}
      <div className="flex flex-col items-center justify-center text-center px-8 pt-32 min-h-screen">
        {/* Label */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--fluid-cobalt)]">
            KERALA · INDIA · DIGITAL SYSTEMS
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-2 max-w-6xl mx-auto">
          <h1 className="hero-line overflow-hidden">
            <div className="display-text hero font-sans text-[var(--text-light)]">
              Building systems
            </div>
          </h1>
          <h1 className="hero-line overflow-hidden">
            <div className="display-text hero italic text-outline-ultramarine">
              that work.
            </div>
          </h1>
        </div>

        {/* Sub Text */}
        <div 
          className="hero-sub opacity-0 translate-y-8 max-w-2xl mx-auto mt-12"
        >
          <p className="body-text text-[var(--text-muted-dark)]">
            Electric brutalism meets digital excellence. We build systems that dominate attention and deliver results.
          </p>
        </div>
      </div>
    </section>
  )
}