'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from '@/components/ui/MagneticButton'

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const packages = [
    {
      name: 'PRESENCE',
      price: '₹25,000',
      description: 'Professional website that establishes your digital presence',
      features: [
        '✓ Custom Next.js website (up to 5 pages)',
        '✓ Mobile-first responsive design',
        '✓ Basic SEO setup',
        '✓ Google Analytics integration',
        '✓ Contact form setup',
        '✓ 1 month post-launch support',
        '— Custom animations',
        '— Advanced SEO features',
        '— Content creation',
      ],
      featured: false,
      href: '/contact'
    },
    {
      name: 'SIGNAL',
      price: '₹55,000',
      description: 'Complete digital system with SEO and automation',
      features: [
        '✓ Custom Next.js website (unlimited pages)',
        '✓ Advanced SEO & schema markup',
        '✓ Google Business Profile optimization',
        '✓ WhatsApp AI agent setup',
        '✓ Custom animations & interactions',
        '✓ 3 months post-launch support',
        '✓ Content strategy & copywriting',
        '✓ Performance optimization',
        '✓ Monthly reporting for 3 months',
      ],
      featured: true,
      href: '/contact'
    },
    {
      name: 'ORBIT',
      price: '₹1,20,000',
      description: 'Premium digital ecosystem with ongoing management',
      features: [
        '✓ Everything in SIGNAL',
        '✓ 6 months monthly retainer included',
        '✓ Advanced automation workflows',
        '✓ Custom brand identity development',
        '✓ Professional photography coordination',
        '✓ Video content creation',
        '✓ Social media management',
        '✓ Paid advertising strategy',
        '✓ Conversion rate optimization',
      ],
      featured: false,
      href: '/contact'
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
      // Animate title
      gsap.from('.pricing-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pricing-title',
          start: 'top 80%',
        }
      })

      // Animate pricing cards
      gsap.from('.pricing-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pricing-card',
          start: 'top 75%',
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
          INVESTMENT
        </div>
        
        <h2 className="pricing-title h1 mb-4">
          Transparent pricing.<br />
          <em>No surprises.</em>
        </h2>
      </div>

      {/* Pricing Cards */}
      <div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`pricing-card relative ${pkg.featured ? 'scale-105' : ''}`}
            style={{
              background: pkg.featured ? 'var(--ink4)' : 'var(--ink3)',
              border: pkg.featured ? '1px solid var(--rose)' : '1px solid var(--border)',
              padding: '3rem 2.5rem',
              transform: pkg.featured ? 'scale(1.03)' : 'scale(1)',
              position: 'relative',
            }}
          >
            {/* Popular Badge */}
            {pkg.featured && (
              <div 
                className="absolute top-6 right-6 px-3 py-1 text-xs font-mono tracking-wider uppercase"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  padding: '0.3rem 0.8rem',
                  background: 'var(--rose)',
                  color: 'var(--ink)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  fontWeight: 300,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                }}
              >
                POPULAR
              </div>
            )}

            {/* Package Name */}
            <div 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 300,
                letterSpacing: '0.4em',
                color: 'var(--rose)',
                textTransform: 'uppercase',
              }}
            >
              {pkg.name}
            </div>

            {/* Price */}
            <div 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                fontWeight: 300,
                color: 'var(--white)',
                lineHeight: 1,
              }}
            >
              {pkg.price}
            </div>

            {/* Description */}
            <p 
              className="mb-8"
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.85rem',
                fontWeight: 200,
                lineHeight: 1.6,
                color: 'var(--fog)',
              }}
            >
              {pkg.description}
            </p>

            {/* Divider */}
            <div 
              className="mb-6"
              style={{
                height: '1px',
                background: 'var(--border)',
                margin: '1.5rem 0',
              }}
            />

            {/* Features */}
            <div className="mb-8 space-y-3">
              {pkg.features.map((feature, i) => (
                <div 
                  key={i}
                  className={`text-sm ${feature.startsWith('—') ? 'opacity-50' : ''}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 300,
                    color: feature.startsWith('—') ? 'var(--dim)' : 'var(--fog)',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <MagneticButton
              href={pkg.href}
              className={`w-full py-[1rem] text-center font-mono text-[0.65rem] font-light tracking-[0.2em] uppercase transition-colors ${
                pkg.featured 
                  ? 'bg-[var(--rose)] text-[var(--ink)] hover:bg-[var(--rose2)]' 
                  : 'border border-[var(--border2)] text-[var(--fog)] hover:text-[var(--white)] hover:border-[var(--rose)]'
              }`}
              style={{
                fontFamily: 'var(--font-mono)',
                display: 'block',
                width: '100%',
                padding: '1rem 0',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              START A PROJECT
            </MagneticButton>
          </div>
        ))}
      </div>
    </section>
  )
}
