import React from 'react';

const testimonials = [
  // ROW 1
  {
    id: 1,
    type: 'text',
    name: 'Russ Ward',
    role: 'Agency owner',
    stars: 5,
    title: 'CallFluent Was Much Better Than The Others I Tried!',
    text: 'I started using CallFluent because the voice AI company I was originally using wasn\'t working correctly and my clients were all angry at me.',
    initials: 'RW',
    initialsBg: '#FCE7F3',
    initialsText: '#DB2777',
  },
  {
    id: 2,
    type: 'text',
    name: 'Michael Levitt',
    role: 'Freelance designer',
    stars: 5,
    title: '',
    text: 'For a brand like mine where engagement and clear communication are everything - CallFluent is helping us scale, automate.\n\nMore impact, less burnout, and major growth...',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    type: 'video',
    name: 'Tim Verdouw',
    role: 'Affiliate Expert',
    videoThumb: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800',
    initials: 'J',
    initialsBg: '#98DB1D',
  },
  // ROW 2
  {
    id: 4,
    type: 'video',
    name: 'Sarah Chen',
    role: 'Marketing Director',
    videoThumb: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
    initials: 'S',
    initialsBg: '#FCD34D',
  },
  {
    id: 5,
    type: 'text',
    name: 'James Moss',
    role: 'Operations Manager',
    stars: 5,
    title: 'Game Changing Support',
    text: 'The support team responds in minutes, not days. Every time I\'ve had a question or needed a custom setup, they\'ve been right there.',
    initials: 'JM',
    initialsBg: '#E0E7FF',
    initialsText: '#4338CA',
  },
  {
    id: 6,
    type: 'text',
    name: 'Carlos Lunardini',
    role: 'Founder, Marketing Firm',
    stars: 5,
    title: 'Best Voice Quality',
    text: 'I\'ve tried every AI calling tool out there. Callfluent is by far the best one I\'ve used. The voice quality is in a completely different league.',
    initials: 'CL',
    initialsBg: '#DDD6FE',
    initialsText: '#7C3AED',
  },
];

const StarIcon = ({ color = "#4ADE80" }) => (
  <svg className="w-[22px] h-[22px]" style={{ color }} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1700px] mx-auto px-4">

        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-[28px] sm:text-[38px] md:text-[52px] font-bold text-[#1A1A1A] mb-4 md:mb-6 leading-tight">Automating success, one call at a time</h2>
          <p className="text-[#6B7280] max-w-3xl mx-auto text-[15px] sm:text-[18px] md:text-[22px]">
            Hear directly from our clients about the impact CallFluentAI's natural AI voice agents.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`relative overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[48px] w-full shrink-0
                ${t.type === 'video'
                  ? 'sm:w-[240px] md:w-[280px] h-[220px] sm:h-[340px] md:h-[428px]'
                  : 'sm:w-[calc(50%-1rem)] md:w-[517px] h-auto sm:h-[380px] md:h-[428px]'
                }`}
            >
              {t.type === 'text' ? (
                <div className="w-full h-full bg-[#F3F4FF] p-6 sm:p-8 md:p-12 flex flex-col justify-between border border-transparent hover:border-gray-200 transition-all">
                  <div>
                    <div className="flex gap-1 mb-4 md:mb-8">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                    </div>
                    {t.title && <h4 className="text-[#374151] font-semibold text-[15px] md:text-[20px] mb-3 md:mb-5">{t.title}</h4>}
                    <p className="text-[#6B7280] text-[14px] sm:text-[16px] md:text-[22px] leading-[1.6]">{t.text}</p>
                  </div>
                  <div className="flex items-center gap-3 md:gap-4 mt-4 md:mt-0">
                    {t.avatar ? (
                      <img src={t.avatar} className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover" alt="" />
                    ) : (
                      <div style={{ backgroundColor: t.initialsBg, color: t.initialsText }} className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-sm md:text-lg shrink-0">
                        {t.initials}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-[#1A1A1A] text-[15px] md:text-[25px]">{t.name}</p>
                      <p className="text-[#9CA3AF] text-[13px] md:text-[20px]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full group cursor-pointer relative">
                  <img src={t.videoThumb} className="absolute inset-0 w-full h-full object-cover brightness-[0.7] group-hover:scale-105 transition-transform duration-700" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#5048E5] rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div style={{ backgroundColor: t.initialsBg }} className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full flex items-center justify-center font-bold text-xs md:text-[14px] text-[#1A1A1A]">
                        {t.initials}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-white font-bold text-[15px] md:text-[25px] truncate">{t.name}</p>
                        <p className="text-gray-300 text-[12px] md:text-[20px] truncate">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}