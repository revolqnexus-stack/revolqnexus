import ServiceHero from '@/components/sections/shared/ServiceHero'
import ServiceDeliverables from '@/components/sections/shared/ServiceDeliverables'
import ServiceFAQ from '@/components/sections/shared/ServiceFAQ'
import ServiceCTA from '@/components/sections/shared/ServiceCTA'

export const metadata = {
  title: 'Brand Strategy Services | REVOLQ',
  description: 'Positioning, identity, and the visual language that makes you unforgettable.',
}

export default function BrandStrategyPage() {
  const deliverables = [
    'Brand positioning document',
    'Competitor analysis',
    'Visual identity guidelines',
    'Color and typography system',
    'Tone of voice guidelines',
    'Digital brand standards',
  ]

  const faqs = [
    {
      question: 'Do you design logos?',
      answer: 'We create brand strategy and visual guidelines, including logo concepts and recommendations. For final logo execution, we partner with specialist designers or can recommend trusted collaborators.'
    },
    {
      question: 'How is this different from just getting a logo?',
      answer: 'A logo is just one element. Brand strategy defines who you are, who you\'re for, and how you communicate. It\'s the foundation that makes all your marketing effective.'
    },
    {
      question: 'What if I already have a brand?',
      answer: 'We can audit your existing brand and create a strategy to evolve it. This includes brand refresh, positioning updates, and ensuring consistency across all touchpoints.'
    },
  ]

  return (
    <>
      {/* Aurora temporarily disabled for build */}
      <ServiceHero
        label="05 — BRAND STRATEGY"
        title="The story your\nbusiness tells."
        sub="Positioning, identity, and the visual language that makes you unforgettable."
        backLink="BRAND STRATEGY"
      />

      <ServiceDeliverables deliverables={deliverables} />

      {/* Brand Pillars */}
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
            Brand pillars we build
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="p-6 border border-[var(--border)] rounded-lg text-center"
              style={{
                background: 'var(--ink3)',
              }}
            >
              <h3 
                className="h3 mb-4"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--rose)',
                }}
              >
                Position
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.85rem',
                  fontWeight: 200,
                  lineHeight: 1.6,
                  color: 'var(--fog)',
                }}
              >
                Where you fit in the market and why customers should choose you
              </p>
            </div>

            <div 
              className="p-6 border border-[var(--border)] rounded-lg text-center"
              style={{
                background: 'var(--ink3)',
              }}
            >
              <h3 
                className="h3 mb-4"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--rose)',
                }}
              >
                Personality
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.85rem',
                  fontWeight: 200,
                  lineHeight: 1.6,
                  color: 'var(--fog)',
                }}
              >
                The character and voice that makes your brand uniquely yours
              </p>
            </div>

            <div 
              className="p-6 border border-[var(--border)] rounded-lg text-center"
              style={{
                background: 'var(--ink3)',
              }}
            >
              <h3 
                className="h3 mb-4"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--rose)',
                }}
              >
                Promise
              </h3>
              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.85rem',
                  fontWeight: 200,
                  lineHeight: 1.6,
                  color: 'var(--fog)',
                }}
              >
                The value and experience customers can expect every time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '8rem 5rem',
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
            Our process
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Deep dive into your business, market, customers, and competitors'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Define positioning, personality, and core brand pillars'
              },
              {
                step: '03',
                title: 'Identity',
                description: 'Create visual language, voice, and brand guidelines'
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'Apply brand across all touchpoints with training and support'
              },
            ].map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-[80px_1fr] gap-6 items-center"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '2rem 0',
                  borderBottom: index < 3 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div 
                  className="text-4xl font-light"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '3rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                    opacity: 0.3,
                  }}
                >
                  {item.step}
                </div>
                
                <div>
                  <h3 
                    className="h3 mb-2"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                      fontWeight: 300,
                      color: 'var(--white)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: '0.92rem',
                      fontWeight: 200,
                      lineHeight: 1.6,
                      color: 'var(--fog)',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
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
            Starting at ₹15,000
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
            Complete brand strategy package including positioning, visual guidelines, 
            and implementation support. Custom quotes available for established businesses.
          </p>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA 
        title="Ready to build your brand?"
        sub="Let's create a brand that connects with your audience and drives growth."
        buttonText="BUILD YOUR BRAND"
        buttonHref="/contact"
      />
    </>
  )
}
