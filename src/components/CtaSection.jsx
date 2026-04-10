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
import cta from '../assets/images/cta.svg'

export default function CtaSection() {
  return (
    <section className="bg-white overflow-hidden">
      <style>{marqueeCSS}</style>
      <div className="section-wrap">

        <div className="cta-card">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 w-full relative z-10 p-6 sm:p-10 md:p-16">
            <div className="text-white space-y-4 md:space-y-6">
              <div className="inline-block border border-white/40 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold">
                Your brand, your rules
              </div>
              <h2 className="text-[32px] sm:text-[44px] md:text-[60px] font-[600] leading-tight">Rebrand with Ease</h2>
              <p className="text-white/80 text-[14px] sm:text-[18px] md:text-[25px] font-[400] leading-relaxed">
                Whitelabel Markeltree AI for your agency's services with full flexibility.
                Customize domains, set up SMTP, and create a tailored platform
                experience for clients at an unbeatable rate of $0.069 per minute.
              </p>
              <button className="bg-white text-[#4F35E5] font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-opacity-90 transition-all text-sm shadow-lg">
                Discover Whitelabel
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
            <img src={cta} alt="cta-image" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  )
}
