'use client'

import dynamic from 'next/dynamic'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import TeamSection from '@/components/sections/home/TeamSection'
import CTASection from '@/components/sections/home/CTASection'

const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

export default function AboutPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="OUR STORY"
          title="Digital systems. Zero fluff."
          sub="We started REVOLQ with one simple goal: to give Kerala businesses the same high-end digital engineering usually reserved for global tech giants."
        />

        <section className="py-[10rem] px-[2rem] sm:px-[5rem]">
           <div className="max-w-4xl mx-auto">
              <div className="label mb-8">THE MANIFESTO</div>
              <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-12 italic">"If it's pretty but doesn't sell, it's a failure."</h2>
              
              <div className="flex flex-col gap-12 body text-lg text-[var(--fog)] leading-relaxed">
                 <p>
                    Most agencies in Kerala focus on making things "look nice." They use templates, they follow trends, and they deliver the same generic result to every client. 
                 </p>
                 <p>
                    We hate that.
                 </p>
                 <p>
                    REVOLQ is about the system behind the screen. We care about lighthouse scores, SEO metrics, AI response times, and conversion rates. We use Next.js and raw WebGL because they provide a competitive edge that templates simply cannot touch.
                 </p>
              </div>
           </div>
        </section>

        <TeamSection />
        <CTASection />
      </div>
    </>
  )
}
