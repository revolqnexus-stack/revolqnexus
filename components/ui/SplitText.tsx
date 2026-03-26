'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

export default function SplitText({ text, className = '', delay = 0, once = true }: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const chars = el.querySelectorAll('.char')
    
    gsap.from(chars, {
      y: '110%',
      duration: 0.9,
      stagger: 0.022,
      ease: 'power4.out',
      delay,
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        once,
      }
    })
  }, [delay, once])

  return (
    <div ref={containerRef} className={`${className} flex flex-wrap`}>
      {text.split('').map((char, i) => (
        <span key={i} className="overflow-hidden inline-block leading-[1.1]">
          <span className="char inline-block whitespace-pre">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </div>
  )
}
