import React from "react"
import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zbeshtech.com'),
  title: 'zBesh Tech Inc. - Systems That Learn',
  description: 'Building intelligent systems through feedback-driven architecture. Collaborate with zBesh Tech on your next project.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://zbeshtech.com/',
    title: 'zBesh Tech Inc. - Systems That Learn',
    description: 'Building intelligent systems through feedback-driven architecture. Collaborate with zBesh Tech on your next project.',
    siteName: 'zBesh Tech',
    images: [{ url: '/apple-icon.png', width: 512, height: 512, alt: 'zBesh Tech logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'zBesh Tech Inc. - Systems That Learn',
    description: 'Building intelligent systems through feedback-driven architecture. Collaborate with zBesh Tech on your next project.',
    images: [{ url: '/apple-icon.png', width: 512, height: 512, alt: 'zBesh Tech logo' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-F1MGQHW4JZ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F1MGQHW4JZ');
          `}
        </Script>
      </body>
    </html>
  )
}
