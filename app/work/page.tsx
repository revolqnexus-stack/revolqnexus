import Link from 'next/link'
import RevealImage from '@/components/ui/RevealImage'
import Tag from '@/components/ui/Tag'

export const metadata = {
  title: 'Our Work | REVOLQ',
  description: 'The work. Real businesses. Real results. Case studies of digital transformation projects.',
}

export default function WorkPage() {
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
        <div className="max-w-6xl mx-auto">
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              color: 'var(--rose)', 
              fontSize: '0.875rem', 
              fontWeight: 400,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              OUR WORK
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
            Real businesses.
            <br />
            Real results.
          </h1>
          
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1.25rem', 
            lineHeight: 1.6,
            maxWidth: '40rem'
          }}>
            Case studies of digital transformation projects that moved the needle.
          </p>
        </div>
      </section>

      {/* NIXTUDIO Case Study */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '6rem 5rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <Tag>WEBSITE • SEO • AI</Tag>
              <h2 style={{ 
                color: 'var(--text)', 
                fontSize: 'clamp(2rem, 5vw, 3rem)', 
                fontWeight: 300,
                lineHeight: 1.2,
                margin: '1.5rem 0'
              }}>
                NIXTUDIO
              </h2>
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '1.125rem', 
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Complete digital transformation for Kerala's premier bridal studio. Custom website, SEO dominance, and WhatsApp AI that handles 50+ daily inquiries.
              </p>
              <Link 
                href="/work/nixtudio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--rose)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 400,
                  transition: 'gap 0.2s ease'
                }}
              >
                View case study →
              </Link>
            </div>
            
            <div style={{ borderRadius: '1rem', overflow: 'hidden' }}>
              <RevealImage 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center"
                alt="NIXTUDIO Bridal Studio"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '6rem 5rem',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'center',
            opacity: 0.6
          }}>
            <div>
              <Tag>COMING SOON</Tag>
              <h2 style={{ 
                color: 'var(--text)', 
                fontSize: 'clamp(2rem, 5vw, 3rem)', 
                fontWeight: 300,
                lineHeight: 1.2,
                margin: '1.5rem 0'
              }}>
                Holy Family Dental
              </h2>
              <p style={{ 
                color: 'var(--text-muted)', 
                fontSize: '1.125rem', 
                lineHeight: 1.6,
                marginBottom: '2rem'
              }}>
                Healthcare website with patient portal, appointment booking, and local SEO for a multi-location dental practice.
              </p>
              <span style={{ 
                color: 'var(--text-muted)', 
                fontSize: '0.875rem' 
              }}>
                Case study launching Q2 2024
              </span>
            </div>
            
            <div style={{ 
              borderRadius: '1rem', 
              overflow: 'hidden',
              background: 'var(--ink3)',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
