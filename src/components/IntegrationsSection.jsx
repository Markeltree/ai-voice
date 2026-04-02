import { useState } from 'react';
import tool1 from "../assets/images/tool-img-01.svg"
import tool2 from "../assets/images/tool-img-02.svg"
import tool3 from "../assets/images/tool-img-03.svg"
import tool4 from "../assets/images/tool-img-04.svg"
import tool5 from "../assets/images/tool-img-05.svg"

const row1Data = [
  { id: 'ghl',    name: 'GoHighLevel',     icon: tool1,    desc: 'Schedule meetings in real-time with GHL Calendar.' },
  { id: 'google', name: 'Google Calendar', icon: tool2,    desc: 'Real-time appointment booking in Google Calendar.' },
  { id: 'eleven', name: 'Elevenlabs',      icon: 'Eleven', desc: 'Import all your ElevenLabs voices with one click.' },
  { id: 'openai', name: 'OpenAI',          icon: tool3,    desc: 'Integrate with ChatGPT for advanced reasoning.' },
  { id: 'zapier', name: 'Zapier',          icon: tool4,    desc: 'Connect with 3000+ apps instantly via Zapier.' },
]

const row2Data = [
  { id: 'n8n',     name: 'n8n',     icon: tool5, desc: 'Self-hosted workflow automation.' },
  { id: 'make',    name: 'Make',    icon: tool3, desc: 'Visual automation platform.' },
  { id: 'twilio',  name: 'Twilio',  icon: tool2, desc: 'Global telephony infrastructure.' },
  { id: 'webhook', name: 'Webhook', icon: tool3, desc: 'Data transfer between platforms via webhooks.' },
  { id: 'crms',    name: 'CRMs',    icon: tool4, desc: 'Sync your customer data across all CRMs.' },
]

export default function IntegrationsSection() {
  const [activeRow1, setActiveRow1] = useState('ghl')
  const [activeRow2, setActiveRow2] = useState('webhook')

  const Card = ({ item, isActive, onClick }) => (
    <div
      onClick={onClick}
      className={`integration-card ${isActive ? 'integration-card-active' : 'integration-card-inactive'}`}
    >
      <div className={`integration-icon-wrap ${isActive ? 'integration-icon-active' : 'integration-icon-inactive'}`}>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gray-50 flex items-center justify-center shadow-inner border border-gray-100">
          {item.icon === 'Eleven' ? (
            <span className="text-[9px] md:text-[10px]   text-[#1A1A2E]">ElevenLabs</span>
          ) : (
            <img src={item.icon} alt={item.name} className="w-7 h-7 md:w-8 md:h-8 object-contain" />
          )}
        </div>
      </div>

      <div className={`integration-text-wrap ${isActive ? 'text-left' : 'text-center mt-3'}`}>
        {isActive && (
          <p className="text-[11px] md:text-[12px] text-gray-500 leading-snug mb-2 max-w-[130px] md:max-w-[150px]">
            {item.desc}
          </p>
        )}
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-xs md:text-sm   text-[#1A1A2E]">{item.name}</span>
          {!isActive && (
            <div className="w-3.5 h-3.5 rounded-full border border-gray-200 flex items-center justify-center text-[7px] text-gray-400">→</div>
          )}
        </div>
      </div>

      {isActive && (
        <div className="absolute bottom-4 right-6">
          <div className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-[9px] text-gray-400 rotate-180">→</div>
        </div>
      )}
    </div>
  )

  return (
    <section className="bg-white overflow-hidden">
      <div className="section-wrap">

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A2E] mb-4">Connect your tools</h2>
          <p className="text-[#6B7280] text-sm md:text-base">Connect your voice agents to any platform with ease.</p>
        </div>

        {/* Row 1 */}
        <div className="integration-row mb-4">
          {row1Data.map((item) => (
            <Card key={item.id} item={item} isActive={activeRow1 === item.id} onClick={() => setActiveRow1(item.id)} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="integration-row">
          {row2Data.map((item) => (
            <Card key={item.id} item={item} isActive={activeRow2 === item.id} onClick={() => setActiveRow2(item.id)} />
          ))}
        </div>

      </div>
    </section>
  )
}
