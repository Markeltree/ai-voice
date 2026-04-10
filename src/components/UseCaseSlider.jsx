import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1, tag: "Knowledge Base",
    title: "Train your AI voice agent with what it needs to sound smart.",
    points: ["Upload FAQs, SOPs, docs, or notes up to 25 MB", "Use dynamic variables for personalized responses", "Update knowledge without touching flows"],
    buttonText: "Add Knowledge", bgColor: "#F7F3E8", visual: "📂 Knowledge Docs",
  },
  {
    id: 2, tag: "Analytics",
    title: "Outbound call campaigns that scale with zero stress.",
    points: ["Launch bulk campaigns for reminders, offers, or feedback", "Set targeting rules and real-time branching flows", "Track engagement, drop-off, and conversions instantly"],
    buttonText: "Start Campaign", bgColor: "#F2E9A1", visual: "📊 Campaign Stats",
  },
  {
    id: 3, tag: "Knowledge Base",
    title: "Train your AI voice agent with what it needs to sound smart.",
    points: ["Upload FAQs, SOPs, docs, or notes up to 25 MB", "Use dynamic variables for personalized responses", "Update knowledge without touching flows"],
    buttonText: "Add Knowledge", bgColor: "#F7F3E8", visual: "📂 Knowledge Docs",
  },
  {
    id: 4, tag: "Analytics",
    title: "Outbound call campaigns that scale with zero stress.",
    points: ["Launch bulk campaigns for reminders, offers, or feedback", "Set targeting rules and real-time branching flows", "Track engagement, drop-off, and conversions instantly"],
    buttonText: "Start Campaign", bgColor: "#F2E9A1", visual: "📊 Campaign Stats",
  },
]

export default function VerticalScrollSlider() {
  const [index, setIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const lastScrollTime = useRef(0)
  const transitionSpeed = 800

  useEffect(() => {
    const handleGlobalWheel = (e) => {
      if (!isHovered) return
      e.preventDefault()
      const now = Date.now()
      if (now - lastScrollTime.current < transitionSpeed) return
      if (e.deltaY > 0 && index < slides.length - 1) { setIndex((prev) => prev + 1); lastScrollTime.current = now }
      else if (e.deltaY < 0 && index > 0) { setIndex((prev) => prev - 1); lastScrollTime.current = now }
    }
    window.addEventListener("wheel", handleGlobalWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleGlobalWheel)
  }, [isHovered, index])

  return (
    <section className="bg-white">
      <div className="section-wrap">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[59px] !leading-[1] font-black text-[#1A1A2E] mb-4">
              Transform Customer Interaction with Proven Use Cases
          </h2>
          <p className="text-[#6B7280] text-sm md:text-base max-w-2xl mx-auto">
            Efficiently manage all incoming interactions with AI-powered voice agents that schedule appointments
            and provide 24/7 customer support, ensuring no inquiry is ever missed.
          </p>
        </div>

        {/* Mobile: vertical card stack */}
        <div className="slider-mobile md:hidden">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              onClick={() => setIndex(i)}
              className={`slider-mobile-card ${index === i ? 'slider-mobile-card-active' : ''}`}
              style={{ background: index === i ? slide.bgColor : '#f9fafb' }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-[10px] font-black uppercase tracking-widest mb-3">
                {slide.tag}
              </span>
              <h3 className="text-lg font-black text-[#1A1A2E] mb-4 leading-tight">{slide.title}</h3>
              {index === i && (
                <>
                  <ul className="space-y-3 mb-6">
                    {slide.points.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-3 text-[#1A1A2E] font-semibold text-sm">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-[10px] flex-shrink-0">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-black text-white px-6 py-3 rounded-2xl   text-sm">
                    {slide.buttonText}
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Desktop: side-by-side slider */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hidden md:flex md:h-[420px] lg:h-[550px] xl:h-[600px] rounded-[28px] lg:rounded-[40px] overflow-hidden border border-gray-100 shadow-sm relative"
        >
          {/* Left: visual */}
          <motion.div
            animate={{ backgroundColor: slides[index].bgColor }}
            className="w-1/2 h-full flex items-center justify-center p-8 lg:p-12 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                className="w-full h-full flex items-center justify-center"
              >
                <div className="bg-white/80 p-8 lg:p-10 rounded-3xl shadow-2xl w-64 lg:w-80 h-44 lg:h-56 border border-white/50 backdrop-blur-md flex items-center justify-center text-lg lg:text-xl  ">
                  {slides[index].visual}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
              <button onClick={() => index > 0 && setIndex(index - 1)} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors text-sm">↑</button>
              <div className="flex flex-col gap-2">
                {slides.map((_, i) => (
                  <div key={i} className={`w-1.5 transition-all duration-500 rounded-full cursor-pointer ${index === i ? "h-10 bg-black" : "h-3 bg-gray-300"}`} onClick={() => setIndex(i)} />
                ))}
              </div>
              <button onClick={() => index < slides.length - 1 && setIndex(index + 1)} className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition-colors text-sm">↓</button>
            </div>
          </motion.div>

          {/* Right: content */}
          <div className="w-1/2 h-full bg-white flex flex-col justify-center p-10 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 text-[10px] font-black uppercase tracking-widest mb-5">
                  {slides[index].tag}
                </span>
                <h2 className="text-2xl lg:text-4xl font-black text-[#1A1A2E] mb-6 leading-[1.1]">{slides[index].title}</h2>
                <ul className="space-y-3 mb-8">
                  {slides[index].points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4 text-[#1A1A2E] font-semibold text-sm">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-[10px] flex-shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="bg-black text-white px-8 py-3 rounded-2xl   hover:bg-gray-800 active:scale-95 shadow-lg shadow-gray-200 transition-all">
                  {slides[index].buttonText}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
