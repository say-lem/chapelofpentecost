import Image from 'next/image'

// Replace with real names, contact details, and photo URLs
const staff = [
  {
    name: 'Canon Ven. Prof. Chikere A. Anusiem ',
    role: 'Vicar-Chaplain i/c',
    email: 'chanusiem@gmail.com',
    phone: '+2348036717200',
    image: 'https://chapelofhisresurrection.org/wp-content/uploads/2022/10/chikere-anusiem-cohr-enugu.jpg',
  },
  {
    name: 'Rev. Canon Prof. Ifeanyi Onah',
    role: "Chaplain",
    email: 'anyionah@gmail.com',
    phone: '+2348058471489',
    image: 'https://chapelofhisresurrection.org/wp-content/uploads/2022/10/ifeanyi-onah-Copy-2.jpg',
  },
  {
    name: 'Rev. Dr. Enyereibe Chuks Ajare',
    role: "Chaplain",
    email: 'dcajare@gmail.com',
    phone: ' +2348062134999',
    image: 'https://chapelofhisresurrection.org/wp-content/uploads/2022/10/chuks-ajare-2.jpg',
  },
  {
    name: 'Ord. Dr. Ugochukwu Timothy Uchendu',
    role: 'Ordinand',
    email: 'ugotimuchendu@gmail.com',
    phone: '+2348030622830',
    image: '/ordinand.jpeg',
  },
]

export default function WorkersInTheVineyard() {
  return (
    <section id="team" className="py-28" style={{ backgroundColor: '#0A0E2A' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="text-center mb-20">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
          >
            Those Who Serve
          </p>
          <h2
            className="font-display text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}
          >
            Workers in the <em className="italic" style={{ color: '#E8C060' }}>Vineyard</em>
          </h2>
          <div
            className="mt-6 h-px max-w-xs mx-auto"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,151,58,0.5), transparent)' }}
          />
          <p
            className="mt-6 font-body text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'EB Garamond, Georgia, serif', color: 'rgba(237,227,204,0.65)', fontSize: '19px', lineHeight: 1.7 }}
          >
            Meet the faithful servants who tend this family — feel free to reach out with any enquiry.
          </p>
        </div>

        {/* Staff grid */}
        <div className="grid mx-auto sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((person, i) => (
            <div
              key={i}
              className="group flex flex-col"
              style={{ border: '1px solid rgba(201,151,58,0.15)' }}
            >
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: '280px' }}>
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,14,42,0.7) 0%, transparent 50%)' }}
                />
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <p
                  className="font-sans text-[10px] tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '10px', letterSpacing: '0.2em' }}
                >
                  {person.role}
                </p>
                <h3
                  className="font-display text-xl font-medium mb-4"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4', lineHeight: 1.3 }}
                >
                  {person.name}
                </h3>

                <div className="mt-auto space-y-2">
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2 group/link"
                  >
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 shrink-0" style={{ color: '#C9973A' }}>
                      <rect x="2" y="4" width="16" height="12" rx="1.5" />
                      <path d="M2 7l8 5 8-5" />
                    </svg>
                    <span
                      className="font-sans text-[11px] truncate group-hover/link:underline"
                      style={{ fontFamily: 'Jost, sans-serif', color: 'rgba(237,227,204,0.6)', fontSize: '11px', letterSpacing: '0.05em' }}
                    >
                      {person.email}
                    </span>
                  </a>
                  <a
                    href={`tel:${person.phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-2 group/link"
                  >
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 shrink-0" style={{ color: '#C9973A' }}>
                      <path d="M3 4.5C3 3.67 3.67 3 4.5 3h2.37a.75.75 0 0 1 .72.54l.97 3.39a.75.75 0 0 1-.22.77l-1.18 1a9.28 9.28 0 0 0 4.16 4.16l1-.9a.75.75 0 0 1 .77-.21l3.39.97a.75.75 0 0 1 .54.72V15.5c0 .83-.67 1.5-1.5 1.5C8.56 17 3 11.44 3 4.5z" />
                    </svg>
                    <span
                      className="font-sans text-[11px] group-hover/link:underline"
                      style={{ fontFamily: 'Jost, sans-serif', color: 'rgba(237,227,204,0.6)', fontSize: '11px', letterSpacing: '0.05em' }}
                    >
                      {person.phone}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
