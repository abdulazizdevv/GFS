import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../styles/globals.css';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import '@smastrom/react-rating/style.css';
import CookieConsent from './components/cookie-permission';
import Script from 'next/script';

// Poppins fontni ulash
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'GFS',
  description: 'GFS GROUP LLC',
  generator: 'Next.js',
  applicationName: 'GFS GROUP LLC',
  referrer: 'origin-when-cross-origin',
  keywords: ['gfs group llc', 'GFS', 'GFS GROUP LLC'],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://gfs-groupllc.com/'),
  alternates: {
    canonical: 'https://gfs-groupllc.com/',
  },
  openGraph: {
    url: process.env.NEXT_PUBLIC_DOMAIN,
    images: `${process.env.NEXT_PUBLIC_DOMAIN}/logo.jpg`,
    type: 'website',
    siteName: 'GFS GROUP LLC',
    title: 'GFS',
    description: 'GFS GROUP LLC',
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
    ],
    apple: {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-icon.png',
    },
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=AW-17422256483'
        />
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17422256483');
          `}
        </Script>
      </head>
      <body className={poppins.variable}>
        <Provider>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </Provider>
      </body>
    </html>
  );
}
