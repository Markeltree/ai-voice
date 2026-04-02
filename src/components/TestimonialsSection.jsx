const testimonials = [
  {
    name: 'Michael Levitt', role: 'CEO, Sales Agency', initials: 'ML', color: '#5048E5', stars: 5,
    text: '"Callfluent gave us a powerhouse sales and support team working 24/7. Our cost-per-call dropped by 80% and we\'re closing deals even while we sleep. Absolutely game-changing."',
  },
  {
    name: 'Carlos Lunardini', role: 'Founder, Marketing Firm', initials: 'CL', color: '#7C3AED', stars: 5,
    text: '"I\'ve tried every AI calling tool out there. Callfluent is by far the best one I\'ve used. The voice quality, setup flow, and integration options are in a completely different league."',
  },
  {
    name: 'James Moss', role: 'Operations Manager', initials: 'JM', color: '#98DB1D', stars: 5,
    text: '"The support team responds in minutes, not days. Every time I\'ve had a question or needed a custom setup, they\'ve been right there. The product itself is phenomenal too."',
  },
]

const StarIcon = () => (
  <svg className="w-4 h-4" fill="#F59E0B" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const TrustpilotIcon = () => (
  <svg width="90" height="22" viewBox="0 0 111 27" fill="none">
    <text x="0" y="20" fontSize="14" fontWeight="700" fill="#00B67A" fontFamily="Arial">Trustpilot</text>
  </svg>
)

export default function TestimonialsSection() {
  return (
    <section className="bg-[#0F0A1E]">
      <div className="section-wrap">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrustpilotIcon />
            <div className="flex">{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
          </div>
          <span className="inline-block   text-xs uppercase tracking-widest rounded-full px-4 py-1.5 mb-4 bg-[rgba(152,219,29,0.15)] text-[#98DB1D]">
            Testimonials
          </span>
          <h2 className="testimonials-heading">Trusted by Businesses Worldwide</h2>
          <p className="mt-3 text-sm max-w-md mx-auto text-[#9090A8]">
            Thousands of companies use Callfluent to automate their phone operations and grow faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="flex gap-0.5 mb-5">{[...Array(t.stars)].map((_, i) => <StarIcon key={i} />)}</div>
              <p className="testimonial-quote">{t.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{ background: t.color, color: t.color === '#98DB1D' ? '#0F0A1E' : '#fff' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="  text-white text-sm">{t.name}</p>
                  <p className="text-xs text-[#9090A8]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
