const announcements = [
  { label: 'Sunday Eucharist', time: '8:00 AM & 10:30 AM' },
  { label: 'Wednesday Evensong', time: '6:30 PM' },
  { label: 'Choir Rehearsal', time: 'Friday 7:00 PM' },
]

export default function AnnouncementBanner() {
  return (
    <div
      className="relative py-3 overflow-hidden"
      style={{ backgroundColor: '#0A0E2A', borderBottom: '1px solid rgba(201,151,58,0.25)' }}
    >
      {/* Left label */}
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center gap-6 md:gap-10">
        <span
          className="font-sans text-[10px] tracking-[0.25em] uppercase shrink-0"
          style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '10px', letterSpacing: '0.25em' }}
        >
          This Week
        </span>
        <div className="h-4 w-px opacity-30" style={{ backgroundColor: '#E8C060' }} />
        <div className="flex flex-wrap gap-6 md:gap-10">
          {announcements.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span
                className="font-body text-sm"
                style={{ fontFamily: 'EB Garamond, Georgia, serif', color: '#F7F0E0', fontSize: '15px' }}
              >
                {item.label}
              </span>
              <span
                className="font-sans text-[11px]"
                style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px' }}
              >
                · {item.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
