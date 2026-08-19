import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Blue Ox Kampus, Raise. Equip. Send.',
  description: 'Blue Ox Kampus exists to raise, equip and send faith-driven creatives from Africa to places where the gospel is least accessible. Filmmakers, musicians, designers, developers, photographers, storytellers raised here, sent everywhere.',
  keywords: ['faith-driven creatives', 'Christian mission', 'Africa sending', 'missionary creatives', 'gospel mission', 'Uganda', 'Blue Ox Kampus', 'creative missionaries', 'church planting', 'mission sending', 'raise equip send', 'faith and craft', 'Africa Christianity', 'kingdom mission', 'creative training', 'filmmakers missionaries', 'music mission'],

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
    title: 'Blue Ox Kampus, Raise. Equip. Send.',
    description: '5.5 billion people don\'t know Jesus. Blue Ox Kampus is building a pathway, raising faith-driven creatives from Africa, equipping them for the work, and sending them where the gospel is least accessible.',
    url: 'https://www.blueoxkampus.com',
    siteName: 'Blue Ox Kampus',
    images: [
      {
        url: '/assets/images/favicon.png',
        width: 1200,
        height: 630,
        alt: 'Blue Ox Kampus, Raise. Equip. Send.'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Ox Kampus, Raise. Equip. Send.',
    description: 'We have the message. Now we need people who can carry it. Blue Ox Kampus raises, equips and sends faith-driven creatives from Africa to the least-reached places on earth.',
    images: ['/assets/images/favicon.png'],
    site: '@blueoxjobs',
    creator: '@blueoxjobs'
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
    icon: [
      { url: '/assets/images/favicon.png', type: 'image/png' }
    ],
    shortcut: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
};

export default function RootLayout({ children }:{children:ReactNode}){
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#F58220" />
        
        {/* Favicon References */}
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/images/favicon.png" />
        
        {/* GTM - Data Layer Initialization */}
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];`
        }} />
        
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-GTM-ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YOUR-GTM-ID');
          `
        }} />
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
              description: "Blue Ox Kampus exists to raise, equip and send faith-driven creatives from Africa to places where the gospel is least accessible. Filmmakers, musicians, photographers, designers, developers and storytellers raised here, sent everywhere.",
              mission: "Raise faith-driven creatives from Africa. Equip them for the work. Send them where the gospel is least accessible. Help them multiply.",
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Western Uganda',
                addressLocality: 'Nakivale Settlement',
                addressCountry: 'Uganda'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'info@blueoxkampus.com',
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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,700&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&family=Exo+2:wght@300;400;500;600;700;800;900&family=Bebas+Neue&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-black">
        {/* Google Tag Manager (noscript block) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-YOUR-GTM-ID"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}








