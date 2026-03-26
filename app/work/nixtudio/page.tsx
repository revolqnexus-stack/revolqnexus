'use client'

import dynamic from 'next/dynamic'
import Tag from '@/components/ui/Tag'
import RevealImage from '@/components/ui/RevealImage'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import ServiceCTA from '@/components/sections/shared/ServiceCTA'

const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

export default function NixtudioCaseStudy() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="CASE STUDY — NIXTUDIO"
          title="From invisible to local dominance."
          sub="How we helped Nikita Liby build the most reviewed bridal studio in Pala, Kerala through technical SEO and AI automation."
        />

        <section className="py-[10rem] px-[2rem] sm:px-[5rem]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16">
              <div>
                <RevealImage 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80"
                  alt="NIXTUDIO Workspace"
                  aspect="aspect-video"
                  className="mb-12"
                />
                
                <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-8">The Challenge</h2>
                <p className="body text-[var(--fog)] mb-8 leading-relaxed">
                  Despite having world-class talent, NIXTUDIO was struggling to capture the digital market in Kottayam. Their online presence was scattered, and they were losing leads because they couldn't respond to WhatsApp queries fast enough.
                </p>

                <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-8">The System</h2>
                <p className="body text-[var(--fog)] mb-8 leading-relaxed">
                  We built a custom Next.js engine with integrated local SEO structures. But the real game-changer was the 24/7 AI WhatsApp Agent that understood both English and Malayalam, booking appointments while the team was busy with brides.
                </p>
              </div>

              <div className="bg-[var(--ink3)] border border-[var(--border)] p-[2.5rem] h-fit">
                <Tag className="mb-8">METRICS</Tag>
                <div className="flex flex-col gap-12">
                  <div>
                    <div className="font-[var(--font-cormorant)] text-[3rem] font-light text-[var(--white)] leading-none">464+</div>
                    <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--rose)] tracking-widest mt-2 uppercase">GENUINE REVIEWS</div>
                  </div>
                  <div>
                    <div className="font-[var(--font-cormorant)] text-[3rem] font-light text-[var(--white)] leading-none">Top 3</div>
                    <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--rose)] tracking-widest mt-2 uppercase">GOOGLE MAPS RANK</div>
                  </div>
                  <div>
                    <div className="font-[var(--font-cormorant)] text-[3rem] font-light text-[var(--white)] leading-none">85%</div>
                    <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--rose)] tracking-widest mt-2 uppercase">AUTO-BOOKING RATE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA title="Need results like this?" price="₹55,000" />
      </div>
    </>
  )
}
