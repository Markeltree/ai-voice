import React from 'react';

const CtaSection = () => {
  // Voice Agent Specific Icons: Wave, Sound Pulse, Headset, AI Chip
  const floatingIcons = [
    { 
      top: '15%', left: '12%', size: 55, delay: '0.5s', opacity: 'opacity-25',
      path: "M12 3v18M8 7v10M4 10v4M16 7v10M20 10v4" // Dynamic Waveform
    },
    { 
      top: '65%', left: '10%', size: 45, delay: '1.2s', opacity: 'opacity-20',
      path: "M3 18v-2h2v2H3zm4 0v-6h2v6H7zm4 0V4h2v14h-2zm4 0v-8h2v8h-2zm4 0v-4h2v4h-2z" // Sound bars
    },
    { 
      top: '25%', left: '85%', size: 50, delay: '2s', opacity: 'opacity-15',
      path: "M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" // AI User Profile
    },
    { 
      top: '70%', left: '82%', size: 60, delay: '1.5s', opacity: 'opacity-25',
      path: "M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3V10H5v0c0-3.87 3.13-7 7-7s7 3.13 7 7v0h-4v10h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" // Neural Headset
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Bento Container with #93D169 Theme */}
        <div className="relative overflow-hidden bg-[#2D2B3D] rounded-[28px] sm:rounded-[40px] md:rounded-[50px] p-6 sm:p-10 md:p-12 flex flex-col items-center text-center shadow-[0_40px_120px_-20px_rgba(147,209,105,0.2)]">
          
          {/* --- VOICE AGENT FLOATING ELEMENTS --- */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingIcons.map((icon, index) => (
              <div
                key={index}
                className={`absolute ${icon.opacity} animate-pulse text-[#93D169] transition-all duration-1000`}
                style={{
                  top: icon.top,
                  left: icon.left,
                  animationDelay: icon.delay,
                  filter: 'drop-shadow(0 0 15px rgba(147, 209, 105, 0.4))'
                }}
              >
                <svg width={icon.size} height={icon.size} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon.path} />
                </svg>
              </div>
            ))}
          </div>

          {/* Background Decorative Shapes matching Pauseitive Tech style */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
            {/* Soft Ambient Glow */}
            <div className="absolute -left-40 top-0 w-[500px] h-[500px] bg-[#93D169]/10 blur-[120px] rounded-full" />
            
            {/* Parabolic Curve from your guide */}
            <div className="absolute right-[-30px] bottom-[-30px]">
                <svg width="300" height="300" viewBox="0 0 100 100">
                    <path d="M10 90C50 90 90 50 90 10" stroke="#93D169" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                </svg>
            </div>
          </div>

          {/* --- MAIN CONTENT --- */}
          <div className="relative z-10 max-w-4xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#93D169]/10 border border-[#93D169]/20 mb-6 sm:mb-10">
               <div className="w-2 h-2 bg-[#93D169] rounded-full animate-ping" />
               <span className="text-[#93D169] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Plug It In. Never Miss a Call Again</span>
            </div>

            <h2 className="text-white text-[28px] sm:text-5xl md:text-7xl font-black leading-[1.1] mb-5 sm:mb-8 tracking-tighter">
              Your Phones Are Always Answered. <br className="hidden sm:block" />
              <span className="text-[#93D169]">Even at 3AM.</span>
            </h2>

            <p className="text-white/60 text-base sm:text-lg md:text-2xl font-medium leading-relaxed mb-8 sm:mb-14 max-w-2xl mx-auto">
              Meet your new AI receptionist, sounds human, works 24/7, speaks 40+ languages, and never puts a customer on hold.
            </p>

            {/* CTA Button - High Contrast */}
            <button onClick={() => window.location.href = '/#call'} className="group relative flex items-center gap-3 sm:gap-4 bg-[#93D169] text-[#0F0B1E] px-8 py-4 sm:px-14 sm:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-xl transition-all hover:scale-105 hover:shadow-[0_20px_60px_rgba(147,209,105,0.4)] mx-auto active:scale-95">
               <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
               </svg>
               Hear a Live Demo
            </button>
          </div>

          {/* Bottom Live Visualizer Bars */}
          <div className="hidden sm:flex absolute bottom-8 md:bottom-12 gap-1.5 h-10 md:h-16 items-center">
             {[0.4, 0.7, 1.2, 0.9, 0.5, 0.8, 1.1, 0.6].map((d, i) => (
                <div 
                  key={i} 
                  className="w-1.5 bg-[#93D169]/30 rounded-full"
                  style={{ 
                    height: '100%', 
                    animation: `voiceBar 1.5s ease-in-out infinite ${d}s`,
                    opacity: 0.3 + (i * 0.1)
                  }}
                />
             ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes voiceBar {
          0%, 100% { height: 20%; }
          50% { height: 80%; }
        }
      `}</style>
    </section>
  );
};

export default CtaSection;