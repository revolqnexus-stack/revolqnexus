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
    <section className="relative z-10 py-[12rem] px-[2rem] sm:px-[5rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <div className="label mb-6">INVESTMENT</div>
          <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)]">
            Investment in <br />
            <em className="serif-italic">Excellence.</em>
          </h2>
          <p className="body mx-auto mt-8 opacity-60">
            Precision-built systems require deliberate investment. We build <br className="hidden md:block" />
            assets, not just websites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`flex flex-col p-[3rem] border transition-all duration-700 ${
                pkg.featured 
                ? 'bg-[#0a0a0f] border-[var(--accent)] z-20 relative shadow-2xl' 
                : 'bg-transparent border-[var(--border)] z-10'
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-0 bg-[var(--accent)] text-[var(--ink)] font-[var(--font-mono)] text-[0.55rem] tracking-[0.3em] font-bold uppercase px-4 py-1.5">
                  THE ENGINE
                </div>
              )}

              <div className="font-[var(--font-mono)] text-[0.6rem] text-[var(--accent)] tracking-[0.4em] uppercase mb-8">{pkg.name}</div>
              <div className="font-[var(--font-cormorant)] text-[3.2rem] font-light text-[var(--white)] leading-none mb-4 italic">{pkg.price}</div>
              <div className="font-[var(--font-jost)] text-[0.8rem] font-light text-[var(--fog)] mb-10 opacity-70 italic">Starting from</div>
              
              <div className="w-full h-[1px] bg-[var(--border)] mb-10" />

              <div className="flex flex-col gap-5 mb-14">
                {pkg.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <span className="text-[var(--accent)] text-[0.7rem] pt-1">◇</span>
                    <span className="font-[var(--font-mono)] text-[0.65rem] text-[var(--fog)] uppercase tracking-widest">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <MagneticButton
                  href="/contact"
                  className={`w-full text-center py-[1.2rem] font-[var(--font-mono)] text-[0.65rem] tracking-[0.3em] font-bold uppercase transition-all duration-500 ${
                    pkg.featured 
                    ? 'bg-[var(--accent)] text-[var(--ink)] hover:bg-[var(--white)]' 
                    : 'border border-[var(--border)] text-[var(--fog)] hover:text-[var(--white)] hover:border-[var(--accent)]'
                  }`}
                >
                  INQUIRE NOW
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
