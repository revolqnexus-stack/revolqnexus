'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const section = sectionRef.current
    const scrollContainer = scrollRef.current
    if (!section || !scrollContainer) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Horizontal scroll animation
      const scrollTween = gsap.to(scrollContainer, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: true,
          onEnter: () => {
            document.body.classList.remove('theme-light')
          }
        }
      })

      // Animate service items
      gsap.from('.service-item', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })
    }, section)

    return () => {
      ctx.revert()
    }
  }, [])

  const services = [
    {
      name: 'Web Development',
      description: 'Custom Next.js systems engineered for performance'
    },
    {
      name: 'SEO & GBP',
      description: 'Local search dominance and Google Business Profile management'
    },
    {
      name: 'AI Automation',
      description: 'WhatsApp AI agents and workflow automation'
    },
    {
      name: 'Content & Copy',
      description: 'Strategic content that converts and ranks'
    },
    {
      name: 'Brand Strategy',
      description: 'Positioning and identity that cuts through noise'
    },
    {
      name: 'Monthly Retainer',
      description: 'Complete digital team as a service'
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[var(--bg-black)]"
    >
      <div className="h-screen flex items-center">
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-16 px-8"
            style={{ width: '200%' }}
          >
            {/* First set of services */}
            {services.map((service, index) => (
              <div 
                key={`first-${index}`}
                className="service-item flex-shrink-0 w-[80vw] md:w-[40vw] text-center"
              >
                <h3 className="display-text text-[8rem] md:text-[10rem] font-normal text-[var(--text-light)] mb-8">
                  {service.name}
                </h3>
                <p className="body-text text-[var(--text-muted-dark)] max-w-md mx-auto">
                  {service.description}
                </p>
              </div>
            ))}
            
            {/* Duplicate set for seamless scroll */}
            {services.map((service, index) => (
              <div 
                key={`second-${index}`}
                className="service-item flex-shrink-0 w-[80vw] md:w-[40vw] text-center"
              >
                <h3 className="display-text text-[8rem] md:text-[10rem] font-normal text-[var(--text-light)] mb-8">
                  {service.name}
                </h3>
                <p className="body-text text-[var(--text-muted-dark)] max-w-md mx-auto">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
