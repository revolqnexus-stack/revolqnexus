'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RevealImage from '@/components/ui/RevealImage'

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const team = [
    {
      name: 'Ajmal Mullapati',
      role: 'CO-FOUNDER',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      description: 'Full-stack developer with expertise in Next.js, AI automation, and system architecture.'
    },
    {
      name: 'Eathen Baby',
      role: 'CO-FOUNDER',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      description: 'SEO specialist and digital strategist focused on local search visibility and brand growth.'
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
      gsap.from('.team-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.team-title',
          start: 'top 80%',
        }
      })

      // Animate team cards
      gsap.from('.team-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.team-card',
          start: 'top 75%',
        }
      })

      // Animate team description
      gsap.from('.team-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.team-description',
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
          THE TEAM
        </div>
        
        <h2 className="team-title h1 mb-4">
          Two people.<br />
          <em>One system.</em>
        </h2>

        <p 
          className="max-w-md mx-auto"
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: '0.92rem',
            fontWeight: 200,
            lineHeight: 1.8,
            color: 'var(--fog)',
          }}
        >
          We build together. We ship together.
        </p>
      </div>

      {/* Team Cards */}
      <div 
        className="flex flex-col lg:flex-row gap-8 justify-center items-start mb-16"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginBottom: '4rem',
        }}
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="team-card group border border-[var(--border)] hover:border-[var(--rose)] transition-all duration-300"
            style={{
              width: '420px',
              background: 'var(--ink3)',
              border: '1px solid var(--border)',
              transition: 'border-color 0.4s',
            }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <RevealImage
                src={member.image}
                alt={member.name}
                width={420}
                height={315}
              />
            </div>

            {/* Member Info */}
            <div 
              className="p-7"
              style={{
                padding: '1.8rem',
              }}
            >
              <h3 
                className="mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.8rem',
                  fontWeight: 300,
                  color: 'var(--white)',
                }}
              >
                {member.name}
              </h3>

              <div 
                className="mb-3"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 300,
                  letterSpacing: '0.35em',
                  color: 'var(--rose)',
                  textTransform: 'uppercase',
                }}
              >
                {member.role}
              </div>

              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.85rem',
                  fontWeight: 200,
                  lineHeight: 1.6,
                  color: 'var(--fog)',
                }}
              >
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Team Description */}
      <div 
        className="team-description text-center max-w-2xl mx-auto"
        style={{
          textAlign: 'center',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <p 
          style={{
            fontFamily: 'var(--font-jost)',
            fontSize: '0.92rem',
            fontWeight: 200,
            lineHeight: 1.8,
            color: 'var(--fog)',
          }}
        >
          REVOLQ is two people who got tired of watching good businesses in Kerala 
          get ignored online. We started building systems that change that.
        </p>
      </div>
    </section>
  )
}
