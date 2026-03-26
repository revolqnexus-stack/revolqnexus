import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-black)] border-t border-[var(--border-light)] px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="display-text text-[2rem] font-normal text-[var(--text-light)] mb-4">
              REVOLQ
            </h3>
            <p className="body-text text-[var(--text-muted-dark)]">
              Building systems that work.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-[var(--fluid-cyan)] mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="text-[var(--text-muted-dark)] hover:text-[var(--text-light)] transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[var(--text-muted-dark)] hover:text-[var(--text-light)] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[var(--text-muted-dark)] hover:text-[var(--text-light)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[var(--text-muted-dark)] hover:text-[var(--text-light)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-[var(--fluid-cyan)] mb-4">
              Connect
            </h4>
            <div className="space-y-2">
              <p className="text-[var(--text-muted-dark)]">
                Kerala, India
              </p>
              <a 
                href="tel:+917995617374"
                className="text-[var(--text-muted-dark)] hover:text-[var(--text-light)] transition-colors"
              >
                +91 79956 17374
              </a>
              <a 
                href="mailto:hello@revolq.in"
                className="text-[var(--text-muted-dark)] hover:text-[var(--text-light)] transition-colors"
              >
                hello@revolq.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border-light)] text-center">
          <p className="text-[var(--text-muted-dark)] text-sm">
            © 2026 REVOLQ. Electric brutalism meets digital excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}
