const beliefs = [
  {
    title: 'Holy Scripture',
    text: 'We hold the Holy Scriptures to contain all things necessary to salvation. Every article of faith must be proved thereby.',
  },
  {
    title: 'The Historic Creeds',
    text: 'The Apostles\' Creed, the Nicene Creed, and the Athanasian Creed are received as the faith of the Church Catholic.',
  },
  {
    title: 'The Sacraments',
    text: 'Baptism and the Supper of the Lord are sacraments ordained by Christ as necessary means of grace for the life of the Church.',
  },
  {
    title: 'Apostolic Order',
    text: 'The historic episcopate, and the threefold ministry of bishops, priests, and deacons, is faithfully continued in our parish.',
  },
]

export default function Beliefs() {
  return (
    <section className="py-24" style={{ backgroundColor: '#F7F0E0' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
          >
            What We Believe
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A' }}
          >
            The <em className="italic">Apostolic</em> Faith
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {beliefs.map((b, i) => (
            <div key={i} className="flex gap-6">
              {/* Roman numeral */}
              <span
                className="font-display text-4xl font-light shrink-0 leading-none mt-1"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'rgba(201,151,58,0.35)', fontSize: '2.5rem' }}
              >
                {['I', 'II', 'III', 'IV'][i]}
              </span>
              <div>
                <h3
                  className="font-display text-xl font-semibold mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A' }}
                >
                  {b.title}
                </h3>
                <p
                  className="font-body text-base leading-7"
                  style={{ fontFamily: 'EB Garamond, Georgia, serif', color: '#5A4F46', fontSize: '17px', lineHeight: '1.85' }}
                >
                  {b.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
