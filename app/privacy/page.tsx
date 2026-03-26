'use client'

import dynamic from 'next/dynamic'
import ServiceHero from '@/components/sections/shared/ServiceHero'

const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

export default function PrivacyPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="LEGAL"
          title="Privacy Policy"
          sub="We take your privacy as seriously as we take our code. Here is how we handle your data."
        />

        <section className="py-[10rem] px-[2rem] sm:px-[5rem]">
           <div className="max-w-3xl mx-auto body text-[var(--fog)] leading-loose">
              <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-8">Data Collection</h2>
              <p className="mb-8">
                 We collect minimal data necessary to provide our services and communicate with you. This includes information you provide via our contact forms or WhatsApp integration.
              </p>

              <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-8">Security</h2>
              <p>
                 All data is handled with strict security protocols. We do not sell or share your personal information with third parties for marketing purposes.
              </p>
           </div>
        </section>
      </div>
    </>
  )
}
