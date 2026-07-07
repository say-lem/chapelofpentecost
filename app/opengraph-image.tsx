import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Chapel of Pentecost Anglican Church'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0E2A',
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(201,151,58,0.12) 0%, rgba(10,14,42,0) 60%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 56,
            height: 56,
            marginBottom: 36,
          }}
        >
          <svg viewBox="0 0 40 40" width="56" height="56">
            <rect x="18" y="2" width="4" height="36" fill="#C9973A" />
            <rect x="4" y="12" width="32" height="4" fill="#C9973A" />
          </svg>
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 8,
            textTransform: 'uppercase',
            color: '#E8C060',
            marginBottom: 24,
          }}
        >
          Hospital Chaplaincy · Est. 2004
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 76,
            fontWeight: 300,
            color: '#FDFAF4',
            textAlign: 'center',
            lineHeight: 1.15,
            padding: '0 80px',
          }}
        >
          Chapel of Pentecost
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: 'rgba(237,227,204,0.7)',
            marginTop: 20,
          }}
        >
          Anglican Church · Enugu, Nigeria
        </div>
      </div>
    ),
    { ...size }
  )
}
