import whiteLogo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="text-black">
      <div className="section-wrap">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-14 border-b border-black/10">

          {/* Brand */}
          <div className="max-w-md">
            <img src={whiteLogo} alt="Markeltree" className="h-14 mb-8" />
            <p className="text-black text-lg leading-relaxed">
              Your business never sleeps again. Next-generation AI voice agents that make and take calls on full autopilot, day, night, weekends, always.
            </p>
          </div>

        
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-7 text-black text-lg">
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
