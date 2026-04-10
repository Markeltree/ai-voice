import { useState } from 'react'

const tabImages = {
  'call-history':      'https://callfluent.com/wp-content/themes/callfluent/images/tab-dashboard.svg',
  'advanced-settings': 'https://callfluent.com/wp-content/themes/callfluent/images/tab-dashboard-2.svg',
  'realtime-actions':  'https://callfluent.com/wp-content/themes/callfluent/images/tab-dashboard.svg',
  'api-forms':         'https://callfluent.com/wp-content/themes/callfluent/images/tab-dashboard-2.svg',
}

const tabs = [
  {
    id: 'call-history', label: 'Call history',
    icon: <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  },
  {
    id: 'advanced-settings', label: 'Advanced Settings',
    icon: <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>,
  },
  {
    id: 'realtime-actions', label: 'Realtime Actions',
    icon: <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  {
    id: 'api-forms', label: 'API & Forms',
    icon: <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  },
]

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState('call-history')

  return (
    <section className="bg-white">
      <div className="section-wrap">

        <div className="text-center mb-10 usecase-heading-section">
          <h2 className="usecase-heading">Advanced tools for seamless workflows</h2>
          <p className="usecase-text mt-3 text-base max-w-lg mx-auto leading-relaxed">
            Enhance your call handling capabilities with our robust tools designed
            for effortless integration and operation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-1 mb-8">
          {tabs.map((t) => {
            const isActive = activeTab === t.id
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-3 px-8 py-6 rounded-[30px] font-semibold text-base transition-all duration-300 ${isActive ? 'tab-btn-active' : 'tab-btn-inactive'}`}
              >
                <span className={isActive ? 'opacity-100' : 'opacity-50'}>{t.icon}</span>
                {t.label}
              </button>
            )
          })}
        </div>

        <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
          {Object.entries(tabImages).map(([id, src]) => (
            <img
              key={id}
              src={src}
              alt={id}
              className={`w-full h-auto object-cover transition-opacity duration-300 ${activeTab === id ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
