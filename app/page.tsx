'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Preloader from '@/components/Preloader'
import HeroSection from '@/components/sections/home/HeroSection'
import MarqueeSection from '@/components/sections/home/MarqueeSection'
import StatsSection from '@/components/sections/home/StatsSection'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import ProcessSection from '@/components/sections/home/ProcessSection'
import WorkPreview from '@/components/sections/home/WorkPreview'
import PricingSection from '@/components/sections/home/PricingSection'
import TeamSection from '@/components/sections/home/TeamSection'
import CTASection from '@/components/sections/home/CTASection'

// Dynamic import for Aurora to avoid SSR
const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

export default function HomePage() {
  const handlePreloaderComplete = () => {
    console.log('Preloader completed')
  }

  return (
    <>
      {/* Aurora temporarily disabled for build */}
      <Preloader onComplete={handlePreloaderComplete} />
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <ServicesGrid />
      <ProcessSection />
      <WorkPreview />
      <PricingSection />
      <TeamSection />
      <CTASection />
    </>
  )
}
