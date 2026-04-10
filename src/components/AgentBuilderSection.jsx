import { useState, useRef } from "react";
import agents1 from "../assets/images/Clara.png"
import agents2 from "../assets/images/Jenny.png"
import agents3 from "../assets/images/sam.png"
import agents4 from "../assets/images/Jordan.png"
import aivoice from "../assets/images/ai-voice.svg"
import men1 from "../assets/audio/men1.mp3"
import men2 from "../assets/audio/men2.mp3"
import women1 from "../assets/audio/women1.mp3"
import women2 from "../assets/audio/women2.mp3"

const agents = [
  {
    id: "clara", name: "Clara", img: agents1,
    audio: women1,
    type: "Medical", title: "Dental clinic",
    desc: "Listen how our AI Voice Agent politely reminds a client about their upcoming dental appointment.",
    bgColor: "#A594F9",
  },
  {
    id: "jenny", name: "Jenny", img: agents2,
    audio: women2,
    type: "Real Estate", title: "Agentic Estate",
    desc: "Discover in this recording how AI instantly provides comprehensive property details, simplifying your client's real estate search.",
    bgColor: "#F99494",
  },
  {
    id: "sam", name: "Sam", img: agents3,
    audio: men1,
    type: "CallFluent AI", title: "Demo Agent",
    desc: "Listen how our AI Voice Agent explains our service to a potential customer.",
    bgColor: "#FFB347",
  },
  {
    id: "jordan", name: "Jordan", img: agents4,
    audio: men2,
    type: "eCandleshop", title: "e-Commerce",
    desc: "Listen how our AI Voice Agent handles a refund request from an angry customer.",
    bgColor: "#B2EBF2",
  },
]

export default function VoiceAgentsSection() {
  const [activeAgent, setActiveAgent] = useState(agents[2])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) { audioRef.current.pause() }
    else { audioRef.current.play() }
    setIsPlaying(!isPlaying)
  }

  const handleAgentClick = (agent) => {
    setActiveAgent(agent)
    setIsPlaying(false)
    if (audioRef.current) audioRef.current.load()
  }

  return (
    <section className="bg-white">
  <div className="section-wrap max-w-[1400px] mx-auto px-6">

    {/* Header */}
    <div className="relative mb-14 text-center">
      <div className="absolute left-[10%] top-0 -rotate-12 hidden md:block">
        <span className="bg-[#93D169] text-[13px] px-5 py-2 rounded-full shadow-sm font-bold">
          in 40+ languages
        </span>
      </div>
      <h2 className="agent-heading text-[36px] md:text-[54px] font-black text-[#1A1A2E] leading-tight">
        Deploy AI voice agents that sound human and work 24/7
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto text-[20px] md:text-[25px] mt-6">
        Deliver spectacular customer experience with round-the-clock
        human-like interactions, 400+ AI voices and in 40 global languages.
      </p>
    </div>

    <div className="flex items-center justify-start gap-3 mb-10 text-gray-400 font-bold text-[22px]">
      <span className="text-2xl">🎧</span> 400+ Neural Voices For Lifelike Voice Agents
    </div>

    {/* Mobile: all cards fully expanded, image-left content-right */}
    <div className="md:hidden flex flex-col gap-4 mb-16">
      {agents.map((agent) => (
        <div key={agent.id} className="rounded-[28px] overflow-hidden" style={{ background: agent.bgColor }}>
          <div className="flex items-stretch min-h-[190px]">
            <div className="relative w-[38%] flex-shrink-0">
              <img src={agent.img} className="w-full h-full object-cover" alt={agent.name} />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-xl shadow-md text-xs font-medium whitespace-nowrap">
                {agent.name}
              </div>
            </div>
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div>
                <span className="bg-black/10 px-3 py-1 rounded-lg text-xs font-semibold text-[#1A1A2E] mb-2 inline-block">{agent.type}</span>
                <h3 className="text-xl font-black text-[#1A1A2E] mb-1 leading-tight">{agent.title}</h3>
                <p className="text-xs text-[#1A1A2E]/70 leading-relaxed mb-3">{agent.desc}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => { handleAgentClick(agent); togglePlay(); }}
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md flex-shrink-0"
                >
                  {isPlaying && activeAgent.id === agent.id ? (
                    <div className="flex gap-1"><div className="w-1 h-3 bg-gray-800"></div><div className="w-1 h-3 bg-gray-800"></div></div>
                  ) : (
                    <div className="ml-0.5 w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-gray-800 border-b-[6px] border-b-transparent"></div>
                  )}
                </button>
                <div className="flex-1 h-1.5 bg-black/10 rounded-full overflow-hidden">
                  <div className={`h-full bg-black/25 ${isPlaying && activeAgent.id === agent.id ? "w-full transition-all duration-[30s] linear" : "w-0"}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Desktop: horizontal expand */}
    <div className="agent-cards-wrap mb-16 hidden md:flex">
      {agents.map((agent) => (
        <div
          key={agent.id}
          onClick={() => handleAgentClick(agent)}
          className="agent-card-item cursor-pointer"
          style={{ background: activeAgent.id === agent.id ? agent.bgColor : 'transparent' }}
          data-active={activeAgent.id === agent.id ? 'true' : 'false'}
        >
          <div className={`agent-card-img-wrap ${activeAgent.id === agent.id ? 'agent-card-img-active' : 'agent-card-img-inactive'}`}>
            <img src={agent.img} className="w-full h-full object-cover" alt={agent.name} />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-1.5 rounded-xl shadow-md text-sm text-gray-800 whitespace-nowrap font-medium">
              {agent.name}
            </div>
          </div>
          {activeAgent.id === agent.id && (
            <div className="agent-card-content">
              <span className="bg-black/10 w-fit px-4 py-1 rounded-lg text-[22px] text-[#1A1A2E] mb-4 block font-semibold">{agent.type}</span>
              <h3 className="text-[36px] md:text-[42px] font-black text-[#1A1A2E] mb-3 leading-tight">{agent.title}</h3>
              <p className="text-[17px] leading-relaxed text-[#1A1A2E]/70 mb-8">{agent.desc}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={(e) => { e.stopPropagation(); togglePlay() }}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform flex-shrink-0"
                >
                  {isPlaying ? (
                    <div className="flex gap-1.5"><div className="w-1 h-4 bg-gray-800"></div><div className="w-1 h-4 bg-gray-800"></div></div>
                  ) : (
                    <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-gray-800 border-b-[8px] border-b-transparent"></div>
                  )}
                </button>
                <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
                  <div className={`h-full bg-black/20 ${isPlaying ? "w-full transition-all duration-[30s] linear" : "w-0"}`}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    <audio ref={audioRef} src={activeAgent.audio} onEnded={() => setIsPlaying(false)} />

    {/* Bottom 2 cards Section - MATCHING SS1 */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* 400+ Neural AI Voices Card */}
      <div className="lg:col-span-2 bg-[#EDF2FF] rounded-[48px] flex flex-col md:flex-row items-center relative overflow-hidden min-h-[400px]">
        <div className="z-10 w-full md:w-[55%] p-10 md:p-14">
          <h4 className="text-[44px] md:text-[62px] font-black text-[#1A1A2E] leading-[1.1] mb-6 tracking-tight">
            400+ Neural <br /> AI Voices
          </h4>
          <p className="text-[#1A1A2E]/60 text-[20px] md:text-[24px] leading-snug max-w-[440px]">
            Deliver high-quality conversations with 400 human-like neural voices and 140 accents and variants.
          </p>
        </div>

        <div className="w-full md:w-[45%] flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={aivoice}
            className="w-full max-w-[400px] cover md:scale-125 md:translate-x-4"
            alt="AI Interface"
          />
        </div>
      </div>

      {/* Elevenlabs Card */}
      <div className="lg:col-span-1 bg-[#1A1A26] rounded-[48px] p-10 flex flex-col items-start justify-between text-left text-white min-h-[400px]">
        <div>
          <span className="border border-white/20 px-5 py-2 rounded-full text-[12px] font-medium inline-block mb-10 tracking-widest uppercase">
            1 click elevenlabs integration
          </span>
          <h4 className="text-[40px] md:text-[46px] font-black leading-tight mb-5">
            Elevenlabs
          </h4>
          <p className="text-gray-400 text-[18px] md:text-[20px] leading-relaxed mb-8">
            Create voices & accents or clone your own voice with our ElevenLabs 1 click Integration.
          </p>
        </div>
        
        <button className="bg-[#5243e8] text-white px-10 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#4338CA] transition-all w-full md:w-auto font-bold text-lg shadow-md">
          <span className="text-2xl">🎙️</span>
          <a href="/#call" className="no-underline text-white">Try a conversation</a>
        </button>
      </div>

    </div>
  </div>
</section>
  )
}
