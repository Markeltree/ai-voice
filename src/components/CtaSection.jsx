import { useEffect, useRef } from 'react'
import agent1 from '../assets/images/girl-1.png'
import agent2 from '../assets/images/girl-2.png'
import agent3 from '../assets/images/Daniel.png'
import agent4 from '../assets/images/Andrew.png'

const agents = [
  { img: agent1, name: 'Elizabeth', lang: 'EN' },
  { img: agent2, name: 'Sophia',    lang: 'ES' },
  { img: agent3, name: 'Daniel',    lang: 'FR' },
  { img: agent4, name: 'Andrew',    lang: 'DE' },
]

const bars = [3,6,9,5,11,8,4,13,7,10,5,8,12,6,9,4,11,7,3,10,8,5,12,9,6]

export default function CtaSection() {
  const barsRef = useRef([])

  useEffect(() => {
    let frame
    let t = 0
    const animate = () => {
      t += 0.04
      barsRef.current.forEach((el, i) => {
        if (!el) return
        const h = 4 + Math.abs(Math.sin(t + i * 0.4)) * (bars[i] * 2)
        el.style.height = `${h}px`
      })
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="overflow-hidden">
        <div className="relative rounded-[2.5rem] overflow-hidden flex items-center"
          style={{ background: '#2D2B3D', minHeight: '540px' }}>

          {/* — noise texture — */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: 'repeat', backgroundSize: '128px' }}
          />

          {/* ═══ MAIN CONTENT ═══ */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center gap-12 px-8 sm:px-12 md:px-16 py-14">

            {/* ── LEFT ── */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">

              <h2 className="text-white font-black leading-[1.08] mb-5"
                style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.4rem)' }}>
                Your Phones Are Always Answered.<br />
                <span style={{ color: '#93D169' }}>Even at 3AM.</span>
              </h2>

              <p className="text-white/55 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
                style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)' }}>
                Meet your new AI receptionist, sounds human, works 24/7, speaks 40+ languages, and never puts a customer on hold.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
                <a href="#call"
                  className="group inline-flex items-center justify-center gap-2.5 font-bold rounded-2xl transition-all duration-200 shadow-2xl"
                  style={{ background: '#93D169', color: '#0F0B1E', padding: '14px 28px', fontSize: '15px', boxShadow: '0 8px 32px rgba(147,209,105,0.35)' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#7EC252'}
                  onMouseLeave={e => e.currentTarget.style.background = '#93D169'}>
                  <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-7a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                  Try It
                </a>
                <a href="https://scheduler.zoom.us/markeltree-llc/discovery-call"
                  className="inline-flex items-center justify-center gap-2.5 font-semibold rounded-2xl border transition-all duration-200"
                  style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', padding: '14px 28px', fontSize: '15px' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent' }}>
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule a Strategy Call
                </a>
              </div>

            </div>

            {/* ── RIGHT ── */}
            <div className="hidden lg:flex flex-col items-center flex-shrink-0 gap-5">

              {/* Phone mockup card */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', width: '300px', padding: '24px' }}>

                {/* Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#93D169]/20 flex items-center justify-center">
                    <svg width="18" height="18" fill="none" stroke="#93D169" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">AI Voice Agent</p>
                    <p className="text-[#93D169] text-xs">● Live · Speaking now</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30" />)}
                  </div>
                </div>

                {/* Waveform */}
                <div className="flex items-end justify-center gap-[3px] mb-5" style={{ height: '52px' }}>
                  {bars.map((_, i) => (
                    <div key={i} ref={el => barsRef.current[i] = el}
                      className="rounded-full transition-none"
                      style={{ width: '4px', background: i % 3 === 0 ? '#93D169' : 'rgba(147,209,105,0.4)', height: '4px' }} />
                  ))}
                </div>

                {/* Agents */}
                <div className="space-y-2.5">
                  {agents.map((a, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl px-3 py-2"
                      style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <img src={a.img} alt={a.name} className="w-8 h-8 rounded-full object-cover" />
                      <div className="flex-1">
                        <p className="text-white text-xs font-semibold">{a.name}</p>
                        <p className="text-white/40 text-[10px]">{a.lang} · Neural voice</p>
                      </div>
                      <span className="text-[10px] font-bold rounded-full px-2 py-0.5"
                        style={{ background: i < 2 ? 'rgba(147,209,105,0.15)' : 'rgba(99,102,241,0.15)', color: i < 2 ? '#93D169' : '#818cf8' }}>
                        {i < 2 ? 'Active' : 'Standby'}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom stats */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-center">
                  {[['847', 'Calls today'], ['99.2%', 'Uptime'], ['0.5s', 'Latency']].map(([v, l]) => (
                    <div key={l}>
                      <p className="text-white font-black text-sm">{v}</p>
                      <p className="text-white/35 text-[9px]">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  )
}
