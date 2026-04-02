const Logo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="3" height="16" rx="1.5" fill="white" />
        <rect x="10.5" y="4" width="3" height="16" rx="1.5" fill="white" opacity="0.7" />
        <rect x="18" y="4" width="3" height="16" rx="1.5" fill="white" opacity="0.4" />
      </svg>
    </div>
    <span className="font-extrabold text-white text-lg tracking-tight">Callfluent</span>
  </div>
)

const links = {
  Company:   ['Contact', 'Partners', 'Careers'],
  Product:   ['Pricing', 'Whitelabel', 'Demo', 'Sign In'],
  Resources: ['Blog', 'Developers'],
}

const LockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-[#0A0614]">
      <div className="section-wrap">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.07]">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-xs leading-relaxed max-w-xs text-[#9090A8]">
              Next-generation AI voice agents for businesses and agencies. Make and take calls 24/7 on autopilot.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/5 border border-white/[0.08]">
              <LockIcon />
              <span className="text-xs text-[#9090A8]">Payments secured &amp; encrypted</span>
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="  text-white text-sm mb-4">{section}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-[#9090A8] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-[#6B6B85]">© {new Date().getFullYear()} Callfluent AI. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
              <a key={t} href="#" className="text-xs text-[#6B6B85] hover:text-white transition-colors">{t}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
