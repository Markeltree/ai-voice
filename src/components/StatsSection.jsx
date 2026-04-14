const cards = [
  {
    stat: '100K+ Minutes Processed Daily',
    title: 'Sales and\nCold Calling',
    desc: 'Sales and Cold Calling Automate outbound phone calls without human reps.',
    bg: '#2D2B3D',
    titleColor: '#ffffff',
    descColor: 'rgba(255,255,255,0.65)',
    badgeBorder: 'rgba(255,255,255,0.35)',
    badgeColor: '#ffffff',
  },
  {
    stat: '50K+ Actions Triggered Daily',
    title: 'Booking and\nReminders',
    desc: 'Booking and Reminders Streamline your appointment booking process.',
    bg: '#2D2B3D',
    titleColor: '#ffffff',
    descColor: 'rgba(255,255,255,0.65)',
    badgeBorder: 'rgba(255,255,255,0.35)',
    badgeColor: '#ffffff',
  },
  {
    stat: '5K+ Support Agents Deployed',
    title: 'Customer\nSupport',
    desc: 'Customer Support: Provide exceptional, 24/7 automated customer support.',
    bg: '#2D2B3D',
    titleColor: '#ffffff',
    descColor: 'rgba(255,255,255,0.65)',
    badgeBorder: 'rgba(255,255,255,0.35)',
    badgeColor: '#ffffff',
  },
]

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="section-wrap">

        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-12">
          <div className="max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] !leading-[1] font-extrabold text-[#1A1A2E] mb-4">
               Replace Call Centers with Smart AI Voice {' '}
              <span className="relative inline-block">
                Agents
                <span className="stats-nocode-badge">No-code</span>
              </span>
            </h2>
            {/* <h2 className="stats-heading">
             
            </h2> */}
            <p className="stats-subtitle">
              Build the perfect AI employee to handle sales, bookings, surveys, and all your customer support with no code or skills.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="stats-card" style={{ background: c.bg }}>
              <span className="stats-stat-pill" style={{ border: `1px solid ${c.badgeBorder}`, color: c.badgeColor }}>
                {c.stat}
              </span>
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="stats-card-title" style={{ color: c.titleColor }}>{c.title}</h3>
                <p className="stats-card-desc" style={{ color: c.descColor }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
