'use client'

interface FAQItem {
  q: string
  a: string
}

interface ServiceFAQProps {
  items: FAQItem[]
}

export default function ServiceFAQ({ items }: ServiceFAQProps) {
  return (
    <section className="relative z-10 py-[6rem] px-[2rem] sm:px-[5rem] bg-[var(--ink2)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-[var(--font-cormorant)] text-[2.5rem] font-light text-[var(--white)] mb-12">Common Questions</h2>
        
        <div className="flex flex-col gap-12">
          {items.map((item, i) => (
            <div key={i} className="group">
              <h3 className="font-[var(--font-jost)] text-[1.1rem] font-normal text-[var(--white)] mb-4">{item.q}</h3>
              <p className="body text-[var(--fog)] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
