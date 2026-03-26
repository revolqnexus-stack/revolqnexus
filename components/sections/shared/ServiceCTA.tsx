import MagneticButton from '@/components/ui/MagneticButton'

interface ServiceCTAProps {
  title: string
  sub: string
  buttonText: string
  buttonHref: string
}

export default function ServiceCTA({ title, sub, buttonText, buttonHref }: ServiceCTAProps) {
  return (
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
          {title}
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
          {sub}
        </p>

        <div className="flex justify-center">
          <MagneticButton
            href={buttonHref}
            className="px-[2.8rem] py-[1rem] bg-[var(--rose)] text-[var(--ink)] hover:bg-[var(--rose2)] transition-colors"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            {buttonText}
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
