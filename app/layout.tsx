import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Blue OX Kampus — AI & VR Innovation',
  description: "Blue OX Kampus — Uganda's AI & VR innovation campus. Training, creation and opportunity — industry-grade simulators, labs, and career pipelines in Mbarara.",
  keywords: ['AI', 'VR', 'simulation', 'training', 'Mbarara', 'Uganda', 'tech campus', 'skills verification', 'Blue OX'],
  authors: [{ name: 'Blue OX Kampus', url: 'https://blueoxjobs.eu' }],
  openGraph: {
    title: 'Blue OX Kampus — AI & VR Innovation',
    description: "Blue OX Kampus — Uganda's AI & VR innovation campus. Training, creation and opportunity in one place.",
    url: 'https://blueoxjobs.eu',
    siteName: 'Blue OX Kampus',
    images: [
      { url: '/assets/images/logo.png', alt: 'Blue OX Kampus — AI & VR Innovation' }
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
  }
};

export default function RootLayout({ children }:{children:ReactNode}){
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="theme-color" content="#05080f" />
        <link rel="canonical" href="https://blueoxjobs.eu" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/assets/images/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
