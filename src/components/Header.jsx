import logo from '../assets/images/logo.png';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#ffffff]">
      <div className="header-wrap flex items-center justify-between px-6">
        <img src={logo} alt="Markeltree" className="main-logo" />

        <a
          href="#call"
          className="text-sm font-semibold text-black bg-[#93D169] rounded-full px-12 py-4 transition-all duration-200"
        >
          Let's Call
        </a>
      </div>
    </header>
  )
}

  
