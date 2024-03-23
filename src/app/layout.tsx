'use client'
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

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
    <Global
      styles={css`
        *, *:before, *:after {
          box-sizing: border-box;
        }
        
        body {
          font-size: 100%;
          font-family: sans-serif;
          font-weight: 400;
          color: var(--color-black);
          background-color: var(--color-background);
        }
      `}
    />
  
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
