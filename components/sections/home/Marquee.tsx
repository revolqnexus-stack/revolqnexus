'use client'

export default function Marquee() {
  const items = ["DIGITAL SYSTEMS", "WEB DEVELOPMENT", "SEO & GBP", "AI AUTOMATION", "BRAND STRATEGY"]

  return (
    <section className="relative z-10 border-y border-[var(--border)] py-[1.4rem] bg-[var(--glass)] overflow-hidden">
      <div className="flex flex-col gap-4">
        {/* Track 1: Forward */}
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.map((item, j) => (
                <div key={j} className="flex items-center mx-[2rem]">
                  <span className="font-[var(--font-cormorant)] italic text-[1.2rem] text-[var(--fog)] opacity-30 tracking-widest">{item}</span>
                  <span className="mx-[2rem] text-[var(--rose)] opacity-50">◆</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Track 2: Reverse */}
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.reverse().map((item, j) => (
                <div key={j} className="flex items-center mx-[2rem]">
                  <span className="font-[var(--font-cormorant)] italic text-[1.2rem] text-[var(--fog)] opacity-30 tracking-widest">{item}</span>
                  <span className="mx-[2rem] text-[var(--rose)] opacity-50">◆</span>
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
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        section:hover .animate-marquee,
        section:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
