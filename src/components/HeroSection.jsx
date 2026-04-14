import { useState, useEffect } from "react";
import phoneBanner from "../assets/phone-banner.png";
import flagIcon from "../assets/images/flags.png";
import avatarIcon from "../assets/images/Daniel.png";

const MicIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-7a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbx1qvvq0NPzNsnKJ7CT1ZK4Pazfahx3H4lPZNyjWE7yovCtm2TNmMrfxEK0JBTuFHiq/exec";

const PhoneMockup = () => {
  const [called, setCalled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!called) return;
    const timer = setTimeout(() => {
      setCalled(false);
      setName("");
      setEmail("");
    }, 20000);
    return () => clearTimeout(timer);
  }, [called]);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ type: "voice_email", name, email }),
      });
    } catch (_) {
    } finally {
      setLoading(false);
      setCalled(true);
    }
  };

  return (
    <div className="phone-mockup-wrap">
      <img
        src={phoneBanner}
        alt="phone"
        className="w-full select-none"
        draggable={false}
      />
      <div className="phone-screen-overlay">
        <div className="phone-avatar-row">
          <div className="phone-avatar-img">
            <img
              src={avatarIcon}
              className="w-full h-full object-cover"
              alt="Nick"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="phone-avatar-name">Daniel from Markeltree</p>
            <p className="phone-avatar-status">Available</p>
          </div>
        </div>

        {!called && (
          <div className="phone-inputs-wrap">
            <input
              type="text"
              placeholder="Name"
              className="phone-input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="phone-input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="phone-cta-btn"
              disabled={loading}
            >
              <MicIcon size={20} /> {loading ? "Please wait…" : "Talk with AI"}
            </button>
          </div>
        )}

        {called && (
          <div className="phone-called-wrap">
            <a
              href="https://scheduler.zoom.us/markeltree-llc/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="phone-call-btn inline-flex items-center justify-center"
            >
              Call Now
            </a>
            <p className="text-gray-400 font-medium italic text-sm">or</p>
            <a href="tel:13105454756" className="inline-flex items-center gap-2 text-gray-800 text-lg">
              <PhoneIcon /> +1 310-545-4756
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="section-wrap flex flex-col items-center pt-8 pb-0">
        <div className="hero-pill inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-5 py-2 mb-8">
          Your 24/7 AI Calling Agent Is Now Ready
        </div>

        <div className="relative flex flex-col items-center">
          <span className="hero-badge-yellow hidden md:inline-block text-gray-900 rounded-full">
            Inbound &amp; Outbound Calls
          </span>
          <span className="hero-badge-purple hidden md:inline-block text-white rounded-full">
            Human-Like
          </span>
          <h1 className="hero-heading">
            AI Can Now Make & Take Calls On Your Behalf
          </h1>
        </div>


        <p className="hero-subtitle">
          Businesses and agencies can benefit from AI development services that create next-generation virtual voice agents. The system enables organizations to implement voice agents that handle inbound and outbound calls throughout the day without requiring any programming and without experiencing exhaustion or dropping calls.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://scheduler.zoom.us/markeltree-llc/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <MicIcon size={20} /> Contact Sales
          </a>
        </div>
        <div className="hero-phone-area" id="call">
          <div className="hero-float-badges">
            <div className="hero-float-badge-item">
              <img src={flagIcon} className="flagicon" alt="flag" /> English
              speaker
            </div>
            <div className="hero-float-badge-item">
             Live Agent Trained on Your Products
            </div>
          </div>
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
