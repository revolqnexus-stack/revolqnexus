'use client'

import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-8 z-10 overflow-hidden pt-[var(--nav-height)]">
      {/* Label */}
      <div className="label mb-6 mt-12">
        KERALA · INDIA · DIGITAL AGENCY
      </div>
# (line 16)
      {/* Main Headline */}
      <div className="max-w-6xl mx-auto">
        <h1 className="display mb-10">
          <SplitText text="Websites that" className="justify-center" />
          <div>
            <SplitText text="rank, " className="justify-center inline" />
            <em className="serif-italic text-[var(--accent-gold)]">
              <SplitText text="convert" className="justify-center inline" />
            </em>
            <SplitText text="," className="justify-center inline" />
          </div>
          <SplitText text="and scale." className="justify-center" />
        </h1>

        {/* Sub Text */}
        <p className="body max-w-xl mx-auto mb-16 px-4">
          The complete, Next-backed digital systems engine for <em>ambitious</em> goals. Precision-crafted for those who refuse to be invisible.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 px-4">
          <MagneticButton
            href="/contact"
            className="px-[3.2rem] py-[1.2rem] bg-[var(--accent)] text-[var(--ink)] font-[var(--font-mono)] text-[0.68rem] font-bold tracking-[0.25em] uppercase hover:bg-[var(--white)] transition-colors"
          >
            START A PROJECT
          </MagneticButton>

          <MagneticButton
            href="/work"
            className="px-[3.2rem] py-[1.2rem] border border-[var(--border)] text-[var(--fog)] font-[var(--font-mono)] text-[0.68rem] tracking-[0.25em] uppercase hover:text-[var(--white)] hover:border-[var(--accent)] transition-colors"
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
        <div className="w-[1px] h-[60px] bg-gradient-to-bottom from-[var(--accent)] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
