import RevealImage from '@/components/ui/RevealImage'

export const metadata = {
  title: 'About REVOLQ | Digital Agency, Kerala',
  description: 'Not an agency. A digital system. Two people building websites that rank, SEO systems that compound, and AI automations that work at 3am.',
}

export default function AboutPage() {
  return (
    <>
      {/* Aurora temporarily disabled for build */}
      
      {/* Hero */}
      <section 
        className="about-section relative z-[10]"
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
            ABOUT REVOLQ
          </div>
          
          <h1 className="h1 mb-6">
            Not an agency.<br />
            <em>A digital system.</em>
          </h1>

          <p 
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.92rem',
              fontWeight: 200,
              lineHeight: 1.8,
              color: 'var(--fog)',
            }}
          >
            We build digital systems that work while you sleep. 
            Websites that rank, SEO that compounds, and AI that never stops.
          </p>
        </div>
      </section>

      {/* Story */}
      <section 
        className="about-section relative z-[10]"
        style={{
          padding: '8rem 5rem',
          background: 'var(--ink2)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 
                className="h2 mb-8"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.0,
                  color: 'var(--white)',
                }}
              >
                Our Story
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
                REVOLQ was born out of frustration. Watching brilliant small businesses in Kerala get ignored online — not because they weren't good enough, but because nobody was building their digital presence properly.
              </p>

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
                We're Ajmal and Eathen. We build websites that rank, SEO systems that compound, and AI automations that work at 3am when you're asleep.
              </p>

              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.92rem',
                  fontWeight: 200,
                  lineHeight: 1.8,
                  color: 'var(--fog)',
                }}
              >
                Based in Kerala. Building for anyone who wants to grow.
              </p>
            </div>

            <div>
              <div 
                className="h-96 bg-[var(--ink3)] rounded-lg flex items-center justify-center"
                style={{
                  height: '24rem',
                  background: 'var(--ink3)',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div 
                  className="text-center"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '4rem',
                    fontWeight: 300,
                    color: 'var(--rose)',
                    opacity: 0.2,
                  }}
                >
                  REVOLQ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section 
        className="about-section relative z-[10]"
        style={{
          padding: '8rem 5rem',
        }}
      >
        <div className="max-w-4xl mx-auto">
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
            Our Values
          </h2>

          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              background: 'var(--border)',
            }}
          >
            <div 
              className="p-8 text-center"
              style={{
                background: 'var(--ink3)',
                padding: '3rem 2rem',
              }}
            >
              <h3 
                className="h3 mb-6"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--rose)',
                }}
              >
                PRECISION
              </h3>
              
              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.92rem',
                  fontWeight: 200,
                  lineHeight: 1.8,
                  color: 'var(--fog)',
                }}
              >
                We don't guess. We research, map, then build. Every decision is backed by data and measured by results.
              </p>
            </div>

            <div 
              className="p-8 text-center"
              style={{
                background: 'var(--ink3)',
                padding: '3rem 2rem',
              }}
            >
              <h3 
                className="h3 mb-6"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--rose)',
                }}
              >
                TRANSPARENCY
              </h3>
              
              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.92rem',
                  fontWeight: 200,
                  lineHeight: 1.8,
                  color: 'var(--fog)',
                }}
              >
                No hidden fees. No jargon. Clear deliverables. You always know exactly what you're paying for.
              </p>
            </div>

            <div 
              className="p-8 text-center"
              style={{
                background: 'var(--ink3)',
                padding: '3rem 2rem',
              }}
            >
              <h3 
                className="h3 mb-6"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--rose)',
                }}
              >
                SYSTEMS
              </h3>
              
              <p 
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.92rem',
                  fontWeight: 200,
                  lineHeight: 1.8,
                  color: 'var(--fog)',
                }}
              >
                We don't just build websites. We build engines. Everything we make works harder over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section 
        className="about-section relative z-[10]"
        style={{
          padding: '8rem 5rem',
          background: 'var(--ink2)',
        }}
      >
        <div className="max-w-4xl mx-auto">
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
            The Team
          </h2>

          <p 
            className="text-center mb-16 max-w-md mx-auto"
            style={{
              fontFamily: 'var(--font-jost)',
              fontSize: '0.92rem',
              fontWeight: 200,
              lineHeight: 1.8,
              color: 'var(--fog)',
            }}
          >
            We build together. We ship together.
          </p>

          <div 
            className="flex flex-col lg:flex-row gap-8 justify-center items-start"
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2rem',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            {/* Ajmal */}
            <div
              className="border border-[var(--border)] hover:border-[var(--rose)] transition-all duration-300"
              style={{
                width: '420px',
                background: 'var(--ink3)',
                border: '1px solid var(--border)',
                transition: 'border-color 0.4s',
              }}
            >
              <div className="overflow-hidden">
                <RevealImage
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                  alt="Ajmal Mullapati"
                  width={420}
                  height={315}
                />
              </div>

              <div 
                className="p-7"
                style={{
                  padding: '1.8rem',
                }}
              >
                <h3 
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.8rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                  }}
                >
                  Ajmal Mullapati
                </h3>

                <div 
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 300,
                    letterSpacing: '0.35em',
                    color: 'var(--rose)',
                    textTransform: 'uppercase',
                  }}
                >
                  CO-FOUNDER
                </div>

                <p 
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: '0.85rem',
                    fontWeight: 200,
                    lineHeight: 1.6,
                    color: 'var(--fog)',
                  }}
                >
                  Full-stack developer with expertise in Next.js, AI automation, and system architecture. Turns complex problems into elegant solutions.
                </p>
              </div>
            </div>

            {/* Eathen */}
            <div
              className="border border-[var(--border)] hover:border-[var(--rose)] transition-all duration-300"
              style={{
                width: '420px',
                background: 'var(--ink3)',
                border: '1px solid var(--border)',
                transition: 'border-color 0.4s',
              }}
            >
              <div className="overflow-hidden">
                <RevealImage
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
                  alt="Eathen Baby"
                  width={420}
                  height={315}
                />
              </div>

              <div 
                className="p-7"
                style={{
                  padding: '1.8rem',
                }}
              >
                <h3 
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.8rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                  }}
                >
                  Eathen Baby
                </h3>

                <div 
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 300,
                    letterSpacing: '0.35em',
                    color: 'var(--rose)',
                    textTransform: 'uppercase',
                  }}
                >
                  CO-FOUNDER
                </div>

                <p 
                  style={{
                    fontFamily: 'var(--font-jost)',
                    fontSize: '0.85rem',
                    fontWeight: 200,
                    lineHeight: 1.6,
                    color: 'var(--fog)',
                  }}
                >
                  SEO specialist and digital strategist focused on local search visibility and brand growth. Gets businesses found by the right people.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="mt-16 text-center max-w-2xl mx-auto"
            style={{
              textAlign: 'center',
              maxWidth: '500px',
              margin: '4rem auto 0',
            }}
          >
            <p 
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.92rem',
                fontWeight: 200,
                lineHeight: 1.8,
                color: 'var(--fog)',
              }}
            >
              REVOLQ is two people who got tired of watching good businesses in Kerala 
              get ignored online. We started building systems that change that.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section 
        className="about-section relative z-[10]"
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
            Based in Kerala
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
            We're proud to be based in Kerala, serving businesses across India and beyond. 
            Local understanding, global standards.
          </p>

          <div 
            className="p-8 border border-[var(--border)] rounded-lg inline-block"
            style={{
              background: 'var(--ink3)',
              border: '1px solid var(--border)',
            }}
          >
            <div 
              className="text-4xl font-light mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2.5rem',
                fontWeight: 300,
                color: 'var(--rose)',
              }}
            >
              📍 Kerala, India
            </div>
            
            <div 
              style={{
                fontFamily: 'var(--font-jost)',
                fontSize: '0.92rem',
                fontWeight: 200,
                color: 'var(--fog)',
              }}
            >
              Serving clients worldwide
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
