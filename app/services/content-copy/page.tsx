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
  'Conversion-Focused Website Copy',
  'Magnetic Headlines & Hooks',
  'SEO Content Strategy',
  'Technical Whitepapers',
  'Email Marketing Sequences',
  'High-Performance Ad Copy',
  'Brand Voice Guidelines',
  'Competitor Messaging Audit'
]

const faqs = [
  { 
    q: 'Why does copy matter more than design?', 
    a: 'Design draws the eye, but copy closes the deal. Without a clear, persuasive narrative, your visitors will leave even the most beautiful website.' 
  },
  { 
    q: 'Do you write in Malayalam?', 
    a: 'Yes. We specialize in effective, natural-sounding copy for both English and Kerala-specific Malayalam audiences.' 
  }
]

export default function ContentPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="SERVICE — CONTENT & COPY"
          title="Magnetic words that sell."
          sub="Stop using generic corporate-speak. We write copy that speaks directly to your customer's pain and shows them exactly why you are the cure."
        />
        <ServiceDeliverables items={deliverables} />
        <ServiceFAQ items={faqs} />
        <ServiceCTA title="Tell your story better." price="₹12,000" />
      </div>
    </>
  )
}
