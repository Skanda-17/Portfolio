import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { profile } from '@/lib/profile'
import FloatingNav from '@/components/FloatingNav'
import ScrollProgress from '@/components/ui/ScrollProgress'
import LoadingScreen from '@/components/ui/LoadingScreen'
import Footer from '@/components/sections/Footer'

// Inter for UI / body copy.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

// Playfair Display: an elegant, editorial serif for headings and the name.
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  keywords: [
    'Artificial Intelligence Engineer',
    'Machine Learning Engineer',
    'Deep Learning',
    'Computer Vision',
    'Generative AI',
    'MLOps',
    'Data Science',
    profile.name,
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  openGraph: {
    type: 'website',
    url: profile.siteUrl,
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    siteName: `${profile.name} — Portfolio`,
    images: [{ url: '/ai-hero.png', width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} | ${profile.title}`,
    description: profile.summary,
    images: ['/ai-hero.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: profile.siteUrl },
}

export const viewport: Viewport = {
  themeColor: '#0c0a09',
  width: 'device-width',
  initialScale: 1,
}

// Structured data helps search engines understand the page (SEO).
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  url: profile.siteUrl,
  email: profile.email,
  address: { '@type': 'PostalAddress', addressLocality: profile.location },
  sameAs: [profile.github, profile.linkedin, profile.instagram],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <ScrollProgress />
        <FloatingNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
