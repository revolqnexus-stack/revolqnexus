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
    <section ref={sectionRef} className="relative z-10 py-[12rem] px-[2rem] sm:px-[5rem] bg-[var(--ink)] overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated Vertical Line */}
        <div ref={lineRef} className="absolute left-[-1rem] sm:left-[-2.5rem] top-0 bottom-0 w-[1px] bg-[var(--accent)] opacity-20 origin-top scale-y-0" />

        <div className="mb-24">
          <div className="label mb-6">HOW WE WORK</div>
          <h2 className="display text-[clamp(3rem,6vw,5.5rem)]">
            The <em className="serif-italic">process.</em>
          </h2>
          <p className="body mt-8 opacity-60">Deliberate steps. Exceptional outcomes. Zero guesswork.</p>
        </div>

        <div className="flex flex-col">
          {steps.map((step, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[160px_1fr] border-b border-[var(--border)] py-[5rem] group transition-all duration-700 hover:bg-[rgba(207,181,59,0.02)]">
              {/* Left: Huge Number */}
              <div className="font-[var(--font-cormorant)] text-[clamp(4rem,8vw,7rem)] font-light leading-none text-[var(--white)] opacity-[0.05] transition-opacity duration-700 group-hover:opacity-20 mb-4 md:mb-0 italic">
                {step.id}
              </div>

              {/* Right: Content */}
              <div>
                <div className="label text-[var(--accent)] mb-4 opacity-70 tracking-[0.4em]">{step.label}</div>
                <h3 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-6 group-hover:italic transition-all duration-500">{step.title}</h3>
                <p className="body text-[var(--fog)] max-w-3xl text-[1rem] leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
