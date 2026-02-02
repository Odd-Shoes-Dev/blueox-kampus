import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Blue OX Kampus — AI & VR Innovation',
  description: "Blue OX Kampus — Uganda's AI & VR innovation kampus. Training, creation and opportunity — industry-grade simulators, labs, and career pipelines in Mbarara.",
  keywords: ['AI', 'VR', 'simulation', 'training', 'Mbarara', 'Uganda', 'tech kampus', 'skills verification', 'Blue OX'],
  authors: [{ name: 'Blue OX Kampus', url: 'https://blueoxjobs.eu' }],
  generator: 'Next.js',
  applicationName: 'Blue OX Kampus',
  referrer: 'origin-when-cross-origin',
  creator: 'Blue OX Kampus',
  publisher: 'Blue OX Kampus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blueoxjobs.eu'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Blue OX Kampus — AI & VR Innovation',
    description: "Blue OX Kampus — Uganda's AI & VR innovation kampus. Training, creation and opportunity in one place.",
    url: 'https://blueoxjobs.eu',
    siteName: 'Blue OX Kampus',
    images: [
      { 
        url: '/assets/images/logo.png', 
        width: 1200,
        height: 630,
        alt: 'Blue OX Kampus — AI & VR Innovation' 
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue OX Kampus — AI & VR Innovation',
    description: "Blue OX Kampus — industry-grade AI & VR simulators, training and career pipelines in Mbarara, Uganda.",
    images: ['/assets/images/logo.png'],
    site: '@blueoxjobs'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
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
  manifest: '/manifest.json'
};

export default function RootLayout({ children }:{children:ReactNode}){
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="theme-color" content="#f38131" />
        <meta name="msapplication-TileColor" content="#05080f" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://blueoxjobs.eu" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/logo.png" />
        <link rel="mask-icon" href="/assets/images/logo.png" color="#f38131" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Blue OX Kampus',
              alternateName: 'BlueOX Kampus',
              url: 'https://blueoxjobs.eu',
              logo: 'https://blueoxjobs.eu/assets/images/logo.png',
              description: "Uganda's AI & VR innovation kampus. Training, creation and opportunity — industry-grade simulators, labs, and career pipelines in Mbarara.",
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mbarara',
                addressCountry: 'Uganda'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://blueoxjobs.eu'
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
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
