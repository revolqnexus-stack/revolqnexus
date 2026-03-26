import ServiceHero from '@/components/sections/shared/ServiceHero'
import ServiceDeliverables from '@/components/sections/shared/ServiceDeliverables'
import ServiceFAQ from '@/components/sections/shared/ServiceFAQ'
import ServiceCTA from '@/components/sections/shared/ServiceCTA'

export const metadata = {
  title: 'SEO & Google Business Profile Services | REVOLQ',
  description: 'Local SEO, Google Business Profile management, and search visibility that compounds over time. Be found by customers who matter.',
}

export default function SEOGBPPage() {
  const deliverables = [
    'Technical SEO audit and fix',
    'Google Search Console setup',
    'XML Sitemap generation',
    'Structured data (JSON-LD Schema)',
    'Meta tags and OG optimization',
    'Google Business Profile setup',
    'GBP posts (8/month)',
    'Review monitoring + responses',
    'Monthly ranking reports',
    'Competitor analysis',
  ]

  const faqs = [
    {
      question: 'How long until I see results?',
      answer: 'SEO is a long-term strategy. You might see initial improvements in 4-6 weeks, but significant results typically appear after 3-6 months of consistent effort.'
    },
    {
      question: 'Do you guarantee #1 rankings?',
      answer: 'No one can guarantee specific rankings. We focus on sustainable improvements in visibility, traffic, and conversions. Our clients consistently see measurable growth in search presence.'
    },
    {
      question: 'What\'s the difference between SEO and GBP?',
      answer: 'SEO improves your website\'s visibility in search results, while GBP (Google Business Profile) manages your local business listing. Both work together for maximum local search visibility.'
    },
  ]

  return (
    <>
      {/* Aurora temporarily disabled for build */}
      <ServiceHero
        label="02 — SEO & GBP"
        title="Be found by the\ncustomers who matter."
        sub="Local SEO, Google Business Profile management, and search visibility that compounds over time."
        backLink="SEO & GBP"
      />

      <ServiceDeliverables deliverables={deliverables} />

      {/* Case Study Callout */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '8rem 5rem',
          background: 'var(--ink2)',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <div 
            className="p-8 border border-[var(--rose)] rounded-lg"
            style={{
              background: 'var(--ink3)',
              border: '1px solid var(--rose)',
            }}
          >
            <h3 
              className="h3 mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                fontWeight: 300,
                color: 'var(--white)',
              }}
            >
              Case Study: NIXTUDIO
            </h3>

            <p 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.92rem',
                fontWeight: 200,
                lineHeight: 1.8,
                color: 'var(--fog)',
              }}
            >
              NIXTUDIO went from #4 to targeting #1 in Pala local search — with 464 reviews at 4.9★ — using our SEO system. Their GBP impressions increased by 340% in 3 months.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div 
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  #4 → #1
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'var(--fog)',
                    textTransform: 'uppercase',
                  }}
                >
                  Ranking Target
                </div>
              </div>

              <div>
                <div 
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  464
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'var(--fog)',
                    textTransform: 'uppercase',
                  }}
                >
                  Reviews
                </div>
              </div>

              <div>
                <div 
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  4.9★
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'var(--fog)',
                    textTransform: 'uppercase',
                  }}
                >
                  Rating
                </div>
              </div>

              <div>
                <div 
                  className="text-3xl font-light mb-1"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  +340%
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    color: 'var(--fog)',
                    textTransform: 'uppercase',
                  }}
                >
                  Impressions
                </div>
              </div>
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
            Starting at ₹8,000/month
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
            Monthly retainer for ongoing SEO management and GBP optimization. 
            One-time setup fee may apply for new businesses.
          </p>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA 
        title="Ready to get found on Google?"
        sub="Your customers are searching. Let's make sure they find you first."
        buttonText="GET FOUND ON GOOGLE"
        buttonHref="/contact"
      />
    </>
  )
}
