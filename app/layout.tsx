import type { Metadata, Viewport } from 'next'
import Navbar from '@/components/Navbar'
import './globals.css'

const SITE_URL = 'https://chapelofpentecost.com.ng'
const SITE_NAME = 'Chapel of Pentecost Anglican Church'
const SITE_DESCRIPTION =
  'Chapel of Pentecost is an Orthodox Anglican church at the hospital chaplaincy of the Federal Neuro-Psychiatric Hospital, New Haven, Enugu — rooted in ancient faith, alive in Spirit-filled worship.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Anglican church Enugu',
    'Orthodox Anglican',
    'Chapel of Pentecost',
    'Federal Neuro-Psychiatric Hospital chaplaincy',
    'church New Haven Enugu',
    'hospital chaplaincy Enugu',
    'Anglican worship Nigeria',
  ],
  authors: [{ name: SITE_NAME }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/favicon-16x16.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0E2A',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpeg`,
  image: `${SITE_URL}/church-interior.JPG`,
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'FNPH Chime Avenue, New Haven',
    addressLocality: 'Enugu',
    addressRegion: 'Enugu State',
    addressCountry: 'NG',
  },
  email: 'chapelofpentecostfnhe@gmail.com',
  sameAs: [
    'https://www.facebook.com/people/Chapel-of-Pentecost-FNHE/100070103357113/',
  ],
  foundingDate: '2004',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
