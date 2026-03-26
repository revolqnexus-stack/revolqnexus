'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { number: 464, suffix: '', label: 'Google Reviews' },
    { number: 4.9, suffix: '★', label: 'Rating' },
    { number: 24, suffix: '/7', label: 'AI Support' },
    { number: 100, suffix: '%', label: 'Kerala Based' },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const section = sectionRef.current
    if (!section) return

    // Check for reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Counter animation
      const counters = section.querySelectorAll('.stat-number')
      
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target') || '0')
        const suffix = counter.getAttribute('data-suffix') || ''
        const isDecimal = target % 1 !== 0
        
        ScrollTrigger.create({
          trigger: counter,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.to({ value: 0 }, {
              value: target,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                const current = this.targets()[0].value
                if (isDecimal) {
                  counter.textContent = current.toFixed(1) + suffix
                } else {
                  counter.textContent = Math.floor(current).toLocaleString() + suffix
                }
              }
            })
          }
        })
      })

      // Fade in animation
      gsap.from('.stat-cell', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
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
      className="relative z-[10]"
      style={{
        padding: '6rem 5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: 'var(--border)',
        borderTop: '1px solid var(--border)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="stat-cell flex flex-col items-center justify-center text-center"
          style={{
            background: 'var(--ink)',
            padding: '3rem 2rem',
          }}
        >
          <div 
            className="stat-number mb-3"
            data-target={stat.number}
            data-suffix={stat.suffix}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
              fontWeight: 300,
              color: 'var(--white)',
              lineHeight: 1,
            }}
          >
            0{stat.suffix}
          </div>
          <div 
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              fontWeight: 300,
              letterSpacing: '0.35em',
              color: 'var(--fog)',
              textTransform: 'uppercase',
              marginTop: '0.8rem',
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  )
}
