'use client'

import RevealImage from '@/components/ui/RevealImage'

const team = [
  {
    name: 'Ajmal Mullapati',
    role: 'CO-FOUNDER',
    image: '/founder_ajmal.png'
  },
  {
    name: 'Eathen Baby',
    role: 'CO-FOUNDER',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  }
]

export default function TeamSection() {
  return (
    <section className="relative z-10 py-[10rem] px-[2rem] sm:px-[5rem] bg-[var(--ink2)]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <div className="label mb-4">THE TEAM</div>
          <h2 className="h2 mb-4">Two people. One system.</h2>
          <p className="body text-[var(--fog)]">We build together. We ship together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mb-16">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col bg-[var(--ink3)] border border-[var(--border)] transition-all duration-400 hover:border-[var(--rose)]">
              <RevealImage 
                src={member.image}
                alt={member.name}
                aspect="aspect-[4/5]"
              />
              <div className="p-[2rem]">
                <h3 className="font-[var(--font-cormorant)] text-[2rem] font-light text-[var(--white)] leading-none mb-2">{member.name}</h3>
                <div className="font-[var(--font-mono)] text-[0.62rem] text-[var(--rose)] tracking-[0.35em] uppercase">{member.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl text-center">
           <p className="body text-[var(--fog)] text-lg leading-relaxed mb-6">
             REVOLQ is the combined vision of two people who got tired of watching good businesses in Kerala get ignored online. We don&apos;t build websites; we build digital systems that capture attention and convert it into growth.
           </p>
           <p className="body text-[var(--dim)] italic">
             Ajmal Mullapati & Eathen Baby • Co-founders (Equal)
           </p>
        </div>
      </div>
    </section>
  )
}
