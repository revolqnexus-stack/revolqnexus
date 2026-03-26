'use client'

import { useEffect, useRef, useState } from 'react'

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const animationFrame = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      animationFrame.current = requestAnimationFrame(updateProgress)
    }

    const handleScroll = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
      updateProgress()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '1px',
        zIndex: 500,
        background: 'linear-gradient(90deg, var(--rose), var(--gold))',
        width: `${scrollProgress}%`,
        transition: 'width 0.1s ease-out',
      }}
    />
  )
}
