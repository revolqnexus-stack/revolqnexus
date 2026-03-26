import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/lib/lenis'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { GoogleAnalytics } from '@next/third-parties/google'

const serif = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'REVOLQ — Digital Agency',
    template: '%s | REVOLQ'
  },
  description: 'Building systems that work. Electric brutalism meets digital excellence.',
  metadataBase: new URL('https://revolq.in'),
  openGraph: {
    title: 'REVOLQ — Digital Agency',
    description: 'Building systems that work.',
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
    title: 'REVOLQ — Digital Agency',
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
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {/* Liquid Background */}
        <div className="liquid-bg">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        
        <LenisProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
        <GoogleAnalytics gaId="REPLACE_WITH_GA_ID" />
      </body>
    </html>
  )
}
