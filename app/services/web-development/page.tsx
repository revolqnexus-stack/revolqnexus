import AuroraWrapper from '@/components/AuroraWrapper'
import ServiceHero from '@/components/sections/shared/ServiceHero'
import ServiceDeliverables from '@/components/sections/shared/ServiceDeliverables'
import ServiceFAQ from '@/components/sections/shared/ServiceFAQ'
import ServiceCTA from '@/components/sections/shared/ServiceCTA'

export const metadata = {
  title: 'Web Development Services | REVOLQ',
  description: 'Custom Next.js websites engineered for performance and growth. No templates, no themes — just clean, fast, scalable web systems.',
}

export default function WebDevelopmentPage() {
  const deliverables = [
    'Custom Next.js App Router development',
    'TypeScript — fully typed, zero runtime errors',
    'Tailwind CSS + custom design system',
    'Mobile-first responsive design',
    'Vercel deployment + CI/CD pipeline',
    'Performance optimization (Core Web Vitals)',
    'SEO infrastructure (metadata, sitemap, schema)',
    'Google Analytics integration',
    'Custom domain setup',
    '30 days post-launch support',
  ]

  const faqs = [
    {
      question: 'How long does a website take?',
      answer: 'Typically 2–4 weeks from brief to launch, depending on complexity. Simple brochure sites can be ready in 2 weeks, while complex web applications may take 4-6 weeks.'
    },
    {
      question: 'Do you use templates?',
      answer: 'Never. Every site is built from scratch to your exact requirements. This ensures optimal performance, unique design, and no bloated code.'
    },
    {
      question: 'What about after launch?',
      answer: '30 days support included for any bugs or issues. After that, we offer monthly retainers for ongoing maintenance, updates, and improvements.'
    },
  ]

  return (
    <>
      {/* Aurora temporarily disabled for build */}
      <ServiceHero
        label="01 — WEB DEVELOPMENT"
        title="Websites that rank,\nconvert, and scale."
        sub="Not templates. Not themes. Custom Next.js systems engineered for performance and growth."
        backLink="WEB DEVELOPMENT"
      />

      {/* What's Included */}
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
            What's included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 py-3 border-b border-[var(--border)]"
                style={{
                  fontFamily: 'var(--font-jost)',
                  fontSize: '0.92rem',
                  fontWeight: 200,
                  color: 'var(--fog)',
                }}
              >
                <span style={{ color: 'var(--rose)', marginTop: '2px' }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Research', 'Design', 'Develop', 'Launch'].map((step, index) => (
              <div key={index} className="text-center">
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
                    {index + 1}
                  </span>
                </div>
                <h3 
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.2rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                  }}
                >
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '8rem 5rem',
          background: 'var(--ink2)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
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
            Tech stack we use
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Vercel',
              'GSAP',
              'Three.js',
              'Framer Motion',
              'Vercel'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 border border-[var(--border)] rounded-full"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: 'var(--fog)',
                  background: 'var(--ink3)',
                }}
              >
                {tech}
              </span>
            ))}
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
            Starting at ₹25,000
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
            Custom quotes based on complexity and requirements. 
            Contact us for a detailed proposal.
          </p>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA 
        title="Ready to build your website?"
        sub="Let's create something that works as good as it looks."
        buttonText="START A PROJECT"
        buttonHref="/contact"
      />
    </>
  )
}
