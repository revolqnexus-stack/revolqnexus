import ServiceHero from '@/components/sections/shared/ServiceHero'
import ServiceDeliverables from '@/components/sections/shared/ServiceDeliverables'
import ServiceFAQ from '@/components/sections/shared/ServiceFAQ'
import ServiceCTA from '@/components/sections/shared/ServiceCTA'

export const metadata = {
  title: 'Content & Copywriting Services | REVOLQ',
  description: 'SEO-optimised copy, brand voice development, and content that converts visitors into clients.',
}

export default function ContentCopyPage() {
  const deliverables = [
    'Website copywriting (all pages)',
    'SEO meta descriptions and titles',
    'Google Business Profile descriptions',
    'Brand voice guidelines',
    'OG image copy',
    'WhatsApp message templates',
    'Review response templates',
  ]

  const faqs = [
    {
      question: 'What makes your copy different?',
      answer: 'We write for both humans and search engines. Our copy is SEO-optimised but still sounds natural and persuasive. We focus on conversion while maintaining your brand voice.'
    },
    {
      question: 'Do you write in specific industries?',
      answer: 'Yes, we specialize in service-based businesses in Kerala. From healthcare to hospitality, we understand the local market and can adapt our writing style accordingly.'
    },
    {
      question: 'How do you develop our brand voice?',
      answer: 'We start with a detailed questionnaire and interviews to understand your values, target audience, and communication style. Then we create guidelines and sample content for your approval.'
    },
  ]

  return (
    <>
      {/* Aurora temporarily disabled for build */}
      <ServiceHero
        label="04 — CONTENT & COPY"
        title="Words that make\npeople act."
        sub="SEO-optimised copy, brand voice development, and content that converts visitors into clients."
        backLink="CONTENT & COPY"
      />

      <ServiceDeliverables deliverables={deliverables} />

      {/* Process */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '8rem 5rem',
          background: 'var(--ink2)',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 
            className="h2 mb-12"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: 'var(--white)',
            }}
          >
            Our writing process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full border border-[var(--border)] flex items-center justify-center"
                style={{
                  background: 'var(--ink3)',
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  1
                </span>
              </div>
              <h3 
                className="h3 mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
                }}
              >
                Discovery
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.85rem',
                  fontWeight: 200,
                  color: 'var(--fog)',
                }}
              >
                We deep-dive into your business, audience, and competitors
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full border border-[var(--border)] flex items-center justify-center"
                style={{
                  background: 'var(--ink3)',
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  2
                </span>
              </div>
              <h3 
                className="h3 mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
                }}
              >
                Strategy
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.85rem',
                  fontWeight: 200,
                  color: 'var(--fog)',
                }}
              >
                Develop brand voice and content strategy
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-full border border-[var(--border)] flex items-center justify-center"
                style={{
                  background: 'var(--ink3)',
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.5rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  3
                </span>
              </div>
              <h3 
                className="h3 mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
                }}
              >
                Creation
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.85rem',
                  fontWeight: 200,
                  color: 'var(--fog)',
                }}
              >
                Write, refine, and optimise for conversions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '8rem 5rem',
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
            Investment
          </h2>

          <div 
            className="mb-8"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              fontWeight: 300,
              color: 'var(--white)',
            }}
          >
            Starting at ₹8,000
          </div>

          <p 
            className="mb-8"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.92rem',
              fontWeight: 200,
              lineHeight: 1.8,
              color: 'var(--fog)',
            }}
          >
            Pricing varies based on scope and complexity. 
            Website copy packages start at ₹8,000, with comprehensive content strategies available.
          </p>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA 
        title="Ready to improve your copy?"
        sub="Let's craft words that convert visitors into customers."
        buttonText="IMPROVE YOUR COPY"
        buttonHref="/contact"
      />
    </>
  )
}
