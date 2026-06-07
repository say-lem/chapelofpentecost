import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#06091A', borderTop: '1px solid rgba(201,151,58,0.2)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10 md:gap-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 overflow-hidden rounded-full shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="Chapel of Pentecost logo"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="font-display text-lg font-semibold text-cream-50 block leading-none"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}>
                  Chapel of Pentecost Anglican Church
                </span>
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase"
                  style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '10px', letterSpacing: '0.2em' }}>
                  Orthodox · Anglican · Reformed
                </span>
              </div>
            </div>
            <p className="font-body text-base leading-7 max-w-sm"
              style={{ fontFamily: 'EB Garamond, Georgia, serif', color: 'rgba(237,227,204,0.5)', fontSize: '17px', lineHeight: '1.85' }}>
              A faithful church in the hospital Chaplaincy  in the Anglican tradition, worshipping God and brinnging him closer to those of ill health and proclaiming the apostolic faith.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '10px', letterSpacing: '0.25em' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['About', 'Worship', 'Sermons', 'Community', 'Contact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}
                    className="font-sans text-[13px] transition-colors duration-200 hover:text-gold-400"
                    style={{ fontFamily: 'Jost, sans-serif', color: 'rgba(237,227,204,0.6)', fontSize: '13px' }}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '10px', letterSpacing: '0.25em' }}>
              Contact
            </h4>
            <div className="space-y-3">
              {[
                '14 Cathedral Close',
                'Ashford, Kent TN24 8AB',
                '+44 (0)1233 123 456',
                'office@staidanschurch.org',
              ].map((line, i) => (
                <p key={i} className="font-sans text-[13px]"
                  style={{ fontFamily: 'Jost, sans-serif', color: 'rgba(237,227,204,0.6)', fontSize: '13px' }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(201,151,58,0.15)' }}>
          <p className="font-sans text-[11px]"
            style={{ fontFamily: 'Jost, sans-serif', color: 'rgba(237,227,204,0.3)', fontSize: '11px' }}>
            © {currentYear} Chapel of Pentecost. All rights reserved.
          </p>
          <p className="font-sans text-[11px] italic"
            style={{ fontFamily: 'Jost, sans-serif', color: 'rgba(201,151,58,0.4)', fontSize: '11px' }}>
            &ldquo;The Lord is in his holy temple: let all the earth keep silence before him.&rdquo; — Hab. 2:20
          </p>
        </div>
      </div>
    </footer>
  )
}
