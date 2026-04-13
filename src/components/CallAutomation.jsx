const features = [
  { 
    title: "Sales Agent", 
    description: "Our AI voice agent development firm creates intelligent sales agents who prospect, pitch, and close 24/7. Outbound sales operations can be scaled in no time with AI voice agent development services that never go on leave.", 
    icon: "https://cdn-icons-png.flaticon.com/512/3214/3214746.png" // Professional Growth/Sales Icon
  },
  { 
    title: "Appointment Scheduler", 
    description: "Let no more bookings fall through the cracks. Smart appointment scheduling agents are services we offer in our AI voice agent development, which validate availability, confirm slots, issue reminders, and manage rescheduling in real-time during the call.", 
    icon: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png" // Calendar/Clock Icon
  },
  { 
    title: "Support / Customer Care", 
    description: "Provide superior customer service 24/7, 7 days a week, without increasing the number of employees. Our AI voice agent development agency implements intelligent support agents that are trained on your FAQs, SOPs, and product documentation", 
    icon: "https://cdn-icons-png.flaticon.com/512/1067/1067566.png" // Headset/Support Icon
  },
  { 
    title: "Inquiries", 
    description: "Answer all incoming calls immediately: no hold time, no calls missed, and no angry customers. Our AI voice agent development services drive inquiry agents to respond to product questions, pricing questions, availability queries, and general information queries using your uploaded knowledge base.", 
    icon: "https://cdn-icons-png.flaticon.com/512/471/471663.png" // Information/Inquiry Icon
  },
  { 
    title: "Reception", 
    description: "Get a professional front desk in your business that does not clock out. Our AI voice agent development is a company that creates virtual receptionist agents that welcome callers. Send them to the appropriate department or team member; take comprehensive messages; and call forwarding, all in a natural and non-robotic manner. ", 
    icon: "https://cdn-icons-png.flaticon.com/512/13605/13605030.png" // Front Desk/Receptionist Icon
  }
]

export default function CallAutomation() {
  return (
    <section className="bg-[#f8f9ff]">
      <div className="section-wrap px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="flex flex-col justify-center p-6">
            <h2 className="text-[36px] sm:text-[48px] md:text-[60px] font-[600] text-slate-900 leading-tight">
             Powerful AI Voice Agent Solutions
            </h2>
            <p className="mt-2 uppercase tracking-wider">
              Built for Growth
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