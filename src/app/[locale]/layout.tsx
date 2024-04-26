import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Ubuntu } from "next/font/google";

import './common/destyle.css';
import './common/variables.css';
import './common/root.css';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import LocaleSwitcher from '../../components/LocaleSwitcher'

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
      </head>
      <body className={ubuntu.className}>
      <LocaleSwitcher />
      
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
