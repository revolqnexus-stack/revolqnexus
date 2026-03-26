'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorDot = useRef<HTMLDivElement>(null)
  const cursorRing = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const ringPosition = useRef({ x: 0, y: 0 })
  const animationFrame = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const dot = cursorDot.current
    const ring = cursorRing.current
    
    if (!dot || !ring) return

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX
      mousePosition.current.y = e.clientY

      // Update dot position immediately
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, input, textarea, [data-cursor="hoverable"]')) {
        ring.style.width = '64px'
        ring.style.height = '64px'
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, input, textarea, [data-cursor="hoverable"]')) {
        ring.style.width = '40px'
        ring.style.height = '40px'
      }
    }

    // Animate ring with lerp
    const animateRing = () => {
      ringPosition.current.x += (mousePosition.current.x - ringPosition.current.x) * 0.15
      ringPosition.current.y += (mousePosition.current.y - ringPosition.current.y) * 0.15

      ring.style.transform = `translate(${ringPosition.current.x - 20}px, ${ringPosition.current.y - 20}px)`

      animationFrame.current = requestAnimationFrame(animateRing)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    animateRing()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={cursorDot}
        id="cursor-dot"
        style={{
          position: 'fixed',
          width: '6px',
          height: '6px',
          background: 'var(--rose2)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={cursorRing}
        id="cursor-ring"
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: '1px solid rgba(196,154,154,0.3)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s, opacity 0.3s',
        }}
      />
    </>
  )
}
