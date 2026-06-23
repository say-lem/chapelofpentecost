import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Chapel of Pentecost',
  description: 'Reflections, teachings, and news from the parish of Chapel of Pentecost.',
}

const BLOGGER_FEED_URL =
  'https://pentecostalfires.blogspot.com/feeds/posts/default?alt=json&max-results=9'

interface BloggerEntry {
  title: { $t: string }
  published: { $t: string }
  summary?: { $t: string }
  content?: { $t: string }
  link: Array<{ rel: string; href: string }>
  'media$thumbnail'?: { url: string }
}

interface BloggerFeedResponse {
  feed?: {
    entry?: BloggerEntry[]
  }
}

interface Post {
  id: string
  title: string
  date: string
  excerpt: string
  link: string
  image: string | null
}

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(BLOGGER_FEED_URL, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const data: BloggerFeedResponse = await res.json()
    const entries = data.feed?.entry ?? []
    return entries.map((e, i) => {
      const alternateLink = e.link.find((l) => l.rel === 'alternate')?.href ?? '#'
      const rawExcerpt = e.summary?.$t || stripHtml(e.content?.$t ?? '')
      const excerpt = stripHtml(rawExcerpt).slice(0, 200).trimEnd() + '…'
      let image = e['media$thumbnail']?.url ?? null
      if (image) image = image.replace(/\/s[0-9]+-c\//, '/s800-c/')
      return {
        id: String(i),
        title: e.title.$t,
        date: formatDate(e.published.$t),
        excerpt,
        link: alternateLink,
        image,
      }
    })
  } catch {
    return []
  }
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, '').replace(/&[^;]+;/g, ' ').trim()
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function BlogPage() {
  const posts = await getPosts()
  const isEmpty = posts.length === 0

  return (
    <>
      {/* Hero */}
      <div
        className="relative pt-40 pb-24 text-center overflow-hidden"
        style={{ backgroundColor: '#06091A' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&auto=format&fit=crop&q=20")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(6,9,26,0.85)' }} />

        <div className="relative max-w-3xl mx-auto px-6">
          <p
            className="font-sans text-[11px] tracking-[0.3em] uppercase mb-5"
            style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.3em' }}
          >
            From the Church
          </p>
          <h1
            className="font-display text-5xl md:text-6xl font-light mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#FDFAF4' }}
          >
            The Pentecostal <em className="italic" style={{ color: '#E8C060' }}>Fire</em>
          </h1>
          <p
            className="font-body text-lg"
            style={{ fontFamily: 'EB Garamond, Georgia, serif', color: 'rgba(237,227,204,0.65)', fontSize: '20px', lineHeight: 1.7 }}
          >
            Reflections, teachings, and stories from the heart of our common life together.
          </p>
          <div
            className="mt-8 h-px max-w-xs mx-auto"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,151,58,0.5), transparent)' }}
          />
        </div>
      </div>

      {/* Posts grid */}
      <main className="py-24" style={{ backgroundColor: '#FDFAF4' }}>
        <div className="max-w-6xl mx-auto px-6">
          {isEmpty ? (
            <p
              className="text-center"
              style={{ fontFamily: 'EB Garamond, Georgia, serif', color: '#8C7B6B', fontSize: '18px' }}
            >
              No posts found. Check back soon.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <a
              href="https://pentecostalfires.blogspot.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-[12px] tracking-[0.2em] uppercase transition-opacity hover:opacity-70"
              style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '12px', letterSpacing: '0.2em' }}
            >
              View all posts on Blogspot →
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col" style={{ border: '1px solid rgba(10,14,42,0.1)' }}>
      <div className="relative overflow-hidden" style={{ height: '220px', backgroundColor: '#E8E0D0' }}>
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#E8E0D0' }}>
            <svg viewBox="0 0 32 32" fill="none" className="w-10 h-10 opacity-30">
              <rect x="14" y="2" width="4" height="28" fill="#C9973A" />
              <rect x="4" y="10" width="24" height="4" fill="#C9973A" />
            </svg>
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,14,42,0.4) 0%, transparent 60%)' }}
        />
      </div>

      <div className="p-6 flex flex-col flex-1" style={{ backgroundColor: '#fff' }}>
        <p
          className="font-sans text-[10px] tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '10px', letterSpacing: '0.2em' }}
        >
          {post.date}
        </p>
        <h2
          className="font-display text-2xl font-medium mb-3"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#0A0E2A', lineHeight: 1.25 }}
        >
          {post.title}
        </h2>
        <p
          className="font-body text-base leading-relaxed flex-1"
          style={{ fontFamily: 'EB Garamond, Georgia, serif', color: '#8C7B6B', fontSize: '16px', lineHeight: 1.7 }}
        >
          {post.excerpt}
        </p>
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex items-center gap-2 group-hover:gap-3 transition-all duration-300 w-fit"
        >
          <span
            className="font-sans text-[11px] tracking-wider uppercase"
            style={{ fontFamily: 'Jost, sans-serif', color: '#C9973A', fontSize: '11px', letterSpacing: '0.15em' }}
          >
            Read More
          </span>
          <span style={{ color: '#C9973A' }}>→</span>
        </a>
      </div>
    </article>
  )
}
