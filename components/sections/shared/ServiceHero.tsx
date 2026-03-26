'use client'

import Link from 'next/link'
import SplitText from '@/components/ui/SplitText'

interface ServiceHeroProps {
  label: string
  title: string
  sub: string
}

export default function ServiceHero({ label, title, sub }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[60vh] pt-[12rem] pb-[6rem] px-[2rem] sm:px-[5rem] z-10 border-b border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--dim)] tracking-widest uppercase mb-8">
           <Link href="/services" className="hover:text-[var(--white)] transition-colors">SERVICES</Link>
           <span className="mx-4">→</span>
           <span className="text-[var(--rose)]">{label.split('—')[1] || label}</span>
        </div>

        <div className="max-w-4xl">
        {/* Label */}
        <div className="label mb-6 text-[var(--accent2)] animate-pulse">{label}</div>

        {/* Title */}
        <h1 className="h1 text-[var(--white)] mb-8 leading-tight">
          {title}
        </h1>

        {/* Sub */}
        <p className="body text-xl max-w-2xl text-[var(--fog)]">
          {sub}
        </p>
      </div>
      </div>
    </section>
  )
}
