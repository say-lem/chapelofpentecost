import { NextResponse } from 'next/server'

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID ?? 'UCEKSjcMiWodSKoFSPVwoR8A'
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`
const VIDEO_COUNT = 3

type YoutubeVideo = {
  id: string
  title: string
  publishedAt: string
}

function decodeXmlEntities(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function parseVideos(xml: string): YoutubeVideo[] {
  const videos: YoutubeVideo[] = []
  const entryPattern = /<entry>([\s\S]*?)<\/entry>/g
  let entryMatch: RegExpExecArray | null

  while ((entryMatch = entryPattern.exec(xml)) !== null && videos.length < VIDEO_COUNT) {
    const entry = entryMatch[1]
    const id = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1]
    const title = entry.match(/<title>(.*?)<\/title>/)?.[1]
    const published = entry.match(/<published>(.*?)<\/published>/)?.[1]

    if (id && title && published) {
      videos.push({ id, title: decodeXmlEntities(title), publishedAt: published })
    }
  }

  return videos
}

export async function GET() {
  try {
    const response = await fetch(FEED_URL, { next: { revalidate: 3600 } })
    if (!response.ok) {
      return NextResponse.json({ videos: [] }, { status: 502 })
    }

    const xml = await response.text()
    const videos = parseVideos(xml)

    return NextResponse.json({ videos })
  } catch {
    return NextResponse.json({ videos: [] }, { status: 502 })
  }
}
