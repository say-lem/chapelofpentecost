import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'St. Aidan\'s Anglican Church',
  description: 'An Orthodox Anglican parish — rooted in ancient faith, alive in worship.',
  keywords: 'Anglican, Orthodox, Church, Traditional, Worship, Parish',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
