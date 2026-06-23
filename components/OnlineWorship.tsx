'use client'

import { useEffect, useRef, useState } from 'react'

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/profile.php?id=100070103357113'
const POLL_INTERVAL_MS = 60_000

type LiveStatus = {
  isLive: boolean
  title?: string
  permalinkUrl?: string
}

function ResponsiveFacebookVideo({ permalinkUrl }: { permalinkUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return
      const width = containerRef.current.offsetWidth
      setDimensions({ width, height: Math.round((width * 9) / 16) })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (dimensions.width === 0) {
    return <div ref={containerRef} className="w-full aspect-video" />
  }

  const embedSrc = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
    permalinkUrl
  )}&show_text=false&width=${dimensions.width}&height=${dimensions.height}`

  return (
    <div ref={containerRef} className="w-full">
      <iframe
        src={embedSrc}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full max-w-full border-0"
        style={{ aspectRatio: '16 / 9' }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        title="Facebook Live stream"
      />
    </div>
  )
}

export default function OnlineWorship() {
  const [live, setLive] = useState<LiveStatus | null>(null)

  useEffect(() => {
    const checkLive = async () => {
      try {
        const response = await fetch('/api/facebook-live')
        const data: LiveStatus = await response.json()
        setLive(data)
      } catch {
        setLive({ isLive: false })
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

        {isLive && live?.permalinkUrl && (
          <div className="w-full max-w-4xl mx-auto space-y-6">
            <div
              className="overflow-hidden"
              style={{ border: '1px solid rgba(201,151,58,0.3)' }}
            >
              <ResponsiveFacebookVideo permalinkUrl={live.permalinkUrl} />
            </div>
          </div>
        )}

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
