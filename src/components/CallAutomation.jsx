const features = [
  { 
    title: "Real-Time Text Messaging", 
    description: "Enhance interactions with instant messages.", 
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968771.png" // Example Flaticon URL
  },
  { 
    title: "Call Forwarding", 
    description: "Real-time, direct calls to relevant team members.", 
    icon: "https://cdn-icons-png.flaticon.com/512/483/483947.png" 
  },
  { 
    title: "Send Emails During Calls", 
    description: "Enhance communication with real-time, detailed follow-ups.", 
    icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png" 
  },
  { 
    title: "Simplified Widget Setup", 
    description: "Quick integration using our customisable & efficient widget system.", 
    icon: "https://cdn-icons-png.flaticon.com/512/5994/5994831.png" 
  },
  { 
    title: "Low Latency Responses", 
    description: "Experience quick responses with 500 ms latency.", 
    icon: "https://cdn-icons-png.flaticon.com/512/11649/11649580.png" 
  },
  { 
    title: "1-Click Call Recordings", 
    description: "Record calls with a single click for easy tracking and insights.", 
    icon: "https://cdn-icons-png.flaticon.com/512/2618/2618245.png" 
  },
  { 
    title: "Global Language Support", 
    description: "Enable communication across a range of languages. Available in 30 languages.", 
    icon: "https://cdn-icons-png.flaticon.com/512/814/814513.png" 
  },
  { 
    title: "Wide Voice Range", 
    description: "Access over 400 voices for diverse requirements.", 
    icon: "https://cdn-icons-png.flaticon.com/512/3293/3293603.png" 
  },
  { 
    title: "Advanced Call Summary", 
    description: "Easily analyze and review call type, call summary and sentiment analysis.", 
    icon: "https://cdn-icons-png.flaticon.com/512/3557/3557635.png" 
  },
  { 
    title: "Collaborate in Workspaces", 
    description: "Enhance teamwork with organized collaboration.", 
    icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png" 
  },
  { 
    title: "Send and Receive Data", 
    description: "Collect caller data during calls and send it to any platform efficiently.", 
    icon: "https://cdn-icons-png.flaticon.com/512/2885/2885417.png" 
  },
]

export default function CallAutomation() {
  return (
    <section className="bg-[#f8f9ff] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="flex flex-col justify-center p-6">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              smarter<br />conversations<br />effortless
            </h2>
            <p className="text-indigo-600 font-semibold mt-2 uppercase tracking-wider text-sm">
              call automations
            </p>
          </div>

          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {/* Flaticon Image Tag */}
                <img 
                  src={feature.icon} 
                  alt={feature.title} 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}