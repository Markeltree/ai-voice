import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    question:
      "Do I have to install any software to use your AI voice agent development services?",
    answer:
      "No installation needed. Our AI voice agent development company is based on a 100% cloud-based platform. It can be accessed immediately from any device with an internet connection (Mac, Windows, iOS, Android), and no downloads or complicated configuration are required.",
  },
  {
    question: "How does your AI voice agent sound human?",
    answer:
      "We have 400+ neural AI voices, 140 different accents and variants, and sub-500ms response latency. The effect is a natural conversational flow that the callers frequently believe is of a human being. Our one-click ElevenLabs integration is also capable of cloning your own voice.",
  },
  {
    question:
      "What is the best way AI voice agent development services can enhance my sales calls?",
    answer:
      "We have our AI voice agents that do all outbound sales calls, including introduction and qualification, objection handling, and booking. They scale the dial, never grow weary, never forget their script, and deliver warm leads to your human team, already full-context captured.",
  },
  {
    question:
      "What is the benefit of AI voice agent development in customer support?",
    answer:
      "Your AI voice agent will respond immediately, 24/7, 365 days a year, instead of holding the customers. It answers typical questions based on your knowledge base uploads, sends follow-up emails or SMS during the call, and only forwards the cases that really require human intervention.",
  },
  {
    question:
      "Does the development of AI voice agents work in the e-commerce business?",
    answer:
      "Absolutely. AI voice agents automatically process order status questions, returns, trades, shipping queries, etc, decreasing the number of tickets and making the customer happy without increasing the headcount.",
  },
  {
    question:
      "I am a local business owner. Still, can your voice agent development services aid me in the development of AI?",
    answer:
      "Yes. Local companies gain immensely when AI voice agents that receive calls outside working hours make appointments, receive messages, and automatically make calls on leads. You will never miss a call from a customer on the weekend or during holidays.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#f8f9ff]">
      <div className="section-wrap">
        <div className="text-center mb-12">
          <h2 className="faq-heading mb-6">
            Are You Ready to Roll Out Your AI Voice Agent?
          </h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto">
            Please give us the details of your business, and we will respond to
            you within one business day with regards to the development of our
            AI voice agent. A single agent or a fully automated call center, we
            have it covered.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-5">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7 md:px-10 md:py-8 text-left hover:bg-slate-50/50 transition-colors"
              >
                <span
                  className={`text-xl font-semibold ${openIndex === index ? "text-slate-900" : "text-slate-700"}`}
                >
                  {item.question}
                </span>
                <div className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <div className="bg-slate-500 rounded-full p-1.5 text-white">
                      <X size={16} strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="bg-slate-200 rounded-full p-1.5 text-slate-500">
                      <Plus size={16} strokeWidth={3} />
                    </div>
                  )}
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-5 pb-5 pt-0 sm:px-8 sm:pb-7 md:px-10 md:pb-8 text-slate-500 text-[14px] sm:text-base md:text-lg leading-relaxed border-t border-slate-50">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
