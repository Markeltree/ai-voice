import michaelAvatar from '../assets/images/testi10.png'

const StarIcon = () => (
  <svg className="w-4 h-4" fill="#22c55e" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const cards = [
  {
    stat: '100k+ minutes processed daily',
    title: 'Sales and\nCold Calling',
    desc: 'Automate outbound phone calls without human reps.',
    bg: '#D8B4FE',
    titleColor: '#1A0533',
    descColor: '#4B2D6E',
    badgeBorder: 'rgba(80,72,229,0.35)',
    badgeColor: '#1A0533',
  },
  {
    stat: '> 50K actions triggered daily',
    title: 'Booking and\nReminders',
    desc: 'Streamline your appointment booking process.',
    bg: '#5048E5',
    titleColor: '#ffffff',
    descColor: 'rgba(255,255,255,0.75)',
    badgeBorder: 'rgba(255,255,255,0.4)',
    badgeColor: '#ffffff',
  },
  {
    stat: '> 5K support agents deployed',
    title: 'Customer\nSupport',
    desc: 'Provide exceptional, 24/7 automated customer support.',
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
          <div className="max-w-xl">
            <h2 className="stats-heading">
              Automate your call
              processes with{' '}
              <span className="relative inline-block">
                AI
                <span className="stats-nocode-badge">No-code</span>
              </span>
            </h2>
            <p className="stats-subtitle">
              Build the perfect AI employee to handle sales, bookings, surveys
              and all your customer support with no code or skills.
            </p>
          </div>

          <div className="flex flex-col gap-2 max-w-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src={michaelAvatar} alt="Michael Levitt" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="stats-author-name">Michael Levitt</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
              </div>
            </div>
            <p className="stats-author-quote">
              Callfluent is like having a powerhouse sales and support team working 24/7 - without missing a beat.
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
