import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[var(--ink2)] border-top border-[var(--border)] pt-[6rem] pb-[3rem] px-[2rem] sm:px-[5rem] overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-[-2rem] left-0 w-full text-center pointer-events-none select-none">
        <span className="font-[var(--font-cormorant)] font-light text-[18vw] leading-none text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.04)' }}>
          REVOLQ
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[3rem] relative z-10">
        <div>
          <h4 className="font-[var(--font-mono)] text-[0.7rem] text-[var(--rose)] tracking-[0.2em] mb-8 uppercase">NAVIGATE</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/work" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">Work</Link></li>
            <li><Link href="/services" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">Services</Link></li>
            <li><Link href="/about" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">About</Link></li>
            <li><Link href="/contact" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-[var(--font-mono)] text-[0.7rem] text-[var(--rose)] tracking-[0.2em] mb-8 uppercase">SERVICES</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/services/web-development" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">Web Development</Link></li>
            <li><Link href="/services/seo-gbp" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">SEO & GBP</Link></li>
            <li><Link href="/services/ai-automation" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">AI Automation</Link></li>
            <li><Link href="/services/retainer" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">Monthly Retainer</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-[var(--font-mono)] text-[0.7rem] text-[var(--rose)] tracking-[0.2em] mb-8 uppercase">CONTACT</h4>
          <ul className="flex flex-col gap-4">
            <li className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)]">+91 79956 17374</li>
            <li className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)]">+91 73060 85895</li>
            <li className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)]">Kerala, India</li>
          </ul>
        </div>

        <div>
          <h4 className="font-[var(--font-mono)] text-[0.7rem] text-[var(--rose)] tracking-[0.2em] mb-8 uppercase">LEGAL</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/privacy" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="font-[var(--font-jost)] text-[0.9rem] text-[var(--fog)] hover:text-[var(--white)] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-[4rem] pt-[2rem] border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
        <p className="font-[var(--font-mono)] text-[0.65rem] text-[var(--dim)] tracking-[0.1em]">© {currentYear} REVOLQ. ALL RIGHTS RESERVED.</p>
        <p className="font-[var(--font-mono)] text-[0.65rem] text-[var(--dim)] tracking-[0.1em]">DESIGNED & BUILT BY REVOLQ</p>
      </div>
    </footer>
  )
}
