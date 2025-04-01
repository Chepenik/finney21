import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finney21 | Bitcoin Education & Consulting',
  description: 'Curated Bitcoin resources to help you understand and adopt better money',
  keywords: 'Bitcoin, Bitcoin education, cryptocurrency, Bitcoin consulting, inflation protection, Bitcoin resources, Finney21, digital assets, Bitcoin adoption',
  openGraph: {
    title: 'Finney21 | Bitcoin Education & Consulting',
    description: 'Curated Bitcoin resources to help you understand and adopt better money',
    url: 'https://finney21.com',
    siteName: 'Finney21',
    images: [
      {
        url: 'https://i.nostr.build/H6RPpDiRHc5nZmOn.png',
        width: 600,
        height: 315,
        alt: 'Finney21',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finney21 | Bitcoin Education & Consulting',
    description: 'Curated Bitcoin resources to help you understand and adopt better money',
    creator: '@NobodyCaribou',
    images: ['https://i.nostr.build/H6RPpDiRHc5nZmOn.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://finney21.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
