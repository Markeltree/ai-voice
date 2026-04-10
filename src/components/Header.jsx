import { useState } from 'react'
import logo from '../assets/images/mini-logo.png';


const MobileMenuIcon = ({ open }) => (
  <div className="flex flex-col justify-center items-center w-6 h-6 gap-1.5">
    <span className={`block h-0.5 bg-gray-800 rounded transition-all duration-300 ${open ? 'w-5 rotate-45 translate-y-2' : 'w-5'}`} />
    <span className={`block h-0.5 bg-gray-800 rounded transition-all duration-300 ${open ? 'opacity-0 w-0' : 'w-4'}`} />
    <span className={`block h-0.5 bg-gray-800 rounded transition-all duration-300 ${open ? 'w-5 -rotate-45 -translate-y-2' : 'w-5'}`} />
  </div>
)

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md header-wrap">
      <div className="max-w-site mx-auto px-6">
        <div className="flex items-center justify-between h-full">
          <img src={logo} alt='main logo' className='main-logo' />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center invisible">
            <a href="#" className="text-sm font-semibold text-gray-800 border border-gray-300 rounded-full px-6 py-2 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-200">
              Sign In
            </a>
          </div>

          <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <MobileMenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 pb-5 pt-2 gap-4 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#" className="text-sm font-semibold text-gray-800 border border-gray-300 rounded-full px-5 py-2 text-center hover:border-indigo-500 hover:text-indigo-600 transition-all">
            Sign In
          </a>
        </nav>
      </div>
    </header>
  )
}
