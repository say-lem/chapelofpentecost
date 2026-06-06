export default function Contact() {
  return (
    <section id="contact" className="py-28" style={{ backgroundColor: '#FDFAF4' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* Left: Info */}
          <div>
            <p
              className="font-sans text-[11px] tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
            >
              Find Us
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-light mb-10"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A' }}
            >
              We&apos;d Love to<br />
              <em className="italic">Welcome You</em>
            </h2>

            <div className="space-y-8">
              {[
                {
                  label: 'Address',
                  lines: ['FNPH Chime Avenue, New Haven, Enugu, Enugu State, Nigeria'],
                },
                {
                  label: 'Telephone',
                  lines: [''],
                },
                {
                  label: 'Email',
                  lines: ['chapelofpentecostfnhe@gmail.com'],
                },
                {
                  label: 'Office Hours',
                  lines: ['Tue – Fri: 9:00 AM – 1:00 PM'],
                },
              ].map((info) => (
                <div key={info.label} className="flex gap-8">
                  <span
                    className="font-sans text-[11px] tracking-widest uppercase w-20 shrink-0 mt-1"
                    style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.15em' }}
                  >
                    {info.label}
                  </span>
                  <div>
                    {info.lines.map((line, j) => (
                      <p
                        key={j}
                        className="font-body text-lg"
                        style={{ fontFamily: 'EB Garamond, Georgia, serif', color: '#0A0E2A', fontSize: '18px' }}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Embedded map */}
            <div className="mt-10 relative overflow-hidden" style={{ height: '300px', border: '1px solid rgba(201,151,58,0.3)' }}>
              <iframe
                src="https://maps.google.com/maps?q=FNPH+Chime+Avenue+New+Haven+Enugu+Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. Aidan's Church location"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <p
              className="font-sans text-[11px] tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
            >
              Send a Message
            </p>
            <h3
              className="font-display text-3xl font-light mb-8"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A' }}
            >
              Get in Touch
            </h3>

            <div className="space-y-5">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                {['First Name', 'Last Name'].map((placeholder) => (
                  <div key={placeholder}>
                    <label
                      className="block font-sans text-[11px] tracking-widest uppercase mb-2"
                      style={{ fontFamily: 'Jost, sans-serif', color: '#8C7B6B', fontSize: '11px', letterSpacing: '0.15em' }}
                    >
                      {placeholder}
                    </label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="w-full px-4 py-3 bg-transparent outline-none font-body transition-colors duration-200 focus:border-gold-500"
                      style={{
                        fontFamily: 'EB Garamond, Georgia, serif',
                        color: '#0A0E2A',
                        border: '1px solid rgba(10,14,42,0.2)',
                        fontSize: '17px',
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <div>
                <label className="block font-sans text-[11px] tracking-widest uppercase mb-2"
                  style={{ fontFamily: 'Jost, sans-serif', color: '#8C7B6B', fontSize: '11px', letterSpacing: '0.15em' }}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-transparent outline-none font-body transition-colors duration-200"
                  style={{
                    fontFamily: 'EB Garamond, Georgia, serif',
                    color: '#0A0E2A',
                    border: '1px solid rgba(10,14,42,0.2)',
                    fontSize: '17px',
                  }}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block font-sans text-[11px] tracking-widest uppercase mb-2"
                  style={{ fontFamily: 'Jost, sans-serif', color: '#8C7B6B', fontSize: '11px', letterSpacing: '0.15em' }}>
                  Subject
                </label>
                <select
                  className="w-full px-4 py-3 bg-cream-50 outline-none font-body appearance-none cursor-pointer"
                  style={{
                    fontFamily: 'EB Garamond, Georgia, serif',
                    color: '#0A0E2A',
                    border: '1px solid rgba(10,14,42,0.2)',
                    fontSize: '17px',
                    backgroundColor: '#FDFAF4',
                  }}
                >
                  <option>General Enquiry</option>
                  <option>Baptism / Confirmation</option>
                  <option>Wedding</option>
                  <option>Pastoral Care</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-[11px] tracking-widest uppercase mb-2"
                  style={{ fontFamily: 'Jost, sans-serif', color: '#8C7B6B', fontSize: '11px', letterSpacing: '0.15em' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-transparent outline-none font-body resize-none"
                  style={{
                    fontFamily: 'EB Garamond, Georgia, serif',
                    color: '#0A0E2A',
                    border: '1px solid rgba(10,14,42,0.2)',
                    fontSize: '17px',
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full font-sans text-[12px] tracking-[0.2em] uppercase py-4 transition-all duration-300 hover:opacity-90"
                style={{
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  backgroundColor: '#0A0E2A',
                  color: '#E8C060',
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
