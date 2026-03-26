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
  '24/7 WhatsApp AI Agents',
  'n8n Workflow Automation',
  'Automated Lead Capture',
  'CRM Integration',
  'Auto-Reply Systems',
  'Meeting Booking Automation',
  'AI Content Generation Pipes',
  'Custom Database Connectors'
]

const faqs = [
  { 
    q: 'Is it hard to manage?', 
    a: 'No. We build it, we host it, and we maintain it. You just watch the leads come in.' 
  },
  { 
    q: 'Can it handle Malayalam?', 
    a: 'Yes. Our AI models are tuned to handle multilingual inputs including English and Malayalam.' 
  }
]

export default function AIPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="SERVICE — AI AUTOMATION"
          title="Work while you sleep."
          sub="Your team isn't 24/7. Your digital engine should be. We build AI systems that handle the grunt work so you can lead."
        />
        <ServiceDeliverables items={deliverables} />
        <ServiceFAQ items={faqs} />
        <ServiceCTA title="Automate your growth." price="₹35,000" />
      </div>
    </>
  )
}
