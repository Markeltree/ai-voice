import { useState } from 'react';

const ContactSection = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [formData, setFormData] = useState({
    recordings: true,
    scriptEnabled: false
  })

  const Step1 = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-1">
          <label className="block   text-sm text-[#333]">Name*</label>
          <p className="text-gray-400 text-[11px]">What name will your assistant go by</p>
          <input type="text" placeholder="your agent name goes here" className="w-full p-3 bg-[#F9FAFF] border border-gray-100 rounded-xl outline-none" />
        </div>
        <div className="space-y-1">
          <label className="block   text-sm text-[#333]">Language*</label>
          <p className="text-gray-400 text-[11px]">Select the language your agent will understand</p>
          <select className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none appearance-none cursor-pointer">
            <option>🇬🇧 English</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="block   text-sm text-[#333]">Phone number*</label>
          <p className="text-gray-400 text-[11px]">Attach a phone number to your agent</p>
          <input type="text" placeholder="your agent phone number" className="w-full p-3 bg-[#F9FAFF] border border-gray-100 rounded-xl outline-none" />
        </div>
        <div className="space-y-1">
          <label className="block   text-sm text-[#333]">Voice*</label>
          <p className="text-gray-400 text-[11px]">Select what voice your agent will use</p>
          <select className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none appearance-none cursor-pointer">
            <option>▶️ Male - Friendly and expressive</option>
          </select>
        </div>
      </div>
      <div className="space-y-1 mb-8">
        <label className="block   text-sm text-[#333]">Welcome message*</label>
        <p className="text-gray-400 text-[11px]">This is the first message user will see when opening the chat widget.</p>
        <textarea rows="3" className="w-full p-3 bg-[#F9FAFF] border border-gray-100 rounded-xl outline-none resize-none" defaultValue="Hey, this is Nick from Callfluent AI"></textarea>
      </div>
      <div className="flex items-center justify-between p-4 border border-dashed border-gray-300 rounded-2xl mb-8 bg-[#FCFDFF]">
        <div>
          <h4 className="  text-sm text-[#333]">Call recordings</h4>
          <p className="text-gray-400 text-[11px]">Toggle to record calls for playback and easy review in the logs.</p>
        </div>
        <div onClick={() => setFormData({ ...formData, recordings: !formData.recordings })} className={`w-12 h-6 rounded-full flex items-center px-1 cursor-pointer transition-colors ${formData.recordings ? 'bg-[#5831D8]' : 'bg-gray-300'}`}>
          <div className={`bg-white w-4 h-4 rounded-full shadow-md transition-transform ${formData.recordings ? 'translate-x-6' : 'translate-x-0'}`} />
        </div>
      </div>
      <div className="text-right">
        <button onClick={() => setActiveStep(2)} className="bg-[#5831D8] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#4626B0] transition-all">Save & continue to step 2</button>
      </div>
    </div>
  )

  const Step2 = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-1">
          <label className="block   text-sm">Agent type*</label>
          <p className="text-gray-400 text-[11px]">Select what will this agent do for you</p>
          <select className="w-full p-3 border border-gray-200 rounded-xl outline-none appearance-none cursor-pointer">
            <option>Sales representative</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="block   text-sm">Tone*</label>
          <p className="text-gray-400 text-[11px]">Select the tone of your agent</p>
          <select className="w-full p-3 border border-gray-200 rounded-xl outline-none appearance-none cursor-pointer">
            <option>Professional</option>
          </select>
        </div>
      </div>
      <div className="space-y-1 mb-6">
        <label className="block   text-sm">Instructions*</label>
        <p className="text-gray-400 text-[11px]">Instruct your agent and provide him information that he can use during his phone calls</p>
        <textarea rows="3" className="w-full p-3 bg-[#F9FAFF] border border-gray-100 rounded-xl outline-none resize-none" defaultValue="Your name is Nick and you're during a phone call conversation!"></textarea>
      </div>
      <div className="space-y-1 mb-8">
        <div className="flex justify-between items-center">
          <label className="block   text-sm">Script</label>
          <div onClick={() => setFormData({ ...formData, scriptEnabled: !formData.scriptEnabled })} className={`w-12 h-6 rounded-full flex items-center px-1 cursor-pointer ${formData.scriptEnabled ? 'bg-[#5831D8]' : 'bg-gray-300'}`}>
            <div className={`bg-white w-4 h-4 rounded-full transition-transform ${formData.scriptEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
          </div>
        </div>
        <p className="text-gray-400 text-[11px] mb-2">Toggle if you want your agent to follow a sales script during the conversation.</p>
        <div className="bg-[#F9FAFF] p-4 rounded-xl border border-gray-100 text-sm text-gray-600 space-y-3">
          <p>Hey, Before we dive in, I'd love to learn a bit more about your business. What industry or niche do you operate in?</p>
          <p>That's great! And how are you currently managing your customer support and sales calls?</p>
        </div>
      </div>
      <div className="text-right">
        <button onClick={() => setActiveStep(3)} className="bg-[#5831D8] text-white px-6 py-3 rounded-xl font-semibold text-sm">Embed your agent</button>
      </div>
    </div>
  )

  const Step3 = () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <label className="block   text-sm">Embed code</label>
        <p className="text-gray-400 text-[11px]">Embed your Callfluent agent widget on your website</p>
        <div className="relative group">
          <div className="w-full p-4 bg-[#F9FAFF] border border-gray-100 rounded-xl blur-[2px] text-xs font-mono overflow-hidden">
            &lt;script src="https://api.callfluent.ai/scriptaddagent99127.js?id=123***39"&gt;&lt;/script&gt;
          </div>
          <button className="absolute inset-0 m-auto w-fit h-fit bg-[#5831D8] text-white px-4 py-1.5 rounded-lg text-xs font-semibold">Sign up to reveal</button>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 border border-gray-100 rounded-xl bg-[#F9FAFF]">
        <div>
          <h4 className="  text-sm">Email field</h4>
          <p className="text-gray-400 text-[11px]">Include email field in the webform (optional)</p>
        </div>
        <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center px-1 cursor-pointer"><div className="bg-white w-4 h-4 rounded-full" /></div>
      </div>
      <div className="space-y-2">
        <label className="block   text-sm">Webhook endpoint</label>
        <div className="relative group">
          <div className="w-full p-4 bg-[#F9FAFF] border border-gray-100 rounded-xl blur-[2px] text-xs font-mono">
            https://api.callfluent.ai/api/call-api/5123***
          </div>
          <button className="absolute inset-0 m-auto w-fit h-fit bg-[#5831D8] text-white px-4 py-1.5 rounded-lg text-xs font-semibold">Sign up to reveal</button>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <label className="block  ">Webhook field mapping</label>
        <div className="text-gray-500 space-y-1">
          <p><strong>name</strong> required field, field name: name, type: text</p>
          <p><strong>phone_number</strong> required field, field name: phone_number, type: phone number</p>
          <p><strong>email</strong> optional field, field name: email, type: text</p>
        </div>
      </div>
      <button className="w-full bg-[#5831D8] text-white py-4 rounded-xl   text-lg mt-4 shadow-lg shadow-purple-200">Sign up now</button>
    </div>
  )

  return (
    <section className="bg-[#F4F7FF]">
      <div className="section-wrap">

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-black text-[#1A1A1A] leading-tight">
                Build conversational <br /> agents in minutes
                <span className="ml-3 bg-[#5831D8] text-white text-[12px] px-3 py-1 rounded-full   align-middle">No-code</span>
              </h1>
              <p className="text-gray-500 mt-2 text-sm font-medium">Get started in 3 simple steps using our no-code agent builder.</p>
            </div>
          </div>

          <div className="bg-white rounded-full p-1.5 flex justify-between items-center mb-10 shadow-sm border border-gray-100">
            <button onClick={() => setActiveStep(1)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full transition-all text-sm   ${activeStep === 1 ? 'bg-[#EEF1FF] text-[#5831D8]' : 'text-gray-400'}`}>
              <span className={`w-2 h-2 rounded-full ${activeStep >= 1 ? 'bg-[#5831D8]' : 'bg-gray-300'}`}></span>
              Agent config
            </button>
            <button onClick={() => setActiveStep(2)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full transition-all text-sm   ${activeStep === 2 ? 'bg-[#EEF1FF] text-[#5831D8]' : 'text-gray-400'}`}>
              <span className={`w-4 h-4 flex items-center justify-center rounded-full border-2 ${activeStep >= 2 ? 'border-[#5831D8] bg-[#5831D8]' : 'border-gray-200'}`}>
                {activeStep > 2 && <span className="text-white text-[10px]">✓</span>}
              </span>
              Customize Behavior
            </button>
            <button onClick={() => setActiveStep(3)} className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full transition-all text-sm   ${activeStep === 3 ? 'bg-[#EEF1FF] text-[#5831D8]' : 'text-gray-400'}`}>
              <span className={`w-4 h-4 rounded-full border-2 ${activeStep === 3 ? 'border-[#5831D8]' : 'border-gray-200'}`}></span>
              Add to your website
            </button>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-400 text-[10px] uppercase   tracking-widest">New outbound agent</p>
            <h2 className="text-lg font-black mt-1">
              Step {activeStep} - {activeStep === 1 ? 'Agent configuration' : activeStep === 2 ? 'Customize Behavior' : 'Add to your website'}
            </h2>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-white">
            {activeStep === 1 && <Step1 />}
            {activeStep === 2 && <Step2 />}
            {activeStep === 3 && <Step3 />}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ContactSection
