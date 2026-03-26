'use client'

interface ServiceDeliverablesProps {
  title?: string
  items: string[]
}

export default function ServiceDeliverables({ title = "What's included", items }: ServiceDeliverablesProps) {
  return (
    <section className="relative z-10 py-[6rem] px-[2rem] sm:px-[5rem]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-12">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 py-4 border-b border-[var(--border)]">
              <span className="text-[var(--rose)] text-[0.8rem] mt-1">✓</span>
              <span className="font-[var(--font-mono)] text-[0.75rem] text-[var(--fog)] uppercase tracking-wider leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
