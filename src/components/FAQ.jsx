import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const faqData = [
  { question: "Do I need to install any software to use CallFluent AI?",            answer: "No installation needed! CallFluent AI is a 100% cloud-based platform. This means you can access it instantly from any device with an internet connection – anytime, anywhere – with no downloads or complex setup required." },
  { question: "How can CallFluent AI improve my sales calls?",                       answer: "Our AI agents are trained on high-converting sales scripts and can handle lead qualification, appointment setting, and follow-ups 24/7 without fatigue." },
  { question: "How does CallFluent AI enhance customer support?",                    answer: "It provides instant responses to common queries, reduces wait times to zero, and can escalate complex issues to human agents seamlessly." },
  { question: "Is CallFluent AI effective for E-commerce businesses?",              answer: "Absolutely. It can handle order tracking inquiries, process returns, and even suggest products based on customer preferences." },
  { question: "I run a local business. Can CallFluent AI still help me?",           answer: "Yes, it's perfect for local services like dental clinics or law firms to manage bookings and answer basic service questions after hours." },
  { question: "Does CallFluent AI work on Mac, Windows, or other operating systems?", answer: "Since it is web-based, it works perfectly on any OS via a modern web browser like Chrome, Safari, or Edge." },
  { question: "How easily does CallFluent AI integrate with my existing tools?",    answer: "We offer native integrations with popular CRMs and Zapier support to connect with thousands of other business tools." },
  { question: "How much control do I have over the AI agent's behavior and scripts?", answer: "You have full control. You can customize the tone, personality, and specific logic the AI follows during every interaction." },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#f8f9ff]">
      <div className="section-wrap">

        <div className="text-center mb-12">
          <h2 className="faq-heading mb-6">
            Your Questions Answered: Unlock the<br className="hidden md:block" /> Power of CallFluent AI
          </h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto">
            Curious about how CallFluent AI can elevate your customer interactions and boost your bottom line?
            Find clear answers to common questions below and learn how our intelligent voice AI makes
            sophisticated communication simple and effective.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-5">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7 md:px-10 md:py-8 text-left hover:bg-slate-50/50 transition-colors"
              >
                <span className={`text-xl font-semibold ${openIndex === index ? 'text-slate-900' : 'text-slate-700'}`}>
                  {item.question}
                </span>
                <div className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <div className="bg-slate-500 rounded-full p-1.5 text-white"><X size={16} strokeWidth={3} /></div>
                  ) : (
                    <div className="bg-slate-200 rounded-full p-1.5 text-slate-500"><Plus size={16} strokeWidth={3} /></div>
                  )}
                </div>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-5 pt-0 sm:px-8 sm:pb-7 md:px-10 md:pb-8 text-slate-500 text-[14px] sm:text-base md:text-lg leading-relaxed border-t border-slate-50">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
