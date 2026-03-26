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
            <div key={i} className="flex items-center gap-6 p-8 bg-[var(--ink3)] border border-[var(--border)] group hover:border-[var(--accent2)] transition-colors">
              <div className="w-2 h-2 rounded-full bg-[var(--accent2)] shadow-[0_0_10px_var(--accent2)]" />
              <span className="font-[var(--font-mono)] text-[0.7rem] uppercase tracking-wider text-[var(--white)]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
