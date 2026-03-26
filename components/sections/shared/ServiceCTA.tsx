'use client'

import MagneticButton from '@/components/ui/MagneticButton'

interface ServiceCTAProps {
  title: string
  price: string
  ctaText?: string
}

export default function ServiceCTA({ title, price, ctaText = "START A PROJECT" }: ServiceCTAProps) {
  return (
    <section className="relative z-10 py-[10rem] px-[2rem] sm:px-[5rem] text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-[var(--font-cormorant)] text-[clamp(2.5rem,6vw,4.5rem)] font-light text-[var(--white)] mb-6 leading-tight">
          {title}
        </h2>
        <div className="font-[var(--font-mono)] text-[var(--rose)] text-[0.9rem] mb-12 tracking-widest uppercase">
          STAGING AT {price}
        </div>
        
        <MagneticButton
          href="/contact"
          className="px-[3.5rem] py-[1.2rem] bg-[var(--rose)] text-[var(--ink)] font-[var(--font-mono)] text-[0.8rem] tracking-[0.2em] uppercase hover:bg-[var(--rose2)] transition-colors"
        >
          {ctaText}
        </MagneticButton>
      </div>
    </section>
  )
}
