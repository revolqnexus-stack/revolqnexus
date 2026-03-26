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
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="h2 mb-8 text-[var(--white)] italic">{title}</h2>
        <div className="flex flex-col items-center gap-8">
          <div className="font-[var(--font-mono)] text-[2rem] text-[var(--accent2)] tracking-tighter">
            {price}<span className="text-[1rem] opacity-40">/STARTING</span>
          </div>
          <MagneticButton
            href="https://wa.me/917995617374"
            className="px-[4rem] py-[1.2rem] bg-[var(--accent)] text-[var(--white)] font-[var(--font-mono)] text-[0.8rem] tracking-[0.2em] uppercase hover:bg-[var(--accent2)] shadow-xl shadow-[var(--glow)] transition-colors"
          >
            BOOK DISCOVERY CALL
          </MagneticButton>
        </div>
      </div>
      </div>
    </section>
  )
}
