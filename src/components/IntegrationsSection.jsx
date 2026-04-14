import { useState } from "react";
import { BiVoicemail } from "react-icons/bi";
import { FaDatabase, FaHubspot, FaProjectDiagram } from "react-icons/fa";
import { MdOutlineCalendarToday, MdOutlineWebhook } from "react-icons/md";
import { SiN8N, SiOpenai, SiTwilio, SiZapier } from "react-icons/si";

const allCards = [
  {
    id: "ghl",
    name: "GoHighLevel",
    icon: <FaHubspot className="w-8 h-8 text-blue-600" />,
    desc: "Automate call workflows and manage leads with GHL's powerful CRM and voice integration.",
  },
  {
    id: "google",
    name: "Google Calendar",
    icon: <MdOutlineCalendarToday className="w-8 h-8 text-green-600" />,
    desc: "Sync AI voice agents with Google Calendar for real-time appointment scheduling and booking.",
  },
  {
    id: "eleven",
    name: "ElevenLabs",
    icon: <BiVoicemail className="w-8 h-8 text-purple-600" />,
    desc: "Generate ultra-realistic human-like voices with ElevenLabs advanced voice synthesis.",
  },
  {
    id: "openai",
    name: "OpenAI",
    icon: <SiOpenai className="w-8 h-8 text-gray-800" />,
    desc: "Power voice agents with GPT models for natural conversations and intelligent responses.",
  },
  {
    id: "zapier",
    name: "Zapier",
    icon: <SiZapier className="w-8 h-8 text-orange-500" />,
    desc: "Connect voice agents to 6000+ apps and automate workflows without coding.",
  },
  {
    id: "n8n",
    name: "n8n",
    icon: <SiN8N className="w-8 h-8 text-red-600" />,
    desc: "Build custom voice agent workflows with open-source automation and fair-code licensing.",
  },
  {
    id: "make",
    name: "Make",
    icon: <FaProjectDiagram className="w-8 h-8 text-blue-500" />,
    desc: "Create visual automation scenarios to enhance voice agent capabilities and data flow.",
  },
  {
    id: "twilio",
    name: "Twilio",
    icon: <SiTwilio className="w-8 h-8 text-red-500" />,
    desc: "Deploy AI voice agents with Twilio's reliable telephony infrastructure and APIs.",
  },
  {
    id: "webhook",
    name: "Webhook",
    icon: <MdOutlineWebhook className="w-8 h-8 text-indigo-600" />,
    desc: "Integrate voice agents with any external service using custom webhook endpoints.",
  },
  {
    id: "crms",
    name: "CRMs",
    icon: <FaDatabase className="w-8 h-8 text-teal-600" />,
    desc: "Sync voice agent conversations with Salesforce, HubSpot, and all major CRMs.",
  },
];

const row1Data = allCards.slice(0, 5);
const row2Data = allCards.slice(5);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

/* Card used in grid layouts (mobile / tablet / medium-desktop) */
const GridCard = ({ item }) => (
  <div className="rounded-[20px] border border-[#E5E7EB] bg-white shadow-sm p-5 flex flex-col gap-3">
    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
      {item.icon}
    </div>
    <div>
      <p className="text-[#1A1A2E] font-semibold text-[15px] mb-1">
        {item.name}
      </p>
      <p className="text-[#6B7280] text-[13px] leading-snug">{item.desc}</p>
    </div>
  </div>
);

/* Card used in the xl+ expand-row layout */
const ExpandCard = ({ item, isActive, onClick }) => (
  <div
    onClick={onClick}
    className="relative cursor-pointer rounded-[28px] border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md flex flex-col justify-between"
    style={{
      width: isActive ? "420px" : "250px",
      height: "190px",
      padding: "24px",
    }}
  >
    <div
      className={`flex w-full ${isActive ? "flex-row items-start gap-4" : "flex-col items-center"}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0">
        {item.icon}
      </div>
      {isActive && (
        <p className="text-[#6B7280] text-[16px] leading-snug mt-1">
          {item.desc}
        </p>
      )}
    </div>
    <div
      className={`flex items-center gap-2 mt-4 ${isActive ? "justify-between" : "justify-center"}`}
    >
      <span className="text-[#1A1A2E] font-medium text-[18px] whitespace-nowrap">
        {item.name}
      </span>
      <div
        className={`w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0 ${isActive ? "absolute bottom-6 right-6" : ""}`}
      >
        <ArrowIcon />
      </div>
    </div>
  </div>
);

export default function IntegrationsSection() {
  const [activeRow1, setActiveRow1] = useState("ghl");
  const [activeRow2, setActiveRow2] = useState("n8n");

  return (
    <section className="bg-[#EDEFFE] py-16 md:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] !leading-[1] font-semibold text-[#1A1A2E] mb-4">
            Tools We Use to Develop AI Voice Agents
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto font-normal">
            Our AI voice agent development company uses the most powerful and
            reliable tools in the industry to build, train, and deploy
            production-ready voice agents for your business.
          </p>
        </div>

        {/* Mobile: 1 column  (<768px) */}
        <div className="grid grid-cols-1 gap-3 md:hidden">
          {allCards.map((item) => (
            <GridCard key={item.id} item={item} />
          ))}
        </div>

        {/* Tablet: 2 columns  (768px – 1023px) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
          {allCards.map((item) => (
            <GridCard key={item.id} item={item} />
          ))}
        </div>

        {/* Medium desktop: 3 columns  (1024px – 1279px) */}
        <div className="hidden lg:grid xl:hidden grid-cols-3 gap-4">
          {allCards.map((item) => (
            <GridCard key={item.id} item={item} />
          ))}
        </div>

        {/* Large desktop: expand rows  (1280px+) */}
        <div className="hidden xl:flex flex-col gap-5">
          <div className="flex flex-row gap-4 justify-center w-full">
            {row1Data.map((item) => (
              <ExpandCard
                key={item.id}
                item={item}
                isActive={activeRow1 === item.id}
                onClick={() => setActiveRow1(item.id)}
              />
            ))}
          </div>
          <div className="flex flex-row gap-4 justify-center w-full">
            {row2Data.map((item) => (
              <ExpandCard
                key={item.id}
                item={item}
                isActive={activeRow2 === item.id}
                onClick={() => setActiveRow2(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
