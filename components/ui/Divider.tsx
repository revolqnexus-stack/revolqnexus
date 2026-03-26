interface DividerProps {
  className?: string
}

export default function Divider({ className = '' }: DividerProps) {
  return (
    <div 
      className={`w-full ${className}`}
      style={{
        height: '1px',
        background: 'var(--border)',
      }}
    />
  )
}
