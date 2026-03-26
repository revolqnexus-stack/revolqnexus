'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const mouse = { x: 0, y: 0 }
    const dotPos = { x: 0, y: 0 }
    const ringPos = { x: 0, y: 0 }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const animate = () => {
      // Lerp dot
      dotPos.x += (mouse.x - dotPos.x) * 0.2
      dotPos.y += (mouse.y - dotPos.y) * 0.2
      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`

      // Lerp ring
      ringPos.x += (mouse.x - ringPos.x) * 0.1
      ringPos.y += (mouse.y - ringPos.y) * 0.1
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`

      requestAnimationFrame(animate)
    }

    const handleHover = () => {
      ring.style.width = '64px'
      ring.style.height = '64px'
    }

    const handleHoverOut = () => {
      ring.style.width = '40px'
      ring.style.height = '40px'
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Add hover listeners to all links and buttons
    const hoverables = document.querySelectorAll('a, button, [role="button"]')
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleHoverOut)
    })

    const frameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameId)
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleHoverOut)
      })
    }
  }, [])

  return (
    <>
      <div 
        ref={dotRef}
        id="cursor-dot"
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-[var(--accent2)] rounded-full pointer-events-none z-[9999] mix-blend-difference hidden sm:block"
      />
      <div 
        ref={ringRef}
        id="cursor-ring"
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-[rgba(124,58,237,0.3)] rounded-full pointer-events-none z-[9998] transition-[width,height,opacity] duration-300 hidden sm:block shadow-[0_0_15px_rgba(124,58,237,0.1)]"
      />
    </>
  )
}
