'use client'

import Tag from '@/components/ui/Tag'
import RevealImage from '@/components/ui/RevealImage'
import MagneticButton from '@/components/ui/MagneticButton'

export default function WorkPreview() {
  return (
    <section className="relative z-10 py-[10rem] px-[2rem] sm:px-[5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="label mb-4">OUR WORK</div>
          <h2 className="h2 mb-4">Built for real businesses.</h2>
          <p className="body text-[var(--fog)] max-w-xl">Electric results for brands that refuse to be ignored. No templates, no compromises.</p>
        </div>

        {/* NIXTUDIO Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] items-center p-[2rem] sm:p-[4rem] bg-[var(--ink3)] border border-[var(--border)] mb-[4rem] group transition-all duration-500 hover:border-[var(--rose)]">
          <RevealImage 
            src="/nixtudio_mockup.png"
            alt="NIXTUDIO Digital Dashboard Mockup"
            aspect="aspect-[16/10]"
          />

          <div className="flex flex-col gap-8">
            <Tag>BRIDAL STUDIO · PALA, KERALA · 2025</Tag>
            <h3 className="font-[var(--font-cormorant)] text-[3rem] font-light leading-none text-[var(--white)]">NIXTUDIO by Nikita Liby</h3>
            <p className="body text-[var(--fog)]">Complete digital transformation including a premium Next.js website, local SEO optimization, and a 24/7 WhatsApp AI agent.</p>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)]">464+</div>
                <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--dim)] tracking-widest uppercase mt-2">REVIEWS</div>
              </div>
              <div>
                <div className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)]">#4</div>
                <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--dim)] tracking-widest uppercase mt-2">GOOGLE RANK</div>
              </div>
              <div>
                <div className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)]">4.9★</div>
                <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--dim)] tracking-widest uppercase mt-2">RATING</div>
              </div>
              <div>
                <div className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)]">24/7</div>
                <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--dim)] tracking-widest uppercase mt-2">AI ACTIVE</div>
              </div>
            </div>

            <MagneticButton 
              href="/work/nixtudio"
              className="self-start text-[var(--rose)] font-[var(--font-mono)] text-[0.7rem] tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-400"
            >
              VIEW CASE STUDY →
            </MagneticButton>
          </div>
        </div>

        {/* Holy Family (Coming Soon) */}
        <div className="opacity-50 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-700">
           <div className="flex justify-between items-center py-8 border-t border-[var(--border)]">
              <div>
                <Tag className="mb-4">HEALTHCARE · PALA, KERALA · 2025</Tag>
                <h4 className="font-[var(--font-cormorant)] text-[2rem] font-light text-[var(--white)]">Holy Family Dental Clinic</h4>
              </div>
              <span className="font-[var(--font-mono)] text-[0.6rem] text-[var(--dim)] tracking-widest uppercase border border-[var(--border)] px-4 py-2">COMING SOON</span>
           </div>
        </div>
      </div>
    </section>
  )
}
