'use client'

import Link from 'next/link'
import SplitText from '@/components/ui/SplitText'

interface ServiceHeroProps {
  label: string
  title: string
  sub: string
  backLink: string
}

export default function ServiceHero({ label, title, sub, backLink }: ServiceHeroProps) {
  return (
    <section 
      className="relative z-[10]"
      style={{
        minHeight: '60vh',
        padding: '12rem 5rem 6rem',
        position: 'relative',
        zIndex: 10,
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link 
          href="/services"
          className="hover:text-[var(--white)] transition-colors"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            fontWeight: 300,
            color: 'var(--fog)',
            textDecoration: 'none',
          }}
        >
          SERVICES → {backLink}
        </Link>
      </div>

      {/* Label */}
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
        {label}
      </div>

      {/* Title */}
      <h1 className="h1 mb-8">
        <SplitText text={title} />
      </h1>

      {/* Sub text */}
      <p 
        className="max-w-3xl"
        style={{
          fontFamily: 'var(--font-jost)',
          fontSize: '0.92rem',
          fontWeight: 200,
          lineHeight: 1.8,
          color: 'var(--fog)',
          maxWidth: '560px',
        }}
      >
        {sub}
      </p>
    </section>
  )
}
