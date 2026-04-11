import { useState } from 'react';
import { BiVoicemail } from 'react-icons/bi';
import { FaDatabase, FaHubspot, FaProjectDiagram } from 'react-icons/fa';
import { MdOutlineCalendarToday, MdOutlineWebhook } from 'react-icons/md';
import { SiN8N, SiOpenai, SiTwilio, SiZapier } from 'react-icons/si';

const row1Data = [
  { 
    id: 'ghl',    
    name: 'GoHighLevel',     
    icon: <FaHubspot className="w-10 h-10 text-blue-600" />, 
    desc: 'Automate call workflows and manage leads with GHL\'s powerful CRM and voice integration.',
    color: 'text-blue-600'
  },
  { 
    id: 'google', 
    name: 'Google Calendar', 
    icon: <MdOutlineCalendarToday className="w-10 h-10 text-green-600" />, 
    desc: 'Sync AI voice agents with Google Calendar for real-time appointment scheduling and booking.',
    color: 'text-green-600'
  },
  { 
    id: 'eleven', 
    name: 'ElevenLabs',      
    icon: <BiVoicemail className="w-10 h-10 text-purple-600" />, 
    desc: 'Generate ultra-realistic human-like voices with ElevenLabs advanced voice synthesis.',
    color: 'text-purple-600'
  },
  { 
    id: 'openai', 
    name: 'OpenAI',          
    icon: <SiOpenai className="w-10 h-10 text-gray-800" />, 
    desc: 'Power voice agents with GPT models for natural conversations and intelligent responses.',
    color: 'text-gray-800'
  },
  { 
    id: 'zapier', 
    name: 'Zapier',          
    icon: <SiZapier className="w-10 h-10 text-orange-500" />, 
    desc: 'Connect voice agents to 6000+ apps and automate workflows without coding.',
    color: 'text-orange-500'
  },
]

const row2Data = [
  { 
    id: 'n8n',     
    name: 'n8n',     
    icon: <SiN8N className="w-10 h-10 text-red-600" />, 
    desc: 'Build custom voice agent workflows with open-source automation and fair-code licensing.',
    color: 'text-red-600'
  },
  { 
    id: 'make',    
    name: 'Make',    
    icon: <FaProjectDiagram className="w-10 h-10 text-blue-500" />, 
    desc: 'Create visual automation scenarios to enhance voice agent capabilities and data flow.',
    color: 'text-blue-500'
  },
  { 
    id: 'twilio',  
    name: 'Twilio',  
    icon: <SiTwilio className="w-10 h-10 text-red-500" />, 
    desc: 'Deploy AI voice agents with Twilio\'s reliable telephony infrastructure and APIs.',
    color: 'text-red-500'
  },
  { 
    id: 'webhook', 
    name: 'Webhook', 
    icon: <MdOutlineWebhook className="w-10 h-10 text-indigo-600" />, 
    desc: 'Integrate voice agents with any external service using custom webhook endpoints.',
    color: 'text-indigo-600'
  },
  { 
    id: 'crms',    
    name: 'CRMs',    
    icon: <FaDatabase className="w-10 h-10 text-teal-600" />, 
    desc: 'Sync voice agent conversations and data with Salesforce, HubSpot, and all major CRMs.',
    color: 'text-teal-600'
  },
]

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

// Updated IconBox component to handle React Icons properly
const IconBox = ({ item }) => (
  <div style={{ width: '64px', height: '64px' }} className="flex-shrink-0 flex items-center justify-center rounded-2xl overflow-hidden">
    {typeof item.icon === 'string' && item.icon === 'Eleven' ? (
      <div className="bg-black text-white w-full h-full rounded-2xl flex items-center justify-center text-[10px] font-bold text-center leading-tight p-2">Eleven<br/>Labs</div>
    ) : (
      <div className="w-full h-full rounded-2xl flex items-center justify-center bg-gray-50">
        {item.icon}
      </div>
    )}
  </div>
)

export default function IntegrationsSection() {
  const [activeRow1, setActiveRow1] = useState('ghl')
  const [activeRow2, setActiveRow2] = useState('n8n')

  const Card = ({ item, isActive, onClick }) => (
    <div
      onClick={onClick}
      className={`relative cursor-pointer rounded-[28px] border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md transition-all duration-400
        /* mobile: full width, stacked */
        w-full p-6
      `}
      style={{
        /* desktop width only */
        ...(typeof window !== 'undefined' && window.innerWidth >= 768
          ? { width: isActive ? '420px' : '250px', height: '190px', transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)' }
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
          <h2 style={{ fontSize: '60px', fontWeight: 600 }} className="text-[#1A1A2E] mb-4 text-[36px] md:text-[60px]">
            Tools We Use to Develop AI Voice Agents
          </h2>
          <p style={{ fontWeight: 400 }} className="text-[#6B7280] text-[16px] md:text-[25px] max-w-2xl mx-auto">
            Our AI voice agent development company uses the most powerful and reliable tools 
            in the industry to build, train, and deploy production-ready voice agents for your business.
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