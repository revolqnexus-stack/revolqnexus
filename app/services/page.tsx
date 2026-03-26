'use client'

import dynamic from 'next/dynamic'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import CTASection from '@/components/sections/home/CTASection'

const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

export default function ServicesPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="EXPERTISE"
          title="Digital systems engineered to scale."
          sub="We don't just build websites. We build automated engines that capture, convert, and grow your business while you sleep."
        />
        <ServicesGrid />
        <CTASection />
      </div>
    </>
  )
}
