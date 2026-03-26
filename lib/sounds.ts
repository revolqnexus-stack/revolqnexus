export function createAudioContext(): AudioContext {
  return new (window.AudioContext || (window as any).webkitAudioContext)()
}

export function playThud(ctx: AudioContext, volume = 0.6) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  
  osc.connect(gain)
  gain.connect(ctx.destination)
  
  osc.frequency.setValueAtTime(80, ctx.currentTime)
  osc.frequency.exponentialRampToValueAtTime(25, ctx.currentTime + 0.5)
  
  gain.gain.setValueAtTime(volume, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6)
  
  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + 0.6)
}

export function playGlitch(ctx: AudioContext) {
  const bufferSize = ctx.sampleRate * 0.04
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.random() * 2 - 1
  }
  
  const source = ctx.createBufferSource()
  const gain = ctx.createGain()
  const filter = ctx.createBiquadFilter()
  
  filter.type = 'bandpass'
  filter.frequency.value = 3000
  filter.Q.value = 0.5
  
  source.buffer = buffer
  source.connect(filter)
  filter.connect(gain)
  gain.connect(ctx.destination)
  
  gain.gain.value = 0.25
  source.start(ctx.currentTime)
}

export function playChime(ctx: AudioContext) {
  [880, 1108, 1320].forEach((freq, i) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    
    osc.connect(gain)
    gain.connect(ctx.destination)
    
    osc.type = 'sine'
    osc.frequency.value = freq
    
    const t = ctx.currentTime + i * 0.08
    gain.gain.setValueAtTime(0, t)
    gain.gain.linearRampToValueAtTime(0.3, t + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.001, t + 1.5)
    
    osc.start(t)
    osc.stop(t + 1.5)
  })
}

export function playWhoosh(ctx: AudioContext) {
  const bufferSize = ctx.sampleRate * 0.8
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
  const data = buffer.getChannelData(0)
  
  for (let i = 0; i < data.length; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length) * 0.8
  }
  
  const source = ctx.createBufferSource()
  const filter = ctx.createBiquadFilter()
  const gain = ctx.createGain()
  
  filter.type = 'lowpass'
  filter.frequency.setValueAtTime(100, ctx.currentTime)
  filter.frequency.exponentialRampToValueAtTime(8000, ctx.currentTime + 0.8)
  
  source.buffer = buffer
  source.connect(filter)
  filter.connect(gain)
  gain.connect(ctx.destination)
  
  gain.gain.value = 0.45
  source.start(ctx.currentTime)
}
