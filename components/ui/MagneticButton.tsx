'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export default function MagneticButton({ children, className = '', href, onClick, style }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const btn = buttonRef.current
    if (!btn) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY

      gsap.to(btn, {
        x: distanceX * 0.3,
        y: distanceY * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.4)'
      })
    }

    btn.addEventListener('mousemove', handleMouseMove)
    btn.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      btn.removeEventListener('mousemove', handleMouseMove)
      btn.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const content = (
    <div 
      ref={buttonRef} 
      className={`inline-block transition-transform duration-200 ${className}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return content
}
