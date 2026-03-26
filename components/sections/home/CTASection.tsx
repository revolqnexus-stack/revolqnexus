'use client'

import MagneticButton from '@/components/ui/MagneticButton'

export default function CTASection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-8 z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="label mb-8">START A PROJECT</div>
        
        <h2 className="font-[var(--font-cormorant)] text-[clamp(4rem,10vw,8rem)] italic font-light text-[var(--white)] leading-none mb-8">
          Ready to grow?
        </h2>

        <p className="body text-[var(--fog)] max-w-md mx-auto mb-12 text-lg">
          Your competitors are online. Your customers are searching. Let&apos;s make sure they find you.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <MagneticButton
            href="/contact"
            className="px-[3.5rem] py-[1.2rem] bg-[var(--rose)] text-[var(--ink)] font-[var(--font-mono)] text-[0.8rem] tracking-[0.2em] uppercase hover:bg-[var(--rose2)] transition-colors"
          >
            START A PROJECT
          </MagneticButton>

          <MagneticButton
            href="https://wa.me/917995617374"
            className="px-[3.5rem] py-[1.2rem] border border-[var(--border2)] text-[var(--fog)] font-[var(--font-mono)] text-[0.8rem] tracking-[0.2em] uppercase hover:text-[var(--white)] hover:border-[var(--rose)] transition-colors flex items-center gap-2"
          >
            WHATSAPP US
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
