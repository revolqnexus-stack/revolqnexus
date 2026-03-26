'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQ[]
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      className="relative z-[10]"
      style={{
        padding: '8rem 5rem',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          className="h2 mb-12 text-center"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.2rem, 4vw, 4.5rem)',
            fontWeight: 300,
            lineHeight: 1.0,
            color: 'var(--white)',
          }}
        >
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-[var(--border)] rounded-lg overflow-hidden"
              style={{
                background: 'var(--ink3)',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[var(--ink4)] transition-colors"
                style={{
                  padding: '1.5rem',
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.2rem',
                    fontWeight: 300,
                    color: 'var(--white)',
                  }}
                >
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp size={20} style={{ color: 'var(--rose)' }} />
                ) : (
                  <ChevronDown size={20} style={{ color: 'var(--rose)' }} />
                )}
              </button>

              {openIndex === index && (
                <div 
                  className="px-6 pb-4"
                  style={{
                    padding: '0 1.5rem 1.5rem',
                  }}
                >
                  <p 
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: '0.92rem',
                      fontWeight: 200,
                      lineHeight: 1.8,
                      color: 'var(--fog)',
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
