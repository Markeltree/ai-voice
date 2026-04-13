import { useEffect, useRef, useState } from 'react'
import agent2 from '../assets/images/girl-2.png'

const bars = [4,7,11,6,13,9,5,14,8,11,6,9,13,7,10,5,12,8,4,11,9,6,13,7,5]

const callLog = [
  { name: 'Sarah M.',   time: '2m ago',  outcome: 'Appointment Booked', color: '#93D169' },
  { name: 'John D.',    time: '8m ago',  outcome: 'Lead Qualified',     color: '#93D169' },
  { name: 'Unknown',    time: '14m ago', outcome: 'Info Provided',      color: '#60a5fa' },
  { name: 'Emma R.',    time: '21m ago', outcome: 'Callback Scheduled', color: '#93D169' },
]

export default function CtaSection2() {
  const barsRef = useRef([])
  const [callTime, setCallTime] = useState(0)
  const [activeLog, setActiveLog] = useState(0)

  // Animate waveform
  useEffect(() => {
    let frame, t = 0
    const animate = () => {
      t += 0.05
      barsRef.current.forEach((el, i) => {
        if (!el) return
        const h = 3 + Math.abs(Math.sin(t + i * 0.45)) * (bars[i] * 1.8)
        el.style.height = `${h}px`
      })
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  // Live call timer
  useEffect(() => {
    const id = setInterval(() => setCallTime(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  // Cycle recent call log highlight
  useEffect(() => {
    const id = setInterval(() => setActiveLog(i => (i + 1) % callLog.length), 2500)
    return () => clearInterval(id)
  }, [])

  const fmt = s => `${String(Math.floor(s / 60)).padStart(2,'0')}:${String(s % 60).padStart(2,'0')}`

  return (
    <section className="bg-[#F4F7FF] overflow-hidden">
      <div className="section-wrap-2">
        <div className="cta-card-2 relative overflow-hidden">

          {/* Light gradient */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #eef9e6 0%, #f0f4ff 55%, #f5f0ff 100%)' }} />

          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.45]"
            style={{ backgroundImage: 'linear-gradient(rgba(147,209,105,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(147,209,105,0.08) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />

          {/* Green glow top-left */}
          <div className="absolute -top-28 -left-20 w-[340px] h-[340px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(147,209,105,0.22) 0%, transparent 70%)' }} />

          {/* Purple glow bottom-right */}
          <div className="absolute -bottom-24 -right-16 w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(88,49,216,0.10) 0%, transparent 70%)' }} />

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 px-8 sm:px-12 md:px-16 py-16">

            {/* ── LEFT ── */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">

              <span className="inline-flex items-center gap-2 border border-[#93D169]/30 bg-[#93D169]/10 text-[#1A5C02] rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#93D169] animate-pulse" />
                Plug It In. Never Miss a Call Again.
              </span>

              <h2 className="font-black text-[#0F0B1E] leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(1.9rem, 4.2vw, 3.2rem)' }}>
               Full-Time Receptionist.<br />
                <span style={{ color: '#93D169' }}>Fraction of the Cost.</span>
              </h2>

              <p className="text-[#0F0B1E]/55 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                style={{ fontSize: 'clamp(0.9rem, 1.7vw, 1.15rem)' }}>
                  Connect in minutes. Answers are called instantly. Book appointments automatically. You just check your calendar.
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                {['Instant Setup', 'Auto Booking', '24/7 Live', 'No Contracts'].map(tag => (
                  <span key={tag} className="text-[12px] font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(147,209,105,0.12)', color: '#1A5C02', border: '1px solid rgba(147,209,105,0.25)' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#call"
                  className="group inline-flex items-center justify-center gap-2.5 font-bold rounded-2xl transition-all duration-200"
                  style={{ background: '#93D169', color: '#0F0B1E', padding: '14px 28px', fontSize: '15px', boxShadow: '0 8px 32px rgba(147,209,105,0.35)' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#7ec252'}
                  onMouseLeave={e => e.currentTarget.style.background = '#93D169'}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hear a Live Demo
                </a>
                <a href="https://scheduler.zoom.us/markeltree-llc/discovery-call"
                  className="inline-flex items-center justify-center gap-2.5 font-semibold rounded-2xl border transition-all duration-200"
                  style={{ color: '#0F0B1E', borderColor: 'rgba(15,11,30,0.18)', padding: '14px 28px', fontSize: '15px' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#93D169'; e.currentTarget.style.color = '#1A5C02' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(15,11,30,0.18)'; e.currentTarget.style.color = '#0F0B1E' }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Strategy Call
                </a>
              </div>

            </div>

            {/* ── RIGHT ── */}
            <div className="hidden lg:flex flex-col items-center flex-shrink-0 gap-4">

              {/* Active Call Card */}
              <div className="rounded-[2rem] shadow-xl overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.82)', border: '1px solid rgba(147,209,105,0.2)', backdropFilter: 'blur(24px)', width: '310px', padding: '22px' }}>

                {/* Call status bar */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="flex items-center gap-1.5 text-[11px] font-bold text-[#1A5C02] bg-[#93D169]/15 rounded-full px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#93D169] animate-pulse" />
                    LIVE CALL IN PROGRESS
                  </span>
                  <span className="ml-auto font-mono text-[13px] font-bold text-[#0F0B1E]/70">{fmt(callTime)}</span>
                </div>

                {/* Caller info */}
                <div className="flex items-center gap-3 mb-5 p-3 rounded-2xl"
                  style={{ background: 'rgba(147,209,105,0.08)', border: '1px solid rgba(147,209,105,0.15)' }}>
                  <div className="w-11 h-11 rounded-full bg-[#93D169]/20 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="#1A5C02" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0F0B1E] text-sm font-bold">Inbound Call</p>
                    <p className="text-[#0F0B1E]/45 text-[11px]">+1 (555) 849-••••</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-[10px] text-[#0F0B1E]/40 mb-0.5">Handled by</p>
                    <div className="flex items-center gap-1.5">
                      <img src={agent2} alt="Sophia" className="w-5 h-5 rounded-full object-cover" />
                      <span className="text-[11px] font-bold text-[#0F0B1E]">Sophia</span>
                    </div>
                  </div>
                </div>

                {/* Waveform */}
                <div className="flex items-end justify-center gap-[3px] mb-1" style={{ height: '48px' }}>
                  {bars.map((_, i) => (
                    <div key={i} ref={el => barsRef.current[i] = el}
                      className="rounded-full"
                      style={{ width: '4px', background: i % 3 === 0 ? '#93D169' : 'rgba(147,209,105,0.35)', height: '4px', transition: 'none' }} />
                  ))}
                </div>
                <p className="text-center text-[10px] text-[#0F0B1E]/35 font-medium mb-4">AI Voice · Speaking naturally</p>

                {/* Intent detected */}
                <div className="rounded-xl px-3 py-2.5 mb-4"
                  style={{ background: 'rgba(147,209,105,0.08)', border: '1px solid rgba(147,209,105,0.15)' }}>
                  <p className="text-[10px] text-[#0F0B1E]/40 font-medium mb-1">Intent Detected</p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#93D169] flex-shrink-0" />
                    <p className="text-[12px] font-semibold text-[#0F0B1E]">Schedule Appointment → Slot offered for Thu 2PM</p>
                  </div>
                </div>

                {/* Recent call log */}
                <div>
                  <p className="text-[10px] text-[#0F0B1E]/35 font-semibold uppercase tracking-wider mb-2">Recent Calls</p>
                  <div className="space-y-1.5">
                    {callLog.map((c, i) => (
                      <div key={i} className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 transition-all duration-500"
                        style={{ background: activeLog === i ? 'rgba(147,209,105,0.10)' : 'transparent' }}>
                        <div className="w-7 h-7 rounded-full bg-[#0F0B1E]/06 flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(15,11,30,0.05)' }}>
                          <svg width="12" height="12" fill="none" stroke="#0F0B1E" viewBox="0 0 24 24" strokeWidth={2} opacity={0.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-semibold text-[#0F0B1E] truncate">{c.name}</p>
                          <p className="text-[9px] text-[#0F0B1E]/40">{c.time}</p>
                        </div>
                        <span className="text-[9px] font-bold rounded-full px-2 py-0.5 whitespace-nowrap flex-shrink-0"
                          style={{ background: `${c.color}18`, color: c.color }}>
                          {c.outcome}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
