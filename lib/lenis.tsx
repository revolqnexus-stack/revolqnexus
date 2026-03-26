'use client'

import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, createContext, useContext, ReactNode } from 'react'

gsap.registerPlugin(ScrollTrigger)

const LenisContext = createContext<Lenis | null>(null)

export const useLenis = () => useContext(LenisContext)

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Sync lenis with GSAP ticker
    const update = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    // Refresh ScrollTrigger after init
    ScrollTrigger.refresh()

    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    <LenisContext.Provider value={null}>
      {children}
    </LenisContext.Provider>
  )
}
