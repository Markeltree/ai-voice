import React, { useState } from 'react';

const FeaturesSection = () => {
  const [isOn, setIsOn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('Nick');

  const voices = ['Nick', 'Tony HD'];

  return (
    <section className="bg-white py-24 font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-shadow { box-shadow: 0 20px 40px -15px rgba(0,0,0,0.3); }
        .feature-card:hover { transform: translateY(-5px); transition: all 0.3s ease; }
        .dropdown-animate { transition: all 0.2s ease-in-out; }
      `}} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Interactive Feature Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Web Calls */}
            <div className="feature-card bg-[#322F3D] rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[290px]">
              <div className="bg-[#494655] rounded-2xl p-3 flex items-center justify-between border border-white/5 mb-auto">
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/100?img=47"
                    alt="Nick"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#FDBA74]"
                  />
                  <div>
                    <div className="text-white text-[13px] font-bold">Nick I...</div>
                    <div className="text-[#98DB1D] text-[11px] font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-[#98DB1D] rounded-full"></span> Available
                    </div>
                  </div>
                </div>
                <button className="w-9 h-9 rounded-xl bg-[#98DB1D] hover:bg-[#88c41a] flex items-center justify-center transition-colors">
                  <svg width="16" height="16" fill="white" viewBox="0 0 24 24"><path d="M6.62 10.79a15.1 15.1 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.17-.24c1.12.45 2.33.69 3.59.69a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.24 2.47.69 3.59a1 1 0 0 1-.24 1.17l-2.2 2.2z"/></svg>
                </button>
              </div>
              <div className="mt-8">
                <h4 className="text-white text-[24px] font-bold mb-2">Web calls</h4>
                <p className="text-[#A1A1B5] text-[16px] leading-snug">Easily embed agents on your website, no phone number needed</p>
              </div>
            </div>

            {/* Phone Calls - Flaticon Keypad Style */}
            <div className="feature-card bg-[#322F3D] rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[290px]">
              <div className="w-14 h-14 bg-[#FF4545] rounded-full flex items-center justify-center mb-auto custom-shadow">
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="2.2"/><circle cx="12" cy="6" r="2.2"/><circle cx="18" cy="6" r="2.2"/>
                  <circle cx="6" cy="12" r="2.2"/><circle cx="12" cy="12" r="2.2"/><circle cx="18" cy="12" r="2.2"/>
                  <circle cx="6" cy="18" r="2.2"/><circle cx="12" cy="18" r="2.2"/><circle cx="18" cy="18" r="2.2"/>
                </svg>
              </div>
              <div className="mt-8">
                <h4 className="text-white text-[24px] font-bold mb-2">Phone calls</h4>
                <p className="text-[#A1A1B5] text-[16px] leading-snug">Attach agents to phone numbers for smooth connectivity.</p>
              </div>
            </div>

            {/* Fast Responses - Active Switch */}
            <div className="feature-card bg-[#322F3D] rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[290px]">
              <div 
                onClick={() => setIsOn(!isOn)}
                className="bg-[#444150] w-fit rounded-xl p-1.5 flex items-center cursor-pointer select-none transition-all duration-300"
              >
                <div className={`text-[12px] font-bold px-5 py-2 rounded-lg transition-all ${isOn ? 'bg-[#4F46E5] text-white shadow-lg' : 'text-[#8E8C9A]'}`}>ON</div>
                <div className={`text-[12px] font-bold px-5 py-2 rounded-lg transition-all ${!isOn ? 'bg-[#4F46E5] text-white shadow-lg' : 'text-[#8E8C9A]'}`}>OFF</div>
              </div>
              <div className="mt-8">
                <h4 className="text-white text-[24px] font-bold mb-2">Fast Responses</h4>
                <p className="text-[#A1A1B5] text-[16px] leading-snug">Lightning-fast agent responses, down to 500 ms.</p>
              </div>
            </div>

            {/* Realistic Voices - Active Dropdown */}
            <div className="feature-card bg-[#322F3D] rounded-[2.5rem] p-8 flex flex-col justify-between min-h-[290px] relative">
              <div className="relative z-20">
                <div 
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-[#444150] rounded-2xl p-3.5 flex items-center gap-3 border border-white/10 cursor-pointer hover:border-white/20 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#4F46E5] flex items-center justify-center">
                    <svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <span className="text-white text-[15px] font-bold">{selectedVoice}</span>
                  <svg className={`ml-auto text-[#8E8C9A] transition-transform ${isOpen ? 'rotate-180' : ''}`} width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>
                </div>
                
                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-[#444150] border border-white/10 rounded-xl overflow-hidden shadow-2xl dropdown-animate">
                    {voices.map((voice) => (
                      <div 
                        key={voice}
                        onClick={() => { setSelectedVoice(voice); setIsOpen(false); }}
                        className="px-4 py-3 text-white text-sm font-medium hover:bg-[#4F46E5] cursor-pointer transition-colors"
                      >
                        {voice}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-8">
                <h4 className="text-white text-[24px] font-bold mb-2">Realistic Voices</h4>
                <p className="text-[#A1A1B5] text-[16px] leading-snug">Create a human-like experience with over 400 neural AI voices.</p>
              </div>
            </div>

          </div>

          {/* ── Right: Testimonials ── */}
          <div className="flex flex-col gap-12 lg:pl-10">
            {/* Carlos */}
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-full bg-[#98DB1D] flex-shrink-0 flex items-center justify-center text-black font-black text-xl shadow-lg">C</div>
              <div>
                <h5 className="text-[#111827] font-bold text-2xl">Carlos Lunardini</h5>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="22" height="22" fill="#98DB1D" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-[#4B5563] text-[18px] leading-relaxed mt-5">
                  I've purchased several AI apps to automate both inbound and outbound calls, and Callfluent AI is by far the best one I've used.
                </p>
                <p className="text-[#4B5563] text-[18px] leading-relaxed mt-4">
                  The setup was quick and easy, making it a breeze to get up and running.
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-gray-100 w-full" />

            {/* James */}
            <div className="flex gap-6">
              <div className="w-16 h-16 rounded-full bg-[#82B513] flex-shrink-0 flex items-center justify-center text-white font-black text-xl shadow-lg">JM</div>
              <div>
                <h5 className="text-[#111827] font-bold text-2xl">James Moss</h5>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="22" height="22" fill="#98DB1D" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-[#4B5563] text-[18px] leading-relaxed mt-5">
                  CallFluent is easy to set up and white label because when I don't know how to do something, their support team answers quickly, and the knowledge that they give is easy to understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;