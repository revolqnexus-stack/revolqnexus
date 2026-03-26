import MagneticButton from '@/components/ui/MagneticButton'

const packages = [
  {
    name: 'PRESENCE',
    price: '₹25,000',
    sub: 'Startup-friendly foundations.',
    features: ['Custom Next.js Website', 'Responsive Design', 'SEO Infrastructure', 'Contact Form Integration', 'Vercel Deployment', '30 Days Support'],
    excluded: ['AI Automation', 'GBP Management', 'Monthly Maintenance'],
    featured: false
  },
  {
    name: 'SIGNAL',
    price: '₹55,000',
    sub: 'Full system for growing brands.',
    features: ['Everything in Presence', 'Google Business Profile Audit', 'WhatsApp AI Setup (Basic)', 'Copywriting (5 Pages)', 'Brand Strategy Document', 'Monthly SEO Report'],
    excluded: ['n8n Advanced Workflows'],
    featured: true
  },
  {
    name: 'ORBIT',
    price: '₹1,20,000',
    sub: 'The complete digital engine.',
    features: ['Everything in Signal', 'Advanced n8n Automations', 'Full Content Calendar', 'Competitor Tracking', 'Priority 4h Support', 'Custom GLSL Interactive Shaders'],
    excluded: [],
    featured: false
  }
]

export default function PricingSection() {
  return (
    <section className="relative z-10 py-[10rem] px-[2rem] sm:px-[5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="label mb-4">INVESTMENT</div>
          <h2 className="h2 mb-4">Transparent pricing. No surprises.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`flex flex-col p-[2.5rem] sm:p-[3rem] border transition-all duration-500 ${
                pkg.featured 
                ? 'bg-[var(--ink4)] border-[var(--rose)] scale-[1.03] z-20 relative shadow-2xl shadow-[var(--ink)]' 
                : 'bg-[var(--ink3)] border-[var(--border)] z-10'
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-[2rem] -translate-y-1/2 bg-[var(--rose)] text-[var(--ink)] font-[var(--font-mono)] text-[0.55rem] tracking-widest uppercase px-3 py-1">
                  POPULAR
                </div>
              )}

              <div className="font-[var(--font-mono)] text-[0.65rem] text-[var(--rose)] tracking-[0.4em] uppercase mb-4">{pkg.name}</div>
              <div className="font-[var(--font-cormorant)] text-[clamp(2.5rem,4vw,4rem)] font-light text-[var(--white)] leading-none mb-2">{pkg.price}</div>
              <div className="font-[var(--font-jost)] text-[0.85rem] font-extralight text-[var(--fog)] mb-8">{pkg.sub}</div>
              
              <div className="w-full h-[1px] bg-[var(--border)] mb-8" />

              <div className="flex flex-col gap-4 mb-12">
                {pkg.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3 border-b border-[var(--border)] pb-4">
                    <span className="text-[var(--rose)] text-[0.7rem]">✓</span>
                    <span className="font-[var(--font-mono)] text-[0.72rem] text-[var(--fog)] uppercase">{f}</span>
                  </div>
                ))}
                {pkg.excluded.map((f, j) => (
                  <div key={j} className="flex items-start gap-3 opacity-30">
                    <span className="text-[var(--dim)] text-[0.7rem]">—</span>
                    <span className="font-[var(--font-mono)] text-[0.72rem] text-[var(--dim)] uppercase">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <MagneticButton
                  href="/contact"
                  className={`w-full text-center py-[1rem] font-[var(--font-mono)] text-[0.7rem] tracking-widest uppercase transition-colors ${
                    pkg.featured 
                    ? 'bg-[var(--rose)] text-[var(--ink)] hover:bg-[var(--rose2)]' 
                    : 'border border-[var(--border2)] text-[var(--fog)] hover:text-[var(--white)] hover:border-[var(--rose)]'
                  }`}
                >
                  START NOW
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
