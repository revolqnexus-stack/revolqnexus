'use client'

export default function MarqueeSection() {
  return (
    <section 
      className="relative z-[10] overflow-hidden"
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '1.4rem 0',
        background: 'var(--glass)',
        overflow: 'hidden',
      }}
    >
      {/* Track 1 - Moving Right */}
      <div className="flex animate-marquee-right">
        <div className="flex whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="inline-flex items-center">
              <span 
                className="italic mx-8"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1rem',
                  color: 'var(--fog)',
                  opacity: 0.3,
                }}
              >
                DIGITAL SYSTEMS THAT WORK WHILE YOU SLEEP
              </span>
              <span 
                style={{
                  color: 'var(--rose)',
                  opacity: 0.5,
                }}
              >
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* Track 2 - Moving Left */}
      <div className="flex animate-marquee-left absolute top-0 left-0">
        <div className="flex whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="inline-flex items-center">
              <span 
                className="italic mx-8"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1rem',
                  color: 'var(--fog)',
                  opacity: 0.3,
                }}
              >
                WEB • SEO • AI • BRAND • KERALA • INDIA
              </span>
              <span 
                style={{
                  color: 'var(--rose)',
                  opacity: 0.5,
                }}
              >
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }

        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }

        .animate-marquee-right:hover,
        .animate-marquee-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
