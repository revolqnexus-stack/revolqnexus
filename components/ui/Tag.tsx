interface TagProps {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span 
      className={`inline-block px-3 py-1 text-xs font-mono tracking-wider uppercase border rounded-full ${className}`}
      style={{
        borderColor: 'var(--border)',
        color: 'var(--fog)',
        backgroundColor: 'var(--glass)',
      }}
    >
      {children}
    </span>
  )
}
