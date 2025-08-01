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
  description: 'General Freight Solutions',
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
