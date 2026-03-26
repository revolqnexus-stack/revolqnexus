'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const circularBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const section = sectionRef.current
    const btn = circularBtnRef.current
    if (!section || !btn) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate work cards on scroll
      gsap.from('.work-card', {
        scale: 1.2,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      // Circular button magnetic effect
      const handleMouseMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        
        gsap.to(btn, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: 'power2.out'
        })
      }

      const handleMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'elastic.out(1, 0.3)'
        })
      }

      btn.addEventListener('mousemove', handleMouseMove)
      btn.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        btn.removeEventListener('mousemove', handleMouseMove)
        btn.removeEventListener('mouseleave', handleMouseLeave)
      }
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  const projects = [
    {
      title: 'NIXTUDIO',
      category: 'Complete Digital',
      description: 'Custom website, SEO, and WhatsApp AI for bridal studio',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: 'HOLY FAMILY',
      category: 'Healthcare Platform',
      description: 'Patient portal and appointment system for multi-location dental practice',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&crop=center'
    },
    {
      title: 'TECH STARTUP',
      category: 'Brand & Web',
      description: 'Complete brand identity and SaaS platform for B2B tech company',
      image: 'https://images.unsplash.com/photo-1460925895917-ffdabcc3ba8f?w=800&h=600&fit=crop&crop=center'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen px-8 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="display-text text-[6rem] font-normal text-[var(--text-dark)] mb-4">
            Work
          </h2>
          <p className="body-text text-[var(--text-muted-light)] max-w-2xl">
            Electric results for brands that refuse to be ignored. No templates, no compromises.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="work-card overflow-hidden border border-[var(--border-dark)]"
            >
              <div className="aspect-video overflow-hidden bg-[var(--text-muted-light)]">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 bg-[var(--bg-sand)]">
                <div className="mb-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted-light)]">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[var(--text-dark)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--text-muted-light)] mb-4">
                  {project.description}
                </p>
                <Link 
                  href={`/work/${project.title.toLowerCase()}`}
                  className="inline-block text-sm font-sans uppercase tracking-[0.1em] text-[var(--text-dark)] border-b border-[var(--text-dark)] hover:text-[var(--fluid-blue)] transition-colors"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Circular Scroll Button */}
        <div className="flex justify-center">
          <button
            ref={circularBtnRef}
            className="circular-btn"
          >
            <span className="text-center">
              Scroll
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
