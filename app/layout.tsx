import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost, DM_Mono } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/lib/lenis'
import Cursor from '@/components/ui/Cursor'
import Grain from '@/components/ui/Grain'
import ProgressBar from '@/components/ui/ProgressBar'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/JsonLd'
import { GoogleAnalytics } from '@next/third-parties/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400'],
  variable: '--font-jost',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'REVOLQ — Digital Agency, Kerala',
    template: '%s | REVOLQ'
  },
  description: 'REVOLQ is a digital agency in Kerala building Next.js websites, SEO systems, and AI automations for businesses that refuse to be invisible.',
  keywords: [
    'digital agency Kerala',
    'web development Kerala', 
    'SEO agency Kottayam',
    'AI automation India',
    'Next.js agency Kerala',
    'WhatsApp automation',
    'Google Business Profile Kerala'
  ],
  metadataBase: new URL('https://revolq.in'),
  openGraph: {
    title: 'REVOLQ — Digital Agency, Kerala',
    description: 'We build digital systems that work while you sleep.',
    url: 'https://revolq.in',
    siteName: 'REVOLQ',
    images: [{ 
      url: '/og-image.jpg', 
      width: 1200, 
      height: 630 
    }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REVOLQ — Digital Agency, Kerala',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${dmMono.variable}`}>
      <body>
        <JsonLd />
        <Grain />
        <ProgressBar />
        <Cursor />
        <LenisProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LenisProvider>
        <GoogleAnalytics gaId="REPLACE_WITH_GA_ID" />
      </body>
    </html>
  )
}
