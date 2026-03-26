import HeroSection from '@/components/sections/HeroSection'
import WorkSection from '@/components/sections/WorkSection'
import ServicesSection from '@/components/sections/ServicesSection'

export const metadata = {
  title: 'REVOLQ — Digital Agency',
  description: 'Building systems that work. Electric brutalism meets digital excellence.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WorkSection />
      <ServicesSection />
    </>
  )
}
