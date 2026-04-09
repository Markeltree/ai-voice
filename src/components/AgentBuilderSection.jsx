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
      <div className="section-wrap">

        {/* Header */}
        <div className="relative mb-10 text-center">
          <div className="absolute left-[10%] top-0 -rotate-12 hidden md:block">
            <span className="bg-[#FFD641] text-xs px-4 py-2 rounded-full shadow-sm">
              in 40+ languages
            </span>
          </div>
          <h2 className="agent-heading">
            Deploy AI voice agents that sound human and work 24/7
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[25px] mt-4">
            Deliver spectacular customer experience with round-the-clock
            human-like interactions, 400+ AI voices and in 40 global languages.
          </p>
        </div>

        <div className="flex items-center justify-start gap-2 mb-8 text-gray-400 font-semibold text-[25px]">
          <span className="text-lg">🎧</span> 400+ Neural Voices For Lifelike Voice Agents
        </div>

        {/* Agents — desktop: horizontal expand, mobile: vertical stack */}
        <div className="agent-cards-wrap mb-12">
          {agents.map((agent) => (
            <div
              key={agent.id}
              onClick={() => handleAgentClick(agent)}
              className="agent-card-item"
              style={{
                background: activeAgent.id === agent.id ? agent.bgColor : 'transparent',
              }}
              data-active={activeAgent.id === agent.id ? 'true' : 'false'}
            >
              {/* Image side */}
              <div className={`agent-card-img-wrap ${activeAgent.id === agent.id ? 'agent-card-img-active' : 'agent-card-img-inactive'}`}>
                <img src={agent.img} className="w-full h-full object-cover" alt={agent.name} />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-1.5 rounded-xl shadow-md text-sm   text-gray-800 whitespace-nowrap">
                  {agent.name}
                </div>
              </div>

              {/* Content side — only when active */}
              {activeAgent.id === agent.id && (
                <div className="agent-card-content">
                  <span className="bg-black/10 w-fit px-4 py-1 rounded-lg text-[25px]  text-[#1A1A2E] mb-4 block">{agent.type}</span>
                  <h3 className="text-[40px] font-black text-[#1A1A2E] mb-3">{agent.title}</h3>
                  <p className="text-[18px] leading-relaxed text-[#1A1A2E]/70 mb-6">{agent.desc}</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => { e.stopPropagation(); togglePlay() }}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform flex-shrink-0"
                    >
                      {isPlaying ? (
                        <div className="flex gap-1">
                          <div className="w-1 h-4 bg-gray-800"></div>
                          <div className="w-1 h-4 bg-gray-800"></div>
                        </div>
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

        {/* Bottom 2 cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-[#EDF2FF] rounded-[40px] p-6 md:p-10 flex flex-col md:flex-row items-start text-left relative overflow-hidden min-h-[445px]">
    
    {/* TEXT */}
    <div className="z-10 max-w-full md:max-w-[50%]">
      <h4 className="text-[36px] md:text-[60px] font-black text-[#1A1A2E] leading-tight mb-4">
        400+ Neural <br /> AI Voices
      </h4>
      <p className="text-gray-500 text-[18px] md:text-[25px]">
        Deliver high-quality conversations with 400 human-like neural voices and 140 accents and variants.
      </p>
    </div>

    {/* IMAGE */}
    <img
      src={aivoice}
      className="w-full mt-6 md:mt-0 md:w-[50%] md:absolute md:right-0 md:top-0 md:h-full object-contain"
      alt=""
    />
  </div>

  {/* <div className="bg-[#1D1D2B] rounded-[40px] p-8 md:p-10 flex flex-col items-start text-left text-white  min-h-[445px] max-w-[440px]">
    <span className="border border-white/20 px-4 py-1.5 rounded-full text-[11px]   mb-6">
      1 click elevenlabs integration
    </span>
    <h4 className="text-[28px] md:text-[34px] font-black leading-tight mb-4">Elevenlabs</h4>
    <p className="text-gray-400 text-sm max-w-[300px] mb-8">
      Create voices & accents or clone your own voice with our ElevenLabs 1 click Integration.
    </p>
    <button className="bg-[#5048E5] text-white px-8 py-3 rounded-2xl flex items-center gap-2 hover:bg-[#4338CA] transition-colors">
      <span>🎙️</span> <a href="/#call">Try a conversation</a>
    </button>
  </div> */}
</div>

      </div>
    </section>
  )
}
