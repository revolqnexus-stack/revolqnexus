'use client'

import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 z-10 overflow-hidden">
      {/* Label */}
      <div className="label mb-8">
        KERALA · INDIA · DIGITAL AGENCY
      </div>

      {/* Main Headline */}
      <div className="max-w-6xl mx-auto">
        <h1 className="display mb-8">
          <SplitText text="We build" className="justify-center" />
          <div className="italic text-[var(--gold)]">
            <SplitText text="digital systems" className="justify-center" />
          </div>
          <SplitText text="that work." className="justify-center" />
        </h1>

        {/* Sub Text */}
        <p className="body max-w-lg mx-auto mb-12">
          Web development, SEO, AI automation, and brand strategy for businesses that refuse to be invisible.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4">
          <MagneticButton
            href="/contact"
            className="px-[2.8rem] py-[1rem] bg-[var(--rose)] text-[var(--ink)] font-[var(--font-mono)] text-[0.65rem] tracking-[0.2em] uppercase hover:bg-[var(--rose2)] transition-colors"
          >
            START A PROJECT
          </MagneticButton>

          <MagneticButton
            href="/work"
            className="px-[2.8rem] py-[1rem] border border-[var(--border2)] text-[var(--fog)] font-[var(--font-mono)] text-[0.65rem] tracking-[0.2em] uppercase hover:text-[var(--white)] hover:border-[var(--rose)] transition-colors"
          >
            SEE OUR WORK
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Left Contact */}
      <div className="hidden lg:block absolute left-10 bottom-12 font-[var(--font-mono)] text-[0.6rem] text-[var(--dim)] uppercase tracking-[0.2em]" style={{ writingMode: 'vertical-rl' }}>
        +91 79956 17374
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="font-[var(--font-mono)] text-[0.55rem] text-[var(--dim)] tracking-[0.2em] uppercase mb-4">SCROLL</span>
        <div className="w-[1px] h-[60px] bg-gradient-to-bottom from-[var(--rose)] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
