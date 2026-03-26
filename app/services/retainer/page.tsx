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
  'Continuous SEO Management',
  'Monthly Page Performance Updates',
  'Priority Technical Support',
  'Weekly Data Reporting',
  'Quarterly Strategy Pivots',
  'Google Business Profile Posting',
  'Lead Quality Monitoring',
  'Unlimited Small Feature Updates'
]

const faqs = [
  { 
    q: 'What counts as a "small update"?', 
    a: 'Anything that takes under 4 hours to implement — new team members, price changes, service updates, etc.' 
  },
  { 
    q: 'Can we cancel anytime?', 
    a: 'Yes our retainers are month-to-month. No lock-ins. We keep you by delivering results, not contracts.' 
  }
]

export default function RetainerPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="SERVICE — MONTHLY RETAINER"
          title="Your outsourced CTO."
          sub="Stop worrying about your digital presence. We take full ownership of your growth while you focus on your business."
        />
        <ServiceDeliverables items={deliverables} />
        <ServiceFAQ items={faqs} />
        <ServiceCTA title="Secure your growth." price="₹20,000/mo" />
      </div>
    </>
  )
}
