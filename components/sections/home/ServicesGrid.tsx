'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Code2, 
  Search, 
  Bot, 
  PenLine, 
  Layers, 
  RefreshCw,
  ArrowRight 
} from 'lucide-react'

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      number: '01',
      icon: Code2,
      title: 'WEB DEVELOPMENT',
      description: 'Custom Next.js systems engineered for growth',
      href: '/services/web-development'
    },
    {
      number: '02',
      icon: Search,
      title: 'SEO & GBP',
      description: 'Local search visibility that compounds over time',
      href: '/services/seo-gbp'
    },
    {
      number: '03',
      icon: Bot,
      title: 'AI AUTOMATION',
      description: 'WhatsApp agents and workflows that work 24/7',
      href: '/services/ai-automation'
    },
    {
      number: '04',
      icon: PenLine,
      title: 'CONTENT & COPY',
      description: 'Words that make visitors become customers',
      href: '/services/content-copy'
    },
    {
      number: '05',
      icon: Layers,
      title: 'BRAND STRATEGY',
      description: 'Positioning and identity that makes you unforgettable',
      href: '/services/brand-strategy'
    },
    {
      number: '06',
      icon: RefreshCw,
      title: 'MONTHLY RETAINER',
      description: 'We become your complete digital team',
      href: '/services/retainer'
    },
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
      // Animate cards staggered
      gsap.from('.service-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      })

      // Animate title
      gsap.from('.services-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 80%',
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
        padding: '10rem 5rem',
        position: 'relative',
        zIndex: 10,
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
          WHAT WE DO
        </div>
        
        <h2 className="services-title h1 mb-4">
          Every system.<br />
          <em>Carefully built.</em>
        </h2>
      </div>

      {/* Services Grid */}
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
        }}
      >
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="service-card group block transition-all duration-300 hover:bg-[var(--ink4)] border-l-2 border-transparent hover:border-l-[var(--rose)]"
            style={{
              background: 'var(--ink3)',
              padding: '3rem 2.5rem',
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            {/* Number */}
            <div 
              className="mb-8"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                fontWeight: 300,
                color: 'var(--rose)',
              }}
            >
              {service.number}
            </div>

            {/* Icon */}
            <div className="mb-6">
              <service.icon 
                size={20} 
                style={{ color: 'var(--fog)' }}
              />
            </div>

            {/* Title */}
            <h3 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'var(--white)',
              }}
            >
              {service.title}
            </h3>

            {/* Description */}
            <p 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.85rem',
                fontWeight: 200,
                lineHeight: 1.6,
                color: 'var(--fog)',
              }}
            >
              {service.description}
            </p>

            {/* Arrow */}
            <div 
              className="card-arrow flex justify-end transition-transform duration-300 group-hover:translate-x-1"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--rose)',
              }}
            >
              <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
