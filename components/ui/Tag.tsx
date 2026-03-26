export default function Tag({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div 
      className={`inline-block px-[0.8rem] py-[0.3rem] border border-[var(--border2)] rounded-full ${className}`}
    >
      <span className="font-[var(--font-mono)] text-[0.55rem] text-[var(--rose)] tracking-[0.2em] uppercase">
        {children}
      </span>
    </div>
  )
}
