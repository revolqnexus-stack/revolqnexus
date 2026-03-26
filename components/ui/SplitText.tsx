'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

export default function SplitText({ text, className = '', delay = 0, once = true }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const container = containerRef.current
    if (!container) return

    // Check for reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const chars = container.querySelectorAll('.char')
      
      gsap.from(chars, {
        y: '110%',
        duration: 0.9,
        stagger: 0.022,
        ease: 'power4.out',
        delay,
        scrollTrigger: {
          trigger: container,
          start: 'top 82%',
          once,
        },
      })
    }, container)

    return () => {
      ctx.revert()
    }
  }, [delay, once])

  // Split text into characters
  const splitText = text.split('').map((char, index) => {
    if (char === ' ') {
      return (
        <span key={index} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <span className="char">&nbsp;</span>
        </span>
      )
    }
    return (
      <span key={index} style={{ overflow: 'hidden', display: 'inline-block' }}>
        <span className="char">{char}</span>
      </span>
    )
  })

  return (
    <div ref={containerRef} className={className}>
      {splitText}
    </div>
  )
}
