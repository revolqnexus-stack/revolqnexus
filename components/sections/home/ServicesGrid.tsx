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
    desc: 'Custom Next.js systems engineered for performance and conversion.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: '02', 
    title: 'SEO & GBP', 
    href: '/services/seo-gbp', 
    icon: Search, 
    desc: 'Visibility systems that put your business in front of the right customers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: '03', 
    title: 'AI AUTOMATION', 
    href: '/services/ai-automation', 
    icon: Bot, 
    desc: 'WhatsApp agents and n8n workflows that work while you sleep.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: '04', 
    title: 'CONTENT & COPY', 
    href: '/services/content-copy', 
    icon: PenLine, 
    desc: 'Magnetic words that turn visitors into loyal clients.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: '05', 
    title: 'BRAND STRATEGY', 
    href: '/services/brand-strategy', 
    icon: Layers, 
    desc: 'Visual language and positioning for unforgettable businesses.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&q=80'
  },
  { 
    id: '06', 
    title: 'MONTHLY RETAINER', 
    href: '/services/retainer', 
    icon: RefreshCw, 
    desc: 'Ongoing digital leadership and GBP management for consistent growth.',
    image: 'https://images.unsplash.com/photo-1454165833767-1521a28a3952?auto=format&fit=crop&w=600&q=80'
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
    <section className="relative z-10 py-[12rem] px-[2rem] sm:px-[5rem] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto">
        {/* Label and Title */}
        <div className="mb-24">
          <div className="label mb-6">SERVICES</div>
          <h2 className="display text-[clamp(3rem,6vw,5.5rem)]">
            The <em className="serif-italic">systems.</em>
          </h2>
          <p className="body mt-8 opacity-60">Every system. Carefully built for long-term dominance.</p>
        </div>

        {/* List Style Layout */}
        <div ref={gridRef} className="flex flex-col border-t border-[var(--border)]">
          {services.map((service, i) => (
            <Link 
              key={i} 
              href={service.href}
              className="service-card group relative py-12 border-b border-[var(--border)] transition-all duration-500 hover:px-8"
            >
              {/* Gold Accent Dot (Hidden by default, reveal on hover) */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--accent)] rounded-full opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex items-start gap-12">
                   <div className="font-[var(--font-mono)] text-[0.65rem] text-[var(--accent)] tracking-widest pt-2">{service.id}</div>
                   <div>
                     <h3 className="font-[var(--font-cormorant)] text-[2.5rem] lg:text-[3.5rem] font-light leading-none text-[var(--white)] group-hover:italic transition-all duration-500">
                       {service.title}
                     </h3>
                     <p className="body mt-4 max-w-lg opacity-40 group-hover:opacity-100 transition-opacity">
                       {service.desc}
                     </p>
                   </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="hidden lg:block w-[120px] h-[1px] bg-[var(--border)] group-hover:bg-[var(--accent)] group-hover:w-[180px] transition-all duration-700" />
                  <div className="font-[var(--font-mono)] text-[var(--accent)] text-[1.2rem] transition-transform duration-500 group-hover:translate-x-4">
                    →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
