'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface RevealImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function RevealImage({ 
  src, 
  alt, 
  width = 800, 
  height = 600, 
  className = '',
  priority = false
}: RevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const container = containerRef.current
    const image = imageRef.current
    
    if (!container || !image) return

    // Check for reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Animate clip path
      gsap.fromTo(
        container,
        { 
          clipPath: 'inset(100% 0 0 0)' 
        },
        { 
          clipPath: 'inset(0% 0 0 0)', 
          duration: 1.2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            once: true,
          },
        }
      )

      // Animate image scale
      gsap.fromTo(
        image,
        { 
          scale: 1.12 
        },
        { 
          scale: 1, 
          duration: 1.2, 
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, container)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div 
        ref={imageRef}
        style={{
          transform: 'scale(1.12)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      </div>
    </div>
  )
}
