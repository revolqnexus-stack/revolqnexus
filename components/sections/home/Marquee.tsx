'use client'

export default function Marquee() {
  const items = ["DIGITAL SYSTEMS", "WEB DEVELOPMENT", "SEO & GBP", "AI AUTOMATION", "BRAND STRATEGY"]

  return (
    <section className="relative z-10 border-y border-[var(--border)] py-[2rem] bg-transparent overflow-hidden">
      <div className="flex flex-col gap-8">
        {/* Track 1: Forward */}
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.map((item, j) => (
                <div key={j} className="flex items-center mx-[4rem]">
                  <span className="font-[var(--font-cormorant)] text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--white)] opacity-20 tracking-[0.2em] font-light uppercase">{item}</span>
                  <span className="mx-[4rem] text-[var(--accent)] opacity-40 text-xl font-light">◇</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Track 2: Reverse */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {[...items].reverse().map((item, j) => (
                <div key={j} className="flex items-center mx-[4rem]">
                  <span className="font-[var(--font-cormorant)] italic text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--white)] opacity-10 tracking-[0.15em] font-light uppercase">{item}</span>
                  <span className="mx-[4rem] text-[var(--accent)] opacity-20 text-xl font-light">◇</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 100s linear infinite;
        }
        section:hover .animate-marquee,
        section:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
