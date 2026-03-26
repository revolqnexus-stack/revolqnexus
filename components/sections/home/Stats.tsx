'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 464, suffix: '+', label: 'GOOGLE REVIEWS' },
  { value: 4.9, suffix: '★', label: 'AVG RATING' },
  { value: 100, suffix: '%', label: 'DELIVERY RATE' },
  { value: 24, suffix: '/7', label: 'AI ACTIVE' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const cells = el.querySelectorAll('.stat-number')
    
    cells.forEach((cell) => {
      const target = parseFloat(cell.getAttribute('data-target') || '0')
      const obj = { val: 0 }
      
      gsap.to(obj, {
        val: target,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cell,
          start: 'top 85%',
        },
        onUpdate: () => {
          cell.textContent = target % 1 === 0 ? Math.floor(obj.val).toString() : obj.val.toFixed(1)
        }
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 border-t border-[var(--border)] bg-[var(--border)] grid grid-cols-2 lg:grid-cols-4 gap-[1px]">
      {stats.map((stat, i) => (
        <div key={i} className="bg-[var(--ink)] py-[4rem] px-[2rem] text-center">
          <div className="flex justify-center items-baseline gap-1">
            <span 
              className="stat-number font-[var(--font-cormorant)] text-[clamp(2.5rem,6vw,5.5rem)] font-light text-[var(--white)] leading-none"
              data-target={stat.value}
            >
              0
            </span>
            <span className="font-[var(--font-cormorant)] text-[2rem] font-light text-[var(--white)] opacity-60">
              {stat.suffix}
            </span>
          </div>
          <div className="font-[var(--font-mono)] text-[0.62rem] tracking-[0.35em] text-[var(--fog)] mt-4 uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  )
}
