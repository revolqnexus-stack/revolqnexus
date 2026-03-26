import Link from 'next/link'
import RevealImage from '@/components/ui/RevealImage'
import Tag from '@/components/ui/Tag'

export const metadata = {
  title: 'NIXTUDIO Case Study | REVOLQ',
  description: 'Complete digital transformation for NIXTUDIO bridal studio. Custom website, SEO, and WhatsApp AI automation that handles 50+ daily inquiries.',
}

export default function NixtudioCaseStudy() {
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
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/work"
              className="hover:text-[var(--white)] transition-colors"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 300,
                color: 'var(--fog)',
                textDecoration: 'none',
              }}
            >
              WORK → NIXTUDIO
            </Link>
          </div>

          <Tag className="mb-8">
            BRIDAL STUDIO · PALA, KERALA · 2025
          </Tag>

          <h1 className="h1 mb-6">
            NIXTUDIO by<br />
            <em>Nikita Liby</em>
          </h1>

          <p 
            className="max-w-2xl"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.92rem',
              fontWeight: 200,
              lineHeight: 1.8,
              color: 'var(--fog)',
            }}
          >
            Complete digital transformation for Kerala's premier bridal makeup artist. 
            Custom Next.js website, SEO optimization, and WhatsApp AI automation that 
            handles 50+ daily inquiries while Nikita focuses on her craft.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section 
        className="case-section relative z-[10]"
        style={{
          padding: '8rem 5rem',
          background: 'var(--ink2)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealImage
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80"
                alt="NIXTUDIO Bridal Studio"
                width={600}
                height={400}
              />
            </div>

            <div>
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
                Project Overview
              </h2>

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
                NIXTUDIO is a premium bridal makeup studio based in Pala, Kerala. 
                Founded by Nikita Liby, the studio has built a reputation for exceptional 
                makeup artistry and personalized service. Despite their excellence in 
                craft, they struggled with digital visibility and manual inquiry management.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div 
                    className="text-3xl font-light mb-2"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '2rem',
                      fontWeight: 300,
                      color: 'var(--rose)',
                    }}
                  >
                    3 Months
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
                    Project Duration
                  </div>
                </div>

                <div>
                  <div 
                    className="text-3xl font-light mb-2"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '2rem',
                      fontWeight: 300,
                      color: 'var(--rose)',
                    }}
                  >
                    ₹46,000
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
                    Investment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section 
        className="case-section relative z-[10]"
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
            The Challenge
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'No Digital Presence',
                description: 'No website, poor GBP optimisation, invisible to potential clients searching online.'
              },
              {
                title: 'Manual Inquiry Bottleneck',
                description: '50+ WhatsApp inquiries daily with 4-hour average response time, losing potential bookings.'
              },
              {
                title: 'Inconsistent Branding',
                description: 'No cohesive visual identity or messaging across platforms, affecting premium positioning.'
              },
            ].map((challenge, index) => (
              <div 
                key={index}
                className="p-6 border border-[var(--border)] rounded-lg"
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
                  {challenge.title}
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
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section 
        className="case-section relative z-[10]"
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
            Our Solution
          </h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  Premium Website
                </h3>
                <ul className="space-y-3">
                  {[
                    'Custom Next.js website with portfolio gallery',
                    'SEO-optimised service pages and pricing',
                    'Mobile-first responsive design',
                    'Integrated booking inquiry system',
                    'Professional photography showcase',
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
                      <span style={{ color: 'var(--rose)', marginTop: '2px' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <RevealImage
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                  alt="Website Design"
                  width={500}
                  height={350}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <RevealImage
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=600&q=80"
                  alt="WhatsApp AI"
                  width={500}
                  height={350}
                />
              </div>

              <div className="order-1 lg:order-2">
                <h3 
                  className="h3 mb-4"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  AI Automation System
                </h3>
                <ul className="space-y-3">
                  {[
                    'WhatsApp AI agent trained on Nikita\'s voice',
                    'Instant responses to common inquiries',
                    'Automatic appointment scheduling',
                    'Intelligent escalation for complex queries',
                    'Google Sheets integration for lead tracking',
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
                      <span style={{ color: 'var(--rose)', marginTop: '2px' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section 
        className="case-section relative z-[10]"
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
            Results
          </h2>

          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem',
            }}
          >
            <div className="text-center">
              <div 
                className="text-5xl font-light mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
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
                Google Reviews
              </div>
            </div>

            <div className="text-center">
              <div 
                className="text-5xl font-light mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
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

            <div className="text-center">
              <div 
                className="text-5xl font-light mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
                }}
              >
                #4
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
                Map Ranking
              </div>
            </div>

            <div className="text-center">
              <div 
                className="text-5xl font-light mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 300,
                  color: 'var(--white)',
                }}
              >
                24/7
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
                AI Agent
              </div>
            </div>
          </div>

          <div 
            className="p-8 border border-[var(--rose)] rounded-lg"
            style={{
              background: 'var(--ink3)',
              border: '1px solid var(--rose)',
            }}
          >
            <h3 
              className="h3 mb-6"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                fontWeight: 300,
                color: 'var(--white)',
              }}
            >
              Key Metrics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div 
                  className="text-3xl font-light mb-2"
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
                  GBP Impressions
                </div>
              </div>

              <div>
                <div 
                  className="text-3xl font-light mb-2"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  +180%
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
                  Website Traffic
                </div>
              </div>

              <div>
                <div 
                  className="text-3xl font-light mb-2"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '2rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                  }}
                >
                  4hrs → Instant
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
                  Response Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section 
        className="case-section relative z-[10]"
        style={{
          padding: '8rem 5rem',
          background: 'var(--ink2)',
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <blockquote 
            className="text-2xl mb-8 italic"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.8rem',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--white)',
              lineHeight: 1.4,
            }}
          >
            "REVOLQ transformed my business completely. I went from manually answering every WhatsApp message to having an AI that responds exactly like I would. My bookings doubled within 2 months."
          </blockquote>
          
          <cite 
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.92rem',
              fontWeight: 200,
              color: 'var(--fog)',
              fontStyle: 'normal',
            }}
          >
            — Nikita Liby, Founder, NIXTUDIO
          </cite>
        </div>
      </section>

      {/* CTA */}
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
            Ready for your transformation?
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
            Let's build a digital system that drives your business growth while you focus on what you do best.
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
              START YOUR PROJECT
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
              SEE MORE WORK
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
