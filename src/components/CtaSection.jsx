const marqueeCSS = `
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    display: flex;
    width: max-content;
    animation: marquee 25s linear infinite;
  }
`

const logos = [
  { name: 'waves',     url: 'https://cdn.worldvectorlogo.com/logos/wave-1.svg' },
  { name: 'travelers', url: 'https://cdn.worldvectorlogo.com/logos/travelers-2.svg' },
  { name: 'goldlines', url: 'https://cdn.worldvectorlogo.com/logos/goldline.svg' },
  { name: 'RotaShow',  url: 'https://cdn.worldvectorlogo.com/logos/rotor-1.svg' },
]

export default function CtaSection() {
  return (
    <section className="bg-white overflow-hidden">
      <style>{marqueeCSS}</style>
      <div className="section-wrap">

        <div className="cta-card">
          <div className="grid md:grid-cols-2 gap-10 w-full relative z-10 p-10 md:p-16">
            <div className="text-white space-y-6">
              <div className="inline-block border border-white/40 rounded-full px-5 py-1.5 text-sm font-semibold">
                Your brand, your rules
              </div>
              <h2 className="text-4xl md:text-5xl   leading-tight">Rebrand with Ease</h2>
              <p className="text-white/80 text-lg max-w-md leading-relaxed">
                Whitelabel Callfluent AI for your agency's services with full flexibility.
                Customize domains, set up SMTP, and create a tailored platform
                experience for clients at an unbeatable rate of $0.069 per minute.
              </p>
              <button className="bg-white text-[#4F35E5]   px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all text-sm shadow-lg">
                Discover Whitelabel
              </button>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -right-20 -top-20 w-[120%] rotate-[-10deg] space-y-6 opacity-90">
                <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#4F35E5] rounded-lg"></div>
                  <span className="  text-gray-800">callfluent</span>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
                    <div className="mb-2 text-gray-400">↑ Upload logo</div>
                    <p className="text-[10px] text-gray-400">Accepted formats .png .jpg</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl flex justify-between items-center">
                  <div>
                    <p className="  text-sm">Primary color</p>
                    <p className="text-xs text-gray-400">Adjust the highlight color</p>
                  </div>
                  <div className="w-10 h-10 bg-[#4F35E5] rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-15deg] transform translate-x-20"></div>
        </div>

        <div className="mt-24 relative">
          <div className="flex overflow-hidden">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-20">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                  <img src={logo.url} alt={logo.name} className="h-8 w-auto object-contain" />
                  <span className="text-xl   text-gray-900 tracking-tighter">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>

      </div>
    </section>
  )
}
