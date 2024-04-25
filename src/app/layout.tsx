import { Ubuntu } from "next/font/google";

import './common/destyle.css';
import './common/variables.css';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const ubuntu = Ubuntu({
  weight: ['300','400','500','700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <>
    <html lang="en">
     <head>
        <title>rinaofk</title>
        <meta name='description' content='Hello. I’m Rina, Web Designer and developer.' />
      </head>
      <body className={ubuntu.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  </>
  );
}
