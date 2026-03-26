'use client'

import dynamic from 'next/dynamic'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import ServiceDeliverables from '@/components/sections/shared/ServiceDeliverables'
import ServiceFAQ from '@/components/sections/shared/ServiceFAQ'
import ServiceCTA from '@/components/sections/shared/ServiceCTA'

const Aurora = dynamic(
  () => import('@/components/three/AuroraBackground'),
  { ssr: false }
)

const deliverables = [
  'Visual Identity Systems',
  'Market Positioning Strategy',
  'Competitor Brand Audit',
  'Color Palette & Typography',
  'Logo Architecture',
  'Brand Purpose & Mission',
  'Customer Persona Mapping',
  'Design System Implementation'
]

const faqs = [
  { 
    q: 'Is this just a logo?', 
    a: 'No. A logo is a symbol. Brand strategy is the entire system of how you are perceived in the market.' 
  },
  { 
    q: 'Who is this for?', 
    a: 'For businesses that want to increase their perceived value and stop competing on price alone.' 
  }
]

export default function BrandPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="SERVICE — BRAND STRATEGY"
          title="Built to be unforgettable."
          sub="We design visual and strategic foundations that command respect and justify premium pricing."
        />
        <ServiceDeliverables items={deliverables} />
        <ServiceFAQ items={faqs} />
        <ServiceCTA title="Build a real brand." price="₹25,000" />
      </div>
    </>
  )
}
