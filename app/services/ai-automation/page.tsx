import ServiceHero from '@/components/sections/shared/ServiceHero'
import ServiceFAQ from '@/components/sections/shared/ServiceFAQ'
import ServiceCTA from '@/components/sections/shared/ServiceCTA'
import { Bot, MessageSquare, Zap, Database } from 'lucide-react'

export const metadata = {
  title: 'AI Automation Services | REVOLQ',
  description: 'WhatsApp AI agents, n8n workflows, and automation systems built with Claude AI. Your business running at 3am.',
}

export default function AIAutomationPage() {
  const faqs = [
    {
      question: 'How does the WhatsApp AI agent work?',
      answer: 'The AI agent connects to your WhatsApp Business API, reads incoming messages, and replies using Claude AI in your brand voice. It can handle inquiries, book appointments, and escalate complex queries to you instantly.'
    },
    {
      question: 'What if the AI makes a mistake?',
      answer: 'The AI includes confidence scoring and escalation rules. If it\'s unsure about a response or detects a complex query, it automatically forwards the conversation to you with context about what was discussed.'
    },
    {
      question: 'Do I need technical knowledge?',
      answer: 'No. We handle all the technical setup and provide training. You get a simple dashboard to monitor conversations, update responses, and view analytics.'
    },
  ]

  return (
    <>
      {/* Aurora temporarily disabled for build */}
      <ServiceHero
        label="03 — AI AUTOMATION"
        title="Your business,\nrunning at 3am."
        sub="WhatsApp AI agents, n8n workflows, and automation systems built with Claude AI."
        backLink="AI AUTOMATION"
      />

      {/* What We Automate */}
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
            What we automate
          </h2>

          <div className="space-y-12">
            {/* WhatsApp AI Agent */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare size={24} style={{ color: 'var(--rose)' }} />
                  <h3 
                    className="h3"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                      fontWeight: 300,
                      color: 'var(--white)',
                    }}
                  >
                    WhatsApp AI Agent
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {[
                    'Reads incoming messages instantly',
                    'Replies in your voice using Claude AI',
                    'Escalates complex queries to you',
                    'Logs all conversations to Google Sheets',
                    'Works 24/7 — never misses an enquiry',
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3"
                      style={{
                        fontFamily: 'var(--font-jost)',
                        fontSize: '0.92rem',
                        fontWeight: 200,
                        color: 'var(--fog)',
                      }}
                    >
                      <span style={{ color: 'var(--rose)', marginTop: '2px' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div 
                className="p-8 border border-[var(--border)] rounded-lg"
                style={{
                  background: 'var(--ink3)',
                }}
              >
                <div className="text-center">
                  <Bot size={48} style={{ color: 'var(--rose)', margin: '0 auto 1rem' }} />
                  <div 
                    className="text-2xl font-light mb-2"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.8rem',
                      fontWeight: 300,
                      color: 'var(--white)',
                    }}
                  >
                    24/7 Response
                  </div>
                  <p 
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: '0.85rem',
                      fontWeight: 200,
                      color: 'var(--fog)',
                    }}
                  >
                    Never miss a customer inquiry, even while you sleep
                  </p>
                </div>
              </div>
            </div>

            {/* n8n Workflows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div 
                className="p-8 border border-[var(--border)] rounded-lg order-2 md:order-1"
                style={{
                  background: 'var(--ink3)',
                }}
              >
                <div className="text-center">
                  <Zap size={48} style={{ color: 'var(--rose)', margin: '0 auto 1rem' }} />
                  <div 
                    className="text-2xl font-light mb-2"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '1.8rem',
                      fontWeight: 300,
                      color: 'var(--white)',
                    }}
                  >
                    Automated Workflows
                  </div>
                  <p 
                    style={{
                      fontFamily: 'var(--font-jost)',
                      fontSize: '0.85rem',
                      fontWeight: 200,
                      color: 'var(--fog)',
                    }}
                  >
                    Connect your apps and automate repetitive tasks
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Zap size={24} style={{ color: 'var(--rose)' }} />
                  <h3 
                    className="h3"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(1.4rem, 2vw, 2rem)',
                      fontWeight: 300,
                      color: 'var(--white)',
                    }}
                  >
                    n8n Workflows
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {[
                    'Lead capture automation',
                    'CRM integrations',
                    'Invoice generation',
                    'Review request sequences',
                    'Booking confirmations',
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-3"
                      style={{
                        fontFamily: 'var(--font-jost)',
                        fontSize: '0.92rem',
                        fontWeight: 200,
                        color: 'var(--fog)',
                      }}
                    >
                      <span style={{ color: 'var(--rose)', marginTop: '2px' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section 
        className="relative z-[10]"
        style={{
          padding: '8rem 5rem',
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
            Tech stack
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Claude AI',
              'n8n',
              'WhatsApp Business API',
              'Google Sheets',
              'Webhooks',
              'REST APIs'
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
            Investment
          </h2>

          <div 
            className="mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              fontWeight: 300,
              color: 'var(--white)',
            }}
          >
            Setup: ₹20,000
          </div>

          <div 
            className="mb-8"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3vw, 3rem)',
              fontWeight: 300,
              color: 'var(--rose)',
            }}
          >
            + ₹3,000/month maintenance
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
            One-time setup includes AI training, workflow configuration, and integration. 
            Monthly covers API costs, monitoring, and updates.
          </p>
        </div>
      </section>

      <ServiceFAQ faqs={faqs} />
      <ServiceCTA 
        title="Ready to automate your business?"
        sub="Let's build systems that work while you focus on growing your business."
        buttonText="AUTOMATE YOUR BUSINESS"
        buttonHref="/contact"
      />
    </>
  )
}
