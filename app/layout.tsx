import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chapel of Pentecost',
  description: 'An Orthodox Anglican church — rooted in ancient faith, alive in worship.',
  keywords: 'Anglican, Orthodox, Church, Traditional, Worship, Parish',
  icons: {
    icon: '/favicon-16x16.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
