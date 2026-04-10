import { useState } from 'react';
import tool1 from "../assets/images/tool-img-01.svg"
import tool2 from "../assets/images/tool-img-02.svg"
import tool3 from "../assets/images/tool-img-03.svg"
import tool4 from "../assets/images/tool-img-04.svg"
import tool5 from "../assets/images/tool-img-05.svg"

const row1Data = [
  { id: 'ghl',    name: 'GoHighLevel',     icon: tool1, desc: 'Schedule meetings in real-time with GHL Calendar.' },
  { id: 'google', name: 'Google Calendar', icon: tool2, desc: 'Real-time appointment booking in Google Calendar.' },
  { id: 'eleven', name: 'Elevenlabs',      icon: 'Eleven', desc: 'Import all your ElevenLabs voices with one click.' },
  { id: 'openai', name: 'OpenAI',          icon: tool3, desc: 'Integrate with ChatGPT for advanced reasoning.' },
  { id: 'zapier', name: 'Zapier',          icon: tool4, desc: 'Connect with 3000+ apps instantly via Zapier.' },
]

const row2Data = [
  { id: 'n8n',     name: 'n8n',     icon: tool5, desc: 'Self-hosted workflow automation.' },
  { id: 'make',    name: 'Make',    icon: tool3, desc: 'Automate tasks and exchange data with Make.' },
  { id: 'twilio',  name: 'Twilio',  icon: tool2, desc: 'Global telephony infrastructure.' },
  { id: 'webhook', name: 'Webhook', icon: tool3, desc: 'Data transfer between platforms via webhooks.' },
  { id: 'crms',    name: 'CRMs',    icon: tool4, desc: 'Sync your customer data across all CRMs.' },
]

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

const IconBox = ({ item }) => (
  <div style={{ width: '64px', height: '64px' }} className="flex-shrink-0 flex items-center justify-center rounded-2xl overflow-hidden">
    {item.icon === 'Eleven' ? (
      <div className="bg-black text-white w-full h-full rounded-2xl flex items-center justify-center text-[10px] font-bold text-center leading-tight p-2">Eleven<br/>Labs</div>
    ) : (
      <img src={item.icon} alt={item.name} style={{ width: '64px', height: '64px' }} className="object-contain" />
    )}
  </div>
)

export default function IntegrationsSection() {
  const [activeRow1, setActiveRow1] = useState('ghl')
  const [activeRow2, setActiveRow2] = useState('make')

  const Card = ({ item, isActive, onClick }) => (
    <div
      onClick={onClick}
      className={`relative cursor-pointer rounded-[28px] border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md transition-all duration-400
        /* mobile: full width, stacked */
        w-full p-6
        /* desktop: fixed width, side by side */
        md:p-8
      `}
      style={{
        /* desktop width only */
        ...(typeof window !== 'undefined' && window.innerWidth >= 768
          ? { width: isActive ? '420px' : '185px', height: '190px', transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)' }
          : {}
        )
      }}
    >
      {/* MOBILE layout */}
      <div className="flex md:hidden flex-col gap-4">
        <div className={`flex ${isActive ? 'flex-row items-start gap-4' : 'flex-col items-center'}`}>
          <IconBox item={item} />
          {isActive && (
            <p className="text-[#6B7280] text-[15px] leading-snug mt-1">{item.desc}</p>
          )}
        </div>
        <div className={`flex items-center gap-2 ${isActive ? 'justify-between' : 'justify-center'}`}>
          <span className="text-[#1A1A2E] font-medium text-[18px]">{item.name}</span>
          <div className={`w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 ${isActive ? 'rotate-180' : ''}`}>
            <ArrowIcon />
          </div>
        </div>
      </div>

      {/* DESKTOP layout */}
      <div className="hidden md:flex flex-col justify-between h-full">
        <div className={`flex w-full ${isActive ? 'flex-row items-start gap-4' : 'flex-col items-center'}`}>
          <IconBox item={item} />
          {isActive && (
            <p className="text-[#6B7280] text-[17px] leading-snug mt-1">{item.desc}</p>
          )}
        </div>
        <div className={`flex items-center gap-2 mt-4 ${isActive ? 'justify-between' : 'justify-center'}`}>
          <span className="text-[#1A1A2E] font-medium text-[20px] whitespace-nowrap">{item.name}</span>
          <div className={`w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 ${isActive ? 'rotate-180 absolute bottom-6 right-6' : ''}`}>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="bg-[#F9FAFB] py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">

        <div className="text-center mb-12 md:mb-16">
          <h2 style={{ fontSize: '60px', fontWeight: 600 }} className="text-[#1A1A2E] mb-4 text-[36px] md:text-[60px]">Connect your tools</h2>
          <p style={{ fontWeight: 400 }} className="text-[#6B7280] text-[16px] md:text-[25px] max-w-2xl mx-auto">
            Connect your voice agents to any platform with ease using our no-code integration tools, webhooks and forms
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Mobile: single column list */}
          <div className="flex flex-col gap-3 md:hidden">
            {[...row1Data, ...row2Data].map((item) => {
              const isActive = activeRow1 === item.id || activeRow2 === item.id
              return (
                <Card
                  key={item.id}
                  item={item}
                  isActive={isActive}
                  onClick={() => {
                    if (row1Data.find(r => r.id === item.id)) setActiveRow1(item.id)
                    else setActiveRow2(item.id)
                  }}
                />
              )
            })}
          </div>

          {/* Desktop: two rows side by side */}
          <div className="hidden md:flex flex-col gap-5">
            <div className="flex flex-row gap-4 justify-center w-full">
              {row1Data.map((item) => (
                <Card key={item.id} item={item} isActive={activeRow1 === item.id} onClick={() => setActiveRow1(item.id)} />
              ))}
            </div>
            <div className="flex flex-row gap-4 justify-center w-full">
              {row2Data.map((item) => (
                <Card key={item.id} item={item} isActive={activeRow2 === item.id} onClick={() => setActiveRow2(item.id)} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
