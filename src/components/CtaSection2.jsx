import React from 'react';

const CtaSection2 = () => {
  // Random positions for microphone icons to create a floating effect
  const floatingIcons = [
    { top: '65%', left: '8%', size: 48, delay: '1.5s', opacity: 'opacity-10' },
    { top: '75%', left: '85%', size: 36, delay: '2.2s', opacity: 'opacity-15' },
    { top: '40%', left: '92%', size: 28, delay: '1.2s', opacity: 'opacity-10' },
    { top: '85%', left: '45%', size: 44, delay: '0.5s', opacity: 'opacity-20' },
  ];

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="relative overflow-hidden bg-[#2D2B3D] rounded-[40px] p-10 md:p-24 flex flex-col items-center text-center shadow-2xl">
          
          {/* --- FLOATING MICROPHONE ICONS (Randomized) --- */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingIcons.map((icon, index) => (
              <div
                key={index}
                className={`absolute ${icon.opacity} animate-pulse text-[#D4FF27] transition-all duration-1000`}
                style={{
                  top: icon.top,
                  left: icon.left,
                  animationDelay: icon.delay,
                }}
              >
                <svg width={icon.size} height={icon.size} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                  <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                </svg>
              </div>
            ))}
          </div>

          {/* Background Decorative Shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
            <div className="absolute -left-20 -top-20 w-80 h-80 border-[30px] border-white/5 rounded-full" />
            
            {/* Pattern Dots */}
            <div className="absolute left-12 top-1/3 opacity-40">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="28" stroke="#D4FF27" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
            </div>

            {/* Right Curve */}
            <div className="absolute right-[-20px] top-[-20px] opacity-30">
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
                    <path d="M90 10C90 50 50 90 10 90" stroke="#D4FF27" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
          </div>

          {/* --- CONTENT --- */}
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-white text-4xl md:text-6xl font-extrabold leading-[1.1] mb-8">
             Full-Time Receptionist. <br />
              <span className="text-[#93D169]">Fraction of the Cost.</span>
            </h2>

            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-12 max-w-2xl mx-auto opacity-90">
              Connect in minutes. Answers are called instantly. Book appointments automatically. You just check your calendar.
            </p>

            {/* CTA Button */}
            <button onClick={() => window.location.href = 'https://scheduler.zoom.us/markeltree-llc/discovery-call'}  className="group relative flex items-center gap-3 bg-white text-[#06112E] px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-[#93D169] hover:scale-105 shadow-[0_20px_40px_rgba(0,0,0,0.3)] mx-auto overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                CONTACT SALES
              </span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default CtaSection2;