'use client'

import dynamic from 'next/dynamic'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import MagneticButton from '@/components/ui/MagneticButton'

const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

export default function ContactPage() {
  const contactInfo = [
    { label: 'CALL US', val: '+91 79956 17374' },
    { label: 'CALL US', val: '+91 73060 85895' },
    { label: 'EMAIL', val: 'hello@revolq.in' },
    { label: 'LOCATION', val: 'Kerala, India' },
  ]

  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="CONTACT US"
          title="Let's build your engine."
          sub="Ready to start? Send us a message or jump straight to a call. We're ready when you are."
        />

        <section className="py-[10rem] px-[2rem] sm:px-[5rem]">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left: Direct Info */}
              <div className="flex flex-col gap-12">
                 {contactInfo.map((info, i) => (
                    <div key={i} className="border-b border-[var(--border)] pb-8">
                       <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--rose)] tracking-widest mb-4 uppercase">{info.label}</div>
                       <div className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)]">{info.val}</div>
                    </div>
                 ))}
                 
                 <div className="mt-8">
                    <MagneticButton
                       href="https://wa.me/917995617374"
                       className="px-[3.5rem] py-[1.2rem] bg-[var(--rose)] text-[var(--ink)] font-[var(--font-mono)] text-[0.8rem] tracking-[0.2em] uppercase hover:bg-[var(--rose2)] transition-colors inline-block"
                    >
                       CHAT ON WHATSAPP
                    </MagneticButton>
                 </div>
              </div>

              {/* Right: Persuasion */}
              <div className="bg-[var(--ink3)] border border-[var(--border)] p-[3rem] sm:p-[5rem] flex flex-col justify-center">
                 <h2 className="font-[var(--font-cormorant)] text-[3rem] font-light text-[var(--white)] mb-8">Don't be shy.</h2>
                 <p className="body text-[var(--fog)] mb-8">
                    We aren't a big agency with pushy salespeople. You'll be talking directly to the people who will actually build your site — Ajmal or Eathen.
                 </p>
                 <ul className="flex flex-col gap-4 body text-sm text-[var(--white)] italic opacity-60">
                    <li>• Free technical audit during first call</li>
                    <li>• No template-based solutions</li>
                    <li>• Direct founder-level consultation</li>
                 </ul>
              </div>
           </div>
        </section>
      </div>
    </>
  )
}
