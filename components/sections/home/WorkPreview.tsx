'use client'

import Tag from '@/components/ui/Tag'
import RevealImage from '@/components/ui/RevealImage'
import MagneticButton from '@/components/ui/MagneticButton'

export default function WorkPreview() {
  return (
    <section className="relative z-10 py-[12rem] px-[2rem] sm:px-[5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="label mb-6">CASE STUDIES</div>
          <h2 className="display text-[clamp(3.5rem,7vw,6.5rem)] mb-10">The <em className="serif-italic">work.</em></h2>
          <p className="body text-[var(--fog)] max-w-2xl text-[1.1rem]">
            Real businesses. Real results. A collection of digital experiences crafted with precision and editorial intent.
          </p>
        </div>

        {/* NIXTUDIO Case Study */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-[4rem] items-start mb-[12rem] group">
          {/* Vertical Number */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="font-[var(--font-cormorant)] text-[5rem] text-[var(--white)] opacity-10 leading-none sticky top-32">01</div>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-6">
            <RevealImage 
              src="/nixtudio_mockup.png"
              alt="NIXTUDIO Digital Dashboard Mockup"
              aspect="aspect-[4/5]"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          {/* Text Side */}
          <div className="lg:col-span-5 flex flex-col pt-10">
            <div className="label mb-6">BRIDAL STUDIO · PALA, KERALA · 2025</div>
            <h3 className="font-[var(--font-cormorant)] text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.1] text-[var(--white)] mb-8">
              NIXTUDIO <br /> 
              <em className="serif-italic opacity-60 text-[2.5rem]">by Nikita Liby</em>
            </h3>
            
            <p className="body text-[var(--fog)] mb-12 text-[1rem]">
              Redefining the digital presence for Kerala&apos;s premier bridal destination. We transitioned a local powerhouse into a globally recognized luxury brand through cinematic storytelling and high-conversion booking systems.
            </p>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 border-t border-b border-[var(--border)] py-10 mb-12">
              <div>
                <div className="font-[var(--font-cormorant)] text-[2.8rem] font-light text-[var(--white)]">464+</div>
                <div className="label opacity-40">REVIEWS</div>
              </div>
              <div>
                <div className="font-[var(--font-cormorant)] text-[2.8rem] font-light text-[var(--white)]">4.9<em className="text-[var(--accent)] not-italic">★</em></div>
                <div className="label opacity-40">RATING</div>
              </div>
              <div>
                <div className="font-[var(--font-cormorant)] text-[2.8rem] font-light text-[var(--white)]">122%</div>
                <div className="label opacity-40">GROWTH</div>
              </div>
              <div>
                <div className="font-[var(--font-cormorant)] text-[2.8rem] font-light text-[var(--white)]">32k</div>
                <div className="label opacity-40">REACH</div>
              </div>
            </div>

            <MagneticButton 
              href="/work/nixtudio"
              className="self-start text-[var(--accent)] font-[var(--font-mono)] text-[0.7rem] tracking-[0.3em] font-bold uppercase group-hover:translate-x-2 transition-transform duration-400"
            >
              VIEW CASE STUDY →
            </MagneticButton>
          </div>
        </div>

        {/* STUDIO ANAGRAM Case Study */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-[4rem] items-start mb-[12rem] group">
          {/* Vertical Number */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="font-[var(--font-cormorant)] text-[5rem] text-[var(--white)] opacity-10 leading-none sticky top-32">03</div>
          </div>

          {/* Text Side (Reversed for variety) */}
          <div className="lg:col-span-5 flex flex-col pt-10 order-2 lg:order-1">
            <div className="label mb-6">ARCHITECTURE · KOCHI · 2024</div>
            <h3 className="font-[var(--font-cormorant)] text-[clamp(2.5rem,4vw,4rem)] font-light leading-[1.1] text-[var(--white)] mb-8">
              Studio Anagram
            </h3>
            
            <p className="body text-[var(--fog)] mb-12 text-[1rem]">
              Crafting a digital portfolio that mirrors the structural integrity of contemporary architectural practices. Minimalist, precise, and uncompromising.
            </p>

            <MagneticButton 
              href="/work/anagram"
              className="self-start text-[var(--accent)] font-[var(--font-mono)] text-[0.7rem] tracking-[0.3em] font-bold uppercase group-hover:translate-x-2 transition-transform duration-400"
            >
              VIEW CASE STUDY →
            </MagneticButton>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <RevealImage 
              src="/anagram_mockup.png"
              alt="Studio Anagram Architectural Portfolio"
              aspect="aspect-[4/5]"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>

        {/* Holy Family (Refined) */}
        <div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000 border-t border-[var(--border)] pt-12">
           <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div>
                <div className="label mb-4">HEALTHCARE · PALA, KERALA · 2025</div>
                <h4 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)]">Holy Family Dental</h4>
              </div>
              <span className="font-[var(--font-mono)] text-[0.6rem] text-[var(--accent)] tracking-[0.3em] uppercase border border-[var(--accent)] px-6 py-3">COMING SOON</span>
           </div>
        </div>
      </div>
    </section>
  )
}
