import ServiceHero from '@/components/sections/shared/ServiceHero'
import ServiceFAQ from '@/components/sections/shared/ServiceFAQ'
import ServiceCTA from '@/components/sections/shared/ServiceCTA'
import MagneticButton from '@/components/ui/MagneticButton'
import { Check, X } from 'lucide-react'

export const metadata = {
  title: 'Monthly Retainer Services | REVOLQ',
  description: 'We become your digital team. GBP management, SEO monitoring, content, AI maintenance — all handled every month.',
}

export default function RetainerPage() {
  const faqs = [
    {
      question: 'What\'s the minimum commitment?',
      answer: 'We recommend a 3-month minimum to see meaningful results, but we offer month-to-month options for businesses trying our services for the first time.'
    },
    {
      question: 'Can I customize my retainer package?',
      answer: 'Absolutely. These are starting points. We can create custom packages based on your specific needs and goals.'
    },
    {
      question: 'How do you report progress?',
      answer: 'You receive a monthly report with rankings, traffic, GBP insights, content performance, and upcoming initiatives. We also schedule quarterly strategy calls.'
    },
  ]

  const packages = [
    {
      name: 'STARTER',
      price: '₹4,000',
      period: '/month',
      features: [
        { included: true, text: '4 GBP posts per month' },
        { included: true, text: 'Review monitoring and responses' },
        { included: true, text: 'Basic SEO monitoring' },
        { included: true, text: 'Monthly performance report' },
        { included: true, text: 'Email support within 48 hours' },
        { included: false, text: 'WhatsApp AI maintenance' },
        { included: false, text: 'Content creation' },
        { included: false, text: 'Website updates' },
        { included: false, text: 'Priority support' },
      ],
      recommended: false,
    },
    {
      name: 'STANDARD',
      price: '₹8,000',
      period: '/month',
      features: [
        { included: true, text: '8 GBP posts with branded photography captions' },
        { included: true, text: 'All Google reviews monitored and responded to' },
        { included: true, text: 'Monthly SEO report (rankings, impressions, clicks)' },
        { included: true, text: 'Website content updates as needed' },
        { included: true, text: 'Competitor tracking report' },
        { included: true, text: 'WhatsApp AI maintenance' },
        { included: true, text: 'Priority support response within 4 hours' },
        { included: true, text: 'Quarterly strategy call' },
        { included: false, text: 'Advanced automation workflows' },
        { included: false, text: 'Paid advertising management' },
      ],
      recommended: true,
    },
    {
      name: 'PREMIUM',
      price: '₹15,000',
      period: '/month',
      features: [
        { included: true, text: 'Everything in STANDARD' },
        { included: true, text: 'Advanced AI automation workflows' },
        { included: true, text: 'Content creation and blog posts' },
        { included: true, text: 'Social media management' },
        { included: true, text: 'Paid advertising strategy and monitoring' },
        { included: true, text: 'Bi-weekly reporting and calls' },
        { included: true, text: 'A/B testing and conversion optimization' },
        { included: true, text: 'Advanced competitor analysis' },
        { included: true, text: 'Brand strategy consultation' },
        { included: true, text: 'Dedicated account manager' },
      ],
      recommended: false,
    },
  ]

  return (
    <>
      {/* Aurora temporarily disabled for build */}
      <ServiceHero
        label="06 — MONTHLY RETAINER"
        title="We become your\ndigital team."
        sub="GBP management, SEO monitoring, content, AI maintenance — all handled every month."
        backLink="MONTHLY RETAINER"
      />

      {/* What's Included Monthly */}
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
            What\'s included monthly
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 
                className="h3 mb-4"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--rose)',
                }}
              >
                Google Business Profile
              </h3>
              <ul className="space-y-2">
                {[
                  '8 GBP posts with branded photography captions',
                  'All Google reviews monitored and responded to',
                  ' GBP insights tracking and optimization',
                  'Q&A monitoring and responses',
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: '0.92rem',
                      fontWeight: 200,
                      color: 'var(--fog)',
                    }}
                  >
                    <span style={{ color: 'var(--rose)', marginTop: '2px' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 
                className="h3 mb-4"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--rose)',
                }}
              >
                SEO & Content
              </h3>
              <ul className="space-y-2">
                {[
                  'Monthly SEO report (rankings, impressions, clicks)',
                  'Website content updates as needed',
                  'Competitor tracking and analysis',
                  'Technical SEO monitoring and fixes',
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: '0.92rem',
                      fontWeight: 200,
                      color: 'var(--fog)',
                    }}
                  >
                    <span style={{ color: 'var(--rose)', marginTop: '2px' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 
              className="h3 mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                fontWeight: 300,
                color: 'var(--rose)',
              }}
            >
              Support & Maintenance
            </h3>
            <ul className="space-y-2">
              {[
                'WhatsApp AI maintenance and optimization',
                'Priority support response within 4 hours',
                'Monthly strategy call and performance review',
                'Unlimited minor website updates and fixes',
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3"
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: '0.92rem',
                    fontWeight: 200,
                    color: 'var(--fog)',
                  }}
                >
                  <span style={{ color: 'var(--rose)', marginTop: '2px' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '8rem 5rem',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 
            className="h2 mb-12 text-center"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: 'var(--white)',
            }}
          >
            Choose your plan
          </h2>

          <div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
            }}
          >
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative ${pkg.recommended ? 'scale-105' : ''}`}
                style={{
                  background: pkg.recommended ? 'var(--ink4)' : 'var(--ink3)',
                  border: pkg.recommended ? '1px solid var(--rose)' : '1px solid var(--border)',
                  padding: '2.5rem',
                  transform: pkg.recommended ? 'scale(1.03)' : 'scale(1)',
                  position: 'relative',
                }}
              >
                {pkg.recommended && (
                  <div 
                    className="absolute top-6 right-6 px-3 py-1 text-xs font-mono tracking-wider uppercase"
                    style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      padding: '0.3rem 0.8rem',
                      background: 'var(--rose)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.55rem',
                      fontWeight: 300,
                      letterSpacing: '0.3em',
                      textTransform: 'uppercase',
                    }}
                  >
                    RECOMMENDED
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 300,
                      letterSpacing: '0.4em',
                      color: 'var(--rose)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {pkg.name}
                  </h3>
                  
                  <div 
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(2rem, 3vw, 3rem)',
                      fontWeight: 300,
                      color: 'var(--white)',
                    }}
                  >
                    {pkg.price}
                    <span 
                      style={{
                        fontSize: '1rem',
                        color: 'var(--fog)',
                      }}
                    >
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-3"
                      style={{
                        fontFamily: 'var(--font-jost)',
                        fontSize: '0.85rem',
                        fontWeight: 200,
                        color: feature.included ? 'var(--fog)' : 'var(--dim)',
                        opacity: feature.included ? 1 : 0.5,
                      }}
                    >
                      {feature.included ? (
                        <Check size={16} style={{ color: 'var(--rose)', marginTop: '2px', flexShrink: 0 }} />
                      ) : (
                        <X size={16} style={{ color: 'var(--dim)', marginTop: '2px', flexShrink: 0 }} />
                      )}
                      {feature.text}
                    </div>
                  ))}
                </div>

                <MagneticButton
                  href="/contact"
                  className={`w-full py-[1rem] text-center font-mono text-[0.65rem] font-light tracking-[0.2em] uppercase transition-colors ${
                    pkg.recommended 
                      ? 'bg-[var(--rose)] text-[var(--ink)] hover:bg-[var(--rose2)]' 
                      : 'border border-[var(--border2)] text-[var(--fog)] hover:text-[var(--white)] hover:border-[var(--rose)]'
                  }`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    display: 'block',
                    width: '100%',
                    padding: '1rem 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  START YOUR RETAINER
                </MagneticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA 
        title="Ready for ongoing growth?"
        sub="Let's handle your digital presence while you focus on running your business."
        buttonText="START YOUR RETAINER"
        buttonHref="/contact"
      />
    </>
  )
}
