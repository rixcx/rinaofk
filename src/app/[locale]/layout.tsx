import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Ubuntu } from "next/font/google";

import Script from 'next/script';

import '@/app/[locale]/common/destyle.css';
import '@/app/[locale]/common/variables.css';
import '@/app/[locale]/common/root.css';

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const ubuntu = Ubuntu({
  weight: ['300','400','500','700'],
  subsets: ['latin'],
})

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

const messages = useMessages();

  return (
  <>
    <html lang={locale}>
     <head>
        <title>rinaofk</title>
        <meta name='description' content='Hello. I’m Rina, Web Designer and developer.' />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <link
          rel="icon"
          href="/android-chrome-192x192.png"
          type="image/png"
          sizes="192x192"
        />
        <Script
          strategy="afterInteractive"
          src={"https://www.googletagmanager.com/gtag/js?id=G-622R268FT9"}
        />
        <Script
          strategy="afterInteractive"
          id="gtag-config"
          >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-622R268FT9');
          `}
        </Script>
      </head>
      <body className={ubuntu.className}>
      
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  </>
  );
}
