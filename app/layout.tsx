import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Blue Ox Kampus — Ship Real Work. Build a Career. Fund a Movement.',
  description: "Blue Ox Kampus pairs talented software builders and creators with real startups in execution pods. Join a global movement: get international experience, fund kingdom initiatives, and ship products that matter. Pods in campus. Zero cost. Real impact.",
  keywords: ['execution pods', 'builder placement', 'startup experience', 'technical talent', 'software pods', 'kingdom capital', 'faith-driven investing', 'student placement', 'university partnerships', 'product shipping', 'developer training', 'career pathways', 'international experience', 'Blue Ox Kampus', 'tech ecosystem', 'impact investing'],

  authors: [{ name: 'Blue Ox Kampus', url: 'https://www.blueoxkampus.com' }],
  generator: 'Next.js',
  applicationName: 'Blue Ox Kampus',
  referrer: 'origin-when-cross-origin',
  creator: 'Blue Ox Kampus',
  publisher: 'Blue Ox Kampus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.blueoxkampus.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Blue Ox Kampus — Ship Real Work. Build a Career. Fund a Movement.',
    description: "Execution pods connecting builders with startups. Gain international experience, earn certificates, and contribute to kingdom-aligned initiatives. Work from campus. Compete weekly. Get placed in real roles.",
    url: 'https://www.blueoxkampus.com',
    siteName: 'Blue Ox Kampus',
    images: [
      { 
        url: '/assets/images/logo.png', 
        width: 1200,
        height: 630,
        alt: 'Blue Ox Kampus — Builder Execution Pods & Startup Placements' 
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Ox Kampus — Execution Pods for Builders',
    description: "Join execution pods with real startups. Get international experience, ship real products, and fund kingdom initiatives. Pay nothing. Work from campus. Compete for premium placements.",
    images: ['/assets/images/logo.png'],
    site: '@blueoxjobs'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/assets/images/logo.png',
    shortcut: '/assets/images/logo.png',
    apple: '/assets/images/logo.png',
  },
};

export default function RootLayout({ children }:{children:ReactNode}){
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#F58220" />
        <link rel="icon" type="image/x-icon" href="/assets/images/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/logo.png" />
        <link rel="mask-icon" href="/assets/images/logo.png" color="#F58220" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Blue Ox Kampus',
              alternateName: 'BlueOX Kampus',
              url: 'https://www.blueoxkampus.com',
              logo: 'https://www.blueoxkampus.com/assets/images/logo.png',
              description: "Blue Ox Kampus is a global ecosystem connecting talented builders, universities, and faith-driven investors. We operate execution pods where builders ship real products, students gain international experience, and capital funds kingdom initiatives. From isolation to impact.",
              mission: "Connecting talented builders with execution pods that ship real products, while channeling returns into kingdom-aligned initiatives and global impact.",
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Western Uganda',
                addressLocality: 'Nakivale Settlement',
                addressCountry: 'Uganda'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'blueoxrecruit@gmail.com',
                telephone: '+3197010209759',
                url: 'https://www.blueoxkampus.com'
              },
              areaServed: {
                '@type': 'Place',
                name: 'Global (Poland, Netherlands, UAE, Gulf)'
              },
              audience: {
                '@type': 'Audience',
                audienceType: ['Builders', 'Software Developers', 'Universities', 'Faith-Driven Investors', 'Startups', 'Impact Partners']
              },
              sameAs: [
                'https://twitter.com/blueoxjobs'
              ]
            })
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('scrollRestoration' in history) {
              history.scrollRestoration = 'manual';
            }
            window.addEventListener('load', function() {
              setTimeout(function() {
                window.scrollTo(0, 0);
              }, 0);
            });
          `
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,700&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&family=Exo+2:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}








