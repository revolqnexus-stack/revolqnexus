'use client'

import dynamic from 'next/dynamic'
import Preloader from '@/components/Preloader'
import Hero from '@/components/sections/home/Hero'
import Marquee from '@/components/sections/home/Marquee'
import Stats from '@/components/sections/home/Stats'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import Process from '@/components/sections/home/Process'
import WorkPreview from '@/components/sections/home/WorkPreview'
import PricingSection from '@/components/sections/home/PricingSection'
import TeamSection from '@/components/sections/home/TeamSection'
import CTASection from '@/components/sections/home/CTASection'

// Dynamic import for Aurora to avoid SSR issues
const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

export default function HomePage() {
  return (
    <>
      <Preloader />
      <Aurora />
      <div className="relative z-10">
        <Hero />
        <Marquee />
        <Stats />
        <ServicesGrid />
        <Process />
        <WorkPreview />
        <PricingSection />
        <TeamSection />
        <CTASection />
      </div>
    </>
  )
}
