'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealImageProps {
  src: string
  alt: string
  aspect?: string
  className?: string
}

export default function RevealImage({ src, alt, aspect = 'aspect-video', className = '' }: RevealImageProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: outer,
        start: 'top 80%',
      }
    })

    tl.fromTo(outer, 
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut' }
    )

    tl.fromTo(inner,
      { scale: 1.12 },
      { scale: 1, duration: 1.2, ease: 'power4.inOut' },
      0
    )
  }, [])

  return (
    <div ref={outerRef} className={`relative overflow-hidden ${aspect} ${className}`}>
      <div ref={innerRef} className="w-full h-full">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>
    </div>
  )
}
