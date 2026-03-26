'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Search, Bot, PenLine, Layers, RefreshCw } from 'lucide-react'
import SplitText from '@/components/ui/SplitText'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { 
    id: '01', 
    title: 'WEB DEVELOPMENT', 
    href: '/services/web-development', 
    icon: Code2, 
    desc: 'Custom Next.js systems engineered for performance and conversion.' 
  },
  { 
    id: '02', 
    title: 'SEO & GBP', 
    href: '/services/seo-gbp', 
    icon: Search, 
    desc: 'Visibility systems that put your business in front of the right customers.' 
  },
  { 
    id: '03', 
    title: 'AI AUTOMATION', 
    href: '/services/ai-automation', 
    icon: Bot, 
    desc: 'WhatsApp agents and n8n workflows that work while you sleep.' 
  },
  { 
    id: '04', 
    title: 'CONTENT & COPY', 
    href: '/services/content-copy', 
    icon: PenLine, 
    desc: 'Magnetic words that turn visitors into loyal clients.' 
  },
  { 
    id: '05', 
    title: 'BRAND STRATEGY', 
    href: '/services/brand-strategy', 
    icon: Layers, 
    desc: 'Visual language and positioning for unforgettable businesses.' 
  },
  { 
    id: '06', 
    title: 'MONTHLY RETAINER', 
    href: '/services/retainer', 
    icon: RefreshCw, 
    desc: 'Ongoing digital leadership and GBP management for consistent growth.' 
  },
]

export default function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const cards = el.querySelectorAll('.service-card')
    
    gsap.from(cards, {
      y: 40,
      opacity: 0,
      stagger: 0.07,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      }
    })
  }, [])

  return (
    <section className="relative z-10 py-[10rem] px-[2rem] sm:px-[5rem]">
      <div className="max-w-7xl mx-auto">
        {/* Label and Title */}
        <div className="mb-16">
          <div className="label mb-4">WHAT WE DO</div>
          <h2 className="h2 max-w-2xl">
            <SplitText text="Every system." />
            <em>Carefully built.</em>
          </h2>
        </div>

        {/* 2x3 Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[var(--border)] gap-[1px]">
          {services.map((service, i) => (
            <Link 
              key={i} 
              href={service.href}
              className="service-card group relative bg-[var(--ink3)] p-[3rem] transition-colors duration-400 hover:bg-[var(--ink4)] flex flex-col min-h-[400px]"
            >
              {/* Left Accent Border */}
              <div className="absolute left-0 top-0 bottom-0 w-0 bg-[var(--accent)] transition-all duration-400 group-hover:w-[2px]" />

              {/* Number and Icon */}
              <div className="flex justify-between items-start mb-12">
                <span className="font-[var(--font-mono)] text-[0.6rem] text-[var(--accent2)] tracking-widest">{service.id}</span>
                <service.icon size={20} className="text-[var(--fog)] group-hover:text-[var(--white)] transition-colors duration-400" />
              </div>

              {/* Title and Body */}
              <div className="mt-auto">
                <h3 className="h3 mb-4 group-hover:text-[var(--white)] transition-colors duration-400 leading-tight">
                  {service.title}
                </h3>
                <p className="body text-[0.85rem] line-clamp-3">
                  {service.desc}
                </p>
              </div>

              {/* Arrow */}
              <div className="mt-8 self-end font-[var(--font-mono)] text-[var(--accent2)] text-[1.2rem] transition-transform duration-400 group-hover:translate-x-2">
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
