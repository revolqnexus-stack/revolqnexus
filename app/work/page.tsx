'use client'

import dynamic from 'next/dynamic'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import WorkPreview from '@/components/sections/home/WorkPreview'
import CTASection from '@/components/sections/home/CTASection'

const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

export default function WorkPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="PORTFOLIO"
          title="Digital systems that actually worked."
          sub="We don't do 'pretty' projects. We build functional systems that solve business problems and generate measurable growth."
        />
        <WorkPreview />
        <CTASection />
      </div>
    </>
  )
}
