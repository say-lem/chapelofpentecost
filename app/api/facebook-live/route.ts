import { NextResponse } from 'next/server'

const PAGE_ID = process.env.FACEBOOK_PAGE_ID ?? '100070103357113'
const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN

type LiveVideo = {
  status?: string
  title?: string
  permalink_url?: string
}

export async function GET() {
  if (!ACCESS_TOKEN) {
    return NextResponse.json({ isLive: false })
  }

  try {
    const url = new URL(`https://graph.facebook.com/v19.0/${PAGE_ID}/live_videos`)
    url.searchParams.set('fields', 'status,title,permalink_url')
    url.searchParams.set('access_token', ACCESS_TOKEN)

    const response = await fetch(url.toString(), { next: { revalidate: 30 } })
    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ isLive: false })
    }

    const liveVideo = (data.data as LiveVideo[] | undefined)?.find(
      (video) => video.status === 'LIVE'
    )

    if (!liveVideo?.permalink_url) {
      return NextResponse.json({ isLive: false })
    }

    return NextResponse.json({
      isLive: true,
      title: liveVideo.title ?? 'Live Worship',
      permalinkUrl: liveVideo.permalink_url,
    })
  } catch {
    return NextResponse.json({ isLive: false })
  }
}
