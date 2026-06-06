const services = [
  {
    day: 'Sunday',
    title: 'Bible study',
    times: ['8:00 AM — 9:00 AM'],
    note: 'Rite I, Book of Common Prayer (1662)',
    icon: '✦',
  },
  {
    day: 'Sunday',
    title: 'Holy Eucharist',
    times: ['9:00 AM - 11:30 AM'],
    note: 'Rite I, Book of Common Prayer (1662)',
    icon: '✦',
  },
  {
    day: 'Wednesday',
    title: 'Midweek service',
    times: ['5:30 PM'],
    note: 'Choral evening prayer with sermon',
    icon: '✦',
  },
  {
    day: 'Special services',
    title: 'special services',
    times: ['Varied — see calendar'],
    note: 'All major feasts of the Church Year',
    icon: '✦',
  },
]

export default function Worship() {
  return (
    <section
      id="worship"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#0A0E2A' }}
    >
      {/* Background dot grid */}
      <div className="absolute inset-0 cross-bg" />
      {/* Gradient overlay */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(10,14,42,0) 0%, rgba(6,9,26,0.6) 100%)' }} />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
          >
            Come Worship
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}
          >
            Services &amp; <em className="italic" style={{ color: '#E8C060' }}>Schedule</em>
          </h2>
          <div className="mt-6 h-px max-w-xs mx-auto"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,151,58,0.5), transparent)' }} />
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,151,58,0.2)',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'rgba(201,151,58,0.05)' }}
              />

              {/* Day */}
              <p
                className="font-sans text-[10px] tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '10px', letterSpacing: '0.3em' }}
              >
                {service.day}
              </p>

              {/* Title */}
              <h3
                className="font-display text-2xl font-medium mb-5"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}
              >
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-8 h-px mb-5" style={{ backgroundColor: 'rgba(201,151,58,0.5)' }} />

              {/* Times */}
              <div className="space-y-1 mb-5">
                {service.times.map((time, j) => (
                  <p
                    key={j}
                    className="font-body text-base"
                    style={{ fontFamily: 'EB Garamond, Georgia, serif', color: '#EDE3CC', fontSize: '17px' }}
                  >
                    {time}
                  </p>
                ))}
              </div>

              {/* Note */}
              <p
                className="font-sans text-[11px] italic"
                style={{ fontFamily: 'Jost, sans-serif', color: 'rgba(237,227,204,0.5)', fontSize: '11px' }}
              >
                {service.note}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <blockquote
            className="font-display text-2xl md:text-3xl italic font-light leading-relaxed"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'rgba(237,227,204,0.7)' }}
          >
            &ldquo;I was glad when they said unto me, Let us go into the house of the Lord.&rdquo;
          </blockquote>
          <cite
            className="block mt-4 font-sans text-[11px] tracking-[0.2em] uppercase not-italic"
            style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.2em' }}
          >
            Psalm 122:1
          </cite>
        </div>
      </div>
    </section>
  )
}
