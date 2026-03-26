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
    <section className="relative z-10 py-[12rem] px-[2rem] sm:px-[5rem] bg-[var(--ink)]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-24">
          <div className="label mb-6">THE DIRECTORS</div>
          <h2 className="display text-[clamp(3.5rem,7vw,6.5rem)] mb-10">The <em className="serif-italic">founders.</em></h2>
          <p className="body text-[var(--fog)] mx-auto opacity-60 italic">Two people. One uncompromising system.</p>
        </div>
-
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl mb-24">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col transition-all duration-700">
              <RevealImage 
                src={member.image}
                alt={member.name}
                aspect="aspect-[4/5]"
                className="grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="pt-10 text-center md:text-left">
                <h3 className="font-[var(--font-cormorant)] text-[2.8rem] font-light text-[var(--white)] leading-none mb-4 group-hover:italic transition-all duration-500">{member.name}</h3>
                <div className="label text-[var(--accent)] opacity-60 tracking-[0.4em]">{member.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl text-center border-t border-[var(--border)] pt-16">
           <p className="body text-[var(--fog)] text-lg leading-relaxed mb-10 opacity-60">
             REVOLQ is the combined vision of two people who got tired of watching good businesses in Kerala get ignored online. We don&apos;t build websites; we build digital systems that capture attention and convert it into growth.
           </p>
           <div className="font-[var(--font-cormorant)] text-[1.5rem] text-[var(--white)] font-light italic opacity-80">
             Ajmal Mullapati & Eathen Baby
           </div>
           <div className="label text-[var(--accent)] mt-3 opacity-40">CO-FOUNDERS</div>
        </div>
      </div>
    </section>
  )
}
