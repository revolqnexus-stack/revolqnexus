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
    <section className="relative z-10 py-[12rem] px-[2rem] sm:px-[5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="label mb-6">SERVICES</div>
          <h2 className="display text-[clamp(3.5rem,7vw,6.5rem)] mb-16">What we do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-[var(--border-light)]">
          {services.map((service, index) => (
            <div key={service.id} className="py-8 border-b border-[var(--border-light)] relative group">
              {/* Index */}
              <div className="text-[1.2rem] font-[var(--font-cormorant)] text-[var(--text-white)] opacity-20 mb-4">
                {String(service.id).padStart(2, '0')}
              </div>
              
              {/* Gold Dot */}
              <div className="absolute top-8 right-8 w-2 h-2 bg-[var(--accent-gold)] rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="w-5 h-5 text-[var(--accent-gold)]" />
                  <h3 className="text-[1.5rem] font-[var(--font-cormorant)] text-[var(--text-white)]">
                    {service.title}
                  </h3>
                </div>
                <p className="body text-[var(--text-gray)] max-w-xs">
                  {service.desc}
                </p>
              </div>
              
              <Link 
                href={service.href}
                className="text-[var(--accent-gold)] font-[var(--font-mono)] text-[0.7rem] tracking-[0.3em] uppercase group-hover:tracking-widest transition-all"
              >
                LEARN MORE →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
