'use client'

import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { createAudioContext, playThud, playGlitch, playChime, playWhoosh } from '@/lib/sounds'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Check if user has already visited
    if (typeof window !== 'undefined' && sessionStorage.getItem('revolq_visited')) {
      setDone(true)
      onComplete()
      return
    }

    // Check for reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDone(true)
      onComplete()
      return
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            setDone(true)
            onComplete()
            if (typeof window !== 'undefined') {
              sessionStorage.setItem('revolq_visited', '1')
            }
          }, 500)
        }
      })

      // Create audio context
      let audioCtx: AudioContext | null = null
      try {
        audioCtx = createAudioContext()
      } catch (e) {
        console.log('Audio not supported')
      }

      // PHASE 1 — BLACK (0s to 0.6s)
      timeline.set('.preloader', { opacity: 1 })
      
      if (audioCtx) {
        timeline.call(() => playThud(audioCtx, 0.8), undefined, 0)
      }

      // PHASE 2 — GLITCH (0.6s to 1.2s)
      const glitchLetter = document.querySelector('.glitch-letter')
      if (glitchLetter) {
        timeline.to(glitchLetter, {
          opacity: 1,
          duration: 0.1,
        }, 0.6)

        // Chromatic aberration shake
        timeline.to(glitchLetter, {
          x: '+=6',
          y: '+=3',
          duration: 0.04,
          repeat: 8,
          yoyo: true,
          ease: 'power2.inOut',
        }, 0.7)

        // Screen flicker
        timeline.to('.preloader', {
          opacity: 0,
          duration: 0.05,
          repeat: 3,
          yoyo: true,
        }, 0.8)

        if (audioCtx) {
          timeline.call(() => playGlitch(audioCtx!), undefined, 0.6)
        }
      }

      // PHASE 3 — BUILD (1.2s to 2.4s)
      const revolqLetters = document.querySelectorAll('.revolq-letter')
      timeline.to('.glitch-letter', {
        opacity: 0,
        duration: 0.2,
      }, 1.1)

      timeline.to(revolqLetters, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power3.out',
      }, 1.2)

      // Reduce chromatic aberration
      timeline.to(revolqLetters, {
        textShadow: 'none',
        duration: 0.8,
        stagger: 0.05,
        ease: 'power2.out',
      }, 1.3)

      if (audioCtx) {
        for (let i = 0; i < 6; i++) {
          timeline.call(() => playThud(audioCtx!, 0.3 - i * 0.04), undefined, 1.2 + i * 0.1)
        }
      }

      // PHASE 4 — BREATHE (2.4s to 3.1s)
      timeline.to('.revolq-word', {
        scale: 1.015,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'sine.inOut',
      }, 2.4)

      timeline.to('.line-under', {
        width: '35vw',
        duration: 0.5,
        ease: 'power3.out',
      }, 2.6)

      timeline.to('.sub-text', {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      }, 2.8)

      if (audioCtx) {
        timeline.call(() => playChime(audioCtx!), undefined, 2.4)
      }

      // PHASE 5 — EXIT (3.1s to 4.0s)
      timeline.to('.revolq-word', {
        scale: 10,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.in',
      }, 3.1)

      timeline.to('.preloader', {
        clipPath: 'circle(150% at 50% 50%)',
        duration: 0.7,
        ease: 'power4.in',
      }, 3.3)

      timeline.to('.main-content', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, 3.5)

      if (audioCtx) {
        timeline.call(() => playWhoosh(audioCtx!), undefined, 3.1)
      }

    })

    return () => {
      ctx.revert()
    }
  }, [onComplete])

  if (done) return null

  return (
    <>
      <div 
        className="preloader fixed inset-0 z-[9999] flex items-center justify-center"
        style={{
          background: 'var(--ink)',
          clipPath: 'circle(0% at 50% 50%)',
        }}
      >
        {/* Phase 2: Glitch Letter */}
        <div 
          className="glitch-letter absolute text-[25vw] font-light opacity-0"
          style={{
            fontFamily: 'var(--font-cormorant)',
            color: 'var(--white)',
            textShadow: '-3px 0 #ff0040, 3px 0 #00ffff',
          }}
        >
          R
        </div>

        {/* Phase 3-4: REVOLQ Build */}
        <div className="revolq-word relative">
          <div className="flex">
            {['R', 'E', 'V', 'O', 'L', 'Q'].map((letter, i) => (
              <span
                key={i}
                className="revolq-letter text-[15vw] font-light"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  color: 'var(--white)',
                  textShadow: '-3px 0 #ff0040, 3px 0 #00ffff',
                  transform: 'translateY(-60px)',
                  opacity: 0,
                  display: 'inline-block',
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Phase 4: Line */}
          <div 
            className="line-under mx-auto mt-8 h-[1px] w-0"
            style={{
              backgroundColor: 'var(--rose)',
            }}
          />

          {/* Phase 4: Sub text */}
          <div 
            className="sub-text text-center mt-6 opacity-0"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              fontWeight: 300,
              letterSpacing: '0.5em',
              color: 'var(--fog)',
              textTransform: 'uppercase',
              transform: 'translateY(20px)',
            }}
          >
            DIGITAL AGENCY · KERALA · INDIA
          </div>
        </div>
      </div>

      {/* Main content (initially hidden) */}
      <div 
        className="main-content fixed inset-0 z-[9998]"
        style={{
          background: 'var(--ink)',
          opacity: 0,
        }}
      />
    </>
  )
}
