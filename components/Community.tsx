import Image from 'next/image'

const ministries = [
  {
    title: 'Choir & Music',
    desc: 'Rooted in the Anglican choral tradition — from plainsong to Byrd, Tallis, and beyond.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Sunday School',
    desc: 'Catechesis and Christian formation for children from ages 4 through confirmation.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Fellowship Groups',
    desc: 'Monthly gatherings, potlucks, and retreats that knit the congregation together in friendship and communion.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
  },
]

export default function Community() {
  return (
    <section
      id="community"
      className="py-28 relative overflow-hidden"
      style={{ backgroundColor: '#111638' }}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548625361-58a9d86b2a9d?w=1200&auto=format&fit=crop&q=30")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(17,22,56,0.9)' }} />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
          >
            Parish Life
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}
          >
            A Living <em className="italic" style={{ color: '#E8C060' }}>Community</em>
          </h2>
          <div className="mt-6 h-px max-w-xs mx-auto"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,151,58,0.5), transparent)' }} />
        </div>

        {/* Ministry cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ministries.map((m, i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent"
                  style={{ background: 'linear-gradient(to top, rgba(10,14,42,0.9), rgba(10,14,42,0.3), transparent)' }} />
              </div>

              {/* Content */}
              <div className="p-6" style={{ backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,151,58,0.15)', borderTop: 'none' }}>
                <h3 className="font-display text-2xl font-medium mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}>
                  {m.title}
                </h3>
                <p className="font-body text-base leading-7"
                  style={{ fontFamily: 'EB Garamond, Georgia, serif', color: 'rgba(237,227,204,0.7)', fontSize: '17px' }}>
                  {m.desc}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold-500 group-hover:gap-3 transition-all duration-300">
                  <span className="font-sans text-[11px] tracking-wider uppercase"
                    style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.15em' }}>
                    Learn more
                  </span>
                  <span style={{ color: '#C9973A' }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 text-center">
          <p
            className="font-body text-xl mb-6"
            style={{ fontFamily: 'EB Garamond, Georgia, serif', color: 'rgba(237,227,204,0.7)', fontSize: '20px' }}
          >
            New to the chapel ? We would love to welcome you.
          </p>
          <a
            href="#contact"
            className="inline-block font-sans text-[12px] tracking-[0.2em] uppercase px-8 py-4 border transition-all duration-300 hover:bg-gold-500/10"
            style={{ fontFamily: 'Jost, sans-serif', fontSize: '12px', letterSpacing: '0.2em', color: '#E8C060', border: '1px solid rgba(201,151,58,0.5)' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
