'use client'

import { useRef, useEffect, forwardRef } from 'react'
import { gsap } from 'gsap'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  style?: React.CSSProperties
  dataCursor?: string
}

const MagneticButton = forwardRef<HTMLAnchorElement | HTMLButtonElement, MagneticButtonProps>(({
  children, 
  className = '', 
  onClick, 
  href,
  target,
  rel,
  style,
  dataCursor = 'hoverable'
}, ref) => {
  const internalRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null)
  const buttonRef = (ref as React.RefObject<HTMLAnchorElement | HTMLButtonElement>) || internalRef

  useEffect(() => {
    if (typeof window === 'undefined') return

    const button = buttonRef.current
    if (!button) return

    let isHovered = false

    const handleMouseMove = (e: Event) => {
      if (!isHovered) return
      const mouseEvent = e as MouseEvent
      const rect = button.getBoundingClientRect()
      const x = mouseEvent.clientX - rect.left - rect.width / 2
      const y = mouseEvent.clientY - rect.top - rect.height / 2
      
      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: 'power2.out'
      })
    }

    const handleMouseEnter = () => {
      isHovered = true
    }

    const handleMouseLeave = () => {
      isHovered = false
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'elastic.out(1, 0.3)'
      })
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={className}
        onClick={onClick}
        data-cursor={dataCursor}
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          ...style
        }}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type="button"
      className={className}
      onClick={onClick}
      data-cursor={dataCursor}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        ...style
      }}
    >
      {children}
    </button>
  )
})

MagneticButton.displayName = 'MagneticButton'

export default MagneticButton
