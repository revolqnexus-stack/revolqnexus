import Link from 'next/link'
import { 
  Code2, 
  Search, 
  Bot, 
  PenLine, 
  Layers, 
  RefreshCw,
  ArrowRight 
} from 'lucide-react'

export const metadata = {
  title: 'Our Services | REVOLQ',
  description: 'Six specialisations. One agency. Web development, SEO, AI automation, content, brand strategy, and monthly retainers.',
}

export default function ServicesPage() {
  const services = [
    {
      number: '01',
      icon: Code2,
      title: 'WEB DEVELOPMENT',
      description: 'Custom Next.js systems engineered for performance and growth',
      href: '/services/web-development',
      price: 'Starting at ₹25,000'
    },
    {
      number: '02',
      icon: Search,
      title: 'SEO & GBP',
      description: 'Local search visibility that compounds over time',
      href: '/services/seo-gbp',
      price: 'Starting at ₹8,000/month'
    },
    {
      number: '03',
      icon: Bot,
      title: 'AI AUTOMATION',
      description: 'WhatsApp agents and workflows that work 24/7',
      href: '/services/ai-automation',
      price: 'Setup ₹20,000 + ₹3,000/month'
    },
    {
      number: '04',
      icon: PenLine,
      title: 'CONTENT & COPY',
      description: 'Words that make visitors become customers',
      href: '/services/content-copy',
      price: 'Starting at ₹8,000'
    },
    {
      number: '05',
      icon: Layers,
      title: 'BRAND STRATEGY',
      description: 'Positioning and identity that makes you unforgettable',
      href: '/services/brand-strategy',
      price: 'Starting at ₹15,000'
    },
    {
      number: '06',
      icon: RefreshCw,
      title: 'MONTHLY RETAINER',
      description: 'We become your complete digital team',
      href: '/services/retainer',
      price: 'Starting at ₹4,000/month'
    },
  ]

  return (
    <>
      {/* Aurora temporarily disabled for build */}
      
      {/* Hero */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '12rem 5rem 6rem',
          position: 'relative',
          zIndex: 10,
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="mb-8"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              fontWeight: 300,
              letterSpacing: '0.5em',
              color: 'var(--rose)',
              textTransform: 'uppercase',
            }}
          >
            OUR SERVICES
          </div>
          
          <h1 className="h1 mb-6">
            Every service.<br />
            <em>Fully explained.</em>
          </h1>

          <p 
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.92rem',
              fontWeight: 200,
              lineHeight: 1.8,
              color: 'var(--fog)',
              maxWidth: '560px',
            }}
          >
            Six specialisations. One agency. Click any service to see the full breakdown.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '8rem 5rem',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-0"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'var(--border)',
          }}
        >
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group block transition-all duration-300 hover:bg-[var(--ink4)] border-l-2 border-transparent hover:border-l-[var(--rose)]"
              style={{
                background: 'var(--ink3)',
                padding: '3rem 2.5rem',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
              }}
            >
              {/* Number */}
              <div 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  fontWeight: 300,
                  color: 'var(--rose)',
                }}
              >
                {service.number}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <service.icon 
                  size={24} 
                  style={{ color: 'var(--fog)' }}
                />
              </div>

              {/* Title */}
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.8rem',
                  fontWeight: 300,
                  color: 'var(--white)',
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.92rem',
                  fontWeight: 200,
                  lineHeight: 1.6,
                  color: 'var(--fog)',
                }}
              >
                {service.description}
              </p>

              {/* Price */}
              <div 
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                  color: 'var(--rose)',
                }}
              >
                {service.price}
              </div>

              {/* Arrow */}
              <div 
                className="flex justify-end transition-transform duration-300 group-hover:translate-x-1"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--rose)',
                }}
              >
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '8rem 5rem',
          background: 'var(--ink2)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="h2 mb-6"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: 'var(--white)',
            }}
          >
            Not sure which service you need?
          </h2>

          <p 
            className="mb-12 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.92rem',
              fontWeight: 200,
              lineHeight: 1.8,
              color: 'var(--fog)',
            }}
          >
            Every business is different. Let\'s talk about your goals and challenges, 
            and we\'ll recommend the right combination of services for your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-[2.8rem] py-[1rem] bg-[var(--rose)] text-[var(--ink)] hover:bg-[var(--rose2)] transition-colors text-center"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              GET RECOMMENDATION
            </Link>

            <Link
              href="/work"
              className="inline-block px-[2.8rem] py-[1rem] border border-[var(--border2)] text-[var(--fog)] hover:text-[var(--white)] hover:border-[var(--rose)] transition-colors text-center"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 300,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              SEE OUR WORK
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
