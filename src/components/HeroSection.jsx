import { useState } from 'react'
import phoneBanner from '../assets/phone-banner-new.svg'
import arrowIcon from '../assets/banner-free-demo-icon.svg'
import flagIcon from '../assets/images/flags.png'
import avatarIcon from '../assets/images/testi10.png'

const MicIcon = ({ size = 16 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-7a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const PhoneMockup = () => {
  const [called, setCalled] = useState(false)
  return (
    <div className="phone-mockup-wrap">
      <img src={phoneBanner} alt="phone" className="w-full select-none" draggable={false} />
      <div className="phone-screen-overlay">
        <div className="phone-avatar-row">
          <div className="phone-avatar-img">
            <img src={avatarIcon} className="w-full h-full object-cover" alt="Nick" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="phone-avatar-name">Nick from Callfluent</p>
            <p className="phone-avatar-status">Available</p>
          </div>
        </div>

        {!called && (
          <div className="phone-inputs-wrap">
            <input type="text" placeholder="Name" className="phone-input-field" />
            <input type="email" placeholder="Email Address" className="phone-input-field" />
            <button onClick={() => setCalled(true)} className="phone-cta-btn">
              <MicIcon size={20} /> Talk with AI
            </button>
          </div>
        )}

        {called && (
          <div className="phone-called-wrap">
            <button className="phone-call-btn">Call Me Now</button>
            <p className="text-gray-400 font-medium italic text-sm">or</p>
            <div className="flex items-center gap-3 text-gray-800   text-lg">
              <PhoneIcon /> +1 310-545-4756
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="section-wrap flex flex-col items-center pt-12 pb-0">

        <div className="hero-pill inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-5 py-2 mb-8">
          AI Can Now Make &amp; Take Calls On Your Behalf!
        </div>

        <div className="relative flex flex-col items-center">
          <span className="hero-badge-yellow hidden md:inline-block   text-gray-900 rounded-full">
            Inbound &amp; Outbound Calls
          </span>
          <span className="hero-badge-purple hidden md:inline-block   text-white rounded-full">
            Human-Like
          </span>
          <h1 className="hero-heading">
            Next-Gen AI Voice Agents
            For Businesses and Agencies
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-4 md:hidden">
          <span className="bg-yellow-400 text-gray-900   text-xs rounded-full px-4 py-1.5">
            Inbound &amp; Outbound Calls
          </span>
          <span className="  text-white text-xs rounded-full px-4 py-1.5 bg-indigo-600">
            Human-Like
          </span>
        </div>

        <p className="hero-subtitle">
          Create artificial intelligence powered, human-like voice agents ready to
          handle inbound and outbound calls 24/7
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button className="btn-outline">
            <MicIcon size={15} /> Try a conversation
          </button>
        </div>

        <div className="hero-phone-area" id="call">
          <div className="hero-float-badges">
            <div className="hero-float-badge-item">
              <img src={flagIcon} className="flagicon" alt="flag" /> English speaker
            </div>
            <div className="hero-float-badge-item">
              Trained on Callfluent FAQs
            </div>
          </div>

          <PhoneMockup />

          <div className="hero-annotation hidden sm:block">
            <p className="hero-annotation-text">Try a FREE<br />demo call!</p>
            <img src={arrowIcon} alt="" className="hero-annotation-arrow" />
          </div>
        </div>

      </div>
    </section>
  )
}
