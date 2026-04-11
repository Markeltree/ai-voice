import whiteLogo from "../assets/images/white-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0F0B1E] text-white">
      <div className="section-wrap">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-14 border-b border-white/10">

          {/* Brand */}
          <div className="max-w-sm">
            <img src={whiteLogo} alt="Markeltree" className="h-9 mb-5" />
            <p className="text-[#9090A8] text-lg leading-relaxed">
              Your business never sleeps again. Next-generation AI voice agents that make and take calls on full autopilot, day, night, weekends, always.
            </p>
          </div>

        
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-7 text-[#6B6B85] text-lg">
          <p>© {new Date().getFullYear()} Markeltree. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
