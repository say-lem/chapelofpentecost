import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-28 overflow-hidden" style={{ backgroundColor: '#FDFAF4' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
          >
            Our Church
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A' }}
          >
            Ancient Faith for<br />
            <em className="italic">the Modern World</em>
          </h2>
          <div className="ornament-divider mt-6 max-w-xs mx-auto">
            <svg viewBox="0 0 20 20" fill="none" className="w-3 h-3 shrink-0">
              <polygon points="10,1 12,8 19,8 13,13 15,20 10,15 5,20 7,13 1,8 8,8" fill="#C9973A" />
            </svg>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="/chucrh-photo.jpg"
                alt="Church exterior"
                fill
                className="object-cover"
              />
              {/* Gold border accent */}
              <div className="absolute inset-0 border border-gold-500/30" style={{ border: '1px solid rgba(201,151,58,0.3)' }} />
            </div>
            {/* Offset decorative box */}
            <div
              className="absolute -bottom-5 -right-5 w-40 h-40 -z-0"
              style={{ border: '2px solid rgba(201,151,58,0.25)' }}
            />
            {/* Established badge */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 flex flex-col items-center justify-center"
              style={{ backgroundColor: '#C9973A' }}
            >
              <span className="font-display text-2xl font-bold text-white leading-none"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'white' }}>
                2004
              </span>
              <span className="font-sans text-[9px] tracking-widest uppercase text-white/80"
                style={{ fontFamily: 'Jost, sans-serif', fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.8)' }}>
                Est.
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3
              className="font-display text-3xl font-light mb-6 leading-snug"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A' }}
            >
              An Evangelical Church <br /> committed to Spirit filled Liturgy <br />with extempore expressions of worship
            </h3>
            <div
              className="font-body text-lg leading-8 space-y-4"
              style={{ fontFamily: 'EB Garamond, Georgia, serif', color: '#3D3530', fontSize: '18px', lineHeight: '1.9' }}
            >
              <p>
                Chapel of Pentecost was founded on the belief that the church should also be available to the ill, and from the hospital chaplency this branch in the fedral nero psychiatric hospital was birthed.
              </p>
              <p>
                We hold to the theological formularies of the English Reformation: the Thirty-Nine Articles, 
                the historic creeds, and a thoroughly biblical Christianity expressed through reverent, 
                dignified worship.
              </p>
              <p>
                All are welcome to come and encounter the beauty of holiness.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { num: '100+', label: 'Congregation' },
                { num: '3', label: 'Ministers' },
                { num: '22', label: 'Years of Faith' },
              ].map((stat) => (
                <div key={stat.label} className="text-center border-t-2 pt-4" style={{ borderColor: '#C9973A' }}>
                  <div className="font-display text-3xl font-semibold"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A' }}>
                    {stat.num}
                  </div>
                  <div className="font-sans text-[11px] tracking-widest uppercase mt-1"
                    style={{ fontFamily: 'Jost, sans-serif', color: '#8C7B6B', fontSize: '11px', letterSpacing: '0.15em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
