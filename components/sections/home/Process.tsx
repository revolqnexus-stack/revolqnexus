'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/ui/SplitText'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { id: '01', label: 'DISCOVERY', title: 'Research & Audit', desc: "We deep-dive into your business, competitors, and customers to find the gaps your competition missed." },
  { id: '02', label: 'STRATEGY', title: 'System Architecture', desc: "We map out the exact digital engine you need — from site structure to AI workflows." },
  { id: '03', label: 'BUILD', title: 'Engineering & Craft', desc: "Precision development in Next.js, custom GLSL shaders, and automated backend systems." },
  { id: '04', label: 'LAUNCH', title: 'Deployment & Growth', desc: "Launch on Vercel, SEO indexing, and setting up the compounding growth systems." },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const line = lineRef.current
    if (!section || !line) return

    gsap.fromTo(line, 
      { scaleY: 0 },
      { 
        scaleY: 1, 
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 40%',
          end: 'bottom 60%',
          scrub: true,
        }
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 py-[10rem] px-[2rem] sm:px-[5rem] bg-[var(--ink2)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated Vertical Line */}
        <div ref={lineRef} className="absolute left-[-1rem] sm:left-[-2.5rem] top-0 bottom-0 w-[1px] bg-[var(--rose)] opacity-40 origin-top scale-y-0" />

        <div className="mb-16">
          <div className="label mb-4">HOW WE WORK</div>
          <h2 className="h2">
            <SplitText text="Four steps." />
            <em>Zero guesswork.</em>
          </h2>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[120px_1fr] border-b border-[var(--border)] py-[4rem] group transition-colors duration-400 hover:bg-[var(--glass)]">
              {/* Left: Huge Number */}
              <div className="font-[var(--font-cormorant)] text-[8rem] font-light leading-none text-[var(--white)] opacity-[0.08] transition-opacity duration-400 group-hover:opacity-20 mb-4 md:mb-0">
                {step.id}
              </div>

              {/* Right: Content */}
              <div>
                <div className="label text-[var(--rose)] mb-2">{step.label}</div>
                <h3 className="h3 text-[var(--white)] mb-4">{step.title}</h3>
                <p className="body text-[var(--fog)] max-w-2xl">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
