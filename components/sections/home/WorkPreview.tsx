'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RevealImage from '@/components/ui/RevealImage'
import Tag from '@/components/ui/Tag'

export default function WorkPreview() {
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
      // Animate title
      gsap.from('.work-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.work-title',
          start: 'top 80%',
        }
      })

      // Animate work cards
      gsap.from('.work-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.work-card',
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
          OUR WORK
        </div>
        
        <h2 className="work-title h1 mb-4">
          Built for<br />
          <em>real businesses.</em>
        </h2>
      </div>

      {/* NIXTUDIO Case Study */}
      <Link
        href="/work/nixtudio"
        className="work-card group block mb-8"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-16 transition-all duration-300 group-hover:bg-[var(--ink4)]"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            padding: '4rem',
            background: 'var(--ink3)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Image */}
          <div className="order-2 lg:order-1">
            <RevealImage
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80"
              alt="NIXTUDIO Bridal Studio"
              width={600}
              height={400}
              priority={true}
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Tag className="mb-6">
              BRIDAL STUDIO · PALA, KERALA · 2025
            </Tag>

            <h3 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '3rem',
                fontWeight: 300,
                color: 'var(--white)',
                lineHeight: 1.1,
              }}
            >
              NIXTUDIO by Nikita Liby
            </h3>

            <p 
              className="mb-8"
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.92rem',
                fontWeight: 200,
                lineHeight: 1.8,
                color: 'var(--fog)',
              }}
            >
              Complete digital transformation for Kerala's premier bridal makeup artist. 
              Custom Next.js website, SEO optimization, and WhatsApp AI automation that 
              handles 50+ daily inquiries while Nikita focuses on her craft.
            </p>

            {/* Metrics Grid */}
            <div 
              className="grid grid-cols-2 gap-6 mb-8"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem',
              }}
            >
              <div>
                <div 
                  className="text-4xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                  }}
                >
                  464
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'var(--fog)',
                    textTransform: 'uppercase',
                  }}
                >
                  Google Reviews
                </div>
              </div>

              <div>
                <div 
                  className="text-4xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                  }}
                >
                  4.9★
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'var(--fog)',
                    textTransform: 'uppercase',
                  }}
                >
                  Rating
                </div>
              </div>

              <div>
                <div 
                  className="text-4xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                  }}
                >
                  #4
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'var(--fog)',
                    textTransform: 'uppercase',
                  }}
                >
                  Map Ranking
                </div>
              </div>

              <div>
                <div 
                  className="text-4xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                  }}
                >
                  24/7
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'var(--fog)',
                    textTransform: 'uppercase',
                  }}
                >
                  AI Agent
                </div>
              </div>
            </div>

            {/* CTA */}
            <div 
              className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 300,
                letterSpacing: '0.1em',
                color: 'var(--rose)',
                textTransform: 'uppercase',
              }}
            >
              VIEW CASE STUDY
              <span>→</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Holy Family - Coming Soon */}
      <div 
        className="work-card opacity-60"
        style={{
          padding: '4rem',
          background: 'var(--ink3)',
          border: '1px solid var(--border)',
          position: 'relative',
        }}
      >
        <div 
          className="absolute top-6 right-6 px-3 py-1 text-xs font-mono tracking-wider uppercase border rounded-full"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            fontWeight: 300,
            letterSpacing: '0.3em',
            color: 'var(--dim)',
            borderColor: 'var(--border)',
            textTransform: 'uppercase',
          }}
        >
          COMING SOON
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Tag className="mb-6">
              DENTAL CLINIC · KOTTAYAM, KERALA · 2025
            </Tag>

            <h3 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: 'var(--white)',
                lineHeight: 1.1,
              }}
            >
              Holy Family Dental
            </h3>

            <p 
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.92rem',
                fontWeight: 200,
                lineHeight: 1.8,
                color: 'var(--fog)',
              }}
            >
              Digital presence and patient management system for one of Kottayam's 
              most trusted dental clinics. Online booking, patient records, and 
              automated appointment reminders.
            </p>
          </div>

          <div 
            className="h-64 bg-[var(--ink2)] rounded-lg flex items-center justify-center"
            style={{
              height: '16rem',
              background: 'var(--ink2)',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div 
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                color: 'var(--dim)',
                textTransform: 'uppercase',
              }}
            >
              CASE STUDY IN PROGRESS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
