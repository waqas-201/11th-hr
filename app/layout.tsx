import React from "react"
import type { Metadata, Viewport } from 'next'
import { Source_Sans_3 } from 'next/font/google'

import './globals.css'

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pico - Global Brand Activation Agency',
  description:
    'Shaping Brand Moments Across The Globe. A global communications and brand activation agency with offices in 36 cities, blending local expertise with worldwide vision.',
  keywords: [
    'brand activation',
    'communications strategy',
    'brand strategy',
    'experience design',
  ],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#001a00',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${sourceSans.variable} font-sans antialiased`} style={{ backgroundColor: '#000000' }}>
        {children}
      </body>
    </html>
  )
}