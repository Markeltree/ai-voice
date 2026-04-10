import logo from '../assets/images/mini-logo.png';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2">
      <div className="header-wrap flex items-center justify-between px-6">
        <img src={logo} alt="Markeltree" className="main-logo" />

        <a
          href="#call"
          className="text-sm font-semibold text-black border border-black/30 rounded-full px-6 py-2 transition-all duration-200"
        >
          Let's Call
        </a>
      </div>
    </header>
  )
}

  
