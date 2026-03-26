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
  'Google Business Profile Optimization',
  'Local Citation Building',
  'Technical SEO Audits',
  'Keyword Research & Mapping',
  'On-Page Optimization',
  'Google Search Console Setup',
  'Competitor Gap Analysis',
  'Monthly Performance Reports'
]

const faqs = [
  { 
    q: 'How long until I see results?', 
    a: 'SEO is a compounding game. You typically see movement in 4-8 weeks, with peak results at 6 months.' 
  },
  { 
    q: 'Do you guarantee #1 ranking?', 
    a: 'Anyone who guarantees #1 is lying. We guarantee the best possible technical execution and data-driven strategy to dominate your local market.' 
  }
]

export default function SEOPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="SERVICE — SEO & GBP"
          title="Dominance in local search."
          sub="Stop being invisible. We put your business where your customers are actually looking: the top of Google."
        />
        <ServiceDeliverables items={deliverables} />
        <ServiceFAQ items={faqs} />
        <ServiceCTA title="Get found today." price="₹15,000/mo" />
      </div>
    </>
  )
}
