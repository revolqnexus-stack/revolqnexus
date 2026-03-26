'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<SVGLineElement>(null)

  const steps = [
    {
      label: 'DISCOVERY',
      title: 'Research & Strategy',
      description: 'We dive deep into your business, market, and competitors. Every decision is backed by data, not guesses.'
    },
    {
      label: 'DESIGN',
      title: 'System Architecture',
      description: 'We map out the complete digital system — from user flows to technical infrastructure. Nothing is left to chance.'
    },
    {
      label: 'DEVELOP',
      title: 'Build & Implement',
      description: 'Custom code, not templates. We build everything from scratch to your exact specifications with performance as priority.'
    },
    {
      label: 'LAUNCH',
      title: 'Deploy & Optimize',
      description: 'We go live with full monitoring, testing, and optimization. The system works from day one and improves over time.'
    },
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const section = sectionRef.current
    const line = lineRef.current
    if (!section || !line) return

    // Check for reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate title
      gsap.from('.process-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.process-title',
          start: 'top 80%',
        }
      })

      // Animate steps
      gsap.from('.process-step', {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.process-step',
          start: 'top 75%',
        }
      })

      // Animate vertical line
      gsap.fromTo(line, 
        {
          strokeDashoffset: 1000,
        },
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          }
        }
      )
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
        padding: '10rem 5rem',
        position: 'relative',
        zIndex: 10,
        background: 'var(--ink2)',
      }}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <div 
          className="mb-6"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 300,
            letterSpacing: '0.5em',
            color: 'var(--rose)',
            textTransform: 'uppercase',
          }}
        >
          HOW WE WORK
        </div>
        
        <h2 className="process-title h1 mb-4">
          Four steps.<br />
          <em>Zero guesswork.</em>
        </h2>
      </div>

      {/* Process Steps */}
      <div className="relative">
        {/* Vertical Line */}
        <svg 
          className="absolute left-0 top-0 w-full h-full"
          style={{
            position: 'absolute',
            left: '60px',
            top: '0',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <line
            ref={lineRef}
            x1="60"
            y1="0"
            x2="60"
            y2="100%"
            stroke="var(--rose)"
            strokeWidth="1"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            opacity="0.4"
          />
        </svg>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="process-step grid grid-cols-[120px_1fr] gap-12 py-16 border-b border-[var(--border)]"
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '3rem',
                padding: '4rem 0',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {/* Step Number */}
              <div 
                className="flex items-start justify-start"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '8rem',
                  fontWeight: 300,
                  color: 'var(--white)',
                  opacity: 0.08,
                  lineHeight: 1,
                }}
              >
                0{index + 1}
              </div>

              {/* Step Content */}
              <div>
                {/* Step Label */}
                <div 
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'var(--rose)',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.label}
                </div>

                {/* Step Title */}
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.2rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>

                {/* Step Description */}
                <p 
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: '0.92rem',
                    fontWeight: 200,
                    lineHeight: 1.8,
                    color: 'var(--fog)',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
