'use client'

import { useEffect, useState } from 'react'

type YoutubeVideo = {
  id: string
  title: string
  publishedAt: string
}

// Replace youtubeId values with your church's actual YouTube video IDs
const sermons = [
  {
    date: 'May 17, 2025',
    season: 'Trinity Sunday',
    title: 'The spirit of compromise',
    preacher: '',
    duration: '35 min',
    scripture: 'Isaiah 6:1–8',
    youtubeId: 'GQxvdhS0MqY',
  },
  {
    date: 'May 10, 2025',
    season: 'Pentecost',
    title: 'The greatest in the Kingdom',
    preacher: '',
    duration: '45 min',
    scripture: 'John 3:1–17',
    youtubeId: 'klkUEeugsXE',
  },
  {
    date: 'May 3, 2025',
    season: 'Rogation Sunday',
    title: 'Cast your cares on Him',
    preacher: '',
    duration: '42 min',
    scripture: 'Genesis 1:26–31',
    youtubeId: 'UacEtiQVke4',
  },
]

export default function Sermons() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [youtubeVideos, setYoutubeVideos] = useState<YoutubeVideo[] | null>(null)

  const handlePlay = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    setActiveIndex(prev => prev === index ? null : index)
  }

  useEffect(() => {
    let cancelled = false

    fetch('/api/youtube-videos')
      .then(res => res.json())
      .then((data: { videos?: YoutubeVideo[] }) => {
        if (!cancelled) setYoutubeVideos(data.videos ?? [])
      })
      .catch(() => {
        if (!cancelled) setYoutubeVideos([])
      })

    return () => {
      cancelled = true
    }
  }, [])

  const watchVideos =
    youtubeVideos && youtubeVideos.length > 0
      ? youtubeVideos.map(video => ({
          youtubeId: video.id,
          title: video.title,
          date: new Date(video.publishedAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }),
        }))
      : sermons.map(sermon => ({
          youtubeId: sermon.youtubeId,
          title: sermon.title,
          date: `${sermon.season} · ${sermon.date}`,
        }))

  return (
    <section id="sermons" className="py-28" style={{ backgroundColor: '#FDFAF4' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p
              className="font-sans text-[11px] tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
            >
              The Word Preached
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-light"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A' }}
            >
              Recent <em className="italic">Sermons</em>
            </h2>
          </div>
          <a
            href="#"
            className="font-sans text-[12px] tracking-[0.15em] uppercase shrink-0 self-start md:self-auto px-5 py-2.5 border transition-colors duration-300 hover:border-navy-900"
            style={{ fontFamily: 'Jost, sans-serif', fontSize: '12px', color: '#0A0E2A', border: '1px solid rgba(10,14,42,0.3)', letterSpacing: '0.15em' }}
          >
            All Sermons →
          </a>
        </div>

        {/* Audio sermon list */}
        <div className="space-y-0">
          {sermons.map((sermon, i) => (
            <a
              key={i}
              href="#"
              onClick={(e) => handlePlay(e, i)}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 border-b transition-colors duration-200 hover:bg-cream-100/50"
              style={{ borderColor: 'rgba(10,14,42,0.1)', padding: '2rem 1rem' }}
            >
              {/* Index */}
              <span
                className="font-display text-5xl font-light shrink-0 w-12 leading-none hidden md:block"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: 'rgba(201,151,58,0.3)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Date / season */}
              <div className="shrink-0 md:w-40">
                <p className="font-sans text-[11px] tracking-wider uppercase"
                  style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.15em' }}>
                  {sermon.season}
                </p>
                <p className="font-sans text-[12px]"
                  style={{ fontFamily: 'Jost, sans-serif', color: '#8C7B6B', fontSize: '12px' }}>
                  {sermon.date}
                </p>
              </div>

              {/* Title & preacher */}
              <div className="flex-1 min-w-0">
                <h3
                  className="font-display text-xl md:text-2xl font-medium mb-1 group-hover:text-gold-600 transition-colors duration-200"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A' }}
                >
                  {sermon.title}
                </h3>
                <p
                  className="font-body text-base"
                  style={{ fontFamily: 'EB Garamond, Georgia, serif', color: '#8C7B6B', fontSize: '16px' }}
                >
                  {sermon.preacher} · <em>{sermon.scripture}</em>
                </p>
              </div>

              {/* Duration + play */}
              <div className="shrink-0 flex items-center gap-4">
                <span className="font-sans text-[12px]"
                  style={{ fontFamily: 'Jost, sans-serif', color: '#8C7B6B', fontSize: '12px' }}>
                  {sermon.duration}
                </span>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300"
                  style={{
                    border: activeIndex === i ? '1px solid #C9973A' : '1px solid rgba(10,14,42,0.2)',
                    color: activeIndex === i ? '#C9973A' : '#8C7B6B',
                  }}
                >
                  {activeIndex === i ? (
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                      <rect x="3" y="2" width="3.5" height="12" />
                      <rect x="9.5" y="2" width="3.5" height="12" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 ml-0.5">
                      <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                    </svg>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Now Playing bar */}
        {activeIndex !== null && (
          <div
            className="mt-6 rounded-lg overflow-hidden"
            style={{ border: '1px solid rgba(201,151,58,0.3)' }}
          >
            {/* Audio player UI overlay sits on top of the YouTube iframe */}
            <div style={{ position: 'relative' }}>
              {/* YouTube iframe — renders behind the overlay, audio plays from it */}
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  key={activeIndex}
                  src={`https://www.youtube.com/embed/${sermons[activeIndex].youtubeId}?autoplay=1`}
                  title={sermons[activeIndex].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </div>

              {/* Cover: hides the video, leaves the bottom ~46px for YouTube's native controls */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 46,
                  backgroundColor: '#0A0E2A',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  padding: '24px',
                }}
              >
                {/* Animated audio bars */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '32px' }}>
                  {[0.6, 1, 0.75, 0.45, 0.9, 0.55, 0.8].map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: '4px',
                        height: `${h * 100}%`,
                        backgroundColor: '#C9973A',
                        borderRadius: '2px',
                        animation: `audioBar ${0.8 + idx * 0.15}s ease-in-out infinite alternate`,
                        animationDelay: `${idx * 0.1}s`,
                      }}
                    />
                  ))}
                </div>

                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '10px', letterSpacing: '0.25em', color: '#C9973A', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Now Playing
                  </p>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '20px', color: '#FDFAF4', fontWeight: 300 }}>
                    {sermons[activeIndex].title}
                  </p>
                  <p style={{ fontFamily: 'EB Garamond, Georgia, serif', fontSize: '14px', color: 'rgba(253,250,244,0.5)', marginTop: '4px' }}>
                    <em>{sermons[activeIndex].scripture}</em> · {sermons[activeIndex].date}
                  </p>
                </div>

                <button
                  onClick={() => setActiveIndex(null)}
                  style={{ fontFamily: 'Jost, sans-serif', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(253,250,244,0.4)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '4px' }}
                >
                  ✕ Close
                </button>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes audioBar {
            from { transform: scaleY(0.3); }
            to   { transform: scaleY(1); }
          }
        `}</style>

        {/* YouTube sermon videos */}
        <div className="mt-20">
          <div className="flex items-center gap-6 mb-10">
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(10,14,42,0.1)' }} />
            <p
              className="font-sans text-[11px] tracking-[0.3em] uppercase shrink-0"
              style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
            >
              Watch on YouTube
            </p>
            <div className="h-px flex-1" style={{ backgroundColor: 'rgba(10,14,42,0.1)' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {watchVideos.map((video, i) => (
              <div key={video.youtubeId ?? i} className="group">
                {/* Video embed */}
                <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>

                {/* Card info */}
                <div className="pt-4 pb-2" style={{ borderBottom: '1px solid rgba(10,14,42,0.1)' }}>
                  <p
                    className="font-sans text-[10px] tracking-wider uppercase mb-1"
                    style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '10px', letterSpacing: '0.15em' }}
                  >
                    {video.date}
                  </p>
                  <h3
                    className="font-display text-lg font-medium mb-1"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A', lineHeight: 1.3 }}
                  >
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
