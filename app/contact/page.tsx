import MagneticButton from '@/components/ui/MagneticButton'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export const metadata = {
  title: 'Contact REVOLQ | Digital Agency, Kerala',
  description: 'Get in touch with REVOLQ. Tell us about your project and we\'ll reply within 24 hours. Usually much faster.',
}

export default function ContactPage() {
  return (
    <>
      {/* Aurora temporarily disabled for build */}
      
      <section 
        className="relative z-[10]"
        style={{
          padding: '12rem 5rem 8rem',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              color: 'var(--rose)', 
              fontSize: '0.875rem', 
              fontWeight: 400,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              CONTACT
            </span>
          </div>
          
          <h1 style={{ 
            color: 'var(--text)', 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: '2rem',
            maxWidth: '60rem'
          }}>
            Let's build something
            <br />
            remarkable together.
          </h1>
          
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1.25rem', 
            lineHeight: 1.6,
            maxWidth: '40rem',
            marginBottom: '4rem'
          }}>
            Tell us about your project and we'll reply within 24 hours. Usually much faster.
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem'
          }}>
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <Phone style={{ color: 'var(--rose)' }} />
                  <span style={{ 
                    color: 'var(--text)', 
                    fontSize: '1.125rem',
                    fontWeight: 500
                  }}>
                    Phone
                  </span>
                </div>
                <p style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: '1rem',
                  marginLeft: '2.5rem'
                }}>
                  +91 79956 17374
                </p>
              </div>

              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <Mail style={{ color: 'var(--rose)' }} />
                  <span style={{ 
                    color: 'var(--text)', 
                    fontSize: '1.125rem',
                    fontWeight: 500
                  }}>
                    Email
                  </span>
                </div>
                <p style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: '1rem',
                  marginLeft: '2.5rem'
                }}>
                  hello@revolq.in
                </p>
              </div>

              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <MapPin style={{ color: 'var(--rose)' }} />
                  <span style={{ 
                    color: 'var(--text)', 
                    fontSize: '1.125rem',
                    fontWeight: 500
                  }}>
                    Location
                  </span>
                </div>
                <p style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: '1rem',
                  marginLeft: '2.5rem'
                }}>
                  Kerala, India
                </p>
              </div>

              {/* WhatsApp CTA */}
              <MagneticButton
                href="https://wa.me/917995617374"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-[2.8rem] py-[1rem] bg-[var(--rose)] text-[var(--ink)]"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                <MessageCircle style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} />
                Chat on WhatsApp
              </MagneticButton>
            </div>

            {/* Right Column - Simple Form */}
            <div>
              <div style={{
                background: 'var(--ink3)',
                borderRadius: '1rem',
                padding: '3rem',
                height: '100%'
              }}>
                <h3 style={{ 
                  color: 'var(--text)', 
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  marginBottom: '2rem'
                }}>
                  Send us a message
                </h3>
                
                <p style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: '1rem',
                  marginBottom: '2rem'
                }}>
                  For faster response, include details about your project and timeline.
                </p>

                <MagneticButton
                  href="mailto:hello@revolq.in?subject=Project Inquiry&body=Hi REVOLQ team, I'd like to discuss..."
                  className="w-full px-[2.8rem] py-[1rem] bg-[var(--text)] text-[var(--ink)]"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  Open Email Client
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
