'use client'

import dynamic from 'next/dynamic'
import ServiceHero from '@/components/sections/shared/ServiceHero'

const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

export default function TermsPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="LEGAL"
          title="Terms of Service"
          sub="Our rules for engagement. Simple, transparent, and fair."
        />

        <section className="py-[10rem] px-[2rem] sm:px-[5rem]">
           <div className="max-w-3xl mx-auto body text-[var(--fog)] leading-loose">
              <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-8">Services</h2>
              <p className="mb-8">
                 REVOLQ provides premium digital services including web development, SEO, and AI automation. All project timelines and deliverables are defined in individual service agreements.
              </p>

              <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-8">Responsibility</h2>
              <p>
                 While we strive for perfect execution, we are not responsible for third-party service outages or market-driven changes in SEO rankings after the delivery period.
              </p>
           </div>
        </section>
      </div>
    </>
  )
}
