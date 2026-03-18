import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Blue Ox Kampus — AI & VR-Powered TVET Training for Refugees & Underserved Communities',
  description: "Blue Ox Kampus transforms traditional TVET through AI and VR simulation, delivering industry-aligned technical education to refugees, women, persons with disabilities, underserved youth, and students in Western Uganda. Next-generation vocational training bridging talent to opportunity.",
  keywords: ['TVET Uganda', 'VR training', 'AI-powered TVET', 'technical education', 'refugees', 'Uganda', 'Nakivale Settlement', 'vocational training', 'welding simulation', 'solar installation', 'women empowerment', 'disability inclusion', 'workforce development', 'Blue Ox Kampus', 'simulation-based training', 'modern TVET'],

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
    title: 'Blue Ox Kampus — AI & VR-Powered TVET Training',
    description: "Transforming traditional TVET through AI and VR simulation. Delivering technical training to refugees, women, persons with disabilities, underserved youth, and students across Western Uganda. Zero waste, maximum inclusion.",
    url: 'https://www.blueoxkampus.com',
    siteName: 'Blue Ox Kampus',
    images: [
      { 
        url: '/assets/images/logo.png', 
        width: 1200,
        height: 630,
        alt: 'Blue Ox Kampus — VR Technical Training for Underserved Communities' 
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Ox Kampus — AI & VR-Powered TVET',
    description: "Next-generation TVET using AI and VR simulation. Training refugees, women, persons with disabilities, and underserved youth in Western Uganda. 90% lower cost, zero waste, maximum inclusion.",
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
        <meta name="theme-color" content="#e05a3a" />
        <link rel="icon" type="image/x-icon" href="/assets/images/logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/logo.png" />
        <link rel="mask-icon" href="/assets/images/logo.png" color="#e05a3a" />
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
              description: "Blue Ox Kampus delivers immersive, industry-aligned technical education to refugees, women, persons with disabilities, underserved youth, and students in Western Uganda through VR-based training programs. From isolation to industry.",
              mission: "Bridging the last mile between talent and opportunity through accessible, cost-efficient VR-based technical education for underserved communities.",
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
                name: 'Western Uganda'
              },
              audience: {
                '@type': 'Audience',
                audienceType: ['Refugees', 'Women', 'Persons with Disabilities', 'Out-of-school Youth', 'Students']
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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,700&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  );
}








