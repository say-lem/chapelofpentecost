import { NextResponse } from 'next/server'

const PAGE_ID = process.env.FACEBOOK_PAGE_ID ?? '100070103357113'
const PAGE_URL =
  process.env.FACEBOOK_PAGE_URL ??
  'https://www.facebook.com/people/Chapel-of-Pentecost-FNHE/100070103357113/'
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN

type LiveVideo = {
  status?: string
  title?: string
  permalink_url?: string
  broadcast_status?: string
}

type LiveStatus = {
  isLive: boolean
  title?: string
  permalinkUrl?: string
}

const LIVE_STATUSES = new Set(['LIVE', 'LIVE_NOW', 'SCHEDULED_LIVE'])

async function fetchFromGraphApi(): Promise<LiveStatus | null> {
  if (!ACCESS_TOKEN) return null

  const url = new URL(`https://graph.facebook.com/v19.0/${PAGE_ID}/live_videos`)
  url.searchParams.set('fields', 'status,title,permalink_url,broadcast_status')
  url.searchParams.set('access_token', ACCESS_TOKEN)

  const response = await fetch(url.toString(), { next: { revalidate: 30 } })
  const data = await response.json()

  if (!response.ok) return null

  const liveVideo = (data.data as LiveVideo[] | undefined)?.find(
    (video) =>
      LIVE_STATUSES.has(video.status ?? '') ||
      LIVE_STATUSES.has(video.broadcast_status ?? '')
  )

  if (!liveVideo?.permalink_url) return null

  return {
    isLive: true,
    title: liveVideo.title ?? 'Live Worship',
    permalinkUrl: liveVideo.permalink_url,
  }
}

async function scrapeLiveFromPage(): Promise<LiveStatus | null> {
  const response = await fetch(PAGE_URL, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    next: { revalidate: 30 },
  })

  if (!response.ok) return null

  const html = await response.text()
  if (!html.includes('is live now')) return null

  const liveIdx = html.indexOf('is live now')
  const chunk = html.slice(Math.max(0, liveIdx - 10_000), liveIdx + 10_000)
  const idCounts = new Map<string, number>()
  const idPattern = /"id":"(\d{15,})"/g
  let match: RegExpExecArray | null

  while ((match = idPattern.exec(chunk)) !== null) {
    const id = match[1]
    if (id === PAGE_ID) continue
    idCounts.set(id, (idCounts.get(id) ?? 0) + 1)
  }

  let videoId: string | undefined
  let maxCount = 0
  idCounts.forEach((count, id) => {
    if (count > maxCount) {
      maxCount = count
      videoId = id
    }
  })

  if (!videoId) return null

  return {
    isLive: true,
    title: 'Live Worship',
    permalinkUrl: `https://www.facebook.com/${PAGE_ID}/videos/${videoId}`,
  }
}

export async function GET() {
  try {
    const graphResult = await fetchFromGraphApi()
    if (graphResult) return NextResponse.json(graphResult)

    const scraped = await scrapeLiveFromPage()
    if (scraped) return NextResponse.json(scraped)

    return NextResponse.json({ isLive: false })
  } catch {
    return NextResponse.json({ isLive: false })
  }
}
