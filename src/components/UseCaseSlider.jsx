import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from '../assets/images/Group.png'
import slider2 from '../assets/images/Calendar.png'
import slider3 from '../assets/images/live-chat.png'
import slider4 from '../assets/images/lead-capture.png'
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const slides = [
  {
    id: 1,
    tag: "Lead Qualification",
    title: "Leads Qualified Before You Even Wake Up",
    description:
      "Let Markeltree AI voice agents call, qualify, and score every lead automatically while your sales team focuses on closing.",
    subDescription:
      "One Agent. Unlimited Pipeline. Your Markeltree agent engages every lead instantly and delivers only the hottest prospects straight to your team.",
    points: [
      "Calls every new lead within seconds of sign-up",
      "Asks the right questions and scores intent automatically",
      "Books qualified leads directly into your sales calendar",
    ],
    buttonText: "Start Qualifying Leads",
    bgImage: slider1
  },
  {
    id: 2,
    tag: "Appointment Scheduling",
    title: "Appointments Booked Around The Clock",
    description:
      "Let Markeltree AI voice agents handle your entire scheduling process, confirming, reminding, and rescheduling without any human effort.",
    subDescription:
      "One Agent. Zero No-Shows. Your Markeltree agent manages every booking and keeps your calendar full without lifting a finger.",
    points: [
      "Checks availability and books slots in real time",
      "Sends reminders automatically before every appointment",
      "Handles rescheduling and cancellations without any friction",
    ],
    buttonText: "Automate Scheduling",
    bgImage: slider2
  },
  {
    id: 3,
    tag: "Customer Support",
    title: "Support That Never Sleeps Or Slows Down",
    description:
      "Let Markeltree AI voice agents handle every customer query, complaint, and request, delivering instant support at any hour.",
    subDescription:
      "One Agent. Endless Patience. Your Markeltree agent resolves every support call confidently and escalates only when a human is truly needed.",
    points: [
      "Answers common queries instantly using your knowledge base",
      "Resolves complaints and follows up with SMS or email mid-call",
      "Escalates complex cases to your team with full context attached",
    ],
    buttonText: "Deploy Support Agent",
    bgImage: slider3
  },
  {
    id: 4,
    tag: "Inquiry Management",
    title: "Every Inquiry Answered. Every Time",
    description:
      "At Markeltree our AI voice agents capture, respond to, and log every inbound inquiry before it becomes a missed opportunity.",
    subDescription:
      "One Agent. Zero Missed Calls. Your Markeltree agent handles every inbound call and delivers the right information on the very first ring.",
    points: [
      "Responds to product, pricing, and availability questions instantly",
      "Logs every inquiry and pushes data to your CRM automatically",
      "Follows up with personalized messages after every single call",
    ],
    buttonText: "Capture Every Lead",
    bgImage: slider4
  },
];

export default function VerticalScrollSlider() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollTime = useRef(0);
  const transitionSpeed = 800;

  useEffect(() => {
    const handleGlobalWheel = (e) => {
      if (!isHovered) return;
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < transitionSpeed) return;
      if (e.deltaY > 0 && index < slides.length - 1) {
        setIndex((prev) => prev + 1);
        lastScrollTime.current = now;
      } else if (e.deltaY < 0 && index > 0) {
        setIndex((prev) => prev - 1);
        lastScrollTime.current = now;
      }
    };
    window.addEventListener("wheel", handleGlobalWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleGlobalWheel);
  }, [isHovered, index]);

  return (
    <section className="bg-white">
      <div className="section-wrap">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] !leading-[1] font-semibold text-[#1A1A2E] mb-4">
            Transform Customer Interaction with Proven Use Cases
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto">
            Efficiently manage all incoming interactions with AI-powered voice
            agents that schedule appointments and provide 24/7 customer support,
            ensuring no inquiry is ever missed.
          </p>
        </div>

        {/* Mobile: vertical card stack */}
        <div className="slider-mobile md:hidden">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              onClick={() => setIndex(i)}
              className={`slider-mobile-card ${index === i ? "slider-mobile-card-active" : ""}`}
              style={{ background: index === i ? slide.bgColor : "#f9fafb" }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-[10px] font-black uppercase tracking-widest mb-3">
                {slide.tag}
              </span>
              <h3 className="text-lg font-black text-[#1A1A2E] mb-4 leading-tight">
                {slide.title}
              </h3>
              <p className="mb-3">{slide.description}</p>
              <p className="mb-6">{slide.subDescription}</p>
              {index === i && (
                <>
                  <ul className="space-y-3 mb-6">
                    {slide.points.map((point, pi) => (
                      <li
                        key={pi}
                        className="flex items-start gap-3 text-[#1A1A2E] font-semibold text-sm"
                      >
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-black flex items-center justify-center text-white text-[10px] flex-shrink-0">
                          ✓
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <button  onClick={() => window.location.href = '/#call'} className="bg-[#93D169] text-black px-6 py-3 rounded-2xl   text-sm">
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
          <div className="w-1/2 h-full relative overflow-hidden">

            {/* Image — all preloaded, opacity transition */}
            {slides.map((slide, i) => (
              <img
                key={slide.id}
                src={slide.bgImage}
                alt={slide.tag}
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
                style={{ opacity: index === i ? 1 : 0 }}
              />
            ))}

            {/* Pagination */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
              <button
                onClick={() => index > 0 && setIndex(index - 1)}
                className="w-7 h-7 rounded-full border border-gray-300 bg-white/80 flex items-center justify-center hover:bg-white transition-colors text-sm"
              >
                <FaLongArrowAltUp />
              </button>
              <div className="flex flex-col gap-2">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 transition-all duration-500 rounded-full cursor-pointer ${index === i ? "h-10 bg-black" : "h-3 bg-gray-300"}`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <button
                onClick={() => index < slides.length - 1 && setIndex(index + 1)}
                className="w-7 h-7 rounded-full border border-gray-300 bg-white/80 flex items-center justify-center hover:bg-white transition-colors text-sm"
              >
                <FaLongArrowAltDown />
              </button>
            </div>
          </div>

          {/* Right: content */}
          <div className="w-1/2 h-full bg-white flex flex-col justify-center p-6 md:p-7 lg:p-10 xl:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                <span className="inline-block px-3 py-1 rounded-full bg-[#93D169] text-black text-[9px] md:text-[9px] lg:text-[10px] font-black uppercase tracking-widest mb-2 md:mb-2 lg:mb-4">
                  {slides[index].tag}
                </span>
                <h2 className="text-3xl font-black text-[#1A1A2E] mb-2 md:mb-2 lg:mb-4 leading-[1.1]">
                  {slides[index].title}
                </h2>
                <p className="text-[15px] text-[#6B7280] leading-relaxed mb-1.5 md:mb-1.5 lg:mb-3">
                  {slides[index].description}
                </p>
                <p className="hidden lg:block text-sm text-[#6B7280] leading-relaxed mb-4 xl:mb-6">
                  {slides[index].subDescription}
                </p>
                <ul className="space-y-1.5 md:space-y-1.5 lg:space-y-3 mb-3 md:mb-3 lg:mb-6">
                  {slides[index].points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 md:gap-2 lg:gap-4 text-[#1A1A2E] font-semibold text-[11px] md:text-[11px] lg:text-sm"
                    >
                      <span className="mt-0.5 w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-[#93D169] flex items-center justify-center text-black text-[9px] flex-shrink-0">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <button  onClick={() => window.location.href = '/#call'} className="bg-[#93D169] text-black px-5 py-2 md:px-5 md:py-2 lg:px-8 lg:py-3 text-xs md:text-xs lg:text-sm rounded-2xl transition-all">
                  {slides[index].buttonText}
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
