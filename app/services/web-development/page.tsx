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
  'Custom Next.js 14 Architecture',
  'GSAP & Framer Motion Animations',
  'Raw Three.js / WebGL Visuals',
  'Perfect Lighthouse Scores',
  'Vercel Edge Deployment',
  'Responsive Industrial Design',
  'Strict TypeScript Engineering',
  'CMS Integration (Contentful/Sanity)'
]

const faqs = [
  { 
    q: 'Why Next.js instead of WordPress?', 
    a: 'WordPress is a relic. Next.js provides unmatched speed, security, and SEO capabilities by generating static HTML that crawlers love and users feel instantly.' 
  },
  { 
    q: 'How long does a build take?', 
    a: 'A typical high-end rebuild takes 4-6 weeks from discovery to deployment.' 
  }
]

export default function WebDevPage() {
  return (
    <>
      <Aurora />
      <div className="relative z-10">
        <ServiceHero 
          label="SERVICE — WEB DEVELOPMENT"
          title="High-performance digital engineering."
          sub="We build websites that feel like premium software. Fast, fluid, and focused on conversion."
        />
        <ServiceDeliverables items={deliverables} />
        <ServiceFAQ items={faqs} />
        <ServiceCTA title="Ready for a serious build?" price="₹45,000" />
      </div>
    </>
  )
}
