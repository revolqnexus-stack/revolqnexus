'use client'

import MagneticButton from '@/components/ui/MagneticButton'

export default function CTASection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-8 z-10 overflow-hidden bg-[var(--bg-black)]">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="label mb-10 opacity-60">START A PROJECT</div>
        
        <h2 className="display text-[clamp(3.5rem,9vw,7.5rem)] mb-12">
          Let&apos;s build <br />
          <em className="serif-italic text-[var(--accent-gold)]">legacy.</em>
        </h2>

        <p className="body text-[var(--text-gray)] max-w-2xl mx-auto mb-16 text-[1.1rem] leading-relaxed opacity-60">
          Your competitors are already online. Your customers are already searching. 
          While you wait, someone else is taking your market share. 
          Let&apos;s build system that makes you impossible to ignore.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 items-center">
          <MagneticButton
            href="/contact"
            className="px-[4rem] py-[1.4rem] bg-[var(--accent-gold)] text-[var(--bg-black)] font-[var(--font-mono)] text-[0.75rem] font-bold tracking-[0.3em] uppercase hover:bg-[var(--text-white)] transition-all duration-500 shadow-2xl"
          >
            START A PROJECT
          </MagneticButton>
          
          <div className="text-[var(--text-gray)] text-sm font-[var(--font-mono)] tracking-[0.2em] border border-[var(--border-light)] px-4 py-2">
            Currently taking on selected projects
          </div>

          <MagneticButton
            href="https://wa.me/917995617374"
            className="px-[4rem] py-[1.4rem] border border-[var(--border)] text-[var(--fog)] font-[var(--font-mono)] text-[0.75rem] tracking-[0.3em] uppercase hover:text-[var(--white)] hover:border-[var(--accent)] transition-all duration-500"
          >
            WHATSAPP US
          </MagneticButton>
        </div>

        <div className="mt-24 flex flex-col items-center">
          <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-40 mb-8" />
          <div className="label text-[0.55rem] tracking-[0.5em] opacity-30">KOTTAYAM · KERALA · INDIA</div>
        </div>
      </div>
    </section>
  )
}
