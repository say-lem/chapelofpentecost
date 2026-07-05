'use client'

import { useEffect, useState } from 'react'

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/people/Chapel-of-Pentecost-FNHE/100070103357113/'
const POLL_INTERVAL_MS = 60_000

type LiveStatus = {
  isLive: boolean
  title?: string
  permalinkUrl?: string
}

function FacebookVideoEmbed({ permalinkUrl }: { permalinkUrl: string }) {
  const iframeSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    permalinkUrl
  )}&show_text=false&width=800&height=450&autoplay=false`

  return (
    <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
      <iframe
        src={iframeSrc}
        className="absolute inset-0 h-full w-full border-0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        title="Facebook Live stream"
      />
    </div>
  )
}

function LiveStreamPlaceholder({ loading }: { loading: boolean }) {
  return (
    <a
      href={FACEBOOK_PAGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex w-full items-center justify-center bg-black/40 transition-opacity hover:opacity-90"
      style={{ paddingTop: '56.25%' }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-full"
          style={{ backgroundColor: 'rgba(201,151,58,0.2)', border: '2px solid #C9973A' }}
        >
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="#E8C060">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p
          className="font-sans text-sm tracking-[0.15em] uppercase"
          style={{ fontFamily: 'Jost, sans-serif', color: '#E8C060' }}
        >
          {loading ? 'Checking for live stream…' : 'Watch on Facebook'}
        </p>
      </div>
    </a>
  )
}

export default function OnlineWorship() {
  const [live, setLive] = useState<LiveStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkLive = async () => {
      try {
        const response = await fetch('/api/facebook-live')
        if (!response.ok) return
        const data: LiveStatus = await response.json()
        setLive(data)
      } catch {
        setLive({ isLive: false })
      } finally {
        setLoading(false)
      }
    }

    checkLive()
    const interval = window.setInterval(checkLive, POLL_INTERVAL_MS)
    return () => window.clearInterval(interval)
  }, [])

  const isLive = Boolean(live?.isLive && live.permalinkUrl)

  return (
    <section
      id="online-worship"
      className="py-16 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#111638' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-3 md:mb-4"
            style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
          >
            {isLive ? "We're Live Now" : 'Join Us Live'}
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}
          >
            Online <em className="italic">Worship</em>
          </h2>
          <p
            className="font-body text-base sm:text-lg mt-4 md:mt-5 max-w-2xl mx-auto px-2"
            style={{ fontFamily: 'EB Garamond, Georgia, serif', color: 'rgba(237,227,204,0.65)', fontSize: '18px', lineHeight: '1.75' }}
          >
            {isLive && live?.title ? (
              live.title
            ) : (
              <>
                When we go live on Facebook, the stream appears here automatically.
                Otherwise, you&apos;ll see our recent posts and videos from the page.
              </>
            )}
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto space-y-6">
          <div
            className="overflow-hidden"
            style={{ border: '1px solid rgba(201,151,58,0.3)' }}
          >
            {isLive && live?.permalinkUrl ? (
              <FacebookVideoEmbed permalinkUrl={live.permalinkUrl} />
            ) : (
              <LiveStreamPlaceholder loading={loading} />
            )}
          </div>
        </div>

        <div className="flex justify-center mt-6 md:mt-8">
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] sm:text-[12px] tracking-[0.2em] uppercase px-5 sm:px-6 py-3 border transition-all duration-300 hover:opacity-90"
            style={{
              fontFamily: 'Jost, sans-serif',
              color: '#E8C060',
              borderColor: '#C9973A',
            }}
          >
            {isLive ? 'Open on Facebook' : 'Visit Our Facebook Page'}
          </a>
        </div>
      </div>
    </section>
  )
}
