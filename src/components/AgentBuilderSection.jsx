import { useState, useRef } from "react";
import agents1 from "../assets/images/girl-1.png";
import agents2 from "../assets/images/girl-2.png";
import agents3 from "../assets/images/Daniel.png";
import agents4 from "../assets/images/Andrew.png";
import men1 from "../assets/audio/Daniel.mp3";
import men2 from "../assets/audio/Andrew.mp3";
import women1 from "../assets/audio/Elizabeth.mp3";
import women2 from "../assets/audio/Sophia.mp3";
import CtaSection from "./CtaSection";

const agents = [
  {
    id: "1",
    name: "Elizabeth",
    img: agents1,
    audio: women1,
    type: "Medical",
    title: "Healthcare",
    desc: "Listen how our AI Voice Agent politely reminds patients about upcoming medical appointments, manages prescription refills, and handles insurance verification calls.",
    bgColor: "#EBEDFF",
  },
  {
    id: "2",
    name: "Sophia",
    img: agents2,
    audio: women2,
    type: "Real Estate",
    title: "Property Agent",
    desc: "Discover how our AI Voice Agent provides instant property details, schedules viewings, qualifies leads, and answers questions about pricing, location, and amenities.",
    bgColor: "#EBEDFF",
  },
  {
    id: "3",
    name: "Daniel",
    img: agents3,
    audio: men1,
    type: "Education",
    title: "Study Coach",
    desc: "Listen how our AI Voice Agent answers course questions, schedules counseling sessions, processes enrollment inquiries, and provides information about programs and deadlines.",
    bgColor: "#EBEDFF",
  },
  {
    id: "4",
    name: "Andrew",
    img: agents4,
    audio: men2,
    type: "eCandleshop",
    title: "e-Commerce",
    desc: "Listen how our AI Voice Agent professionally handles refund requests, processes returns, addresses customer complaints, and resolves order issues with empathy.",
    bgColor: "#EBEDFF",
  },
];

export default function VoiceAgentsSection() {
  const [activeAgent, setActiveAgent] = useState(agents[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleAgentClick = (agent) => {
    setActiveAgent(agent);
    setIsPlaying(false);
    if (audioRef.current) audioRef.current.load();
  };

  return (
    <section className="bg-white">
      <div className="section-wrap max-w-[1400px] mx-auto px-6">
        <div className="relative mb-14 text-center">
          <div className="absolute left-[8%] top-0 -rotate-12 hidden md:block">
            <span className="bg-[#93D169] text-[18px] px-5 py-2 rounded-full shadow-sm font-bold">
              in 40+ languages
            </span>
          </div>
          <h2 className="agent-heading text-2xl sm:text-3xl md:text-4xl lg:text-[60px] !leading-[1] font-semibold text-[#1A1A2E] mb-4">
            Elevate Customer Experience With AI Voice Agent Development
          </h2>
          
          <p className="text-gray-500 max-w-6xl mx-auto mt-6">
            Handle high call volumes effortlessly while delivering personalized,
            real-time responses around the clock.
          </p>
        </div>

        <div className="md:hidden flex flex-col gap-4 mb-16">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="rounded-[28px] overflow-hidden"
              style={{ background: agent.bgColor }}
            >
              <div className="flex items-stretch min-h-[190px]">
                <div className="relative w-[38%] flex-shrink-0">
                  <img
                    src={agent.img}
                    className="w-full h-full object-cover"
                    alt={agent.name}
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-xl shadow-md text-xs font-medium whitespace-nowrap">
                    {agent.name}
                  </div>
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <span className="bg-black/10 px-3 py-1 rounded-lg text-xs font-semibold text-[#1A1A2E] mb-2 inline-block">
                      {agent.type}
                    </span>
                    <h3 className="text-xl font-black text-[#1A1A2E] mb-1 leading-tight">
                      {agent.title}
                    </h3>
                    <p className="text-xs text-[#1A1A2E]/70 leading-relaxed mb-3">
                      {agent.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        handleAgentClick(agent);
                        togglePlay();
                      }}
                      className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0"
                    >
                      {isPlaying && activeAgent.id === agent.id ? (
                        <div className="flex gap-1">
                          <div className="w-1 h-3 bg-gray-800"></div>
                          <div className="w-1 h-3 bg-gray-800"></div>
                        </div>
                      ) : (
                        <div className="ml-0.5 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-800 border-b-[6px] border-b-transparent"></div>
                      )}
                    </button>
                    <div className="flex-1 h-1.5 bg-black/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-black/25 ${isPlaying && activeAgent.id === agent.id ? "w-full transition-all duration-[30s] linear" : "w-0"}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 mb-16">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="rounded-[28px] overflow-hidden"
              style={{ background: agent.bgColor }}
            >
              <div className="flex items-stretch min-h-[220px]">
                <div className="relative w-[38%] flex-shrink-0">
                  <img
                    src={agent.img}
                    className="w-full h-full object-cover"
                    alt={agent.name}
                  />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-xl shadow-md text-xs font-medium whitespace-nowrap">
                    {agent.name}
                  </div>
                </div>
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <span className="bg-black/10 px-3 py-1 rounded-lg text-xs font-semibold text-[#1A1A2E] mb-2 inline-block">
                      {agent.type}
                    </span>
                    <h3 className="text-lg font-black text-[#1A1A2E] mb-1 leading-tight">
                      {agent.title}
                    </h3>
                    <p className="text-[13px] text-[#1A1A2E]/70 leading-relaxed mb-3">
                      {agent.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => { handleAgentClick(agent); togglePlay(); }}
                      className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0"
                    >
                      {isPlaying && activeAgent.id === agent.id ? (
                        <div className="flex gap-1">
                          <div className="w-1 h-3 bg-gray-800" />
                          <div className="w-1 h-3 bg-gray-800" />
                        </div>
                      ) : (
                        <div className="ml-0.5 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-800 border-b-[6px] border-b-transparent" />
                      )}
                    </button>
                    <div className="flex-1 h-1.5 bg-black/10 rounded-full overflow-hidden">
                      <div className={`h-full bg-black/25 ${isPlaying && activeAgent.id === agent.id ? "w-full transition-all duration-[30s] linear" : "w-0"}`} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="agent-cards-wrap hidden lg:flex">
          {agents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => handleAgentClick(agent)}
              className="agent-card-item cursor-pointer"
              style={{
                background:
                  activeAgent.id === agent.id ? agent.bgColor : "transparent",
              }}
              data-active={activeAgent.id === agent.id ? "true" : "false"}
            >
              <div
                className={`agent-card-img-wrap ${activeAgent.id === agent.id ? "agent-card-img-active" : "agent-card-img-inactive"}`}
              >
                <img
                  src={agent.img}
                  className="w-full h-full object-cover"
                  alt={agent.name}
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-1.5 rounded-xl shadow-md text-sm text-gray-800 whitespace-nowrap font-medium">
                  {agent.name}
                </div>
              </div>
              {activeAgent.id === agent.id && (
                <div className="agent-card-content">
                  <span className="agent-type-badge bg-black/10 w-fit px-4 py-1 rounded-lg text-[22px] text-[#1A1A2E] mb-4 block font-semibold">
                    {agent.type}
                  </span>
                  <h3 className="agent-title text-[32px] md:text-[38px] font-black text-[#1A1A2E] mb-3 leading-tight">
                    {agent.title}
                  </h3>
                  <p className="agent-desc text-[17px] leading-relaxed text-[#1A1A2E]/70 mb-8">
                    {agent.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                      }}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform flex-shrink-0"
                    >
                      {isPlaying ? (
                        <div className="flex gap-1.5">
                          <div className="w-1 h-4 bg-gray-800"></div>
                          <div className="w-1 h-4 bg-gray-800"></div>
                        </div>
                      ) : (
                        <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gray-800 border-b-[8px] border-b-transparent"></div>
                      )}
                    </button>
                    <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-black/20 ${isPlaying ? "w-full transition-all duration-[30s] linear" : "w-0"}`}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <audio
          ref={audioRef}
          src={activeAgent.audio}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="mt-16">
          <CtaSection />
        </div>
      </div>
    </section>
  );
}
