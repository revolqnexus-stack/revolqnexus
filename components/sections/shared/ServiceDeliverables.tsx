interface ServiceDeliverablesProps {
  title?: string
  deliverables: string[]
}

export default function ServiceDeliverables({ 
  title = "What's included", 
  deliverables 
}: ServiceDeliverablesProps) {
  return (
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
          {title}
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
  )
}
