'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { createAudioContext, playThud, playGlitch, playChime, playWhoosh } from '@/lib/sounds'

export default function Preloader() {
  const [complete, setComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const lettersRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Session check
    if (sessionStorage.getItem('revolq_visited')) {
      setComplete(true)
      return
    }

    const ctx = gsap.context(() => {
      const audioCtx = createAudioContext()
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('revolq_visited', '1')
          setComplete(true)
        }
      })

      // PHASE 1: BLACK
      tl.to({}, { duration: 0.6, onStart: () => audioCtx && playThud(audioCtx) })

      // PHASE 2: GLITCH 'R'
      tl.set('.pre-r', { opacity: 1 })
      tl.to('.pre-r', {
        duration: 0.6,
        onStart: () => audioCtx && playGlitch(audioCtx),
        x: 'random(-6, 6)',
        y: 'random(-3, 3)',
        repeat: 8,
        yoyo: true,
        ease: 'none',
      })
      tl.set('.pre-r', { opacity: 0, x: 0, y: 0 })

      // PHASE 3: BUILD REVOLQ
      tl.set('.pre-letter', { display: 'inline-block', opacity: 0, y: -60 })
      tl.to('.pre-letter', {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power4.out',
        onStart: () => audioCtx && playThud(audioCtx, 0.3)
      })

      // PHASE 4: BREATHE & TAGLINE
      tl.to('.pre-letters', {
        scale: 1.015,
        duration: 0.7,
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut'
      })
      tl.to(lineRef.current, {
        width: '35vw',
        duration: 1.2,
        ease: 'power4.inOut',
        onStart: () => audioCtx && playChime(audioCtx)
      }, '-=1')
      tl.to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5')

      // PHASE 5: EXIT
      tl.to('.pre-letters', {
        scale: 10,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.in',
        delay: 0.5,
        onStart: () => audioCtx && playWhoosh(audioCtx)
      })
      tl.to(containerRef.current, {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 0.7,
        ease: 'power4.in'
      }, '-=0.5')
      tl.to(containerRef.current, { opacity: 0, pointerEvents: 'none', duration: 0.3 })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  if (complete) return null

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-[var(--ink)] flex flex-col justify-center items-center overflow-hidden"
      style={{ clipPath: 'circle(0% at 50% 50%)' }}
    >
      <div className="relative text-center">
        {/* Phase 2: R */}
        <div className="pre-r absolute inset-0 flex justify-center items-center opacity-0">
          <span className="font-[var(--font-cormorant)] text-[25vw] font-light text-[var(--white)]" style={{ textShadow: '-3px 0 #ff0040, 3px 0 #00ffff' }}>
            R
          </span>
        </div>

        {/* Phase 3: REVOLQ */}
        <div className="pre-letters flex justify-center items-center">
          {"REVOLQ".split("").map((l, i) => (
            <span key={i} className="pre-letter font-[var(--font-cormorant)] text-[15vw] font-light text-[var(--white)]">
              {l}
            </span>
          ))}
        </div>

        {/* Phase 4: Line & Tagline */}
        <div className="flex flex-col items-center mt-4">
          <div ref={lineRef} className="h-[1px] bg-[var(--rose)] w-0" />
          <div ref={taglineRef} className="opacity-0 translate-y-4 mt-4">
            <span className="font-[var(--font-mono)] text-[0.6rem] tracking-[0.5em] text-[var(--fog)] uppercase">
              DIGITAL AGENCY · KERALA · INDIA
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
